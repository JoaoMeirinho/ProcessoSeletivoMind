import { ReactNode } from "react";
import styles from "./button.module.css";

interface props {
  children: ReactNode;
  props?: any;
}

export default function Button({ children, ...props }: any) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
