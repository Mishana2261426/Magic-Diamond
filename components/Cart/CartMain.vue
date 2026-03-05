<template>
    <div class="cart-main" :class="{ 'cart-main_order': order}">
        <div class="cart-main-top" v-if="!order">
            <label>
                <input type="checkbox"
                    @change="toggleSelectAll" :checked="selectAll"
                >
                <span></span>
                Выбрать всё
            </label>
            <button class="cart-main-top-clear">
                Удалить <span>выбранное</span>
            </button>
        </div>
        <div class="cart-main-row">
            <CartItem
                v-for="(cart_item, index) in cart_items"
                :key="index"
                :cart_item="cart_item"
                @remove="removeItem"
                order="order"
            />
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        cart_items: { type: Object, required: true },
        order: { type: Boolean, default: false },
    })

    const cartItems = ref([...props.cart_items])

    const selectAll = ref(false)

    function toggleSelectAll() {
        selectAll.value = !selectAll.value
        cartItems.value.forEach(item => {
            item.selected = selectAll.value
        })
    }

    watch(
        cartItems,
        (newVal) => {
            const allSelected = newVal.every(item => item.selected)
            selectAll.value = allSelected
        },
        { deep: true }
    )
</script>

<style scoped>
    .cart-main {
        width: 100%;
    }

    .cart-main-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 5px;
        border-bottom: 1px solid #FFF;
    }

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

    .cart-main-top label {
        display: flex;
        gap: 10px;
        align-items: center;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        letter-spacing: -0.64px;
        cursor: pointer;
    }

    .cart-main-top-clear {
        opacity: 0.5;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
    }

    .cart-main-top-clear:hover {
        opacity: 1;
    }

    .cart-main-row {
        margin-top: 30px;
        padding-left: 30px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 1086px;
        min-width: 1086px;
        width: 100%;
    }

    .cart-main-row label {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
    }

    .cart-main_order .cart-main-row {
        padding-left: 0;
        margin-top: 0;
    }

    @media (max-width: 1700px) {
        .cart-main-row {
            max-width: 100%;
            min-width: auto;
            margin-top: 20px;
        }

        
    }

    @media (max-width: 1199px) {
        
    }

    @media (max-width: 639px) {
        .cart-main {
            margin: 0 -20px;
            width: calc(100% + 40px);
        }

        .cart-main-top {
            flex-direction: row-reverse;
            padding: 0 20px;
            padding-bottom: 5px;
        }

        .cart-main-top-clear span {
            display: none;
        }

        .cart-main-row {
            padding-left: 0;
            gap: 10px;
            /* margin: 0 - 20px; */
        }

        
    }
</style>