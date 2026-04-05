import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Download,
  CheckCircle,
  Bluetooth,
  Wifi,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Скачать AI4Car - OBD2 Scanner App",
  description:
    "Скачайте приложение AI4Car для Android. Доступно в Google Play или прямой APK.",
};

const downloadOptions = [
  {
    platform: "Google Play",
    icon: Smartphone,
    description: "Рекомендуемый способ установки с автообновлениями",
    buttonText: "Скачать в Google Play",
    href: "#",
    recommended: true,
  },
  {
    platform: "APK файл",
    icon: Download,
    description: "Прямая загрузка APK для ручной установки",
    buttonText: "Скачать APK",
    href: "#",
    recommended: false,
  },
];

const requirements = [
  "Android 8.0 или новее",
  "Bluetooth 4.0+ или Wi-Fi",
  "OBD2-совместимый адаптер (ELM327)",
  "50 МБ свободного места",
];

const steps = [
  {
    step: 1,
    title: "Скачайте приложение",
    description: "Загрузите AI4Car из Google Play или установите APK",
  },
  {
    step: 2,
    title: "Подключите адаптер",
    description: "Вставьте OBD2 адаптер в диагностический разъём автомобиля",
  },
  {
    step: 3,
    title: "Подключитесь по Bluetooth",
    description: "Откройте приложение и подключитесь к адаптеру",
  },
  {
    step: 4,
    title: "Начните сканирование",
    description: "Запустите диагностику и получите AI-анализ ошибок",
  },
];

export default function DownloadsPage() {
  return (
    <div className="relative py-16 sm:py-24">
      {/* Background */}
      <div className="absolute inset-0 isometric-grid opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Скачать </span>
            <span className="gradient-text">AI4Car</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Выберите способ установки и начните диагностику автомобиля уже
            сегодня.
          </p>
        </div>

        {/* Download options */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {downloadOptions.map((option) => (
            <div
              key={option.platform}
              className={`relative flex flex-col rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 sm:p-8 ${
                option.recommended
                  ? "border-primary/50 bg-gradient-to-b from-primary/10 to-card glow-primary"
                  : "border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card"
              }`}
            >
              {option.recommended && (
                <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Рекомендуется
                </div>
              )}

              <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                option.recommended 
                  ? "bg-primary text-primary-foreground glow-primary" 
                  : "bg-primary/10 text-primary"
              }`}>
                <option.icon className="h-7 w-7" />
              </div>

              <h2 className="mt-5 text-xl font-semibold text-card-foreground">
                {option.platform}
              </h2>
              <p className="mt-2 flex-1 text-muted-foreground">
                {option.description}
              </p>

              <Button
                asChild
                className="mt-6"
                variant={option.recommended ? "glow" : "outline"}
              >
                <a href={option.href}>
                  {option.buttonText}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="mt-24">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            <span className="text-foreground">Системные </span>
            <span className="gradient-text">требования</span>
          </h2>

          <div className="mx-auto mt-8 max-w-xl">
            <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-card-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-card/30 px-4 py-2">
                <Bluetooth className="h-5 w-5 text-accent" />
                <span className="text-sm">Bluetooth</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-card/30 px-4 py-2">
                <Wifi className="h-5 w-5 text-accent" />
                <span className="text-sm">Wi-Fi</span>
              </div>
            </div>
          </div>
        </div>

        {/* How to get started */}
        <div className="mt-24">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            <span className="text-foreground">Как </span>
            <span className="gradient-text">начать</span>
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, index) => (
              <div key={item.step} className="group text-center">
                <div className="relative mx-auto">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-primary-foreground transition-all duration-300 group-hover:glow-primary">
                    {item.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-full top-1/2 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-primary/50 to-transparent lg:block" />
                  )}
                </div>
                <h3 className="mt-5 font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
