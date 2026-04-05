import { Zap, Shield, Brain, Smartphone, History, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Быстрое сканирование",
    description:
      "Мгновенное чтение кодов ошибок OBD2 через Bluetooth-адаптер. Результаты за секунды.",
  },
  {
    icon: Brain,
    title: "AI-аналитика",
    description:
      "Искусственный интеллект анализирует ошибки и предоставляет понятные объяснения и рекомендации.",
  },
  {
    icon: Shield,
    title: "Точная диагностика",
    description:
      "Поддержка всех стандартных протоколов OBD2. Совместимость с большинством автомобилей с 1996 года.",
  },
  {
    icon: Smartphone,
    title: "Удобный интерфейс",
    description:
      "Интуитивно понятное мобильное приложение для Android. Простота использования для каждого.",
  },
  {
    icon: History,
    title: "История ошибок",
    description:
      "Сохранение истории всех сканирований. Отслеживайте состояние автомобиля с течением времени.",
  },
  {
    icon: Globe,
    title: "Облачная синхронизация",
    description:
      "Ваши данные доступны на любом устройстве. Безопасное хранение в облаке.",
  },
];

export function Features() {
  return (
    <section className="relative border-t border-border/50 py-20 sm:py-28">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute inset-0 isometric-grid opacity-10" />
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-foreground">Что делает </span>
            <span className="gradient-text">AI4Car</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Современные инструменты диагностики с мощью искусственного
            интеллекта для вашего автомобиля.
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(circle at center, oklch(0.70 0.18 30 / 0.05), transparent 70%)' }} />
              
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:glow-orange">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
