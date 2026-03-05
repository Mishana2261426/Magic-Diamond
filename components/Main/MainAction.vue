<template>
    <div class="main-action">
        <div class="container">
            <h2>
                Акции
            </h2>
            <div class="main-action-slider">
                <div class="main-popular-slider-nav">
                    <button class="main-popular-slider-nav-arr main-popular-slider-nav-arr_prev">

                    </button>
                    <button class="main-popular-slider-nav-arr main-popular-slider-nav-arr_next">

                    </button>
                </div>
                <div class="swiper main-action-row">
                    <div class="swiper-wrapper">
                        <ActionCard :actions="actions"/>
                    </div>
                </div>
            </div>
            <MainSlider :items="pop_items" :nav="true" title="Еще товары"/>
        </div>
    </div>
</template>

<script setup>
    const actions = [
        { title: 'Бриллиантовые дни', date: 'Действует до 01.09.2025', text: 'Скидка на все украшения с  бриллиантами -56%', image: '/images/main-action/pic1.png'},
        { title: 'Осенняя акция', date: 'Действует до 01.09.2025', text: 'You buy a set of jewelry, a ring as a gift. Also, a set discount -50%. The promotion is limited by the number of sets', image: '/images/main-action/pic2.png'},
        { title: 'Бриллиантовые дни', date: 'Действует до 01.09.2025', text: 'Скидка на все украшения с  бриллиантами -56%', image: '/images/main-action/pic1.png'},
        { title: 'Осенняя акция', date: 'Действует до 01.09.2025', text: 'You buy a set of jewelry, a ring as a gift. Also, a set discount -50%. The promotion is limited by the number of sets', image: '/images/main-action/pic2.png'},
    ];

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

    onMounted(() => {
        document.querySelectorAll('.main-action-slider').forEach(slider => {
            const row = slider.querySelector('.main-action-row')
            const prev = slider.querySelector('.main-popular-slider-nav-arr_prev')
            const next = slider.querySelector('.main-popular-slider-nav-arr_next')

            if (!row) return
            const slides = row.querySelectorAll('.swiper-slide')
            if (!slides.length) return

            if (row.swiper) {
                row.swiper.destroy(true, true)
            }

            new Swiper(row, {
                slidesPerView: 'auto',  // аналог variableWidth
                loop: true,             // бесконечная прокрутка
                grabCursor: true,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                observer: false,        // чтобы не триггерил мутации
                observeParents: false,
                observeSlideChildren: false,
            })
        })

    })
</script>

<style scoped>
    .main-action {
        background: #EFEFEF;
        padding-top: 100px;
        overflow: hidden;
        padding-bottom: 212px;
    }

    .main-action h2 {
        color: #C1272D;
        font-family: Inter;
        font-size: 200px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -16px;
        text-transform: uppercase;
        text-align: center;
    }

    .main-action-slider {
        margin-top: 30px;
        position: relative;
        margin-bottom: 150px;
    }

    :deep(.main-action-row .slick-list) {
        /* margin: 0 -10px; */
        overflow: visible;
    }

    :deep(.main-action-row .slick-slide) {
        margin: 0 10px;
    }

    

    .main-action-row.swiper {
        width: 100%;
        overflow: visible;
    }

    .main-action-row .swiper-wrapper {
        display: flex;
        align-items: stretch;
        /* gap: 20px; */
        
    }

    

    @media (max-width: 1700px) {
        .main-action {
            padding-bottom: 122px;
        }
    }

    @media (max-width: 1199px) {
        .main-action {
            padding-top: 60px;
            padding-bottom: 162px;
        }

        .main-action-row .swiper-slide {
            margin-right: 10px;
        }

        .main-action h2 {
            color: #C1272D;
            font-family: Inter;
            font-size: 130px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -10.4px;
            text-transform: uppercase;
        }
    }

    @media (max-width: 639px) {
        .main-action {
            padding-top: 40px;
            padding-bottom: 80px;
        }

        .main-action-slider {
            margin-top: 20px;
        }

        .main-action h2 {
            font-size: 70px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -5.6px;
            text-transform: uppercase;
        }
    }
</style>