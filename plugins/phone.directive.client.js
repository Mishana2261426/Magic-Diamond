import IMask from 'imask'

export default defineNuxtPlugin(() => {
  const applyMask = (input) => {
    if (input.__masked) return
    input.__masked = true

    IMask(input, {
      mask: '+{7} (000) 000-00-00'
    })
  }

  const init = () => {
    document.querySelectorAll('input[type="tel"]').forEach(applyMask)
  }

  // первый запуск после загрузки страницы
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true })
  } else {
    init()
  }

  // ловим динамические инпуты (модалки, SPA-навигация, рендеры)
  const observer = new MutationObserver(() => init())
  observer.observe(document.body, { childList: true, subtree: true })
})
