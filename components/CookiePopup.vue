<template>
    <Teleport to="body">
        <div class="cookie" @click.self="popup.close()">
            <div class="cookie-cont">
                Мы используем файлы cookie на нашем сайте
                <button @click="popup.close()">
                    Принять
                </button>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
    const popup = usePopup()
</script>

<style scoped>
    .cookie {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 10;
        background: rgba(0, 0, 0, 0.20);
        backdrop-filter: blur(7.5px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cookie-cont {
        padding: 30px;
        background-color: #fff;
        box-sizing: border-box;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.8px;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .cookie-cont button {
        color: #FFF;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        background-color: #C1272D;
        height: 50px;
    }

    .cookie-cont button:hover {
        background-color: #fff;
        color: #C1272D;
    }
</style>