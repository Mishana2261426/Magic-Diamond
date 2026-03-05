<template>
    <div class="bot-menu">
        <NuxtLink to="/"  class="bot-menu-link" exact-active-class="bot-menu-active">
            <div class="bot-menu-pic">
                <img src="/images/bot-menu/home.svg" alt="">
            </div>
            Главная
        </NuxtLink>

        <NuxtLink to="/catalog" class="bot-menu-link" exact-active-class="bot-menu-active">
            <div class="bot-menu-pic">
                <img src="/images/bot-menu/cat.svg" alt="">
            </div>
            Каталог
        </NuxtLink>

        <NuxtLink to="/fav" class="bot-menu-link" exact-active-class="bot-menu-active">
            <div class="bot-menu-pic">
                <img src="/images/bot-menu/fav.svg" alt="">
            </div>
            Избранное
        </NuxtLink>

        <NuxtLink to="/cart" class="bot-menu-link" exact-active-class="bot-menu-active">
            <div class="bot-menu-pic">
                <img src="/images/bot-menu/cart.svg" alt="">
            </div>
            Корзина
        </NuxtLink>

        <NuxtLink to="/account" class="bot-menu-link" exact-active-class="bot-menu-active">
            <div class="bot-menu-pic">
                <img src="/images/bot-menu/acc.svg" alt="">
            </div>
            Профиль
        </NuxtLink>
    </div>
    <footer class="footer">
        <div class="container">
            <div class="footer-main">
                <a href="" class="footer-logo">
                    <img src="/images/footer/logo.png" alt="">
                </a>
                <div v-for="(col, i) in cols" :key="i" class="footer-col">
                    <div class="footer-col-title">
                        {{ col.title }}
                    </div>
                    <ul>
                        <li v-for="(link, i) in col.links" :key="i">
                            <a :href="link.href">
                                {{ link.value }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-bot">
                <a href="" class="footer-bot-link">
                    Политика конфиденциальности
                </a>
                <a href="" class="footer-bot-link">
                    Публичная оферта
                </a>
                <div class="footer-bot-dev">
                    Разработка <span>веб-</span>сайта
                    <a href="">
                        Твой стартап
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
    const cols = [
        {
            title: 'Каталог',
            links: [
                { value: 'Кольца', href: '' },
                { value: 'Серьги', href: '' },
                { value: 'Подвески', href: '' },
                { value: 'Браслеты', href: '' },
                { value: 'Цепи', href: '' },
                { value: 'Колье', href: '' },
                { value: 'Аксессуары', href: '' },
                { value: 'Подарочные карты', href: '' },
                { value: 'Акции', href: '' },
            ]
        },
        {
            title: 'О компании',
            links: [
                { value: 'О нас', href: '' },
                { value: 'Контакты', href: '' },
                { value: 'Пользовательское соглашение', href: '' },
                { value: 'Отзывы', href: '' },
            ]
        },
        {
            title: 'Контакты',
            links: [
                { value: '+7 999 999 99 99', href: '' },
                { value: 'VKontakte', href: '' },
                { value: 'Telegram', href: '' },
                { value: 'Youtube', href: '' },
            ]
        },
        {
            title: 'Для клиентов',
            links: [
                { value: 'Как оформить заказ', href: '' },
                { value: 'Оплата и доставка', href: '' },
                { value: 'Возврат и обмен', href: '' },
                { value: 'Вопрос-ответ', href: '' },
                { value: 'Бонусная программа', href: '' },
            ]
        },
    ];
</script>

<style scoped>
    .bot-menu {
        display: none;
    }

    .footer {
        background-color: #fff;
        padding: 50px 0;
        box-sizing: border-box;
    }

    .footer-main {
        display: flex;
        justify-content: space-between;
        padding-right: 120px;
    }

    .footer-logo {
        max-width: 304px;
        width: 100%;
    }

    .footer-logo img {
        width: 100%;
    }

    .footer-col {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .footer-col-title {
        color: #1C1C1C;
        font-family: "Playfair Display";
        font-size: 24px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.96px;
    }

    .footer-col ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 16px */
        letter-spacing: -0.64px;
    }

    .footer-col ul a:hover {
        color: #C1272D;
    }

    .footer-bot {
        display: flex;
        justify-content: flex-end;
        gap: 180px;
        align-items: flex-end;
        margin-top: -34px;
    }

    .footer-bot-link {
        color: #C1272D;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
    }

    .footer-bot-dev {
        color: #1C1C1C;
        font-family: "Playfair Display";
        font-size: 20px;
        font-style: italic;
        font-weight: 500;
        line-height: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .footer-bot-dev span {
        display: contents;
    }

    .footer-bot-dev a {
        color: #C1272D;
        font-family: Inter;
        font-size: 40px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -3.2px;
        text-transform: uppercase;
    }

    

    @media (max-width: 1700px) {
        .footer {
            padding: 30px 0;
        }
        .footer-logo {
            display: none;
        }

        .footer-main {
            padding-right: 0;
        }

        .footer-bot {
            margin-top: -4px;
            justify-content: flex-start;
            gap: 121px;
        }

        .footer-bot-dev {
            margin-left: auto;
        }
    }

    @media (max-width: 1199px) {
        .footer {
            padding: 30px 0;
            position: relative;
            padding-left: 162px;
        }

        .footer::before {
            content: '';
            height: 378px;
            width: 162px;
            background-image: url(/images/footer/footer-logo.png);
            background-size: 100% 100%;
            position: absolute;
            top: 30px;
            left: 20px;
        }

        .footer-main {
            flex-wrap: wrap;
            gap: 20px;
            row-gap: 30px;
        }

        .footer-col {
            width: calc(50% - 10px);
        }

        .footer-bot {
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
            margin-top: 30px;
        }

        .footer-bot-dev {
            margin-left: 0;
            margin-top: 50px;
        }
    }

    @media (max-width: 639px) {
        .footer {
            padding: 30px 0;
            /* height: 628px; */
        }

        .footer-logo {
            display: flex;
            order: 1;
            width: calc(50% - 10px);
        }

        .footer::before {
            display: none;
        }

        .footer .container {
            display: flex;
            flex-wrap: wrap;
        }

        .footer-main {
            flex-direction: column;
            flex-wrap: wrap;
            height: 628px;
            justify-content: flex-start;
        }

        .footer-col {
            order: 0;
            width: calc(50% - 10px);
        }

        .footer-col:last-child {
            order: 2;
        }

        .footer-bot {
            /* display: none; */
            position: absolute;
            bottom: 30px;
            right: 20px;
            width: calc(50% - 30px);
            margin: 0;
        }

        .footer-bot-dev {
            /* margin-top: 150px; */
            gap: 5px;
            font-size: 18px;
            font-style: italic;
            font-weight: 500;
            line-height: 100%; /* 18px */
            white-space: nowrap;
        }

        .footer-bot-link {
            /* padding-left: 10px; */
        }

        .footer-bot-dev span {
            display: none;
        }

        .footer-bot-dev a {
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -1.92px;
            text-transform: uppercase;
            white-space: nowrap;
        }

        .bot-menu {
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 10;
            border: 1px solid rgba(255, 255, 255, 0.10);
            background: #C1272D;
            box-sizing: border-box;
            padding: 12.5px 20px;
            justify-content: space-between;
        }

        .bot-menu a {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #FFF;
            font-family: Inter;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            gap: 5px;
            opacity: 0.6;
        }

        .bot-menu-active {
            opacity: 1 !important;
        }

        .bot-menu-pic {
            height: 18px;
        }

        .bot-menu-pic img {
            height: 100%;
        }
    }

    @media (max-width: 336px) {
        .footer-main {
            height: 600px;
        }

        .footer-bot {
            position: unset;
            width: 100%;
        }

        .footer-bot-dev {
            margin-top: 30px;
        }
    }
</style>