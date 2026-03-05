<template>
    <div class="main-about">
        <div class="container">
            <h2>
                О магазине
            </h2>
            <div class="main-about-title">
                magic diamond
            </div>
            <p>
                Ювелирный интернет-магазин, предлагающий широкий ассортимент стильных и качественных украшений на любой вкус. В нашем каталоге вы найдете изысканные кольца, серьги, браслеты и ожерелья из драгоценных металлов с натуральными камнями. Мы гарантируем высокое качество, оригинальный дизайн и быструю доставку по всей стране. Создайте свой неповторимый образ вместе с нами!
            </p>
            <div class="main-about-row">
                <div class="main-about-item main-about-item_single">
                    <div class="main-about-item-num">
                        5 000
                    </div>
                    <div class="main-about-item-text">
                        Уникальных моделей ювелирных изделий
                    </div>
                </div>
                <div class="main-about-item main-about-item_single-pic">
                    <img src="/images/main-about/pic2.png" alt="">
                </div>
                <div class="main-about-item main-about-item_sub">
                    <div class="main-about-item_sub-pic">
                        <img src="/images/main-about/pic3.png" alt="">
                    </div>
                    <div class="main-about-item_sub-cont">
                        <div class="main-about-item-num">
                        12
                        </div>
                        <div class="main-about-item-text">
                            На все товары предоставляется гарантия качества 12 месяцев
                        </div>
                    </div>
                </div>
                <div class="main-about-item main-about-item_single">
                    <div class="main-about-item-num">
                        98%
                    </div>
                    <div class="main-about-item-text">
                        Отличных отзывов
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .main-about {
        padding-top: 50px;
        padding-bottom: 50px;
        text-align: center;
        background-color: #fff;
    }

    .main-about h2 {
        color: #C1272D;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        margin-bottom: 30px;
    }

    .main-about-title {
        background: linear-gradient(85deg, #C1272D 49.42%, rgba(255, 255, 255, 0.70) 96.78%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        flex-shrink: 0;
        font-family: Inter;
        font-size: 200px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -16px;
        text-transform: uppercase;
        backdrop-filter: blur(50px);
        margin-bottom: 30px;
    }

    .main-about p {
        max-width: 910px;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.96px;
        text-align: center;
        margin: 0 auto;
    }

    .main-about-row {
        display: flex;
        flex-wrap: wrap;
        margin-top: 50px;
        gap: 20px;
    }

    .main-about-item {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        height: 610px;
        width: calc(24.72% - 15px);
        text-align: left;
        position: relative;
        overflow: hidden;
    }

    .main-about-item:first-child, .main-about-item:last-child {
        width: calc(25.28% - 15px);
    }

    .main-about-item_sub {
        gap: 20px;
    }

    .main-about-item_single {
        background-color: #EFEFEF;
        padding: 20px;
        box-sizing: border-box;
    }

    .main-about-item-num {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 100px;
        font-style: italic;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -4px;
        margin-bottom: 5px;
        position: relative;
        z-index: 1;
    }

    .main-about-item-text {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.96px;
        position: relative;
        z-index: 1;
    }

    .main-about-item:first-child {
        padding-left: 40px;
        overflow: hidden;
    }

    .main-about-item:first-child::after {
        content: '';
        max-width: 267px;
        width: 100%;
        height: 425px;
        background-image: url(/images/main-about/pic1.png);
        background-size: 100% 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: 0.3s;
        z-index: 0;
    }

    .main-about-item:first-child:hover::after {
        scale: 1.2;
        left: 0%;
        bottom: 0%;
    }

    .main-about-item-num, .main-about-item-text {
        max-width: 267px;
    }

    .main-about-item_single-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        transition: 0.3s;
    }

    .main-about-item_sub-pic {
        height: 387px;
        overflow: hidden;
    }

    .main-about-item_single-pic:hover img {
        scale: 1.2;
    }

    .main-about-item_sub-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top center;
        transition: 0.3s;
    }

    .main-about-item_sub-pic:hover img {
        scale: 1.2;
    }

    .main-about-item_sub-cont {
        background-color: #EFEFEF;
        padding: 20px;
        box-sizing: border-box;
    }

    .main-about-item_sub-cont .main-about-item-num, .main-about-item_sub-cont .main-about-item-text {
        max-width: none;
    }

    .main-about-item:last-child {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        gap: 0;
        overflow: hidden;
    }

    .main-about-item:last-child::after {
        content: '';
        max-width: 401px;
        width: 100%;
        height: 388px;
        background-image: url(/images/main-about/pic4.png);
        background-size: 100% 100%;
        position: absolute;
        top: 0;
        right: 0;
        transition: 0.3s;
    }

    .main-about-item:last-child:hover::after {
        scale: 1.4;
    }

    @media (max-width: 1700px) {
        .main-about-title {
            font-size: 150px;
        }

        .main-about-row {
            flex-wrap: wrap;
        }

        .main-about-item {
            width: calc(50% - 10px) !important;
        }

        .main-about-item:nth-child(1) {
            order: 2;
        }

        .main-about-item:nth-child(2) {
            order: 0;
        }

        .main-about-item:nth-child(3) {
            order: 1;   
        }

        .main-about-item:nth-child(4) {
            order: 3;
        }
    }

    @media (max-width: 1199px) {
        .main-about {
            padding: 50px 0;
        }

        .main-about-title {
            background: linear-gradient(85deg, #C1272D 49.42%, rgba(255, 255, 255, 0.70) 96.78%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 80px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -6.4px;
            text-transform: uppercase;
            backdrop-filter: blur(50px);
        }

        .main-about-row {
            flex-wrap: nowrap;
            overflow-x: scroll;
            margin: 0 -20px;
            padding: 0 20px;
            margin-top: 30px;
        }

        .main-about-row::-webkit-scrollbar {
            display: none;
        }

        .main-about-item {
            max-width: 540px;
            min-width: 540px;
            gap: 0;
            height: 610px;
        }

        .main-about-item:nth-child(1) {
            order: 2;
        }

        .main-about-item:nth-child(2) {
            order: 1;
        }

        .main-about-item:nth-child(3) {
            order: 0;   
        }

        .main-about-item:nth-child(4) {
            order: 3;
        }

        .main-about-item_sub-cont {
            padding: 20px;
            padding-top: 30px;
            height: 223px;
        }
    }

    @media (max-width: 639px) {
        .main-about {
            padding: 30px 0;
        }

        .main-about h2 {
            text-align: left;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
            margin-bottom: 10px;
        }

        .main-about-title {
            /* background: linear-gradient(85deg, #C1272D 49.42%, rgba(255, 255, 255, 0.70) 96.78%); */
            background: linear-gradient(85deg, #C1272D 69.42%, rgba(255, 255, 255, 0.70) 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 45px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -3.6px;
            text-transform: uppercase;
            backdrop-filter: blur(50px);
            margin-bottom: 20px;
        }

        .main-about p {
            text-align: left;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 120%;
            letter-spacing: -0.72px;
        }

        .main-about-row {
            gap: 10px;
        }

        .main-about-item {
            max-width: 335px;
            min-width: 335px;
        }

        .main-about-item-text {
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 120%;
            letter-spacing: -0.72px;
        }
    }
</style>