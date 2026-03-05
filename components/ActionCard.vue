<template>
    <div class="main-action-item swiper-slide" v-for="(action, i) in actions"
        :key="i">
            <div class="main-action-item-pic">
                <img :src="action.image" alt="">
            </div>
            <div class="main-action-item-cont">
                <div class="main-action-item-cont-title">
                    {{ action.title }}
                </div>
                <div class="main-action-item-cont-date">
                    {{ action.date }}
                </div>
                <div class="main-action-item-cont-text">
                    {{ action.text }}
                </div>
                <a href="#" class="main-action-item-cont-btn">
                    Смотреть полностью
                </a>
            </div>
        </div>
</template>

<script setup>
    const props = defineProps({
        actions: Object
    })
</script>

<style scoped>
    .main-action-item {
        max-width: 890px;
        min-width: 890px;
        height: 435px;
        box-sizing: border-box;
        display: flex !important;
        gap: 20px;
        color: #1C1C1C;
        background-color: #fff;
        transition: 0.3s;
    }

    .main-action-item:hover {
        background-color: #2A2A2A;
        color: #fff;
    }

    .main-action-item-pic {
        width: calc(50% - 10px);
        height: 100%;
    }

    .main-action-item-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .main-action-item-cont {
        display: flex;
        width: calc(50% - 10px);
        height: 100%;
        flex-direction: column;
        padding: 20px;
        padding-left: 0;
        box-sizing: border-box;
    }

    .main-action-item-cont-title {
        color: inherit;
        font-family: "Playfair Display";
        font-size: 32px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        margin-bottom: 10px;
    }

    .main-action-item-cont-date {
        opacity: 0.5;
        align-self: stretch;
        color: inherit;
        font-family: Inter;
        font-size: 16px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        margin-bottom: 20px;
    }

    .main-action-item-cont-text {
        color: inherit;
        opacity: 0.8;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
    }

    .main-action-item-cont-btn {
        margin-top: auto;
        border: 1px solid #1C1C1C;
        background: transparent;
        box-sizing: border-box;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 16px */
        letter-spacing: -0.64px;
        padding: 10px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .main-action-item:hover .main-action-item-cont-btn {
        background-color: #FFF;
        border-color: #fff;
        color: #C1272D;
    }

    .main-action-row .main-popular-slider-nav {
        right: 0;
        left: 0;
        top: auto;
        margin: auto;
        bottom: -66px;
    }

    .main-action-row .swiper-slide {
        flex-shrink: 0;
        width: auto !important;
        margin-right: 20px;
    }

    .action .main-action-item {
        width: calc(50% - 20px);
        max-width: 100%;
        min-width: 0;
    }

    @media (max-width: 1700px) {
        .action .main-action-item {
            width: calc(50% - 10px);
            height: 300px;
            gap: 10px;
        }

        .action .main-action-item-cont {
            padding: 10px;
            padding-left: 0;
        }

        .action .main-action-item-cont-title {
            font-size: 22px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.88px;
            text-transform: uppercase;
        }
    }

    @media (max-width: 1199px) {
        .main-action-item {
            max-width: 560px;
            min-width: 560px;
            height: 300px;
        }

        .main-action-item-cont-title {
            font-size: 24px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }

        :deep(.main-action-row .slick-slide) {
            margin: 0 5px;
        }

        .main-action-row .swiper-slide {
            margin-right: 10px;
        }

        .action .main-action-item {
            width: 100%;
            height: 300px;
        }
    }

    @media (max-width: 639px) {
        .main-action-item {
            max-width: 325px;
            min-width: 325px;
            height: auto;
            flex-direction: column;
            gap: 10px;
        }

        .main-action-item-pic {
            width: 100%;
            height: 225px;
        }

        .main-action-item-cont {
            width: 100%;
            padding: 10px;
            padding-top: 0;
            height: 181px;
        }

        .action .main-action-item {
            width: 100%;
            height: auto;
        }

        .action .main-action-item-cont {
            padding: 10px;
            padding-top: 0;
        }
    }
</style>