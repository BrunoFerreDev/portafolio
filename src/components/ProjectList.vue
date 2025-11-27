<script setup lang="ts">
import Projects from './Projects.vue';
defineProps({
    projects: Array
})
</script>

<template>
    <section id="projects">
        <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Proyectos</h2>
        <div class="flex gap-4 p-4" v-for="project in projects">
            <Projects :name="project.name" :role="project.role" :type="project.type" :description="project.description"
                :technologies="project.technologies" :repo_url="project.repo_url" :demo_url="project.demo_url"
                :date="project.date" />
        </div>
    </section>
</template>