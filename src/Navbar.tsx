import styles from "./styles.module.css"
import { SvgGraphic } from "./RichText"

export default function Navbar({ slots = [] }: { slots?: string[] }) {
  return (
      <nav className={styles["desktop"]}>
        <div className={styles["container"]}>
          <div className={styles["nav-content-wrapper"]}>
            <div className={styles["logo-wrapper"]}>
              <div className={styles["logo"]}>
                <a className={styles["logo-2"]} href="./">
                  <div className={styles["div"]}>
                    <div className={styles["div-2"]}>
                      <img className={styles["img"]} src={slots[0] ?? "https://framerusercontent.com/images/52dtBwVTz0lz7dFYnotwjst688.png?scale-down-to=512&width=2048&height=2048"} alt="" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles["nav-menu"]}>
              <div className={styles["nav-link"]}>
                <a className={styles["nav-link-2"]} href="./#about">
                  <div className={styles["div-3"]}>
                    <p className={styles["p"]}>{slots[1] ?? "About"}</p>
                  </div>
                </a>
              </div>
              <div className={styles["nav-link-3"]}>
                <a className={styles["nav-link-4"]} href="./#how-can-i-help">
                  <div className={styles["div-4"]}>
                    <p className={styles["p-2"]}>{slots[2] ?? "How I can help"}</p>
                  </div>
                </a>
              </div>
              <div className={styles["nav-link-5"]}>
                <a className={styles["nav-link-6"]} href="./#pricing">
                  <div className={styles["div-5"]}>
                    <p className={styles["p-3"]}>{slots[3] ?? "Pricing"}</p>
                  </div>
                </a>
              </div>
              <div className={styles["nav-link-7"]}>
                <a className={styles["nav-link-8"]} href="./#testimonials">
                  <div className={styles["div-6"]}>
                    <p className={styles["p-4"]}>{slots[4] ?? "Testimonials"}</p>
                  </div>
                </a>
              </div>
            </div>
            <div className={styles["button-wrapper"]}>
              <div className={styles["button"]}>
                <a className={styles["primary"]} href="./#contact">
                  <div className={styles["text-wrapper"]}>
                    <div className={styles["div-7"]}>
                      <p className={styles["p-5"]}>{slots[5] ?? "Get in touch"}</p>
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
              </div>
            </div>
          </div>
        </div>
      </nav>
  )
}
