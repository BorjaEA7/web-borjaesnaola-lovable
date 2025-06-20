
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=2070&q=80"
          alt="Interior Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white zaguan-container">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="zaguan-heading text-white mb-6">
            Arquitectura e
            <br />
            Interiorismo
          </h1>
          <p className="zaguan-subheading text-white/90 max-w-2xl mx-auto mb-8">
            Transformamos espacios en experiencias únicas que reflejan la
            personalidad y necesidades de cada cliente a través del diseño
            arquitectónico y de interiores.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("proyectos");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="zaguan-button bg-white text-zaguan-900 hover:bg-zaguan-100 border-white hover:border-zaguan-100"
          >
            Ver Proyectos
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
