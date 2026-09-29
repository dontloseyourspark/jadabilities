import styles from "./styles.module.css"

export default function Footer({ slots = [] }: { slots?: string[] }) {
  return (
      <footer className={styles["desktop-2"]}>
        <div className={styles["container-4"]}>
          <div className={styles["grid-4x"]}>
            <div className={styles["brand"]}>
              <div className={styles["logo"]}>
                <a className={styles["logo-2"]} href="./">
                  <div className={styles["div"]}>
                    <div className={styles["div-2"]}>
                      <img className={styles["img"]} src={slots[0] ?? "https://framerusercontent.com/images/52dtBwVTz0lz7dFYnotwjst688.png?scale-down-to=512&width=2048&height=2048"} alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div className={styles["div-51"]}>
                <p className={styles["p-26"]}>{slots[1] ?? "Let’s Bring Your Brand to Life"}</p>
              </div>
            </div>
            <div className={styles["footer-links-wrapper"]}>
              <div className={styles["links-wrapper"]}>
                <div className={styles["div-52"]}>
                  <p className={styles["p-27"]}>{slots[2] ?? "Menu"}</p>
                </div>
                <div className={styles["footer-links"]}>
                  <div className={styles["footer-link"]}>
                    <a className={styles["footer-link-2"]} href="./">
                      <div className={styles["div-53"]}>
                        <p className={styles["p-28"]}>{slots[3] ?? "About"}</p>
                      </div>
                    </a>
                  </div>
                  <div className={styles["footer-link"]}>
                    <a className={styles["footer-link-2"]} href="./#features">
                      <div className={styles["div-53"]}>
                        <p className={styles["p-28"]}>{slots[4] ?? "How I can help"}</p>
                      </div>
                    </a>
                  </div>
                  <div className={styles["footer-link"]}>
                    <a className={styles["footer-link-2"]} href="./#pricing">
                      <div className={styles["div-53"]}>
                        <p className={styles["p-28"]}>{slots[5] ?? "Pricing"}</p>
                      </div>
                    </a>
                  </div>
                  <div className={styles["footer-link"]}>
                    <a className={styles["footer-link-2"]} href="./#how-can-i-help">
                      <div className={styles["div-53"]}>
                        <p className={styles["p-28"]}>{slots[6] ?? "Testimonials"}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles["links-wrapper-2"]}>
                <div className={styles["div-52"]}>
                  <p className={styles["p-27"]}>{slots[7] ?? "Follow me:"}</p>
                </div>
                <div className={styles["footer-links-2"]}>
                  <div className={styles["footer-link"]}>
                    <a className={styles["footer-link-2"]} href="https://www.instagram.com/">
                      <div className={styles["div-53"]}>
                        <p className={styles["p-28"]}>{slots[8] ?? "Instagram"}</p>
                      </div>
                    </a>
                  </div>
                  <div className={styles["footer-link"]}>
                    <a className={styles["footer-link-2"]} href="https://www.linkedin.com/">
                      <div className={styles["div-53"]}>
                        <p className={styles["p-28"]}>{slots[9] ?? "Facebook"}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles["links-wrapper-3"]}>
                <div className={styles["div-54"]}>
                  <p className={styles["p-29"]}>{slots[10] ?? "Contact"}</p>
                </div>
                <div className={styles["footer-links-3"]}>
                  <div className={styles["footer-link-3"]}>
                    <a className={styles["footer-link-4"]} href="https://jadeabilities@gmail.com">
                      <div className={styles["div-55"]}>
                        <p className={styles["p-30"]}>{slots[11] ?? "jadeabilities@gmail.com"}</p>
                      </div>
                    </a>
                  </div>
                  <div className={styles["footer-link-3"]}>
                    <a className={styles["footer-link-5"]}>
                      <div className={styles["div-56"]}>
                        <p className={styles["p-30"]}>{slots[12] ?? "+27 (0) 61 230 9197"}</p>
                      </div>
                    </a>
                  </div>
                  <div className={styles["footer-link-3"]}>
                    <a className={styles["footer-link-5"]}>
                      <div className={styles["div-56"]}>
                        <p className={styles["p-30"]}>{slots[13] ?? "Centurion, South Africa"}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["link"]}>
            <div className={styles["div-57"]}>
              <p className={styles["p-31"]}>{slots[14] ?? "Copyright @ 2026"}</p>
            </div>
          </div>
        </div>
      </footer>
  )
}
