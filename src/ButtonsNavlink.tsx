import styles from "./styles.module.css"

export default function ButtonsNavlink({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["nav-link-9"]} href="./#about">
        <div className={styles["div-9"]}>
          <p className={styles["p-6"]}>{slots[0] ?? "About"}</p>
        </div>
      </a>
  )
}
