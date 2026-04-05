const features = [
  {
    title: "Быстрое сканирование",
    description:
      "Мгновенное чтение кодов ошибок OBD2 через Bluetooth-адаптер. Результаты за секунды.",
  },
  {
    title: "AI-аналитика",
    description:
      "Искусственный интеллект анализирует ошибки и предоставляет понятные объяснения и рекомендации.",
  },
  {
    title: "Точная диагностика",
    description:
      "Поддержка всех стандартных протоколов OBD2. Совместимость с большинством автомобилей с 1996 года.",
  },
  {
    title: "Удобный интерфейс",
    description:
      "Интуитивно понятное мобильное приложение для Android. Простота использования для каждого.",
  },
  {
    title: "История ошибок",
    description:
      "Сохранение истории всех сканирований. Отслеживайте состояние автомобиля с течением времени.",
  },
  {
    title: "Облачная синхронизация",
    description:
      "Ваши данные доступны на любом устройстве. Безопасное хранение в облаке.",
  },
];

export function Features() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Seamless continuation of grid from hero */}
      <div className="absolute inset-0 isometric-grid opacity-30" />
      
      {/* Very subtle gradient for depth - seamless top transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/50" />
      
      {/* Subtle large typographic background element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-bold tracking-tighter opacity-[0.015] whitespace-nowrap"
          style={{ fontFamily: 'system-ui, sans-serif' }}
        >
          AI4CAR
        </div>
      </div>
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-foreground">Что делает </span>
            <span className="gradient-text">AI4Car</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Современные инструменты диагностики с мощью искусственного
            интеллекта для вашего автомобиля.
          </p>
        </div>

        {/* Features grid with line dividers */}
        <div className="relative mt-20">
          {/* Grid container with CSS grid lines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              // Calculate position for border logic
              const isLastRow = index >= features.length - (features.length % 3 || 3);
              const isRightColumn = (index + 1) % 3 === 0;
              const isMiddleColumn = (index + 1) % 3 === 2;
              
              return (
                <div
                  key={feature.title}
                  className={`
                    group relative p-8 lg:p-10 transition-all duration-300
                    ${!isLastRow ? 'border-b border-border/30' : ''}
                    ${!isRightColumn ? 'lg:border-r lg:border-border/30' : ''}
                    ${index % 2 === 0 ? 'sm:border-r sm:border-border/30 lg:border-r-0' : 'sm:border-r-0'}
                    ${isMiddleColumn ? 'lg:border-r lg:border-border/30' : ''}
                    hover:bg-gradient-to-br hover:from-primary/[0.02] hover:to-accent/[0.02]
                  `}
                >
                  {/* Feature number - subtle */}
                  <div className="absolute top-6 right-6 text-5xl font-bold text-muted/20 select-none lg:top-8 lg:right-8">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-foreground pr-12">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Decorative corner accents */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-primary/20 rounded-tl" />
          <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-primary/20 rounded-tr" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-primary/20 rounded-bl" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-primary/20 rounded-br" />
        </div>
      </div>
    </section>
  );
}
