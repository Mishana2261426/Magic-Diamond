const _show = ref(false)
const _text = ref('Загрузка...')

export function usePreloader() {
	function open(text = 'Загрузка...') {
		_text.value = text
		_show.value = true
		document.documentElement.style.overflow = 'hidden'
	}

	function close() {
		_show.value = false
		document.documentElement.style.overflow = ''
	}

	return {
		show: readonly(_show),
		text: readonly(_text),
		open,
		close,
	}
}