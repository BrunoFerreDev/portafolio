<template>
    <section id="skills">
        <h2 class="text-white italic text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Habilidades</h2>
        <div class="p-4 flex flex-col gap-8">
            <div>
                <h3 class="text-primary text-lg font-bold leading-tight tracking-[-0.015em] mb-4">
                    {{ analisis.category }}</h3>
                <div class="flex flex-wrap gap-3">
                    <template v-for="analisis in analisis.skills">
                        <span class="bg-[#222f49] text-white text-sm font-medium px-3 py-1.5 rounded-full">{{
                            analisis.name }}</span>

                    </template>
                </div>
            </div>
            <div>
                <h3 class="text-primary text-lg font-bold leading-tight tracking-[-0.015em] mb-4">
                    {{ frontend.category }}</h3>
                <div class="flex flex-wrap gap-3">
                    <template v-for="skill in frontend.skills">
                        <span class="bg-[#222f49] text-white text-sm font-medium px-3 py-1.5 rounded-full">{{ skill.name
                            }}</span>
                    </template>
                </div>
            </div>
            <div>
                <h3 class="text-primary text-lg font-bold leading-tight tracking-[-0.015em] mb-4">
                    {{ backend.category }}</h3>
                <div class="flex flex-wrap gap-3">
                    <template v-for="skill in backend.skills">
                        <span class="bg-[#222f49] text-white text-sm font-medium px-3 py-1.5 rounded-full">{{ skill.name
                        }}</span>
                    </template>
                </div>
            </div>
            <div>
                <h3 class="text-primary text-lg font-bold leading-tight tracking-[-0.015em] mb-4">
                    {{ database.category }}</h3>
                <div class="flex flex-wrap gap-3">
                    <template v-for="skill in database.skills">
                        <span class="bg-[#222f49] text-white text-sm font-medium px-3 py-1.5 rounded-full">{{ skill.name
                        }}</span>
                    </template>
                </div>
            </div>

        </div>
    </section>
</template>
<script setup>
import data from '../data.json'
const frontend = data.skills[0]
const backend = data.skills[1]
const database = data.skills[2]
const analisis = data.skills[3]
</script>