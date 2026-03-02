<script setup lang="ts">
import EducationCard from './EducationCard.vue';
const educations = [
    {
        id: 1,
        year: '2020 - 2025',
        title: 'System Analyst',
        institution: 'C.E.P N° 62 ',
        description: 'Focused on Software Development and Database Management. This includes detailed design, construction (reusing existing elements or programming them entirely), verification, debugging, optimization, and maintenance.'
    },
    {
        id: 2,
        year: 'Jun 2023 - Oct 2023',
        title: 'Full Stack Java Developer',
        institution: 'MindHub',
        description: 'Intensive program focused on building full-stack web applications using Java, Spring Boot, and modern frontend technologies. Covered object-oriented programming, database design, RESTful APIs, and agile methodologies.'
    },
    {
        id: 3,
        year: 'Mar 2024 - Aug 2024',
        title: 'Microservices with Spring Cloud',
        institution: 'TodoCodeAcademy',
        description: 'Focused on building microservices using Spring Cloud. Covered topics such as service discovery, configuration management, and circuit breakers.'
    },
    {
        id: 4,
        year: 'Mar 2025 - Aug 2025',
        title: 'Security with Spring Security',
        institution: 'TodoCodeAcademy',
        description: 'Specialized training in securing Java applications using Spring Security. Covered authentication and authorization mechanisms, JWT implementation, and OAuth2 protocols.'
    }
]
</script>

<template>
    <section class="py-20 border-t border-slate-200 dark:border-slate-800" id="education">
        <h2 class="text-3xl font-bold mb-12">Education &amp; Certifications</h2>
        <div class="grid md:grid-cols-2 gap-8">
            <EducationCard v-for="education in educations" :key="education.id" :education="education" />
        </div>
    </section>
</template>