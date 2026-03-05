<template>
  <div ref="widgetContainer" class="ya-pay-widget"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const widgetContainer = ref(null)

onMounted(async () => {
  if (!import.meta.client) return

  // 1️⃣ Подключаем SDK, если его нет
  if (!window.YaPay) {
    await new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = 'https://pay.yandex.ru/sdk/v1/pay.js'
      script.async = true
      script.onload = resolve
      script.onerror = reject
      document.head.appendChild(script)
    })
  }

  // 2️⃣ Создаём данные для платежа
  const paymentData = {
    availablePaymentMethods: ['SPLIT'], // пример — “Оплата по частям”
    // тут можно добавить amount, merchant, currency, и т.д.
  }

  // 3️⃣ Создаём сессию оплаты
  const paymentSession = window.YaPay.createPaymentSession(paymentData)

  // 4️⃣ Монтируем виджет
  paymentSession.mountWidget(widgetContainer.value, {
    widgetType: window.YaPay.WidgetType.Ultimate,
    widgetTheme: window.YaPay.WidgetTheme.Light,
    borderRadius: 20,
    padding: window.YaPay.WidgetPaddingType.Default,
    withOutline: false,
    widgetBackground: window.YaPay.WidgetBackgroundType.Default,
    hideWidgetHeader: false,
    widgetSize: window.YaPay.WidgetSize.Medium,
  })
})
</script>

<style scoped>
.ya-pay-widget {
  width: 360px !important;
}
</style>
