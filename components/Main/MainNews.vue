<template>
    <div class="main-news">
        <div class="container">
            <h2>
                Новинки
            </h2>
            <div class="marquee">
                подчеркните свою индивидуальность
            </div>
            <div class="main-news-row">
                <div class="main-news-item">
                    <div class="main-news-item-pic">
                        <img src="/images/main-news/pic1.png" alt="">
                    </div>
                    <div class="main-news-item-cont">
                        <div class="main-news-item-title">
                            Летняя новинка
                        </div>
                        <div class="main-news-item-text">
                            Новые товары, новые тренды
                        </div>
                        <a href="" class="main-news-item-btn">
                            Перейти к новинкам
                        </a>
                    </div>
                </div>
                <div class="main-news-item">
                    <div class="main-news-item-pic">
                        <img src="/images/main-news/pic2.png" alt="">
                    </div>
                    <div class="main-news-item-cont">
                        <div class="main-news-item-title">
                            Летняя новинка
                        </div>
                        <div class="main-news-item-text">
                            Новые товары, новые тренды
                        </div>
                        <a href="" class="main-news-item-btn">
                            Перейти к новинкам
                        </a>
                    </div>
                </div>
            </div>
            <MainSlider :items="new_items" :nav="true" />
        </div>
    </div>
</template>

<script setup>
    const new_items = ref([
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
        { title: 'Ожерелье из золота с изумрудом', image: '/images/main-popular/pic.png', price: 47000, isNew: true, rating: 4.9, reviews: 10 },
        { title: 'Серьги с фианитами', image: '/images/main-popular/pic.png', price: 31000, isHit: true, rating: 5.0, reviews: 45 },
        { title: 'Кольцо с сапфиром', image: '/images/main-popular/pic.png', rating: 5.0, price: 38000 },
        { title: 'Ожерелье из серебра с камнем сапфир', image: '/images/main-popular/pic.png', price: 50000, oldPrice: 100000, discount: '50%', isNew: true, isHit: true, rating: 5.0, reviews: 27 },
        { title: 'Ожерелье из золота с изумрудом', image: '/images/main-popular/pic.png', price: 47000, isNew: true, rating: 4.9, reviews: 10 },
        { title: 'Серьги с фианитами', image: '/images/main-popular/pic.png', price: 31000, isHit: true, rating: 5.0, reviews: 45 },
        { title: 'Кольцо с сапфиром', image: '/images/main-popular/pic.png', rating: 5.0, price: 38000 },
    ])

    onMounted(() => {
        const marquee = document.querySelector(".marquee")
        if (!marquee) return

        const text = marquee.textContent.trim()
        marquee.textContent = ''

        const track = document.createElement('div')
        track.classList.add('marquee__track')

        let totalWidth = 0
        while (totalWidth < marquee.offsetWidth * 2) {
            const span = document.createElement('span')
            span.classList.add('marquee__item')
            span.textContent = text
            track.appendChild(span)
            totalWidth += span.textContent.length * 2
        }

        marquee.appendChild(track)

        const duration = Math.max(track.scrollWidth / 300, 20)
        track.style.animation = `marqueeScroll ${duration}s linear infinite`
    })
</script>


<style scoped>
    .main-news {
        padding: 30px 0 116px;
        box-sizing: border-box;
        background-color: #EFEFEF;
        overflow: hidden;
    }

    .main-news h2 {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 200px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -16px;
        text-transform: uppercase;
        text-align: center;
    }

    .main-news-row {
        margin-top: 40px;
        display: flex;
        height: 800px;
    }

    .main-news-item {
        position: relative;
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .main-news-item::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(28, 28, 28, 0.50);
        opacity: 0;
        transition: 0.3s;
    }

    .main-news-item:hover::after {
        opacity: 1;
    }

    .main-news-item-pic {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
    }

    .main-news-item-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .main-news-item-cont {
        position: relative;
        z-index: 1;
        max-width: 300px;
        width: 100%;
        opacity: 0;
        transition: 0.3s;
    }

    .main-news-item:hover .main-news-item-cont {
        opacity: 1;
    }

    .main-news-item-title {
        color: #FFF;
        margin-bottom: 10px;
        font-family: "Playfair Display";
        font-size: 32px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
    }

    .main-news-item-text {
        color: rgba(255, 255, 255, 0.80);
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
    }

    .main-news-item-btn {
        color: #C1272D;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        border: 1px solid  #E5E5E5;
        background: #FFF;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 15px;
        box-sizing: border-box;
        margin-top: 20px;
    }

    .main-news-item-btn:hover {
        background-color: #C1272D;
        color: #fff;
        border-color: #C1272D;
    }

    .marquee {
        position: relative;
        overflow: visible;
        white-space: nowrap;
        display: flex;
        align-items: center;
        font-size: 24px;
        color: #C1272D;
        font-family: Inter, sans-serif;
        font-style: italic;
        letter-spacing: -0.96px;
    }

    :deep(.marquee__track) {
        display: inline-flex;
        white-space: nowrap;
        will-change: transform;
        animation: marqueeScroll 30s linear infinite;
    }

    :deep(.marquee__item) {
        margin: 0 40px;
    }

    .main-news .main-popular-slider {
        margin-top: 30px;
    }

    @keyframes marqueeScroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }

    :deep(.main-popular-slider-nav) {
        right: 0;
        left: 0;
        top: auto;
        margin: auto;
        bottom: -66px;
    }

    @media (max-width: 1700px) {
        .main-news {

        }

        .main-news-row {
            height: 550px;
        }
    }

    @media (max-width: 1199px) {
        .main-news {
            padding: 100px 0;
        }

        .main-news h2 {
            font-size: 130px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -10.4px;
            text-transform: uppercase;
        }

        .main-news-row {
            height: 600px;
        }

        .main-popular-row {
            margin-top: 15px;
        }

        .main-news-item {
            display: none;
            width: 100%;
            aspect-ratio: 1 / 1;
        }

        .main-news-item:first-child {
            display: flex;
        }

        .main-news .main-popular-slider {
            margin-top: 15px;
        }
    }

    @media (max-width: 639px) {
        .main-news {
            padding: 80px 0 40px;
        }

        .main-news h2 {
            font-size: 70px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -5.6px;
            text-transform: uppercase;
        }

        .marquee {
            font-size: 16px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.64px;
        }

        :deep(.marquee__item) {
            margin: 0 20px;
        }

        .main-news-row {
            margin: 0 -20px;
            margin-top: 20px;
            height: 400px;
        }

        .main-news-item {

        }

        .main-news .main-popular-slider {
            margin-top: 20px;
        }
    }
</style>

<style>
    @keyframes marqueeScroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }
    .marquee__track {
        display: inline-flex;
        animation: marqueeScroll 30s linear infinite;
    }
</style>
