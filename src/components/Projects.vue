<template>
    <div
        class="flex flex-col items-center justify-center gap-3 pb-3 bg-[#172033] p-4 rounded-lg border border-white/10 hover:border-primary transition-colors max-w-md">
        <picture>
            <img class="max-w-[250px] h-[250px] aspect-square bg-contain rounded-lg"
                src="https://via.placeholder.com/250x250" alt="Img project not found">
        </picture>
        <div>
            <p class="text-white text-base font-medium leading-normal">{{ name }}</p>
            <p class="text-[#90a4cb] text-sm font-normal leading-normal mt-1">{{ description }}</p>
            <p class="text-primary text-xs font-medium leading-normal mt-2">{{ [...technologies] }}
            </p>
        </div>
    </div>

</template>
<script setup>
defineProps({
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
