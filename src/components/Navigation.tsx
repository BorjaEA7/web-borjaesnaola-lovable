
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="zaguan-container">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl lg:text-3xl font-zaguan-serif font-medium text-zaguan-900 hover:text-zaguan-700 transition-colors duration-200"
          >
            Zaguan Estudio
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { label: "Home", id: "home" },
              { label: "Nosotros", id: "nosotros" },
              { label: "Proyectos", id: "proyectos" },
              { label: "Servicios", id: "servicios" },
              { label: "Contacto", id: "contacto" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="zaguan-link text-sm font-medium tracking-wide uppercase"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-zaguan-900 hover:text-zaguan-700 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-zaguan-200 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {[
                { label: "Home", id: "home" },
                { label: "Nosotros", id: "nosotros" },
                { label: "Proyectos", id: "proyectos" },
                { label: "Servicios", id: "servicios" },
                { label: "Contacto", id: "contacto" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-medium tracking-wide uppercase text-zaguan-700 hover:text-zaguan-900 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
