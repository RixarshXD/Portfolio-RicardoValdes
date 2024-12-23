import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// se crea el array de las redes sociales
const Links = [
  {
    name: "GitHub",
    url: "https://github.com/RixarshXD",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ricardo-valdés-malla-572643277",
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/__riiki_x__/",
    icon: FaInstagram,
  },
  // añadir mas redes
];

// el componente de las redes
export const LinksRedes = () => {
  return (
    <div className="flex gap-4 mt-4">
      {/* se recorre el array de las redes y se saca el link y el index */}
      {Links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={
            "bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition-colors"
          }
        >
          {link.name}
          {link.icon && <link.icon className="inline mb-1 ml-2" />}
        </a>
      ))}
    </div>
  );
};
