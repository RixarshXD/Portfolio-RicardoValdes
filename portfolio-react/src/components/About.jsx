export const About = () => {
  return (
    <section id="about" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-dark">
          Sobre mi
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="../img/foto.jpg"
              alt="Ricardo"
              className="rounded-full w-64 h-64 object-cover mx-auto"
            ></img>

            <div className="md:w-11/12">
              <p className="text-lg text-black mb-4">
                Soy un desarrollador Frontend y Backend Junior, Empézando en el
                mundo de la programación, con conocimientos en HTML, CSS,
                JavaScript, React, Node.js, Express, MongoDB, MySQL, entre
                otros.
              </p>
              <p className="text-lg text-dark mb-4">
                Cuando no programo, me gusta aprender e informarme de nuevas
                tecnologias
              </p>
            </div>
            <div>PONER REDES SOCIALES AQUIIII!!!</div>
          </div>
        </div>
      </div>
    </section>
  );
};
