<template>
    <div class="main-banner">
        <!-- 🖼 Активная картинка -->
        <div class="main-banner-pic">
            <transition name="fade" mode="out-in">
                <img
                    :src="activeImage"
                    :key="imageKey"
                    alt=""
                    class="main-banner-pic-img"
                />
            </transition>
        </div>

        <div class="main-banner-cont">
            <h1><span>Элегантность</span> и стиль</h1>

            <div ref="slider" class="main-banner-cont-slider">
                <div
                    v-for="(img, index) in items"
                    :key="index"
                    class="main-banner-cont-slider-item"
                    :class="{ active: index === activeIndex }"
                    @click="setActive(index)"
                >
                    <img :src="img" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const images = [
        '/images/main-banner/pic.png',
        '/images/main-banner/pic.png',
        '/images/main-banner/pic.png',
        '/images/main-banner/pic.png',
        '/images/main-banner/pic.png',
        '/images/main-banner/pic.png',
        '/images/main-banner/pic.png',
        '/images/main-banner/pic.png',
    ]

    /** Реактивные данные */
    const items = ref([...images])
    const activeIndex = ref(4)
    const slider = ref(null)
    let resizeObserver

    /** 👇 Счётчик, чтобы перезапускать fade-анимацию даже при одинаковом src */
    const imageKey = ref(0)

    /** Активная картинка */
    const activeImage = computed(() => items.value[activeIndex.value])

    /** Центрирование активного элемента */
    const centerActive = () => {
        if (!slider.value) return
        const slides = slider.value.children
        const active = slides[activeIndex.value]
        if (!active) return

        const container = slider.value.parentElement
        const containerCenter = container.clientWidth / 2
        const activeCenter = active.offsetLeft + active.offsetWidth / 2
        const translate = containerCenter - activeCenter

        slider.value.style.transform = `translateX(${translate}px)`
    }

    /** Дублирование хвоста */
    const maybeDuplicateTail = async () => {
        const tailLeft = items.value.length - activeIndex.value - 1
        if (tailLeft <= 3) {
            items.value.push(...images.slice(0, 4))
            await nextTick()
            centerActive()
        }
    }

    /** При клике делаем активным */
    const setActive = async (index) => {
        activeIndex.value = index
        imageKey.value++ // 👈 заставляем Vue перезапустить fade-анимацию
        await nextTick()
        centerActive()
        maybeDuplicateTail()
    }

    /** Следим за изменением активного */
    watch(activeIndex, () => {
        maybeDuplicateTail()
    })

    /** Монтаж */
    onMounted(async () => {
        slider.value = document.querySelector('.main-banner-cont-slider')
        await nextTick()
        centerActive()

        resizeObserver = new ResizeObserver(() => centerActive())
        resizeObserver.observe(slider.value.parentElement)
    })

    /** Очистка */
    onBeforeUnmount(() => {
        if (resizeObserver) resizeObserver.disconnect()
    })
</script>



<style scoped>
    .main-banner {
        height: calc(100vh - 55px);
        max-height: 1000px;
        position: relative;
    }

    .main-banner-pic {
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
    }

    :deep(.main-banner-pic .slick-list) {
        height: 100%;
    }

    :deep(.main-banner-pic .slick-track) {
        height: 100%;
    }

    :deep(.main-banner-pic .slick-slide div) {
        height: 100%;
    }

    .main-banner-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .main-banner-cont {
        position: absolute;
        bottom: 50px;
        right: 0;
        left: 0;
        margin: auto;
        max-width: 1050px;
        overflow: hidden;
        width: 100%;
    }

    .main-banner-cont h1 {
        text-align: center;
        color: #FFF;
        font-family: Inter;
        font-size: 70px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -2.8px;
        margin-bottom: 20px;
    }

    .main-banner-cont h1 span {
        font-family: "Playfair Display";
        font-size: 70px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%; /* 70px */
        letter-spacing: -2.8px;
    }

    .main-banner-cont-slider {
        display: flex;
        align-items: center;
        gap: 0;
        transition: transform 0.4s ease;
        will-change: transform;
        height: 150px;
    }

    .main-banner-cont-slider-item {
        max-width: 150px;
        min-width: 150px;
        height: 100px;
        padding: 0 25px;
        box-sizing: border-box;
        overflow: hidden;
        transition: 0.3s;
        position: relative;
        cursor: pointer;
    }

    .main-banner-cont-slider-item img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        object-position: center center;
        filter: grayscale(100%);
        transition: 0.3s;
    }

    .main-banner-cont-slider-item:hover {
        scale: 1.2;
    }

    .main-banner-cont-slider-item.active {
        scale: 1.5;
    }

    .main-banner-cont-slider-item.active img {
        filter: grayscale(0);
    }

    .main-banner-pic-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.4s ease, transform 0.1s ease;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.4s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    @media (max-width: 1700px) {
        .main-banner {
            max-height: 545px;
        }

        .main-banner-cont {
            max-width: 580px;
            bottom: 20px;
        }

        .main-banner h1 {
            font-size: 50px;
        }

        .main-banner h1 span {
            font-size: 50px;
        }

        .main-banner-cont-slider {
            height: 100px;
        }

        .main-banner-cont-slider-item {
            max-width: 80px;
            min-width: 80px;
            height: 50px;
            padding: 0 15px;
        }

        .main-banner-cont-slider-item.active {
            scale: 2;
        }
    }

    @media (max-width: 1199px) {
        .main-banner {
            max-height: 400px;
        }

        .main-banner h1 {
            font-size: 40px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -1.6px;
            margin-bottom: 10px;
        }

        .main-banner h1 span {
            font-size: 40px;
        }

        .main-banner-cont-slider {
            height: 80px;
        }

        .main-banner-cont-slider-item {
            max-width: 70px;
            min-width: 70px;
            height: 50px;
            padding: 0 10px;
        }

        .main-banner-cont {
            max-width: 500px;
            bottom: 25px;
        }

        .slick-current .main-banner-cont-slider-item {
            transform: scale(1.6);
        }

        .main-banner-cont-slider-item.active {
            scale: 1.6;
        }
    }

    @media (max-width: 639px) {
        .main-banner h1 {
            font-size: 30px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -1.2px;
        }

        .main-banner h1 span {
            font-size: 30px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%; /* 30px */
            letter-spacing: -1.2px;
        }

        .main-banner-cont {
            bottom: 10px;
        }
    }

</style>