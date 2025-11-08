const contents = document.querySelectorAll('.program-line__content')

contents.forEach(el => {
  const title = el.querySelector('.program-line__title')
  const desc = el.querySelector('.program-line__descr')

  // title.onclick = () => {
  //   console.log(title)
  // }

  title.addEventListener('click', () => {
    desc.classList.toggle('active')
    // console.log(desc)

  })
})
