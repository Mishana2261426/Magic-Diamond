<template>
    <div class="order-main-payment">
        <div class="order-main-top">
            <div class="order-main-title">
                {{title}}
            </div>
        </div>
        <div class="order-main-payment-row">
            <button
                v-for="(method, index) in paymentMethods"
                :key="index"
                :class="{ active: activeIndex === index }"
                @click="activeIndex = index"
            >
                <template v-if="method.img">
                    <img :src="method.img" :alt="method.title">
                </template>
                {{ method.title }}
                <span v-if="method.discount">
                    -{{ discount }}%
                </span>
            </button>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: {type: String, required: false},
        discount: {type: Number, required: false}
    })

    const activeIndex = ref(0)

    const paymentMethods = [
        { title: 'СБП', img: '/images/order/sbp.png', discount: props.discount },
        { title: 'Онлайн оплата' },
        { title: 'При получении' }
    ]
</script>

<style scoped>
    .order-main-payment-row {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }

    .order-main-payment-row button {
        max-width: 200px;
        min-width: 200px;
        height: 50px;
        border: 1px solid #FFF;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        position: relative;
        color: #002626;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
    }

    .order-main-payment-row button img {
        width: 32px;
        height: 40px;
    }

    .order-main-payment-row button span {
        position: absolute;
        top: 5px;
        right: 5px;
        color: #FFF;
        font-family: Inter;
        font-size: 12px;
        font-style: italic;
        font-weight: 700;
        line-height: 100%;
        text-align: center;
        border-radius: 50px;
        background: #C1272D;
        padding: 3.5px 10px;
    }

    .order-main-payment-row button:hover {
        border-color: #C1272D;
    }

    .order-main-payment-row button.active {
        background-color: #fff;
    }

    .order-main-payment-row button.active:hover {
        border-color: #fff;
    }

    @media (max-width: 1700px) {
        .order-main-payment-row {
            gap: 14px;
        }
    }

    @media (max-width: 1199px) {
        .order-main-payment-row {
            gap: 20px;
            flex-wrap: nowrap;
            overflow-x: scroll;
            margin: 0 -20px;
            padding: 0 20px;
        }

        .order-main-payment-row::-webkit-scrollbar {
            display: none;
        }

        .order-main-payment-row button {
            max-width: 180px;
            min-width: 180px;
        }
    }
</style>