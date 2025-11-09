const modalBtn = document.querySelector('.modal__button')
const modal = document.querySelector('.modal')


modalBtn.addEventListener('click', () => {
  modal.style.display = 'flex'
})

modal.addEventListener('click', e => {
  const modelContent = e.target.closest('.modal__inner')
  if (!modelContent) {
    modal.style.display = ''
  }
})
