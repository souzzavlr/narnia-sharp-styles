import plansBanner1 from "@/assets/plans-banner-1.png";
import plansBanner2 from "@/assets/plans-banner-2.png";

const PlansSection = () => {
  return (
    <section id="planos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Planos de Assinatura
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa barbearia por assinatura e garanta seu visual impecável o mês todo!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="group overflow-hidden rounded-xl shadow-soft hover:shadow-orange transition-all duration-300 transform hover:-translate-y-2">
            <img
              src={plansBanner1}
              alt="Planos de Assinatura - Venha na Régua o Mês Todo"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="group overflow-hidden rounded-xl shadow-soft hover:shadow-orange transition-all duration-300 transform hover:-translate-y-2">
            <img
              src={plansBanner2}
              alt="Tabela de Preços - Planos Completos"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
