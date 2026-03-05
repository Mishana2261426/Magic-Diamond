<template>
    <section class="gift">
        <div class="container">
            <div class="gift-title">
                Идеальный подарок - это свобода выбора
            </div>
            <div class="gift-row">
                <div class="gift-cont">
                    <div class="gift-cont-title">
                        Выберите номинал
                        <span>
                            подарочной карты
                        </span>
                    </div>
                    <div class="gift-cont-card">
                        <div class="gift-cont-card-title">
                            Воплощай мечты с Magic Diamond
                        </div>
                        <div class="gift-cont-card-num">
                            <div class="gift-cont-card-num_txt">5000</div>
                        </div>
                        <div class="gift-cont-card-bot">
                            <div class="gift-cont-card-bot_lt">
                                Действует бессрочно
                            </div>
                            <div class="gift-cont-card-bot_rt">
                                <img src="/images/gift/logo.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="gift-cont-slider">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="price in prices">
                                {{ price.num }}₽
                            </div>
                        </div>
                    </div>
                    <button class="gift-cont-card-btn">
                        В корзину
                    </button>
                    <div class="gift-card-cont-add">
                        Используйте номинал сертификата полностью или частями
                        <a href="">
                            Подробнее про подарочные карты
                        </a>
                    </div>
                </div>
                <div class="gift-price swiper">
                    <div class="gift-price-slider swiper-wrapper">
                        <div class="swiper-slide" v-for="price in prices">
                            {{ price.num }}₽
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const prices= ref([
        {
            num: 1000
        },
        {
            num: 2000
        },
        {
            num: 3000
        },
        {
            num: 4000
        },
        {
            num: 5000
        },
        {
            num: 6000
        },
        {
            num: 7000
        },
        {
            num: 8000
        },
        {
            num: 9000
        },
        {
            num: 10000
        },
    ])

    if (process.client) {
    onMounted(() => {
        const cardNum = document.querySelector('.gift-cont-card-num_txt')

        // функция обновления текста номинала
        const updateGiftValue = (swiper) => {
            const activeSlide = swiper.slides[swiper.activeIndex]
            if (!activeSlide) return
            const value = activeSlide.textContent.trim()
            if (cardNum) {
                cardNum.innerHTML = `${value}`
            }
        }

        // 🎁 Слайдер с номиналами (для десктопа)
        const gift_slider = new Swiper('.gift-price', {
            initialSlide: 2,
            direction: 'vertical',
            slidesPerView: 'auto',
            centeredSlides: true,
            watchSlidesProgress: true,
            slideToClickedSlide: true,
            spaceBetween: 20,
            slidesOffsetBefore: 50,

            breakpoints: {
                0: {
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 160,
                    spaceBetween: 16,
                },
                1201: {
                    slidesOffsetBefore: 50,
                    slidesOffsetAfter: 0,
                    spaceBetween: 20,
                },
            },

            on: {
                init(swiper) {
                    updateGiftValue(swiper)
                },
                slideChange(swiper) {
                    updateGiftValue(swiper)
                },
            },
        })

        // 💎 Слайдер с карточками (для мобильных)
        const cont_slider = new Swiper('.gift-cont-slider', {
            initialSlide: 2,
            slidesPerView: 'auto',
            centeredSlides: true,
            watchSlidesProgress: true,
            slideToClickedSlide: true,
            spaceBetween: 20,

            on: {
                init(swiper) {
                    updateGiftValue(swiper)
                },
                slideChange(swiper) {
                    updateGiftValue(swiper)
                },
            },
        })
    })
}
</script>

<style scoped>
    .gift {
        background-image: url(/images/gift/gift_bg.png);
        background-size: 101% 100%;
        background-position: center center;
        padding-top: 50px;
        padding-bottom: 33px;
        box-sizing: border-box;
        overflow: hidden;
    }

    .gift-title {
        color: #FFF;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 40px;
    }

    .gift-row {
        max-width: 1284px;
        margin: 0 auto;
        display: flex;
        gap: 16px;
        align-items: center;
        overflow: hidden;
        padding-top: 10px;
        padding-bottom: 60px;
        position: relative;
    }

    .gift-cont {
        max-width: 650px;
        min-width: 650px;
    }

    .gift-cont-title {
        color: #FFF;
        font-family: "Playfair Display";
        font-size: 80px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -6.4px;
        margin-bottom: 50px;
    }

    .gift-cont-title span {
        font-family: Inter;
        font-size: 70px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -2.8px;
    }

    .gift-cont-card-btn {
        color: #C1272D;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        margin-top: 30px;
        width: 100%;
        height: 50px;
        background-color: #fff;
        color: #C1272D;
    }

    .gift-cont-card-btn:hover {
        background-color: #C1272D;
        color: #fff;
    }

    .gift-card-cont-add {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: #FFF;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.8px;
    }

    .gift-card-cont-add a {
        color: #FFF;
        margin-left: auto;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.8px;
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: none;
        text-decoration-thickness: auto;
        text-underline-offset: auto;
        text-underline-position: from-font;
    }

    .gift-cont-card {
        width: 100%;
        height: 420px;
        background-image: url(/images/gift/card_bg.png);
        background-size: 100% 100%;
        border-radius: 20px;
        padding: 30px;
        padding-top: 40px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        overflow: hidden;
    }

    .gift-cont-card::before {
        content: "";
        position: absolute;
        width: 160%;
        height: 160%;
        top: -80%;
        left: -80%;
        background: linear-gradient(
            140deg,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0.35) 48%,
            rgba(255, 255, 255, 0.6) 50%,
            rgba(255, 255, 255, 0.35) 52%,
            rgba(255, 255, 255, 0) 60%
        );

        z-index: 3;
        animation: giftShineDiagSmall 3s linear infinite;
    }

    @keyframes giftShineDiagSmall {
        0% {
            transform: translate(-40%, -40%);
        }
        100% {
            transform: translate(100%, 100%);
        }
    }

    .gift-cont-card::after {
        content: '';
        height: 55%;
        background-image: url(/images/gift/rock.png);
        background-size: cover;
        /* background-size: 100% 100%; */
        position: absolute;
        bottom: 0;
        left: 56px;
        right: 66px;
    }

    .gift-cont-card-title {
        color: #FFF;
        font-family: "Playfair Display";
        font-size: 32px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        margin-bottom: 5px;
    }

    .gift-cont-card-num {
        color: #FFF;
        font-family: "Playfair Display";
        font-size: 150px;
        font-style: italic;
        font-weight: 400;
        line-height: 75%;
        letter-spacing: -12px;
        text-transform: uppercase;
    }

    .gift-cont-card-num span {
        font-size: 50px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -4px;
        text-transform: uppercase;
    }

    .gift-cont-card-bot {
        margin-top: auto;
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: flex-end;
    }

    .gift-cont-card-bot_lt {
        max-width: 84px;
        opacity: 0.8;
        color: #FFF;
        font-family: "Playfair Display";
        font-size: 16px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
    }

    .gift-cont-card-bot_rt {
        width: 90px;
        height: 35px;
    }

    .gift-cont-card-bot_rt img {
        width: 100%;
        height: 100%;
        mix-blend-mode: lighten;
    }

    .gift-price {
        max-width: 618px;
        width: 100%;
        display: flex;
        height: 574px;
        overflow: visible;
        margin-top: -200px;
        /* overflow: hidden; */
    }

    .gift-price-slider {
        /* margin-top: 50px; */
        /* overflow: visible; */
    }

    .gift-price-slider .swiper-slide {
        width: 618px;
        color: #FFF;
        font-family: Inter;
        font-size: 100px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -8px;
        text-transform: uppercase;
        opacity: 0.3;
        height: auto;
        text-align: center;
        transition: 0.3s;
        cursor: pointer;
    }

    .gift-price-slider .swiper-slide-active {
        flex-shrink: 0;
        color: #FFF;
        font-family: Inter;
        font-size: 200px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -16px;
        text-transform: uppercase;
        opacity: 1;
    }

    .gift-price-slider .swiper-slide-prev, .gift-price-slider .swiper-slide-next {
        opacity: 0.4;
        font-family: Inter;
        font-size: 150px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -12px;
        text-transform: uppercase;
    }

    .gift-cont-slider {
        display: none;
    }

    @media (max-width: 1700px) {
        .gift-title {
            margin-bottom: 20px;
        }

        .gift-row {
            padding-top: 100px;
            align-items: flex-start;
            margin-right: -50px;
            overflow: hidden;
            max-width: none;
        }

        .gift-cont-title {
            color: #FFF;
            font-family: "Playfair Display";
            font-size: 60px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -4.8px;
            white-space: nowrap;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            text-align: center;
        }

        .gift-cont-title span {
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -2px;
        }

        .gift-cont {
            max-width: 650px;
            width: 100%;
        }

        /* .gift-price-slider  */

        .gift-price-slider .swiper-slide {
            width: 387px;
            opacity: 0.3;
            font-size: 80px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -6.4px;
            text-align: center;
            text-transform: uppercase;
        }

        .gift-price-slider .swiper-slide-next, .gift-price-slider .swiper-slide-prev {
            opacity: 0.4;
            font-size: 120px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -9.6px;
            text-align: center;
            text-transform: uppercase;
        }

        .gift-price-slider .swiper-slide-active {
            opacity: 1;
            font-size: 130px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -10.4px;
            text-transform: uppercase;
        }

        .gift-price {
            max-width: 387px;
            height: 480px;
            margin-top: 0;
            /* margin-right: -50px; */
            /* padding-right: 50px; */
            /* margin-right: -50px; */
            overflow: visible;
        }
    }

    @media (max-width: 1199px) {
        .gift {
            padding-top: 33px;
            padding-bottom: 50px;
        }

        .gift-price {
            display: none;
        }

        .gift-cont {
            max-width: 100%;
            min-width: 0;
        }

        .gift-cont-card {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            aspect-ratio: 650 / 420;
            height: auto;
        }

        .gift-row {
            margin: 0;
            padding: 0;
            overflow: visible;
        }

        .gift-cont-title {
            position: unset;
            display: none;
        }

        .gift-cont-card::after {
            height: 54%;
        }

        .gift-cont-card-title {
            font-size: 30px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -1.2px;
        }

        .gift-cont-card-num {
            font-size: 138px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -11.04px;
            text-transform: uppercase;
        }

        .gift-cont-slider {
            display: block;
            margin-top: 30px;
        }

        .gift-cont-slider .swiper-slide {
            width: auto;
            opacity: 0.3;
            color: #FFF;
            font-family: Inter;
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -4.8px;
            text-align: center;
            text-transform: uppercase;
        }

        .gift-cont-slider .swiper-slide-active {
            opacity: 1;
            color: #FFF;
            font-family: Inter;
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -4.8px;
            text-align: center;
            text-transform: uppercase;
            scale: 1.3
        }
    }

    @media (max-width: 639px) {
        .gift {
            padding-top: 30px;
        }

        .gift-title {
            color: #FFF;
            font-family: Inter;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
            text-align: left;
            margin-bottom: 30px;
        }

        .gift-cont-card {
            padding: 10px;
            padding-top: 20px;
        }

        .gift-cont-card-title {
            color: #FFF;
            font-family: "Playfair Display";
            font-size: 18px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.72px;
            text-align: center;
            margin-bottom: 0;
        }

        .gift-cont-card-num_txt {
            font-size: 77.05px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -6.164px;
            text-transform: uppercase;
        }

        .gift-cont-card::after {
            background-size: 100% 100%;
        }

        .gift-cont-card-bot_lt {
            opacity: 0.8;
            font-size: 10px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.4px;
        }

        .gift-cont-card-bot_rt {
            width: 45.952px;
            height: 18.088px;
        }

        .gift-card-cont-add a {
            margin-left: 0;
        }
    }
</style>