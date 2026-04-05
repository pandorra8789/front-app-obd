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
    <section className="border-t border-border bg-muted/20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Что делает AI4Car
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Современные инструменты диагностики с мощью искусственного
            интеллекта для вашего автомобиля.
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
