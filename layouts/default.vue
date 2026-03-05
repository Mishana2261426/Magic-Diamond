<template>
    <div class="page-wrapper">
        <Preloader :show="loading" />
        <AppHeader />
        <main>
            <slot />
        </main>
        <ClientOnly>
            <GiftPopup
                v-if="active === 'gift'"
                :data="payload"
                @close="close"
            />
            <CardPopup
                v-if="active === 'card'"
                :data="payload"
                @close="close"
            />
            <RegPopup
                v-if="active === 'reg'"
                :data="payload"
                @close="close"
            />
            <CookiePopup
                v-if="active === 'cookie'"
                :data="payload"
                @close="close"
            />
        </ClientOnly>
        <AppFooter />
    </div>
</template>

<script setup>
    const { active, payload, close } = usePopup()
    const loading = ref(true)

    onMounted(() => {
        const startTime = Date.now()

        const finishLoading = () => {
            const elapsed = Date.now() - startTime
            const remaining = 1000 - elapsed

            if (remaining > 0) {
                setTimeout(() => {
                    loading.value = false
                }, remaining)
            } else {
                loading.value = false
            }
        }

        if (document.readyState === 'complete') {
            finishLoading()
            return
        }

        window.addEventListener('load', finishLoading, { once: true })
    })
</script>