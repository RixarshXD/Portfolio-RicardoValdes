export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark text-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Contáctame</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ingrese su nombre"
                className="w-full px-4 py-2 rounded bg-gray-200 text-light"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingrese su email"
                className="w-full px-4 py-2 rounded bg-gray-200 text-light"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Ingrese su mensaje"
                className="w-full px-4 py-2 rounded bg-gray-200 text-light"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-secondary transition-colors"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
