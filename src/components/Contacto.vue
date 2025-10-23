<template>
  <!-- From Uiverse.io by themrsami -->
  <div id="contacto" class="bg-white p-8 shadow-lg rounded-lg w-full">
    <h2 class="text-2xl">Contacto</h2>
    <div class="mx-auto">
      <div class="mx-auto px-8 py-6 rounded-lg shadow-md">
        <form>
          <div class="mb-4">
            <label class="block text-gray-800 mb-1" for="name">Nombre</label>
            <input
              class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300"
              placeholder="Nombre"
              type="text"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-800 mb-1" for="email"
              >Email</label
            >
            <input
              class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300"
              placeholder="Email"
              name="email"
              id="email"
              type="email"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-800 mb-1" for="message"
              >Mensaje</label
            >
            <textarea
              class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300"
              rows="4"
              placeholder="Mensaje"
              name="message"
              id="message"
            ></textarea>
          </div>
          <button
            class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
