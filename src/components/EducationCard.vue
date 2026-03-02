<script setup lang="ts">
import { IconSchool } from '@tabler/icons-vue';

</script>

<template>
    <div class="flex gap-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div class="size-14 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <IconSchool />
        </div>
        <div>
            <span class="text-xs font-bold text-primary uppercase">2016 - 2020</span>
            <h3 class="text-xl font-bold mt-1">B.Sc. in Computer Science</h3>
            <p class="text-slate-500 text-sm">University of Technology</p>
            <p class="mt-2 text-slate-600 dark:text-slate-400 text-sm">Focused on Distributed Systems and
                Network Security.</p>
        </div>
    </div>
</template>