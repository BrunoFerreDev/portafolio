<template>
  <section id="habilidades" class="bg-white p-8 shadow-lg rounded-lg w-full">
    <h2 class="text-2xl">Habilidades</h2>
    <div class="flex flex-wrap gap-3 justify-center mt-10">
      <div class="skill-bar">
        <div class="skill-info">
          <span class="skill-label">HTML, CSS</span>
          <span class="skill-percentage">80%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" :style="barStyle"></div>
        </div>
      </div>
      <div class="skill-bar">
        <div class="skill-info">
          <span class="skill-label">JavaScript</span>
          <span class="skill-percentage">80%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" :style="barStyle"></div>
        </div>
      </div>
      <div class="skill-bar">
        <div class="skill-info">
          <span class="skill-label">Tailwind CSS</span>
          <span class="skill-percentage">80%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" :style="barStyle"></div>
        </div>
      </div>
      <div class="skill-bar">
        <div class="skill-info">
          <span class="skill-label">Vue.js</span>
          <span class="skill-percentage">80%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" :style="barStyle"></div>
        </div>
      </div>
      <div class="skill-bar">
        <div class="skill-info">
          <span class="skill-label">Java</span>
          <span class="skill-percentage">80%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" :style="barStyle"></div>
        </div>
      </div>
      <div class="skill-bar">
        <div class="skill-info">
          <span class="skill-label">Spring Boot</span>
          <span class="skill-percentage">80%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" :style="barStyle"></div>
        </div>
      </div>
      <div class="skill-bar">
        <div class="skill-info">
          <span class="skill-label">Git</span>
          <span class="skill-percentage">80%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" :style="barStyle"></div>
        </div>
      </div>
      <div class="skill-bar">
        <div class="skill-info">
          <span class="skill-label">GitHub</span>
          <span class="skill-percentage">80%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" :style="barStyle"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { computed } from "vue";

// Definimos las propiedades (props) que el componente aceptará
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
    // Validador para asegurar que el porcentaje esté entre 0 y 100
    validator: (value) => value >= 0 && value <= 100,
  },
});

// Creamos un estilo computado para la barra de progreso
// Esto permite que el ancho y el color sean dinámicos según las props
const barStyle = computed(() => ({
  backgroundColor: "rgb(60, 181, 105)",
}));
</script>

<style scoped>
/* Estilos para el contenedor principal */
.skill-bar {
  width: 80%;
  margin-bottom: 1.5rem; /* Espacio entre barras */
}

/* Estilos para la información (etiqueta y porcentaje) */
.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #333;
}

/* La pista o fondo de la barra de progreso */
.progress-track {
  background-color: #e0e0e0;
  border-radius: 10px;
  height: 12px; /* Un poco más gruesa para mejor visibilidad */
  overflow: hidden; /* Asegura que el relleno no se salga de los bordes redondeados */
}

/* El relleno de la barra que indica el progreso */
.progress-fill {
  height: 100%;
  border-radius: 10px;
}
</style>
