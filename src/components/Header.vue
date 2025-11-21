<script setup lang="ts">
import { IconCode } from '@tabler/icons-vue';
import { IconUser } from '@tabler/icons-vue';

</script>

<template>
    <header
        class="sticky top-5 z-50 flex items-center justify-between whitespace-nowrap border border-solid border-white/10 bg-background-dark/80 backdrop-blur-sm rounded-lg px-6 py-3">
        <div class="flex items-center gap-4 text-white">
            <div class="size-5 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_6_330)">
                        <path clip-rule="evenodd"
                            d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                            fill="currentColor" fill-rule="evenodd"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_6_330">
                            <rect fill="white" height="48" width="48"></rect>
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <h2 class="hidden sm:block text-white text-base font-bold leading-tight tracking-[-0.015em]">
                Bruno Ferreira</h2>
        </div>
        <div class="flex flex-1 justify-end gap-4 md:gap-8 p-2">
            <nav class="flex items-center gap-6">
                <!-- <a class="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
                    href="#about">Acerca de Mí</a> -->
                <a class="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
                    href="#projects">Proyectos</a>
                <a class="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
                    href="#education">Estudios</a>
                <a class="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
                    href="#skills">Habilidades</a>
                <a class="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
                    href="#contact">Contacto</a>
            </nav>
        </div>
    </header>
</template>
