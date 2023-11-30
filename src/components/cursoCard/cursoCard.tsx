import { ReactNode } from "react";
import styles from "./cursoCard.module.css";

// interface props {
//   title: string;
//   children: ReactNode;
// }

export default function CursoCard({ id, nome, professorResponsavel, categoria, descricao, imagem  } ) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{nome}</h2>
      <p>{descricao}</p>
      <span>{categoria}</span>
      <p>Professor: {professorResponsavel}</p>
    </div>
  );
}