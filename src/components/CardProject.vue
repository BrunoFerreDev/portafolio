<script setup lang="ts">
import { IconLivePhoto } from '@tabler/icons-vue';
import { IconArticle } from '@tabler/icons-vue';

</script>

<template>
    <!-- Project 2 -->
    <div class="group glass-card rounded-2xl overflow-hidden hover:scale-[1.01] transition-transform">
        <div class="h-64 bg-slate-800 relative overflow-hidden">
            <div class="absolute inset-0 bg-linear-to-t from-background-dark/80 to-transparent z-10">
            </div>
            <img alt="Banking system image"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-alt="Secure banking mobile app and desktop interface design"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_Uqz8ERjNOy0mZipDH2kiX0UZEjIWE7_qS3OHfieXVToVB-1wUjW6N3WPxpIZZ-TzfOD-OW-Ad1MXyLBgY2hEEKIB5e73W3euUE-nQQRHMn_W8s994UqOOg_fZ_aIPtYMAtciPx4fRUMiFVwtsIbEuC9HkQaM8kgSVxD4WpVKP5iCr9VbD53YsKWKtfCXtqceGg0WLvz9T0hxtneOTHGjGSRwcXvEajTaAln4Ae1z0fjQZgFpw74kZm_kloQE7JOXN_UVhqVgW68z" />
            <div class="absolute bottom-6 left-6 z-20">
                <h3 class="text-2xl font-bold text-white">Fintech Core Engine</h3>
            </div>
        </div>
        <div class="p-8 space-y-4">
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                Banking core system focusing on transactional integrity and security. Integrated OAuth2/OIDC
                for secure authorization and implemented event-sourcing with Axon Framework.
            </p>
            <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium">Java
                    17</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium">Spring
                    Security</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium">Docker</span>
                <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium">Prometheus</span>
            </div>
            <div class="pt-4 flex gap-4">
                <a class="text-primary font-bold flex items-center gap-2 hover:underline" href="#">
                    Live Demo
                    <IconLivePhoto />
                </a>
                <a class="text-slate-500 font-bold flex items-center gap-2 hover:underline" href="#">
                    Case Study
                    <IconArticle />
                </a>
            </div>
        </div>
    </div>
</template>