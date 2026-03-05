<template>
    <div class="wedding">
        <h1>
            Свадьба и помолвка
        </h1>
        <div class="wedding-pic">
            <img src="/images/wedding/pic1.png" alt="">
        </div>
        <div class="container">
            <div class="wedding-row">
                <div class="wedding-col">
                    <a href="" class="wedding-col-item">
                        <img src="/images/wedding/pic2.png" alt="">
                        <div class="wedding-col-item-bot">
                            Обручальные кольца
                        </div>
                    </a>
                    <a href="" class="wedding-col-item">
                        <img src="/images/wedding/pic3.png" alt="">
                        <div class="wedding-col-item-bot">
                            Помоловочные кольца
                        </div>
                    </a>
                </div>
                <div class="wedding-col">
                    <a href="" class="wedding-col-item">
                        <img src="/images/wedding/pic4.png" alt="">
                        <div class="wedding-col-item-bot">
                            Для жениха
                        </div>
                    </a>
                    <a href="" class="wedding-col-item">
                        <img src="/images/wedding/pic5.png" alt="">
                        <div class="wedding-col-item-bot">
                            Для невесты
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <MainChoice />
</template>

<script setup>

</script>

<style scoped>
    .wedding {
        margin-top: 50px;
    }

    .wedding h1 {
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

    .wedding-pic {
        width: 100%;
        height: 350px;
        margin-top: 30px;
    }

    .wedding-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .wedding-row {
        margin-top: 30px;
        gap: 20px;
        display: flex;
    }

    .wedding-col {
        width: calc(50% - 10px);
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .wedding-col-item {
        overflow: hidden;
        position: relative;
        height: 400px;
        display: flex;
        flex-direction: column;
    }

    .wedding-col-item img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        z-index: -1;
        transition: 0.3s;
    }

    .wedding-col-item-bot {
        margin-top: auto;
        padding: 20px;
        box-sizing: border-box;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0.70) 45.19%, rgba(255, 255, 255, 0.00) 100%);
        color: #C1272D;
        font-family: "Playfair Display";
        font-size: 30px;
        font-style: italic;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -1.2px;
        text-transform: uppercase;
    }

    .wedding-col-item:hover img {
        scale: 1.1;
    }

    .wedding-col:last-child {
        flex-direction: row;
    }

    .wedding-col:last-child .wedding-col-item {
        height: 100%;
        width: 100%;
        min-width: 354px;
    }

    @media (max-width: 1700px) {
        .wedding-pic {
            height: 250px;
        }

        .wedding-col {
            width: 100%;
        }

        .wedding-col-item-bot {
            font-size: 24px;
            font-style: italic;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }
    }

    @media (max-width: 1199px) {
        .wedding-pic {
            height: 200px;
        }

        .wedding-row {
            flex-wrap: wrap;
            flex-direction: column-reverse;
            margin-top: 20px;
        }

        .wedding-col {
            flex-direction: row;
        }

        .wedding-col-item {
            height: 400px !important;
            width: calc(50% - 10px);
            min-width: 0 !important;
        }

        .wedding-col-item-bot {
            font-size: 20px;
            font-style: italic;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -0.8px;
            text-transform: uppercase;
        }
    }

    @media (max-width: 639px) {
        .wedding {
            margin-top: 30px;
        }

        .wedding h1 {
            color: #C1272D;
            font-family: Inter;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }

        .wedding-pic {
            height: 200px;
        }

        .wedding-col {
            flex-direction: column !important; 
        }

        .wedding-col-item {
            width: 100%;
            height: 250px !important;
        }

        .wedding-col-item img {
            object-position: center top;
        }
    }
</style>