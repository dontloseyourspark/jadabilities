import styles from "./styles.module.css"

export default function PricingButton({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["pricing-border-button"]} href="./#contact">
        <div className={styles["div-20"]}>
          <p className={styles["p-13"]}>{slots[0] ?? "Request Consultation"}</p>
        </div>
      </a>
  )
}
