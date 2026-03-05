<template>
    <div class="action">
        <div class="container">
            <h1>
                Акции
            </h1>
            <div class="action-nav">
                <button
                    v-for="(item, index) in action_nav"
                    :key="index"
                    :class="{ active: activeIndex === index }"
                    @click="setActive(index)"
                >
                    {{ item.title }}
                </button>
            </div>
            <div class="action-row">
                <ActionCard :actions="actions"/>
            </div>
            <CatalogPag :pags="pags"/>
        </div>
    </div>
</template>

<script setup>
    const actions = [
        { title: 'Бриллиантовые дни', date: 'Действует до 01.09.2025', text: 'Скидка на все украшения с  бриллиантами -56%', image: '/images/main-action/pic1.png'},
        { title: 'Осенняя акция', date: 'Действует до 01.09.2025', text: 'You buy a set of jewelry, a ring as a gift. Also, a set discount -50%. The promotion is limited by the number of sets', image: '/images/main-action/pic2.png'},
        { title: 'Бриллиантовые дни', date: 'Действует до 01.09.2025', text: 'Скидка на все украшения с  бриллиантами -56%', image: '/images/main-action/pic1.png'},
        { title: 'Осенняя акция', date: 'Действует до 01.09.2025', text: 'You buy a set of jewelry, a ring as a gift. Also, a set discount -50%. The promotion is limited by the number of sets', image: '/images/main-action/pic2.png'},
    ];

    const pags = ref([
        { num: '1', active: true},
        { num: '2', active: false},
        { num: '3', active: false},
        { num: '4', active: false},
        { num: '...', active: false},
        { num: '10', active: false},
    ]);

    const action_nav = ref([
        {
            title: 'Скидки',
        },
        {
            title: 'Промо код',
        },
        {
            title: 'Бонусы',
        },
        {
            title: 'Подарки',
        },
    ]);

    const activeIndex = ref(0) // по умолчанию активная первая кнопка

    const setActive = (index) => {
        activeIndex.value = index
    }
</script>

<style scoped>
    .action {
        margin-top: 50px;
        margin-bottom: 100px;
    }

    .action h1 {
        text-align: center;
        color: #C1272D;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
    }

    .action-row {
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        row-gap: 20px;
    }

    .action-nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-top: 30px;
        overflow-x: scroll;
    }

    .action-nav::-webkit-scrollbar {
        display: none;
    }

    .action-nav button {
        color: #002626;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
        max-width: 150px;
        min-width: 150px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #fff;
    }

    .action-nav button.active, .action-nav button:hover {
        background-color: #fff;
        color: #C1272D;
    }

    @media (max-width: 1700px) {
        .action-row {
            margin-top: 20px;
            gap: 20px;
        }
    }

    @media (max-width: 1199px) {
        .action h1 {
            text-align: left;
        }

        .action-nav {
            justify-content: flex-start;
            margin: 0 -20px;
            padding: 0 20px;
            margin-top: 20px;
        }
    }

    @media (max-width: 639px) {
        .action {
            margin-top: 30px;
            margin-bottom: 80px;
        }

        .action h1 {
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }
    }
</style>