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
  buttonVariant?: "default" | "outline" | "accent" | "glow";
}

interface PricingCardProps {
  tier: PricingTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  return (
    <div
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

      <div className="mb-6">
        <h3 className={cn(
          "text-lg font-semibold",
          tier.highlighted ? "text-primary" : "text-card-foreground"
        )}>
          {tier.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
      </div>

      <div className="mb-6">
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

      <ul className="mb-8 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-3.5 w-3.5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant={tier.highlighted ? "glow" : (tier.buttonVariant || "outline")}
        className="w-full"
      >
        <Link href="/pricing">{tier.buttonText}</Link>
      </Button>
    </div>
  );
}
