<script setup lang="ts">
import { IconFileCv } from '@tabler/icons-vue';

</script>

<template>
    <nav
        class="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-backgroundLight/80 dark:bg-backgroundDark/80 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div class="flex items-center gap-2 group cursor-pointer">
                <div
                    class="size-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    BF
                </div>
                <span class="text-xl font-bold tracking-tight">Bruno Ferreira</span>
            </div>
            <div class="hidden md:flex items-center gap-8">
                <a class="text-sm font-medium hover:text-primary transition-colors" href="#about">About</a>
                <a class="text-sm font-medium hover:text-primary transition-colors" href="#projects">Projects</a>
                <a class="text-sm font-medium hover:text-primary transition-colors" href="#education">Education</a>
                <a class="text-sm font-medium hover:text-primary transition-colors" href="#skills">Skills</a>
                <a class="text-sm font-medium hover:text-primary transition-colors" href="#contact">Contact</a>
                <button
                    class="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2">
                    <IconFileCv />
                    Resume
                </button>
            </div>
        </div>
    </nav>
</template>