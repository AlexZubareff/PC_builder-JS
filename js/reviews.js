// Слайдер отзывов с каруселью
const reviewsData = [
  {
    name: 'Иван С.',
    text: 'Заказал игровой ПК за 120 тыс. Всё подобрали, собрали, привезли. Работает отлично, Cyberpunk 2077 летает на ультрах. Рекомендую!',
    rating: 5,
  },
  {
    name: 'Анна К.',
    text: 'Долго не могла определиться с комплектующими. Ребята помогли с выбором, объяснили всё простым языком. ПК собрали за 3 дня. Спасибо!',
    rating: 5,
  },
  {
    name: 'Дмитрий П.',
    text: 'Решил обновить старый компьютер. Посоветовали оптимальный апгрейд — заменили видеокарту и добавили SSD. Стало как новый ПК, цена приятно удивила.',
    rating: 4,
  },
  {
    name: 'Сергей М.',
    text: 'Собирал ПК для стримов. Консультация была подробной, всё объяснили по шагам. Получил машину, которая тянет и игры, и стриминг одновременно. Цена ниже, чем в DNS.',
    rating: 5,
  },
  {
    name: 'Елена В.',
    text: 'Заказывала компьютер для работы с графикой. Специалист по видеокартам очень помог с выбором. Сборка аккуратная, провода уложены идеально. Довольна!',
    rating: 5,
  },
  {
    name: 'Максим Т.',
    text: 'Брал топовую сборку на RTX 5090. Комплектующие заказали напрямую у поставщика — вышло на 30% дешевле, чем в магазине. Очень доволен.',
    rating: 5,
  },
]

const reviewsSlider = () => {
  const track = document.getElementById('reviewsTrack')
  const dots = document.getElementById('reviewsDots')
  const prev = document.getElementById('reviewsPrev')
  const next = document.getElementById('reviewsNext')

  if (!track) return

  let current = 0

  const renderStars = num => '⭐'.repeat(num) + '☆'.repeat(5 - num)

  const render = () => {
    track.innerHTML = reviewsData
      .map(
        (r, idx) => `
        <div class="reviews__card ${idx === current ? 'reviews__card--active' : ''}">
          <div class="reviews__stars">${renderStars(r.rating)}</div>
          <div class="reviews__text">"${r.text}"</div>
          <div class="reviews__author">— ${r.name}</div>
        </div>
      `
      )
      .join('')

    // Обновить видимую
    track.style.transform = `translateX(-${current * 100}%)`

    // Точки
    dots.innerHTML = reviewsData
      .map(
        (_, idx) =>
          `<button class="reviews__dot ${idx === current ? 'reviews__dot--active' : ''}" data-idx="${idx}"></button>`
      )
      .join('')

    document.querySelectorAll('.reviews__dot').forEach(btn => {
      btn.addEventListener('click', () => {
        current = parseInt(btn.dataset.idx)
        render()
      })
    })
  }

  prev.addEventListener('click', () => {
    current = (current - 1 + reviewsData.length) % reviewsData.length
    render()
  })

  next.addEventListener('click', () => {
    current = (current + 1) % reviewsData.length
    render()
  })

  // Автопролистывание
  setInterval(() => {
    current = (current + 1) % reviewsData.length
    render()
  }, 6000)

  render()
}

document.addEventListener('DOMContentLoaded', reviewsSlider)
