const modal = () => {
  const modal = document.querySelector('.modal')
  const modalBtns = document.querySelectorAll('.modal__button')

  // Открытие модалки с любой кнопки .modal__button
  modalBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      // Предотвращаем отправку формы если кнопка внутри неё
      if (e.target.closest('.modal')) return

      modal.style.display = 'flex'

      // Крестик закрытия (добавляем только если ещё нет)
      if (!modal.querySelector('.modal__close')) {
        const imgCross = document.createElement('img')
        imgCross.src = 'img/close.svg'
        imgCross.alt = 'close'
        imgCross.classList.add('modal__close')
        const modalInner = modal.querySelector('.modal__inner')
        modalInner.append(imgCross)

        const closeBtn = modal.querySelector('.modal__close')
        closeBtn.addEventListener('click', e => {
          e.stopPropagation()
          modal.style.display = ''
          closeBtn.remove()
        })
      }
    })
  })

  // Закрытие по клику вне модалки
  modal.addEventListener('click', e => {
    const modalContent = e.target.closest('.modal__inner')
    const closeBtn = modal.querySelector('.modal__close')

    if (!modalContent) {
      modal.style.display = ''
      if (closeBtn) closeBtn.remove()
    }
  })
}

modal()
