<template>
    <div class="main-review">
        <h2>
            Отзывы
        </h2>
        <div class="main-review-slider">
            <div class="swiper main-review-row">
                <div class="swiper-wrapper">
                    <div
                        v-for="(review, i) in reviews"
                        :key="i"
                        class="swiper-slide main-review-item"
                    >
                        <div class="main-review-item-pic">
                            <img :src="review.image" alt="">
                        </div>
                        <div class="main-review-item-info">
                            <div class="main-review-item-info-title">
                                {{ review.name }} <span>{{ review.age }}</span>
                            </div>
                            <p>{{ review.text }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- навигация -->
            <div class="main-popular-slider-nav">
                <button
                    class="main-popular-slider-nav-arr main-popular-slider-nav-arr_prev"
                ></button>

                <div class="main-popular-slider-nav-arr_counter">
                    1/<span>{{ reviews.length }}</span>
                </div>

                <button
                    class="main-popular-slider-nav-arr main-popular-slider-nav-arr_next"
                ></button>
            </div>
        </div>
    </div>
</template>

<script setup>
    const reviews = [
        { image: '/images/main-review/pic1.png', name: 'Анна', age: '26 лет', text: 'Я очень довольна своим выбором! Кольцо идеально подходит по стилю и размеру, выглядит изысканно и элегантно. Металл блестит, а камень переливается на свету, превращая его в воплощение мечты. Я ношу его каждый день и получаю множество комплиментов.'},
        { image: '/images/main-review/pic1.png', name: 'Анна', age: '26 лет', text: 'Я очень довольна своим выбором! Кольцо идеально подходит по стилю и размеру, выглядит изысканно и элегантно. Металл блестит, а камень переливается на свету, превращая его в воплощение мечты. Я ношу его каждый день и получаю множество комплиментов.'},
        { image: '/images/main-review/pic1.png', name: 'Анна', age: '26 лет', text: 'Я очень довольна своим выбором! Кольцо идеально подходит по стилю и размеру, выглядит изысканно и элегантно. Металл блестит, а камень переливается на свету, превращая его в воплощение мечты. Я ношу его каждый день и получаю множество комплиментов.'},
        { image: '/images/main-review/pic1.png', name: 'Анна', age: '26 лет', text: 'Я очень довольна своим выбором! Кольцо идеально подходит по стилю и размеру, выглядит изысканно и элегантно. Металл блестит, а камень переливается на свету, превращая его в воплощение мечты. Я ношу его каждый день и получаю множество комплиментов.'},
        { image: '/images/main-review/pic1.png', name: 'Анна', age: '26 лет', text: 'Я очень довольна своим выбором! Кольцо идеально подходит по стилю и размеру, выглядит изысканно и элегантно. Металл блестит, а камень переливается на свету, превращая его в воплощение мечты. Я ношу его каждый день и получаю множество комплиментов.'},
        { image: '/images/main-review/pic1.png', name: 'Анна', age: '26 лет', text: 'Я очень довольна своим выбором! Кольцо идеально подходит по стилю и размеру, выглядит изысканно и элегантно. Металл блестит, а камень переливается на свету, превращая его в воплощение мечты. Я ношу его каждый день и получаю множество комплиментов.'},
        { image: '/images/main-review/pic1.png', name: 'Анна', age: '26 лет', text: 'Я очень довольна своим выбором! Кольцо идеально подходит по стилю и размеру, выглядит изысканно и элегантно. Металл блестит, а камень переливается на свету, превращая его в воплощение мечты. Я ношу его каждый день и получаю множество комплиментов.'},
    ];

    onMounted(() => {
        document.querySelectorAll('.main-review-slider').forEach(slider => {
            const row = slider.querySelector('.main-review-row')
            const prev = slider.querySelector('.main-popular-slider-nav-arr_prev')
            const next = slider.querySelector('.main-popular-slider-nav-arr_next')
            const counter = slider.querySelector('.main-popular-slider-nav-arr_counter')

            if (!row) return

            if (row.swiper) {
                row.swiper.destroy(true, true)
            }

            const swiper = new Swiper(row, {
                slidesPerView: 'auto',
                // spaceBetween: 465,
                spaceBetween: window.innerWidth * 0.3,
                centeredSlides: true,
                loop: false,
                navigation: {
                    prevEl: prev,
                    nextEl: next,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    375: {
                        slidesPerView: 1,
                    },
                    1200: {
                        slidesPerView: 'auto',
                        spaceBetween: window.innerWidth * 0.3,
                    },
                    1700: {
                        slidesPerView: 'auto',
                        spaceBetween: window.innerWidth * 0.3,
                    },
                },
                on: {
                    init(swiper) {
                        updateCounter(swiper)
                    },
                    slideChange(swiper) {
                        updateCounter(swiper)
                    },
                },
            })

            function updateCounter(swiper) {
                if (!counter) return
                const current = swiper.realIndex + 1
                const total = swiper.slides.filter(
                    s => !s.classList.contains('swiper-slide-duplicate')
                ).length
                counter.innerHTML = `${current}/<span>${total}</span>`
            }
        })
    })

</script>

<style scoped>
    .main-review {
        background-color: #EFEFEF;
        padding-top: 140px;
        overflow: hidden;
    }

    .main-review h2 {
        color: #C1272D;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 30px;
    }

    .main-review-slider {

    }

    .main-review-item {
        max-width: 350px;
        min-width: 350px;
        height: 400px;
        position: relative;
    }

    .main-review-item-pic {
        width: 350px;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .main-review-item-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        filter: grayscale(100%);
        transition: 0.3s;
    }

    .main-review-slider {
        position: relative;
    }

    .main-review-slider::after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: #fff;
        position: absolute;
        top: 30%;
        right: 0;
        left: 0;
        z-index: 0;
        margin: auto;
    }

    .main-review-row {
        z-index: 1;
    }

    .main-review-item-info {
        opacity: 0;
        transition: 0.3s;
        position: absolute;
        bottom: 0;
        left: 100%;
        max-width: 410px;
        width: 100%;
        text-align: left;
        padding-left: 20px;
    }

    .main-review-item-info-title {
        margin-bottom: 20px;
        display: flex;
        gap: 10px;
        align-items: center;
        color: #C1272D;
        font-family: "Playfair Display";
        font-size: 36px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.44px;
    }

    .main-review-item-info-title span {
        opacity: 0.7;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.72px;
    }

    .main-review-item-info p {
        color: #2A2A2A;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
    }

    .main-review-slider .main-popular-slider-nav {
        position: unset;
        margin: 0 auto;
        margin-top: 30px;
        gap: 0;
    }

    .swiper-slide-active .main-review-item-pic img {
        filter: grayscale(0);
    }

    .swiper-slide-active .main-review-item-info {
        opacity: 1;
    }

    /* .main-review .swiper-slide {
        margin-right: 30%;
    } */

    @media (max-width: 1700px) {
        .main-review {
            padding-top: 120px;
        }

        .main-review-item-info {
            max-width: 335px;
        }
    }

    @media (max-width: 1199px) {
        .main-review {
            padding-top: 50px;
        }

        .main-review-item {
            display: flex !important;
            max-width: 100%;
            min-width: 0;
            width: 100%;
            gap: 20px;
            padding: 0 20px;
            box-sizing: border-box;
            height: 300px;
        }

        .main-review-item-pic {
            width: calc(50% - 10px);
        }

        .main-review-item-info {
            position: unset;
            width: calc(50% - 10px);
            padding: 0;
            max-width: none;
        }

        .main-review-row .slick-list {
            /* padding: 0 !important; */
        }
    }

    @media (max-width: 639px) {
        .main-review {
            padding-top: 40px;
        }

        .main-review h2 {
            text-align: left;
            padding: 0 20px;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
            margin-bottom: 20px;
        }

        .main-review-item {
            flex-direction: column;
            gap: 10px;
            height: auto;
        }

        .main-review-item-pic {
            width: calc(100% - 45px);
            height: 200px;
        }

        .main-review-item-info {
            width: 100%;
        }

        .main-popular-slider-nav {
            display: flex !important;
        }
    }

</style>