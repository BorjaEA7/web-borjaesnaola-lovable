
import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Casa Moderna Minimalista",
    subtitle: "Vivienda unifamiliar en Madrid",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    description: "Diseño contemporáneo que maximiza la luz natural y los espacios abiertos.",
    role: "Arquitecto Principal y Director de Proyecto",
    skills: ["Diseño Arquitectónico", "Interiorismo", "Gestión de Proyecto", "Sostenibilidad"],
    challenge: "Crear un espacio moderno y funcional en un solar urbano reducido, maximizando la entrada de luz natural y la privacidad.",
    solution: "Implementamos un diseño de doble altura con grandes ventanales orientados al sur y patios interiores estratégicos que aportan luz y privacidad.",
    details: "El proyecto se desarrolló durante 18 meses, integrando sistemas de domótica avanzada y materiales sostenibles. La distribución en planta libre permite una gran flexibilidad de uso, mientras que los acabados en madera natural y microcemento aportan calidez y modernidad.",
    gallery: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    title: "Oficina Corporativa",
    subtitle: "Sede central en Barcelona",
    category: "Comercial",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    description: "Espacio de trabajo innovador que fomenta la colaboración y creatividad.",
    role: "Diseñador de Interiores y Consultor de Espacios",
    skills: ["Diseño de Oficinas", "Ergonomía", "Acústica", "Iluminación"],
    challenge: "Transformar un espacio industrial en una oficina moderna que favorezca la productividad y el bienestar de los empleados.",
    solution: "Creamos zonas diferenciadas con mobiliario modular, implementamos soluciones acústicas naturales y diseñamos espacios de descanso integrados.",
    details: "El proyecto abarcó 1200m² distribuidos en espacios de trabajo colaborativo, salas de reuniones con tecnología integrada, zona de descanso y cafetería. Se utilizaron materiales reciclados y sistemas de iluminación LED eficientes.",
    gallery: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 3,
    title: "Loft Industrial",
    subtitle: "Rehabilitación en el centro histórico",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    description: "Transformación de espacio industrial en vivienda contemporánea.",
    role: "Arquitecto de Rehabilitación",
    skills: ["Rehabilitación", "Estructuras", "Instalaciones", "Diseño Interior"],
    challenge: "Conservar el carácter industrial original mientras se adapta el espacio para uso residencial moderno.",
    solution: "Mantuvimos elementos estructurales originales como vigas de hierro y ladrillo visto, integrándolos con nuevos materiales contemporáneos.",
    details: "La rehabilitación respetó la estructura original del siglo XIX, incorporando nuevas instalaciones ocultas y creando un altillo para el área de descanso. Los 180m² se distribuyen en planta libre con zonas diferenciadas mediante mobiliario.",
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = ["Todos", "Residencial", "Comercial"];
  
  const filteredProjects = selectedCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const selectedProjectData = selectedProject ? projects.find(p => p.id === selectedProject) : null;

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

  const nextImage = () => {
    if (selectedProjectData) {
      setCurrentImageIndex((prev) => 
        prev === selectedProjectData.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProjectData) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProjectData.gallery.length - 1 : prev - 1
      );
    }
  };

  const openProject = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
  };

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
                className={`px-6 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-full ${
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
              className="relative overflow-hidden rounded-2xl cursor-pointer group h-80 animate-fade-up"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              onClick={() => openProject(project.id)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 bg-white/90 text-zaguan-900 text-xs font-medium rounded-full backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-zaguan-serif font-medium mb-2 group-hover:transform group-hover:translate-y-[-4px] transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && selectedProjectData && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 animate-fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="max-w-6xl w-full bg-white rounded-lg overflow-hidden animate-scale-in max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative">
                <div className="relative h-64 lg:h-80">
                  <img
                    src={selectedProjectData.gallery[currentImageIndex]}
                    alt={selectedProjectData.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gallery Navigation */}
                  {selectedProjectData.gallery.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-zaguan-900 p-2 rounded-full transition-all duration-200"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-zaguan-900 p-2 rounded-full transition-all duration-200"
                      >
                        <ChevronRight size={20} />
                      </button>
                      
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProjectData.gallery.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white text-zaguan-900 p-2 rounded-full transition-all duration-200"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-zaguan-100 text-zaguan-900 text-sm font-medium rounded-full">
                          {selectedProjectData.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-zaguan-serif font-medium text-zaguan-900 mb-2">
                        {selectedProjectData.title}
                      </h3>
                      <p className="text-xl text-zaguan-600 mb-6">
                        {selectedProjectData.subtitle}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-zaguan-serif font-medium text-zaguan-900 mb-3">Reto del Proyecto</h4>
                      <p className="text-zaguan-600 leading-relaxed">
                        {selectedProjectData.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-zaguan-serif font-medium text-zaguan-900 mb-3">Solución</h4>
                      <p className="text-zaguan-600 leading-relaxed">
                        {selectedProjectData.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-zaguan-serif font-medium text-zaguan-900 mb-3">Detalle del Proyecto</h4>
                      <p className="text-zaguan-600 leading-relaxed">
                        {selectedProjectData.details}
                      </p>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-zaguan-serif font-medium text-zaguan-900 mb-3">Mi Rol</h4>
                      <p className="text-zaguan-600">
                        {selectedProjectData.role}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-zaguan-serif font-medium text-zaguan-900 mb-3">Competencias</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProjectData.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-zaguan-50 text-zaguan-700 text-sm rounded-full border border-zaguan-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
