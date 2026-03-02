<script setup lang="ts">
import EducationList from './EducationList.vue';
import SkillList from './SkillList.vue';
import ProjectList from './ProjectList.vue';
import { IconChevronLeft } from '@tabler/icons-vue';
import { IconChevronRight } from '@tabler/icons-vue';
import CodeBlock from './CodeBlock.vue';
import FormContact from './FormContact.vue';
import About from './About.vue';
import HeroSection from './HeroSection.vue';

</script>

<template>
    <main class="max-w-7xl mx-auto px-6">
        <!-- Hero Section -->
       <HeroSection/>
        <!-- About Section -->
        <About />
        <!-- Skills Section -->
        <SkillList />
        <!-- Courses & Education -->
        <EducationList />
        <!-- Projects Section -->
        <section class="py-20 border-t border-slate-200 dark:border-slate-800" id="projects">
            <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <h2 class="text-3xl font-bold mb-4">Featured Projects</h2>
                    <p class="text-slate-500">A selection of my architectural and development work.</p>
                </div>
                <div class="flex gap-2">
                    <button
                        class="size-10 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                        <IconChevronLeft />
                    </button>
                    <button
                        class="size-10 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                        <IconChevronRight />
                    </button>
                </div>
            </div>
            <ProjectList />
        </section>
        <!-- Contact Section -->
        <FormContact />
    </main>
</template>