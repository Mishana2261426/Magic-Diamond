<template>
    <section class="cart">
        <div class="container">
            <div class="cart-title">
                <h1>
                    Корзина
                </h1>
                <span>({{ cart_items.length }})</span>
            </div>
            <div class="cart-row">
                <CartMain :cart_items="cart_items"/>
                <CartSide :cart_info="cart_info"/>
            </div>
        </div>
    </section>
</template>

<script setup>
    const cart_items = ref([
        { title: 'Ожерелье из серебра с камнем сапфир', image: '/images/main-popular/pic.png', price: 50000, oldPrice: 100000, piecePrice: 50000, discount: '50%', isNew: true, isHit: true, rating: 5.0, reviews: 27, fav: true, counter: 2, size: 16, type: 1},
        { title: 'Ожерелье из серебра с камнем сапфир', image: '/images/main-popular/pic.png', price: 50000, oldPrice: 100000, piecePrice: 50000, discount: '50%', isNew: true, isHit: true, rating: 5.0, reviews: 27, fav: true, counter: 1, size: 16, type: 1},
        { title: 'Ожерелье из серебра с камнем сапфир', image: '/images/main-popular/pic.png', price: 50000, oldPrice: 100000, piecePrice: 50000, discount: '50%', isNew: true, isHit: true, rating: 5.0, reviews: 27, fav: false, counter: 2, size: 16, type: 1},
        { title: 'Ожерелье из серебра с камнем сапфир', image: '/images/main-popular/pic.png', price: 50000, oldPrice: 100000, piecePrice: 50000, discount: '50%', isNew: true, isHit: true, rating: 5.0, reviews: 27, fav: true, counter: 2, size: 16, type: 1},
    ]);

    const cart_info = ref({
        totalPrice: 200000,
        prices: [
            {
                title: `Продукты (${cart_items.value.length} шт.)`,
                num: 400000
            },
            {
                title: 'Скидка',
                num: 200000
            }
        ]
    })
</script>

<style scoped>
    .cart {
        margin-top: 50px;
        margin-bottom: 150px;
    }

    .cart-title {
        display: flex;
        align-items: flex-end;
        gap: 20px;
    }

    .cart-title h1 {
        color: #C1272D;
        font-family: Inter;
        font-size: 70px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -2.8px;
        display: flex;
    }

    .cart-title span {
        color: #C1272D;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        margin-bottom: 10px;
    }

    .cart-row {
        display: flex;
        gap: 20px;
        margin-top: 50px;
    }

    @media (max-width: 1700px) {

    }

    @media (max-width: 1199px) {
        .cart {
            margin-top: 30px;
            margin-bottom: 80px;
        }

        .cart-title {
            gap: 5px;
        }

        .cart-title h1 {
            font-size: 32px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -1.28px;
            text-transform: uppercase;
        }

        .cart-title span {
            font-size: 20px;
            margin-bottom: 3px;
        }

        .cart-row {
            margin-top: 30px;
            flex-direction: column;
            gap: 50px;
        }
    }

    @media (max-width: 639px) {
        .cart-title {
            gap: 5px;
        }

        .cart-title h1 {
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }

        .cart-title span {
            font-size: 20px;
            margin-bottom: 3px;
        }

        .cart-row {
            margin-top: 20px;
            gap: 30px;
        }
    }
</style>