import { useState } from "react";
import Link from "next/link";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

import styles from "../styles/Login.module.css";

import LoginCard from "../src/components/loginCard/loginCard";
import Input from "../src/components/input/input";
import Button from "../src/components/button/button";

export default function CursoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    professor_responsavel: "",
    categoria: "Marketing",
    descricao: "",
    imagem: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleFormEdit = (event, name) => {
    setFormData({ ...formData, [name]: event.target.value });
  };

  const handleForm = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch("/api/curso/createCurso", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const json = await response.json();
      if (response.status !== 201) throw new Error(json);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.background}>
      <LoginCard title="Cadastrar curso">
        <form onSubmit={handleForm} action="" className={styles.form}>
          <Input
            type="text"
            placeholder="Nome do curso"
            value={formData.nome}
            onChange={(e) => {
              handleFormEdit(e, "nome");
            }}
          />
          <Input
            type="text"
            placeholder="Professor responsável pelo curso"
            required
            value={formData.professor_responsavel}
            onChange={(e) => {
              handleFormEdit(e, "professor_responsavel");
            }}
          />
          <Input
            type="text"
            placeholder="Uma breve descrição do curso"
            required
            value={formData.descricao}
            onChange={(e) => {
              handleFormEdit(e, "descricao");
            }}
          />
          <select
            value={formData.categoria === "" ? null : formData.categoria}
            onChange={(e) => {
              handleFormEdit(e, "categoria");
            }}
            required
          >
            <option selected value="Marketing">
              Marketing
            </option>
            <option value="TI">TI</option>
            <option value="Estatística">Estatística</option>
            <option value="Artes">Artes</option>
          </select>
          <Input
            type="file"
            placeholder="Selecione uma imagem que represente o curso"
            required
            value={formData.imagem}
            onChange={(e) => {
              handleFormEdit(e, "imagem");
            }}
          />

          <Button>Cadastrar curso</Button>
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </LoginCard>
    </div>
  );
}
