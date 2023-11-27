import styles from "./input.module.css";

export default function Input(props: any) {
  return <input className={styles.input} {...props} />;
}
