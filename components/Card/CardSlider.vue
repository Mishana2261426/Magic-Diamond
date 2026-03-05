<template>
    <section class="card-slider">
        <div class="card-slider-main swiper">
            <div class="card-slider-main-top">
                <div class="card-slider-main-top_dis">
                    {{ item.discount }}
                </div>
                <div class="card-slider-main-top_new" v-if="item.isNew">
                    New
                </div>
                <div class="card-slider-main-top_hit" v-if="item.isHit">
                    хит
                </div>
            </div>

            <div class="swiper-wrapper">
                <div
                    class="card-slider-main-item swiper-slide"
                    v-for="(pic, index) in item.pics"
                    :key="index"
                >
                    <img :src="pic.src" :alt="pic.alt" />
                </div>
            </div>
            <div class="card-slider-pagination"></div>
            <div class="card-slider-main-bundle" v-if="item.bundle">
                есть Комплект
            </div>
        </div>
        <div class="card-slider-side swiper">
            <div class="swiper-wrapper">
                <div
                    class="card-slider-side-item swiper-slide"
                    v-for="(pic, index) in item.pics"
                    :key="'side-' + index"
                >
                    <img :src="pic.src" :alt="pic.alt" />
                </div>
            </div>
            <!-- <div class="card-slider-side-scrollbar">

            </div> -->
        </div>
    </section>
</template>

<script setup>
    const props = defineProps({
        item: { type: Object, required: true }
    })

    const activeIndex = ref(0) // по умолчанию открыт первый блок

    if (process.client) {
        onMounted(() => {
            const slider_side = new Swiper('.card-slider-side', {
                direction: 'vertical',
                slidesPerView: 'auto',
                spaceBetween: 20,
                centeredSlides: false,
                freeMode: true,
                watchSlidesProgress: true,
                slideToClickedSlide: true,
                slidesOffsetAfter: 600,
                
            })

            const slider_main = new Swiper('.card-slider-main', {
                slidesPerView: 1,
                spaceBetween: 20,
                thumbs: { swiper: slider_side },
                pagination: {
                    el: '.card-slider-pagination',
                    clickable: true,
                },
            })

            slider_main.on('slideChange', () => {
                const activeIndex = slider_main.activeIndex
                slider_side.slideTo(activeIndex)
            })

            slider_side.on('slideChange', () => {
                const activeIndex = slider_side.activeIndex
                slider_main.slideTo(activeIndex)
            })
        })
    }
</script>

<style scoped>
    .card-slider {
        height: 720px;
        display: flex;
        gap: 20px;
        /* width: calc(100%); */
        /* width: calc(50% - 10px); */
        max-width: 980px;
        width: 100%;
        grid-area: slider;
    }

    .card-slider-side {
        max-width: 150px;
        width: 100%;
        height: 100%;
        position: relative;
    }

     .card-slider-side .swiper-wrapper {
        overflow: visible;
     }

    .card-slider-side-item {
        width: 100%;
        height: 150px;
        border: 1px solid transparent;
        transition: 0.3s;
        box-sizing: border-box;
        opacity: 0.5;
        position: relative;
        cursor: pointer;
    }

    .swiper-slide-active.card-slider-side-item {
        border-color: #1C1C1C;
        opacity: 1;
    }

    .card-slider-side-item::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: url(/images/card/ac.png);
        background-size: 100% 100%;
        opacity: 0;
        transition: 0.3s;
    }

    .card-slider-side-item:hover {
        opacity: 1;
    }

    .card-slider-side-item:hover::after {
        opacity: 1;
    }

    .card-slider-side-item img {
        width: 100%;
        height: 100%;
    }

    .card-slider-pagination {
        display: none;
    }

    .card-slider-main {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .card-slider-main-item {

    }

    .card-slider-main-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .card-slider-main-top {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        display: flex;
    }

    .card-slider-main-top div {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Inter;
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%;
        letter-spacing: -0.4px;
        text-transform: uppercase;
        background-color: #fff;
        color: #1C1C1C;
        border: 1px solid #E5E5E5;
        box-sizing: border-box;
    }

    .card-slider-main-top_dis {
        background-color: #C1272D !important;
        color: #fff !important;
        border-color: transparent !important;
    }

    .card-slider-main-top_new {
        color: #C1272D !important;
    }

    .card-slider-main-bundle {
        position: absolute;
        z-index: 2;
        bottom: 0;
        right: 0;
        color: #C1272D;
        font-family: Inter;
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%;
        letter-spacing: -0.4px;
        text-transform: uppercase;
        padding: 10px 20px;
        box-sizing: border-box;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
    }

    @media (max-width: 1700px) {
        .card-slider {
            max-width: 701px;
            width: 100%;
            height: 540px;
            gap: 10px;
        }

        .card-slider-main-top div {
            width: 30px;
            height: 30px;
        }
    }

    @media (max-width: 1199px) {
        .card-slider {
            max-width: 100%;
            width: 100%;
            height: 500px;
        }

        .card-slider-side {
            display: none;
        }

        .card-slider-pagination {
            display: flex;
            gap: 5px;
            position: absolute;
            z-index: 2;
            left: 10px;
            bottom: 10px;
        }

        :deep(.card-slider-pagination .swiper-pagination-bullet) {
            margin: 0;
            background-color: #1C1C1C;
            border-radius: 50%;
            width: 5px;
            height: 5px;
            opacity: 0.3;
            transition: 0.3s;
        }

        :deep(.card-slider-pagination .swiper-pagination-bullet-active)  {
            opacity: 1;
        }
    }

    @media (max-width: 639px) {
        .card-slider {
            height: 335px;
        }

        .card-slider-main-top div {
            width: 20px;
            height: 20px;
            font-size: 6px;
        }
    }
</style>