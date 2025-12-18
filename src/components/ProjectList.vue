<script setup>
import Projects from './Projects.vue';
defineProps({
    projects: Array
})
</script>

<template>
    <section id="projects">
        <h2 class="col-span-3 text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Proyectos</h2>
        <div v-for="project in projects">
            <Projects :name="project.name" :role="project.role" :type="project.type" :description="project.description"
                :technologies="project.technologies" :repo_url="project.repo_url" :demo_url="project.demo_url"
                :date="project.date" />
        </div>
    </section>
</template>
<style scoped>
#projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
</style>