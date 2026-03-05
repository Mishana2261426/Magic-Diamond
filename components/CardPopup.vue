<template>
    <Teleport to="body">
        <div class="card-popup" @click.self="popup.close()">
            <div class="card-popup-cont">
                <button class="card-popup-cont-close" @click="popup.close()"></button>
                <transition name="fade" mode="out-in">
                    <div v-if="popup.step.value === 1" :key="'step1'">
                        <div class="card-popup-cont-title">
                            ВЫБЕРИТЕ РАЗМЕР ИЗДЕЛИЯ
                        </div>

                        <div class="card-popup-cont-size">
                            <div class="card-popup-cont-size-title">
                                Размер, мм
                            </div>
                            <div class="card-popup-cont-size-row">
                                <label
                                    v-for="(size, i) in data.sizes"
                                    :key="i"
                                    class="card-popup-cont-size-row-item"
                                >
                                    <input
                                        type="radio"
                                        name="size"
                                        :value="size.num"
                                        v-model="selectedSize"
                                    />
                                    <span></span>
                                    {{ size.num }}
                                </label>
                            </div>
                        </div>

                        <button
                            class="card-popup-cont-size-btn"
                            :class="{ 'card-popup-cont-size-btn_dis': !selectedSize }"
                            :disabled="!selectedSize"
                            @click="addToCart"
                        >
                            В корзину
                        </button>
                    </div>

                    <div v-else-if="popup.step.value === 2" :key="'step2'">
                        <div class="card-popup-cont-title">
                            Товар добавлен в корзину
                        </div>
                        <div class="card-popup-cont-actions">
                            <button class="btn-outline" @click="popup.close()">
                                Продолжить покупки
                            </button>
                            <button class="btn" @click="goToCart">
                                Оформить заказ
                            </button>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
        {{ data }}
    </Teleport>
</template>

<script setup>
    const props = defineProps({
        data: {
            type: Object,
            default: () => ({}),
        },
    })

    const popup = usePopup()
    const router = useRouter()
    const selectedSize = ref(null)

    function addToCart() {
        console.log('Добавлено:', { ...props.data, size: selectedSize.value })
        popup.nextStep()
    }

    function goToCart() {
        popup.close()
        router.push('/cart')
    }
</script>

<style scoped>
    .card-popup {
        position: fixed;
        background: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(7.5px);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 5;
        top: 50px;
        right: 0;
        left: 0;
        bottom: 0;
    }

    .card-popup-cont {
        background: #fff;
        padding: 50px;
        max-width: 570px;
        width: 100%;
        position: relative;
        box-sizing: border-box;
    }

    .card-popup-cont-title {
        color: #C1272D;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        margin-bottom: 20px;
    }

    .card-popup-cont-close {
        width: 24px;
        height: 24px;
        background-image: url(/images/header/menu-close.svg);
        background-size: 100% 100%;
        position: absolute;
        top: 20px;
        right: 20px;
    }

    .card-popup-cont-size-title {
        align-self: stretch;
        color: #000;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.8px;
        margin-bottom: 10px;
    }

    .card-popup-cont-size-row {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .card-popup-cont-size-row-item {
        width: 50px;
        height: 40px;
        border: 1px solid #E5E5E5;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        position: relative;
        cursor: pointer;
    }

    .card-popup-cont-size-row-item input {
        display: none;
    }

    .card-popup-cont-size-row-item span {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: 1px solid #4A4A4A;
        box-sizing: border-box;
        opacity: 0;
        transition: 0.3s;
    }

    .card-popup-cont-size-row-item input:checked ~ span {
        opacity: 1;
    }

    .card-popup-cont-size-btn {
        width: 100%;
        height: 50px;
        margin-top: 30px;
        color: #FFF;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        background: #C1272D;
    }

    .card-popup-cont-size-btn:hover {
        background-color: #fff;
        color: #C1272D;
    }

    .card-popup-cont-size-btn_dis {
        filter: grayscale(50%);
    }

    .card-popup-cont-actions {
        display: flex;
        width: 100%;
        gap: 20px;
    }

    .card-popup-cont-actions button {
        width: calc(50% - 10px);
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        box-sizing: border-box;
    }

    .card-popup-cont-actions .btn-outline {
        border: 1px solid #1C1C1C;
        background: #FFF;
        color: #1C1C1C;
    }

    .card-popup-cont-actions .btn {
        background-color: #C1272D;
        border-color: #C1272D;
        color: #fff;
    }

    .card-popup-cont-actions .btn:hover {
        background-color: #fff;
        color: #C1272D;
    }

    @media (max-width: 639px) {
        .card-popup-cont {
            padding: 20px;
        }

        .card-popup-cont-title {
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
            margin-bottom: 10px;
            width: calc(100% - 24px);
        }

        .card-popup-cont-size-title{
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 120%;
            letter-spacing: -0.72px;
            max-width: 251px;
        }

        .gift-popup-reg-btn {
            margin-top: 30px;
        }

        .card-popup-cont-actions {
            margin-top: 20px;
            flex-direction: column;
            gap: 10px;
        }

        .card-popup-cont-actions button {
            width: 100%;
        }
    }
</style>
