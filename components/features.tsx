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
    <section className="relative py-24 sm:py-32">
      {/* Seamless continuation of grid from hero - no border */}
      <div className="absolute inset-0 isometric-grid opacity-30" />
      
      {/* Very subtle gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/60" />
      
      {/* Subtle decorative background elements - light infographics */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuit-like decorative lines */}
        <svg className="absolute left-0 top-1/4 h-64 w-64 -translate-x-1/2 opacity-[0.04]" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground" />
        </svg>
        
        <svg className="absolute right-0 bottom-1/4 h-80 w-80 translate-x-1/3 opacity-[0.03]" viewBox="0 0 200 200" fill="none">
          <rect x="40" y="40" width="120" height="120" rx="8" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
          <rect x="60" y="60" width="80" height="80" rx="4" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
        </svg>
        
        {/* Dotted decorative pattern */}
        <svg className="absolute left-1/4 top-12 h-32 w-32 opacity-[0.05]" viewBox="0 0 100 100" fill="none">
          <circle cx="10" cy="10" r="2" fill="currentColor" className="text-primary" />
          <circle cx="30" cy="10" r="2" fill="currentColor" className="text-accent" />
          <circle cx="50" cy="10" r="2" fill="currentColor" className="text-primary" />
          <circle cx="70" cy="10" r="2" fill="currentColor" className="text-accent" />
          <circle cx="90" cy="10" r="2" fill="currentColor" className="text-primary" />
          <circle cx="10" cy="30" r="2" fill="currentColor" className="text-accent" />
          <circle cx="50" cy="30" r="2" fill="currentColor" className="text-primary" />
          <circle cx="90" cy="30" r="2" fill="currentColor" className="text-accent" />
          <circle cx="30" cy="50" r="2" fill="currentColor" className="text-primary" />
          <circle cx="70" cy="50" r="2" fill="currentColor" className="text-accent" />
        </svg>
      </div>
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Что делает </span>
            <span className="gradient-text">AI4Car</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Современные инструменты диагностики с мощью искусственного
            интеллекта для вашего автомобиля.
          </p>
        </div>

        {/* Features grid - floating cards without borders */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl p-6 transition-all duration-300 hover:bg-card/60"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Subtle hover background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative">
                {/* Icon with improved styling */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 text-primary transition-all duration-300 group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:glow-primary">
                  <feature.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
