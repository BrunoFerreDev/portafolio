<template>
  <div
    class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-86"
  >
    <div class="relative h-52 m-2.5 overflow-hidden text-white rounded-md">
      <img :src="img" alt="card-image" />
    </div>
    <div class="p-4">
      <h6 class="mb-2 text-slate-800 text-xl font-semibold">
        {{ titulo }}
      </h6>
      <p class="text-slate-600 leading-normal font-light">
        {{ descripcion }}
      </p>
    </div>
    <div class="px-4 pb-4 pt-0 mt-2">
      <button
        class="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Read more
      </button>
    </div>
  </div>
</template>
<script setup>
defineProps({
  titulo: String,
  descripcion: String,
  img: String,
});
</script>
