import { ReactNode } from "react";
import styles from "./loginCard.module.css";

interface props {
  title: string;
  children: ReactNode;
}

export default function LoginCard({ title, children }: props) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}
