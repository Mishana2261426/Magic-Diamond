<template>
    <div class="about-banner">
        <div class="about-banner-pic" v-for="banner in banner_pics">
            <img :src="banner.pic" alt="">
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        banner_pics: { type: Object}
    })
</script>

<style>
    .about-banner {
        display: flex;
        max-height: 1000px;
        height: 100vh;
        justify-content: center;
    }

    .about-banner-pic {
        width: 33.333%;
        transition: 0.7s;
    }

    .about-banner-pic:hover {
        width: 50%;
    }

    .about-banner-pic img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.7s;
    }

    .about-banner-pic:last-child img, .about-banner-pic:first-child img {
        filter: grayscale(100%);
    }

    .about-banner:hover img {
        filter: grayscale(100%)
    }

    .about-banner-pic:hover img {
        filter: grayscale(0)
    }

    @media (max-width: 1700px) {
        .about-banner {
            max-height: 800px;
            overflow: hidden;
        }

        .about-banner-pic {
            width: -moz-available;
            width: -webkit-fill-available;
        }

        .about-banner-pic:nth-child(2) {
            max-width: 512px;
            min-width: 512px;
            width: 100%;
        }
    }

    @media (max-width: 639px) {
        .about-banner {
            max-height: 700px;
        }
    }
</style>