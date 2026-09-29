import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Button({ slots = [] }: { slots?: string[] }) {
  return (
      <a className={styles["primary"]} href="./#contact">
        <div className={styles["text-wrapper"]}>
          <div className={styles["div-7"]}>
            <p className={styles["p-5"]}>{slots[0] ?? "Get in touch"}</p>
          </div>
        </div>
        <div className={styles["icon-wrapper"]}>
          <div className={styles["arrows-wrapper"]}>
            <div className={styles["arrow"]}>
              <div className={styles["div-8"]}>
                <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"42\"><use href=\"#svg-1118720463_170\" data-f2c-idx=\"43\"></use></svg>"} />
              </div>
            </div>
            <div className={styles["arrow-2"]}>
              <div className={styles["div-8"]}>
                <SvgGraphic className={styles["svg"]} html={"<svg style=\"width:100%;height:100%;\" viewBox=\"0 0 24 24\" preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" data-f2c-idx=\"46\"><use href=\"#svg-1118720463_170\" data-f2c-idx=\"47\"></use></svg>"} />
              </div>
            </div>
          </div>
        </div>
      </a>
  )
}
