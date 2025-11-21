<script setup>
import About from './components/About.vue'
import Contact from './components/Contact.vue';
import Education from './components/Education.vue';
import Header from './components/Header.vue'
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
    <div class="layout-container flex h-full grow flex-col">
      <div class="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
        <div class="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
          <Header />
          <main class="flex flex-col gap-12 md:gap-20 mt-10">
            <About />
            <Projects />
            <Education />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>
