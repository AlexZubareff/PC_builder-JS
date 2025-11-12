const modal = () => {
  const modalBtn = document.querySelector('.modal__button')
  const modal = document.querySelector('.modal')

  modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
    const imgCross = document.createElement('img')
    // Устанавливаем путь к изображению
    imgCross.src = '../img/close.svg'
    // Устанавливаем альтернативный текст для изображения
    imgCross.alt = 'close'
    // Устанавливаем стили для изображения
    imgCross.classList.add('modal__close')
    // Получаем форму, куда нужно вставить изображение
    const modalInner = document.querySelector('.modal__inner')
    // Вставляем изображение в форму
    modalInner.append(imgCross)
    // Получаем изображение, чтобы в последствии его удалить при закрытии модального окна
    const closeBtn = modal.querySelector('.modal__close')
    //Навешиваем слушателя на изображение
    closeBtn.addEventListener('click', () => {
      modal.style.display = ''
      closeBtn.remove()
    })
  })

  modal.addEventListener('click', e => {
    const modelContent = e.target.closest('.modal__inner')
    const closeBtn = modal.querySelector('.modal__close')

    if (!modelContent) {
      modal.style.display = ''
      closeBtn.remove()
    }
  })
}
modal()
