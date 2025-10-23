<template>
  <section class="flex items-center justify-around rounded-lg shadow-lg p-8 bg-white gap-8 flex-wrap">
    <div class="flex flex-col justify-center gap-4">
      <a href="https://www.instagram.com/brunomarcosferreira/" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-2">
        <IconBrandInstagram size="28" />Instagram
      </a>
      <a href="https://github.com/brunomarcosferreira" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-2">
        <IconBrandGithub size="28" />Github
      </a>
      <a href="https://www.linkedin.com/in/brunomarcosferreira/" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-2">
        <IconBrandLinkedin size="28" />Linkedin
      </a>
    </div>
    <article class="flex flex-wrap gap-4">
      <img src="../../public/profile.enc" alt="Perfil" class="w-44 h-44 rounded-full" />
      <div class="flex flex-col justify-start gap-5 items-end">
        <h4 class="text-lg font-bold">Bruno Marcos Ferreira</h4>
        <p class="inline-flex items-center gap-2">
          <IconReportAnalytics />Analista en sistemas
        </p>
        <p class="inline-flex items-center gap-2">
          <IconDevicesCode /> Desarrollador Web
        </p>
      </div>
    </article>

    <ul class="flex flex-col gap-4 items-end">
      <a href="https://maps.app.goo.gl/E8utzrfkT6MvP9L97" target="_blank" rel="noopener noreferrer">
        <li class="inline-flex items-center gap-2">
          Misiones,Argentina
          <IconMapPin size="28" />
        </li>
      </a>
      <a href="mailto:fbrunomarcos@gmail.com" target="_blank" rel="noopener noreferrer">
        <li class="inline-flex items-center gap-2">
          Mi correo
          <IconMail size="28" />
        </li>
      </a>
      <a href="#">
        <li class="inline-flex items-center gap-2">
          Mi CV
          <IconFileCv size="28" />
        </li>
      </a>
    </ul>
  </section>
</template>
<script setup>
import { IconReportAnalytics } from "@tabler/icons-vue";
import { IconDevicesCode } from "@tabler/icons-vue";
import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
} from "@tabler/icons-vue";
import { IconMail, IconMapPin } from "@tabler/icons-vue";
</script>
