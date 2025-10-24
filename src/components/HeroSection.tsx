import { Button } from "@/components/ui/button";
import interiorImg from "@/assets/barbershop-interior.png";

const HeroSection = () => {
  const scrollToBooking = () => {
    document.getElementById("agendamento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={interiorImg}
          alt="Interior da Nárnia Barbearia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 via-secondary/20 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent">
            Confiança, Elegância
          </span>
          <span className="block text-primary mt-2">e Precisão</span>
        </h1>
        
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          Nárnia Barbearia
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Mais que um corte, uma experiência. Venha descobrir o melhor cuidado masculino em um ambiente exclusivo e acolhedor.
        </p>

        <Button
          onClick={scrollToBooking}
          size="lg"
          className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 shadow-orange hover:shadow-xl"
        >
          Agendar Meu Horário
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
