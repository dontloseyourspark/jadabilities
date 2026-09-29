import styles from "./styles.module.css"

export default function Label3({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["white-2"]}>
        <div className={styles["dot-2"]} />
        <div className={styles["div-48"]}>
          <p className={styles["p-24"]}>{slots[0] ?? "Get in touch"}</p>
        </div>
      </div>
  )
}
