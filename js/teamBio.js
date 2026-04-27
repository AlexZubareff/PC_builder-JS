// Модальные окна с биографиями команды
const bioData = {
  evgeny: {
    name: 'Евгений Петров',
    role: 'Специалист по видеокартам',
    bio: 'Опыт работы с видеокартами — более 8 лет. Начинал с ремонта GPU в сервисном центре, за 3 года дорос до ведущего специалиста крупной сборки. Перебрал более 500 видеокарт от GTX 1060 до RTX 5090. Знает все нюансы: какие модели греются, какие шумят, где реальный прирост FPS. Лично тестирует каждую карту перед установкой в сборку.',
    exp: '8+ лет',
    projects: '500+ собранных ПК',
  },
  alexey: {
    name: 'Алексей Козлов',
    role: 'Специалист по процессорам',
    bio: 'Профи по процессорам и материнским платам. Собирает ПК с 14 лет. Разбирается в совместимости чипсетов, тонкостях разгона и подборе оптимальных связок CPU+материнка. Может объяснить разницу между Intel и AMD так, что поймёт даже бабушка. Следит за всеми новинками рынка и обновляет прайс-листы в день выхода.',
    exp: '10+ лет',
    projects: '700+ собранных ПК',
  },
  dmitry: {
    name: 'Дмитрий Иванов',
    role: 'Ведущий инженер-сборщик',
    bio: 'Главный по сборке и тестированию. Идеальный порядок в корпусе, правильная прокладка кабелей, оптимальная система охлаждения — его конёк. Каждую сборку перед выдачей тестирует стресс-тестами в течение 4 часов. Если компьютер нестабилен — не уйдёт клиенту. Гарантия 2 года на все работы.',
    exp: '12+ лет',
    projects: '1000+ собранных ПК',
  },
}

const teamBio = () => {
  const modal = document.getElementById('bioModal')
  const overlay = modal?.querySelector('.modal-bio__overlay')
  const content = document.getElementById('bioContent')
  const closeBtn = modal?.querySelector('.modal-bio__close')

  if (!modal) return

  const openBio = personId => {
    const data = bioData[personId]
    if (!data) return

    content.innerHTML = `
      <h3 class="modal-bio__name">${data.name}</h3>
      <div class="modal-bio__role">${data.role}</div>
      <div class="modal-bio__stats">
        <span class="modal-bio__stat">📅 Опыт: ${data.exp}</span>
        <span class="modal-bio__stat">🖥 Проектов: ${data.projects}</span>
      </div>
      <p class="modal-bio__text">${data.bio}</p>
    `

    modal.style.display = 'flex'
    document.body.style.overflow = 'hidden'
  }

  const closeBio = () => {
    modal.style.display = ''
    document.body.style.overflow = ''
  }

  // Кнопки биографий
  document.querySelectorAll('.bio-btn').forEach(btn => {
    const card = btn.closest('[data-person]')
    if (card) {
      btn.addEventListener('click', () => openBio(card.dataset.person))
    }
  })

  closeBtn?.addEventListener('click', closeBio)
  overlay?.addEventListener('click', closeBio)

  // Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeBio()
    }
  })
}

document.addEventListener('DOMContentLoaded', teamBio)
