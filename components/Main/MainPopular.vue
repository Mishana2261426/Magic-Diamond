<template>
    <div class="main-popular">
        <div class="container">
            <div class="main-popular-top">
                <h2>Популярные товары</h2>
                <p>Выберите уникальное ювелирное изделие для себя и своих близких</p>
            </div>

            <MainSlider :items="pop_items" :nav="true"/>
            <a href="#" class="main-popular-cat">Смотреть каталог</a>
        </div>
    </div>
</template>

<script setup>
    const pop_items = ref([
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
        { title: 'Ожерелье из золота с изумрудом', image: '/images/main-popular/pic.png', price: 47000, isNew: true, rating: 4.9, reviews: 10, sizes: [
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
        { title: 'Серьги с фианитами', image: '/images/main-popular/pic.png', price: 31000, isHit: true, rating: 5.0, reviews: 45, sizes: [
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
        { title: 'Кольцо с сапфиром', image: '/images/main-popular/pic.png', rating: 5.0, price: 38000, sizes: [
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
        { title: 'Ожерелье из серебра с камнем сапфир', image: '/images/main-popular/pic.png', price: 50000, oldPrice: 100000, discount: '50%', isNew: true, isHit: true, rating: 5.0, reviews: 27, sizes: [
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
        { title: 'Ожерелье из золота с изумрудом', image: '/images/main-popular/pic.png', price: 47000, isNew: true, rating: 4.9, reviews: 10, sizes: [
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
        { title: 'Серьги с фианитами', image: '/images/main-popular/pic.png', price: 31000, isHit: true, rating: 5.0, reviews: 45, sizes: [
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
        { title: 'Кольцо с сапфиром', image: '/images/main-popular/pic.png', rating: 5.0, price: 38000, sizes: [
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
    ])
</script>



<style scoped>
    .main-popular {
        background-color: #EFEFEF;
        padding: 50px 0;
        box-sizing: border-box;
        overflow: hidden;
    }

    .main-popular-top {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }

    .main-popular-top h2 {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
    }

    .main-popular-top p {
        max-width: 417px;
        color: #1C1C1C;
        font-family: "Playfair Display";
        font-size: 24px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.96px;
    }

    

    .main-popular-cat {
        color: #FFF;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        max-width: 350px;
        width: 100%;
        height: 50px;
        padding: 10px 15px;
        box-sizing: border-box;
        background: #C1272D;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px auto 0;
    }

    .main-popular-cat:hover {
        background-color: #fff;
        color: #C1272D;
    }

    .main-popular .main-popular-slider {
        margin-top: 52px;
    }

    @media (max-width: 1199px) {
        .main-popular {
            padding-top: 50px;
            padding-bottom: 162px;
        }

        .main-popular-cat {
            display: none;
        }

        .main-popular .main-popular-slider {
            margin-top: 30px;
        }
    }

    @media (max-width: 639px) {
        .main-popular {
            padding-bottom: 80px;
        }

        .main-popular-top {
            text-align: left;
            align-items: flex-start;
        }

        .main-popular-top h2 {
            text-align: left;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }

        .main-popular-top p {
            font-size: 20px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.8px;
        }

        .main-popular .main-popular-slider {
            margin-top: 20px;
        }
    }
</style>