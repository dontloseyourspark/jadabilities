import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Material({ slots = [] }: { slots?: string[] }) {
  return (
      <div className={styles["div-10"]}>
        <SvgGraphic className={styles["svg-2"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\" viewBox=\"0 0 24 24\" color=\"var(--token-1eeffa50-d0e7-475a-ae85-eb2a3f2ffc02, rgb(255, 255, 255))\" style=\"user-select: none; width: 100%; height: 100%; display: inline-block; fill: var(--token-1eeffa50-d0e7-475a-ae85-eb2a3f2ffc02, rgb(255, 255, 255)); flex-shrink: 0;\" data-f2c-idx=\"59\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\" data-f2c-idx=\"60\"></path></svg>"} />
      </div>
  )
}
