<template>
    <div class="contacts">
        <div class="container">
            <h1>
                Контакты
            </h1>
            <div class="contacts-row">
                <div class="contacts-cont">
                    <div class="contacts-cont-item" v-for="item in contacts_info">
                        <div class="contacts-cont-item-title">
                            {{ item.title }}
                        </div>
                        <div class="contacts-cont-item-text" v-if="item.text">
                            {{ item.text }}
                        </div>
                        <div class="contacts-cont-item-links" v-if="item.links">
                            <a :href="link.href" v-for="link in item.links">
                                {{ link.name }}
                            </a>
                        </div>
                    </div>
                </div>
                <div class="contacts-pic">
                    <img src="/images/about/contacts.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const contacts_info = [
        {
            title: 'Адрес',
            text: 'Россия, Москва, улица Свободы, дом 1'
        },
        {
            title: 'Телефон',
            links: [
                {
                    name: '+7 999 999 99 99',
                    href: 'tel=+7 999 999 99 99'
                }
            ]
        },
        {
            title: 'Email',
            links: [
                {
                    name: 'MagikDiamond@yandex.ru',
                    href: 'email=+7 999 999 99 99'
                }
            ]
        },
        {
            title: 'Другие контакты',
            links: [
                {
                    name: 'VKontakte',
                    href: 'asd'
                },
                {
                    name: 'Telegram',
                    href: 'asd'
                },
                {
                    name: 'Youtube',
                    href: 'Youtube'
                },
            ]
        },
    ]
</script>

<style scoped>
    .contacts {
        margin-top: 50px;
        margin-bottom: 100px;
    }

    .contacts h1 {
        color: #C1272D;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        text-align: center;
    }

    .contacts-row {
        display: flex;
        gap: 20px;
        margin-top: 30px;
        position: relative;
    }

    .contacts-pic {
        width: calc(50% - 10px);
        aspect-ratio: 1.5;
    }

    .contacts-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .contacts-cont {
        width: calc(50% - 10px);
        display: flex;
        flex-direction: column;
        gap: 50px;
        row-gap: 50px;
        height: fit-content;
        align-items: flex-end;
        padding-right: 144px;
    }

    .contacts-cont-item {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 300px;
        /* align-items: flex-end; */
    }

    .contacts-cont-item:nth-child(1) {
        position: absolute;
        top: 0;
        left: 0;
    }

    .contacts-cont-item-title {
        color: #C1272D;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
        letter-spacing: -0.96px;
        text-align: left;
    }

    .contacts-cont-item-text {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        letter-spacing: -0.96px;
        max-width: 300px;
        text-align: left;
    }

    .contacts-cont-item-links {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 300px;
    }

    .contacts-cont-item-links a {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        letter-spacing: -0.96px;
    }

    .contacts-cont-item-links a:hover {
        color: #C1272D;
    }

    @media (max-width: 1700px) {
        .contacts-row {
            flex-direction: row-reverse;
        }

        .contacts-pic {
            height: auto;
            aspect-ratio: unset;
        }

        .contacts-cont {
            padding: 0;
            align-items: flex-start;
        }

        .contacts-cont-item:nth-child(1) {
            position: unset;
        }
    }

    @media (max-width: 639px) {
        .contacts {
            margin-top: 30px;
            margin-bottom: 80px;
        }

        .contacts-row {
            flex-direction: column-reverse;
            gap: 30px;
        }

        .contacts h1 {
            text-align: left;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }

        .contacts-pic {
            height: 529px;
            width: 100%;
        }

        .contacts-cont {
            gap: 30px;
        }
    }
</style>