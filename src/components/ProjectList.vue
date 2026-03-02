<script setup lang="ts">
import CardProject from './CardProject.vue';
const projects = [
    {
        id: 1,
        title: 'MatOffe - Ecommerce',
        description: 'E-commerce platform for coffe and mate products, featuring product catalog, shopping cart, and order management.',
        image: 'https://res.cloudinary.com/dqzhz18xh/image/upload/v1772491640/matoffe_qymxsx.png',
        link: '#',
        technologies: ['Vue.js', 'Tailwind CSS', 'Pinia', 'Vite', 'Java', 'Spring Boot', 'PostgreSQL', 'Spring Security']
    },
    {
        id: 2,
        title: 'Home Banking ',
        description: 'Home Banking platform for personal finance management, featuring account management, transaction history, and budget tracking.',
        image: 'https://res.cloudinary.com/dqzhz18xh/image/upload/v1772491640/bank_jb4mxm.png',
        link: '#',
        technologies: ['Vue.js', 'Tailwind CSS', 'Vite', 'Java', 'Spring Boot', 'PostgreSQL', 'Spring Security']
    },
    {
        id: 3,
        title: 'PetShop',
        description: 'E-commerce platform for pet products, featuring product catalog, shopping cart, and order management.',
        image: 'https://res.cloudinary.com/dqzhz18xh/image/upload/v1772491640/petshop_ays3k6.webp',
        link: '#',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap','Vue.js']
    },
]
</script>

<template>
    <div class="grid md:grid-cols-3 gap-8">
        <CardProject v-for="project in projects" :key="project.id" :project="project" />

    </div>
</template>