<template>
    <div class="warranty">
        <h1>
            Возврат и гарантия
        </h1>
        <div class="container">
            <div class="warranty-cont">
                <div class="warranty-cont-block" v-for="block in cont">
                    <h2>
                        {{ block.title }}
                    </h2>
                    <h3>
                        {{ block.subtitle }}
                    </h3>
                    <p v-for="text in block.texts">
                        {{ text.text }}
                    </p>
                    <ul>
                        <li v-for="item in block.list">
                            {{ item.text }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <MainChoice />
</template>

<script setup>
    const cont = ref([
        {
            title: 'На ювелирные украшения, приобретенные в MD, действует гарантия 2 года',
            subtitle: '',
            texts: [
                {
                    text: 'Если в украшении обнаружится заводской дефект, вы можете рассчитывать на возврат, ремонт или обмен изделия в течение 2-х лет с момента покупки.',
                },
                {
                    text: 'Для этого необходимо обратиться в салон, либо связаться с оператором контактного центра. Обязательно иметь: чек, бирку и само украшение.',
                },
                {
                    text: 'Если в украшении обнаружится заводской дефект, вы можете рассчитывать на возврат, ремонт или обмен изделия в течение 2-х лет с момента покупки.',
                },
                {
                    text: 'Для этого необходимо обратиться в салон, либо связаться с оператором контактного центра. Обязательно иметь: чек, бирку и само украшение.',
                },
                {
                    text: 'Если в украшении обнаружится заводской дефект, вы можете рассчитывать на возврат, ремонт или обмен изделия в течение 2-х лет с момента покупки.',
                },
                {
                    text: 'Для этого необходимо обратиться в салон, либо связаться с оператором контактного центра. Обязательно иметь: чек, бирку и само украшение.',
                },
            ],
        },
        {
            title: 'Возврат / обмен товара с выявленными недостатками',
            subtitle: 'Возврат / обмен товара надлежащего качества',
            list: [
                {
                    text: 'В соответствии с Законом РФ «О защите прав потребителей» от 7 февраля 1992 г. N 2300-I (ст. 25)  также в соответствии с п. 9 Перечня непродовольственных товаров надлежащего качества, не подлежащих обмену, утвержденным постановлением Правительства Российской Федерации от 31 декабря 2020 г. N 2463, приобретенные в магазинах ювелирные изделия надлежащего качества обмену не подлежат.'
                },
                {
                    text: 'В соответствии с Законом РФ «О защите прав потребителей» от 7 февраля 1992 г. N 2300-I (ст. 25)  также в соответствии с п. 9 Перечня непродовольственных товаров надлежащего качества, не подлежащих обмену, утвержденным постановлением Правительства Российской Федерации от 31 декабря 2020 г. N 2463, приобретенные в магазинах ювелирные изделия надлежащего качества обмену не подлежат.'
                },
                {
                    text: 'В соответствии с Законом РФ «О защите прав потребителей» от 7 февраля 1992 г. N 2300-I (ст. 25)  также в соответствии с п. 9 Перечня непродовольственных товаров надлежащего качества, не подлежащих обмену, утвержденным постановлением Правительства Российской Федерации от 31 декабря 2020 г. N 2463, приобретенные в магазинах ювелирные изделия надлежащего качества обмену не подлежат.'
                }
            ]
        }   
    ]);
</script>

<style scoped>
    .warranty {
        margin-top: 50px;
    }

    .warranty h1 {
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

    .warranty-cont {
        padding: 20px;
        box-sizing: border-box;
        max-width: 890px;
        width: 100%;
        background-color: #fff;
        margin: 0 auto;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .warranty-cont-block h2 {
        color: #C1272D;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.96px;
        text-transform: uppercase;
        margin-bottom: 20px;
    }

    .warranty-cont-block h3 {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -0.8px;
        text-transform: uppercase;
        margin-bottom: 10px;
    }

    .warranty-cont-block p {
        opacity: 0.8;
        align-self: stretch;
        color: #000;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.72px;
        margin-bottom: 20px;
    }

    .warranty-cont-block ul {
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        opacity: 0.8;
        align-self: stretch;
        color: #000;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.72px;
    }

    @media (max-width: 639px) {
        .warranty {
            margin-top: 30px;
        }

        .warranty-cont {
            margin: 0 -20px;
            margin-top: 30px;
            width: calc(100% + 40px);
        }

        .warranty-cont h2 {
            font-size: 22px;
        }

        .warranty h1 {
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%; /* 24px */
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }
    }
</style>