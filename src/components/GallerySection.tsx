import haircutSample from "@/assets/haircut-sample.png";

const GallerySection = () => {
  // Simulando galeria com a imagem disponível + placeholders para demonstração
  const works = [
    { id: 1, image: haircutSample, title: "Corte Degradê Premium" },
    { id: 2, image: haircutSample, title: "Barba & Cabelo Completo" },
    { id: 3, image: haircutSample, title: "Corte Social Moderno" },
    { id: 4, image: haircutSample, title: "Estilo Clássico" },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Trabalhos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos melhores trabalhos e inspire-se para seu próximo visual
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work, index) => (
            <div
              key={work.id}
              className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-orange transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-foreground">{work.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
