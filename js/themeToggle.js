// Переключатель тёмной/светлой темы
const themeToggle = () => {
  const btn = document.getElementById('themeToggle')
  if (!btn) return

  const body = document.body
  const savedTheme = localStorage.getItem('pc_builder_theme')

  if (savedTheme === 'light') {
    body.classList.add('theme-light')
    btn.textContent = '☀️'
    btn.title = 'Тёмная тема'
  } else {
    btn.title = 'Светлая тема'
  }

  btn.addEventListener('click', () => {
    body.classList.toggle('theme-light')
    const isLight = body.classList.contains('theme-light')
    btn.textContent = isLight ? '☀️' : '🌙'
    btn.title = isLight ? 'Тёмная тема' : 'Светлая тема'
    localStorage.setItem('pc_builder_theme', isLight ? 'light' : 'dark')
  })
}

document.addEventListener('DOMContentLoaded', themeToggle)
