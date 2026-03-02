<script setup lang="ts">
import { IconMail } from '@tabler/icons-vue';
import { IconBrandLinkedin } from '@tabler/icons-vue';
import { IconBrandGithub } from '@tabler/icons-vue';
import { IconLocation } from '@tabler/icons-vue';

</script>

<template>
    <section class="py-20 border-t border-slate-200 dark:border-slate-800" id="contact">
        <div class="grid lg:grid-cols-2 gap-16">
            <div class="space-y-8">
                <h2 class="text-3xl font-bold">Let's Connect</h2>
                <p class="text-slate-600 dark:text-slate-400 text-lg">
                    I'm currently open to freelance opportunities and full-time. If you have a
                    project that needs robust architecture, let's talk.
                </p>
                <div class="space-y-4">
                    <div class="flex items-center gap-4">
                        <div class="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <IconMail />
                        </div>
                        <div>
                            <p class="text-sm text-slate-500">Email</p>
                            <p class="font-bold">fbrunomarcos@gmail.com</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <IconLocation />
                        </div>
                        <div>
                            <p class="text-sm text-slate-500">Location</p>
                            <p class="font-bold">Misiones, Argentina (Remote Friendly)</p>
                        </div>
                    </div>
                </div>
                <div class="flex gap-4">
                    <a class="size-12 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                        href="#">
                        <IconBrandLinkedin />
                    </a>
                    <a class="size-12 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                        href="#">
                        <IconBrandGithub />
                    </a>
                </div>
            </div>
            <form
                class="space-y-6 p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                        <label class="text-sm font-medium">Full Name</label>
                        <input
                            class="w-full bg-white dark:bg-backgroundDark border-slate-200 dark:border-slate-800 rounded-lg focus:ring-primary focus:border-primary "
                            placeholder="Your Name" type="text" />
                    </div>
                    <div class="space-y-2">
                        <label class="text-sm font-medium">Email Address</label>
                        <input
                            class="w-full bg-white dark:bg-backgroundDark border-slate-200 dark:border-slate-800 rounded-lg focus:ring-primary focus:border-primary"
                            placeholder="Your Email" type="email" />
                    </div>
                </div>
                <div class="space-y-2">
                    <label class="text-sm font-medium">Subject</label>
                    <select
                        class="w-full bg-white dark:bg-backgroundDark border-slate-200 dark:border-slate-800 rounded-lg focus:ring-primary focus:border-primary">
                        <option>Hiring Opportunity</option>
                        <option>Project Inquiry</option>
                        <option>Collaboration</option>
                        <option>Other</option>
                    </select>
                </div>
                <div class="space-y-2">
                    <label class="text-sm font-medium">Message</label>
                    <textarea
                        class="w-full bg-white dark:bg-backgroundDark border-slate-200 dark:border-slate-800 rounded-lg focus:ring-primary focus:border-primary"
                        placeholder="How can I help you?" rows="4"></textarea>
                </div>
                <button
                    class="w-full bg-primary text-white py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-primary/20 transition-all"
                    type="submit">
                    Send Message
                </button>
            </form>
        </div>
    </section>
</template>
<style scoped>
input,
select,
textarea {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #e2e8f0;
    outline: none;
    transition: all 0.3s ease;
    resize: none;
}

input:focus,
select:focus,
textarea:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
</style>