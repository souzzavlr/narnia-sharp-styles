import { Instagram, MessageCircle, MapPin, Clock, Phone } from "lucide-react";
import logo from "@/assets/logo-narnia.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo e Descrição */}
          <div>
            <img src={logo} alt="Nárnia Barbearia" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-muted-foreground mb-4">
              Confiança, elegância e precisão. A melhor experiência em barbearia desde 2021.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Rua Exemplo, 123 - Centro<br />
                  Cidade - Estado, CEP: 00000-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">(00) 00000-0000</span>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Horário</h3>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-muted-foreground">
                <p className="font-semibold text-foreground">Segunda a Sexta</p>
                <p>08:00 - 18:00</p>
                <p className="font-semibold text-foreground mt-2">Sábado e Domingo</p>
                <p>Fechado</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Nárnia Barbearia — Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Since 2021
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
