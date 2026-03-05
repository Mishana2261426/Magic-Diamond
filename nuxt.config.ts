export default defineNuxtConfig({
    app: {
        head: {
            link: [
                { rel: 'stylesheet', href: '/css/lightbox.min.css' },
                { rel: 'stylesheet', href: '/css/global.css' },
                { rel: 'stylesheet', href: '/css/swiper-bundle.min.css' },
            ],
            script: [
                { src: '/js/lightbox.min.js', defer: true },
                { src: '/js/swiper-bundle.min.js', defer: true },
                { src: '/js/script.js', defer: true },
            ],
        },
    },
    devtools: { enabled: true },
})
