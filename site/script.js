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

// Contact form: opens the visitor's email app with the message filled in.
// To receive submissions without an email app, point the form at a service
// like Formspree (set action="https://formspree.io/f/XXXX" method="POST" and remove this block).
const form = document.getElementById("contact-form")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const data = new FormData(form)
  const subject = `Website enquiry: ${data.get("service")}`
  const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${data.get("service")}\n\n${data.get("message")}`
  window.location.href = `mailto:jadeabilities@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
})
