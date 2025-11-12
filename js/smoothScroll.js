const smooth = () => {
  const navbar = document.querySelector('.header__nav')
  const links = navbar.querySelectorAll('a')

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const section = document.querySelector(link.getAttribute('href'))
      // console.log(seamless)

      if (section) {
        seamless.scrollIntoView(section, {
          behavior: 'smooth',
          block: 'start',
          inline: 'center',
        })
      }
    })
  })
}
smooth()
