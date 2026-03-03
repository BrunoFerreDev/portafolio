<script setup lang="ts">
import { IconSchool } from '@tabler/icons-vue';
const props = defineProps({
    education: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="flex gap-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div class="size-14 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary hidden md:flex">
            <IconSchool />
        </div>
        <div>
            <span class="text-xs font-bold text-primary uppercase">{{ education.year }}</span>
            <h3 class="text-xl font-bold mt-1">{{ education.title }}</h3>
            <p class="text-slate-500 text-sm">{{ education.institution }}</p>
            <p class="mt-2 text-slate-600 dark:text-slate-400 text-sm">{{ education.description }}</p>
        </div>
    </div>
</template>