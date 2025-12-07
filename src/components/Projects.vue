<template>
    <div
        class="flex flex-col items-center justify-around gap-3 bg-[#172033] p-4 rounded-lg border border-white/10 hover:border-primary transition-colors max-w-md max-h-[500px] h-full">
        <picture>
            <img width="128" height="128" class="max-h-[250px] h-full aspect-square bg-contain rounded-lg"
                src="https://img.icons8.com/pastel-glyph/64/page-not-found--v2.png" alt="Img project not found">
        </picture>
        <div class="flex flex-col gap-4 mt-4">
            <p class="text-white text-base font-medium leading-normal underline">{{ name }}</p>
            <p class="text-[#90a4cb] text-sm font-normal leading-normal">{{ description }}</p>
            <div class="flex flex-col">
                <p class="text-primary text-xs font-medium leading-normal mt-2">{{
                    type }}</p>
            <span class="text-[#90a4cb] text-xs font-medium leading-normal">Rol: {{ role }}</span>
        </div>
        </div>
    </div>


</template>
<script setup>
defineProps({
    type: String,
    name: String,
    role: String,
    type: String,
    description: String,
    technologies: Array,
    repo_url: String,
    demo_url: String,
    date: String
})
</script>
