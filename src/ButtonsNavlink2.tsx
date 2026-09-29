import styles from "./styles.module.css"

export default function ButtonsNavlink2({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["nav-link-4"]} href="./#how-can-i-help">
        <div className={styles["div-4"]}>
          <p className={styles["p-2"]}>{slots[0] ?? "How I can help"}</p>
        </div>
      </a>
  )
}
