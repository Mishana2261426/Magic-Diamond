<template>
    <div class="order-main-bonus">
        <div class="order-main-top">
            <div class="order-main-title">
                {{title}}
            </div>
        </div>
        <label class="order-main-bonus-label">
            <div class="order-main-bonus-num">
                {{num}} шт
            </div>
            <input type="checkbox" name="" id="">
            <span></span>
            <div class="order-main-bonus-text">
                {{text}}
            </div>
        </label>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: {type: String, required: false},
        num: {type: Number, required: true},
        text: {type: String, required: false},
        // discount: {type: Number, required: false}
    })
</script>

<style scoped>
    .order-main-bonus-label {
        display: flex;
        align-items: center;
        gap: 20px;
        cursor: pointer;
    }

    .order-main-bonus-label span {
        width: 40px;
        height: 20px;
        background-color: #E5E5E5;
        border-radius: 50px;
        transition: 0.3s;
        position: relative;
    }

    .order-main-bonus-label span::after {
        content: '';
        width: 20px;
        height: 20px;
        background-color: #fff;
        border-radius: 50%;
        border: 1px solid #E5E5E5;
        box-sizing: border-box;
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        transition: 0.3s;
    }

    .order-main-bonus-label input {
        display: none;
    }

    .order-main-bonus-label input:checked ~ span {
        background-color: #C1272D;
    }

    .order-main-bonus-label input:checked ~ span::after {
        transform: translateX(100%);
        border-color: #C1272D;
    }

    .order-main-bonus-num {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.8px;
    }

    .order-main-bonus-text {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
    }

    @media (max-width: 1199px) {
        .order-main-bonus-label {
            flex-wrap: wrap;
        }
    }
</style>