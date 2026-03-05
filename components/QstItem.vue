<template>
    <div
        v-for="(question, i) in questions"
        :key="i"
        class="main-qst-cont-item"
        @click="toggle(i)"
        :class="{ 'main-qst-cont-item_active': activeIndex === i }"
    >
        <div class="main-qst-cont-item-top">
            <div class="main-qst-cont-item-top-text">
                {{ question.qst }}
            </div>
        </div>

        <!-- Контейнер с высотой под контент -->
        <div 
            ref="answers" 
            class="main-qst-cont-item-text-wrapper"
        >
            <div class="main-qst-cont-item-text">
                <p v-html="question.text"></p>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        questions: Object
    })

    const activeIndex = ref(null)
    const answers = ref([])

    function toggle(i) {
        const el = answers.value[i]

        if (!el) return

        if (activeIndex.value === i) {
            const currentHeight = el.scrollHeight
            el.style.height = currentHeight + 'px'
            requestAnimationFrame(() => {
                el.style.height = '0px'
            })
            activeIndex.value = null
        } else {
            if (activeIndex.value !== null && answers.value[activeIndex.value]) {
                answers.value[activeIndex.value].style.height = '0px'
            }

            activeIndex.value = i

            nextTick(() => {
                const newEl = answers.value[i]
                const fullHeight = newEl.scrollHeight
                newEl.style.height = fullHeight + 'px'
            })
        }
    }
</script>

<style scoped>
    .main-qst-cont-item {
        border-bottom: 1px solid rgba(193, 39, 45, 0.1);
        padding-top: 9px;
        padding-bottom: 15px;
        cursor: pointer;
        transition: 0.3s;
    }

    .main-qst-cont-item-top {
        color: #1C1C1C;
        font-family: "Playfair Display";
        font-size: 50px;
        font-style: italic;
        line-height: 100%;
        letter-spacing: -4px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: color 0.3s;
    }

    .main-qst-cont-item-top::after {
        content: '';
        min-width: 20px;
        max-width: 20px;
        height: 10px;
        background-image: url(/images/main-qst/arrow.png);
        background-size: 100% 100%;
        transition: transform 0.3s;
    }

    .main-qst-cont-item_active .main-qst-cont-item-top::after {
        transform: rotate(180deg);
    }

    .main-qst-cont-item-top:hover {
        color: #C1272D;
    }

    .main-qst-cont-item-text-wrapper {
        height: 0;
        overflow: hidden;
        transition: height 0.4s ease;
    }

    .main-qst-cont-item-text {
        max-width: 723px;
        color: rgba(42, 42, 42, 0.8);
        font-family: Inter;
        font-size: 24px;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.96px;
        margin-top: 20px;
    }

    .qsts-cont-item .main-qst-cont-item {
        padding: 0;
        border: 0;
    }

    .qsts-cont-item .main-qst-cont-item-top {
        font-size: 40px;
        font-style: italic;
        font-weight: 400;
        line-height: 120%;
        letter-spacing: -1.6px;
        gap: 50px;
        width: fit-content;
    }

    .qsts-cont-item .main-qst-cont-item-text {
        /* color: #000; */
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.72px;
    }

    .qsts-cont-item .main-qst-cont-item-top-text {
        font-size: 40px;
        font-style: italic;
        font-weight: 400;
        line-height: 120%;
        letter-spacing: -1.6px;
    }

    @media (max-width: 1700px) {
        .qsts-cont-item .main-qst-cont-item-top {
            justify-content: space-between;
            width: 100%;
        }

        .qsts-cont-item .main-qst-cont-item-text {
            max-width: 455px;
        }
    }

    @media (max-width: 1199px) {
        .main-qst-cont-item {
            padding: 15px 20px;
        }

        .main-qst-cont-item-top {
            font-size: 32px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%; /* 32px */
            letter-spacing: -2.56px;
        }

        .main-qst-cont-item_active {
            background-color: #fff;
        }

        .qsts-side .main-qst-cont-item-text {
            max-width: 455px;
            color: #000;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 120%;
            letter-spacing: -0.64px;
        }

        .qsts-side .main-qst-cont-item-top {
            gap: 20px;
        }
    }

    @media (max-width: 639px) {
        .main-qst-cont-item {
            padding: 15px 20px;
        }

        .main-qst-cont-item-top {
            font-size: 24px;
            font-style: italic;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -1.92px;
        }

        .main-qst-cont-item-text {
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 120%;
            letter-spacing: -0.64px;
        }
    }
</style>