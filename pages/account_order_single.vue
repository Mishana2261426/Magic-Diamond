<template>
    <section class="account_order">
        <div class="container">
            <div class="account_order-title">
                <h1>
                    Заказ 2003
                </h1>
                <span>({{ cart_items.length }})</span>
            </div>
            <div class="account_order-row">
                <CartMain :cart_items="cart_items" :order="true"/>
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
    .account_order {
        margin-top: 50px;
        margin-bottom: 150px;
    }

    .account_order-title {
        display: flex;
        align-items: flex-end;
        gap: 20px;
    }

    .account_order-title h1 {
        color: #C1272D;
        font-family: Inter;
        font-size: 70px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -2.8px;
        display: flex;
    }

    .account_order-title span {
        color: #C1272D;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        margin-bottom: 10px;
    }

    .account_order-row {
        display: flex;
        gap: 20px;
        margin-top: 50px;
    }

    @media (max-width: 1700px) {

    }

    @media (max-width: 1199px) {
        .account_order {
            margin-top: 30px;
            margin-bottom: 80px;
        }

        .account_order-title {
            gap: 5px;
        }

        .account_order-title h1 {
            font-size: 32px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -1.28px;
            text-transform: uppercase;
        }

        .account_order-title span {
            font-size: 20px;
            margin-bottom: 3px;
        }

        .account_order-row {
            margin-top: 30px;
            flex-direction: column;
            gap: 50px;
        }
    }

    @media (max-width: 639px) {
        .account_order-title {
            gap: 5px;
        }

        .account_order-title h1 {
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }

        .account_order-title span {
            font-size: 20px;
            margin-bottom: 3px;
        }

        .account_order-row {
            margin-top: 20px;
            gap: 30px;
        }
    }
</style>