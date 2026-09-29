import styles from "./styles.module.css"

export default function Label2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["green-2"]}>
        <div className={styles["dot"]} />
        <div className={styles["div-13"]}>
          <p className={styles["p-9"]}>{slots[0] ?? "How I can help"}</p>
        </div>
      </div>
  )
}
