<template>
    <div class="about-first">
        <div class="container">
            <h1>
                О компании
            </h1>
            <h2 class="about-first-title">
                <div class="about-first-title_lt">
                    В FASHION
                </div>
                <div class="about-first-title_md">
                    Индустрии
                </div>
                <div class="about-first-title_rt">
                    с 2005 года
                </div>
            </h2>
            <div class="about-first-cont">
                <div class="about-first-cont-title">
                    {{ subtitle }}
                </div>
                <div class="about-first-cont-text">
                    {{ text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        subtitle: { type: String},
        text: { type: String},
    })
</script>

<style scoped>
    .about-first {
        position: relative;
        margin-top: 50px;
        margin-bottom: 75px;
    }

    .about-first h1 {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }

    .about-first-title {
        margin: 0 auto;
        color: #C1272D;
        font-family: Inter;
        font-size: 150px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -12px;
        text-transform: uppercase;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 55px;
        row-gap: 0;
        margin-bottom: 30px;
    }

    .about-first-title_lt {
        width: 100%;
    }

    .about-first-title_rt {
        color: #1C1C1C;
        font-family: "Playfair Display";
        font-size: 100px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -8px;
    }

    .about-first-cont {
        max-width: 848px;
        margin: 0 auto;
    }

    .about-first-cont-title {
        color: #C1272D;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        margin-bottom: 20px;
    }

    .about-first-cont-text {
        max-width: 485px;
        margin-left: auto;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
    }

    @media (max-width: 1700px) {
        .about-first {
            margin-bottom: 60px;
        }

        .about-first-title {
            font-size: 100px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -8px;
            text-transform: uppercase;
            justify-content: space-between;
        }

        .about-first-title_lt {
            order: 0;
            width: fit-content;
        }

        .about-first-title_rt {
            order: 1;
            font-size: 80px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -6.4px;
        }

        .about-first-title_md {
            order: 2;
            width: 100%;
            text-align: center;
        }

        .about-first-cont {
            margin: 0;
            margin-left: auto;
            max-width: 727px;
        }

        .about-first-cont-text {
            max-width: 485px;
        }
    }

    @media (max-width: 1199px) {
        .about-first {
            margin-bottom: 50px;
        }

        .about-first-title {
            font-size: 80px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -6.4px;
            text-transform: uppercase;
        }

        .about-first-title_lt {
            order: 0;
            width: fit-content;
        }

        .about-first-title_rt {
            order: 2;
            font-size: 40px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -3.2px;
            text-align: right;
            width: 100%;
        }

        .about-first-title_md {
            order: 1;
            width: 100%;
            text-align: right;
        }

        .about-first-cont-text {
            margin-left: 0;
            max-width: 100%;
        }
    }

    @media (max-width: 639px) {
        .about-first {
            margin-bottom: 40px;
            margin-top: 30px;
        }

        .about-first-title {
            font-size: 40px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -3.2px;
            text-transform: uppercase;
        }

        .about-first-title_rt {
            font-size: 30px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -2.4px;
        }

        .about-first-cont-title {
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }
    }

</style>