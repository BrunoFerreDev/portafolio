<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
    project: Object,
    isOpen: Boolean
})

const emit = defineEmits(['close'])
const currentIndex = ref(0)

// Imagen actual basada en el índice
const currentImage = computed(() => {
    return props.project?.images?.[currentIndex.value] || ''
})

const preloadNextAndPrev = () => {
    const total = props.project.images.length
    if (total <= 1) return

    const nextIdx = (currentIndex.value + 1) % total
    const prevIdx = (currentIndex.value - 1 + total) % total

    const imgNext = new Image()
    imgNext.src = props.project.images[nextIdx]

    const imgPrev = new Image()
    imgPrev.src = props.project.images[prevIdx]
}

// Ejecutar cada vez que el índice cambie
watch(currentIndex, () => {
    preloadNextAndPrev()
})
const nextImage = () => {
    if (!props.project?.images?.length) return
    currentIndex.value = (currentIndex.value + 1) % props.project.images.length
}

const prevImage = () => {
    if (!props.project?.images?.length) return
    currentIndex.value = (currentIndex.value - 1 + props.project.images.length) % props.project.images.length
}

// --- Soporte teclado ---
const handleKey = (e) => {
    if (!props.isOpen) return
    switch (e.key) {
        case 'ArrowRight': nextImage(); break
        case 'ArrowLeft': prevImage(); break
        case 'Escape': emit('close'); break
    }
}

onMounted(() => window.addEventListener('keydown', handleKey))
onUnmounted(() => window.removeEventListener('keydown', handleKey))

// --- Swipe móvil ---
let touchStartX = 0
const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX
}
const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].screenX
    const diff = touchEndX - touchStartX
    if (Math.abs(diff) > 50) { // Umbral de 50px
        diff > 0 ? prevImage() : nextImage()
    }
}
</script>

<template>
    <Transition name="fade">
        <div v-if="isOpen"
            class="fixed inset-0 z-50 flex items-center justify-center p-4 transition-colors duration-300 bg-white/95 backdrop-blur-md dark:bg-black/95"
            @click.self="emit('close')">

            <button @click="emit('close')"
                class="absolute top-6 right-6 p-2 rounded-full transition-all text-slate-800 hover:bg-slate-200 dark:text-white dark:hover:bg-white/10 z-[60]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div class="relative max-w-6xl w-full flex flex-col items-center">
                <div class="relative w-full flex items-center justify-center group touch-none"
                    @touchstart="handleTouchStart" @touchend="handleTouchEnd">

                    <button @click="prevImage"
                        class="hidden md:block absolute left-0 z-10 p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-2 bg-slate-100/80 text-slate-900 hover:bg-white shadow-lg dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
                        &#10094;
                    </button>

                    <img :key="currentIndex" :src="currentImage"
                        class="max-h-[70vh] md:max-h-[75vh] w-auto rounded-xl shadow-2xl object-contain border border-slate-200 dark:border-white/10 select-none"
                        alt="Vista del proyecto" />

                    <button @click="nextImage"
                        class="hidden md:block absolute right-0 z-10 p-3 rounded-full transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:-translate-x-2 bg-slate-100/80 text-slate-900 hover:bg-white shadow-lg dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
                        &#10095;
                    </button>
                </div>

                <div class="mt-6 text-center max-w-2xl">
                    <h3 class="text-2xl font-bold text-slate-900 dark:text-white">
                        {{ project?.title }}
                    </h3>
                    <p class="mt-2 text-slate-600 dark:text-slate-300 line-clamp-2">
                        {{ project?.description }}
                    </p>
                    <div class="mt-4 flex flex-col items-center gap-2">
                        <p class="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500">
                            {{ currentIndex + 1 }} / {{ project?.images?.length }}
                        </p>
                        <div class="flex gap-1.5">
                            <span v-for="(_, i) in project?.images" :key="i" @click="currentIndex = i" :class="['h-1.5 rounded-full transition-all cursor-pointer',
                                currentIndex === i ? 'w-6 bg-blue-500' : 'w-1.5 bg-slate-300 dark:bg-slate-700']">
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Animación suave para la imagen al cambiar */
img {
    animation: imgFade 0.4s ease-in-out;
}

@keyframes imgFade {
    from {
        opacity: 0.6;
        transform: scale(0.98);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>