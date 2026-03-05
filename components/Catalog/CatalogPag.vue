<template>
    <div class="catalog-pag">
        <a href="" class="catalog-pag-arrow catalog-pag-arrow_prev"></a>
        <div class="catalog-pag-row">
            <a href="" v-for="(pag, i) in pags" :class="{ active: pag.active }">
                {{ pag.num }}
            </a>
        </div>
        <a href="" class="catalog-pag-arrow catalog-pag-arrow_next"></a>
    </div>
</template>

<script setup>
    const props = defineProps({
        pags: { type: String}
    })
</script>

<style scoped>
    .catalog-pag {
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .catalog-pag-arrow {
        width: 25px;
        height: 25px;
        background-image: url(/images/catalog/pag_arrow.png);
        background-size: 8px 16px;
        background-position: center center;
        background-repeat: no-repeat;
        transition: 0.3s;
    }

    .catalog-pag-arrow:hover {
        background-image: url(/images/catalog/pag_arrow_active.png);
    }

    .catalog-pag-arrow_next {
        transform: rotate(180deg);
    }

    .catalog-pag-row {
        display: flex;
    }

    .catalog-pag-row a {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.2px;
        text-align: center;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .catalog-pag-row a:hover {
        color: #C1272D;
    }

    .catalog-pag-row a.active {
        background-color: #C1272D;
        color: #fff;
    }

    @media (max-width: 639px) {
        .catalog-pag-row a {
            width: 30px;
            height: 30px;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.8px;
            text-align: center;
        }
    }
</style>