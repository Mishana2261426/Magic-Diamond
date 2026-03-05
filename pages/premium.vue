<template>
    <section class="premium">
        <h1>
            Премиум
        </h1>
        <div class="premium-text">
            Открой для себя мир премиум с Magic Diamond
        </div>
        <div class="premium-pic">
            <img src="/images/about/premium.png" alt="">
        </div>
        <div class="catalog">
            <div class="container">
                <div class="catalog-top">
                    <div class="catalog-top-line">
                        <div class="catalog-top-line-title">
                            Выбранные фильтры
                        </div>
                        <button class="catalog-top-filter_btn" @click="toggleFilters">
                            Фильтры
                        </button>
                        <div class="catalog-top-line-chosen">
                            <button class="catalog-top-line-chosen_clear">
                                Сбросить
                            </button>
                            <div class="catalog-top-line-chosen_item" v-for="(chosen, i) in chosens" :key="i">
                                {{ chosen.title }}
                                <button class="catalog-top-line-chosen_item-del"></button>
                            </div>
                        </div>
                        <div class="catalog-top-search">
                            <input type="text" placeholder="Поиск">
                            <input type="submit" value="">
                        </div>
                    </div>
                </div>
                <div class="catalog-row">
                    <CatalogSide :is-active="isFiltersActive" @close="toggleFilters(false)"/>
                    <CatalogCont />
                </div>
                <CatalogPag :pags="pags"/>
            </div>
        </div>
        <MainQst />
        <MainChoice />
    </section>
</template>

<script setup>
    const chosens = ref([
        { title: 'до 50 000 ₽'},
        { title: 'Белое золото'},
        { title: 'Сапфир'},
        { title: 'Выбранный фильтр'},
        { title: 'Выбранный фильтр'},
    ]);

    const pags = ref([
        { num: '1', active: true},
        { num: '2', active: false},
        { num: '3', active: false},
        { num: '4', active: false},
        { num: '...', active: false},
        { num: '10', active: false},
    ]);

    const isFiltersActive = ref(false)

    function toggleFilters(force) {
        isFiltersActive.value = typeof force === 'boolean'
            ? force
            : !isFiltersActive.value

        document.body.style.overflow = isFiltersActive.value ? 'hidden' : ''
    }
</script>

<style scoped>
    .premium {
        margin-top: 50px;
        overflow: hidden;
    }

    .premium h1 {
        text-align: center;
        color: #C1272D;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        margin-bottom: 10px;
    }

    .premium-text {
        text-align: center;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.8px;
        margin-bottom: 30px;
    }

    .premium-pic {
        width: 100%;
        height: 350px;
    }
    
    .premium-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .catalog-top-filter_btn {
        display: none;
    }

    .catalog {
        overflow: hidden;
    }

    .catalog h1 {
        color: #C1272D;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        text-align: center;
    }

    .catalog-top {
        margin-top: 30px;
        display: flex;
        width: 100%;
        height: 30px;
    }

    .catalog-top-line {
        background-color: #FFF;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        /* overflow: visible; */
    }

    .catalog-top-line::before {
        content: '';
        background-color: #fff;
        top: 0;
        bottom: 0;
        left: -100%;
        width: 100%;
        position: absolute;
    }

    .catalog-top-line-title {
        max-width: 300px;
        min-width: 300px;
        width: 100%;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.56px;
    }

    .catalog-top-line-chosen {
        display: flex;
        height: 30px;
        overflow-x: scroll;
        position: relative;
        width: 100%;
    }

    .catalog-top-line-chosen::-webkit-scrollbar {
        display: none;
    }

    .catalog-top-line-chosen_clear {
        opacity: 1;
        color: rgba(193, 39, 45, 0.6);
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.56px;
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: none;
        text-decoration-thickness: auto;
        text-underline-offset: auto;
        text-underline-position: from-font;
        padding: 0px 10px;
        padding-bottom: 0px;
        box-sizing: border-box;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: sticky;
        left: 0;
        background-color: #fff;
    }

    .catalog-top-line-chosen_clear:hover {
        color: rgba(193, 39, 45, 1);
    }

    .catalog-top-line-chosen_item {
        height: 100%;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.56px;
        padding: 0px 10px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        white-space: nowrap;
    }

    .catalog-top-line-chosen_item-del {
        width: 10px;
        height: 18px;
        background-image: url(/images/catalog/close.png);
        background-size: 100% 100%;
    }

    .catalog-top-search {
        max-width: 300px;
        min-width: 300px;
        height: 100%;
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
        width: 13px;
        height: 13px;
        background-image: url(/images/catalog/search.png);
        background-size: 100% 100%;
        display: flex;
        cursor: pointer;
    }

    .catalog-row {
        gap: 10px;
        margin-top: 10px;
        display: flex;
    }

    

    @media (max-width: 1700px) {
        .catalog-top-search {
            display: none;
        }

        .catalog-top-line::after {
            content: '';
            background-color: #fff;
            top: 0;
            bottom: 0;
            right: -100%;
            width: 100%;
            position: absolute;
        }

        .premium-pic {
            height: 218px;
        }
    }

    @media (max-width: 1199px) {
        .catalog {
            padding-top: 30px;
        }

        .catalog-top {
            margin-top: 20px;
        }

        .catalog-top-line-title {
            display: none;
        }

        .catalog-top-filter_btn {
            display: flex;
            color: #1C1C1C;
            font-family: Inter;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.56px;
            align-items: center;
            gap: 10px;
            padding: 5px 10px 5px 0;
            box-sizing: border-box;
            padding-left: 20px;
        }

        .catalog-top-filter_btn::after {
            content: '';
            width: 10px;
            height: 10px;
            display: flex;
            background-image: url(/images/catalog/filter.png);
            background-size: 100% 100%;
        }

        .catalog-top {
            margin: 0 -20px;
            width: auto;
            margin-top: 20px;
        }

        .catalog-top-line::before, .catalog-top-line::after {
            display: none;
        }

        .premium-pic {
            height: 132px;
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

        .catalog-pag-row a {
            width: 30px;
            height: 30px;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.8px;
            text-align: center;
        }

        .premium {
            margin-top: 30px;
        }

        .premium h1 {
            text-align: left;
            padding-left: 20px;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }

        .premium-text {
            text-align: left;
            padding-left: 20px;
            max-width: 294px;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.8px;
        }

        .premium-pic {
            height: 78px;
        }
    }
</style>