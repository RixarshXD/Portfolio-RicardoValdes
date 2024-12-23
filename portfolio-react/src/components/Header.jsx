import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="shadow-lg bg-dark text-dark py-4 fixed w-full z-10 bg-slate-100">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">RV</h1>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#home").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="hover:text-primary transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#about").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="hover:text-primary transition-colors"
                >
                  Sobre mi
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#projects").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="hover:text-primary transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact").scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  className="hover:text-primary transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <nav className="md:hidden bg-dark">
            <ul className="flex flex-col items-center py-4">
              <li>
                <a
                  href="#home"
                  className="block py-2 hover:text-primary transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 hover:text-primary transition-colors"
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 hover:text-primary transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 hover:text-primary transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};
