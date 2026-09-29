import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function HowItWork({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["how-it-works"] + " " + styles["rv-1"]} data-reveal style={{ transitionDelay: "693ms" }}>
        <div className={styles["text-wrapper-2"]}>
          <div className={styles["div-15"]}>
            <h4 className={styles["h4"]}>{slots[0] ?? "Social Media Management"}</h4>
          </div>
          <div className={styles["div-16"]}>
            <p className={styles["p-10"]}>{slots[1] ?? "Social media management is about keeping your online presence active, consistent and engaging. From planning and creating content to scheduling posts and managing comments and messages, I take care of the day-to-day details so your brand stays visible and connected with your audience."}</p>
          </div>
        </div>
        <div className={styles["link-button"]}>
          <a className={styles["link-button-2"]} href="./#contact">
            <div className={styles["div-17"]}>
              <p className={styles["p-11"]}>{slots[2] ?? "Discover More"}</p>
            </div>
            <div className={styles["icon"]}>
              <div className={styles["div-18"]}>
                <SvgGraphic className={styles["svg-3"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" focusable=\"false\" color=\"var(--token-e9edbccb-ef01-44e1-85d9-d2541653f3b1, rgb(20, 20, 20))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-e9edbccb-ef01-44e1-85d9-d2541653f3b1, rgb(20, 20, 20)); color: var(--token-e9edbccb-ef01-44e1-85d9-d2541653f3b1, rgb(20, 20, 20)); flex-shrink: 0;\" data-f2c-idx=\"172\"><g color=\"var(--token-e9edbccb-ef01-44e1-85d9-d2541653f3b1, rgb(20, 20, 20))\" weight=\"bold\" data-f2c-idx=\"173\"><path d=\"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z\" data-f2c-idx=\"174\"></path></g></svg>"} />
              </div>
            </div>
          </a>
        </div>
      </div>
  )
}
