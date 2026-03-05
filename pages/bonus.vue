<template>
    <div class="bonus">
        <div class="bonus-top">
            <div class="bonus-top-text">
                Приглашаем Вас присоединиться к Бонусной программе
            </div>
            <h1>
                Magic Diamond
            </h1>
            <div class="bonus-top-rock" ref="wrapper">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="container">
            <div class="bonus-adv">
                <h2>
                    Ваши преимущества с Magic Diamond
                </h2>
                <div class="bonus-adv-row">
                    <div class="bonus-adv-pic">
                        <img src="/images/bonus/pic2.png" alt="">
                    </div>
                    <div class="bonus-adv-list">
                        <div class="bonus-adv-item" v-for="item in adv">
                            <div class="bonus-adv-item-pic">
                                <img :src="item.pic" alt="">
                            </div>
                            <div class="bonus-adv-item-num">
                                {{ item.num }}
                            </div>
                            <div class="bonus-adv-item-text">
                                {{item.text}}
                                <a href="" class="bonus-adv-item-text_help" v-if="item.help">
                                    i
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bonus-how">
                <h2>
                    Как получить бонусы
                </h2>
                <div class="bonus-how-row">
                    <div class="bonus-how-item" v-for="(item, index) in how" :key="index">
                        <div class="bonus-how-item-pic">
                            <img :src="item.pic" alt="">
                        </div>
                        <div class="bonus-how-item-bot">
                            <div class="bonus-how-item-bot-num">
                                {{ (index + 1).toString().padStart(2, '0') }}
                            </div>
                            <div class="bonus-how-item-bot-text">
                                {{ item.text }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bonus-how">
                <h2>
                    Как потратить бонусы
                </h2>
                <div class="bonus-how-row">
                    <div class="bonus-how-item" v-for="(item, index) in how" :key="index">
                        <div class="bonus-how-item-pic">
                            <img :src="item.pic" alt="">
                        </div>
                        <div class="bonus-how-item-bot">
                            <div class="bonus-how-item-bot-num">
                                {{ (index + 1).toString().padStart(2, '0') }}
                            </div>
                            <div class="bonus-how-item-bot-text">
                                {{ item.text }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <MainQst />
    <MainChoice />
</template>

<script setup>
    const adv = ref([
        {
            pic: '/images/bonus/icon1.png',
            num: '10 000',
            text: 'Приветственных бонусов при регистрации',
            help: false
        },
        {
            pic: '/images/bonus/icon2.png',
            num: '30%',
            text: 'Оплата бонусами до 30% покупки',
            help: true
        },
        {
            pic: '/images/bonus/icon3.png',
            num: '10%',
            text: 'Кэшбэк 10% с каждой покупки',
            help: false
        },
        {
            pic: '/images/bonus/icon4.png',
            num: '365',
            text: 'Возможность использовать бонусы в течение всего года',
            help: false
        },
        {
            pic: '/images/bonus/icon5.png',
            num: '500',
            text: 'Бонусов за отзыв о покупке на сайте',
            help: false
        },
    ]);

    const how = ref([
        {
            pic: '/images/bonus/pic2.png',
            text: 'При покупке онлайн выберите на странице “Оформление заказа” оплату бонусами'
        },
        {
            pic: '/images/bonus/pic3.png',
            text: 'При покупке онлайн выберите на странице “Оформление заказа” оплату бонусами'
        },
    ])
    
    const wrapper = ref(null)

    onMounted(() => {
        const items = wrapper.value.querySelectorAll('span')

        // сохраняем исходные позиции
        const original = [...items].map(el => ({
            top: el.style.top,
            left: el.style.left,
            right: el.style.right,
            bottom: el.style.bottom
        }))

        // стартовое состояние (исчезшие в центр)
        items.forEach(el => {
            el.style.top = '0'
            el.style.left = '0'
            el.style.right = '0'
            el.style.bottom = '0'
            el.style.opacity = '0'
        })

        // плавное возвращение на свои места
        setTimeout(() => {
            items.forEach((el, i) => {
                el.style.top = original[i].top
                el.style.left = original[i].left
                el.style.right = original[i].right
                el.style.bottom = original[i].bottom
                el.style.opacity = '1'
            })
        }, 500)

        // ============================
        // ПАРАЛЛАКС
        // ============================

        let targetX = 0
        let targetY = 0
        let currentX = 0
        let currentY = 0

        function onMouseMove(e) {
            targetX = (e.clientX / window.innerWidth - 0.5) * 70
            targetY = (e.clientY / window.innerHeight - 0.5) * 70
        }

        function animate() {
            currentX += (targetX - currentX) * 0.1
            currentY += (targetY - currentY) * 0.1

            items.forEach((el, i) => {
                const depth = 1 + i * 0.15

                // ЧЕРЕДОВАНИЕ: чётные — за курсором, нечётные — от курсора
                const direction = (i % 2 === 0) ? 1 : -1

                const x = (currentX / depth) * direction
                const y = (currentY / depth) * direction

                el.style.transform = `translate(${x}px, ${y}px)`
            })

            requestAnimationFrame(animate)
        }

        window.addEventListener('mousemove', onMouseMove)
        animate()

        onBeforeUnmount(() => {
            window.removeEventListener('mousemove', onMouseMove)
        })
    })

</script>

<style scoped>
    .bonus-top {
        padding-top: 100px;
        position: relative;
        /* overflow: hidden; */
        height: 530px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .bonus-top::before {
        content: '';
        height: 340px;
        width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        background-color: #C1272D;
        z-index: -2;
    }

    /* .bonus-top::after {
        content: '';
        height: 489.234px;
        max-width: 1692px;
        max-width: 500px;
        background-image: url(/images/bonus/bg.png);
        background-size: cover;
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        background-position: center center;
        object-fit: contain;
        transform: translateX(-50px);
        z-index: -1;
        transition: 0.3s;
    } */

    .bonus-top-rock {
        width: 360px;
        height: 270px;
        background-image: url(/images/bonus/rock.png);
        background-size: 100% 100%;
        margin-top: 58px;
        position: relative;
        z-index: 1;
    }

    .bonus-top-rock span {
        position: absolute;
        background-size: cover;
        transition: 0.3s;
    }

    .bonus-top-rock span:nth-child(1) {
        width: 133.182px;
        height: 159.819px;
        background-image: url(/images/bonus/a1.png);
        left: -663px;
        top: -174px;
    }

    .bonus-top-rock span:nth-child(2) {
        width: 176.78px;
        height: 132.917px;
        background-image: url(/images/bonus/a2.png);
        left: -563px;
        top: -14px;
    }

    .bonus-top-rock span:nth-child(3) {
        width: 97.797px;
        height: 117.356px;
        background-image: url(/images/bonus/a3.png);
        left: -252px;
        top: -11px;
    }

    .bonus-top-rock span:nth-child(4) {
        width: 139.447px;
        height: 167.337px;
        background-image: url(/images/bonus/a4.png);
        right: -342px;
        top: -19px;
    }

    .bonus-top-rock span:nth-child(5) {
        width: 172.275px;
        height: 129.53px;
        background-image: url(/images/bonus/a5.png);
        right: -564px;
        top: -149px;
    }

    .bonus-top-text {
        color: #FFF;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        text-shadow: 0 0 150px #FFF;
        text-align: center;
    }

    .bonus-top h1 {
        align-self: stretch;
        color: #FFF;
        font-family: "Playfair Display";
        font-size: 70px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -2.8px;
        text-align: center;
        text-shadow: 0 0 150px #FFF;
    }

    .bonus-top-pic {
        width: 1692.101px;
        height: 489.234px;
        position: absolute;
        top: 40px;
        left: 4px;
        right: 0;
    }

    .bonus-top-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center bottom;
    }

    .bonus-adv {
        margin-top: 50px;
    }

    .bonus h2 {
        color: #C1272D;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 30px;
    }

    .bonus-adv-row {
        display: flex;
        gap: 20px;
    }

    .bonus-adv-pic {
        width: calc(50% - 10px);
        height: auto;
    }

    .bonus-adv-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .bonus-adv-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .bonus-adv-item {
        display: flex;
        padding: 10px 20px;
        box-sizing: border-box;
        background-color: #fff;
        align-items: center;
        height: 50px;
    }

    .bonus-adv-item-pic {
        min-width: 30px;
        max-width: 30px;
        height: 30px;
        margin-right: 5px;
    }

    .bonus-adv-item-pic img {
        width: 100%;
        height: 100%;
    }

    .bonus-adv-item-num {
        color: #1C1C1C;
        font-family: "Playfair Display";
        font-size: 50px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -4px;
        margin-right: 20px;
        max-width: 131px;
        min-width: 131px;
        white-space: nowrap;
    }

    .bonus-adv-item-text {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.8px;
        display: flex;
    }

    .bonus-adv-item-text_help {
        color: #FFF;
        font-family: Inter;
        font-size: 8px;
        font-style: italic;
        font-weight: 700;
        line-height: 100%;
        text-align: center;
        border-radius: 50%;
        background-color: #C1272D;
        min-width: 15px;
        max-width: 15px;
        height: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
    }

    .bonus-how {
        margin-top: 150px;
    }

    .bonus-how-row {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .bonus-how-item {
        width: calc(50% - 10px);
        display: flex;
        flex-direction: column;
    }

    .bonus-how-item-pic {
        width: 100%;
        height: 200px;
    }

    .bonus-how-item-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .bonus-how-item-bot {
        display: flex;
        gap: 20px;
        padding: 10px 20px;
        background-color: #fff;
        align-items: center;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.8px;
    }

    .bonus-how-item-bot-num {
        color: #C1272D;
        font-family: "Playfair Display";
        font-size: 50px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -4px;
    }

    @media (max-width: 1700px) {
        .bonus-top {
            padding-top: 100px;
            height: 530px;
        }

        .bonus-adv-pic {
            width: 100%;
            max-width: 333px;
            height: auto;
        }

        .bonus-how {
            margin-top: 150px;
        }

        .bonus-how-item {
            width: 100%;
        }

        .bonus-top-rock span:nth-child(1) {
            left: -467px;
            top: -144px;
        }

        .bonus-top-rock span:nth-child(2) {
            width: 176.78px;
            height: 132.917px;
            background-image: url(/images/bonus/a2.png);
            left: -262px;
            top: -14px;
        }

        .bonus-top-rock span:nth-child(3) {
            display: none;
        }

        .bonus-top-rock span:nth-child(4) {
            width: 139.447px;
            height: 167.337px;
            background-image: url(/images/bonus/a4.png);
            right: -257px;
            top: -19px;
        }

        .bonus-top-rock span:nth-child(5) {
            width: 172.275px;
            height: 129.53px;
            background-image: url(/images/bonus/a5.png);
            right: -480px;
            top: -149px;
        }

        .bonus-adv-list {
            width: 100%;
        }
    }

    @media (max-width: 1199px) {
        .bonus-top {
            padding-top: 50px;
            height: 453px;
        }

        .bonus-top::after {
            height: 420px;
            top: auto;
            bottom: 0;
        }

        .bonus-adv-row {
            flex-direction: column;
        }

        .bonus-adv-pic {
            max-width: 100%;
            height: 250px;
        }

        .bonus-how {
            margin-top: 50px;
        }

        .bonus-top-rock {
            width: 250px;
            height: 187px;
            margin-top: 50px;
        }
    }

    @media (max-width: 639px) {
        .bonus-top {
            padding-top: 30px;
            height: 369px;
        }

        .bonus-top-text {
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
            text-shadow: 0 0 150px #FFF;
            padding: 0 20px;
            box-sizing: border-box;
        }

        .bonus-top h1 {
            align-self: stretch;
            color: #FFF;
            font-family: "Playfair Display";
            font-size: 50px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -2px;
            text-align: center;
            text-shadow: 0 0 150px #FFF;
        }

        .bonus-top::after {
            height: 340px;
        }

        .bonus-top::before {
            height: 250px;
        }

        .bonus h2 {
            text-align: left;
            color: #C1272D;
            font-family: Inter;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }

        .bonus-adv-item {
            height: auto;
            flex-wrap: wrap;
            row-gap: 10px;
        }
    }
</style>