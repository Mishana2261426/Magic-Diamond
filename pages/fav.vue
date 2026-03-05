<template>
    <section class="fav">
        <div class="container">
            <h1>
                Избранное
            </h1>
            <div class="fav-row">
                <ProductCard
                    v-for="(item, i) in catalog_items"
                    :key="i"
                    :item="item"
                />
            </div>
            <CatalogPag :pags="pags"/>
        </div>
    </section>
</template>

<script setup>
    const catalog_items = ref([
        { title: 'Ожерелье из серебра с камнем сапфир', image: '/images/main-popular/pic.png', price: 50000, oldPrice: 100000, discount: '50%', isNew: true, isHit: true, rating: 5.0, reviews: 27, fav: true },
        { title: 'Ожерелье из золота с изумрудом', image: '/images/main-popular/pic.png', price: 47000, isNew: true, rating: 4.9, reviews: 10 },
        { title: 'Серьги с фианитами', image: '/images/main-popular/pic.png', price: 31000, isHit: true, rating: 5.0, reviews: 45 },
        { title: 'Кольцо с сапфиром', image: '/images/main-popular/pic.png', rating: 5.0, price: 38000 },
        { title: 'Ожерелье из серебра с камнем сапфир', image: '/images/main-popular/pic.png', price: 50000, oldPrice: 100000, discount: '50%', isNew: true, isHit: true, rating: 5.0, reviews: 27 },
        { title: 'Ожерелье из золота с изумрудом', image: '/images/main-popular/pic.png', price: 47000, isNew: true, rating: 4.9, reviews: 10 },
        { title: 'Серьги с фианитами', image: '/images/main-popular/pic.png', price: 31000, isHit: true, rating: 5.0, reviews: 45 },
        { title: 'Кольцо с сапфиром', image: '/images/main-popular/pic.png', rating: 5.0, price: 38000 },
        { title: 'Ожерелье из серебра с камнем сапфир', image: '/images/main-popular/pic.png', price: 50000, oldPrice: 100000, discount: '50%', isNew: true, isHit: true, rating: 5.0, reviews: 27 },
        { title: 'Ожерелье из золота с изумрудом', image: '/images/main-popular/pic.png', price: 47000, isNew: true, rating: 4.9, reviews: 10 },
        { title: 'Серьги с фианитами', image: '/images/main-popular/pic.png', price: 31000, isHit: true, rating: 5.0, reviews: 45 },
        { title: 'Кольцо с сапфиром', image: '/images/main-popular/pic.png', rating: 5.0, price: 38000 },
        { title: 'Ожерелье из серебра с камнем сапфир', image: '/images/main-popular/pic.png', price: 50000, oldPrice: 100000, discount: '50%', isNew: true, isHit: true, rating: 5.0, reviews: 27, fav: true },
        { title: 'Ожерелье из золота с изумрудом', image: '/images/main-popular/pic.png', price: 47000, isNew: true, rating: 4.9, reviews: 10 },
        { title: 'Серьги с фианитами', image: '/images/main-popular/pic.png', price: 31000, isHit: true, rating: 5.0, reviews: 45 },
    ]);

    const pags = ref([
        { num: '1', active: true},
        { num: '2', active: false},
        { num: '3', active: false},
        { num: '4', active: false},
        { num: '...', active: false},
        { num: '10', active: false},
    ]);
</script>

<style scoped>
    .fav {
        margin-top: 50px;
        margin-bottom: 100px;
    }

    .fav h1 {
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

    .fav-row {
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 20px;
        row-gap: 40px;
        margin-bottom: 50px;
    }

    @media (max-width: 1700px) {
        .fav {
            margin-bottom: 120px;
        }
    }

    @media (max-width: 1199px) {
        .fav {
            margin-bottom: 100px;
        }

        .fav-row {
            margin-top: 20px;
            gap: 20px;
            row-gap: 20px;
        }
    }

    @media (max-width: 639px) {
        .fav {
            margin-top: 30px;
            margin-bottom: 80px;
        }

        .fav h1 {
            text-align: left;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }

        .fav-row {
            margin: 0 -20px;
            margin-top: 30px;
            gap: 10px;
        }
    }
</style>