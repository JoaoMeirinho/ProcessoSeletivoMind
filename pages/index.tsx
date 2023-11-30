import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { verifica } from "../services/user";

import styles from "../styles/Login.module.css";

import CursoCard from "../src/components/cursoCard/cursoCard";
import Input from "../src/components/input/input";
import Button from "../src/components/button/button";
import Link from "next/link";
export default function Home() {
  const [cursoData, setCursoData] = useState([]);

  const cursos = async () => {};

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/curso/getCurso", {
        method: "GET",
      });
      const cursos = await res.json();
      // console.log();
      setCursoData(cursos);
    })();
    console.log("request feito");
  }, []);

  return (
    <>
      <div className={styles.nav}>
        <Link className={styles.link} href="/curso">
          Adicionar curso
        </Link>
      </div>
      <div className={styles.background}>
        {cursoData.map((item) => (
          <CursoCard
            id={item.id}
            nome={item.nome}
            professorResponsavel={item.professor_responsavel}
            categoria={item.categoria}
            descricao={item.descricao}
          />
        ))}
      </div>
    </>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  try {
    const token = getCookie("authorization", { req, res });
    if (!token) throw new Error("Token inválido");

    verifica(token);

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
