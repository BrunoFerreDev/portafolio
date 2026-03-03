<script setup>
import SkillItem from './SkillItem.vue'
import data from '../assets/data.json'

import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode } from 'swiper/modules'

import 'swiper/css'

const skills = data.skills

const modules = [Autoplay, FreeMode]

const frontendSkills = computed(() => skills.frontend)
const backendSkills = computed(() => skills.backend)
const toolsSkills = computed(() => skills.tools)
</script>
<template>
    <section class="py-20 border-t border-slate-200 dark:border-slate-800" id="skills">

        <div class="text-center mb-16">
            <h2 class="text-3xl font-bold mb-4">Technical Arsenal</h2>
            <p class="text-slate-500">
                The tools and technologies I use to bring ideas to life.
            </p>
        </div>
        <div class="flex flex-col gap-10">

            <!-- FRONTEND -->
            <div>
                <h3 class="text-xl font-semibold text-center mb-5">Frontend</h3>

                <Swiper :modules="modules" :slides-per-view="2" :space-between="20" :loop="true" :autoplay="{
                    delay: 0,
                    disableOnInteraction: false
                }" :speed="3000" :free-mode="true" :breakpoints="{
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 }
                }" class="w-full">
                    <SwiperSlide v-for="(skill, index) in frontendSkills" :key="'front-' + index">
                        <SkillItem :skill="skill" />
                    </SwiperSlide>
                </Swiper>
            </div>

            <!-- BACKEND -->
            <div>
                <h3 class="text-xl font-semibold  text-center mb-5">Backend</h3>

                <Swiper :modules="modules" :slides-per-view="2" :space-between="20" :loop="true" :autoplay="{
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: true
                }" :speed="3000" :free-mode="true" :breakpoints="{
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 }
                }" class="w-full">
                    <SwiperSlide v-for="(skill, index) in backendSkills" :key="'back-' + index">
                        <SkillItem :skill="skill" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <!-- Tools -->
            <div>
                <h3 class="text-xl font-semibold  text-center mb-5">Tools</h3>

                <Swiper :modules="modules" :slides-per-view="2" :space-between="20" :loop="true" :autoplay="{
                    delay: 0,
                    disableOnInteraction: false
                }" :speed="3000" :free-mode="true" :breakpoints="{
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 }
                }" class="w-full">
                    <SwiperSlide v-for="(skill, index) in toolsSkills" :key="'tools-' + index">
                        <SkillItem :skill="skill" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    </section>
</template>