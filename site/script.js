// Mobile menu
const nav = document.querySelector(".nav")
const toggle = document.getElementById("nav-toggle")
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open")
  toggle.setAttribute("aria-expanded", String(open))
})
document.querySelectorAll(".nav-links a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open")
    toggle.setAttribute("aria-expanded", "false")
  })
)

// Fade-in on scroll
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible")
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15 }
)
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el))

// Testimonials slider
const slider = document.getElementById("slider")
const slides = [...slider.querySelectorAll(".slide")]
const dots = slider.querySelector(".slider-dots")
let current = 0
let timer

slides.forEach((_, i) => {
  const dot = document.createElement("button")
  dot.setAttribute("role", "tab")
  dot.setAttribute("aria-label", `Slide ${i + 1} of ${slides.length}`)
  dot.addEventListener("click", () => go(i))
  dots.appendChild(dot)
})

function go(index) {
  current = (index + slides.length) % slides.length
  slides.forEach((s, i) => s.classList.toggle("is-active", i === current))
  ;[...dots.children].forEach((d, i) => d.setAttribute("aria-selected", String(i === current)))
  restart()
}

function restart() {
  clearInterval(timer)
  timer = setInterval(() => go(current + 1), 7000)
}

slider.querySelector(".prev").addEventListener("click", () => go(current - 1))
slider.querySelector(".next").addEventListener("click", () => go(current + 1))
slider.addEventListener("mouseenter", () => clearInterval(timer))
slider.addEventListener("mouseleave", restart)
go(0)

// Contact form: submissions are sent via Web3Forms and emailed to the site owner.
const WEB3FORMS_ACCESS_KEY = "4400bce0-e8df-4172-8374-045bbf5cbcba"
const form = document.getElementById("contact-form")
const status = document.getElementById("form-status")
const submitBtn = form.querySelector('button[type="submit"]')

form.addEventListener("submit", async (e) => {
  e.preventDefault()
  const data = new FormData(form)
  const payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: `New website enquiry: ${data.get("service")}`,
    from_name: "Jadeabilities website",
    name: data.get("name"),
    email: data.get("email"),
    service: data.get("service"),
    message: data.get("message"),
    botcheck: data.get("botcheck"),
  }

  submitBtn.disabled = true
  status.textContent = "Sending…"
  status.className = "form-status"

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    })
    const result = await res.json()
    if (!res.ok || !result.success) throw new Error(result.message)
    form.reset()
    status.textContent = "Thanks! Your message has been sent. I'll be in touch soon."
    status.classList.add("is-success")
  } catch {
    status.textContent = "Sorry, something went wrong. Please try again or email jadeabilities@gmail.com."
    status.classList.add("is-error")
  } finally {
    submitBtn.disabled = false
  }
})
