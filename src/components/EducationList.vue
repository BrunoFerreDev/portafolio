<script setup>
import EducationCard from './EducationCard.vue';
defineProps({
    educations: Array
})
</script>

<template>
    <section id="education">
        <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Certificados y Estudios</h2>
        <template v-for="education in educations">
            <EducationCard :area="education.area" :institution="education.institution" :startDate="education.startDate" :endDate="education.endDate" :description="education.description" :location="education.location" />
        </template>
    </section>
</template>
