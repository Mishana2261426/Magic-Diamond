<template>
    <div class="catalog-cont">
        <div class="catalog-cont-top">
            <div class="catalog-cont-top-row">
                <label class="catalog-cont-top-switch" v-for="(item, i) in switches" :key="i">
                    {{ item.title }}
                    <input type="checkbox" :name="item.name">
                    <span></span>
                </label>
            </div>
            <div class="catalog-cont-top-add">
                <div class="catalog-top-search">
                    <input type="text" placeholder="Поиск">
                    <input type="submit" value="">
                </div>
                <div class="catalog-cont-top-add-filter">
                    <div class="sort">
                        <span class="sort-label">Сортировать:</span>
                        <div
                            class="sort-select"
                            ref="dropdown"
                            @click.stop="toggleDropdown"
                        >
                            <span class="sort-selected">{{ selected.label }}</span>
                            <ul v-if="isOpen" class="sort-dropdown">
                                <li
                                    v-for="filter_option in filter_options"
                                    :key="filter_option.value"
                                    :class="{ active: filter_option.value === selected.value }"
                                    @click.stop="selectOption(filter_option)"
                                >
                                    {{ filter_option.label }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="catalog-cont-row">
            <ProductCard
                v-for="(item, i) in catalog_items"
                :key="i"
                :item="item"
            />
        </div>
    </div>
</template>

<script setup>
    const catalog_items = ref([
        { title: 'Ожерелье из серебра с камнем сапфир', image: '/images/main-popular/pic.png', price: 50000, oldPrice: 100000, discount: '50%', isNew: true, isHit: true, rating: 5.0, reviews: 27, fav: true, sizes: [
            {num: '16'},
            {num: '16,5'},
            {num: '17'},
            {num: '17,5'},
            {num: '18'},
            {num: '18,5'},
            {num: '19'},
            {num: '20'},
            {num: '21,5'},
            {num: '21'},
        ], },
        { title: 'Ожерелье из золота с изумрудом', image: '/images/main-popular/pic.png', price: 47000, isNew: true, rating: 4.9, reviews: 10,  },
        { title: 'Серьги с фианитами', image: '/images/main-popular/pic.png', price: 31000, isHit: true, rating: 5.0, reviews: 45,  },
        { title: 'Кольцо с сапфиром', image: '/images/main-popular/pic.png', rating: 5.0, price: 38000,  },
        { title: 'Ожерелье из серебра с камнем сапфир', image: '/images/main-popular/pic.png', price: 50000, oldPrice: 100000, discount: '50%', isNew: true, isHit: true, rating: 5.0, reviews: 27,  },
        { title: 'Ожерелье из золота с изумрудом', image: '/images/main-popular/pic.png', price: 47000, isNew: true, rating: 4.9, reviews: 10,  },
        { title: 'Серьги с фианитами', image: '/images/main-popular/pic.png', price: 31000, isHit: true, rating: 5.0, reviews: 45,  },
        { title: 'Кольцо с сапфиром', image: '/images/main-popular/pic.png', rating: 5.0, price: 38000,  },
        { title: 'Ожерелье из серебра с камнем сапфир', image: '/images/main-popular/pic.png', price: 50000, oldPrice: 100000, discount: '50%', isNew: true, isHit: true, rating: 5.0, reviews: 27,  },
        { title: 'Ожерелье из золота с изумрудом', image: '/images/main-popular/pic.png', price: 47000, isNew: true, rating: 4.9, reviews: 10,  },
        { title: 'Серьги с фианитами', image: '/images/main-popular/pic.png', price: 31000, isHit: true, rating: 5.0, reviews: 45,  },
        { title: 'Кольцо с сапфиром', image: '/images/main-popular/pic.png', rating: 5.0, price: 38000,  }
    ]);

    const switches = ref([
        { title: 'В наличии', name: 'a'},
        { title: 'Премиум', name: 'a'},
        { title: 'Новинки', name: 'a'},
        { title: 'Хиты', name: 'a'},
        { title: 'Распродажа', name: 'a'},
        { title: 'Свадьба', name: 'a'},
        { title: 'Есть комплект', name: 'a'},
    ]);

    

    const isOpen = ref(false)
    const selected = ref({ label: 'По новизне', value: 'new' })

    const filter_options = [
        { label: 'По новизне', value: 'new' },
        { label: 'По возрастанию цены', value: 'price_asc' },
        { label: 'По убыванию цены', value: 'price_desc' },
        { label: 'По популярности', value: 'popular' },
    ]

    function toggleDropdown() {
        isOpen.value = !isOpen.value
    }

    function selectOption(option) {
        selected.value = option
        isOpen.value = false
        console.log('Выбрана сортировка:', option.value)
    }

    onMounted(() => {
        document.addEventListener('click', closeDropdown)
    })

    onBeforeUnmount(() => {
        document.removeEventListener('click', closeDropdown)
    })

    function closeDropdown() {
        isOpen.value = false
    }
</script>

<style scoped>
    .catalog-cont {
        width: 100%;
    }

    .catalog-cont-row {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        row-gap: 40px;
        flex-wrap: wrap;
    }

    .catalog-cont-top {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
    }

    .catalog-cont-top-row {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        row-gap: 0;
    }

    .catalog-cont-top-switch {
        display: flex;
        gap: 10px;
        align-items: center;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.72px;
        cursor: pointer;
        height: 30px;
    }

    .catalog-cont-top-switch span {
        width: 40px;
        height: 20px;
        background-color: #E5E5E5;
        border-radius: 50px;
        transition: 0.3s;
        position: relative;
    }

    .catalog-cont-top-switch span::after {
        content: '';
        width: 20px;
        height: 20px;
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid #E5E5E5;
        box-sizing: border-box;
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        transition: 0.3s;
    }

    .catalog-cont-top-switch input {
        display: none;
    }

    .catalog-cont-top-switch input:checked ~ span {
        background-color: #C1272D;
    }

    .catalog-cont-top-switch input:checked ~ span::after {
        transform: translateX(100%);
        border-color: #C1272D;
    }

    .catalog-cont-top-add {
        display: flex;
        align-items: center;
        padding-top: 8px;
    }

    .catalog-cont-top-add-filter {
        display: flex;
        align-items: center;
        position: relative;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.56px;
    }

    .sort {
        display: flex;
        align-items: center;
        gap: 10px;
        position: relative;
    }

    .sort-label {
        color: #1C1C1C;
    }

    .sort-select {
        position: relative;
        display: flex;
        align-items: center;
        gap: 10px;
        color: #C1272D;
        cursor: pointer;
        white-space: nowrap;
    }

    .sort-select::after {
        content: '';
        width: 12px;
        height: 6px;
        background-image: url(/images/catalog/arrow_red.png);
        background-size: 100% 100%;
        display: flex;
    }

    .sort-dropdown {
        position: absolute;
        right: 0;
        top: calc(100% + 5px);
        font-family: Inter;
        color: #1C1C1C;
        background: #fff;
        box-sizing: border-box;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        list-style: none;
        margin: 0;
        width: 180px;
        z-index: 50;
    }

    .sort-dropdown li {
        padding: 8px 12px;
        cursor: pointer;
        transition: background 0.2s;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 14px */
        letter-spacing: -0.56px;
    }

    .sort-dropdown li:hover {
        background: #f5f5f5;
    }

    .sort-dropdown li.active {
        font-weight: 500;
    }

    .catalog-top-search {
        display: none;
    }

    @media (max-width: 1700px) {
        .catalog-cont-row {
            row-gap: 20px;
        }

        

        .catalog-cont-top {
            gap: 20px;
            flex-direction: column;
        }

        .catalog-cont-top-switch {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.64px;
        }

        .catalog-top-search {
            display: flex;
        }

        .catalog-cont-top-add {
            justify-content: space-between;
            align-items: center;
            padding: 0;
        }

        .catalog-top-search {
            max-width: 300px;
            min-width: 300px;
            height: 30px;
            background-color: #E5E5E5;
            padding: 0 10px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
        }

        .catalog-top-search input[type='text'] {
            color: #1C1C1C;
            font-family: Inter;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.56px;
            width: 100%;
        }

        .catalog-top-search input[type='submit'] {
            max-width: 13px;
            min-width: 13px;
            height: 13px;
            background-image: url(/images/catalog/search.png);
            background-size: 100% 100%;
            display: flex;
            cursor: pointer;
        }
    }

    @media (max-width: 1199px) {
        .catalog-cont-top-row {
            flex-wrap: nowrap;
            overflow: scroll;
            margin: 0 -20px;
            padding: 0 20px;
        }

        .catalog-cont-top-row::-webkit-scrollbar {
            display: none;
        }

        .catalog-cont-top-switch {
            white-space: nowrap;
        }

        .catalog-top-search {
            max-width: 300px;
            min-width: 0;
            width: 100%;
        }
    }

    @media (max-width: 639px) {
        .catalog h1 {
            text-align: left;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }

        .sort-label {
            display: none;
        }

        .catalog-top-search {
            max-width: 170px;
        }

        .catalog-cont-row {
            margin: 0 -20px;
            gap: 10px;
        }

        
    }
</style>