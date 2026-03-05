<template>
    <Teleport to="body">
        <div class="reg-pop" @click.self="popup.close()">
            <div class="reg-pop-cont">
                <button class="reg-pop-close" @click="popup.close()"></button>
                <div v-if="popup.step.value === 1" :key="'step1'">
                    <div class="reg-pop-cont-title">
                        Вход в личный кабинет
                    </div>
                    <form class="reg-pop-cont-form">
                        <input type="tel" v-model="phone" placeholder="Телефон">
                        <div class="input-pass">
                            <input :type="passVisible ? 'text' : 'password'" placeholder="Пароль">
                            <button
                                type="button"
                                class="pass-toggle"
                                :class="{ active: passVisible }"
                                @click="passVisible = !passVisible"
                            ></button>
                        </div>
                        <div class="reg-pop-cont-form-add">
                            <button type="button" @click="GoToReg">
                                Регистрация
                            </button>
                            <button>
                                Забыли пароль?
                            </button>
                        </div>
                        <button class="btn">
                            Продолжить
                        </button>
                    </form>
                </div>
                <div v-if="popup.step.value === 2" :key="'step2'">
                    <div class="reg-pop-cont-title">
                        Регистрация
                    </div>
                    <form class="reg-pop-cont-form">
                        <input type="text" placeholder="Имя">
                        <input type="text" placeholder="Дата рождения">
                        <input type="tel" v-model="phone" placeholder="Номер телефона">
                        <input type="email" placeholder="E-mail">
                        <div class="input-pass">
                            <input :type="passVisible1 ? 'text' : 'password'" placeholder="Пароль">
                            <button
                                type="button"
                                class="pass-toggle"
                                :class="{ active: passVisible1 }"
                                @click="passVisible1 = !passVisible1"
                            ></button>
                        </div>
                        <div class="input-pass">
                            <input :type="passVisible2 ? 'text' : 'password'" placeholder="Повторите пароль">
                            <button
                                type="button"
                                class="pass-toggle"
                                :class="{ active: passVisible2 }"
                                @click="passVisible2 = !passVisible2"
                            ></button>
                        </div>
                    </form>
                    <div class="reg-pop-cont-form-add">
                        <button type="button" @click="GoToAuth">
                            Авторизация
                        </button>
                        <button>
                            Забыли пароль?
                        </button>
                    </div>
                    <label class="cart-side-check"><input type="checkbox"><span></span> Нажав на кнопку "Отправить", я подтверждаю свое согласие на обработку моих персональных данных и условия Политики конфиденциальности </label>
                    <button type="button" class="btn" @click="GoToCode">
                        Продолжить
                    </button>
                </div>
                <div v-if="popup.step.value === 3" :key="'step3'">
                    <div class="reg-pop-cont-code">
                        <div class="reg-pop-cont-title">
                            Введите код
                        </div>
                        <div class="code-input">
                            <input
                                v-for="(v, i) in code"
                                :key="i"
                                ref="inputs"
                                maxlength="1"
                                inputmode="numeric"
                                class="code-input-item"
                                v-model="code[i]"
                                @input="onInput(i)"
                                @keydown.backspace="onBack(i)"
                            />
                        </div>
                        <button class="btn">
                            Продолжить
                        </button>
                    </div>
                    <div class="reg-pop-cont-suc">
                        <div class="reg-pop-cont-title">
                            Успешно!
                        </div>
                        <button class="btn">
                            Продолжить
                        </button>
                    </div>
                    <div class="reg-pop-cont-code reg-pop-cont-code_err">
                        <div class="reg-pop-cont-title">
                            Ошибка!
                            <span>
                                Осталось 3 попытки
                            </span>
                        </div>
                        <div class="code-input">
                            <input
                                v-for="(v, i) in code"
                                :key="i"
                                ref="inputs"
                                maxlength="1"
                                inputmode="numeric"
                                class="code-input-item"
                                v-model="code[i]"
                                @input="onInput(i)"
                                @keydown.backspace="onBack(i)"
                            />
                        </div>
                        <button class="btn">
                            Продолжить
                        </button>
                    </div>
                    <div class="reg-pop-cont-code reg-pop-cont-code_ban">
                        <div class="reg-pop-cont-title">
                            Ошибка!
                            <span>
                                Ваш личный кабинет заблокирован
                            </span>
                        </div>
                        <button class="btn">
                            Написать в поддержку
                        </button>
                    </div>
                    <div class="reg-pop-cont-suc">
                        <div class="reg-pop-cont-title">
                            Успешно!
                            <span>
                                Вам начислено 100 бонусов
                            </span>
                        </div>
                        <button class="btn">
                            Продолжить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
    const popup = usePopup()
    const router = useRouter()
    const passVisible = ref(false)
    const passVisible1 = ref(false)
    const passVisible2 = ref(false)

    function GoToAuth() {
        popup.setStep(1)
    }

    function GoToReg() {
        popup.setStep(2)
    }

    function GoToCode() {
        popup.setStep(3)
    }

    const code = ref(['', '', '', '', '', ''])
    const inputs = ref([])

    function onInput(i) {
    if (code.value[i] && i < code.value.length - 1) {
        inputs.value[i + 1].focus()
    }
    }

    function onBack(i) {
    if (!code.value[i] && i > 0) {
        inputs.value[i - 1].focus()
    }
    }
</script>

<style scoped>
    .reg-pop {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.20);
        backdrop-filter: blur(7.5px);
        z-index: 10;
    }

    .reg-pop-cont {
        height: 100%;
        max-width: 665px;
        width: 100%;
        background-color: #fff;
        margin-left: auto;
        padding: 200px 50px;
        box-sizing: border-box;
        overflow-y: scroll;
        position: relative;
    }

    .reg-pop-cont-title {
        color: #C1272D;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .reg-pop-cont-title span {
        color: #1C1C1C;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.96px;
    }

    .reg-pop-cont-form {
        display: flex;
        flex-direction: column;
    }

    .reg-pop-cont-form input {
        margin-bottom: 10px;
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
    }

    .reg-pop-cont-form input::placeholder {
        opacity: 0.5;
    }

    .reg-pop-cont-form-add {
        margin-top: 20px;
        display: flex;
        gap: 20px;
    }

    .reg-pop-cont-form-add button {
        color: #4A4A4A;
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
    }

    .reg-pop-cont .btn {
        color: #FFF;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        width: 100%;
        height: 50px;
        background-color: #C1272D;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }

    .reg-pop-cont .btn:hover {
        background-color: #fff;
        color: #C1272D;
    }

    .input-pass {
        position: relative;
        display: flex;
        align-items: center;
    }

    .input-pass input {
        width: 100%;
    }

    .pass-toggle {
        position: absolute;
        top: 0%;
        right: 0;
        width: 17px;
        height: 13px;
        background-image: url('/images/header/eye.png');
        background-size: 100% 100%;
        border: none;
        cursor: pointer;
        transition: 0.3s;
    }

    .pass-toggle.active {
        background-image: url('/images/header/eye_dis.png');
        height: 10px;
        margin-top: 3px;
    }

    .cart-side-check {
        color: #4A4A4A;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        letter-spacing: -0.64px;
        display: flex;
        gap: 10px;
        align-items: flex-start;
        cursor: pointer;
        margin-top: 30px;
    }

    .cart-side-check span {
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

    .cart-side-check input {
        display: none;
    }

    .cart-side-check span::after {
        content: '';
        width: 14.5px;
        height: 13px;
        background-image: url(/images/cart/gal.png);
        background-size: 100% 100%;
        opacity: 0;
        transition: 0.3s;
    }

    .cart-side-check input:checked ~ span::after {
        opacity: 1;
    }

    .reg-pop-cont-code {
        max-width: 290px;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    .code-input {
        display: flex;
        gap: 10px;
    }

    .code-input-item {
        width: 40px;
        height: 52px;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.28px;
        text-transform: uppercase;
        border: 1px solid rgba(74, 74, 74, 0.50);
        box-sizing: border-box;
        text-align: center;
    }

    .code-input-item:focus {
        border-color: #2b74ff;
        outline: none;
    }

    .reg-pop-cont-suc {
        max-width: 290px;
        margin: 0 auto;
        margin-bottom: 20px;
    }

    .reg-pop-cont-suc .reg-pop-cont-title {
        color: #C1272D;
        font-family: Inter;
        font-size: 70px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -2.8px;
        text-transform: none;
    }

    .reg-pop-cont-suc .reg-pop-cont-title span {
        color: #C1272D;
        font-family: Inter;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -1.2px;
    }

    .reg-pop-cont-suc .btn, .reg-pop-cont-code .btn {
        margin-top: 20px;
    }

    .reg-pop-close {
        top: 30px;
        right: 50px;
        background-image: url(/images/header/menu-close.svg);
        background-size: 100% 100%;
        width: 26px;
        height: 26px;
        position: absolute;
        cursor: pointer;
    }

    @media (max-width: 1199px) {
        .reg-pop-cont {
            max-width: none;
            padding: 100px 20px 30px;
        }

        .reg-pop-close {
            top: 20px;
            right: 20px;
        }
    }

    @media (max-width: 639px) {
        .reg-pop-cont-title {
            color: #C1272D;
            font-family: Inter;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }

        .reg-pop-cont-suc .reg-pop-cont-title {
            color: #C1272D;
            font-family: Inter;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 100%;
            letter-spacing: -0.96px;
            text-transform: uppercase;
        }


        .reg-pop-cont-suc .reg-pop-cont-title span {
            font-size: 20px;
        }
    }
</style>
