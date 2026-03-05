<template>
    <div class="main-popular-slider" :class="[single ? 'main-popular-slider_single' : '']" ref="sliderEl">
        <div v-if="title" class="main-popular-slider-title">
            {{ title }}
        </div>
        <!-- <a v-if="item.reviews" href="#" class="main-popular-item-cont-rate-link">{{ item.reviews }} отзывов</a> -->

        <div v-if="nav" class="main-popular-slider-nav">
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

        <div ref="rowEl" class="swiper main-popular-row">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, i) in items" :key="i">
                    <ProductCard :item="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        items: {
            type: Array,
            default: () => [],
        },
        nav: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '',
        },
        single: {
            type: Boolean,
            default: false,
        },
    })

    const rowEl = ref(null)
    const prevEl = ref(null)
    const nextEl = ref(null)
    let observer = null
    let swiperInstance = null
    let isReinitializing = false

    function initSwiperIfReady() {
        const row = rowEl.value
        if (!row) return

        const hasChildren = row.querySelectorAll('.swiper-slide').length > 0
        if (!hasChildren) return
        if (swiperInstance || isReinitializing) return

        swiperInstance = new Swiper(row, {
            slidesPerView: 'auto', // variableWidth
            loop: true,
            grabCursor: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: props.nav
                ? {
                    prevEl: prevEl.value,
                    nextEl: nextEl.value,
                }
                : {},
            observer: false,
            observeParents: false,
            observeSlideChildren: false,
        })
    }

    function teardownSwiper() {
        if (swiperInstance) {
            swiperInstance.destroy(true, true)
            swiperInstance = null
        }
    }

    onMounted(async () => {
        if (!process.client) return

        await nextTick()
        initSwiperIfReady()
        requestAnimationFrame(() => initSwiperIfReady())

        let timeout = null
        observer = new MutationObserver(() => {
            if (isReinitializing) return
            if (timeout) clearTimeout(timeout)
            timeout = setTimeout(() => {
                isReinitializing = true
                teardownSwiper()
                initSwiperIfReady()
                setTimeout(() => (isReinitializing = false), 200)
            }, 300)
        })

        if (rowEl.value) {
            observer.observe(rowEl.value, { childList: true, subtree: false })
        }
    })

    onBeforeUnmount(() => {
        teardownSwiper()
        if (observer) observer.disconnect()
    })
</script>


<style scoped>
    .main-popular-slider {
        position: relative;
        /* margin-top: 52px; */
    }

    .main-popular-slider_single {
        margin-bottom: 162px;
    }

    .main-popular-row {
        /* margin-top: 52px; */
    }

    .main-popular-row .slick-slide {
        margin: 0 10px;
    }

    .main-popular-row .slick-list {
        /* margin: 0 -10px; */
        overflow: visible;
    }

    .main-popular-row.swiper {
        width: 100%;
        overflow: visible;
    }

    .main-popular-row .swiper-wrapper {
        display: flex;
        align-items: stretch;
    }

    .main-popular-row .swiper-slide {
        flex-shrink: 0;
        width: auto !important;
        margin-right: 20px;
    }

    .main-popular-row .swiper-slide > * {
        width: 280px;
        box-sizing: border-box;
    }

    .main-popular-slider-title {
        color: #C1272D;
        text-align: center;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 30px;
    }

    .account-cont-item-order .main-popular-slider-title {
        text-align: left;
        margin-bottom: 30px;
    }

    .account-cont-item-order .main-popular-item {
        border: 1px solid #E5E5E5;
    }

    .account-cont-item-order .main-popular-slider-nav {
        right: unset;
        bottom: -52px;
    }

    .card-row-slider_add .main-popular-slider {
        width: 100%;
    }

    @media (max-width: 1199px) {
        .main-popular-row .swiper-slide {
            margin-right: 10px;
        }

        .main-popular-row .slick-slide {
            margin: 0 5px;
        }

        .main-popular-slider-title {
            margin-bottom: 20px;
            text-align: left;
        }

        .main-popular-slider_single {
            margin-bottom: 80px;
        }

        .main-popular-slider-nav {
            display: none;
        }
    }

    
</style>