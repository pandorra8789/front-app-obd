import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PricingCard, type PricingTier } from "@/components/pricing-card";
import { ArrowRight } from "lucide-react";

const pricingTiers: PricingTier[] = [
  {
    name: "Бесплатный",
    price: "$0",
    description: "Базовые возможности для начала работы",
    features: [
      "Базовое сканирование ошибок",
      "Чтение кодов OBD2",
      "Сброс индикатора Check Engine",
      "До 5 сканирований в месяц",
    ],
    buttonText: "Начать бесплатно",
    buttonVariant: "outline",
  },
  {
    name: "Pro",
    price: "$10",
    period: "месяц",
    description: "Расширенные инструменты для энтузиастов",
    features: [
      "Все возможности бесплатного плана",
      "Неограниченные сканирования",
      "Полная история ошибок",
      "Расширенная диагностика",
      "Базовый AI-анализ (50 запросов)",
    ],
    highlighted: true,
    buttonText: "Выбрать Pro",
  },
  {
    name: "Premium",
    price: "$20",
    period: "месяц",
    description: "Максимальные возможности AI-аналитики",
    features: [
      "Все возможности Pro плана",
      "Глубокий AI-анализ (500 запросов)",
      "Прогнозирование проблем",
      "Приоритетная поддержка",
      "Экспорт отчётов",
    ],
    buttonText: "Выбрать Premium",
    buttonVariant: "accent",
  },
];

export function PricingPreview() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Выберите свой тариф
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Начните бесплатно и обновляйтесь по мере необходимости. Прозрачные
            цены без скрытых платежей.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild variant="link">
            <Link href="/pricing">
              Подробнее о тарифах
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
