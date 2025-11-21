<script setup lang="ts">
import { IconCertificate } from '@tabler/icons-vue';
import { IconCertificate2 } from '@tabler/icons-vue';
import { IconChevronDown } from '@tabler/icons-vue';
import { IconSchool } from '@tabler/icons-vue';

</script>

<template>
    <section id="education">
        <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Certificados y Estudios</h2>
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
                            <h3 class="text-white truncate text-base font-medium leading-normal">Desarrollo Web con Spring
                                Framework</h3>
                            <p class="text-[#90a4cb] text-sm font-normal leading-normal">Platzi</p>
                        </div>
                    </div>
                    <div class="hidden sm:block transition-transform duration-300 group-open:rotate-180 text-white">
                        <IconChevronDown />
                    </div>
                </summary>

                <div
                    class="overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0 group-open:max-h-96 group-open:opacity-100">
                    <div class="p-4 border-t border-white/10">
                        <p class="text-[#90a4cb] text-sm">Curso intensivo sobre desarrollo de aplicaciones web robustas
                            y escalables utilizando Spring Boot, Spring MVC y Spring Data.</p>
                        <a class="text-primary text-xs font-medium leading-normal mt-2 hover:underline text-blue-400"
                            href="#">Ver Certificado</a>
                    </div>
                </div>
            </details>
        </div>
    </section>
</template>
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