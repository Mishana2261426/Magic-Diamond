<template>
    <section class="order">
        <div class="container">
            <h1>
                Оформление заказа
            </h1>
            <div class="order-row">
                <OrderMain />
                <CartSide :cart_info="cart_info" :cart_items="cart_items" :order="true"/>
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
            },
            {
                title: 'Подарочная карта',
                num: 50000
            },
            {
                title: 'Доставка',
                num: 'Бесплатно'
            },
        ]
    })
</script>

<style scoped>
    .order {
        margin-top: 50px;
        margin-bottom: 100px;
    }

    .order h1 {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 70px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -2.8px;
    }

    .order-row {
        margin-top: 50px;
        display: flex;
        gap: 70px;
    }

    @media (max-width: 1700px) {
        .order {
            margin-top: 30px;
            margin-bottom: 80px;
        }

        .order-row {
            gap: 20px;
        }
    }

    @media (max-width: 1199px) {
        .order-row {
            flex-direction: column;
            margin-top: 12px;
            gap: 50px;
        }

        .order h1 {
            font-size: 40px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -1.6px;
            text-transform: uppercase;
        }
    }

    @media (max-width: 639px) {
        .order h1 {
            font-family: Inter;
            font-size: 32px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -1.28px;
            text-transform: uppercase;
        }

        .order-row {
            gap: 30px;
        }
    }
</style>