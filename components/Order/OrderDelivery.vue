<template>
    <div class="order-main-delivery">
        <div class="order-main-top">
            <div class="order-main-title">
                {{title}}
            </div>
            <div class="order-select" @click="toggle">
                <div class="order-select-current">{{ current }}</div>

                <div v-if="open" class="order-select-dropdown">
                    <div 
                        class="order-select-option" 
                        :class="{ active: current === 'Пункт выдачи' }"
                        @click.stop="select('Пункт выдачи')"
                    >
                        Пункт выдачи
                    </div>
                    <div 
                        class="order-select-option" 
                        :class="{ active: current === 'Курьер' }"
                        @click.stop="select('Курьер')"
                    >
                        Курьер
                    </div>
                </div>
            </div>
        </div>
        <div class="order-main-delivery-row">
            <button
                v-for="(btn, index) in deliveryButtons"
                :key="index"
                :class="{ active: activeIndex === index }"
                @click="activeIndex = index"
            >
                <img :src="btn.src" :alt="btn.alt" />
            </button>
        </div>
        <div class="order-main-delivery-cont">
            <div 
                v-if="current === 'Пункт выдачи'" 
                class="order-main-delivery-cont-map"
            >
                <iframe 
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A266ed2184b03d6c9d089770801d978da90dd72e9feb3993b5a770b3093aafc09&amp;source=constructor&scroll=false"
                    frameborder="0"
                ></iframe>
            </div>

            <div 
                v-else 
                class="order-main-delivery-cont-adr"
            >
                <div class="order-main-info-row">
                    <input type="text" placeholder="Город" name="city">
                    <input type="text" placeholder="Адрес" name="adres">
                    <textarea placeholder="Комментарий для курьера" name="comment"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: {type: String, required: false},
        deliveryButtons: {type: Object, required: true}
    })

    const open = ref(false)
    const current = ref('Пункт выдачи')

    function toggle() {
        open.value = !open.value
    }

    function select(value) {
        current.value = value
        open.value = false
    }

    onMounted(() => {
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.order-select')) open.value = false
        })
    })

    const activeIndex = ref(0) // по умолчанию активна первая кнопка
</script>

<style scoped>
    .order-main-delivery {
        position: relative;
    }

    .order-main-delivery-row {
        display: flex;
        overflow-x: scroll;
        gap: 14px;
        flex-wrap: wrap;
    }

    .order-main-delivery-row::-webkit-scrollbar {
        display: none;
    }

    .order-main-delivery-row button {
        gap: 32px;
        max-width: 200px;
        min-width: 200px;
        height: 50px;
        display: flex;
        /* padding: 5px 30px; */
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #FFF;
    }

    .order-main-delivery-row button:hover {
        border-color: #C1272D;
    }

    .order-main-delivery-row button.active {
        background-color: #fff;
    }

    .order-main-delivery-row button.active:hover {
        border-color: #fff;
    }

    .order-main-delivery-row button img {
        width: 100%;
        height: 100%;
    }

    .order-main-delivery-cont {
        margin-top: 20px;
    }

    .order-main-delivery-cont-map {
        width: 100%;
        height: 504px;
    }

    .order-main-delivery-cont-map iframe {
        width: 100%;
        height: 100%;
    }

    .order-select {
        position: relative;
        cursor: pointer;
        max-width: 173px;
        width: 100%;
    }

    .order-select-current {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 25px;
        border-bottom: 1px solid #FFF;
    }

    .order-select-current::after {
        content: '';
        width: 5px;
        height: 10px;
        display: flex;
        background-image: url(/images/main-popular/arrow.png);
        background-size: 100% 100%;
        transform: rotate(-90deg);
    }

    .order-select-dropdown {
        position: absolute;
        top: calc(100% + 0px);
        left: 0;
        right: 0;
        background: #fff;
        border: 1px solid #E5E5E5;
        box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        z-index: 10;
    }

    .order-select-option {
        padding: 5px 10px;
        box-sizing: border-box;
        display: flex;
        /* justify-content: center; */
        align-self: start;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
        transition: 0.3s;
    }

    .order-select-option:hover {
        background: #f5f5f5;
    }

    .order-select-option.active {
        background: #C1272D;
        color: #fff;
    }

    .order-main-delivery-cont-map {
        position: relative;
        width: 100%;
        height: 500px; /* своя высота */
        overflow: hidden;
    }

    .order-main-delivery-cont-map::after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, .35); /* степень тонировки */
        pointer-events: none;
    }

    .order-main-delivery-cont-map iframe {
        width: 100%;
        height: 100%;
        border: 0;
        filter: grayscale(1) brightness(0.7);
    }

    .order-main-info-row textarea {
        width: 100% !important;
        min-width: 100%;
        max-width: 100%;
        min-height: 200px;
        border: 0;
        outline: 0;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
        padding: 10px;
        box-sizing: border-box;
    }

    @media (max-width: 1700px) {
        .order-main-delivery-cont-map {
            height: 278px;
        }
    }

    @media (max-width: 1199px) {
        .order-select {
            position: absolute;
            top: 0;
            right: 0;
        }

        .order-main-delivery-row {
            flex-wrap: nowrap;
            margin: 0 -20px;
            padding: 0 20px;
            gap: 20px;
        }

        .order-main-delivery-row button {
            max-width: 180px;
            min-width: 180px;
        }
    }

    @media (max-width: 1199px) {
        .order-main-delivery-cont-map {
            height: 266px;
            margin: 0 -20px;
            width: calc(100% + 40px);
        }
    }

</style>