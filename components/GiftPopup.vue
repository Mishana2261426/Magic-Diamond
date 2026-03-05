<template>
    <Teleport to="body">
        <div class="gift-popup" @click.self="popup.close()">
            <div class="gift-popup-cont">
                <button class="gift-popup-close" @click="popup.close()"></button>
                <div class="gift-popup-cont-title">дарим Бонусы</div>
                <div class="gift-popup-cont-text">
                    Получи 1000 бонусов за&nbsp;регистрацию!
                </div>
                <button class="gift-popup-reg-btn" @click="goToReg">
                    Зарегистрироваться
                </button>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
    const popup = usePopup()

    const router = useRouter()
    const selectedSize = ref(null)

    function goToReg() {
        popup.close()
        router.push('/reg')
    }
</script>

<style scoped>
    .gift-popup {
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

    .gift-popup-cont {
        background: #fff;
        padding: 50px 100px;
        max-width: 453px;
        width: 100%;
        position: relative;
        box-sizing: border-box;
    }

    .gift-popup-cont-title {
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

    .gift-popup-close {
        width: 24px;
        height: 24px;
        background-image: url(/images/header/menu-close.svg);
        background-size: 100% 100%;
        position: absolute;
        top: 20px;
        right: 20px;
    }

    .gift-popup-cont-text {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.96px;
    }

    .gift-popup-reg-btn {
        width: 100%;
        height: 50px;
        margin-top: 20px;
        color: #FFF;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        background: #C1272D;
    }

    .gift-popup-reg-btn:hover {
        background-color: #fff;
        color: #C1272D;
    }

    @media (max-width: 639px) {
        .gift-popup-cont {
            padding: 20px;
        }

        .gift-popup-cont-title {
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
            margin-bottom: 5px;
        }

        .gift-popup-cont-text {
            font-family: Inter;
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
    }
</style>