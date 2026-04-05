import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Download,
  CheckCircle,
  Bluetooth,
  Wifi,
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
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Скачать AI4Car
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Выберите способ установки и начните диагностику автомобиля уже
            сегодня.
          </p>
        </div>

        {/* Download options */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {downloadOptions.map((option) => (
            <div
              key={option.platform}
              className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
                option.recommended
                  ? "border-primary bg-primary/5 ring-1 ring-primary"
                  : "border-border bg-card"
              }`}
            >
              {option.recommended && (
                <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Рекомендуется
                </div>
              )}

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <option.icon className="h-7 w-7" />
              </div>

              <h2 className="mt-4 text-xl font-semibold text-card-foreground">
                {option.platform}
              </h2>
              <p className="mt-2 flex-1 text-muted-foreground">
                {option.description}
              </p>

              <Button
                asChild
                className="mt-6"
                variant={option.recommended ? "default" : "outline"}
              >
                <a href={option.href}>{option.buttonText}</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Системные требования
          </h2>

          <div className="mx-auto mt-8 max-w-xl">
            <div className="rounded-xl border border-border bg-card p-6">
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-card-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Bluetooth className="h-5 w-5" />
                <span className="text-sm">Bluetooth</span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="h-5 w-5" />
                <span className="text-sm">Wi-Fi</span>
              </div>
            </div>
          </div>
        </div>

        {/* How to get started */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Как начать
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="mt-4 font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
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
