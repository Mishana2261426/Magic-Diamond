<template>
    <section class="card-desc">
        <div class="card-desc-top">
            <a href="">
                Гарантия качества продукции
            </a>
            <a href="">
                Доставка по всей России
            </a>
        </div>
        <div class="card-desc-block">
            <div class="card-desc-block-top">
                <button
                    v-for="(tab, index) in item.tabs"
                    :key="index"
                    :class="{ active: activeTab === tab.value }"
                    @click="activeTab = tab.value"
                >
                    {{ tab.label }}
                </button>
            </div>
            <div class="card-desc-block-cont">
                <div
                    v-show="activeTab === 'desc'"
                    class="card-desc-block-cont-item card-desc-block-cont-item_desc"
                >
                    <div class="card-desc-block-title">{{ item.desc.title }}</div>
                    <div class="card-desc-block-art">
                        Артикул: <span>{{ item.desc.art }}</span>
                    </div>
                    <div class="card-desc-block-text">
                        {{ item.desc.text }}
                    </div>
                </div>
                <div
                    v-show="activeTab === 'chars'"
                    class="card-desc-block-cont-item card-desc-block-cont-item_chars"
                >
                    <div
                        class="card-desc-block-cont-item_chars-item"
                        v-for="char in item.chars"
                        :key="char.group"
                    >
                        <div class="card-desc-block-cont-item_chars-title">
                            {{ char.group }}
                        </div>
                        <ul>
                            <li v-for="(prop, i) in char.items" :key="i">
                                {{ prop.key }}
                                <span>{{ prop.value }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    v-show="activeTab === 'reviews'"
                    class="card-desc-block-cont-item card-desc-block-cont-item_reviews"
                >
                    <div class="card-desc-block-cont-item_reviews-total">
                        <div class="card-desc-block-cont-item_reviews-total-rating">
                            <div class="card-desc-block-cont-item_reviews-total-rating-num">
                                {{ item.review_total.num }}
                            </div>
                            <div class="card-desc-block-cont-item_reviews-total-rating-cont">
                                <div class="card-desc-block-cont-item_reviews-total-rating-cont-star">
                                    <div
                                        v-for="i in 5"
                                        :key="i"
                                        :class="{ dis: i > item.review_total.rating }"
                                    ></div>
                                </div>
                                <div class="card-desc-block-cont-item_reviews-total-rating-count">
                                    {{ item.review_total.count }} отзывов
                                </div>
                            </div>
                        </div>

                        <button class="card-desc-block-cont-item_reviews-total-btn">
                            Оставить отзыв
                        </button>
                    </div>
                    <div class="card-desc-block-cont-item_reviews-row">
                        <div class="card-desc-block-cont-item_reviews-row-item" 
                            v-for="review in visibleReviews"
                            :key="review.name + review.date"
                        >
                            <div class="card-desc-block-cont-item_reviews-row-item-main">
                                <div class="card-desc-block-cont-item_reviews-row-item-rating">
                                    <div
                                        v-for="i in 5"
                                        :key="i"
                                        :class="{ dis: i > review.rating }"
                                    >
                                    </div>
                                </div>
                                <div class="card-desc-block-cont-item_reviews-row-item-text">
                                    {{ review.text }}
                                </div>
                                <div class="card-desc-block-cont-item_reviews-row-item-pics">
                                    <a v-for="pic in review.pics" :href="pic.src" class="glightbox">
                                        <img :src="pic.src" :alt="pic.alt">
                                    </a>
                                </div>
                            </div>
                            <div class="card-desc-block-cont-item_reviews-row-item-side">
                                <div class="card-desc-block-cont-item_reviews-row-item-side-name">
                                    {{ review.name }}
                                </div>
                                <div class="card-desc-block-cont-item_reviews-row-item-side-date">
                                    {{review.date}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        v-if="item.reviews.length > reviews_limit"
                        class="card-desc-block-cont-item_reviews-showmore"
                        @click="toggleReviews"
                    >
                        {{ showAll ? 'Показать меньше' : 'Показать ещё' }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    const props = defineProps({
        item: { type: Object, required: true},
        pop_items: { type: Array, required: false}
    })

    const activeTab = ref('desc')
    const reviews_limit = 5
    const showAll = ref(false)

    const visibleReviews = computed(() =>
        showAll.value ? props.item.reviews : props.item.reviews.slice(0, reviews_limit)
    )

    const toggleReviews = () => {
        showAll.value = !showAll.value
    }
</script>

<style scoped>
    .card-desc {
        /* width: calc(50% - 10px); */
        width: 100%;
        overflow: hidden;
        grid-area: desc;
    }

    .card-desc-top {
        display: flex;
        justify-content: space-between;
    }

    .card-desc-top a {
        color: #1C1C1C;
        font-family: "Playfair Display";
        font-size: 24px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.96px;
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: none;
        text-decoration-thickness: auto;
        text-underline-offset: auto;
        text-underline-position: from-font;
    }

    .card-desc-block {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .card-desc-block-top {
        display: flex;
        gap: 20px;
    }

    .card-desc-block-top button {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.8px;
    }

    .card-desc-block-top button:hover {
        color: #C1272D;
    }

    .card-desc-block-top button.active {
        color: #C1272D;
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: none;
        text-decoration-thickness: auto;
        text-underline-offset: auto;
        text-underline-position: from-font;
    }

    .card-desc-block-cont-item {
        display: flex;
        flex-direction: column;
    }

    .card-desc-block-title {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        margin-bottom: 10px;
    }

    .card-desc-block-art {
        color: #4A4A4A;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.8px;
        margin-bottom: 30px;
    }

    .card-desc-block-art span {
        font-size: 18px;
    }

    .card-desc-block-text {
        max-width: 540px;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
    }

    .card-desc-block-cont-item_chars {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    .card-desc-block-cont-item_chars-item {
        width: 100%;
    }

    .card-desc-block-cont-item_chars-title {
        align-self: stretch;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 100%;
        letter-spacing: -0.8px;
        margin-bottom: 20px;
    }

    .card-desc-block-cont-item_chars-item ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .card-desc-block-cont-item_chars-item ul li {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #DFDFDF;
    }

    .card-desc-block-cont-item_chars-item ul li {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%; /* 20px */
        letter-spacing: -0.8px;
    }

    .card-desc-block-cont-item_chars-item ul li span {
        font-weight: 500;
    }

    .card-desc-block-cont-item_reviews-total {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .card-desc-block-cont-item_reviews-total-rating {
        display: flex;
        align-items: center;
    }

    .card-desc-block-cont-item_reviews-total-rating-num {
        color: #C1272D;
        font-family: Inter;
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: 100%;
        letter-spacing: -1.6px;
        text-transform: uppercase;
        margin-right: 2px;
    }

    .card-desc-block-cont-item_reviews-total-rating-cont {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .card-desc-block-cont-item_reviews-total-rating-cont-star {
        display: flex;
        gap: 2px;
    }

    .card-desc-block-cont-item_reviews-total-rating-cont-star div {
        width: 16px;
        height: 16px;
        background-image: url(/images/card/star.png);
        background-size: 100% 100%;
    }

    .card-desc-block-cont-item_reviews-total-rating-cont-star div.dis {
        background-image: url(/images/card/star_dis.png);
    }

    .card-desc-block-cont-item_reviews-total-rating-count {
        color: #4A4A4A;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
    }

    .card-desc-block-cont-item_reviews-total-btn {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        padding: 10px 15px;
        box-sizing: border-box;
        border: 1px solid #1C1C1C;
        max-width: 200px;
        width: 100%;
    }

    .card-desc-block-cont-item_reviews-total-btn:hover {
        color: #C1272D;
        background-color: #fff;
        border-color: #fff;
    }

    .card-desc-block-cont-item_reviews-row {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 30px;
    }

    .card-desc-block-cont-item_reviews-row-item {
        padding: 10px;
        box-sizing: border-box;
        background-color: #fff;
        display: flex;
        gap: 20px;
        justify-content: space-between;
        position: relative;
    }

    .card-desc-block-cont-item_reviews-row-item-side {
        display: flex;
        flex-direction: column;
        gap: 5px;
        white-space: nowrap;
    }

    .card-desc-block-cont-item_reviews-row-item-side-name {
        color: #000;
        font-family: "Playfair Display";
        font-size: 20px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.8px;
    }

    .card-desc-block-cont-item_reviews-row-item-side-date {
        align-self: stretch;
        color: #4A4A4A;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
    }

    .card-desc-block-cont-item_reviews-row-item-rating {
        display: flex;
        align-items: center;
        gap: 2px;
        margin-bottom: 10px;
    }

    .card-desc-block-cont-item_reviews-row-item-rating div {
        width: 16px;
        height: 16px;
        background-image: url(/images/card/star.png);
        background-size: 100% 100%;
    }

    .card-desc-block-cont-item_reviews-row-item-rating div.dis {
        background-image: url(/images/card/star_dis.png);
    }

    .card-desc-block-cont-item_reviews-row-item-text {
        max-width: 540px;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
        margin-bottom: 10px;
    }

    .card-desc-block-cont-item_reviews-row-item-pics {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        height: 100%;
    }

    .card-desc-block-cont-item_reviews-row-item-pics a {
        min-width: 100px;
        max-width: 100px;
        height: 100px;
    }

    .card-desc-block-cont-item_reviews-row-item-pics a img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }

    .card-desc-block-cont-item_reviews-showmore {
        color: #FFF;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        margin: 0 auto;
        margin-top: 30px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 350px;
        background-color: #C1272D;
    }

    .card-desc-block-cont-item_reviews-showmore:hover {
        color: #C1272D;
        background-color: #fff;
    }

    @media (max-width: 1700px) {
        .card-desc {
            width: 100%;
        }
    }

    @media (max-width: 1199px) {
        .card-desc {
            margin-top: 50px;
            overflow: visible;
        }

        .card-desc-top {
            display: none;
        }

        .card-desc-block {
            margin-top: 0;
            gap: 0;
        }

        .card-desc-block-top {
            overflow-x: scroll;
            margin: 0 -20px;
            padding: 0 20px;
            white-space: nowrap;
            padding-bottom: 10px;
        }

        .card-desc-block-top::-webkit-scrollbar {
            display: none;
        }

        .card-desc-block-cont {
            /* margin-top: 50px; */
        }

        .card-desc-block-cont-item_desc {
            margin-top: 50px;
        }

        .card-desc-block-cont-item_chars {
            margin-top: 30px;
        }

        .card-desc-block-cont-item_reviews {
            margin-top: 30px;
        }

        .card-desc-block-title {
            margin-bottom: 20px;
        }

        .card-desc-block-art {
            margin-bottom: 20px;
        }

        .card-desc-block-cont-item_reviews-row-item {
            padding-top: 36px;
            overflow: hidden;
            display: block;
        }

        .card-desc-block-cont-item_reviews-row-item-side {
            position: absolute;
            top: 10px;
            right: 10px;
            flex-direction: row-reverse;
            align-items: center;
            gap: 10px;
        }

        .card-desc-block-cont-item_reviews-row-item-rating {
            position: absolute;
            top: 10px;
            left: 10px;
        }

        .card-desc-block-cont-item_reviews-row-item-pics {
            overflow-x: scroll;
            height: 100px !important;
            flex-wrap: nowrap;
        }

        .card-desc-block-cont-item_reviews-row-item-pics::-webkit-scrollbar {
            display: none;
        }
    }

    @media (max-width: 639px) {
        .card-desc-block-cont-item_reviews-row-item {
            padding-top: 65px;
            width: 100%;
        }

        .card-desc-block-cont-item_reviews-row-item-side {
            flex-direction: column-reverse;
            gap: 5px;
            left: 10px;
            right: auto;
        }

        .card-desc-block-cont-item_reviews-row-item-rating {
            right: 10px;
            left: auto;
        }

        .card-desc-block-cont-item_reviews-row-item-pics {
            /* max-width: 100px; */
        }

        .card-desc-block-cont-item_reviews-row-item-text {
            width: auto;
        }
    }
</style>