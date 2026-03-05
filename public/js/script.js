const lightbox = GLightbox({
    touchNavigation: true,
    loop: true
});

document.addEventListener('click', (e) => {
    const allSelects = document.querySelectorAll('[data-select]');
    const isSelectClick = e.target.closest('[data-select]');

    // закрываем все дропдауны
    allSelects.forEach(sel => {
        if (sel !== isSelectClick) sel.classList.remove('active');
    });

    if (!isSelectClick) return;

    const current = isSelectClick.querySelector('.select-current');
    const list = isSelectClick.querySelector('.select-list');
    const hidden = isSelectClick.querySelector('input[type="hidden"]');

    // если клик по текущему
    if (e.target.classList.contains('select-current')) {
        isSelectClick.classList.toggle('active');
    }

    // если клик по элементу списка
    if (e.target.tagName === 'LI') {
        const value = e.target.dataset.value;
        const text = e.target.textContent.trim();

        current.textContent = text;
        hidden.value = value;
        isSelectClick.classList.remove('active');
    }
});