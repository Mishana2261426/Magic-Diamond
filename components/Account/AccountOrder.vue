<template>
    <div class="account-cont-item-top">
        {{ title }}
    </div>
    <div class="account-cont-item-order" v-if="!list">
        <div class="account-cont-item-order-empty">
            Вы еще ничего не купили. <br>
            Пришло время оформить ваш первый заказ!
            <a href="">
                Открыть каталог
            </a>
        </div>
        <MainSlider :items="items" :nav="true" title="Возможно, вас заинтересует"/>
    </div>
    <div class="account-cont-item-order-row">
        <div class="account-cont-item-order-item" v-for="item in list">
            <div class="account-cont-item-order-item-cont">
                <div class="account-cont-item-order-item-cont-date">
                    {{ item.date }}
                </div>
                <div class="account-cont-item-order-item-cont-type">
                    {{ item.type }}
                </div>
            </div>
            <div class="account-cont-item-order-item-side">
                <div class="account-cont-item-order-item-side-num">
                    Номер заказа:
                    <span>
                        {{ item.num }}
                    </span>
                </div>
                <button class="account-cont-item-order-item-side-btn">
                    Смотреть заказ
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
        },
        list: {
            type: Object
        },
        items: {
            type: Object
        },
    })
</script>

<style scoped>
    .account-cont-item-order {
        padding-bottom: 20px;
    }

    .account-cont-item-order-empty {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.96px;
        display: flex;
        flex-direction: column;
        gap: 35px;
        margin-bottom: 45px;
    }

    .account-cont-item-order-empty a {
        color: #FFF;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        max-width: 350px;
        width: 100%;
        height: 50px;
        background: #C1272D;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .account-cont-item-order-empty a:hover {
        background-color: #fff;
        color: #C1272D;
    }

    .account-cont-item-order-row {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .account-cont-item-order-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 20px;
        box-sizing: border-box;
        border: 1px solid #E5E5E5;
    }

    .account-cont-item-order-item-cont {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .account-cont-item-order-item-cont-date {
        align-self: stretch;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -1.2px;
    }

    .account-cont-item-order-item-cont-type {
        align-self: stretch;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.8px;
    }

    .account-cont-item-order-item-side {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 11px;
    }

    .account-cont-item-order-item-side-num {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.56px;
        display: flex;
        gap: 10px;
    }

    .account-cont-item-order-item-side-num span {
        color: #C1272D;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.56px;
    }

    .account-cont-item-order-item-side-btn {
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
    }

    .account-cont-item-order-item-side-btn:hover {
        background-color: #fff;
        color: #C1272D;
    }

    @media (max-width: 1700px) {

    }

    @media (max-width: 1199px) {
        
    }

    @media (max-width: 639px) {
        .account-cont-item-order-item {
            flex-direction: column;
            gap: 50px;
            align-items: flex-start;
        }
    }
</style>