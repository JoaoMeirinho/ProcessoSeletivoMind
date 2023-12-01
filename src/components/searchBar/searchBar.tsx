import styles from "./searchBar.module.css";

export default function SearchBar(props: any) {
  return <input className={styles.bar} {...props} />;
}