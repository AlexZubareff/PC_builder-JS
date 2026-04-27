const sendForm = () => {
  const form = document.querySelector('.modal')

  // Показываем уведомление
  const showNotification = (message, success) => {
    const existing = form.querySelector('.modal__notification')
    if (existing) existing.remove()

    const notification = document.createElement('div')
    notification.classList.add('modal__notification')
    notification.style.cssText = `
      padding: 15px;
      margin-top: 15px;
      border-radius: 8px;
      text-align: center;
      font-size: 1.6rem;
      font-weight: 500;
      background: ${success ? 'rgba(76, 175, 80, 0.2)' : 'rgba(244, 67, 54, 0.2)'};
      border: 1px solid ${success ? '#4caf50' : '#f44336'};
      color: ${success ? '#4caf50' : '#f44336'};
    `
    notification.textContent = message
    form.appendChild(notification)

    // Автоскрытие
    setTimeout(() => notification.remove(), success ? 3000 : 5000)
  }

  form.addEventListener('submit', e => {
    e.preventDefault()

    const text = form.querySelector('input[type=text]')
    const tel = form.querySelector('input[type=tel]')
    const email = form.querySelector('input[type=email]')

    // Валидация
    if (!text.value.trim()) {
      showNotification('⚠️ Введите имя', false)
      text.focus()
      return
    }
    if (!tel.value.trim()) {
      showNotification('⚠️ Введите номер телефона', false)
      tel.focus()
      return
    }
    if (!email.value.trim() || !email.value.includes('@')) {
      showNotification('⚠️ Введите корректный email', false)
      email.focus()
      return
    }

    const sendObj = {
      name: text.value.trim(),
      phone: tel.value.trim(),
      email: email.value.trim(),
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(sendObj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log('Отправлено:', json)
        showNotification('✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.', true)
      })
      .catch(err => {
        console.error('Ошибка:', err)
        showNotification('❌ Ошибка отправки. Попробуйте позже.', false)
      })
      .finally(() => {
        text.value = ''
        tel.value = ''
        email.value = ''
      })
  })
}
sendForm()
