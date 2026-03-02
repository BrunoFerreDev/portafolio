<script setup lang="ts">
import { IconExternalLink } from '@tabler/icons-vue';
import { IconChevronCompactUp } from '@tabler/icons-vue';

</script>

<template>
    <section class="py-20 border-t border-slate-200 dark:border-slate-800" id="about">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="relative rounded-2xl overflow-hidden aspect-video lg:aspect-square"
                data-alt="A professional headshot or a minimalist workspace with computer monitors showing code">
                <img alt="Professional Developer Profile"
                    class="w-full h-full max-w-lg   object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    data-alt="Portrait of a male developer in a professional setting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3bjzXOvF4cdZwya8dONb-vcoBU5w-UcUMHX0ofZty6mnaBKmYqjNTZOitDrA937LbFpDWBwQYqRbx8DMHNFArqMrTFYZAoDcVPeY9OSqdBtkkp0A0tb54orenqNGzLOy0Ah7WEBNa39skQ5OzGU9KhHCM_eTbowAvjSrP2beOf-sJiL6TA4cfXS4JhyT58zlO0nGtMX4ux6FQCKzKOwiulSIIusSITYwAVP-6vlYBOMKOBctuTxUKP4Rj3bGUpOAMaX0tXgJ-XYVf" />
            </div>
            <div class="space-y-6">
                <h2 class="text-3xl font-bold">About Me</h2>
                <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    With over 2 years of experience in the Java ecosystem, I have transitioned from building monolithic
                    desktop applications to architecting complex, cloud-native microservices. My passion lies in solving
                    the "impossible" problems of distributed computing: eventual consistency, high availability, and
                    zero-downtime deployments.
                </p>
                <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    I believe in clean code, test-driven development, and the power of automation. When I'm not
                    tuning JVM performance or designing database schemas, I'm contributing to open-source tools that
                    empower other developers.
                </p>
                <div class="grid grid-cols-2 gap-6 pt-4">
                    <div
                        class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <h4 class="text-primary font-bold text-2xl">Instagram</h4>
                        <a href="https://www.instagram.com/brunomarcos.dev/" target="_blank"
                            class="text-sm text-slate-500 inline-flex items-center gap-2">@brunomarcos.dev
                            <IconExternalLink />
                        </a>
                    </div>
                    <div
                        class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <h4 class="text-primary font-bold text-2xl">LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/brunomarcosferreira/" target="_blank"
                            class="text-sm text-slate-500 inline-flex items-center gap-2">Bruno Ferreira
                            <IconExternalLink />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>