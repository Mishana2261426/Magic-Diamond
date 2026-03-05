<template>
    <div class="main-choice">
        <div class="container">
            <h2>
                Твой выбор
            </h2>
            <form action="" class="main-choice-form">
                <div class="main-choice-form-title">
                    Заполните форму, мы подберем то что вам нужно
                </div>
                <label v-for="(select, i) in selects" :key="i" class="main-choice-form-item">
                    <div class="main-choice-form-item-title">
                        {{select.title}}
                    </div>
                    <div class="main-choice-form-item-drop" data-select>
                        <div class="select-current">{{select.placeholder}}</div>
                        <ul class="select-list">
                            <li v-for="(option, i) in select.options" :key="option.value" :data-value="option.value">
                                {{ option.label }}
                            </li>
                        </ul>
                        <input type="hidden" name="product" value="">
                    </div>
                </label>
                <input type="submit" value="Смотреть результат" class="main-choice-form-btn">
            </form>
        </div>
    </div>
</template>

<script setup>
    const selects = [
        {
            title: 'Продукт',
            name: 'product',
            placeholder: 'Выберите продукт',
            options: [
                { value: 'rings', label: 'Кольца' },
                { value: 'bracelets', label: 'Браслеты' },
                { value: 'necklaces', label: 'Ожерелья' },
                { value: 'earrings', label: 'Серьги' },
            ]
        },
        {
            title: 'Материал',
            name: 'material',
            placeholder: 'Выберите материал',
            options: [
                { value: 'gold', label: 'Золото' },
                { value: 'silver', label: 'Серебро' },
                { value: 'platinum', label: 'Платина' }
            ]
        },
        {
            title: 'Производитель',
            name: 'manufacturer',
            placeholder: 'Выберите производителя',
            options: [
                { value: 'rings', label: 'Кольца' },
                { value: 'bracelets', label: 'Браслеты' },
                { value: 'necklaces', label: 'Ожерелья' },
                { value: 'earrings', label: 'Серьги' },
            ]
        },
        {
            title: 'Камень',
            name: 'stone',
            placeholder: 'Выберите камень',
            options: [
                { value: 'gold', label: 'Золото' },
                { value: 'silver', label: 'Серебро' },
                { value: 'platinum', label: 'Платина' }
            ]
        }
    ];
</script>

<style scoped>
    .main-choice {
        margin-top: 167px;
        text-align: center;
        padding-bottom: 100px;
    }

    .main-choice h2 {
        color: #FFF;
        font-family: Inter;
        font-size: 300px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -24px;
        text-transform: uppercase;
        backdrop-filter: blur(50px);
    }

    .main-choice-form {
        max-width: 900px;
        margin: 0 auto;
        margin-top: 30px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }

    .main-choice-form-title {
        color: #1C1C1C;
        font-family: "Playfair Display";
        font-size: 24px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.96px;
        text-align: center;
        margin-bottom: 10px;
        width: 100%;
    }

    .main-choice-form-item {
        width: calc(50% - 10px);
        display: flex;
        flex-direction: column;
        gap: 5px;
        text-align: left;
    }

    .main-choice-form-item-title {
        color: #1C1C1C;
        font-family: "Playfair Display";
        font-size: 36px;
        font-style: italic;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -2.88px;
        text-align: left;
    }

    .main-choice-form-item-drop {
        position: relative;
    }

    .main-choice-form-btn  {
        color: #FFF;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        max-width: 350px;
        width: 100%;
        height: 50px;
        padding: 10px 15px;
        box-sizing: border-box;
        background: #C1272D;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px auto 0;
        cursor: pointer;
        transition: 0.3s;
    }

    .main-choice-form-btn:hover {
        background-color: #fff;
        color: #C1272D;
    }

    .select-current {
        padding: 10px 15px;
        background: #fff;
        cursor: pointer;
        user-select: none;
        transition: 0.3s;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
        height: 50px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .select-current::after {
        content: '';
        display: flex;
        width: 12px;
        height: 7px;
        background-image: url(/images/main-qst/arrow_sm.png);
        background-size: 100% 100%;
        transition: 0.3s;
    }

    .select-list {
        list-style: none;
        margin: 0;
        padding: 6px 0;
        position: absolute;
        left: 0;
        top: calc(100% + 5px);
        width: 100%;
        background: #fff;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-5px);
        transition: 0.2s;
        z-index: 10;
        color: #1C1C1C;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: -0.64px;
    }

    .select-list li {
        padding: 8px 14px;
        cursor: pointer;
        transition: background 0.2s;
    }

    .select-list li:hover {
        background: #ececec;
    }

    .main-choice-form-item-drop.active .select-list {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    .main-choice-form-item-drop.active .select-current::after {
        transform: rotate(180deg);
    }

    @media (max-width: 1700px) {
        .main-choice {
            margin-top: 134px;
        }

        .main-choice h2 {
            font-size: 180px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -14.4px;
            text-transform: uppercase;
            backdrop-filter: blur(50px);
        }

        .main-choice-form {
            margin-top: 20px;
        }
    }

    @media (max-width: 1199px) {
        .main-choice {
            margin-top: 100px;
        }

        .main-choice h2 {
            font-size: 100px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -8px;
            text-transform: uppercase;
            backdrop-filter: blur(50px);
        }

        .main-choice-form {
            margin-top: 10px;
            max-width: 519px;
            justify-content: center;
        }

        .main-choice-form-item {
            width: 100%;
            max-width: 440px;
        }
    }

    @media (max-width: 639px) {
        .main-choice {
            font-size: 60px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -4.8px;
            backdrop-filter: blur(50px);
            padding-bottom: 80px;
        }

        .main-choice h2 {
            font-family: Inter;
            font-size: 60px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: -4.8px;
            text-transform: uppercase;
            backdrop-filter: blur(50px);
            margin: 0 -20px;
        }

        .main-choice-form-title {
            text-align: left;
            margin: 0;
        }
    }

</style>