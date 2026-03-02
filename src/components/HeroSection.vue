<script setup lang="ts">
import CodeBlock from './CodeBlock.vue';

</script>

<template>
     <section class="py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
            <div class="flex-1 space-y-6">
                <div
                    class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                    <span class="relative flex h-2 w-2">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Available for new opportunities
                </div>
                <h1 class="text-5xl lg:text-7xl font-bold leading-tight">
                    Building Scalable <span class="text-primary">Backend</span> Architectures.
                </h1>
                <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                    I'm a Java Backend Developer specializing in high-performance distributed systems,
                    cloud-native microservices, and robust API design using the Spring ecosystem.
                </p>
                <div class="flex flex-wrap gap-4">
                    <a class="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:scale-[1.02] transition-transform"
                        href="#projects">
                        View My Work
                    </a>
                    <a class="bg-slate-200 dark:bg-slate-800 px-8 py-4 rounded-lg font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                        href="#contact">
                        Get in Touch
                    </a>
                </div>
            </div>
            <CodeBlock />
        </section>
</template>