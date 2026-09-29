import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Checkmark2({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["checkmark-2"]}>
        <div className={styles["icon-2"]}>
          <div className={styles["div-10"]}>
            <SvgGraphic className={styles["svg-4"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\" viewBox=\"0 0 24 24\" color=\"var(--token-2799aae5-8748-4b1f-b085-6820f7d5f7c3, rgb(31, 81, 76))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-2799aae5-8748-4b1f-b085-6820f7d5f7c3, rgb(31, 81, 76)); flex-shrink: 0;\" data-f2c-idx=\"311\"><path d=\"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z\" data-f2c-idx=\"312\"></path></svg>"} />
          </div>
        </div>
        <div className={styles["div-22"]}>
          <p className={styles["p-15"]}>{slots[0] ?? "Engaging, on-brand social content"}</p>
        </div>
      </div>
  )
}
