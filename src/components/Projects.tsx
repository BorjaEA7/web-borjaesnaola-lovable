
import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Casa Moderna Minimalista",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    description: "Diseño contemporáneo que maximiza la luz natural y los espacios abiertos.",
  },
  {
    id: 2,
    title: "Oficina Corporativa",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    description: "Espacio de trabajo innovador que fomenta la colaboración y creatividad.",
  },
  {
    id: 3,
    title: "Loft Industrial",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    description: "Transformación de espacio industrial en vivienda contemporánea.",
  },
  {
    id: 4,
    title: "Restaurante Boutique",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    description: "Ambiente sofisticado que combina confort y experiencia gastronómica.",
  },
  {
    id: 5,
    title: "Penthouse Urbano",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    description: "Lujo y funcionalidad en un espacio con vistas panorámicas.",
  },
  {
    id: 6,
    title: "Showroom Tecnológico",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    description: "Espacio de exhibición que integra tecnología y diseño vanguardista.",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = ["Todos", "Residencial", "Comercial"];
  
  const filteredProjects = selectedCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="proyectos" className="zaguan-section">
      <div className="zaguan-container">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="zaguan-heading text-zaguan-900 mb-6">
            Nuestros Proyectos
          </h2>
          <p className="zaguan-subheading max-w-3xl mx-auto">
            Cada proyecto es una historia única de transformación espacial,
            donde la arquitectura y el interiorismo se fusionan para crear
            experiencias memorables.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex justify-center mb-12 transition-all duration-800 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-zaguan-900 text-white"
                    : "bg-white text-zaguan-700 border border-zaguan-300 hover:border-zaguan-900 hover:text-zaguan-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-800 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`zaguan-card cursor-pointer group animate-fade-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <span className="inline-block px-3 py-1 bg-white/90 text-zaguan-900 text-xs font-medium rounded-full mb-2">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-zaguan-serif font-medium text-zaguan-900 mb-2 group-hover:text-zaguan-700 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-zaguan-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="max-w-4xl w-full bg-white rounded-lg overflow-hidden animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject)!;
                return (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-96 object-cover"
                    />
                    <div className="p-6 lg:p-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-zaguan-100 text-zaguan-900 text-sm font-medium rounded-full">
                          {project.category}
                        </span>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-zaguan-400 hover:text-zaguan-900 transition-colors duration-200"
                        >
                          <X size={24} />
                        </button>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-zaguan-serif font-medium text-zaguan-900 mb-4">
                        {project.title}
                      </h3>
                      <p className="text-zaguan-600 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <p className="text-zaguan-600 leading-relaxed">
                        Este proyecto representa nuestra filosofía de diseño, donde cada elemento
                        ha sido cuidadosamente seleccionado para crear un espacio que no solo
                        es visualmente impactante, sino también profundamente funcional y
                        adaptado a las necesidades específicas del cliente.
                      </p>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
