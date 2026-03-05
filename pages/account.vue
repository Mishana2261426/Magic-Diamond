<template>
    <div class="account">
        <div class="container">
            <h1>Мой личный кабинет</h1>
            <div class="account-row"
            :class="{
                'account-row_profile': activeIndex === 0,
                'account-row_order': activeIndex === 1,
                'account-row_fav': activeIndex === 2
                }"
            >
                <div class="account-side account-side_anim">
                    <div class="account-side-list">
                        <button
                            v-for="(button, index) in account_side.buttons"
                            :key="index"
                            class="account-side-list-switch"
                            :class="{ 'active': activeIndex === index }"
                            @click="activeIndex = index"
                        >
                            <div class="account-side-list-switch-pic">
                                <img
                                    :src="button.pic"
                                    v-show="activeIndex !== index"
                                >
                                <img
                                    :src="button.pic_active"
                                    class="active"
                                    v-show="activeIndex === index"
                                >
                            </div>
                            {{ button.title }}
                        </button>

                        <button class="account-side-list-exit">
                            <div class="account-side-list-switch-pic">
                                <img src="/images/account/exit.png">
                                <img src="/images/account/exit_active.png" class="active">
                            </div>
                            Выход
                        </button>
                    </div>

                    <div class="account-side-bonus account-side-bonus_dis">
                        <div class="account-side-bonus-top">
                            {{ account_side.bonus_all }}
                        </div>
                        Всего бонусов
                    </div>

                    <div class="account-side-bonus">
                        <div class="account-side-bonus-top">
                            {{ account_side.bonus_active }}
                        </div>
                        Активные бонусы
                    </div>

                    <a href="" class="account-side-more">Подробнее</a>
                </div>

                <div class="account-cont">
                    <div class="account-cont-item" v-show="activeIndex === 0">
                        <AccountProfile title="Мой профиль" :item="account_profile"/>
                    </div>
                    <div class="account-cont-item" v-show="activeIndex === 1">
                        <AccountOrder title="Заказы" :list="list" :items="pop_items"/>
                    </div>
                    <div class="account-cont-item" v-show="activeIndex === 2">
                        <AccountFav title="Ваше избранное" :items="pop_items"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const activeIndex = ref(0)

    watch(activeIndex, (newIndex) => {
        const block = document.querySelector('.account-side')
        if (!block) return

        // 1. Всегда добавляем класс анимации
        block.classList.add('account-side_anim')

        // 2. Удаляем предыдущие классы, НО НЕ СРАЗУ добавляем новые

        // 3. Через 1 секунду — когда анимация заканчивается
        setTimeout(() => {
            // убрать анимацию
            block.classList.remove('account-side_anim')
            block.classList.remove('account-side_order', 'account-side_fav')

            // добавить новый класс по табу
            if (newIndex === 1) {
                block.classList.add('account-side_order')
            } else if (newIndex === 2) {
                block.classList.add('account-side_fav')
            }

        }, 1000) // <-- длительность твоей анимации
    })

    const account_side = ref({
        bonus_all: 15000,
        bonus_active: 5000,
        buttons: [
            {
                pic: '/images/account/switch1.png',
                pic_active: '/images/account/switch1_active.png',
                title: 'Главная',
            },
            {
                pic: '/images/account/switch2.png',
                pic_active: '/images/account/switch2_active.png',
                title: 'Мои заказы',
            },
            {
                pic: '/images/account/switch3.png',
                pic_active: '/images/account/switch3_active.png',
                title: 'Избранное',
            },
        ],
    });

    const pop_items = ref([
        { title: 'Ожерелье из серебра с камнем сапфир', image: '/images/main-popular/pic.png', price: 50000, oldPrice: 100000, discount: '50%', isNew: true, isHit: true, rating: 5.0, reviews: 27, fav: true, sizes: [
            {num: '16'},
            {num: '16,5'},
            {num: '17'},
            {num: '17,5'},
            {num: '18'},
            {num: '18,5'},
            {num: '19'},
            {num: '20'},
            {num: '21,5'},
            {num: '21'},
        ], },
        { title: 'Ожерелье из золота с изумрудом', image: '/images/main-popular/pic.png', price: 47000, isNew: true, rating: 4.9, reviews: 10,  },
        { title: 'Серьги с фианитами', image: '/images/main-popular/pic.png', price: 31000, isHit: true, rating: 5.0, reviews: 45,  },
        { title: 'Кольцо с сапфиром', image: '/images/main-popular/pic.png', rating: 5.0, price: 38000,  },
        { title: 'Ожерелье из серебра с камнем сапфир', image: '/images/main-popular/pic.png', price: 50000, oldPrice: 100000, discount: '50%', isNew: true, isHit: true, rating: 5.0, reviews: 27,  },
        { title: 'Ожерелье из золота с изумрудом', image: '/images/main-popular/pic.png', price: 47000, isNew: true, rating: 4.9, reviews: 10,  },
        { title: 'Серьги с фианитами', image: '/images/main-popular/pic.png', price: 31000, isHit: true, rating: 5.0, reviews: 45,  },
        { title: 'Кольцо с сапфиром', image: '/images/main-popular/pic.png', rating: 5.0, price: 38000,  },
        { title: 'Ожерелье из серебра с камнем сапфир', image: '/images/main-popular/pic.png', price: 50000, oldPrice: 100000, discount: '50%', isNew: true, isHit: true, rating: 5.0, reviews: 27,  },
        { title: 'Ожерелье из золота с изумрудом', image: '/images/main-popular/pic.png', price: 47000, isNew: true, rating: 4.9, reviews: 10,  },
        { title: 'Серьги с фианитами', image: '/images/main-popular/pic.png', price: 31000, isHit: true, rating: 5.0, reviews: 45,  },
        { title: 'Кольцо с сапфиром', image: '/images/main-popular/pic.png', rating: 5.0, price: 38000,  }
    ]);

    const account_profile = ref({
        name: 'Денис',
        second_name: 'Андреев',
        surname: 'Андреевич',
        sex: 'male',
        date: '1995-09-06',
        city: 'Ярославль',
        contact_tel: '+7 920 147 58 50',
        contact_email: 'ADTRUSSIA@mail.ru'
    })

    const list = ref([
        {
            date: 'Получен 9 декабря 2024',
            type: 'Доставка в пункт выдачи',
            num: '2003',
        },
        {
            date: 'Получен 9 декабря 2024',
            type: 'Доставка в пункт выдачи',
            num: '2003',
        },
        {
            date: 'Получен 9 декабря 2024',
            type: 'Доставка в пункт выдачи',
            num: '2003',
        },
        {
            date: 'Получен 9 декабря 2024',
            type: 'Доставка в пункт выдачи',
            num: '2003',
        },
    ])

    onMounted(() => {
        setTimeout(() => {
            const el = document.querySelector('.account-side_anim')
            el?.classList.remove('account-side_anim')
        }, 300) // 1 секунда
    })
</script>

<style scoped>
    .account {
        margin-top: 50px;
        margin-bottom: 100px;
    }

    .account h1 {
        color: #C1272D;
        text-align: center;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        margin-bottom: 30px;
    }

    .account-row {
        position: relative;
        max-width: 1301px;
        margin: 0 auto;
        gap: 20px;
        display: flex;
    }

    /* .account-row_profile::after {
        content: '';
        width: 510px;
        height: 465px;
        background-image: url(/images/account/fav.png);
        background-size: 100% 100%;
        position: absolute;
        top: -85;
        left: -319px;
        z-index: -1;
    } */

    .account-side {
        max-width: 241px;
        min-width: 241px;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 440px;
        background-color: #fff;
        position: relative;
    }

    .account-side::after {
        content: '';
        width: 510px;
        height: 465px;
        background-image: url(/images/account/rock.png);
        background-size: 100% 100%;
        position: absolute;
        top: -85px;
        left: -319px;
        z-index: -1;
        transition: opacity 0.3s, left 1s, right 1s;
        opacity: 1;
    }

    .account-side_order::after {
        background-image: url(/images/account/st.png);
    }

    .account-side_fav::after {
        background-image: url(/images/account/fav.png);
    }

    .account-side_anim::after {
        left: 0;
        opacity: 0;
    }

    .account-side-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: flex-end;
        margin-bottom: auto;
    }

    .account-side-list button {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.96px;
        text-align: right;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .account-side-list button:hover, .account-side-list button.active {
        color: #C1272D;
    }

    .account-side-list-switch-pic {
        width: 16px;
        display: flex;
        align-items: center;
        position: relative;
    }

    .account-side-list-switch-pic img {
        width: 100%;
        opacity: 1;
        transition: 0.3s;
    }

    .account-side-list-switch-pic img.active {
        position: absolute;
        opacity: 0;
        display: block !important;
    }

    .account-side-list button:hover img, .account-side-list button.active img {
        opacity: 0;
    }

    .account-side-list button:hover img.active, .account-side-list button.active img {
        opacity: 1;
    }

    .account-side-bonus {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-top: 30px;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
        letter-spacing: -0.96px;
        text-align: right;
    }

    .account-side-bonus-top {
        color: #C1272D;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .account-side-bonus-top::after {
        content: '';
        min-width: 24px;
        max-width: 24px;
        height: 24px;
        background-image: url(/images/account/bonus.png);
        background-size: 100% 100%;
        display: flex;
    }

    .account-side-bonus_dis {
        color: #4A4A4A;
    }

    .account-side-bonus_dis .account-side-bonus-top {
        color: #4A4A4A;
    }

    .account-side-bonus_dis .account-side-bonus-top::after {
        background-image: url(/images/account/bonus_dis.png);
    }

    .account-side-more {
        color: #4A4A4A;
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
        margin-top: 10px;
    }

    .account-cont {
        width: 100%;
    }

    .account-cont-item {
        padding: 20px;
        padding-bottom: 50px;
        box-sizing: border-box;
        background-color: #fff;
        height: 100%;
        overflow: hidden;
    }

    :deep(.account-cont-item-top) {
        display: flex;
        justify-content: space-between;
        color: #1C1C1C;
        font-family: "Playfair Display";
        font-size: 32px;
        font-style: italic;
        font-weight: 400;
        line-height: 120%;
        letter-spacing: -1.28px;
        align-items: flex-start;
        margin-bottom: 30px;
    }

    @media (max-width: 1700px) {

    }

    @media (max-width: 1199px) {
        .account-row {
            flex-direction: column;
            gap: 100px;
        }

        .account-side {
            /* display: none; */
            max-width: 100%;
            min-width: 0;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0;
            height: auto;
            padding: 20px;
            box-sizing: border-box;
            overflow: hidden;
        }

        .account-side-list {
            align-items: flex-start;
            width: 100%;
            height: fit-content;
            margin-bottom: 30px;
            order: 0;
        }

        .account-side-bonus {
            align-items: flex-start;
            margin-top: 0;
            margin-right: 30px;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 120%;
            letter-spacing: -0.8px;
            text-align: right;
            order: 1;
        }

        .account-side-bonus_dis {
            order: 2;
        }

        .account-side-bonus-top {
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }

        .account-side-more {
            text-align: left;
            width: 100%;
            order: 3;
        }

        .account h1 {
            margin-bottom: 6px;
        }

        .account-side::after {
            z-index: 1;
            left: auto;
            top: auto;
            right: -30px;
            bottom: 0;
            width: 310px;
            height: 265px;
        }

        .account-side_anim::after {
            right: -100%;
        }
    }

    @media (max-width: 639px) {
        .account-side::after {
            right: -150px;
            bottom: auto;
            top: 0;
        }

        .account-side_anim::after {
            right: -100%;
        }

        .account-row {
            margin-right: -20px;
            margin-left: -20px;
            gap: 80px;
        }

        .account-side-bonus {
            margin: 0;
            width: 50%;
        }
    }
</style>