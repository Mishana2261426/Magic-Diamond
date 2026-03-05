<template>
    <div class="cart-main-item-counter">
        <div class="cart-main-item-counter-less" @click="decrease">-</div>
        <div class="cart-main-item-counter-num">{{ count }}</div>
        <div class="cart-main-item-counter-more" @click="increase">+</div>
    </div>
</template>

<script setup>
    const props = defineProps({
        modelValue: { type: Number, default: 1 },
    })

    const emit = defineEmits(['update:modelValue'])
    const count = ref(props.modelValue)

    watch(
        () => props.modelValue,
        (val) => (count.value = val)
    )

    function increase() {
        count.value++
        emit('update:modelValue', count.value)
    }

    function decrease() {
        if (count.value > 1) {
            count.value--
            emit('update:modelValue', count.value)
        }
    }
</script>

<style scoped>
    .cart-main-item-counter {
        display: flex;
        gap: 20px;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 100%;
        letter-spacing: -0.72px;
        cursor: pointer;
        height: fit-content;
        justify-content: center;
        margin-left: auto;
    }

    .cart-main-item-counter-num {
        width: 10px;
    }

    .cart-main_order .cart-main-item-counter-less, .cart-main_order  .cart-main-item-counter-more {
        display: none;
    }

    .cart-main-item-counter-less:hover, .cart-main-item-counter-more:hover {
        color: #C1272D;
    }

    .cart-main_order .cart-main-item-counter-num::after {
        content: 'шт';
    }
</style>
