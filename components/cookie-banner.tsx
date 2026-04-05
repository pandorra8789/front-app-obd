"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookie-consent");
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card p-4 shadow-lg sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md sm:rounded-lg sm:border">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <p className="text-sm text-card-foreground">
            Мы используем файлы cookie для улучшения работы сайта и аналитики.
            Продолжая использовать сайт, вы соглашаетесь с использованием cookie.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button size="sm" onClick={handleAccept}>
              Принять
            </Button>
            <Button size="sm" variant="outline" onClick={handleDecline}>
              Отклонить
            </Button>
          </div>
        </div>
        <button
          onClick={handleDecline}
          className="text-muted-foreground hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
