import { Scissors, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre a <span className="text-primary">Nárnia Barbearia</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Fundada em 2021, a Nárnia Barbearia nasceu com o propósito de oferecer mais do que um simples corte de cabelo. 
            Nossa missão é proporcionar uma experiência completa de cuidado e bem-estar masculino, onde cada cliente é tratado 
            com atenção, profissionalismo e respeito.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-xl bg-card shadow-soft hover:shadow-orange transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Scissors className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Precisão nos Cortes</h3>
            <p className="text-muted-foreground">
              Técnicas modernas e atenção aos detalhes para garantir o corte perfeito para seu estilo.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-card shadow-soft hover:shadow-orange transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Profissionais Qualificados</h3>
            <p className="text-muted-foreground">
              Equipe experiente e atualizada com as últimas tendências e técnicas do mercado.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-card shadow-soft hover:shadow-orange transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Atendimento Premium</h3>
            <p className="text-muted-foreground">
              Ambiente acolhedor e atendimento personalizado para cada cliente.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-accent p-1 rounded-xl">
          <div className="bg-card p-8 md:p-12 rounded-lg text-center">
            <p className="text-2xl md:text-3xl font-semibold text-foreground italic">
              "Na Nárnia, seu estilo é nossa prioridade. Venha experimentar o melhor da barbearia moderna com o toque acolhedor que só nós temos."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
