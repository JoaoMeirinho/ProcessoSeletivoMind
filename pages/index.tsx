import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { verifica } from "../services/user";

import styles from "../styles/Login.module.css";

import CursoCard from "../src/components/cursoCard/cursoCard";
import SearchBar from "../src/components/searchBar/searchBar";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Home() {
  const [cursoData, setCursoData] = useState([]);
  const router = useRouter();
  const [query, setQuery] = useState("");

  const getCursos = async () => {
    const res = await fetch("/api/curso/getCurso", {
      method: "GET",
    });
    const cursos = await res.json();
    setCursoData(cursos);
  };

  useEffect(() => {
    (async () => {
      await getCursos();
    })();
    console.log("request feito");
  }, []);

  const deleteCurso = async (
    event: React.FormEvent<HTMLFormElement>,
    id: string
  ) => {
    try {
      event.preventDefault();
      const response = await fetch("/api/curso/deleteCurso", {
        method: "POST",
        body: JSON.stringify({ id: id }),
      });
      const json = await response.json();
      if (response.status !== 201) throw new Error(json);
      await getCursos();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.backgound}>
      <div className={styles.nav}>
        <Link className={styles.link} href="/curso">
          Adicionar curso
        </Link>
        <h1 className={styles.title}>Seja Bem-vindo(a)!</h1>
        <SearchBar
          placeholder="Pesquisar"
          onChange={(event: Event) =>
            setQuery((event.target! as HTMLInputElement).value)
          }
        />
      </div>
      <h1 className={styles.title}>Cursos cadastrados</h1>
      <div className={styles.background}>
        {cursoData
          .filter((curso: any) => {
            if (query === "") {
              return curso;
            } else if (curso.nome.toLowerCase().includes(query.toLowerCase())) {
              return curso;
            }
          })
          .map((item: any, index: any, array: any[]) => {
            return (
              <>
                <CursoCard
                  id={item.id}
                  nome={item.nome}
                  professorResponsavel={item.professor_responsavel}
                  categoria={item.categoria}
                  descricao={item.descricao}
                  functionDelete={deleteCurso}
                />
              </>
            );
          })}
      </div>
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
