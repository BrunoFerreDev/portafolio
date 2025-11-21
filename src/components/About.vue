<script setup lang="ts">
import { IconDownload } from '@tabler/icons-vue';

</script>

<template>
    <section class="@container pt-10" id="about">
        <div class="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row-reverse">
            <div class="flex-shrink-0 @[864px]:w-1/3 flex justify-center">
                <div class="w-48 h-48 sm:w-64 sm:h-64 bg-center bg-no-repeat bg-cover rounded-full border-4 border-primary/50"
                    data-alt="professional portrait of a young man"
                    style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWv-8IWn-ZoPawrLDK1agfpNC7V3XyWEqUf2D_H6YKU4tqdb29Cij2RSj3XaDN6UZ72W74jLIiKt9FVfCFpgjO1cuV2js-ohebsHkfJOPHaDYeV7sUGNJ3dAZaBEW8lvevfbySARsNoqIkYHV-3IL3xIg10PY_asFRqa21B2PveunY7krMDRFGHxmSZvEmdoPisbGOjdag2QSo4N0FdVfSrKrxlde3VTX-HeVmWQQ9r1pG_ZYA7j6AKUVM0WxK624G55ov-FGAdw");'>
                </div>
            </div>
            <div class="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                <div class="flex flex-col gap-2 text-left">
                    <h1
                        class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                        Analista Funcional y Desarrollador Web Java</h1>
                    <h2
                        class="text-[#90a4cb] text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                        Apasionado por la tecnología, la resolución de problemas y la creación de
                        soluciones eficientes. Busco oportunidades para aplicar mis habilidades en
                        análisis funcional y desarrollo para contribuir a proyectos innovadores.
                    </h2>
                </div>
                <div class="flex-wrap gap-3 flex">
                    <button
                        class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-blue-500 hover:bg-blue-600 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                        <span class="truncate">Ver Proyectos</span>
                    </button>
                    <button
                        class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#222f49] hover:bg-[#2e3f61] transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                        <span class="truncate inline-flex gap-2">
                            <IconDownload />
                            Descargar CV
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>