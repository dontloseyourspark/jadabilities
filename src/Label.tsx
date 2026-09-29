import styles from "./styles.module.css"

export default function Label({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["green"]}>
        <div className={styles["dot"]} />
        <div className={styles["div-12"]}>
          <p className={styles["p-8"]}>{slots[0] ?? "About"}</p>
        </div>
      </div>
  )
}
