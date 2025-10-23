<template>
  <div class="education-component-light w-full">
    <h2 class="education-title-light">Educación</h2>
    <div class="timeline-container">
      <div class="timeline-item" v-for="(edu, index) in education" :key="index">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <p class="education-dates-light">{{ edu.dates }}</p>
          <h3 class="education-degree-light">{{ edu.degree }}</h3>
          <p class="education-academy-light">{{ edu.academy }}</p>
          <p class="education-description-light" v-if="edu.description">
            {{ edu.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationComponentLight",
  data() {
    return {
      education: [
        {
          academy: "TODOCODE ACADEMY",
          degree: "SPRING SECURITY",
          dates: "En desarrollo",
          description:
            "Curso enfocado en la implementación de seguridad en aplicaciones Spring.",
        },
        {
          academy: "TODOCODE ACADEMY",
          degree: "MICROSERVICIOS CON SPRING CLOUD",
          dates: "Noviembre 2024 - Enero 2025",
          description:
            "Curso intensivo sobre desarrollo de microservicios utilizando Spring Cloud y tecnologías relacionadas.",
        },
        {
          academy: "C.E.P N° 62 SUPERIOR, MISIONES",
          degree: "ANALISTA DE SISTEMAS",
          dates: "Marzo 2020 - Diciembre 2024",
          description:
            "Formación completa en análisis, diseño e implementación de sistemas informáticos.",
        },
        {
          academy: "MINDHUB",
          degree: "DESARROLLADOR WEB JAVA",
          dates: "Julio 2023 - Octubre 2023",
          description:
            "Programa de desarrollo Full Stack con énfasis en Java, Spring Boot y tecnologías frontend.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.education-component-light {
  background-color: #ffffff; /* Fondo blanco */
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  font-family: "Segoe UI", "Roboto", sans-serif; /* Fuente limpia y moderna */
  color: #333;
}

.education-title-light {
  font-size: 1.9em;
  font-weight: 600;
  color: #2ecc71; /* Verde azulado similar al de la primera imagen */
  margin-bottom: 40px;
  text-align: left;
}

.timeline-container {
  position: relative;
  padding-left: 25px; /* Espacio para la línea de tiempo */
}

.timeline-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 10px; /* Posición de la línea */
  width: 2px;
  height: 100%;
  background-color: #e0e0e0; /* Color de la línea */
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;
  padding-left: 20px; /* Espacio entre el punto y el contenido */
}

.timeline-dot {
  position: absolute;
  top: 5px; /* Ajusta la posición vertical del punto */
  left: 0;
  width: 12px;
  height: 12px;
  background-color: #2ecc71; /* Color del punto, el mismo verde azulado */
  border-radius: 50%;
  border: 2px solid #ffffff; /* Borde blanco para el punto */
  box-shadow: 0 0 0 2px #2ecc71; /* Sombra alrededor del punto */
  z-index: 1; /* Asegura que el punto esté sobre la línea */
}

.education-dates-light {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 5px;
  font-weight: 600;
}

.education-degree-light {
  font-size: 1.3em;
  font-weight: 700;
  color: #333;
  margin-bottom: 5px;
}

.education-academy-light {
  font-size: 1em;
  color: #555;
  margin-bottom: 10px;
}

.education-description-light {
  font-size: 0.9em;
  color: #777;
  line-height: 1.5;
}
</style>
