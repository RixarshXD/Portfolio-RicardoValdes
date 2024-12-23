import foto from "../img/foto.jpg";
import { LinksRedes } from "./LinksRedes";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-light">
      <div className="container mx-auto flex flex-col items-center justify-center py-8">
        <h2 className="flex flex-col text-4xl font-bold mb-8 text-center text-dark">
          Sobre mi
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          <div className="flex flex-col items-center md:w-1/2 space-y-8">
            <img
              src={foto}
              alt="Ricardo"
              className="rounded-full w-64 h-64 object-cover mx-auto "
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
            <div className="md:w-11/12">
              <LinksRedes />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
