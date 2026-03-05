<template>
    <div class="about-slider">
        <div class="container">
            <h2 class="about-slider-title">
                {{title}}
            </h2>
            <div class="main-popular-slider-nav">
                <button
                    class="main-popular-slider-nav-arr main-popular-slider-nav-arr_prev"
                    ref="prevEl"
                    type="button"
                ></button>
                <button
                    class="main-popular-slider-nav-arr main-popular-slider-nav-arr_next"
                    ref="nextEl"
                    type="button"
                ></button>
            </div>
            <div class="about-slider-row swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in slider">
                        <div class="swiper-slide-pic">
                            <img :src="item.src" :alt="item.alt">
                        </div>
                        <div class="swiper-slide-text">
                            {{ item.text }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        slider: { type: Object},
        title: { type: String},
    });
    
    onMounted(() => {
        document.querySelectorAll('.about-slider-row').forEach(slider => {
            const wrapper = slider.querySelector('.swiper-wrapper')
            const slides = Array.from(wrapper.children)

            // 👇 создаём 3 дубликата вперёд и назад
            for (let i = 0; i < 3; i++) {
                // В начало (в обратном порядке, чтобы сохранить порядок при prepend)
                slides
                    .slice()
                    .reverse()
                    .forEach(slide => {
                        const clone = slide.cloneNode(true)
                        wrapper.prepend(clone)
                    })

                // В конец
                slides.forEach(slide => {
                    const clone = slide.cloneNode(true)
                    wrapper.appendChild(clone)
                })
            }

            const prev = slider.closest('.container').querySelector('.main-popular-slider-nav-arr_prev')
            const next = slider.closest('.container').querySelector('.main-popular-slider-nav-arr_next')

            const swiper = new Swiper(slider, {
            slidesPerView: 'auto',
            centeredSlides: true,
            grabCursor: true,
            loop: true,
            loopedSlides: 30, // 👈 большое число — Swiper сам ограничит до нужного
            navigation: {
                prevEl: prev,
                nextEl: next,
            },
            })
        })
    })

</script>

<style scoped>
    .about-slider {
        padding-top: 75px;
        position: relative;
        margin-bottom: 200px;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
    }

    .about-slider .container {
        position: relative;
    }

    .about-slider-row {
        overflow: visible;
        height: 574px;
    }

    .swiper-slide {
        width: 405px;
        height: 450px;
        margin: 0 5px;
        transition: 0.3s;
        position: relative;
    }

    .swiper-slide-active {
        filter: brightness(1);
        z-index: 2;
    }

    .swiper-slide-pic {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-slide-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        filter: grayscale(100%);
        transition: 0.3s;
    }

    .swiper-slide-active .swiper-slide-pic img {
        width: 890px;
        height: 574px;
        filter: grayscale(0%);
    }

    :deep(.main-popular-slider-nav) {
        top: 62px;
        right: 50px;
        left: auto;
        bottom: auto;
    }

    .about-slider-title {
        text-align: center;
        margin-bottom: 92px;
        color: #C1272D;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
    }

    .swiper-slide-text {
        opacity: 0;
        bottom: 0;
        right: 0;
        transition: 0.3s;
        position: absolute;
        max-width: 445px;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
    }

    .swiper-slide-active .swiper-slide-text {
        opacity: 1;
        bottom: -100px;
        right: -240px;
    }

    @media (max-width: 1700px) {

        :deep(.main-popular-slider-nav) {
            top: unset;
            right: 0;
            left: 0;
            bottom: -30px;
        }

        .about-slider {
            padding-bottom: 30px;
            margin-bottom: 120px;
            padding-top: 60px;
        }
    }

    @media (max-width: 1199px) {
        .swiper-slide-active .swiper-slide-pic img {
            width: 100%;
            height: 100%;
        }

        .about-slider-title {
            max-width: 424px;
            text-align: left;
            margin: auto;
            margin-bottom: 20px;
        }

        .about-slider-row {
            height: auto;
            margin-bottom: 145px;
        }

        :deep(.main-popular-slider-nav) {
            display: none;
        }

        .about-slider {
            padding-bottom: 0;
            margin: 0;
            padding-top: 50px;
        }

        .swiper-slide {
            width: 450px;
            height: 290px;
        }

        .swiper-slide-text {
            position: unset;
            margin-top: 10px;
        }
    }

    @media (max-width: 639px) {
        .about-slider-title {
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }

        .swiper-slide[data-v-8e748113] {
            width: 100%;
        }

        .about-slider {
            padding-top: 40px;
        }
    }
</style>