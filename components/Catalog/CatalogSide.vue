<template>
    <div class="catalog-side" :class="{ 'catalog-side_active': isActive }">
        <div class="catalog-side-title" @click="closeFilters">
            Фильтры
        </div>

        <div class="catalog-side-price">
            <div class="price-filter__title">Цена</div>

            <div class="price-filter__values">
                <span>от {{ formatted(minValue) }} ₽</span>
                <span>до {{ formatted(maxValue) }} ₽</span>
            </div>

            <div class="price-filter__range">
                <input
                    :class="['range', 'range--min', { top: activeThumb === 'min' }]"
                    type="range"
                    v-model.number="minValue"
                    :min="minPrice"
                    :max="maxPrice"
                    step="1000"
                    @pointerdown="activeThumb = 'min'"
                    @mousedown="activeThumb = 'min'"
                    @touchstart.passive="activeThumb = 'min'"
                />
                <input
                    :class="['range', 'range--max', { top: activeThumb === 'max' }]"
                    type="range"
                    v-model.number="maxValue"
                    :min="minPrice"
                    :max="maxPrice"
                    step="1000"
                    @pointerdown="activeThumb = 'max'"
                    @mousedown="activeThumb = 'max'"
                    @touchstart.passive="activeThumb = 'max'"
                />
            </div>

            <div class="catalog-side-price_add">
                <button
                    v-for="(price, i) in prices"
                    :key="i"
                    :class="{ active: activePrice === i }"
                    @click="applyPrice(price, i)"
                >
                    {{ price.price }}
                </button>
            </div>
        </div>

        <div class="catalog-side-row">
            <div
                v-for="(filter, i) in filters"
                :key="i"
                class="catalog-side-item"
                :class="{ 'catalog-side-item_active': activeIndexes.includes(i) }"
            >
                <div class="catalog-side-item-top" @click="toggle(i)">
                    {{ filter.title }}
                </div>

                <div
                    ref="lists"
                    class="catalog-side-item-list"
                    style="overflow: hidden; height: 0; transition: height 0.3s ease;"
                >
                    <label v-for="(option, j) in filter.options" :key="j">
                        <input type="checkbox" :name="option.name" />
                        <span></span>
                        {{ option.value }}
                    </label>
                </div>
            </div>
        </div>

        <div class="catalog-side-bot">
            <button class="catalog-side-bot_clear">
                Очистить все фильтры
            </button>
            <button class="catalog-side-bot_apply">
                Применть
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'

const filters = [
    {
        title: 'Металл',
        options: [
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
        ]
    },
    {
        title: 'Проба',
        options: [
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
        ]
    },
    {
        title: 'Вставка',
        options: [
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
        ]
    },
    {
        title: 'Цвет вставки',
        options: [
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
        ]
    },
    {
        title: 'Тип замка',
        options: [
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
        ]
    },
    {
        title: 'Тематика',
        options: [
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
        ]
    },
    {
        title: 'Стиль изделия',
        options: [
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
        ]
    },
    {
        title: 'Виды изделий',
        options: [
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
        ]
    },
    {
        title: 'Размер',
        options: [
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
        ]
    },
    {
        title: 'Обработка металла',
        options: [
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
        ]
    },
    {
        title: 'Исполнение',
        options: [
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
        ]
    },
    {
        title: 'Ширина цепи',
        options: [
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
        ]
    },
    {
        title: 'Тип плетения',
        options: [
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
        ]
    },
    {
        title: 'Бренд',
        options: [
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
            { value: 'New', name: 'a' },
        ]
    },
]

const lists = ref([])
const activeIndexes = ref([])

function toggle(i) {
    const el = lists.value[i]
    if (!el) return

    const isActive = activeIndexes.value.includes(i)

    if (isActive) {
        const h = el.scrollHeight
        el.style.height = h + 'px'
        requestAnimationFrame(() => {
            el.style.height = '0px'
        })
        activeIndexes.value = activeIndexes.value.filter(idx => idx !== i)
    } else {
        activeIndexes.value.push(i)
        nextTick(() => {
            const h = el.scrollHeight
            el.style.height = h + 'px'
        })
    }
}

const minPrice = ref(5000)
const maxPrice = ref(1000000)

const minValue = ref(20000)
const maxValue = ref(150000)

const prices = ref([
    { price: 'до 20 000 ₽', num: 20000, type: 'max' },
    { price: 'до 150 000 ₽', num: 150000, type: 'max' },
    { price: 'до 50 000 ₽', num: 50000, type: 'max' },
    { price: 'от 150 000 ₽', num: 150000, type: 'min' },
])

const activePrice = ref(null)

/**
 * Важно для Firefox: чтобы при пересечении бегунков не было swap (скачков),
 * мы зажимаем активный ползунок к другому.
 */
const activeThumb = ref('max')

function applyPrice(price, index) {
    activePrice.value = index

    if (price.type === 'max') {
        activeThumb.value = 'max'
        maxValue.value = price.num
        if (minValue.value > maxValue.value) {
            minValue.value = maxValue.value
        }
    } else if (price.type === 'min') {
        activeThumb.value = 'min'
        minValue.value = price.num
        if (maxValue.value < minValue.value) {
            maxValue.value = minValue.value
        }
    }
}

watch([minValue, maxValue], ([min, max]) => {
    // границы
    if (min < minPrice.value) minValue.value = minPrice.value
    if (max < minPrice.value) maxValue.value = minPrice.value
    if (min > maxPrice.value) minValue.value = maxPrice.value
    if (max > maxPrice.value) maxValue.value = maxPrice.value

    // clamp вместо swap
    if (minValue.value > maxValue.value) {
        if (activeThumb.value === 'min') {
            minValue.value = maxValue.value
        } else {
            maxValue.value = minValue.value
        }
    }
})

function formatted(v) {
    return v.toLocaleString('ru-RU')
}

defineProps({
    isActive: Boolean
})
const emit = defineEmits(['close'])

function closeFilters() {
    emit('close')
}
</script>

<style scoped>
.catalog-side {
    max-width: 300px;
    min-width: 300px;
}

.catalog-side-title {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    padding: 6.5px 0;
    box-sizing: border-box;
    color: #1C1C1C;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: -0.56px;
    padding-right: 10px;
    margin-bottom: 10px;
}

.catalog-side-title::after {
    content: '';
    width: 10px;
    height: 10px;
    background-image: url(/images/catalog/filter.png);
    background-size: 100% 100%;
    display: flex;
}

.catalog-side-price {
    margin-bottom: 20px;
    padding-right: 10px;
}

.catalog-side-row {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.catalog-side-item-top {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    padding: 6px 0;
    padding-right: 10px;
    box-sizing: border-box;
    color: #1C1C1C;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: -0.72px;
    cursor: pointer;
}

.catalog-side-item {
    transition: 0.3s;
}

.catalog-side-item-top::after {
    content: '';
    width: 10px;
    height: 10px;
    background-image: url(/images/catalog/filter_plus.png);
    background-size: 100% 100%;
    transition: 0.3s;
}

.catalog-side-item_active .catalog-side-item-top::after {
    transform: rotate(45deg);
}

.catalog-side-item-list {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.catalog-side-item-list label {
    display: flex;
    gap: 10px;
    align-items: center;
    color: rgba(28, 28, 28, 0.8);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: -0.56px;
    cursor: pointer;
}

.catalog-side-item-list label span {
    width: 14px;
    height: 14px;
    border: 1px solid rgba(28, 28, 28, 0.30);
    background: #FFF;
    transition: 0.3s;
    box-sizing: border-box;
}

.catalog-side-item-list label input {
    display: none;
}

.catalog-side-item-list label input:checked ~ span {
    background-color: #C1272D;
    border-color: #C1272D;
}

/* Цена */
.price-filter__title {
    color: #1C1C1C;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: -0.72px;
    margin-bottom: 10px;
}

.price-filter__values {
    display: flex;
    justify-content: space-between;
    color: rgba(28, 28, 28, 0.8);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: -0.48px;
    margin-bottom: 10px;
}

/* Два ползунка — фикс для Firefox */
.price-filter__range {
    position: relative;
    height: 32px;
}

.price-filter__range::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 1px;
    background-color: #1C1C1C;
    margin: auto;
}

.price-filter__range .range {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    margin: 0;
    height: 32px;

    appearance: none;
    background: transparent;

    /* Критично: чтобы один range не блокировал второй */
    pointer-events: none;
}

/* Активный сверху */
.price-filter__range .range--min { z-index: 2; }
.price-filter__range .range--max { z-index: 3; }
.price-filter__range .range.top { z-index: 10; }

/* Track */
.price-filter__range .range::-webkit-slider-runnable-track {
    height: 1px;
    background: transparent;
}
.price-filter__range .range::-moz-range-track {
    height: 1px;
    background: transparent;
    border: none;
}
.price-filter__range .range::-moz-range-progress {
    background: transparent;
}

/* Thumb */
.price-filter__range .range::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #1C1C1C;
    box-sizing: border-box;
    cursor: pointer;

    /* Разрешаем взаимодействие только с бегунком */
    pointer-events: auto;

    margin-top: -10px;
    position: relative;
}

.price-filter__range .range::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #1C1C1C;
    box-sizing: border-box;
    cursor: pointer;

    /* Разрешаем взаимодействие только с бегунком */
    pointer-events: auto;
}

/* Кнопки быстрых цен */
.catalog-side-price_add {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    row-gap: 5px;
}

.catalog-side-price_add button {
    padding: 2px 5px;
    box-sizing: border-box;
    color: rgba(28, 28, 28, 0.8);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: -0.48px;
}

.catalog-side-price_add button.active {
    background-color: #1C1C1C;
    color: #FFF;
}

.catalog-side-bot {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.catalog-side-bot button {
    display: flex;
    padding: 10px 15px;
    justify-content: center;
    align-items: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: -0.64px;
    box-sizing: border-box;
}

.catalog-side-bot_clear {
    color: #1C1C1C;
    border: 1px solid #1C1C1C;
}

.catalog-side-bot_clear:hover {
    background-color: #fff;
    border-color: #fff;
    color: #C1272D;
}

.catalog-side-bot_apply {
    background-color: #C1272D;
    color: #fff;
}

.catalog-side-bot_apply:hover {
    background-color: #fff;
    border-color: #fff;
    color: #C1272D;
}

@media (max-width: 1199px) {
    .catalog-side {
        position: fixed;
        top: 55px;
        right: 0;
        left: 0;
        bottom: 0;
        max-width: none;
        min-width: 0;
        width: 100%;
        background-color: #fff;
        z-index: 2;
        display: flex;
        flex-direction: column;
        padding: 20px;
        overflow-y: scroll;
        box-sizing: border-box;
        transform: translateX(-100%);
        transition: 0.3s;
        padding-bottom: 100px;
    }

    .catalog-side::-webkit-scrollbar {
        display: none;
    }

    .catalog-side_active {
        transform: translateX(0);
    }

    .catalog-side-title {
        align-items: center;
    }

    .catalog-side-title::before {
        content: '';
        width: 8px;
        height: 16px;
        background-image: url(/images/catalog/pag_arrow.png);
        background-size: 100% 100%;
        display: flex;
    }
}
</style>
