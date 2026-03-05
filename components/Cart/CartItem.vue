<template>
    <div class="cart-main-item">
        <label>
            <input
                type="checkbox"
                v-model="localItem.selected"
                @change="$emit('update:selected', localItem.selected)"
            />
            <span></span>
        </label>

        <a href="" class="cart-main-item-pic">
            <img :src="localItem.image" alt="">
        </a>

        <div class="cart-main-item-cont">
            <div class="cart-main-item-title">
                <a href="" class="cart-main-item-title-text">
                    {{ localItem.title }}
                </a>
                <span v-if="localItem.size">
                    Размер {{ localItem.size }}, вариант {{ localItem.type }}
                </span>
            </div>

            <CartCounter v-model="localItem.counter" :order="order" />

            <div class="cart-main-item-price">
                {{ localItem.price }}₽
                <span
                    class="cart-main-item-price_old"
                    v-if="localItem.oldPrice"
                >
                    {{ localItem.oldPrice }}₽
                </span>
                <span
                    class="cart-main-item-price_piece"
                    v-if="localItem.piecePrice"
                >
                    {{ localItem.piecePrice }}₽ за шт.
                </span>
            </div>

            <div class="cart-main-item-add">
                <button
                    v-if="localItem.fav !== undefined"
                    class="cart-main-item-add-fav"
                    :class="{ 'cart-main-item-add-fav_active': localItem.fav }"
                    @click="toggleFav"
                ></button>
                <button class="cart-main-item-add-del" @click="$emit('remove', localItem)">
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        cart_item: { type: Object, required: true },
        order: { type: Boolean, default: false },
    })

    const emit = defineEmits(['remove', 'update:selected', 'update:cart_item'])

    const localItem = ref({ ...props.cart_item })

    watch(
        () => props.cart_item,
        (newVal) => {
            localItem.value = { ...newVal }
        },
        { deep: true }
    )

    watch(
        localItem,
        (val) => emit('update:cart_item', val),
        { deep: true }
    )

    const toggleFav = () => {
        localItem.value.fav = !localItem.value.fav
    }
</script>

<style scoped>
    .cart-main label span {
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

    .cart-main label input {
        display: none;
    }

    .cart-main label span::after {
        content: '';
        width: 14.5px;
        height: 13px;
        background-image: url(/images/cart/gal.png);
        background-size: 100% 100%;
        opacity: 0;
        transition: 0.3s;
    }

    .cart-main label input:checked ~ span::after {
        opacity: 1;
    }
    .cart-main-item {
        padding: 20px;
        background-color: #fff;
        display: flex;
        width: 100%;
        position: relative;
        box-sizing: border-box;
    }

    .cart-main-item label {
        position: absolute;
        top: 0;
        bottom: 0;
        left: -30px;
        margin: auto;
        width: 20px;
        height: fit-content;
    }

    .cart-main-item-pic {
        max-width: 300px;
        min-width: 300px;
        width: 100%;
        height: 300px;
        margin-right: 20px;
    }

    .cart-main-item-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .cart-main-item-cont {
        display: flex;
        flex-wrap: wrap;
        height: fit-content;
        row-gap: 30px;
        width: 100%;
    }

    .cart-main-item-title {
        display: flex;
        flex-direction: column;
        max-width: 340px;
        width: 100%;
        flex-wrap: wrap;
        height: fit-content;
        gap: 5px;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.8px;
        margin-bottom: 5px;
    }

    .cart-main-item-title span {
        max-width: 300px;
        color: rgba(74, 74, 74, 0.6);
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
    }

    .cart-main-item-price {
        /* max-width: 191px; */
        /* width: 100%; */
        margin-left: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        height: fit-content;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -1.2px;
    }

    .cart-main-item-price_old {
        color: #C1272D;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -0.8px;
        text-align: right;
        text-decoration-line: line-through;
    }

    .cart-main-item-price_piece {
        opacity: 0.6;
        color: #4A4A4A;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.56px;
        text-align: right;
    }

    .cart-main-item-add {
        width: 100%;
    }

    .cart-main-item-add-fav {
        max-width: 50px;
        min-width: 50px;
        height: 50px;
        background-image: url(/images/card/fav.png);
        background-size: 25px 22px;
        background-repeat: no-repeat;
        background-position: center center;
        cursor: pointer;
    }

    .cart-main-item-add-fav:hover {
        background-image: url(/images/card/fav_active.png);
    }

    .cart-main-item-add-fav_active {
        background-image: url(/images/card/fav_active.png);
    }

    .cart-main-item-add-del {
        max-width: 50px;
        min-width: 50px;
        height: 50px;
        background-image: url(/images/cart/del.png);
        background-size: 25px 25px;
        background-repeat: no-repeat;
        background-position: center center;
        cursor: pointer;
    }

    .cart-main-item-add-del:hover {
        background-image: url(/images/cart/del_active.png);
    }

    .cart-side-prod .cart-main-item {
        padding: 10px;
    }

    .cart-side-prod .cart-main-item-pic {
        /* display: none; */
        max-width: 150px;
        min-width: 150px;
        height: 150px;
    }

    .cart-side-prod .cart-main-item-title-text {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        line-clamp: 2;
        height: 36px;
    }

    .cart-side-prod .cart-main-item-title {
        max-width: 270px;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.72px;
    }

    .cart-side-prod .cart-main-item-price {
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -0.96px;
    }

    .cart-side-prod .cart-main-item-price_old {
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -0.72px;
        text-align: right;
        text-decoration-line: line-through;
    }

    .cart-side-prod .cart-main-item-pic {
        margin-right: 10px;
    }

    .cart-side-prod .cart-main-item-counter {
        display: none;
    }

    .cart-side-prod .cart-main-item label {
        display: none;
    }

    .cart-side-prod .cart-main-item-add {
        display: flex;
        justify-content: flex-end;
    }

    .cart-side-prod .cart-main-item-add-fav {
        display: none;
    }

    .cart-side-prod .cart-main-item-add-del {
        max-width: 25px;
        min-width: 25px;
        height: 25px;
    }

    .cart-main_order .cart-main-item label {
        display: none;
    }

    .cart-main_order .cart-main-item-add {
        display: none;
    }

    @media (max-width: 1700px) {
        .cart-main-item-pic {
            max-width: 150px;
            min-width: 150px;
            height: 150px;
        }

        .cart-main-item-cont {
            row-gap: 30px;
            justify-content: space-between;
            flex-wrap: nowrap;
            position: relative;
            height: auto;
        }

        .cart-main-item-title {
            order: 0;
            max-width: 300px;
        }

        .cart-main-item-counter {
            order: 3;
            position: absolute;
            right: 0;
            bottom: 20px;
        }

        .cart-main-item-price {
            order: 1;
        }

        .cart-main-item-add {
            order: 2;
            width: fit-content;
            position: absolute;
            left: 0;
            bottom: 0;
        }

        .cart-side-prod .cart-main-item-cont {
            flex-direction: column;
            row-gap: 10px;
            justify-content: flex-start;
        }

        .cart-side-prod .cart-main-item-price {
            margin-left: 0;
            width: fit-content;
            align-items: flex-start;
        }

        .cart-side-prod .cart-main-item-pic {
            max-width: 142px;
            min-width: 142px;
            height: 142px;
        }

        .cart-main-item-add {
            position: absolute;
            left: 0;
            bottom: 0;
        }
    }

    @media (max-width: 1199px) {
        .cart-main-item {
            padding: 10px;
        }

        .cart-main-item-title-text {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            line-clamp: 2;
            height: 36px;
        }

        .cart-main-item-title {
            max-width: 248px;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.72px;
        }

        .cart-main-item-price {
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -0.96px;
        }

        .cart-main-item-price_old {
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -0.72px;
            text-align: right;
            text-decoration-line: line-through;
        }

        .cart-main-item-pic {
            margin-right: 10px;
        }

        .cart-side-prod .cart-main-item-title {
            max-width: none;
        }

        .cart-side-prod .cart-main-item-title-text {
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.8px;
            -webkit-line-clamp: 1;
            height: 20px;
        }
    }

    @media (max-width: 639px) {
        .cart-main-item {
            padding: 10px 20px;
        }

        .cart-main-item label {
            position: absolute;
            top: 10px;
            right: 20px;
            left: auto;
            bottom: auto;
            z-index: 2;
        }

        .cart-main-item-pic {
            max-width: 100px;
            min-width: 100px;
            height: 109px;
        }

        .cart-main-item-cont {
            flex-direction: column;
            gap: 5px;
            justify-content: flex-start;
        }

        .cart-main-item-title {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.64px;
            gap: 0;
            max-width: 185px;
        }

        .cart-main-item-title-text {
            -webkit-line-clamp: 1;
            height: 16px;
        }

        .cart-main-item-title span {
            opacity: 0.6;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 120%;
            letter-spacing: -0.56px;
        }

        .cart-main-item-price {
            margin-left: 0;
            width: fit-content;
            text-align: left;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 5px;
            align-items: center;
            row-gap: 0;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -0.8px;
        }

        .cart-main-item-price_old {
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -0.64px;
            text-align: right;
            text-decoration-line: line-through;
        }

        .cart-main-item-counter {
            left: 0;
            bottom: 0;
            right: auto;
        }

        .cart-main-item-add {
            right: 0;
            bottom: 0;
            left: auto;
            gap: 5px;
            display: flex;
            height: 30px;
        }

        .cart-main-item-add-fav, .cart-main-item-add-del {
            min-width: 30px;
            max-width: 30px;
            height: 30px;
        }
    }
</style>
