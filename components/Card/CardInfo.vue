<template>
    <section class="card-info">
        <div class="card-info-title">
            {{ item.title }}
        </div>
        <div class="card-info-price">
            {{ item.price.toLocaleString() }}₽
            <span>{{ item.oldPrice.toLocaleString() }}₽</span>
            <div class="card-info-price_dis">-{{ item.discount }}</div>
        </div>

        <div class="card-info-rating">
            {{ item.rating }}
        </div>

        <div class="card-info-size" v-if="item.sizes">
            <div class="card-info-size-title">
                Размер, мм
            </div>
            <div class="card-info-size-row">
                <label v-for="(size, index) in item.sizes">
                    <input type="radio" name="size" :value="size.num">
                    <span></span>
                    {{ size.num }}
                </label>
            </div>
        </div>

        <div class="card-info-type">
            <div class="card-info-type-title">
                Варианты
            </div>
            <div class="card-info-type-row">
                <label v-for="(type, index) in item.types">
                    <input type="radio" name="type" :value="type.value">
                    <span></span>
                    <img :src="type.src">
                </label>
            </div>
        </div>

        <div class="card-info-bot">
            <button class="card-info-bot-cart">
                В корзину
            </button>
            <button
                class="card-info-bot-fav"
                :class="{ 'card-info-bot-fav_active': item.fav }"
            ></button>
        </div>
        <!-- <YandexPayWidget /> -->
    </section>
</template>

<script setup>
    const props = defineProps({
        item: { type: Object, required: true }
    })
</script>

<style scoped>
    .card-info {
        /* width: calc(50% - 10px); */
        width: 100%;
        position: sticky;
        top: 70px;
        height: fit-content;
        grid-area: info;
        z-index: 1;
        right: 0;
    }

    .card-info-title {
        max-width: 720px;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        margin-bottom: 12px;
    }

    .card-info-price {
        display: flex;
        flex-direction: column;
        gap: 2px;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 40px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -1.6px;
        position: relative;
        width: fit-content;
    }

    .card-info-price_dis {
        color: #C1272D;
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%;
        letter-spacing: -0.6px;
        text-transform: uppercase;
        position: absolute;
        top: -5px;
        right: -38px;
    }

    .card-info-price span {
        align-self: stretch;
        color: #E5E5E5;
        font-family: Inter;
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -1.2px;
        text-decoration-line: line-through;
    }

    .card-info-size {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 30px;
    }

    .card-info-size-title {
        color: #000;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.8px;
    }

    .card-info-size-row {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .card-info-size label {
        color: #000;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid #E5E5E5;
        position: relative;
        cursor: pointer;
        min-width: 50px;
        max-width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card-info-size span::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: 1px solid #4A4A4A;
        opacity: 0;
        transition: 0.3s;
    }

    .card-info-size input {
        display: none;
    }

    .card-info-size input:checked ~ span::after {
        opacity: 1;
    }

    .card-info-type {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .card-info-type-title {
        align-self: stretch;
        color: #000;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.8px;
    }

    .card-info-type-row {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .card-info-type label {
        min-width: 50px;
        max-width: 50px;
        height: 50px;
        position: relative;
        cursor: pointer;
    }

    .card-info-type label img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .card-info-type span::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: 1px solid #4A4A4A;
        opacity: 0;
        transition: 0.3s;
    }

    .card-info-type input {
        display: none;
    }

    .card-info-type input:checked ~ span::after {
        opacity: 1;
    }

    .card-info-bot {
        display: flex;
        gap: 10px;
        margin-top: 30px;
    }

    .card-info-bot-cart {
        color: #FFF;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        width: 100%;
        height: 50px;
        background-color: #C1272D;
    }

    .card-info-bot-cart:hover {
        background-color: #fff;
        color: #C1272D;
    }

    .card-info-bot-fav {
        min-width: 50px;
        max-width: 50px;
        height: 50px;
        border: 1px solid #FFF;
        background-image: url(/images/card/fav.png);
        background-size: 25px 22px;
        background-position: center center;
        background-repeat: no-repeat;
    }

    .card-info-bot-fav:hover {
        background-color: #fff;
        background-image: url(/images/card/fav_active.png);
    }

    .card-info-bot-fav_active {
        background-color: #fff;
        background-image: url(/images/card/fav_active.png);
    }

    .card-info-rating {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        gap: 2px;
        align-items: center;
        color: #1C1C1C;
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
        padding: 0 10px;
        height: 28px;
        background-color: #fff;
    }

    .card-info-rating::before {
        content: '';
        width: 10px;
        height: 10px;
        background-image: url(/images/main-popular/star.png);
        background-size: 100% 100%;
        display: flex;
    }

    @media (max-width: 1700px) {
        .card-info {
            width: 100%;
        }

        .card-info-title {
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.8px;
            text-transform: none;
            margin-bottom: 22px;
        }

        .card-info-rating {
            top: 60px;
        }

        .card-info-size-row {
            /* flex-wrap: nowrap; */
            width: 100%;
        }
    }

    @media (max-width: 1199px) {
        .card-info {
            margin-top: 22px;
            position: unset;
        }

        .card-info-title {
            display: none;
        }

        .card-info-rating {
            top: 0;
            right: 20px;
        }

        .card-info-size {
            margin: 20px 0;
        }

        .card-info-size-row {
            flex-wrap: nowrap;
            overflow-x: scroll;
            margin: 0 -20px;
            padding: 0 20px;
        }

        .card-info-size-row::-webkit-scrollbar {
            display: none;
        }

        .card-info-type-row {
            flex-wrap: nowrap;
            overflow-x: scroll;
            margin: 0 -20px;
            padding: 0 20px;
        }

        .card-info-type-row::-webkit-scrollbar {
            display: none;
        }

        .card-info-bot {
            margin-top: 50px;
        }
    }

    @media (max-width: 639px) {
        
    }
</style>