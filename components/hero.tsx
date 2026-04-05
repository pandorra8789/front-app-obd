import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scan, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,180,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(45,170,150,0.06),transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>OBD2 диагностика с AI-аналитикой</span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            AI4Car — умный OBD2
            <br />
            <span className="text-primary">сканер с AI-аналитикой</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            Сканируйте ошибки автомобиля, анализируйте их с помощью AI и
            получайте точные рекомендации по устранению неисправностей.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/downloads">
                Скачать приложение
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">Посмотреть тарифы</Link>
            </Button>
          </div>
        </div>

        {/* Animated diagnostic visual */}
        <div className="mt-16 flex justify-center sm:mt-20">
          <div className="relative">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-border bg-muted/30 sm:h-80 sm:w-80">
              {/* Scanning rings */}
              <div className="absolute inset-0 animate-pulse rounded-full border-2 border-primary/20" />
              <div
                className="absolute inset-4 animate-pulse rounded-full border-2 border-primary/30"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute inset-8 animate-pulse rounded-full border-2 border-primary/40"
                style={{ animationDelay: "1s" }}
              />

              {/* Center icon */}
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg sm:h-24 sm:w-24">
                <Scan className="h-10 w-10 sm:h-12 sm:w-12" />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -right-4 top-8 rounded-lg border border-border bg-card px-3 py-2 shadow-md sm:-right-12">
              <div className="text-xs text-muted-foreground">Код ошибки</div>
              <div className="font-mono text-sm font-semibold text-foreground">
                P0420
              </div>
            </div>

            <div className="absolute -left-4 bottom-12 rounded-lg border border-border bg-card px-3 py-2 shadow-md sm:-left-16">
              <div className="text-xs text-muted-foreground">AI анализ</div>
              <div className="text-sm font-medium text-accent">
                Катализатор
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
