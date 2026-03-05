<template>
    <div class="about-test">
        <h2 class="about-test-title">
            {{ title }}
        </h2>
        <div class="about-test-pic">
            <img src="/images/about/test.png" alt="">
        </div>
        <div class="about-test-row">
            <div class="about-test-inst">
                <div class="about-test-inst-item">
                    <div class="about-test-inst-pic">
                        <img src="/images/about/test1.png" alt="">
                    </div>
                    Зайти на сайт ГИИС ДМДК
                </div>
                <div class="about-test-inst-item">
                    <div class="about-test-inst-pic">
                        <img src="/images/about/test2.png" alt="">
                    </div>
                    Введите УИН изделия
                </div>
                <div class="about-test-inst-item">
                    <div class="about-test-inst-pic">
                        <img src="/images/about/test3.png" alt="">
                    </div>
                    Получите всю подробную информацию об изделии
                </div>
                <div class="about-test-inst-item">
                    <div class="about-test-inst-pic">
                        <img src="/images/about/test4.png" alt="">
                    </div>
                    Если вес, проба, наименования и другие характеристики совпадают, вы купили подлинное украшение бренда.
                </div>
            </div>
            <div class="about-test-text">
                <p v-for="item in about_texts">
                    {{ item.text }}
                </p>
            </div>
        </div>
        <a href="" class="about-test-link">
            Перейти на сайт ГИИС ДМДК
        </a>
    </div>
</template>

<script setup>
    const props = defineProps({
        about_texts: { type: Object},
        title: { type: String}
    });
</script>

<style scoped>
    .about-test {
        margin-bottom: 200px;
    }

    .about-test-title {
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

    .about-test-pic {
        width: 100%;
        height: 350px;
        margin-bottom: 30px;
    }

    .about-test-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .about-test-row {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        gap: 20px;
        margin-bottom: 30px;
        padding: 0 20px;
    }

    .about-test-inst {
        width: calc(50% - 10px);
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .about-test-inst-item {
        padding: 10px 20px;
        box-sizing: border-box;
        display: flex;
        gap: 10px;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.8px;
        align-items: center;
        background-color: #FFF;
    }

    .about-test-inst-pic {
        min-width: 30px;
        max-width: 30px;
        height: 30px;
        margin-bottom: auto;
    }

    .about-test-inst-pic img {
        width: 100%;
        height: 100%;
    }

    .about-test-text {
        width: calc(50% - 10px);
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .about-test-link {
        color: #FFF;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 350px;
        height: 50px;
        padding: 10px 15px;
        box-sizing: border-box;
        border: 1px solid #C1272D;
        background: #C1272D;
    }

    .about-test-link:hover {
        background-color: #fff;
        color: #C1272D;
    }

    @media (max-width: 1199px) {
        .about-test {
            /* display: none; */
            margin-bottom: 100px;
        }

        .about-test-row {
            flex-direction: column;
            gap: 30px;
        }

        .about-test-inst {
            width: 100%;
        }

        .about-test-text {
            width: 100%;
        }

        .about-test-link {
            width: calc(100% - 40px);
            margin: 0 20px;
            height: 50px;
        }
    }
</style>