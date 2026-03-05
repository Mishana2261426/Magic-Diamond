<template>
    <div class="main-popular-item">
        <div class="main-popular-item-pic">
            <div v-if="item.discount || item.isNew || item.isHit" class="main-popular-item-pic-add">
                <div v-if="item.discount" class="main-popular-item-pic-add_dis">{{ item.discount }}</div>
                <div v-if="item.isNew" class="main-popular-item-pic-add_new">new</div>
                <div v-if="item.isHit" class="main-popular-item-pic-add_hit">хит</div>
            </div>
            <button class="main-popular-pic-fav" :class="{ 'main-popular-pic-fav_active': item.fav }"></button>
            <img :src="item.image" :alt="item.title" />
        </div>

        <div class="main-popular-item-cont">
            <a href="#" class="main-popular-item-cont-title">{{ item.title }}</a>
            <div v-if="item.rating || item.reviews" class="main-popular-item-cont-rate">
                <div v-if="item.rating" class="main-popular-item-cont-rate-star">{{ item.rating.toFixed(1) }}</div>
                <a v-if="item.reviews" href="#" class="main-popular-item-cont-rate-link">{{ item.reviews }} отзывов</a>
            </div>
            <div class="main-popular-item-cont-price">
                {{ item.price.toLocaleString() }}₽
                <div v-if="item.oldPrice" class="main-popular-item-cont-price_old">
                    {{ item.oldPrice.toLocaleString() }}₽ <a href="">i</a>
                </div>
            </div>
            <button class="main-popular-item-cont-btn" @click="openCardPopup(item)">
                В корзину
            </button>
        </div>
    </div>
</template>

<script setup>
    const popup = usePopup()

    const props = defineProps({
        item: Object
    })

    const openCardPopup = (item) => {
        popup.open('card', item)
    }
    
    const emit = defineEmits(['mounted'])

    onMounted(() => emit('mounted'))
</script>


<style scoped>
    .main-popular-item {
        box-sizing: border-box;
        min-width: 320px;
        max-width: 320px;
        padding: 10px;
        box-sizing: border-box;
        background-color: #fff;
        color: #1C1C1C;
        transition: 0.3s;
    }

    .main-popular-item:hover {
        background-color: #2A2A2A;
        color: #FFF;
    }

    .main-popular-item-pic {
        height: 350px;
        width: 100%;
        position: relative;
    }

    .main-popular-item-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .main-popular-item-pic-add {
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
    }

    .main-popular-item-pic-add div {
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Inter;
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%; /* 10px */
        letter-spacing: -0.4px;
        text-transform: uppercase;
        background-color: #fff;
        color: #1C1C1C;
    }

    .main-popular-item-pic-add_dis {
        background-color: #C1272D !important;
        color: #fff !important;
    }

    .main-popular-item-pic-add_new {
        color: #C1272D !important;
    }

    .main-popular-pic-fav {
        position: absolute;
        top: 9px;
        right: 8px;
        width: 15px;
        height: 13px;
        background-image: url(/images/main-popular/fav.png);
        background-size: 100% 100%;
        transition: 0.3s;
    }

    .main-popular-pic-fav:hover {
        background-image: url(/images/main-popular/fav_active.png);
        transform: scale(1.3);
    }

    .main-popular-pic-fav_active {
        background-image: url(/images/main-popular/fav_active.png);
        transform: scale(1.3);
    }

    .main-popular-item-cont {
        display: flex;
        flex-direction: column;
        margin-top: 5px;
    }

    .main-popular-item-cont-title {
        align-self: stretch;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.8px;
        margin-bottom: 10px;
        height: 40px;
        display: -webkit-box;
        -webkit-line-clamp: 2;      /* ограничиваем 2 строками */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        line-clamp: 2; 
    }

    .main-popular-item:hover .main-popular-item-cont-title {
        color: #fff;
    }

    .main-popular-item-cont-rate {
        display: flex;
        gap: 8px;
        margin-bottom: 20px;
    }

    .main-popular-item-cont-rate-star {
        display: flex;
        gap: 2px;
        align-items: center;
        color: inherit;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.56px;
    }

    .main-popular-item-cont-rate-star::before {
        content: '';
        width: 10px;
        height: 10px;
        background-image: url(/images/main-popular/star.png);
        background-size: 100% 100%;
        display: flex;
    }

    .main-popular-item-cont-rate-link {
        opacity: 0.6;
        color: #4A4A4A;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.56px;
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: none;
        text-decoration-thickness: auto;
        text-underline-offset: auto;
        text-underline-position: from-font;
        transition: 0.3s;
    }


    .main-popular-item:hover .main-popular-item-cont-rate-link {
        color: #E5E5E5;
    }

    .main-popular-item-cont-price {
        display: flex;
        gap: 10px;
        align-items: center;
        padding: 5px 0;
        box-sizing: border-box;
        color: inherit;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 100%;
        letter-spacing: -0.72px;
    }

    .main-popular-item-cont-price_old {
        color: #C1272D;
        font-family: Inter;
        font-size: 18px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.72px;
        text-decoration-line: line-through;
        display: flex;
        gap: 5px;
        align-items: center;
        transition: 0.3s;
    }

    .main-popular-item:hover .main-popular-item-cont-price_old {
        color: #E5E5E5;
    }

    .main-popular-item-cont-price_old a {
        align-self: stretch;
        color: #FFF;
        font-family: Inter;
        font-size: 8px;
        font-style: italic;
        font-weight: 700;
        line-height: 100%;
        text-align: center;
        width: 15px;
        height: 15px;
        background-color: #C1272D;
        border-radius: 50%;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        padding-left: 6px;
        box-sizing: border-box;
    }

    .main-popular-item-cont-btn {
        margin-top: 10px;
        width: 100%;
        padding: 10px 15px;
        box-sizing: border-box;
        border: 1px solid #1C1C1C;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 16px */
        letter-spacing: -0.64px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .main-popular-item:hover .main-popular-item-cont-btn {
        background-color: #fff;
        color: #C1272D;
        border-color: transparent;
    }

    .main-popular-item:hover .main-popular-item-cont-btn:hover {
        background-color: #C1272D;
        color: #fff;
    }

    .account-cont-item-row .main-popular-item {
        border: 1px solid #E5E5E5;
    }

    @media (max-width: 1700px) {
        .catalog-cont-row .main-popular-item {
            max-width: 250px;
            min-width: 250px;
        }

        .catalog-cont-row .main-popular-item-pic {
            height: 290px;
        }

        .fav .main-popular-item {
            max-width: 250px;
            min-width: 250px;
        }

        .fav .main-popular-item-pic {
            height: 290px;
        }

        .account-cont-item-row .main-popular-item {
            width: calc(50% - 10px);
            max-width: 100%;
            min-width: 0;
        }
    }

    @media (max-width: 1199px) {
        .main-popular-item {
            max-width: 250px;
            min-width: 250px;
        }

        .main-popular-item-pic {
            height: 290px;
        }

        .main-popular-item-cont-title {
            font-size: 18px;
            height: 36px;
        }

        .main-popular-item-cont-rate {
            margin-bottom: 15px;
        }

        .catalog-cont-row .main-popular-item {
            max-width: calc(50% - 10px);
            width: 100%;
            min-width: 0;
        }

        .fav .main-popular-item {
            max-width: calc(50% - 10px);
            width: 100%;
            min-width: 0;
        }
    }

    @media (max-width: 639px) {
        .catalog-cont-row .main-popular-item {
            max-width: calc(50% - 5px);
            padding: 5px;
        }

        .catalog-cont-row .main-popular-item-pic {
            height: 173px;
        }

        .catalog-cont-row .main-popular-item-pic-add div {
            font-size: 6px;
            font-style: normal;
            font-weight: 700;
            line-height: 100%;
            letter-spacing: -0.24px;
            text-transform: uppercase;
            width: 20px;
            height: 20px;
        }

        .catalog-cont-row .main-popular-item- .main-popular-pic-fav {
            width: 10px;
            height: 8px;
            top: 6px;
            right: 6px;
        }

        .catalog-cont-row .main-popular-item-cont-title {
            height: 32px;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.64px;
            margin-bottom: 10px;
        }

        .catalog-cont-row .main-popular-item-cont-price {
            gap: 0;
        }

        .catalog-cont-row .main-popular-item-cont-price_old {
            font-size: 16px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.64px;
            text-decoration-line: line-through;
        }

        .fav .main-popular-item {
            max-width: calc(50% - 5px);
        }

        .fav .main-popular-item-pic {
            height: 173px;
        }

        .fav .main-popular-item-cont-price {
            gap: 0;
            width: 79px;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: 100%;
            letter-spacing: -0.72px;
        }

        .main-popular-item-cont-price_old {
            font-size: 16px;
        }

        .account-cont-item-row .main-popular-item-pic {
            height: 173px;
        }
    }
</style>