<script setup>
import { Moon } from "lucide-vue-next";
import SobreMi from "./components/SobreMi.vue";
import Habilidades from "./components/Habilidades.vue";
import Proyecto from "./components/Proyecto.vue";
import Contacto from "./components/Contacto.vue";
import { MapPin } from "lucide-vue-next";
import { Mail } from "lucide-vue-next";
import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-vue";
import Education from "./components/Education.vue";
import Perfil from "./components/Perfil.vue";
</script>

<template>
  <header class="max-w-7xl mx-auto bg-white shadow-md flex items-center justify-between p-4">
    <h3 class="text-2xl font-bold">Portafolio</h3>
    <nav>
      <ul class="flex gap-8">
        <li><a href="#sobre-mi">Sobre Mi</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
    <button class="text-white px-4 py-2 rounded">
      <Moon color="black" size="28" />
    </button>
  </header>
  <main class="max-w-7xl mx-auto flex flex-col gap-8 mt-8 mb-8">
    <!-- <section
      class="sticky top-1 col-span-1 flex flex-col items-center justify-start rounded-lg shadow-lg p-2 h-[calc(75vh-64px)] bg-white gap-10"
    >
      <article class="flex flex-col items-center gap-2">
        <img
          src="../public/profile.enc"
          alt="Perfil"
          class="w-64 h-64 rounded-full"
        />
        <h4 class="text-lg font-bold">Bruno Marcos Ferreira</h4>
        <p>Analista en sistemas</p>
      </article>
      <ul class="flex flex-col gap-4">
        <a
          href="https://maps.app.goo.gl/E8utzrfkT6MvP9L97"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li class="inline-flex items-center gap-2">
            <MapPin size="28" />Misiones,Argentina
          </li></a
        >
        <a
          href="mailto:fbrunomarcos@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li class="inline-flex items-center gap-2">
            <Mail size="28" />Mi correo
          </li></a
        >
      </ul>
      <div class="grid grid-cols-3 gap-4">
        <a
          href="https://www.instagram.com/brunomarcosferreira/"
          target="_blank"
          rel="noopener noreferrer"
          ><IconBrandInstagram size="42"
        /></a>
        <a
          href="https://github.com/brunomarcosferreira"
          target="_blank"
          rel="noopener noreferrer"
          ><IconBrandGithub size="42"
        /></a>
        <a
          href="https://www.linkedin.com/in/brunomarcosferreira/"
          target="_blank"
          rel="noopener noreferrer"
          ><IconBrandLinkedin size="42"
        /></a>
      </div>
    </section> -->
    <Perfil />
    <section id="sobre-mi" class="flex flex-col items-center rounded-lg flex flex-col gap-10">
      <SobreMi />
      <div class="flex justify-center gap-5 w-full">
        <Education />
        <Habilidades />
      </div>
      <section id="proyectos" class="p-8 shadow-lg rounded-lg w-full bg-white">
        <h2 class="text-2xl">Proyectos</h2>
        <div class="flex flex-wrap justify-center gap-5">
          <Proyecto img="../public/matoffe.png"
            descripcion="Tienda en línea que vende productos relacionados con el mate y el café, con diferentes tipos de búsquedas, impresión de recibos de compra y más..."
            titulo="MattOffe - Tienda Online" />
          <Proyecto img="../public/bank.png"
            descripcion="Home Banking con funciones como transferencias de dinero, solicitudes de préstamos, pagos de préstamos, creación de cuentas y tarjetas de diferentes tipos."
            titulo="Home Banking" />
          <Proyecto img="../public/petshop.jpg"
            descripcion="Tienda en línea realizada en grupo, dedicada a una clínica veterinaria, para la compra de alimentos, juguetes y diversos artículos para diferentes mascotas. Proyecto grupal."
            titulo="Do Little - Pet Shop" />
          <Proyecto img="../public/amazing.webp"
            descripcion="Proyecto de Front-end donde se muestran diferentes eventos, los cuales se filtran en pasados y futuros. Tiene la opción de buscar un evento por nombre."
            titulo="Amazing Events" />
        </div>
      </section>
      <Contacto />
    </section>
  </main>
  <footer class="p-4 shadow-lg rounded-lg w-full flex items-center justify-center bg-white">
    <p class="text-sm p-4">
      © 2025 Bruno Marcos Ferreira. Todos los derechos reservados.
    </p>
  </footer>
</template>
<style scoped>
nav a {
  color: #333;
  /* Color original del texto */
  text-decoration: none;
  /* Quita el subrayado por defecto */
  padding: 10px 15px;
  font-weight: 500;
  /* Añadimos una transición para que el cambio de color sea suave */
  transition: color 0.3s ease;
}

nav a:hover {
  color: #4ade80;
  /* Color que tomará al pasar el cursor (un verde similar al de tu imagen) */
}
</style>
