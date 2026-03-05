<template>
    <div class="cart-side" :class="[order ? 'cart-side_order' : '']">
        <div class="cart-side-title" v-if="order">
            Ваш заказ <span>({{ cart_items.length }})</span>
        </div>
        <div class="cart-side-prod" v-if="order">
            <CartItem
                v-for="(cart_item, index) in cart_items"
                :key="index"
                :cart_item="cart_item"
                @remove="removeItem"
            />
        </div>
        <div class="cart-side-row">
            <div class="cart-side-item cart-side-item_total">
                <span>
                    Общая стоимость
                </span>
                <span>
                    {{cart_info.totalPrice}}₽
                </span>
            </div>
            <div class="cart-side-item" v-for="price in cart_info.prices">
                <span>
                    {{price.title}}
                </span>
                <span>
                    {{ price.num }}<template v-if="typeof price.num === 'number'">₽</template>
                </span>
            </div>
        </div>
        <label class="cart-side-check" v-if="order">
            <input type="checkbox">
            <span></span>
            Нажав на кнопку "Отправить", я подтверждаю свое согласие на обработку моих персональных данных и условия Политики конфиденциальности
        </label>
        <button class="cart-side-btn">
            Продолжить
        </button>
    </div>
</template>

<script setup>
    const props = defineProps({
        cart_items: { type: Object, required: true },
        cart_info: { type: Object, required: true },
        order: {
            type: Boolean,
            default: false,
        },
    })
</script>

<style scoped>
    .cart-side {
        max-width: 714px;
        width: 100%;
        padding: 20px;
        background-color: #fff;
        margin-left: auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: fit-content;
        position: sticky;
        top: 70px;
        box-sizing: border-box;
    }

    .cart-side-row {
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-bottom: 1px solid #E5E5E5;
        padding-bottom: 20px;
    }

    .cart-side-item {
        display: flex;
        justify-content: space-between;
        color: rgba(28, 28, 28, 0.8);
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
    }

    .cart-side-item_total {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        flex-wrap: wrap;
        row-gap: 10px;
    }

    .cart-side-btn {
        color: #FFF;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        background-color: #C1272D;
        padding: 10px 15px;
        box-sizing: border-box;
        height: 50px;
    }

    .cart-side-btn:hover {
        background-color: #fff;
        color: #C1272D;
    }

    .cart-side-title {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        padding-bottom: 5px;
        border-bottom: 1px solid #E5E5E5;
    }

    .cart-side-title span {
        color: #4A4A4A;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.8px;
    }

    .cart-side_order {
        max-width: 671px;
    }

    .cart-side-prod {
        max-height: 490px;
        overflow-y: scroll;
    }

    .cart-side-prod::-webkit-scrollbar {
        width: 5px; /* ширина скроллбара */
    }

    .cart-side-prod::-webkit-scrollbar-track {
        background-color: #E5E5E5; /* фон трека */
    }

    .cart-side-prod::-webkit-scrollbar-thumb {
        background-color: #4A4A4A; /* сам ползунок */
        border: 1px solid #E5E5E5;
        box-sizing: border-box;
    }

    .cart-side_order .cart-side-row {
        flex-direction: column-reverse;
        padding-top: 20px;
        border-top: 1px solid #E5E5E5;
    }

    .cart-side_order .cart-side-item_total {
        margin-top: 10px;
    }

    .cart-side-check {
        color: #4A4A4A;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
        display: flex;
        gap: 10px;
        align-items: flex-start;
        cursor: pointer;
        margin-bottom: 10px;
    }

    .cart-side-check span {
        display: flex;
        max-width: 20px;
        min-width: 20px;
        height: 20px;
        background-color: #fff;
        border: 1px solid #E5E5E5;
        box-sizing: border-box;
        position: relative;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .cart-side-check input {
        display: none;
    }

    .cart-side-check span::after {
        content: '';
        width: 14.5px;
        height: 13px;
        background-image: url(/images/cart/gal.png);
        background-size: 100% 100%;
        opacity: 0;
        transition: 0.3s;
    }

    .cart-side-check input:checked ~ span::after {
        opacity: 1;
    }

    @media (max-width: 1700px) {
        .cart-side {
            max-width: 373px;
        }

        .cart-side_order {
            max-width: 502px;
            min-width: 502px;
            margin-right: -50px;
            width: 100%;
        }

        .cart-side-prod {
            max-height: 364px;
        }

        .cart-side_order .cart-side-item_total {
            font-size: 24px;
        }
    }

    @media (max-width: 1199px) {
        .cart-side {
            max-width: 100%;
            width: 100%;
        }

        .cart-side_order {
            max-width: none;
            min-width: 0;
            margin: 0;
        }

        
    }

    @media (max-width: 639px) {
        .cart-side-item_total {
            font-size: 24px;
            gap: 5px;
        }

        .cart-side_order {
            margin: 0 -20px;
            width: calc(100% + 40px);
            padding: 30px 20px;
        }

        .cart-side-title {
            font-size: 24px;
        }
    }
</style>