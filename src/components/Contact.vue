<template>
    <section class="p-4 pt-10" id="contact">
        <div class="bg-[#172033] border border-white/10 rounded-lg p-6 md:p-10 text-center">
            <h2 class="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">Contacto
            </h2>
            <p class="text-[#90a4cb] mt-2 max-w-xl mx-auto">Estoy buscando activamente nuevas
                oportunidades y me encantaría saber de usted. Si tiene alguna pregunta o simplemente
                quiere saludar, no dude en enviarme un mensaje.</p>
            <form class="mt-8 flex flex-col gap-4 max-w-lg mx-auto">
                <input
                    class="w-full h-12 px-4 bg-[#222f49] text-white border-white/10 rounded-lg placeholder:text-[#90a4cb] focus:ring-primary focus:border-primary"
                    placeholder="Tu Nombre" type="text" autocomplete="given-name" />
                <input
                    class="w-full h-12 px-4 bg-[#222f49] text-white border-white/10 rounded-lg placeholder:text-[#90a4cb] focus:ring-primary focus:border-primary"
                    placeholder="Tu Email" type="email" autocomplete="email"/>
                <textarea
                    class="w-full p-4 bg-[#222f49] text-white border-white/10 rounded-lg placeholder:text-[#90a4cb] focus:ring-primary focus:border-primary"
                    placeholder="Tu Mensaje" rows="5"></textarea>
                <button
                    class="flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-blue-500 hover:bg-blue-600 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] mx-auto"
                    type="submit">
                    <span class="truncate">Enviar Mensaje</span>
                </button>
            </form>
        </div>
    </section>
</template>
<style scoped>
textarea {
    resize: none;
}
</style>