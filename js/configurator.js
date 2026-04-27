const configurator = () => {
  const wrapper = document.querySelector('.configurator__builder')

  if (!wrapper) return

  // Данные комплектующих
  const components = {
    cpu: [
      { name: 'Intel Core i3-14100F', price: 8500, socket: 'lga1700', tdp: 65, tier: 'entry' },
      { name: 'Intel Core i5-14600KF', price: 22000, socket: 'lga1700', tdp: 125, tier: 'mid' },
      { name: 'Intel Core i7-14700KF', price: 38000, socket: 'lga1700', tdp: 150, tier: 'high' },
      { name: 'Intel Core i9-14900K', price: 65000, socket: 'lga1700', tdp: 200, tier: 'ultra' },
      { name: 'AMD Ryzen 5 7600', price: 15000, socket: 'am5', tdp: 65, tier: 'entry' },
      { name: 'AMD Ryzen 7 7800X3D', price: 35000, socket: 'am5', tdp: 120, tier: 'mid' },
      { name: 'AMD Ryzen 9 7950X', price: 55000, socket: 'am5', tdp: 170, tier: 'high' },
      { name: 'AMD Ryzen 9 9950X', price: 85000, socket: 'am5', tdp: 200, tier: 'ultra' },
    ],
    gpu: [
      { name: 'NVIDIA RTX 4060', price: 30000, tier: 'entry' },
      { name: 'NVIDIA RTX 4070', price: 55000, tier: 'mid' },
      { name: 'NVIDIA RTX 4070 Ti Super', price: 75000, tier: 'high' },
      { name: 'NVIDIA RTX 4080 Super', price: 95000, tier: 'high' },
      { name: 'NVIDIA RTX 5090', price: 180000, tier: 'ultra' },
      { name: 'AMD Radeon RX 7600', price: 25000, tier: 'entry' },
      { name: 'AMD Radeon RX 7800 XT', price: 50000, tier: 'mid' },
      { name: 'AMD Radeon RX 7900 XTX', price: 90000, tier: 'high' },
    ],
    ram: [
      { name: '16GB DDR4 3200MHz', price: 4000, tier: 'entry' },
      { name: '32GB DDR4 3600MHz', price: 8000, tier: 'mid' },
      { name: '32GB DDR5 6000MHz', price: 12000, tier: 'high' },
      { name: '64GB DDR5 6400MHz', price: 22000, tier: 'ultra' },
    ],
    storage: [
      { name: 'SSD 512GB NVMe', price: 4500, tier: 'entry' },
      { name: 'SSD 1TB NVMe', price: 7000, tier: 'mid' },
      { name: 'SSD 2TB NVMe', price: 12000, tier: 'high' },
      { name: 'SSD 2TB + HDD 4TB', price: 15000, tier: 'ultra' },
    ],
    psu: [
      { name: '600W 80+ Bronze', price: 4500, tier: 'entry' },
      { name: '750W 80+ Gold', price: 7500, tier: 'mid' },
      { name: '850W 80+ Gold', price: 10000, tier: 'high' },
      { name: '1000W 80+ Platinum', price: 18000, tier: 'ultra' },
    ],
    motherboard: [
      { name: 'H610 / A620 (базовая)', price: 7000, socket: 'any', tier: 'entry' },
      { name: 'B760 / B650 (средняя)', price: 12000, socket: 'any', tier: 'mid' },
      { name: 'Z790 / X670 (топовая)', price: 22000, socket: 'any', tier: 'high' },
      { name: 'Z790 / X670E (премиум)', price: 35000, socket: 'any', tier: 'ultra' },
    ],
    case: [
      { name: 'Корпус Standard (без стекла)', price: 3000, tier: 'entry' },
      { name: 'Корпус Midi-Tower (стекло)', price: 6000, tier: 'mid' },
      { name: 'Корпус с RGB и mesh', price: 10000, tier: 'high' },
      { name: 'Корпус Full-Tower премиум', price: 18000, tier: 'ultra' },
    ],
  }

  const presetBuilds = {
    entry: {
      label: '🖥 Начальный (до 50 тыс.)',
      parts: { cpu: 0, gpu: 0, ram: 0, storage: 0, psu: 0, motherboard: 0, case: 0 },
    },
    mid: {
      label: '🎮 Игровой (50-100 тыс.)',
      parts: { cpu: 2, gpu: 1, ram: 1, storage: 1, psu: 1, motherboard: 1, case: 1 },
    },
    high: {
      label: '🚀 Продвинутый (100-200 тыс.)',
      parts: { cpu: 4, gpu: 3, ram: 2, storage: 2, psu: 2, motherboard: 2, case: 2 },
    },
    ultra: {
      label: '💎 Топовый (200+ тыс.)',
      parts: { cpu: 7, gpu: 4, ram: 3, storage: 3, psu: 3, motherboard: 3, case: 3 },
    },
  }

  const state = {
    cpu: 0,
    gpu: 0,
    ram: 1,
    storage: 1,
    psu: 1,
    motherboard: 1,
    case: 1,
  }

  const categoryLabels = {
    cpu: 'Процессор',
    gpu: 'Видеокарта',
    ram: 'Оперативная память',
    storage: 'Накопитель',
    psu: 'Блок питания',
    motherboard: 'Материнская плата',
    case: 'Корпус',
  }

  // Создание DOM
  const render = () => {
    wrapper.innerHTML = ''

    // Строка с выбранными компонентами
    const summaryDiv = document.createElement('div')
    summaryDiv.classList.add('configurator__summary')

    const totalPrice = ['cpu', 'gpu', 'ram', 'storage', 'psu', 'motherboard', 'case'].reduce((sum, cat) => {
      return sum + components[cat][state[cat]].price
    }, 0)

    summaryDiv.innerHTML = `
      <div class="configurator__total">
        <span class="configurator__total-label">Примерная цена:</span>
        <span class="configurator__total-price">${totalPrice.toLocaleString('ru-RU')} ₽</span>
      </div>
    `

    // Преимущества
    const noteDiv = document.createElement('div')
    noteDiv.classList.add('configurator__note')
    noteDiv.textContent = '* Точная цена зависит от наличия и текущих цен у поставщиков. Оставьте заявку для расчёта.'

    wrapper.appendChild(summaryDiv)

    // Селекторы
    ;['cpu', 'gpu', 'ram', 'storage', 'psu', 'motherboard', 'case'].forEach(cat => {
      const block = document.createElement('div')
      block.classList.add('configurator__block')

      const label = document.createElement('div')
      label.classList.add('configurator__label')
      label.textContent = categoryLabels[cat]

      const select = document.createElement('select')
      select.classList.add('configurator__select')

      components[cat].forEach((comp, idx) => {
        const opt = document.createElement('option')
        opt.value = idx
        opt.textContent = `${comp.name} — ${comp.price.toLocaleString('ru-RU')} ₽`
        if (idx === state[cat]) opt.selected = true
        select.appendChild(opt)
      })

      select.addEventListener('change', () => {
        state[cat] = parseInt(select.value)
        render()
      })

      block.appendChild(label)
      block.appendChild(select)
      wrapper.appendChild(block)
    })

    wrapper.appendChild(noteDiv)

    // Пресеты
    const presetsDiv = document.createElement('div')
    presetsDiv.classList.add('configurator__presets')

    const presetsTitle = document.createElement('div')
    presetsTitle.classList.add('configurator__presets-title')
    presetsTitle.textContent = '⚡ Быстрый старт:'
    presetsDiv.appendChild(presetsTitle)

    Object.entries(presetBuilds).forEach(([key, preset]) => {
      const btn = document.createElement('button')
      btn.classList.add('button', 'configurator__preset-btn')
      btn.textContent = preset.label
      btn.addEventListener('click', () => {
        Object.assign(state, preset.parts)
        render()
      })
      presetsDiv.appendChild(btn)
    })

    wrapper.appendChild(presetsDiv)
  }

  render()
}

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', configurator)
