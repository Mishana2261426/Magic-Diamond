<template>
	<Teleport to="body">
		<Transition name="fade">
			<div v-if="show" class="preloader" role="status" aria-busy="true">
				<div class="preloader__backdrop"></div>

				<div class="preloader-pic">
                    <img src="/images/loader/rock.svg" alt="">
                </div>
			</div>
		</Transition>
	</Teleport>
</template>

<script setup>
defineProps({
	show: { type: Boolean, default: false },
	text: { type: String, default: 'Загрузка...' },
})
</script>

<style scoped>
.preloader {
	position: fixed;
	inset: 0;
	z-index: 9999;
	display: grid;
	place-items: center;
}

.preloader__backdrop {
	position: absolute;
	inset: 0;
	background: #EFEFEF;
}

.preloader__box {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	padding: 18px 22px;
	border-radius: 14px;
	background: #fff;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.preloader__spinner {
	width: 42px;
	height: 42px;
	border-radius: 50%;
	border: 3px solid rgba(193, 39, 45, 0.2);
	border-top-color: #C1272D;
	animation: spin 0.9s linear infinite;
}

.preloader__text {
	font-family: Inter, sans-serif;
	font-size: 14px;
	color: #1C1C1C;
}

.preloader-pic {
    z-index: 1;
    animation: pulse 1.2s ease-in-out infinite;
	transform-origin: center;
	will-change: transform;
    width: 282px;
    height: 212px;
}

.preloader-pic img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

@keyframes pulse {
	0%, 100% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.08);
	}
}

@keyframes spin {
	to { transform: rotate(360deg); }
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

@media (max-width: 1199px) {
    .preloader-pic {
        width: 200px;
        height: 150px;
    }
}

@media (max-width: 639px) {
    .preloader-pic {
        width: 150px;
        height: 112px;
    }
}
</style>