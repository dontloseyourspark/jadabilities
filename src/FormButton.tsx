import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function FormButton({ slots = [] }: { slots?: string[] }) {
  return (
      <button className={styles["disabled"]}>
        <div className={styles["div-49"]}>
          <p className={styles["p-25"]}>{slots[0] ?? "Submit"}</p>
        </div>
        <div className={styles["icon-wrapper-2"]}>
          <div className={styles["icon-3"]}>
            <div className={styles["div-50"]}>
              <SvgGraphic className={styles["svg-7"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"613\"><use href=\"#svg-1118720463_170\" data-f2c-idx=\"614\"></use></svg>"} />
            </div>
          </div>
        </div>
      </button>
  )
}
