<template>
    <div class="order-main">
        <OrderInfo 
            :reg_link="true" 
            title="Контактная информация" 
            :fields="[
                {
                    title: 'Имя',
                    type: 'text',
                    name: 'name'
                },
                {
                    title: 'Телефон',
                    type: 'number',
                    name: 'phone'
                },
                {
                    title: 'Фамилия',
                    type: 'text',
                    name: 'surname'
                },
                {
                    title: 'Email',
                    type: 'email',
                    name: 'email'
                },
            ]"
        />
        <OrderInfo 
            :detail="true" 
            title="Паспорт" 
            :fields="[
                {
                    title: 'Имя',
                    type: 'text',
                    name: 'name'
                },
                {
                    title: 'Отчество',
                    type: 'text',
                    name: 'parental'
                },
                {
                    title: 'Фамилия',
                    type: 'text',
                    name: ''
                },
                {
                    title: 'Кем выдано',
                    type: 'text',
                    name: ''
                },
                {
                    title: 'Серия паспорта',
                    type: 'text',
                    name: ''
                },
                {
                    title: 'Номер паспорта',
                    type: 'text',
                    name: ''
                },
                {
                    title: 'Дата выдачи',
                    type: 'text',
                    name: ''
                },
                {
                    title: 'Код подразделения',
                    type: 'email',
                    name: ''
                },
            ]"
        />
        <OrderDelivery 
            title="Доставка"
            :deliveryButtons="deliveryButtons"
        />
        <OrderGift 
            title="Подарочная карта" 
        />
        <OrderBonus
            title="Ваши бонусы" 
            :num=15000
            text="Вы можете расплатиться 50%-ными бонусами, но не более чем на 5000"
        />
        <OrderPayment 
            title="Способы оплаты" 
            :discount=3
        />
    </div>
</template>

<script setup>
    const deliveryButtons = [
        { src: '/images/order/sdek.png', alt: 'sdek' },
        { src: '/images/order/boxberry.png', alt: 'boxberry' },
        { src: '/images/order/dpd.png', alt: 'dpd' },
        { src: '/images/order/pochta.png', alt: 'pochta' },
        { src: '/images/order/pony.png', alt: 'pony' }
    ]
</script>

<style>
    .order-main {
        display: flex;
        flex-direction: column;
        gap: 80px;
        /* width: calc(100% - 670px - 70px); */
    }

    .order-main-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .order-main-title {
        color: #C1272D;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        white-space: nowrap;
    }

    .order-main-top a {
        opacity: 0.5;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: none;
        text-decoration-thickness: auto;
        text-underline-offset: auto;
        text-underline-position: from-font;
        text-align: right;
    }

    .order-main-top a:hover {
        opacity: 1;
    }

    .order-main-info-row {
        margin-top: 10px;
        display: flex;
        gap: 50px;
        row-gap: 20px;
        flex-wrap: wrap;
    }

    .order-main-info-row input {
        width: calc(50% - 25px);
        align-self: stretch;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
        padding-bottom: 5px;
        border-bottom: 1px solid #fff;
        transition: 0.3s;
    }

    .order-main-info-row input::placeholder {
        opacity: 0.5;
    }

    @media (max-width: 1700px) {
        .order-main {
            /* width: calc(100% - 502px + 30px); */
            gap: 50px;
        }

        .order-main-info-row input {
            width: 100%;
        }

        .order-main-top {
            margin-bottom: 20px;
        }
    }

    @media (max-width: 1199px) {
        .order-main {
            margin-top: 0;
        }

        .order-main-top {
            flex-direction: column;
            align-items: flex-start;
        }
    }

    @media (max-width: 639px) {
        .order-main-top {
            gap: 10px;
        }

        .order-main-title {
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }
    }

</style>