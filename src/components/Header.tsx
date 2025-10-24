import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-narnia.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondary/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Nárnia Barbearia" className="h-12 w-auto brightness-0 invert" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {["inicio", "sobre", "localizacao", "agendamento"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider"
                >
                  {item === "inicio" ? "Início" : item === "sobre" ? "Sobre" : item === "localizacao" ? "Localização" : "Agendamento"}
                </button>
              </li>
            ))}
          </ul>

          <Button
            onClick={() => scrollToSection("agendamento")}
            className="hidden md:flex bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-orange"
          >
            Agendar Horário
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-secondary/98 backdrop-blur-sm border-t border-border">
            <ul className="flex flex-col py-4">
              {["inicio", "sobre", "localizacao", "agendamento"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="w-full text-left px-4 py-3 text-foreground hover:bg-accent/10 transition-colors font-medium uppercase tracking-wider"
                  >
                    {item === "inicio" ? "Início" : item === "sobre" ? "Sobre" : item === "localizacao" ? "Localização" : "Agendamento"}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
