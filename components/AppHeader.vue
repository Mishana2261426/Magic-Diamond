<template>
    <header class="header">
        <div class="container">
            <div class="header-menu-btn"></div>
            <a href="/" class="header-logo">
                <div class="header-logo-pic">
                    <img src="/images/header/logo.png" alt="">
                </div>
                <div class="header-logo-text">
                    <img src="/images/header/logo_text.png" alt="">
                </div>
            </a>
            <div class="header-search" :class="{ 'header-search_active': searchOpen }">
                <div class="header-search-back" @click="closeSearch">Поиск</div>
                <div class="container">
                    <div class="header-search-res">
                        <ProductCard
                            v-for="(item, i) in item"
                            :key="i"
                            :item="item"
                        />
                    </div>
                    <div class="header-search-field">
                        <input type="text" placeholder="Мне нужно">
                        <div class="header-search-field-res">
                            <a href="">
                                Кольца с бриллиантами
                            </a>
                            <a href="">
                                Кольца с бриллиантами
                            </a>
                            <a href="">
                                Кольца с бриллиантами
                            </a>
                            <a href="">
                                Кольца с бриллиантами
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="header-nav">
                <button class="header-nav-catalog">
                    Каталог
                </button>
                <button
                    class="header-nav_search-btn"
                    :class="{ 'header-nav_search-btn_active': searchOpen }"
                    @click="toggleSearch"
                    >
                    Поиск
                </button>
                <NuxtLink :to="link.to" v-for="link in header_links" class="header-nav-item" exact-active-class="header-nav-item_active">{{link.title}}</NuxtLink>
                <div class="header-nav-more">
                    <button @click="toggleMore" :class="{ 'active': moreOpen }">
                        Ещё
                    </button>
                    <ul v-show="moreOpen">
                        <li v-for="link in header_links">
                            <NuxtLink :to="link.to">{{ link.title }}</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="header-catalog">
                    <div class="header-catalog-back">
                        Каталог
                    </div>
                    <div class="header-catalog-list">
                        <a :href="catalog_item.link" v-for="catalog_item in catalog_items">
                            <span>
                                {{ catalog_item.title }}
                            </span>
                            <img :src="catalog_item.pic" alt="">
                        </a>
                    </div>
                </div>
            </nav>
            <div class="header-add">
                <a href="/fav" class="header-add-fav">

                </a>
                <button class="header-add-acc" @click="openCardPopup()">

                </button>
                <a href="" class="header-add-cart header-add-cart_active">
                    <span>
                        12
                    </span>
                </a>
            </div>
        </div>
        
    </header>
</template>

<script setup>
    const header_links = ref([
        {
            title: 'Премиум',
            to: '/premium'
        },
        {
            title: 'Акции',
            to: '/actions'
        },
        {
            title: 'Подарочные карты',
            to: '/gift'
        },
        {
            title: 'Свадьба',
            to: '/wedding'
        },
        {
            title: 'Бренды',
            to: '/brands'
        },
        {
            title: 'Вопросы и ответы',
            to: '/qsts'
        },
        {
            title: 'О компании',
            to: '/about'
        },
        {
            title: 'Контакты',
            to: '/contacts'
        }
    ])
    const item = ref([
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

    const res = ref([
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
    ]);

    const catalog_items = ref([
        {
            title: 'Все украшения',
            link: '',
            pic: '/images/header/pic1.png'
        },
        {
            title: 'Серьги',
            link: '',
            pic: '/images/header/pic2.png'
        },
        {
            title: 'Все украшения',
            link: '',
            pic: '/images/header/pic1.png'
        },
        {
            title: 'Серьги',
            link: '',
            pic: '/images/header/pic2.png'
        },
        {
            title: 'Все украшения',
            link: '',
            pic: '/images/header/pic1.png'
        },
        {
            title: 'Серьги',
            link: '',
            pic: '/images/header/pic2.png'
        },
        {
            title: 'Все украшения',
            link: '',
            pic: '/images/header/pic1.png'
        },
        {
            title: 'Серьги',
            link: '',
            pic: '/images/header/pic2.png'
        },
        {
            title: 'Все украшения',
            link: '',
            pic: '/images/header/pic1.png'
        },
        {
            title: 'Серьги',
            link: '',
            pic: '/images/header/pic2.png'
        },
        {
            title: 'Все украшения',
            link: '',
            pic: '/images/header/pic1.png'
        },
        {
            title: 'Серьги',
            link: '',
            pic: '/images/header/pic2.png'
        },
        {
            title: 'Все украшения',
            link: '',
            pic: '/images/header/pic1.png'
        },
        {
            title: 'Серьги',
            link: '',
            pic: '/images/header/pic2.png'
        },
        {
            title: 'Все украшения',
            link: '',
            pic: '/images/header/pic1.png'
        },
        {
            title: 'Серьги',
            link: '',
            pic: '/images/header/pic2.png'
        },
        {
            title: 'Все украшения',
            link: '',
            pic: '/images/header/pic1.png'
        },
        {
            title: 'Серьги',
            link: '',
            pic: '/images/header/pic2.png'
        },
        {
            title: 'Все украшения',
            link: '',
            pic: '/images/header/pic1.png'
        },
        {
            title: 'Серьги',
            link: '',
            pic: '/images/header/pic2.png'
        },
        {
            title: 'Все украшения',
            link: '',
            pic: '/images/header/pic1.png'
        },
        {
            title: 'Серьги',
            link: '',
            pic: '/images/header/pic2.png'
        },
        {
            title: 'Все украшения',
            link: '',
            pic: '/images/header/pic1.png'
        },
        {
            title: 'Серьги',
            link: '',
            pic: '/images/header/pic2.png'
        },
        {
            title: 'Все украшения',
            link: '',
            pic: '/images/header/pic1.png'
        },
        {
            title: 'Серьги',
            link: '',
            pic: '/images/header/pic2.png'
        },
        {
            title: 'Все украшения',
            link: '',
            pic: '/images/header/pic1.png'
        },
        {
            title: 'Серьги',
            link: '',
            pic: '/images/header/pic2.png'
        },
        {
            title: 'Все украшения',
            link: '',
            pic: '/images/header/pic1.png'
        },
        {
            title: 'Серьги',
            link: '',
            pic: '/images/header/pic2.png'
        },
        {
            title: 'Все украшения',
            link: '',
            pic: '/images/header/pic1.png'
        },
        {
            title: 'Серьги',
            link: '',
            pic: '/images/header/pic2.png'
        },
        {
            title: 'Все украшения',
            link: '',
            pic: '/images/header/pic1.png'
        },
        {
            title: 'Серьги',
            link: '',
            pic: '/images/header/pic2.png'
        },
        {
            title: 'Все украшения',
            link: '',
            pic: '/images/header/pic1.png'
        },
        {
            title: 'Серьги',
            link: '',
            pic: '/images/header/pic2.png'
        },
        {
            title: 'Все украшения',
            link: '',
            pic: '/images/header/pic1.png'
        },
        {
            title: 'Серьги',
            link: '',
            pic: '/images/header/pic2.png'
        },
    ])

    const searchOpen = ref(false)

    function toggleSearch() {
        searchOpen.value = !searchOpen.value
        if (document.querySelector('.header-nav-catalog').classList.contains('header-nav-catalog_active')) {
            document.querySelector('.header-nav-catalog').classList.remove('header-nav-catalog_active')
            document.querySelector('.header-catalog').classList.remove('header-catalog_active')
        }
    }

    const moreOpen = ref(false)

    function toggleMore() {
        moreOpen.value = !moreOpen.value
    }

    function closeMore() {
        moreOpen.value = false
    }

    function closeSearch() {
        searchOpen.value = false
    }

    function closeCatalog() {
        document.querySelector('.header-nav-catalog').classList.remove('header-nav-catalog_active')
        document.querySelector('.header-catalog').classList.remove('header-catalog_active')
    }

    const popup = usePopup()

    const openCardPopup = () => {
        popup.open('reg')
    }
    const route = useRoute()
    watch(route, () => {
        closeSearch()
        closeCatalog()
        closeMore()
    })
    onMounted(() => {
        const toggles = document.querySelectorAll('.header-catalog-toggle')
        toggles.forEach(toggle => {
            toggle.addEventListener('click', e => {
                e.stopPropagation()

                const parent = toggle.closest('li')
                const submenu = parent.querySelector(':scope > ul')
                const isOpen = parent.classList.contains('open')

                // закрыть соседей
                const siblings = parent.parentElement.querySelectorAll(':scope > li.open')
                siblings.forEach(sib => {
                    if (sib !== parent) sib.classList.remove('open')
                })

                parent.classList.toggle('open', !isOpen)

                // закрыть вложенные
                if (isOpen && submenu) {
                    submenu.querySelectorAll('.open').forEach(child => child.classList.remove('open'))
                }
            })
        })
        // кнопка открытия каталога
        const header_catalog_btn = document.querySelector('.header-nav-catalog')
        const header_catalog = document.querySelector('.header-catalog')
        const header_catalog_back = document.querySelector('.header-catalog-back')
        const header_search_btn = document.querySelector('.header-nav_search-btn')

        if (header_catalog_btn && header_catalog && header_catalog_back) {
            header_catalog_btn.addEventListener('click', () => {
                const isOpening = !header_catalog.classList.contains('header-catalog_active')

                header_catalog.classList.toggle('header-catalog_active')
                header_catalog_btn.classList.toggle('header-nav-catalog_active')
            })

            header_catalog_back.addEventListener('click', () => {
                header_catalog.classList.remove('header-catalog_active')
                header_catalog_btn.classList.remove('header-nav-catalog_active')
            })
        }

        // бургер-меню
        const header_menu_btn = document.querySelector('.header-menu-btn')
        const header_nav = document.querySelector('.header-nav')

        if (header_menu_btn && header_nav) {
            header_menu_btn.addEventListener('click', () => {
                header_nav.classList.toggle('header-nav_active')
                header_menu_btn.classList.toggle('header-menu-btn_active')
            })
        }

        const handleEsc = (e) => {
            if (e.key === 'Escape') {
            searchOpen.value = false
            }
        }

        window.addEventListener('keydown', handleEsc)

        onBeforeUnmount(() => {
            window.removeEventListener('keydown', handleEsc)
        })

        
    })
</script>


<style scoped>
    .header {
        height: 55px;
        position: sticky;
        top: 0;
        right: 0;
        left: 0;
        z-index: 9;
        background-color: #fff;
    }

    .header .container {
        display: flex;
        align-items: center;
        height: 100%;
        gap: 20px;
    }

    .header-logo {
        display: flex;
        gap: 10px;
    }

    .header-logo-pic {
        width: 94px;
        height: 36px;
        margin-top: 2px;
    }

    .header-logo-pic img {
        width: 100%;
    }

    .header-logo-text {
        width: 94px;
        height: 37px;
    }

    .header-logo-text img {
        width: 100%;
    }

    .header-nav {
        display: flex;
        height: 100%;
        gap: 0;
        margin-left: 80px;
        margin-right: auto;
        position: relative;
    }

    .header-nav a, .header-nav_search-btn {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.72px;
        display: flex;
        align-items: center;
        padding: 0 15px;
        box-sizing: border-box;
        white-space: nowrap;
    }

    .header-nav a:hover, .header-nav_search-btn:hover {
        color: #C1272D;
    }

    .header-nav_search-btn_active {
        background-color: #C1272D;
        color: #fff !important;
    }

    .header-nav-item_active {
        color: #C1272D !important;
    }

    /* .header-nav a:hover {
        background-color: #1C1C1C;
        color: #fff;
    } */

    .header-nav-catalog {
        color: #FFF;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.72px;
        display: flex;
        align-items: center;
        background-color: #1C1C1C;
        padding: 0 40px;
        box-sizing: border-box;
        gap: 0;
        transition: 0.3s;
    }

    .header-nav-catalog::after {
        content: '';
        width: 10px;
        height: 10px;
        background-image: url(/images/header/close.png);
        background-size: 100% 100%;;
        opacity: 0;
        transition: 0.3s;
    }

    .header-nav-catalog_active {
        background-color: #C1272D;
        gap: 20px;
        padding-right: 20px;
    }

    .header-nav-catalog_active::after {
        opacity: 1;
    }

    .header-add {
        display: flex;
        gap: 40px;
        height: 100%;
        align-items: center;
    }

    .header-add-fav {
        width: 23px;
        height: 20px;
        background-image: url(/images/header/fav.png);
        background-size: 100% 100%;
        transition: 0.3s;
    }

    .header-add-fav:hover {
        background-image: url(/images/header/fav_active.png);
    }

    .header-add-acc {
        width: 20px;
        height: 20px;
        background-image: url(/images/header/acc.png);
        background-size: 100% 100%;
        transition: 0.3s;
    }

    .header-add-acc:hover {
        background-image: url(/images/header/acc_active.png);
    }

    .header-add-cart {
        width: 17px;
        height: 20px;
        background-image: url(/images/header/cart.png);
        background-size: 100% 100%;
        transition: 0.3s;
        position: relative;
    }

    .header-add-cart:hover, .header-add-cart_active {
        background-image: url(/images/header/cart_active.png);
    }

    .header-add-cart span {
        color: #FFF;
        font-family: Inter;
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.4px;
        text-align: center;
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        top: auto;
        height: fit-content;
    }

    .header-catalog {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        max-height: 0;
        overflow: hidden;
        transition: 0.3s;
        opacity: 0;
    }

    .header-catalog_active {
        top: 55px;
        padding-top: 20px;
        max-height: 84vh;
        padding-bottom: 150px;
        opacity: 1;
        overflow: scroll;
    }

    .header-catalog_active::-webkit-scrollbar {
        display: none;
    }

    .header-catalog::before {
        content: '';
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        background-color: #fff;
        z-index: -1;
    }

    .header-catalog_active::before {
        top: 55px;
        bottom: 0;
    }

    .header-catalog-list {
        list-style: none;
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
    }

    .header-catalog-list a {
        width: 100%;
        max-width: 159px;
        aspect-ratio: 1 / 1;
        background: linear-gradient(0deg, #ECEBF0 0%, #ECEBF0 100%);
        padding: 10px !important;
        box-sizing: border-box;
        display: block !important;
        height: fit-content !important;
        position: relative;
        overflow: hidden;
        
    }

    .header-catalog-list a img {
        position: absolute;
        width: auto;
        height: auto;
        right: 0;
        bottom: 0;
        top: 20%;
        left: 23%;
        width: 149.422px;
        height: 179.306px;
        object-fit: contain;
        /* right: -60px; */
        /* bottom: -60px; */
    }

    .header-catalog-list a span  {
        color: var(--, #1C1C1C);
        font-family: "Playfair Display";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        position: relative;
        z-index: 1;
    }

    .header-catalog-toggle {
        width: 100%;
    }

    .header-menu-btn {
        display: none;
    }

    .header-catalog-back {
        display: none;
    }

    .header-nav-bot {
        display: none;
    }

    .header-search {
        position: fixed;
        top: 50px;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 5;
        background-color: #fff;
        box-sizing: border-box;
        overflow: hidden;
        bottom: auto;
        padding: 0;
        max-height: 0;
        height: 100%;
        transition: 0.3s;
    }

    .header-search_active {
        max-height: calc(100vh - 50px);
        padding-left: 105px;
        padding-top: 50px;
    }

    .header-search .container {
        height: 100%;
        width: 100%;
        align-items: flex-start;
    }

    .header-search-res {
        max-width: 680px;
        min-width: 680px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        margin-right: 130px;
        overflow-y: scroll;
        height: 100%;
        padding-bottom: 50px;
        box-sizing: border-box;
    }

    .header-search-res::-webkit-scrollbar {
        display: none;
    }

    .header-search-field {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .header-search-field input {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 70px;
        font-style: normal;
        font-weight: 100;
        line-height: 100%;
        letter-spacing: -2.8px;
    }

    .header-search-field input::placeholder {
        opacity: 0.3;
    }

    .header-search-field-res {
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: #4A4A4A;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
    }

    .header-search-back {
        display: none;
    }

    .header-catalog-single-back {
        display: none;
    }

    @media (max-width: 1700px) {
        /* .header-logo-pic {
            display: none;
        } */

        .header-nav {
            margin-left: 45px;
            justify-content: space-between;
            width: 100%;
            margin-right: 30px;
        }

        .header-nav a {
            font-size: 16px;
        }

        .header-nav-catalog {
            padding: 0 20px;
            font-size: 16px;
        }

        .header-nav-more button {
            font-size: 16px !important;
        }

        .header-nav_search-btn {
            font-size: 16px;
        }
    }

    @media (max-width: 1199px) {
        .header .container {
            justify-content: space-between;
        }

        .header-menu-btn {
            display: flex;
            width: 24px;
            height: 18px;
            background-image: url(/images/header/menu-btn.png);
            background-size: 100% 100%;
            transition: 0.3s;
        }

        .header-logo {
            margin: 0 auto;
            position: absolute;
            left: 0;
            right: 0;
            width: fit-content;
        }

        .header-logo-pic {
            display: none;
        }

        .header-logo-text {
            width: 114px;
            height: auto;
        }

        .header-add {
            gap: 30px;
        }

        .header-nav {
            position: fixed;
            top: 55px;
            left: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 20px;
            left: -100%;
            transition: 0.3s;
            padding: 0 50px;
            box-sizing: border-box;
            background-color: #fff;
            padding-top: 10px;
            max-width: 261px;
            min-width: 261px;
            width: 100%;
            overflow-y: scroll;
        }

        .header-nav_active {
            left: 0;
        }

        .header-nav::after {
            content: '';
            position: fixed;
            top: 55px;
            right: auto;
            left: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.20);
            backdrop-filter: blur(7.5px);
            transition: 0.3s;
            max-width: 0;
        }

        .header-nav_active::after {
            left: 261px;
            right: 0;
            max-width: 100%;
        }

        .header-menu-btn_active {
            width: 24px;
            height: 24px;
            background-image: url(/images/header/menu-close.svg);
        }

        .header-nav-catalog {
            width: fit-content;
        }

        .header-nav-catalog {
            padding: 0;
            background-color: transparent;
            color: #1C1C1C;
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 100%; /* 18px */
            letter-spacing: -0.72px;
            width: 100%;
            justify-content: space-between;
            align-items: center;
        }

        .header-nav-catalog::after {
            opacity: 1;
            background-image: url(/images/header/arrow_active.png);
            width: 6px;
            height: 12px;
        }

        .header-nav a, .header-nav_search-btn {
            padding: 0;
            color: #1C1C1C;
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 100%; /* 18px */
            letter-spacing: -0.72px;
        }

        .header-catalog-back {
            display: flex;
            color: #1C1C1C;
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 100%;
            letter-spacing: -0.72px;
            display: flex;
            align-items: center;
            gap: 20px;
            /* justify-content: space-between; */
            margin-bottom: 20px;
        }

        .header-catalog-back::before {
            content: '';
            width: 6px;
            height: 10px;
            background-image: url(/images/header/arrow_active.png);
            background-size: 100% 100%;
            display: flex;
            transform: rotate(180deg);
        }

        .header-catalog_active::before {
            display: none;
        }

        .header-catalog {
            padding: 0 50px;
            padding-top: 10px;
            overflow-y: scroll;
            top: 0;
            bottom: 0;
            opacity: 1;
            max-height: 100%;
            width: 100%;
            left: auto;
            overflow: hidden;
            box-sizing: border-box;
            right: -100%;
        }

        .header-catalog_active {
            top: 0;
            bottom: 0;
            right: 0;
            /* padding: 0; */
            background-color: #fff;
        }

        .header-search {
            padding-left: 0;
            padding-top: 0;
        }

        .header-search_active {
            padding-top: 10px;
        }

        .header-search-res {
            gap: 20px;
            max-width: 660px;
            min-width: 660px;
            margin-right: 50px;
        }

        .header-search-back {
            display: flex;
            padding: 0 50px;
            color: var(--, #1C1C1C);
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 100%;
            letter-spacing: -0.72px;
            display: flex;
            align-items: center;
            gap: 100px;
            margin-bottom: 22px;
        }

        .header-search-back::before {
            content: '';
            width: 8px;
            height: 16px;
            background-image: url(/images/header/arrow_active.png);
            background-size: 100% 100%;
            transform: rotate(180deg);
            display: flex;
        }

        .header-catalog-res {
            /* display: none !important; */
            display: none;
            position: fixed;
            margin-left: 0;
            left: 300px;
            top: 75px;
        }

        .header-nav_active .header-catalog-arr.header-catalog-arr_cards.open .header-catalog-res {
            display: flex;
        }
    }

    @media (max-width: 1199px) {

        .header-nav {
            max-width: 360px;
            min-width: 360px;
            padding: 10px 20px 0 20px;
            justify-content: flex-start;
        }

        .header-nav-item {
            display: flex !important;
        }

        .header-nav-more {
            display: none !important;
        }

        .header-nav_active::after {
            left: 360px;
        }

        .header-catalog-list {
            gap: 10px;
            padding-bottom: 200px;
        }

        .header-catalog-list a {
            width: calc(50% - 5px);
        }

        .header-catalog {
            padding: 10px 20px 0 20px;
            overflow-y: scroll;
        }

        .header-search {
            overflow-y: hidden;
        }

        .header-search_active {
            overflow-y: scroll;
        }

        .header-search .container {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 60px;
        }

        .header-search-field {
            gap: 30px;
        }

        .header-search-field input {
            color: #1C1C1C;
            font-family: Inter;
            font-size: 50px;
            font-style: normal;
            font-weight: 100;
            line-height: 100%;
            letter-spacing: -2px;
        }

        .header-search-res {
            display: none;
        }
    }

    @media (max-width: 639px) {
        .header-add-fav, .header-add-acc {
            display: none;
        }

        .header-nav {
            max-width: 100%;
            min-width: 0;
            padding: 10px 20px;
        }

        .header-nav_active::after {
            display: none;
        }

        .header-catalog {
            padding: 10px 20px;
        }


        .header-catalog-back {
            justify-content: flex-start;
            gap: 20px;
        }

        .header-nav-bot {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 10px;
        }

        .header-nav-bot a, .header-nav-bot button {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #1C1C1C;
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 100%; /* 18px */
            letter-spacing: -0.72px;
        }

        .header-nav-bot a::after, .header-nav-bot button::after {
            content: '';
            width: 6px;
            height: 12px;
            background-image: url(/images/header/arrow_active.png);
            background-size: 100% 100%;
            display: flex;
            margin-left: auto;
        }

        .header-nav-bot a img, .header-nav-bot button img {
            width: 20px;
        }

        .header-add {
            display: none;
        }

        .header-logo {
            position: unset;
            margin: 0;
        }

        .header .container {
            display: flex;
            flex-direction: row-reverse;
        }
    }

    .header-nav-more ul {
        position: absolute;
        background: #fff;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        list-style: none;
    }

    .header-nav-more.open ul {
        display: block;
    }

    .header-nav-more ul a {
        padding: 0;
        white-space: nowrap;
    }
    
    .header-nav-more ul li {
        display: none;
    }

    .header-nav-more {
        display: none;
        position: relative;
    }

    .header-nav-more button {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 0 15px;
        box-sizing: border-box;
        gap: 10px;
    }

    .header-nav-more button::after {
        content: '';
        width: 10px;
        height: 5px;
        background-image: url(/images/header/more_arrow.svg);
        background-size: 100% 100%;
        display: flex;
        transform: rotate(180deg);
    }

    .header-nav-more button.active::after {
        transform: rotate(0);
    }

    @media (max-width: 1785px) {
        .header-nav-item:nth-last-of-type(-n + 1) {
            display: none;
        }

        .header-nav-more {
            display: flex;
        }

        .header-nav-more ul {
            top: 55px;
        }

        .header-nav-more ul li:nth-last-of-type(-n + 1) {
            display: flex;
        }
    }

    @media (max-width: 1600px) {
        .header-nav-item:nth-last-of-type(-n + 2) {
            display: none;
        }

        .header-nav-more ul li:nth-last-of-type(-n + 2) {
            display: flex;
        }
    }

    @media (max-width: 1480px) {
        .header-nav-item:nth-last-of-type(-n + 3) {
            display: none;
        }

        .header-nav-more ul li:nth-last-of-type(-n + 3) {
            display: flex;
        }
    }

    @media (max-width: 1300px) {
        .header-nav-item:nth-last-of-type(-n + 4) {
            display: none;
        }

        .header-nav-more ul li:nth-last-of-type(-n + 4) {
            display: flex;
        }
    }
</style>