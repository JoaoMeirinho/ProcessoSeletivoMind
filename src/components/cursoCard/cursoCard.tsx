import { ReactNode } from "react";
import styles from "./cursoCard.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

// interface props {
//   title: string;
//   children: ReactNode;
// }

export default function CursoCard({
  id,
  nome,
  professorResponsavel,
  categoria,
  descricao,
  imagem,
  functionDelete,
}) {
  // const [error, setError] = useState("");
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{nome}</h2>
      <p>
        Descrição: <b>{descricao}</b>
      </p>
      <span>
        Categoria: <b>{categoria}</b>
      </span>
      <p>
        Professor: <b>{professorResponsavel}</b>
      </p>
      <div className={styles.option}>
        <Link
          className={styles.edit}
          href={{
            pathname: `/curso`,
            query: {
              id: id,
            },
          }}
        >
          Editar Curso
        </Link>
        <button
          type="button"
          className={styles.delete}
          onClick={(e) => functionDelete(e, id)}
        >
          Deletar curso
        </button>
      </div>
    </div>
  );
}
