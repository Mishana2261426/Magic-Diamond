<template>
    <div class="account-cont-item-top">
        {{ title }}
        <div class="account-cont-item-top-add">
            <div
                class="account-cont-item-top-add-row"
                v-show="showPanel"
            >
                <button class="account-cont-item-top-add-save">
                    Сохранить
                </button>
                <button class="account-cont-item-top-add-cancel">
                    Отменить
                </button>
            </div>

            <button
                class="account-cont-item-top-add-setting"
                @click="showPanel = !showPanel"
            ></button>
        </div>
    </div>
    <div class="account-cont-item-cont" :class="{ 'account-cont-item-cont_dis': !showPanel }">
        <div class="account-cont-item-info">
            <div class="account-cont-item-info-title">
                Личная информация
            </div>
            <div class="account-cont-item-info-row">
                <input type="text" placeholder="Имя" :value="item.name">
                <input type="text" placeholder="Отчество" :value="item.second_name">
                <input type="text" placeholder="Фамилия" :value="item.surname">
                <div class="account-cont-item-info-sex">
                    <label>
                        <input type="radio" name="sex" value="male" v-model="sex">
                        <span></span>
                        Муж
                    </label>
                    <label>
                        <input type="radio" name="sex" value="female" v-model="sex">
                        <span></span>
                        Жен
                    </label>
                </div>
            </div>
        </div>
        <div class="account-cont-item-info_sub">
            <div class="account-cont-item-info_sub-item">
                <div class="account-cont-item-info-title">
                    Дата рождения
                </div>
                <input type="date" placeholder="" :value="item.date">
            </div>
            <div class="account-cont-item-info_sub-item">
                <div class="account-cont-item-info-title">
                    Город
                </div>
                <input type="text" placeholder="" :value="item.city">
            </div>
        </div>
        <div class="account-cont-item-info">
            <div class="account-cont-item-info-title">
                Контакты
            </div>
            <div class="account-cont-item-info-row">
                <input type="text" placeholder="Телефон" :value="item.contact_tel">
                <input type="text" placeholder="E-mail" :value="item.contact_email">
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
        },
        item: {
            type: Object
        }
    })

    const sex = ref(props.item.sex)

    watch(() => props.item.sex, (val) => {
        sex.value = val
    })

    const showPanel = ref(false)
</script>

<style scoped>
    .account-cont-item-top-add {
        display: flex;
        gap: 20px;
        align-items: center;
        height: 30px;
    }

    .account-cont-item-top-add-row {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    .account-cont-item-top-add-save, .account-cont-item-top-add-cancel {
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        width: 150px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .account-cont-item-top-add-save {
        background-color: #C1272D;
        color: #fff;
    }

    .account-cont-item-top-add-cancel {
        background-color: #fff;
        color: #C1272D;
        border: 1px solid #E5E5E5;
        box-sizing: border-box;
    }

    .account-cont-item-top-add-setting {
        display: flex;
        min-width: 28px;
        max-width: 28px;
        height: 28px;
        background-image: url(/images/account/setting.png);
        background-size: 100% 100%;
    }

    .account-cont-item-top-add-setting:hover {
        background-image: url(/images/account/setting_active.png);
    }

    .account-cont-item-info-title {
        color: #C1272D;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
        letter-spacing: -0.96px;
        margin-bottom: 20px;
    }

    .account-cont-item-info-row {
        display: flex;
        gap: 40px;
        row-gap: 20px;
        flex-wrap: wrap;
    }

    .account-cont-item-info-row input {
        width: calc(50% - 20px);
        align-self: stretch;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
        padding-bottom: 5px;
        border-bottom: 1px solid #E5E5E5;
        box-sizing: border-box;
        transition: 0.3s;
    }

    .account-cont-item-cont_dis .account-cont-item-info-row input {
        opacity: 0.5;
    }

    .account-cont-item-info-sex {
        display: flex;
        gap: 17px;
        align-items: center;
    }

    .account-cont-item-info-sex label {
        display: flex;
        gap: 10px;
        align-items: center;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.56px;
        transition: 0.3s;
    }

    .account-cont-item-cont_dis .account-cont-item-info-sex label {
        opacity: 0.8;
    }

    .account-cont-item-info-sex label span {
        display: flex;
        max-width: 20px;
        min-width: 20px;
        height: 20px;
        background-color: #fff;
        border: 1px solid #E5E5E5;
        box-sizing: border-box;
        position: relative;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .account-cont-item-info-sex label input {
        display: none;
    }

    .account-cont-item-info-sex label span::after {
        content: '';
        width: 14.5px;
        height: 13px;
        background-image: url(/images/cart/gal.png);
        background-size: 100% 100%;
        opacity: 0;
        transition: 0.3s;
    }

    .account-cont-item-info-sex label input:checked ~ span::after {
        opacity: 1;
    }

    .account-cont-item-cont {
        display: flex;
        flex-direction: column;
        gap: 50px;
        position: relative;
    }

    .account-cont-item-cont_dis::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        /* background-color: #1C1C1C; */
        /* opacity: 0.2; */
    }

    .account-cont-item-info_sub {
        gap: 40px;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }

    .account-cont-item-info_sub-item {
        width: calc(50% - 20px);
    }

    .account-cont-item-info_sub input {
        width: 100%;
        transition: 0.3s;
        align-self: stretch;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
        padding-bottom: 5px;
        border-bottom: 1px solid #E5E5E5;
        box-sizing: border-box;
    }

    .account-cont-item-cont_dis .account-cont-item-info_sub input {
        opacity: 0.5;
    }

    @media (max-width: 1700px) {

    }

    @media (max-width: 1199px) {
        .account-cont-item-info-row input {
            width: 100%;
        }

        .account-cont-item-info_sub-item {
            width: 100%;
        }
    }

    @media (max-width: 639px) {
        .account-cont-item-cont {
            margin-bottom: 60px;
            gap: 30px;
        }

        .account-cont-item-top-add-row {
            position: absolute;
            bottom: 20px;
            left: 20px;
            right: 20px;
        }
    }
</style>