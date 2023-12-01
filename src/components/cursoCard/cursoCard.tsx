import { ReactNode } from "react";
import styles from "./cursoCard.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

// interface props {
//   title: string;
//   children: ReactNode;
// }

export default function CursoCard({ id, nome, professorResponsavel, categoria, descricao, imagem  } ) {
  const router = useRouter();
  // const [error, setError] = useState("");

  const deleteCurso = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch("/api/curso/deleteCurso", {
        method: "POST",
        body: JSON.stringify({ id: id }),
      });
      const json = await response.json();
      if (response.status !== 201) throw new Error(json);
      router.push("/");
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{nome}</h2>
      <p>{descricao}</p>
      <span>{categoria}</span>
      <p>Professor: {professorResponsavel}</p>
      <Link href={{
       pathname: `/curso`,
       query: {
        id: id,
       }
      }}>Editar Curso</Link>
      <button type="button" className="delete-button" onClick={(e) => deleteCurso(e)}>Deletar curso</button>
    </div>
  );
}