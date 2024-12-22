export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-dark text-dark"
    >
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hola, soy <span className="text-primary">Ricardo Valdés</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Desarrollador Junior Frontend y Backend
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact").scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition-colors "
        >
          Contáctame
        </a>
      </div>
    </section>
  );
};
