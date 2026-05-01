document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  lucide.createIcons()

  const slides = document.querySelectorAll(".slide")
  const navLinks = document.querySelectorAll(".nav-link")
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")
  const currentSlideNum = document.getElementById("currentSlideNum")

  let currentSlideIndex = 0

  function updateSlides() {
    // Update slides visibility
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentSlideIndex)
    })

    // Update Nav Links
    navLinks.forEach((link, index) => {
      link.classList.toggle("active", index === currentSlideIndex)
    })

    // Update Counter
    currentSlideNum.textContent = currentSlideIndex + 1

    // Update Buttons state
    prevBtn.disabled = currentSlideIndex === 0
    nextBtn.disabled = currentSlideIndex === slides.length - 1

    // Refresh icons for new slides if needed
    lucide.createIcons()
  }

  // Navigation Buttons
  nextBtn.addEventListener("click", () => {
    if (currentSlideIndex < slides.length - 1) {
      currentSlideIndex++
      updateSlides()
    }
  })

  prevBtn.addEventListener("click", () => {
    if (currentSlideIndex > 0) {
      currentSlideIndex--
      updateSlides()
    }
  })

  // Top Nav Links Click
  navLinks.forEach((link, index) => {
    link.addEventListener("click", e => {
      e.preventDefault()
      currentSlideIndex = index
      updateSlides()
    })
  })

  // Keyboard Navigation
  document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") nextBtn.click()
    if (e.key === "ArrowLeft") prevBtn.click()
  })

  // Initial state
  updateSlides()

  // Hover effects for list items
  document.addEventListener("mouseover", e => {
    const li = e.target.closest(".list-items li")
    if (li) {
      const icon = li.querySelector("i")
      if (icon) {
        icon.style.transform = "translateX(5px)"
        icon.style.opacity = "1"
      }
    }
  })

  document.addEventListener("mouseout", e => {
    const li = e.target.closest(".list-items li")
    if (li) {
      const icon = li.querySelector("i")
      if (icon) {
        icon.style.transform = "translateX(0)"
        icon.style.opacity = "0.3"
      }
    }
  })
})
