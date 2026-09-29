import styles from "./styles.module.css"

export default function Logo({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["logo-2"]} href="./">
        <div className={styles["div"]}>
          <div className={styles["div-2"]}>
            <img className={styles["img"]} src={slots[0] ?? "https://framerusercontent.com/images/52dtBwVTz0lz7dFYnotwjst688.png?scale-down-to=512&width=2048&height=2048"} alt="" />
          </div>
        </div>
      </a>
  )
}
