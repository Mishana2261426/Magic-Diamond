<template>
    <section class="card">
        <div class="container">
            <h1>
                {{item.title}}
            </h1>
            <div class="card-row">
                <CardSlider :item="item" />
                <CardInfo :item="item" />
                <CardDesc :item="item" :pop_items="pop_items" />
                <div class="card-row-slider_add">
                    <MainSlider :items="pop_items" :nav="true" title="Комплект"/>
                </div>
            </div>
            <MainSlider :items="pop_items" :nav="true" title="Покупают вместе" :single="true"/>
            <MainSlider :items="pop_items" :nav="true" title="Рекомендации к вашим покупкам" :single="true"/>
            <MainSlider :items="pop_items" :nav="true" title="Смотрели ранее" :single="true"/>
        </div>
    </section>
</template>

<script setup>
    const pop_items = ref([
        { title: 'Ожерелье из серебра с камнем сапфир', image: '/images/main-popular/pic.png', price: 50000, oldPrice: 100000, discount: '50%', isNew: true, isHit: true, rating: 5.0, reviews: 27, fav: true },
        { title: 'Ожерелье из золота с изумрудом', image: '/images/main-popular/pic.png', price: 47000, isNew: true, rating: 4.9, reviews: 10 },
        { title: 'Серьги с фианитами', image: '/images/main-popular/pic.png', price: 31000, isHit: true, rating: 5.0, reviews: 45 },
        { title: 'Кольцо с сапфиром', image: '/images/main-popular/pic.png', rating: 5.0, price: 38000 },
        { title: 'Ожерелье из серебра с камнем сапфир', image: '/images/main-popular/pic.png', price: 50000, oldPrice: 100000, discount: '50%', isNew: true, isHit: true, rating: 5.0, reviews: 27 },
        { title: 'Ожерелье из золота с изумрудом', image: '/images/main-popular/pic.png', price: 47000, isNew: true, rating: 4.9, reviews: 10 },
        { title: 'Серьги с фианитами', image: '/images/main-popular/pic.png', price: 31000, isHit: true, rating: 5.0, reviews: 45 },
        { title: 'Кольцо с сапфиром', image: '/images/main-popular/pic.png', rating: 5.0, price: 38000 },
    ]);

    const item = ref({
        title: 'Обручальное кольцо из белого золота с сапфиром и бриллиантами', 
        image: '/images/main-popular/pic.png',
        pics: [
            {src: '/images/card/pic.png', alt: 'pic1'},
            {src: '/images/card/pic.png', alt: 'pic2'},
            {src: '/images/card/pic.png', alt: 'pic3'},
            {src: '/images/card/pic.png', alt: 'pic4'},
            {src: '/images/card/pic.png', alt: 'pic5'},
            {src: '/images/card/pic.png', alt: 'pic6'},
            {src: '/images/card/pic.png', alt: 'pic7'},
            {src: '/images/card/pic.png', alt: 'pic8'},
        ],
        price: 50000, 
        oldPrice: 100000, 
        discount: '50%', 
        isNew: true, 
        isHit: true, 
        rating: '5.0', 
        reviews: 27, 
        fav: true,
        bundle: true,
        sizes: [
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
        ],
        types: [
            {src: '/images/card/pic.png', value: 'type1'},
            {src: '/images/card/pic.png', value: 'type2'},
            {src: '/images/card/pic.png', value: 'type3'},
            {src: '/images/card/pic.png', value: 'type4'},
            {src: '/images/card/pic.png', value: 'type5'},
            {src: '/images/card/pic.png', value: 'type6'},
            {src: '/images/card/pic.png', value: 'type7'},
            {src: '/images/card/pic.png', value: 'type8'},
        ],
        tabs: [
            { label: 'Характеристики', value: 'chars' },
            { label: 'Описание', value: 'desc' },
            { label: 'Отзывы', value: 'reviews' }
        ],
        desc: {
            title: 'Бренд 123',
            art: '159154812',
            text: 'Кольцо из белого золота с сапфиром - это элегантное ювелирное изделие, сочетающее в себе изысканность и стиль. Белое золото придает изделию современный блеск и долговечность, а темно-синий сапфир добавляет нотку роскоши и загадочности. Идеальный выбор для особых случаев и повседневных образов. Он отличается бережным обращением, удобной посадкой и долговечностью. Подарите себе или своим близким изысканную красоту и неповторимый шарм!'
        },
        chars: [
            {
                group: 'Основные характеристики',
                items: [
                    { key: 'Артикул', value: '159154812' },
                    { key: 'Бренд', value: 'SOKOLOV' },
                    { key: 'Для кого', value: 'Для женщин' },
                    { key: 'Примерный вес', value: '2.05 г' },
                    { key: 'Тип металла', value: 'Белое золото' },
                    { key: 'Проба', value: '585' },
                    { key: 'Покрытие', value: 'Родирование' }
                ]
            },
            {
                group: 'Размеры',
                items: [
                    { key: 'Ширина кольца', value: '3 мм' },
                    { key: 'Ширина', value: '5 мм' },
                    { key: 'Высота', value: '5 мм' },
                    { key: 'Длина', value: '5 мм' }
                ]
            },
            {
                group: 'Вставка',
                items: [
                    { key: 'Бриллиант выращенный', value: '1 шт' },
                    { key: 'Примерный вес', value: '2.05 г' },
                    { key: 'Форма вставки', value: 'Круг' },
                    { key: 'Цвет', value: 'Бесцветный' }
                ]
            }
        ],
        review_total: {
            num: 5,
            rating: 4,
            count: 67
        },
        reviews: [
            {
                name: 'Иванова Мария',
                rating: 5,
                text: 'Хороший вариант за свою цену; размер в размер (15,5); не тонкое; камень на глаз от фианитов легко отличить, совсем другой блеск (но я не профи, конечно)',
                date: '28 сентября 2025',
                pics: [
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                ]
            },
            {
                name: 'Иванова Мария',
                rating: 5,
                text: 'Хороший вариант за свою цену; размер в размер (15,5); не тонкое; камень на глаз от фианитов легко отличить, совсем другой блеск (но я не профи, конечно)',
                date: '28 сентября 2025',
                pics: [
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                ]
            },
            {
                name: 'Иванова Мария',
                rating: 5,
                text: 'Хороший вариант за свою цену; размер в размер (15,5); не тонкое; камень на глаз от фианитов легко отличить, совсем другой блеск (но я не профи, конечно)',
                date: '28 сентября 2025',
                pics: [
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                ]
            },
            {
                name: 'Иванова Мария',
                rating: 5,
                text: 'Хороший вариант за свою цену; размер в размер (15,5); не тонкое; камень на глаз от фианитов легко отличить, совсем другой блеск (но я не профи, конечно)',
                date: '28 сентября 2025',
                pics: [
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                ]
            },
            {
                name: 'Иванова Мария',
                rating: 5,
                text: 'Хороший вариант за свою цену; размер в размер (15,5); не тонкое; камень на глаз от фианитов легко отличить, совсем другой блеск (но я не профи, конечно)',
                date: '28 сентября 2025',
                pics: [
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                ]
            },
            {
                name: 'Иванова Мария',
                rating: 5,
                text: 'Хороший вариант за свою цену; размер в размер (15,5); не тонкое; камень на глаз от фианитов легко отличить, совсем другой блеск (но я не профи, конечно)',
                date: '28 сентября 2025',
                pics: [
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                    {src: '/images/card/review_pic.png', alt: 'pic'},
                ]
            },
        ]
    });
</script>

<style scoped>
    .card {
        /* overflow: hidden; */
        margin-top: 50px;
    }

    .card h1 {
        display: none;
    }

    .card-row {
        display: grid;
        gap: 20px;
        flex-wrap: wrap;
        row-gap: 20px;
        margin-bottom: 100px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        grid-template-areas:
        "slider info"
        "desc info"
        "pop_slider info";
    }

    .card-row-slider_add {
        width: 100%;
        /* max-width: calc(50% - 10px); */
        overflow: hidden;
        grid-area: pop_slider;
    }

    .card-row .main-popular-slider {
        /* width: calc(50% - 10px); */
        overflow: hidden;
        margin-top: 100px;
    }

    :deep(.card-row .main-popular-slider-title) {
        text-align: left;
    }

    @media (max-width: 1700px) {
        .card-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
            grid-template-areas:
            "slider info"
            "desc info"
            "pop_slider pop_slider";
            gap: 15px;
            margin-bottom: 162px;
        }

        .card-row .main-popular-slider {
            width: 100%;
            overflow: visible;
        }

        :deep(.card-row .main-popular-slider-title) {
            text-align: center;
        }

        .card-row-slider_add {
            overflow: hidden;
            width: 50%;
            /* grid-area: none; */
        }
    }

    @media (max-width: 1199px) {
        .card {
            position: relative;
        }

        .card-row {
            display: flex;
            flex-direction: column;
            gap: 0;
            margin-bottom: 80px;
        }

        .card h1 {
            display: flex;
            max-width: 393px;
            color: #1C1C1C;
            font-family: Inter;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.8px;
            margin-bottom: 30px;
        }

        .card-row .main-popular-slider {
            margin-top: 100px;
        }

        :deep(.card-row .main-popular-slider-title) {
            text-align: left;
        }

        .card-row-slider_add {
            width: 100%;
            overflow: visible;
        }
    }

    @media (max-width: 639px) {
        .card {
            margin-top: 30px;
        }

        .card h1 {
            max-width: 264px;
        }
    }
</style>
