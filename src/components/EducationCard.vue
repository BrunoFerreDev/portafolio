<template>
    <div class="p-4 flex flex-col gap-4">
        <details class="group bg-[#172033] border border-white/10 rounded-lg overflow-hidden">
            <summary
                class="flex items-center justify-between p-4 cursor-pointer hover:bg-[#222f49] transition-colors list-none">
                <div class="flex items-center gap-4">
                    <div
                        class="flex-shrink-0 size-8 bg-primary/20 rounded-lg flex items-center justify-center text-white">
                        <IconCertificate2 />
                    </div>
                    <div>
                        <h3 class="text-white truncate text-base font-medium leading-normal">{{ area }}</h3>
                        <p class="text-[#90a4cb] text-[12px] font-normal leading-normal mt-2">{{ institution }} - {{
                            location }}</p>
                    </div>
                </div>
                <div class="hidden sm:block transition-transform duration-300 group-open:rotate-180 text-white">
                    <IconChevronDown />
                </div>
            </summary>

            <div
                class="overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0 group-open:max-h-96 group-open:opacity-100">
                <div class="p-4 border-t border-white/10">
                    <p class="text-[#90a4cb] text-sm">{{ description }}</p>
                    <a class="text-primary text-xs font-medium leading-normal mt-2 hover:underline text-blue-400"
                        href="#">Ver Certificado</a>
                </div>

            </div>

        </details>
    </div>
</template>
<script setup>
import { IconCertificate } from '@tabler/icons-vue';
import { IconCertificate2 } from '@tabler/icons-vue';
import { IconChevronDown } from '@tabler/icons-vue';
import { IconSchool } from '@tabler/icons-vue';
defineProps({
    institution: String,
    area: String,
    startDate: String,
    endDate: String,
    description: String,
    location: String
})
</script>
<style scoped>
.group[data-state="open"] .group-data-\[state\=open\]\:rotate-180 {
    transform: rotate(180deg);
}

.group[data-state="open"] .group-data-\[state\=open\]\:max-h-96 {
    max-height: 24rem;
}

details>summary {
    list-style: none;
}

details>summary::-webkit-details-marker {
    display: none;
}
</style>