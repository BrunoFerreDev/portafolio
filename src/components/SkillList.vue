<script setup lang="ts">
import SkillItem from './SkillItem.vue';

</script>

<template>
    <section class="py-20 border-t border-slate-200 dark:border-slate-800" id="skills">
        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold mb-4">Technical Arsenal</h2>
            <p class="text-slate-500">The tools and technologies I use to bring ideas to life.</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <SkillItem />
            <SkillItem />
            <SkillItem />
            <SkillItem />
            <SkillItem />
        </div>
    </section>
</template>