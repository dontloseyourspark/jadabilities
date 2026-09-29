import styles from "./styles.module.css"

export default function FooterLink({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["footer-link-2"]} href="./">
        <div className={styles["div-53"]}>
          <p className={styles["p-28"]}>{slots[0] ?? "About"}</p>
        </div>
      </a>
  )
}
