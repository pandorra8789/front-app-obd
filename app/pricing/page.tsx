import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Check, X, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Тарифы - AI4Car OBD2 Scanner",
  description:
    "Выберите подходящий тариф AI4Car. Бесплатный, Pro или Premium с глубоким AI-анализом.",
};

const tiers = [
  {
    name: "Бесплатный",
    price: "$0",
    period: null,
    description: "Базовые возможности для начала работы с OBD2 диагностикой",
    buttonText: "Начать бесплатно",
    buttonVariant: "outline" as const,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$10",
    period: "месяц",
    description: "Расширенные инструменты для автолюбителей и энтузиастов",
    buttonText: "Выбрать Pro",
    buttonVariant: "glow" as const,
    highlighted: true,
  },
  {
    name: "Premium",
    price: "$20",
    period: "месяц",
    description: "Максимальные возможности AI-аналитики для профессионалов",
    buttonText: "Выбрать Premium",
    buttonVariant: "accent" as const,
    highlighted: false,
  },
];

const features = [
  {
    name: "Базовое сканирование ошибок",
    free: true,
    pro: true,
    premium: true,
  },
  {
    name: "Чтение кодов OBD2",
    free: true,
    pro: true,
    premium: true,
  },
  {
    name: "Сброс индикатора Check Engine",
    free: true,
    pro: true,
    premium: true,
  },
  {
    name: "Сканирований в месяц",
    free: "5",
    pro: "Безлимит",
    premium: "Безлимит",
  },
  {
    name: "История ошибок",
    free: false,
    pro: true,
    premium: true,
  },
  {
    name: "Расширенная диагностика",
    free: false,
    pro: true,
    premium: true,
  },
  {
    name: "AI-анализ (запросов/месяц)",
    free: false,
    pro: "50",
    premium: "500",
  },
  {
    name: "Прогнозирование проблем",
    free: false,
    pro: false,
    premium: true,
  },
  {
    name: "Экспорт отчётов",
    free: false,
    pro: false,
    premium: true,
  },
  {
    name: "Приоритетная поддержка",
    free: false,
    pro: false,
    premium: true,
  },
];

const faqs = [
  {
    question: "Какой адаптер мне нужен?",
    answer:
      "AI4Car совместим с любым ELM327-совместимым OBD2 адаптером. Рекомендуем использовать адаптеры с Bluetooth 4.0+ для лучшей производительности.",
  },
  {
    question: "Могу ли я сменить тариф?",
    answer:
      "Да, вы можете перейти на другой тариф в любое время. При повышении тарифа изменения вступят в силу немедленно, при понижении — в следующем расчётном периоде.",
  },
  {
    question: "Что означает AI-анализ?",
    answer:
      "AI-анализ — это использование искусственного интеллекта для интерпретации кодов ошибок, предоставления понятных объяснений и рекомендаций по устранению проблем.",
  },
  {
    question: "Есть ли возврат средств?",
    answer:
      "Да, мы предоставляем полный возврат в течение 14 дней с момента подписки, если вы не удовлетворены сервисом.",
  },
];

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm font-medium text-primary">{value}</span>;
  }
  if (value) {
    return (
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
        <Check className="h-3.5 w-3.5 text-primary" />
      </div>
    );
  }
  return <X className="h-5 w-5 text-muted-foreground/30" />;
}

export default function PricingPage() {
  return (
    <div className="relative py-16 sm:py-24">
      {/* Background */}
      <div className="absolute inset-0 isometric-grid opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Выберите свой </span>
            <span className="gradient-text">тариф</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Прозрачные цены без скрытых платежей. Начните бесплатно и
            обновляйтесь по мере необходимости.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 sm:p-8",
                tier.highlighted
                  ? "border-primary/50 bg-gradient-to-b from-primary/10 to-card glow-orange"
                  : "border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card"
              )}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Популярный
                </div>
              )}

              <h2 className={cn(
                "text-xl font-semibold",
                tier.highlighted ? "text-primary" : "text-card-foreground"
              )}>
                {tier.name}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {tier.description}
              </p>

              <div className="mt-6">
                <span className={cn(
                  "text-4xl font-bold",
                  tier.highlighted ? "gradient-text" : "text-card-foreground"
                )}>
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-muted-foreground">/{tier.period}</span>
                )}
              </div>

              <Button
                asChild
                variant={tier.buttonVariant}
                className="mt-8 w-full"
              >
                <a href="#">{tier.buttonText}</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Feature comparison table */}
        <div className="mt-24">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            <span className="text-foreground">Сравнение </span>
            <span className="gradient-text">возможностей</span>
          </h2>

          <div className="mt-12 overflow-hidden rounded-2xl border border-border/50">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50 bg-muted/30">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Возможность
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-muted-foreground">
                    Бесплатный
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary">
                    Pro
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-accent">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {features.map((feature) => (
                  <tr key={feature.name} className="bg-card/30 transition-colors hover:bg-card/50">
                    <td className="px-6 py-4 text-sm text-card-foreground">
                      {feature.name}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center">
                        <FeatureValue value={feature.free} />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center">
                        <FeatureValue value={feature.pro} />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center">
                        <FeatureValue value={feature.premium} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            <span className="text-foreground">Часто задаваемые </span>
            <span className="gradient-text">вопросы</span>
          </h2>

          <div className="mx-auto mt-12 max-w-3xl divide-y divide-border/50 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-6">
                <h3 className="flex items-center gap-3 font-semibold text-foreground">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <HelpCircle className="h-4 w-4 text-primary" />
                  </div>
                  {faq.question}
                </h3>
                <p className="mt-3 pl-9 text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
