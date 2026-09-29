import styles from "./styles.module.css"

export default function FooterLink2({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["footer-link-4"]} href="https://jadeabilities@gmail.com">
        <div className={styles["div-55"]}>
          <p className={styles["p-30"]}>{slots[0] ?? "jadeabilities@gmail.com"}</p>
        </div>
      </a>
  )
}
