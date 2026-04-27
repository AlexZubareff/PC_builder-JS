// Анимированный счётчик чисел при скролле
const countUp = () => {
  const counters = document.querySelectorAll('.count-number')
  if (!counters.length) return

  const animate = el => {
    const target = parseInt(el.dataset.target)
    const suffix = el.dataset.suffix || ''
    const duration = 1500
    const start = performance.now()

    const step = now => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      const value = Math.round(eased * target)

      if (target > 1000) {
        el.textContent = value.toLocaleString('ru-RU') + suffix
      } else {
        el.textContent = value + suffix
      }

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        if (target > 1000) {
          el.textContent = target.toLocaleString('ru-RU') + suffix
        } else {
          el.textContent = target + suffix
        }
      }
    }

    requestAnimationFrame(step)
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Начинаем анимацию для всех счётчиков в секции
          const parent = entry.target.closest('.course')
          if (parent) {
            parent.querySelectorAll('.count-number').forEach(el => animate(el))
          } else {
            animate(entry.target)
          }
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.3 }
  )

  counters.forEach(el => observer.observe(el))
}

document.addEventListener('DOMContentLoaded', countUp)
