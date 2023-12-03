import { useState, useEffect, ChangeEvent } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { verifica } from "../services/user";

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

  const handleFormEdit = (
    event: Event | ChangeEvent<HTMLSelectElement>,
    name: string
  ) => {
    setFormData({
      ...formData,
      [name]: (event.target! as HTMLInputElement | HTMLSelectElement).value,
    });
  };

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
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
          <label htmlFor="nome">Nome do curso</label>
          <Input
            name="nome"
            type="text"
            required
            placeholder="Nome do curso"
            value={formData.nome}
            onChange={(e: Event) => {
              handleFormEdit(e, "nome");
            }}
          />
          <label htmlFor="professor">Professor Responsável</label>
          <Input
            name="professor"
            type="text"
            placeholder="Professor responsável pelo curso"
            required
            value={formData.professor_responsavel}
            onChange={(e: Event) => {
              handleFormEdit(e, "professor_responsavel");
            }}
          />
          <label htmlFor="descricao">Descrição do curso</label>
          <Input
            name="descricao"
            type="text"
            placeholder="Uma breve descrição do curso"
            required
            value={formData.descricao}
            onChange={(e: Event) => {
              handleFormEdit(e, "descricao");
            }}
          />
          <label htmlFor="categoria">Categoria</label>
          <select
            name="categoria"
            value={formData.categoria}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              handleFormEdit(e, "categoria");
            }}
            required
            className={styles.select}
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

          <Button type="submit">{id ? "Editar curso" : "Criar curso"}</Button>
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </LoginCard>
    </div>
  );
}

export const getServerSideProps = async ({ req, res }: any) => {
  try {
    const token = getCookie("authorization", { req, res });
    if (!token) throw new Error("Token inválido");

    verifica(token as string);

    return {
      props: {},
    };
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
};
