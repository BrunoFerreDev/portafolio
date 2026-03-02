<script setup lang="ts">
import { IconLivePhoto } from '@tabler/icons-vue';
import { IconArticle } from '@tabler/icons-vue';

const props = defineProps({
    project: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <!-- Project 2 -->
    <div class="group glass-card rounded-2xl overflow-hidden hover:scale-[1.01] transition-transform">
        <div class="h-64 bg-slate-800 relative overflow-hidden">
            <div class="absolute inset-0 bg-linear-to-t from-background-dark/80 to-transparent z-10">
            </div>
            <img :alt="project.title" :title="project.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                :data-alt="project.description" :src="project.image" />

        </div>
        <div class="p-8 space-y-4 flex flex-col justify-between gap-4">
            <header>
                <h3 class="text-2xl font-bold text-white py-2">{{ project.title }}</h3>
                <p class="text-slate-600 dark:text-slate-400 leading-relaxed">{{ project.description }}
                </p>
            </header>
            <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium  max-h-16 h-full"
                    v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
            </div>
            <div class="pt-4 flex gap-4">
                <a class="text-primary font-bold flex items-center gap-2 hover:underline" :href="project.link">
                    Live Demo
                    <IconLivePhoto />
                </a>
                <a class="text-slate-500 font-bold flex items-center gap-2 hover:underline" href="#">
                    Case Study
                    <IconArticle />
                </a>
            </div>
        </div>
    </div>
</template>