<script setup>
import { ref } from 'vue';
import CardProject from './CardProject.vue';
import ModalProject from './ModalProject.vue';
import data from '../assets/data.json';
const projects = data.projects;
const selectedProject = ref(null);
const isModalOpen = ref(false);

const openModal = (project) => {
    selectedProject.value = null;
    selectedProject.value = project;
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};
</script>

<template>
    <div class="grid">
        <CardProject v-for="project in projects" :key="project.id" :project="project" @click="openModal(project)" />
        <ModalProject :isOpen="isModalOpen" :project="selectedProject" @close="isModalOpen = false" />
    </div>
</template>
<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
</style>