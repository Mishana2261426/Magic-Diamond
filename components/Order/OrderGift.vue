<template>
    <div class="order-main-gift">
        <div class="order-main-top">
            <div class="order-main-title">
                {{title}}
            </div>
        </div>
        <div class="order-main-gift-row">
            <input type="text" placeholder="Введите код">
            <button>
                Проверить
            </button>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: {type: String, required: false},
    })
</script>

<style scoped>
    .order-main-gift-row {
        display: flex;
        gap: 10px;
    }

    .order-main-gift-row input {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
        padding-bottom: 5px;
        border-bottom: 1px solid #FFF;
        max-width: 539px;
        width: 100%;
    }

    .order-main-gift-row input::placeholder {
        opacity: 0.5;
    }

    .order-main-gift-row button {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
    }
</style>