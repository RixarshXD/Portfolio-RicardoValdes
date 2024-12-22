import { useState, useEffect } from "react";
import { githubServices } from "../githubAPI/GithubAPI";
export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const githubUsername = "RixarshXD";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await githubServices.getUserRepos(githubUsername);
        setProjects(data);
      } catch (error) {
        setError("Error al obtener los proyectos");
        console.error("Error al obtener los proyectos", error);
      }
    };
    fetchProjects();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  if (projects.length === 0) {
    return <div>Cargando...</div>;
  }
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-dark">
          Mis Proyectos
        </h2>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Proyectos en GitHub
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <li key={project.id} className="list-none">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 h-full">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      {project.name}
                    </h3>
                    <p className="text-gray-600">
                      {project.description || "Sin Descripción"}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
