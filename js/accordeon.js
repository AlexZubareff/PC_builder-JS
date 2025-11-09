const contents = document.querySelectorAll('.program-line__content')
const descAll = document.querySelectorAll('.program-line__descr')

console.log(descAll)

contents.forEach(el => {
  const title = el.querySelector('.program-line__title')
  const desc = el.querySelector('.program-line__descr')
  // console.log(descAll)

  title.addEventListener('click', () => {
    descAll.forEach(el => {
      if (el.classList.contains('active')) {
        el.classList.remove('active')
      }
    })

    desc.classList.toggle('active')
  })
})
