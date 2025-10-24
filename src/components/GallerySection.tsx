import haircutSample from "@/assets/haircut-sample.png";
import barbershopVideo from "@/assets/barbershop-video.mp4";

const GallerySection = () => {

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Trabalhos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos melhores trabalhos e inspire-se para seu próximo visual
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-orange transition-all duration-300 transform hover:-translate-y-2">
            <div className="aspect-square overflow-hidden">
              <img
                src={haircutSample}
                alt="Corte Degradê Premium"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-foreground">Corte Degradê Premium</h3>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-orange transition-all duration-300 transform hover:-translate-y-2">
            <div className="aspect-square overflow-hidden">
              <video
                src={barbershopVideo}
                className="w-full h-full object-cover"
                controls
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
