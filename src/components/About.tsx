
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="zaguan-section bg-zaguan-50"
    >
      <div className="zaguan-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-800 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="zaguan-heading text-zaguan-900 mb-6">
              Nosotros
            </h2>
            <div className="space-y-6">
              <p className="zaguan-subheading">
                Somos un estudio de arquitectura e interiorismo con más de 15
                años de experiencia creando espacios únicos y funcionales que
                reflejan la personalidad de nuestros clientes.
              </p>
              <p className="text-zaguan-600 leading-relaxed">
                Nuestro enfoque se basa en la comprensión profunda de las
                necesidades de cada proyecto, combinando funcionalidad,
                estética y sostenibilidad para crear espacios que trascienden
                las tendencias y perduran en el tiempo.
              </p>
              <p className="text-zaguan-600 leading-relaxed">
                Cada proyecto es una oportunidad para explorar nuevas
                posibilidades y desafiar los límites del diseño
                convencional, siempre manteniendo un equilibrio perfecto entre
                innovación y practicidad.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              {[
                { number: "150+", label: "Proyectos" },
                { number: "15+", label: "Años" },
                { number: "98%", label: "Satisfacción" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-zaguan-serif font-medium text-zaguan-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-zaguan-600 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-800 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
                alt="Nuestro Equipo"
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
