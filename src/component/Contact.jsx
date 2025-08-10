function Contact() {
  return (
    <>
      <div
        className="flex flex-col gap-4 container mx-auto items-start justify-around p-10 max-w-2xl"
        id="contact"
      >
        <h4 className="text-3xl font-bold py-2">Contactame</h4>
        <form className="flex flex-col gap-5 w-full px-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="flex flex-col gap-2">
              Nombre:
              <input type="text" id="name" className="border p-3 rounded" />
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="flex flex-col gap-2">
              Email:
              <input type="email" id="email" className="border p-3 rounded" />
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="flex flex-col gap-2">
              Mensaje:
              <textarea
                id="message"
                rows="6"
                maxLength={"500"}
                className="border p-3 rounded"
              ></textarea>
            </label>
          </div>
          <button className="bg-violet-400 text-white font-bold p-3 rounded">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
export default Contact;
