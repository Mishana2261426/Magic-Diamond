<template>
    <div class="main-category">
        <div class="container">
            <h2>
                Популярные категории
            </h2>
            <div class="main-category-row">
                <div class="main-category-row-item" v-for="(categoriy, index) in categories">
                    <div class="main-category-row-item-pic main-category-row-item-pic_l">
                        <img :src="categoriy.image_left" alt="">
                    </div>
                    <a
                        href="">{{ categoriy.title }}
                    </a>
                    <div class="main-category-row-item-pic main-category-row-item-pic_r">
                        <img :src="categoriy.image_right" alt="">
                    </div>
                </div>
            </div>
            <div class="main-category-l">
                <img src="/images/main-category/pic1.png" alt="" style="opacity: 0;">
            </div>
            <div class="main-category-r">
                <img src="/images/main-category/pic2.png" alt="" style="opacity: 0;">
            </div>
        </div>
    </div>
</template>

<script setup>
    const categories = [
        { title: 'Премиум', image_left: '/images/main-category/pic1.png', image_right: '/images/main-category/pic2.png'},
        { title: 'Тренды', image_left: '/images/main-category/pic1.png', image_right: '/images/main-category/pic2.png'},
        { title: 'Новинки', image_left: '/images/main-category/pic1.png', image_right: '/images/main-category/pic2.png'},
        { title: 'Летняя коллекция', image_left: '/images/main-category/pic1.png', image_right: '/images/main-category/pic2.png'},
        { title: 'Свадьба', image_left: '/images/main-category/pic1.png', image_right: '/images/main-category/pic2.png'},
        { title: 'Ограниченная коллекция', image_left: '/images/main-category/pic1.png', image_right: '/images/main-category/pic2.png'},
        { title: 'Весенняя коллекция', image_left: '/images/main-category/pic1.png', image_right: '/images/main-category/pic2.png'},
        { title: 'Хиты', image_left: '/images/main-category/pic1.png', image_right: '/images/main-category/pic2.png'},
        { title: 'Эксклюзив', image_left: '/images/main-category/pic1.png', image_right: '/images/main-category/pic2.png'},
    ];

    onMounted(() => {
    if (window.innerWidth >= 1199) return;
        const items = document.querySelectorAll('.main-category-row-item');

        function setActiveByCenter() {
            const centerY = window.innerHeight / 2;
            let closest = null;
            let closestOffset = Infinity;

            items.forEach(item => {
                const rect = item.getBoundingClientRect();
                const itemCenter = (rect.top + rect.bottom) / 2;
                const offset = Math.abs(centerY - itemCenter);

                if (offset < closestOffset) {
                    closestOffset = offset;
                    closest = item;
                }
            });

            items.forEach(item => item.classList.remove('active'));
            if (closest) closest.classList.add('active');
        }

        window.addEventListener('scroll', setActiveByCenter, { passive: true });
        setActiveByCenter();

        onBeforeUnmount(() => {
            window.removeEventListener('scroll', setActiveByCenter);
        });
    });
</script>

<style scoped>
    .main-category {
        padding: 100px 0;
        box-sizing: border-box;
        background-color: #fff;
    }

    .main-category .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .main-category h2 {
        color: #C1272D;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        margin-bottom: 30px;
        width: fit-content;
    }

    .main-category-row {
        display: flex;
        flex-direction: column;
        gap: 10px;
        text-align: center;
        width: 100%;
    }

    .main-category-row-item {
        width: 100%;
        position: relative;
    }

    .main-category-row-item-pic {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        max-width: 300px;
        height: 300px;
        opacity: 0;
        transition: 0.3s;
    }

    .main-category-row-item-pic::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #fff;
        transition: 0.3s;
        overflow: hidden;
    }

    .main-category-row-item:hover .main-category-row-item-pic::after {
        left: 100%;
    }

    .main-category-row-item:hover .main-category-row-item-pic {
        opacity: 1;
    }

    .main-category-row-item-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .main-category-row-item-pic_r {
        left: auto;
        right: 0;
        height: 400px;
    }

    .main-category-row a {
        opacity: 0.3;
        color: #1C1C1C;
        font-family: "Playfair Display";
        font-size: 80px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -6.4px;
    }

    .main-category-row a:hover {
        opacity: 1;
    }

    .main-category-l {
        width: 300px;
        height: 300px;
        position: absolute;
        top: 152px;
        left: 50px;
    }

    .main-category-l img {
        width: 100%;
        height: 100%;
        /* opacity: 0; */
        transition: 1s;
    }

    .main-category-r {
        width: 300px;
        height: 400px;
        position: absolute;
        top: 152px;
        right: 50px;
    }

    .main-category-r img {
        width: 100%;
        height: 100%;
        transition: 1s;
        /* opacity: 0; */
    }

    @media (max-width: 1700px) {
        .main-category-row-item-pic {
            max-width: 150px;
            height: 150px;
        }

        .main-category-row-item-pic_r {
            height: 200px;
        }
    }

    @media (max-width: 1199px) {
        .main-category {
            padding: 50px 0;
        }

        .main-category-row-item-pic {
            /* display: none; */
        }

        .main-category-row a {
            color: #1C1C1C;
            font-family: "Playfair Display";
            font-size: 60px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -4.8px;
            opacity: 1;
        }

        .main-category-row {
            text-align: left;
        }

        .main-category-row-item {
            /* color: red; */
            opacity: 0.3;
            transition: 0.3s;
            padding-right: 200px;
            box-sizing: border-box;
        }

        .main-category-row-item.active {
            opacity: 1;
        }

        .main-category-row-item.active .main-category-row-item-pic_r {
            opacity: 1;
        }

        .active .main-category-row-item-pic::after {
            left: 100%;
        }
    }

    @media (max-width: 639px) {
        .main-category {
            padding: 30px 0 50px;
        }

        .main-category h2 {
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }

        .main-category-row a {
            font-size: 34px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -2.72px;
        }

        .main-category-row-item-pic_r {
            right: -20px;
        }

        /* .main-category-row a {
            color: inherit;
        } */
    }
</style>