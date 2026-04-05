"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scan, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-background -mt-16 pt-16">
      {/* Grid background - extends under header */}
      <div className="absolute inset-0 isometric-grid opacity-50" />
      
      {/* Soft gradient overlay - starts below header area */}
      <div className="absolute inset-0 top-20 bg-gradient-to-b from-transparent via-background/30 to-background/80" />
      
      {/* Soft radial accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,oklch(0.55_0.14_165_/_0.06),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,oklch(0.55_0.12_240_/_0.04),transparent)]" />

      {/* Decorative horizontal lines */}
      <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      <div className="absolute left-0 right-0 top-2/3 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              <span>OBD2 диагностика с AI-аналитикой</span>
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-foreground">Unified</span>
              <br />
              <span className="gradient-text">Vehicle</span>
              <br />
              <span className="text-foreground">Diagnostics</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Сканируйте ошибки автомобиля, анализируйте их с помощью AI и
              получайте точные рекомендации по устранению неисправностей в
              режиме реального времени.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" variant="glow">
                <Link href="/downloads" className="flex items-center gap-2">
                  Скачать приложение
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="glow-accent" size="lg">
                <Link href="/pricing">Посмотреть тарифы</Link>
              </Button>
            </div>
          </div>

          {/* Right - Isometric car visualization */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              {/* Outer subtle ring */}
              <div className="absolute inset-0 animate-pulse rounded-full border border-primary/10" />
              
              {/* Data flow lines */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400">
                {/* Curved data lines */}
                <path
                  d="M50 300 Q 100 250, 200 200 T 350 100"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="1.5"
                  className="glow-line animate-pulse"
                  strokeDasharray="10 5"
                />
                <path
                  d="M30 350 Q 150 300, 200 200 T 380 150"
                  fill="none"
                  stroke="url(#gradient2)"
                  strokeWidth="1.5"
                  className="glow-line"
                  style={{ animationDelay: "0.5s" }}
                  strokeDasharray="8 4"
                />
                <path
                  d="M80 380 Q 180 320, 220 220 T 370 80"
                  fill="none"
                  stroke="url(#gradient3)"
                  strokeWidth="1"
                  className="glow-line animate-pulse"
                  style={{ animationDelay: "1s" }}
                  strokeDasharray="6 6"
                />
                
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="oklch(0.55 0.14 165)" />
                    <stop offset="100%" stopColor="oklch(0.55 0.12 240)" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="oklch(0.55 0.12 240)" />
                    <stop offset="100%" stopColor="oklch(0.55 0.14 165)" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="oklch(0.60 0.12 165)" />
                    <stop offset="100%" stopColor="oklch(0.55 0.12 240)" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Isometric car wireframe */}
              <div className="absolute inset-8 flex items-center justify-center">
                <svg className="h-full w-full" viewBox="0 0 300 200" fill="none">
                  {/* Car body outline */}
                  <path
                    d="M40 120 L60 100 L100 90 L140 80 L200 80 L240 90 L260 110 L260 130 L40 130 Z"
                    stroke="oklch(0.55 0.12 240)"
                    strokeWidth="1.5"
                    className="glow-line"
                  />
                  {/* Roof */}
                  <path
                    d="M100 90 L110 60 L190 60 L200 80"
                    stroke="oklch(0.55 0.12 240)"
                    strokeWidth="1.5"
                    className="glow-line"
                  />
                  {/* Windows */}
                  <path
                    d="M105 88 L112 65 L150 65 L150 85"
                    stroke="oklch(0.55 0.14 165)"
                    strokeWidth="1"
                  />
                  <path
                    d="M155 65 L188 65 L195 85 L155 85"
                    stroke="oklch(0.55 0.14 165)"
                    strokeWidth="1"
                  />
                  {/* Wheels */}
                  <circle cx="80" cy="135" r="20" stroke="oklch(0.55 0.12 240)" strokeWidth="1.5" className="glow-line" />
                  <circle cx="80" cy="135" r="12" stroke="oklch(0.55 0.14 165)" strokeWidth="1" />
                  <circle cx="220" cy="135" r="20" stroke="oklch(0.55 0.12 240)" strokeWidth="1.5" className="glow-line" />
                  <circle cx="220" cy="135" r="12" stroke="oklch(0.55 0.14 165)" strokeWidth="1" />
                  {/* OBD port indicator */}
                  <circle cx="150" cy="120" r="8" fill="oklch(0.55 0.14 165 / 0.15)" stroke="oklch(0.55 0.14 165)" strokeWidth="1.5" className="animate-pulse" />
                </svg>
              </div>

              {/* Floating data badges */}
              <div className="absolute -right-2 top-8 rounded-xl border border-primary/15 bg-card/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:-right-6 sm:top-12">
                <div className="text-xs text-muted-foreground">Код ошибки</div>
                <div className="font-mono text-lg font-bold text-primary">
                  P0420
                </div>
              </div>

              <div className="absolute -left-2 bottom-12 rounded-xl border border-accent/15 bg-card/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:-left-10 sm:bottom-16">
                <div className="text-xs text-muted-foreground">AI анализ</div>
                <div className="text-sm font-semibold text-accent">
                  Катализатор
                </div>
              </div>

              <div className="absolute bottom-2 right-6 rounded-xl border border-border/50 bg-card/90 px-3 py-2 shadow-lg backdrop-blur-sm sm:bottom-4 sm:right-8">
                <div className="flex items-center gap-2">
                  <Scan className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-foreground">Сканирование...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
