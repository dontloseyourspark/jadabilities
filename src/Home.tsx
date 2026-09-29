import styles from "./styles.module.css"
import RevealWatcher from "./RevealWatcher"
import { SvgGraphic } from "./RichText"
import Navbar from "./Navbar"
import Logo from "./Logo"
import ButtonsNavlink from "./ButtonsNavlink"
import ButtonsNavlink2 from "./ButtonsNavlink2"
import ButtonsNavlink3 from "./ButtonsNavlink3"
import Button from "./Button"
import Rating from "./Rating"
import Material from "./Material"
import Label from "./Label"
import Label2 from "./Label2"
import Phonelink from "./Phonelink"
import HowItWork from "./HowItWork"
import LinkButton from "./LinkButton"
import Phosphor from "./Phosphor"
import OndemandVideo from "./OndemandVideo"
import Send from "./Send"
import HowItWork2 from "./HowItWork2"
import PermDataSetting from "./PermDataSetting"
import PricingButton from "./PricingButton"
import Checkmark from "./Checkmark"
import Checkmark2 from "./Checkmark2"
import CMSSlider from "./CMSSlider"
import Label3 from "./Label3"
import FormButton from "./FormButton"
import Footer from "./Footer"
import FooterLink from "./FooterLink"
import FooterLink2 from "./FooterLink2"
import Template2 from "./Template2"
import Framer from "./Framer"
import Text from "./Text"

export default function Home({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <RevealWatcher />
      <div className={styles["div-59"]}>
        <div className={styles["div-60"]}>
          <div className={styles["navbar"]}>
            <div className={styles["div-10"]}>
              <Navbar slots={["https://framerusercontent.com/images/52dtBwVTz0lz7dFYnotwjst688.png?scale-down-to=512&width=2048&height=2048","About","How I can help","Pricing","Testimonials","Get in touch"]} />
            </div>
          </div>
          <div className={styles["div-61"]}>
            <header className={styles["hero-section"]}>
              <div className={styles["container-5"]}>
                <div className={styles["top-header"]}>
                  <div className={styles["text-wrapper-12"]}>
                    <div className={styles["rating"]}>
                      <Rating slots={["Rated 5/5"]} />
                    </div>
                    <div className={styles["heading-wrapper"]}>
                      <div className={styles["div-62"]}>
                        <h1 className={styles["h1"]}>{slots[0] ?? "Making Your Brand Stand Out Online"}</h1>
                      </div>
                      <div className={styles["div-63"]}>
                        <p className={styles["p-32"]}>{slots[1] ?? "Creative social media, marketing and design that helps your business get noticed, connect with your audience and grow."}</p>
                      </div>
                    </div>
                    <div className={styles["buttons-wrapper"]}>
                      <div className={styles["div-10"]}>
                        <div className={styles["button"]}>
                          <Button slots={["Get in touch"]} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-10"]}>
                    <div className={styles["image"]}>
                      <div className={styles["div-64"]}>
                        <img className={styles["img-8"]} src={slots[2] ?? "https://framerusercontent.com/images/Q0gcdweuikSlYqQVHM94jHEmlQ.jpeg?width=1920&height=2184"} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <section className={styles["impacts"]}>
              <div className={styles["container-6"]}>
                <div className={styles["text-wrapper-13"]}>
                  <div className={styles["section-tag"]}>
                    <Label slots={["About"]} />
                  </div>
                  <div className={styles["heading-wrapper-2"]}>
                    <div className={styles["div-65"]}>
                      <h2 className={styles["h2"]}>{slots[3] ?? "Hi, I'm Chants."}</h2>
                    </div>
                    <div className={styles["div-66"]}>
                      <p className={styles["p-33"]}>{slots[4] ?? "I help small and growing businesses build a stronger online presence through creative, practical and strategic digital marketing. I enjoy finding the balance between creativity and strategy, creating work that not only looks good but has a clear purpose behind it."}</p>
                    </div>
                    <div className={styles["div-67"]}>
                      <p className={styles["p-33"]}>{slots[5] ?? "With more than 15 years of experience in design and more than 8 years in social media, I've developed a broad range of skills across social media, graphic design and email marketing. I work closely with my clients to understand their business, their audience and what they want to achieve."}</p>
                      <p className={styles["p-34"]}>{slots[6] ?? "I believe good design isn't just about making something look nice — it's about making your business easier to understand, remember and connect with."}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["how-it-works-3"]}>
              <div className={styles["container-7"]}>
                <div className={styles["text-wrapper-14"]}>
                  <div className={styles["section-tag-2"]}>
                    <Label2 slots={["How I can help"]} />
                  </div>
                  <div className={styles["div-65"]}>
                    <h2 className={styles["h2"]}>{slots[7] ?? "Let’s Bring Your Brand to Life"}</h2>
                  </div>
                  <div className={styles["button"]}>
                    <Button slots={["Get in touch"]} />
                  </div>
                </div>
                <div className={styles["steps"]}>
                  <div className={styles["step-01"]}>
                    <div className={styles["image-wrapper"]}>
                      <div className={styles["div-10"]}>
                        <div className={styles["image-2"] + " " + styles["rv-4"]} data-reveal style={{ transitionDelay: "693ms" }}>
                          <div className={styles["div-68"]}>
                            <img className={styles["img-9"]} src={slots[8] ?? "https://framerusercontent.com/images/f2fXwPNDIfqbO2BR5pbQVUgo1oU.jpg?scale-down-to=2048&width=6814&height=3748"} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["timeline"]}>
                      <div className={styles["line"]} />
                      <div className={styles["dot-3"]}>
                        <Phonelink slots={[]} />
                      </div>
                      <div className={styles["line-2"]} />
                    </div>
                    <div className={styles["div-10"]}>
                      <div className={styles["text-2"]}>
                        <HowItWork slots={["Social Media Management","Social media management is about keeping your online presence active, consistent and engaging. From planning and creating content to scheduling posts and managing comments and messages, I take care of the day-to-day details so your brand stays visible and connected with your audience.","Discover More"]} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["step-01"]}>
                    <div className={styles["div-10"]}>
                      <div className={styles["text-2"]}>
                        <HowItWork slots={["Social Media Marketing","Paid social media advertising can help your business reach the right audience, increase your visibility and expand your reach beyond your existing followers. I create and manage targeted Meta ad campaigns designed to promote your products or services and help you achieve your marketing goals.","Discover More"]} />
                      </div>
                    </div>
                    <div className={styles["timeline"]}>
                      <div className={styles["line-3"]} />
                      <div className={styles["dot-3"]}>
                        <OndemandVideo slots={[]} />
                      </div>
                      <div className={styles["line-2"]} />
                    </div>
                    <div className={styles["image-wrapper"]}>
                      <div className={styles["div-10"]}>
                        <div className={styles["image-2"] + " " + styles["rv-4"]} data-reveal>
                          <div className={styles["div-68"]}>
                            <img className={styles["img-10"]} src={slots[9] ?? "https://framerusercontent.com/images/OrNmCoqTB0I5EQIzwfGSMy6EJwo.jpg?scale-down-to=2048&width=4723&height=3051"} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["step-01"]}>
                    <div className={styles["image-wrapper"]}>
                      <div className={styles["div-10"]}>
                        <div className={styles["image-2"] + " " + styles["rv-4"]} data-reveal>
                          <div className={styles["div-68"]}>
                            <img className={styles["img-11"]} src={slots[10] ?? "https://framerusercontent.com/images/cjDDH0TZOTv2bSkcUkV10dlnwdc.jpg?scale-down-to=2048&width=6720&height=4480"} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["timeline"]}>
                      <div className={styles["line-3"]} />
                      <div className={styles["dot-3"]}>
                        <Send slots={[]} />
                      </div>
                      <div className={styles["line-2"]} />
                    </div>
                    <div className={styles["div-10"]}>
                      <div className={styles["text-2"]}>
                        <HowItWork slots={["Email  Marketing","Email marketing is a great way to stay connected with your audience and keep your brand top of mind. From newsletters and promotions to engaging campaigns, I create thoughtful email content that speaks to your audience, builds relationships and encourages them to take action.","Discover More"]} />
                      </div>
                    </div>
                  </div>
                  <div className={styles["step-01"]}>
                    <div className={styles["div-10"]}>
                      <div className={styles["text-3"]}>
                        <HowItWork2 slots={["Graphic Design","Great design helps your brand communicate clearly and make a lasting impression. From social media graphics and promotional materials to branded visuals, I create thoughtful, eye-catching designs that reflect your brand and connect with your audience.","Discover More"]} />
                      </div>
                    </div>
                    <div className={styles["timeline"]}>
                      <div className={styles["line-3"]} />
                      <div className={styles["dot-3"]}>
                        <PermDataSetting slots={[]} />
                      </div>
                    </div>
                    <div className={styles["image-wrapper"]}>
                      <div className={styles["div-10"]}>
                        <div className={styles["image-2"] + " " + styles["rv-4"]} data-reveal>
                          <div className={styles["div-68"]}>
                            <img className={styles["img-12"]} src={slots[11] ?? "https://framerusercontent.com/images/oOex8pFENcWnUgIHbSNLIslE.jpg?scale-down-to=2048&width=3000&height=2000"} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["pricing"]}>
              <div className={styles["container-8"]}>
                <div className={styles["text-wrapper-15"]}>
                  <div className={styles["section-tag-3"]}>
                    <Label slots={["Pricing"]} />
                  </div>
                  <div className={styles["div-69"]}>
                    <h2 className={styles["h2-2"]}>{slots[12] ?? "Flexible pricing tailored to your business needs"}</h2>
                  </div>
                </div>
                <div className={styles["grid-2x"]}>
                  <div className={styles["pricing-item"] + " " + styles["rv-7"]} data-reveal>
                    <div className={styles["gradient-layer"]} />
                    <div className={styles["text-wrapper-16"]}>
                      <div className={styles["div-70"]}>
                        <h4 className={styles["h4-2"]}>{slots[13] ?? "Facebook Only"}</h4>
                      </div>
                      <div className={styles["div-71"]}>
                        <p className={styles["p-35"]}>{slots[14] ?? "A simple, consistent way to keep your Facebook page active and engaging."}</p>
                      </div>
                      <div className={styles["price"]}>
                        <div className={styles["div-72"]}>
                          <h2 className={styles["h2-3"]}>{slots[15] ?? "R2050"}</h2>
                        </div>
                        <div className={styles["timeline-2"]}>
                          <div className={styles["div-73"]}>
                            <p className={styles["p-36"]}>{slots[16] ?? "/Month"}</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles["div-10"]}>
                        <div className={styles["button-7"]}>
                          <PricingButton slots={["Request Consultation"]} />
                        </div>
                      </div>
                    </div>
                    <div className={styles["points"]}>
                      <div className={styles["div-10"]}>
                        <div className={styles["checkmark-3"]}>
                          <Checkmark slots={["5 posts per week"]} />
                        </div>
                      </div>
                      <div className={styles["div-10"]}>
                        <div className={styles["checkmark-3"]}>
                          <Checkmark slots={["Content planning & scheduling"]} />
                        </div>
                      </div>
                      <div className={styles["div-10"]}>
                        <div className={styles["checkmark-4"]}>
                          <Checkmark2 slots={["Engaging, on-brand social content"]} />
                        </div>
                      </div>
                      <div className={styles["div-10"]}>
                        <div className={styles["checkmark-3"]}>
                          <Checkmark slots={["Basic performance insights"]} />
                        </div>
                      </div>
                      <div className={styles["div-10"]}>
                        <div className={styles["checkmark-3"]}>
                          <Checkmark slots={["Monthly reporting"]} />
                        </div>
                      </div>
                      <div className={styles["div-10"]}>
                        <div className={styles["checkmark-3"]}>
                          <Checkmark slots={["Dedicated support"]} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["pricing-item-2"] + " " + styles["rv-7"]} data-reveal>
                    <div className={styles["gradient-layer-2"]} />
                    <div className={styles["text-wrapper-17"]}>
                      <div className={styles["div-74"]}>
                        <h4 className={styles["h4-3"]}>{slots[17] ?? "Instagram Only"}</h4>
                      </div>
                      <div className={styles["div-75"]}>
                        <p className={styles["p-37"]}>{slots[18] ?? "Build a consistent Instagram presence with content designed to catch attention and connect with your audience."}</p>
                      </div>
                      <div className={styles["price-2"]}>
                        <div className={styles["div-72"]}>
                          <h2 className={styles["h2-3"]}>{slots[19] ?? "R2050"}</h2>
                        </div>
                        <div className={styles["timeline-3"]}>
                          <div className={styles["div-76"]}>
                            <p className={styles["p-38"]}>{slots[20] ?? "/Month"}</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles["div-10"]}>
                        <div className={styles["button-8"]}>
                          <PricingButton slots={["Request Consultation"]} />
                        </div>
                      </div>
                    </div>
                    <div className={styles["points-2"]}>
                      <div className={styles["div-10"]}>
                        <div className={styles["checkmark-5"]}>
                          <Checkmark slots={["5 posts per week"]} />
                        </div>
                      </div>
                      <div className={styles["div-10"]}>
                        <div className={styles["checkmark-5"]}>
                          <Checkmark slots={["Content planning & scheduling"]} />
                        </div>
                      </div>
                      <div className={styles["div-10"]}>
                        <div className={styles["checkmark-6"]}>
                          <Checkmark2 slots={["Engaging, on-brand social content"]} />
                        </div>
                      </div>
                      <div className={styles["div-10"]}>
                        <div className={styles["checkmark-5"]}>
                          <Checkmark slots={["Basic performance insights"]} />
                        </div>
                      </div>
                      <div className={styles["div-10"]}>
                        <div className={styles["checkmark-5"]}>
                          <Checkmark slots={["Monthly reporting"]} />
                        </div>
                      </div>
                      <div className={styles["div-10"]}>
                        <div className={styles["checkmark-5"]}>
                          <Checkmark slots={["Dedicated support"]} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["pricing-item-3"] + " " + styles["rv-7"]} data-reveal style={{ transitionDelay: "102ms" }}>
                    <div className={styles["gradient"]} />
                    <div className={styles["text-wrapper-18"]}>
                      <div className={styles["heading-wrapper-3"]}>
                        <div className={styles["div-77"]}>
                          <h4 className={styles["h4-4"]}>{slots[21] ?? "Facebook and lnstagram"}</h4>
                        </div>
                        <div className={styles["tag"]}>
                          <div className={styles["icon-4"]}>
                            <div className={styles["div-78"]}>
                              <img className={styles["img-13"]} src={slots[22] ?? "https://framerusercontent.com/images/geuBUZ44SqcIV5YYQr9Bc8AcY.svg?width=56&height=56"} alt="" />
                            </div>
                          </div>
                          <div className={styles["div-79"]}>
                            <p className={styles["p-39"]}>{slots[23] ?? "Popular"}</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles["div-71"]}>
                        <p className={styles["p-35"]}>{slots[24] ?? "Get the best of both platforms with a cohesive social media presence across Facebook and Instagram."}</p>
                      </div>
                      <div className={styles["price"]}>
                        <div className={styles["div-72"]}>
                          <h2 className={styles["h2-3"]}>{slots[25] ?? "R2200"}</h2>
                        </div>
                        <div className={styles["timeline-2"]}>
                          <div className={styles["div-73"]}>
                            <p className={styles["p-36"]}>{slots[26] ?? "/Month"}</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles["div-10"]}>
                        <div className={styles["button-7"]}>
                          <PricingButton slots={["Get Started"]} />
                        </div>
                      </div>
                    </div>
                    <div className={styles["points"]}>
                      <div className={styles["div-10"]}>
                        <div className={styles["checkmark-3"]}>
                          <Checkmark slots={["5 posts per week"]} />
                        </div>
                      </div>
                      <div className={styles["div-10"]}>
                        <div className={styles["checkmark-4"]}>
                          <Checkmark2 slots={["Content tailored for Facebook & Instagram"]} />
                        </div>
                      </div>
                      <div className={styles["div-10"]}>
                        <div className={styles["checkmark-3"]}>
                          <Checkmark slots={["Content planning & scheduling"]} />
                        </div>
                      </div>
                      <div className={styles["div-10"]}>
                        <div className={styles["checkmark-3"]}>
                          <Checkmark slots={["Advanced performance insights"]} />
                        </div>
                      </div>
                      <div className={styles["div-10"]}>
                        <div className={styles["checkmark-3"]}>
                          <Checkmark slots={["Monthly reporting"]} />
                        </div>
                      </div>
                      <div className={styles["div-10"]}>
                        <div className={styles["checkmark-3"]}>
                          <Checkmark slots={["Priority support"]} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-80"]}>
                    <p className={styles["p-40"]}>{slots[27] ?? "*All packages charge a R500 once of admin fee which includes template design and cover page."}</p>
                  </div>
                  <div className={styles["div-81"]}>
                    <p className={styles["p-41"]}>{slots[28] ?? "Contact me for other flexible packages that include page setup, stories, carousels and moving ads"}</p>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles["testimonial-4"]}>
              <div className={styles["div-25"]}>
                <CMSSlider slots={["Slide 1 of 4","\"Chants has worked hard at creating great advertising content for my website over the years and I recommend her work!\"","https://framerusercontent.com/images/vUKbA6Bq5m15BnWjmbq34m1B56c.png?scale-down-to=512&width=600&height=363","Malcolm Tennant","Biker Bravado","\"Chants goes above and beyond for her clients…Keep up the amazing work!\"","https://framerusercontent.com/images/BfpJ6n42AgUddvT7BGzWlxc2YE.jpg?scale-down-to=512&width=1080&height=1080","Ria Schoeman Dunbar","\"I have worked with Chants for years. She is really great at what she does. Her creativity and attention to details shine through in each and every social media post\"","https://framerusercontent.com/images/SJJ2uj3HnU9entCMpHJag4VF2I.jpg?scale-down-to=512&width=1536&height=1024","Adnan Rana","Flux Bespoke Tailor","“Our media presence is something we are very proud of and our reach and engagement has improved over the years. Thanks Jadeabilities!”","https://framerusercontent.com/images/XLYX78Pc1L960WpK8tCVrGcdkfM.png?scale-down-to=512&width=1080&height=1080","Tony Brinsford","Silent Disco ZA / Perfect Tone Music"]} />
              </div>
            </section>
            <section className={styles["contact"]}>
              <div className={styles["container-9"] + " " + styles["rv-4"]} data-reveal style={{ transitionDelay: "461ms" }}>
                <div className={styles["text-wrapper-19"]}>
                  <div className={styles["heading-wrapper-4"]}>
                    <div className={styles["section-tag-4"]}>
                      <Label3 slots={["Get in touch"]} />
                    </div>
                    <div className={styles["div-82"]}>
                      <h2 className={styles["h2-4"]}>{slots[29] ?? "Get in touch with me"}</h2>
                    </div>
                  </div>
                  <form className={styles["form"]}>
                    <label className={styles["form-label"]}>
                      <div className={styles["div-83"]}>
                        <div className={styles["input"]} />
                      </div>
                    </label>
                    <label className={styles["form-label"]}>
                      <div className={styles["div-83"]}>
                        <div className={styles["input"]} />
                      </div>
                    </label>
                    <label className={styles["form-label-2"]}>
                      <div className={styles["form-input"]}>
                        <div className={styles["select"]}>
                          <option className={styles["option"]}>{slots[30] ?? "Service..."}</option>
                          <option className={styles["option-2"]}>{slots[31] ?? "Social Media Management"}</option>
                          <option className={styles["option-2"]}>{slots[32] ?? "Social Media Marketing"}</option>
                          <option className={styles["option-2"]}>{slots[33] ?? "Email Marketing"}</option>
                          <option className={styles["option-2"]}>{slots[34] ?? "Graphic Design"}</option>
                        </div>
                      </div>
                    </label>
                    <label className={styles["form-label-3"]}>
                      <div className={styles["form-input-2"]}>
                        <div className={styles["textarea"]} />
                      </div>
                    </label>
                    <div className={styles["form-button"]}>
                      <FormButton slots={["Submit"]} />
                    </div>
                    <div className={styles["input-2"]} />
                    <div className={styles["input-2"]} />
                    <div className={styles["input-2"]} />
                    <div className={styles["input-2"]} />
                    <div className={styles["input-2"]} />
                    <div className={styles["input-2"]} />
                    <div className={styles["input-2"]} />
                    <div className={styles["input-2"]} />
                    <div className={styles["input-2"]} />
                    <div className={styles["input-2"]} />
                    <div className={styles["input-2"]} />
                  </form>
                </div>
                <div className={styles["div-10"]}>
                  <div className={styles["image-3"]}>
                    <div className={styles["div-84"]}>
                      <img className={styles["img-14"]} src={slots[35] ?? "https://framerusercontent.com/images/Rfi8Dzlz5SKxegez4irAvX21mk.jpg?scale-down-to=1024&width=4000&height=6000"} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className={styles["div-85"]} />
          <div className={styles["div-86"]} />
          <div className={styles["div-87"]}>
            <div className={styles["div-10"]}>
              <Footer slots={["https://framerusercontent.com/images/52dtBwVTz0lz7dFYnotwjst688.png?scale-down-to=512&width=2048&height=2048","Let’s Bring Your Brand to Life","Menu","About","How I can help","Pricing","Testimonials","Follow me:","Instagram","Facebook","Contact","jadeabilities@gmail.com","+27 (0) 61 230 9197","Centurion, South Africa","Copyright @ 2026"]} />
            </div>
          </div>
        </div>
        <Template2 slots={[]} />
      </div>
      <div className={styles["div-88"]}>
        <a className={styles["light"]} href="https://www.framer.com">
          <div className={styles["backdrop"]} />
          <div className={styles["content"]}>
            <div className={styles["div-89"]}>
              <Framer slots={[]} />
            </div>
            <p className={styles["p-42"]}>{slots[0] ?? "Create a free website with Framer, the website builder loved by startups, designers and agencies."}</p>
            <Text slots={[]} />
          </div>
          <div className={styles["bottom"]} />
          <div className={styles["border"]} />
        </a>
      </div>
      <div className={styles["div-90"]}>
        <SvgGraphic className={styles["svg-8"]} html={"<svg height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\" id=\"svg-1118720463_170\" data-f2c-idx=\"723\"><path d=\"m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z\" data-f2c-idx=\"724\"></path></svg>"} />
      </div>
      <div className={styles["div-91"]}>
        <span className={styles["span"]}>{slots[0] ?? "Edit Content"}</span>
        <button className={styles["button-9"]}>
          <SvgGraphic className={styles["svg-9"]} html={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" fill=\"none\" data-f2c-idx=\"728\"><path d=\"M1 9.414a1 1 0 0 1 .293-.707l7.469-7.469a1.75 1.75 0 0 1 2.476 0l1.524 1.524a1.75 1.75 0 0 1 0 2.476l-7.469 7.469a1 1 0 0 1-.707.293H2a1 1 0 0 1-1-1zM11.5 6.5l-4-4\" fill=\"transparent\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" data-f2c-idx=\"729\"></path></svg>"} />
        </button>
      </div>
      <div className={styles["iframe"]} />
    </>
  )
}
