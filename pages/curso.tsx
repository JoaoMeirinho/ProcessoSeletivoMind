import { useState, useEffect } from "react";
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
  const query = router.query;
  const id = query.id;

  useEffect(() => {
    (async () => {
      if (!router.isReady) return;
      if (id) {
        const res = await fetch(`/api/curso/getCurso?id=${id}`, {
          method: "GET",
        });
        const cursos = await res.json();
        console.log(cursos);
        setFormData({
          ...formData,
          nome: cursos.nome,
          professor_responsavel: cursos.professor_responsavel,
          categoria: cursos.categoria,
          descricao: cursos.descricao,
          imagem: cursos.imagem,
        });
      }
    })();
    console.log("request feito");
  }, [router.isReady]);

  console.log(query);
  console.log(id);

  const handleFormEdit = (event, name) => {
    setFormData({ ...formData, [name]: event.target.value });
  };

  const handleForm = async (event) => {
    try {
      event.preventDefault();
      let response;
      if (id) {
        response = await fetch("/api/curso/updateCurso", {
          method: "POST",
          body: JSON.stringify({
            id: id,
            ...formData,
          }),
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        response = await fetch("/api/curso/createCurso", {
          method: "POST",
          body: JSON.stringify(formData),
        });
      }
      const json = await response.json();
      if (response.status !== 201) throw new Error(json);
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.background}>
      <LoginCard title={id ? "Editar curso" : "Cadastrar curso"}>
        <form onSubmit={handleForm} action="" className={styles.form}>
          <Input
            type="text"
            placeholder="Nome do curso"
            value={formData.nome}
            onChange={(e: Event) => {
              handleFormEdit(e, "nome");
            }}
          />
          <Input
            type="text"
            placeholder="Professor responsável pelo curso"
            required
            value={formData.professor_responsavel}
            onChange={(e: Event) => {
              handleFormEdit(e, "professor_responsavel");
            }}
          />
          <Input
            type="text"
            placeholder="Uma breve descrição do curso"
            required
            value={formData.descricao}
            onChange={(e: Event) => {
              handleFormEdit(e, "descricao");
            }}
          />
          <select
            value={formData.categoria}
            onChange={(e) => {
              handleFormEdit(e, "categoria");
            }}
            required
          >
            <option value="Marketing">Marketing</option>
            <option value="TI">TI</option>
            <option value="Estatística">Estatística</option>
            <option value="Artes">Artes</option>
          </select>
          <Input
            style={{ display: "none" }}
            type="file"
            placeholder="Selecione uma imagem que represente o curso"
            onChange={(e: Event) => {
              handleFormEdit(e, "imagem");
            }}
          />

          <Input
            type="text"
            disabled
            required
            value={formData.imagem || "Nenhum arquivo foi selecionado"}
            // onChange={(e) => {
            //   handleFormEdit(e, "imagem");
            // }}
          />

          <button
            type="button"
            className="fileButton"
            onClick={(e) => {
              (
                document.querySelector("input[type=file]")! as HTMLElement
              ).click();
            }}
          >
            Escolher Imagem
          </button>

          <Button type="submit">{id ? "Editar curso" : "Criar curso"}</Button>
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </LoginCard>
    </div>
  );
}
