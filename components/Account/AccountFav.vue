<template>
    <div class="account-cont-item-top">
        {{ title }}
    </div>
    <div class="account-cont-item-row">
        <ProductCard
            v-for="(item, i) in items"
            :key="i"
            :item="item"
        />
    </div>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
        },
        items: {
            type: Object
        },
    })
</script>

<style scoped>
    .account-cont-item-row {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
</style>