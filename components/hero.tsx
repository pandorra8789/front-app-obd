"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scan, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-background">
      {/* Isometric grid background */}
      <div className="absolute inset-0 isometric-grid opacity-30" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.70_0.18_30_/_0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.65_0.15_200_/_0.1),transparent_50%)]" />

      {/* Animated glow lines */}
      <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute left-0 right-0 top-2/3 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
              <Sparkles className="h-4 w-4" />
              <span>OBD2 диагностика с AI-аналитикой</span>
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-foreground">Unified</span>
              <br />
              <span className="gradient-text">Vehicle</span>
              <br />
              <span className="text-foreground">Diagnostics</span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
              Сканируйте ошибки автомобиля, анализируйте их с помощью AI и
              получайте точные рекомендации по устранению неисправностей в
              режиме реального времени.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button asChild size="lg" variant="glow">
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

          {/* Right - Isometric car visualization */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative h-80 w-80 sm:h-96 sm:w-96">
              {/* Outer glow ring */}
              <div className="absolute inset-0 animate-pulse rounded-full border border-primary/20 glow-orange opacity-50" />
              
              {/* Data flow lines */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400">
                {/* Curved data lines */}
                <path
                  d="M50 300 Q 100 250, 200 200 T 350 100"
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  className="glow-line animate-pulse"
                  strokeDasharray="10 5"
                />
                <path
                  d="M30 350 Q 150 300, 200 200 T 380 150"
                  fill="none"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  className="glow-line"
                  style={{ animationDelay: "0.5s" }}
                  strokeDasharray="8 4"
                />
                <path
                  d="M80 380 Q 180 320, 220 220 T 370 80"
                  fill="none"
                  stroke="url(#gradient3)"
                  strokeWidth="1.5"
                  className="glow-line animate-pulse"
                  style={{ animationDelay: "1s" }}
                  strokeDasharray="6 6"
                />
                
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="oklch(0.70 0.18 30)" />
                    <stop offset="100%" stopColor="oklch(0.65 0.15 200)" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="oklch(0.65 0.15 200)" />
                    <stop offset="100%" stopColor="oklch(0.70 0.18 30)" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="oklch(0.80 0.15 50)" />
                    <stop offset="100%" stopColor="oklch(0.65 0.15 200)" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Isometric car wireframe */}
              <div className="absolute inset-8 flex items-center justify-center">
                <svg className="h-full w-full" viewBox="0 0 300 200" fill="none">
                  {/* Car body outline */}
                  <path
                    d="M40 120 L60 100 L100 90 L140 80 L200 80 L240 90 L260 110 L260 130 L40 130 Z"
                    stroke="oklch(0.65 0.15 200)"
                    strokeWidth="1.5"
                    className="glow-line"
                  />
                  {/* Roof */}
                  <path
                    d="M100 90 L110 60 L190 60 L200 80"
                    stroke="oklch(0.65 0.15 200)"
                    strokeWidth="1.5"
                    className="glow-line"
                  />
                  {/* Windows */}
                  <path
                    d="M105 88 L112 65 L150 65 L150 85"
                    stroke="oklch(0.70 0.18 30)"
                    strokeWidth="1"
                  />
                  <path
                    d="M155 65 L188 65 L195 85 L155 85"
                    stroke="oklch(0.70 0.18 30)"
                    strokeWidth="1"
                  />
                  {/* Wheels */}
                  <circle cx="80" cy="135" r="20" stroke="oklch(0.65 0.15 200)" strokeWidth="1.5" className="glow-line" />
                  <circle cx="80" cy="135" r="12" stroke="oklch(0.70 0.18 30)" strokeWidth="1" />
                  <circle cx="220" cy="135" r="20" stroke="oklch(0.65 0.15 200)" strokeWidth="1.5" className="glow-line" />
                  <circle cx="220" cy="135" r="12" stroke="oklch(0.70 0.18 30)" strokeWidth="1" />
                  {/* OBD port indicator */}
                  <circle cx="150" cy="120" r="8" fill="oklch(0.70 0.18 30 / 0.3)" stroke="oklch(0.70 0.18 30)" strokeWidth="1.5" className="animate-pulse" />
                </svg>
              </div>

              {/* Floating data badges */}
              <div className="absolute -right-4 top-12 rounded-lg border border-primary/30 bg-card/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:-right-8">
                <div className="text-xs text-muted-foreground">Код ошибки</div>
                <div className="font-mono text-lg font-bold text-primary">
                  P0420
                </div>
              </div>

              <div className="absolute -left-4 bottom-16 rounded-lg border border-accent/30 bg-card/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:-left-12">
                <div className="text-xs text-muted-foreground">AI анализ</div>
                <div className="text-sm font-semibold text-accent">
                  Катализатор
                </div>
              </div>

              <div className="absolute bottom-4 right-8 rounded-lg border border-border bg-card/90 px-3 py-2 shadow-lg backdrop-blur-sm">
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
