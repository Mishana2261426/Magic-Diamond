<template>
    <div class="error">
        <div class="container">
            <div class="error-cont">
                <div class="error-title">
                    <img src="/images/bonus/error.png" alt="">
                </div>
                <h1>
                    К сожалению, страница не найдена
                </h1>
                <p>
                    Похоже, страница которую вы ищете не существует или была перемещена. <br> Не волнуйтесь, мы вернем вас в нужное направление!
                </p>
                <button>
                    Вернуться на главную страницу
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .error {
        background-color: #C1272D;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .error-cont {
        max-width: 704px;
        width: 100%;
        text-align: center;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .error-title {
        max-width: 644px;
        width: 100%;
        margin-bottom: 50px;
    }

    .error-title img {
        width: 100%;
        height: 100%;
    }

    .error-cont h1 {
        color: #FFF;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        margin-bottom: 5px;
    }

    .error-cont p {
        color: #FFF;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.8px;
        text-align: center;
    }

    .error-cont button {
        color: #C1272D;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        padding: 15px 20px;
        box-sizing: border-box;
        background-color: #fff;
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }

    @media (max-width: 1200px) {
        .error-cont h1 {
            align-self: stretch;
            color: #FFF;
            font-family: Inter;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-align: center;
            text-transform: uppercase;
        }

        .error-cont p {
            align-self: stretch;
            color: #FFF;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.64px;
            text-align: center;
        }
    }

    @media (max-width: 639px) {
        .error-title {
            display: flex;
            justify-content: center;
        }
    }
</style>