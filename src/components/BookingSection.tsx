import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface Booking {
  date: string;
  time: string;
  name: string;
}

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [customerName, setCustomerName] = useState<string>("");
  const [bookings, setBookings] = useState<Booking[]>([]);

  // Carregar agendamentos do LocalStorage
  useEffect(() => {
    const stored = localStorage.getItem("narnia-bookings");
    if (stored) {
      setBookings(JSON.parse(stored));
    }
  }, []);

  // Horários disponíveis: 8h às 18h (último horário 17h)
  const timeSlots = [
    "08:00", "09:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00", "17:00"
  ];

  // Verificar se um horário está disponível
  const isTimeAvailable = (date: string, time: string) => {
    return !bookings.some(b => b.date === date && b.time === time);
  };

  // Função para agendar
  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !customerName.trim()) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    if (!isTimeAvailable(selectedDate, selectedTime)) {
      toast.error("Este horário já está reservado");
      return;
    }

    const newBooking: Booking = {
      date: selectedDate,
      time: selectedTime,
      name: customerName.trim()
    };

    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem("narnia-bookings", JSON.stringify(updatedBookings));

    toast.success(`Horário agendado com sucesso para ${selectedDate} às ${selectedTime}!`);
    
    // Limpar campos
    setSelectedDate("");
    setSelectedTime("");
    setCustomerName("");
  };

  // Gerar próximos 14 dias úteis (segunda a sexta)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let count = 0;
    let daysAdded = 0;

    while (daysAdded < 14) {
      const date = new Date(today);
      date.setDate(today.getDate() + count);
      const dayOfWeek = date.getDay();
      
      // Apenas dias úteis (1-5 = segunda a sexta)
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        dates.push(date.toISOString().split('T')[0]);
        daysAdded++;
      }
      count++;
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('pt-BR', { 
      weekday: 'short', 
      day: '2-digit', 
      month: 'short' 
    });
  };

  return (
    <section id="agendamento" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Agende Seu <span className="text-primary">Horário</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atendemos de segunda a sexta-feira, das 8h às 18h. Escolha o melhor horário para você!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-orange">
            <div className="space-y-6">
              {/* Nome */}
              <div>
                <label className="block text-sm font-medium mb-2">Seu Nome</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Digite seu nome completo"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              {/* Seleção de Data */}
              <div>
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Escolha a Data
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
                  {availableDates.map((date) => (
                    <button
                      key={date}
                      onClick={() => {
                        setSelectedDate(date);
                        setSelectedTime("");
                      }}
                      className={`p-3 rounded-lg border transition-all text-sm ${
                        selectedDate === date
                          ? "bg-primary text-primary-foreground border-primary shadow-orange"
                          : "border-border hover:border-primary hover:bg-primary/5"
                      }`}
                    >
                      {formatDate(date)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seleção de Horário */}
              {selectedDate && (
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Escolha o Horário
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {timeSlots.map((time) => {
                      const available = isTimeAvailable(selectedDate, time);
                      return (
                        <button
                          key={time}
                          onClick={() => available && setSelectedTime(time)}
                          disabled={!available}
                          className={`p-3 rounded-lg border transition-all ${
                            selectedTime === time
                              ? "bg-primary text-primary-foreground border-primary shadow-orange"
                              : available
                              ? "border-border hover:border-primary hover:bg-primary/5"
                              : "border-border bg-muted text-muted-foreground cursor-not-allowed opacity-50"
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    * Horários em cinza já estão reservados
                  </p>
                </div>
              )}

              {/* Botão de Confirmação */}
              <Button
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime || !customerName.trim()}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all py-6 text-lg shadow-orange"
              >
                Confirmar Agendamento
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
