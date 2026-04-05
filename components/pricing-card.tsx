import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
  buttonVariant?: "default" | "outline" | "accent";
}

interface PricingCardProps {
  tier: PricingTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border bg-card p-6 sm:p-8",
        tier.highlighted
          ? "border-primary shadow-lg ring-1 ring-primary"
          : "border-border"
      )}
    >
      {tier.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
          Популярный
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-card-foreground">
          {tier.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold text-card-foreground">
          {tier.price}
        </span>
        {tier.period && (
          <span className="text-muted-foreground">/{tier.period}</span>
        )}
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant={tier.buttonVariant || (tier.highlighted ? "default" : "outline")}
        className="w-full"
      >
        <Link href="/pricing">{tier.buttonText}</Link>
      </Button>
    </div>
  );
}
