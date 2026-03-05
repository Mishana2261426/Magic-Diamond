<template>
    <div class="order-main-info">
        <div class="order-main-top">
            <div class="order-main-title">
                {{title}}
            </div>
            <a href="" v-if="reg_link">
                У вас есть аккаунт? Авторизоваться
            </a>
        </div>
        <div class="order-main-info-row">
            <input v-for="field in fields" :type="field.type" :placeholder="field.title" :name="field.name">
        </div>
        <a href="" class="oder-main-info-detail" v-if="detail">
            Подробнее
        </a>
    </div>
</template>

<script setup>
    const props = defineProps({
        reg_link: {type: Boolean, required: false},
        title: {type: String, required: false},
        fields: {type: Object, required: false},
    })
</script>

<style scoped>
    .order-main-info {
        display: flex;
        flex-direction: column;
    }

    .oder-main-info-detail {
        margin-top: 20px;
        width: fit-content;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        text-align: right;
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: none;
        text-decoration-thickness: auto;
        text-underline-offset: auto;
        text-underline-position: from-font;
    }
</style>