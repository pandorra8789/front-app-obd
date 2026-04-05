import Link from "next/link";
import { Cpu, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  product: [
    { href: "/downloads", label: "Скачать" },
    { href: "/pricing", label: "Тарифы" },
  ],
  company: [
    { href: "#", label: "О приложении" },
    { href: "#", label: "Контакты" },
  ],
  legal: [
    { href: "#", label: "Политика конфиденциальности" },
    { href: "#", label: "Условия использования" },
  ],
};

export function Footer() {
  return (
    <footer className="relative">
      {/* CTA Section - seamless transition from pricing */}
      <div className="relative overflow-hidden py-20 sm:py-28">
        {/* Continuous grid background - matches previous sections */}
        <div className="absolute inset-0 isometric-grid opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-muted/40" />
        
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.55_0.14_165_/_0.06),transparent_60%)]" />
        
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Готовы </span>
            <span className="gradient-text">трансформировать</span>
            <br />
            <span className="text-foreground">диагностику авто?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Присоединяйтесь к тысячам автовладельцев, которые уже используют
            AI4Car для интеллектуальной диагностики.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" variant="glow">
              <Link href="/downloads">
                Скачать бесплатно
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer links - subtle separator */}
      <div className="relative bg-muted/30">
        {/* Very subtle top line instead of hard border */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Cpu className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold text-foreground">
                  AI4<span className="text-primary">Car</span>
                </span>
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Умный OBD2-сканер с AI-аналитикой для диагностики автомобиля.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:support@ai4car.com" className="transition-colors hover:text-primary">
                  support@ai4car.com
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Продукт</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Компания</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Правовая информация</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8">
            {/* Subtle separator */}
            <div className="mb-8 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} AI4Car. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
