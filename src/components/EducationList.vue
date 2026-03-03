<script setup lang="ts">
import EducationCard from './EducationCard.vue';
import data from '../assets/data.json'
const educations = data.education;
</script>

<template>
    <section class="py-20 border-t border-slate-200 dark:border-slate-800" id="education">
        <h2 class="text-3xl font-bold mb-12">Education &amp; Certifications</h2>
        <div class="grid md:grid-cols-2 gap-8">
            <EducationCard v-for="education in educations" :key="education.id" :education="education" />
        </div>
    </section>
</template>