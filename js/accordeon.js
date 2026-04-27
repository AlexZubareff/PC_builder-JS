const accordeon = () => {
  const contents = document.querySelectorAll('.program-line__content')
  const descAll = document.querySelectorAll('.program-line__descr')

const accordeon = () => {
  const contents = document.querySelectorAll('.program-line__content')

  contents.forEach(el => {
    const title = el.querySelector('.program-line__title')
    const desc = el.querySelector('.program-line__descr')

    title.addEventListener('click', () => {
      // Если кликнули на уже открытый — оставляем открытым (не закрываем)
      if (desc.classList.contains('active')) return

      // Закрываем все
      document.querySelectorAll('.program-line__descr.active').forEach(el => {
        el.classList.remove('active')
      })

      // Открываем нужный
      desc.classList.add('active')
    })
  })
}
accordeon()
}
accordeon()
