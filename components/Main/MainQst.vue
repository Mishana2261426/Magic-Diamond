<template>
    <div class="main-qst">
        <div class="container">
            <h2>Частые вопросы</h2>

            <div class="main-qst-row">
                <div class="main-qst-pic">
                    <img src="/images/main-qst/pic.png" alt="">
                </div>

                <div class="main-qst-cont">
                    <QstItem :questions="questions" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const questions = [
        { qst: 'Как мне определить свой размер кольца?', text: 'Мы работаем с золотом 585 пробы, серебром 925 пробы и платиной. Точный состав металла и вес указаны в карточке каждого изделия.'},
        { qst: 'Из какого металла сделаны ваши украшения?', text: 'Мы работаем с золотом 585 пробы, серебром 925 пробы и платиной. Точный состав металла и вес указаны в карточке каждого изделия.'},
        { qst: 'Что такое кубический цирконий и чем он отличается от бриллианта?', text: 'Мы работаем с золотом 585 пробы, серебром 925 пробы и платиной. Точный состав металла и вес указаны в карточке каждого изделия.'},
        { qst: 'Сколько стоит доставка?', text: 'Мы работаем с золотом 585 пробы, серебром 925 пробы и платиной. Точный состав металла и вес указаны в карточке каждого изделия.'},
        
    ]

    
</script>

<style scoped>
    .main-qst {
        padding-top: 150px;
        background-color: #EFEFEF;
    }

    .main-qst h2 {
        color: #C1272D;
        font-family: Inter;
        font-size: 32px;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 30px;
    }

    .main-qst-row {
        display: flex;
        gap: 20px;
    }

    .main-qst-pic {
        max-width: 900px;
        width: 100%;
        height: 800px;
    }

    .main-qst-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .main-qst-cont {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
        border-top: 1px solid rgba(193, 39, 45, 0.1);
    }

    

    @media (max-width: 1700px) {
        .main-qst {
            padding-top: 120px;
        }

        .main-qst-pic {
            max-width: calc(32%);
            height: auto;
        }

        .main-qst-cont-item-top {
            font-size: 40px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -3.2px;
        }
    }

    @media (max-width: 1199px) {
        .main-qst {
            
        }

        .main-qst-row {
            gap: 0;
            margin: 0 -20px;
        }

        .main-qst-pic {
            display: none;
        }

        .main-qst-cont {
            gap: 0px;
        }

        /* .main-qst-cont-item-text {
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 120%;
            letter-spacing: -0.96px;
        } */
    }

    @media (max-width: 639px) {
        .main-qst {
            padding-top: 80px;
        }

        .main-qst h2 {
            text-align: left;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
            margin-bottom: 20px;
        }
    }
</style>
