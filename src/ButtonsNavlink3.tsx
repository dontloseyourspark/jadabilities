import styles from "./styles.module.css"

export default function ButtonsNavlink3({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["nav-link-8"]} href="./#testimonials">
        <div className={styles["div-6"]}>
          <p className={styles["p-4"]}>{slots[0] ?? "Testimonials"}</p>
        </div>
      </a>
  )
}
