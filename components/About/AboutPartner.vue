<template>
    <div class="about-partner">
        <h2 class="about-partner-title">
            {{ title }}
        </h2>
        <div class="about-partner-row">
            <div class="about-partner-item" v-for="partner in partners">
                <div class="about-partner-item-wrap">
                    <div class="about-partner-item-country">
                        {{ partner.country }}
                    </div>
                    <div class="about-partner-item-cont">
                        <div class="about-partner-item-title">
                            {{ partner.title }}
                        </div>
                        <div class="about-partner-item-text">
                            {{ partner.text }}
                        </div>
                    </div>
                    <div class="about-partner-item-pic">
                        <img :src="partner.pic" alt="">
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        partners: { type: Object},
        title: { type: String},
    });

    onMounted(() => {
        const items = document.querySelectorAll('.about-partner-item')

        if (window.innerWidth > 640) return

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                items.forEach(i => i.classList.remove('active'))
                entry.target.classList.add('active')
            }
            })
        }, {
            threshold: 1
        })

        items.forEach(item => observer.observe(item))

        onBeforeUnmount(() => observer.disconnect())
    })
</script>

<style scoped>
    .about-partner {
        padding-bottom: 54px;
        margin-bottom: 150px;
    }

    .about-partner-title {
        text-align: center;
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

    .about-partner-row {
        display: flex;
        flex-direction: column;
    }

    .about-partner-item {
        border-bottom: 1px solid rgba(193, 39, 45, 0.10);
        padding: 15px 50px;
        box-sizing: border-box;
        width: 100%;
        /* overflow: hidden; */
        transition: 0.3s;
    }

    .about-partner-item:hover {
        background-color: #fff;
        /* overflow: visible; */
    }

    .about-partner-item-wrap {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        max-width: 1920px;
        margin: 0 auto;
    }

    .about-partner-item-country {
        color: #1C1C1C;
        font-family: "Playfair Display";
        font-size: 24px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.96px;
        padding: 5px 10px;
        box-sizing: border-box;
        background-color: #fff;
        display: flex;
        height: fit-content;
        position: absolute;
        left: 0;
        top: 0;
    }

    .about-partner-item-cont {
        max-width: 600px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .about-partner-item-title {
        color: #1C1C1C;
        font-family: "Playfair Display";
        font-size: 36px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -2.88px;
        transition: 0.3s;
    }

    .about-partner-item:hover .about-partner-item-title {
        color: #C1272D;
    }

    .about-partner-item-text {
        color: rgba(42, 42, 42, 0.80);
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
    }

    .about-partner-item-pic {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 475px;
        height: 273px;
        margin: auto;
        opacity: 0.03;
        transition: 0.3s;
    }

    .about-partner-item:hover .about-partner-item-pic {
        opacity: 1;
    }

    .about-partner-item-pic img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 1700px) {
        .about-partner {
            padding-bottom: 0;
            margin-bottom: 122px;
        }

        .about-partner-item-wrap {
            justify-content: flex-start;
        }

        .about-partner-item-cont {
            margin-left: 188px;
            max-width: 559px;
        }

        .about-partner-item-pic {
            min-width: 250px;
            max-width: 250px;
            height: 143.684px;
        }
    }

    @media (max-width: 1199px) {
        .about-partner-title {
            margin-bottom: 20px;
        }

        .about-partner {
            margin-bottom: 0;
        }

        .about-partner-item {
            padding: 15px 20px;
        }

        .about-partner-item-cont {
            margin-left: 0;
            max-width: 100%;
            transition: 0.3s;
        }

        .about-partner-item:hover .about-partner-item-cont {
            /* max-width: 310px; */
        }

        .about-partner-item-country {
            right: 0;
            top: 0;
            left: auto;
        }

        .about-partner-item-pic {
            opacity: 0;
            position: unset;
            max-width: 0;
            min-width: 0;
        }

        .about-partner-item:hover .about-partner-item-pic {
            min-width: 250px;
            max-width: 250px;
        }
    }

    @media (max-width: 639px) {
        .about-partner-title {
            margin-bottom: 20px;
            text-align: left;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
            padding-left: 20px;
        }

        .about-partner-item {
            padding: 20px;
        }

        .about-partner-item-wrap {
            flex-direction: column;
            gap: 0;
        }

        .about-partner-item.active .about-partner-item-wrap {
            gap: 30px;
        }

        .about-partner-item-country {
            right: auto;
            left: 0;
            top: 36px;
        }

        .about-partner-item-title {
            margin-bottom: 44px;
        }

        .about-partner-item-pic {
            max-width: 25px;
            min-width: 250px;
            height: 0;
        }

        .about-partner-item.active {
            background-color: #fff;
        }

        .about-partner-item.active .about-partner-item-pic {
            height: auto;
            opacity: 1;
        }

        .about-partner-item.active .about-partner-item-title {
            color: #C1272D;
        }
    }
</style>