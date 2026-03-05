<template>
    <div class="main-brand">
        <div class="container">
            <h2>Бренды</h2>

            <!-- просто меняем классы, swiper → marquee -->
            <div class="main-brand-row marquee" ref="marquee">
                <div class="marquee__track">
                    <div
                        v-for="(brand, i) in brands"
                        :key="i"
                        class="marquee__item main-brand-row-item"
                    >
                        <img :src="brand.image" alt="">
                    </div>
                </div>
            </div>

            <a href="#" class="main-brand-link">Все бренды</a>
        </div>
    </div>
</template>

<script setup>

const marquee = ref(null)

const brands = [
    { image: '/images/main-brand/pic1.png' },
    { image: '/images/main-brand/pic2.png' },
    { image: '/images/main-brand/pic3.png' },
    { image: '/images/main-brand/pic1.png' },
    { image: '/images/main-brand/pic2.png' },
    { image: '/images/main-brand/pic3.png' },
]

onMounted(() => {
    const container = marquee.value
    if (!container) return

    const track = container.querySelector('.marquee__track')
    if (!track) return

    const content = track.innerHTML
    track.innerHTML = content + content

    const duration = Math.max(track.scrollWidth / 3000 / 0.1)
    track.style.animationDuration = `${duration}s`
})
</script>

<style scoped>
    .main-brand {
        background-color: #EFEFEF;
        padding-top: 150px;
        padding-bottom: 75px;
        box-sizing: border-box;
        overflow: hidden;
    }

    .main-brand h2 {
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

    .main-brand-link {
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

    .main-brand-link:hover {
        background-color: #fff;
        color: #C1272D;
    }

    .main-brand-row {
        margin-top: 30px;
    }

    :deep(.main-brand-row .slick-list) {
        overflow: visible;
    }

    .main-brand-row-item {
        max-width: 320px;
        min-width: 320px;
        height: 150px;
        box-sizing: border-box;
        /* opacity: 1 !important; */
        margin: 0 10px;
    }

    .main-brand-row-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .main-brand-row.swiper {
        overflow: hidden;
        width: 100%;
    }

    .main-brand-row .swiper-wrapper {
        display: flex;
        align-items: center;
        transition-timing-function: linear !important; /* 👈 делает плавное движение */
    }

    /* .main-brand-row .swiper-slide {
        flex-shrink: 0;
        width: auto !important;
    } */

    @media (max-width: 1700px) {
        .main-brand {
            padding-top: 120px;
        }
    }

    @media (max-width: 1199px) {
        .main-brand {
            padding: 100px 0;
            padding-bottom: 50px;
        }
    }

    @media (max-width: 639px) {
        .main-brand {
            padding: 80px 0;
            padding-bottom: 40px;
        }

        .main-brand .container {
            /* width: 100%; */
        }

        .main-brand h2 {
            text-align: left;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }

        .main-brand-row-item {
            max-width: 200px;
            min-width: 200px;
            height: 94px;
        }
    }
</style>