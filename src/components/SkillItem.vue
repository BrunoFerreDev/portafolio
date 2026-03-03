<template>
    <!-- Skill 1 -->
    <div
        class="group p-4 rounded-2xl glass-card flex flex-col items-center gap-3 hover:border-primary/50 transition-all">
        <div
            class="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <IconBrandHtml5 v-if="skill === 'HTML'" />
            <IconBrandCss3 v-if="skill === 'CSS'" />
            <IconBrandJavascript v-if="skill === 'JavaScript'" />
            <IconBrandTailwind v-if="skill === 'TailwindCSS'" />
            <IconBrandVite v-if="skill === 'Vite'" />
            <IconShield v-if="skill === 'Security'" />
            <IconBrandGithub v-if="skill === 'Git'" />
            <IconBrandVue v-if="skill === 'Vue'" />
        </div>
        <span class="font-medium truncate">{{ skill }}</span>
    </div>
</template>
<script setup>
import { IconBrandCss3 } from '@tabler/icons-vue';
import { IconBrandVite } from '@tabler/icons-vue';
import { IconBrandVue } from '@tabler/icons-vue';
import { IconShield } from '@tabler/icons-vue';
import { IconBrandGithub } from '@tabler/icons-vue';
import { IconBrandTailwind } from '@tabler/icons-vue';
import { IconBrandHtml5 } from '@tabler/icons-vue';
import { IconBrandJavascript } from '@tabler/icons-vue';

const props = defineProps({
    skill: String
})
</script>