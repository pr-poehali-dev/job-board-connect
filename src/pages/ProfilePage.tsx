import Icon from "@/components/ui/icon";

const skills = ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Figma"];

const reviews = [
  {
    author: "Технодом",
    rating: 5,
    text: "Отличная работа, всё сделано в срок. Очень рекомендую!",
    date: "15 марта 2026",
    verified: true,
  },
  {
    author: "RetailPro",
    rating: 5,
    text: "Профессиональный подход, качественный код. Работаем снова.",
    date: "2 февраля 2026",
    verified: true,
  },
  {
    author: "FitLife Pro",
    rating: 4,
    text: "Хорошая работа, небольшие правки потребовались, но в целом доволен.",
    date: "10 января 2026",
    verified: true,
  },
];

const portfolio = [
  { title: "Интернет-магазин электроники", tech: "React + Node.js", year: "2025" },
  { title: "CRM-система для агентства", tech: "TypeScript + PostgreSQL", year: "2025" },
  { title: "Мобильное приложение для доставки", tech: "React Native", year: "2024" },
];

export default function ProfilePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in">
      {/* Profile header */}
      <div className="bg-white border border-border rounded-2xl p-8 mb-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-24 h-24 rounded-2xl bg-primary/15 flex items-center justify-center text-2xl font-bold font-display text-primary flex-shrink-0">
            АГ
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h1 className="font-display text-3xl font-semibold text-foreground">Алексей Громов</h1>
              <span className="verified-badge text-sm px-3 py-1">
                <Icon name="BadgeCheck" size={13} />
                Верифицирован
              </span>
            </div>
            <p className="text-muted-foreground mb-1">Full-stack разработчик · Москва</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Icon name="Star" size={14} className="text-amber-400 fill-amber-400" />
                <span className="font-semibold text-foreground">4.9</span>
                (87 отзывов)
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Briefcase" size={14} />
                142 проекта
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Clock" size={14} />
                На платформе 2 года
              </span>
            </div>
            <p className="text-foreground text-sm leading-relaxed max-w-2xl">
              Разрабатываю веб-приложения полного цикла — от архитектуры до деплоя. Специализируюсь на React, Node.js и PostgreSQL. Работаю чисто, в срок, с документацией.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:min-w-[180px]">
            <div className="text-right">
              <div className="font-display text-2xl font-semibold text-primary">3 500 ₽/час</div>
              <div className="text-xs text-muted-foreground">Ставка</div>
            </div>
            <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
              Написать
            </button>
            <button className="border border-border px-5 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-muted transition-colors">
              Пригласить на проект
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="space-y-6">
          {/* Verification */}
          <div className="bg-white border border-border rounded-2xl p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Icon name="ShieldCheck" size={16} className="text-primary" />
              Верификация
            </h3>
            <div className="space-y-3">
              {[
                { label: "Паспорт", done: true },
                { label: "Телефон", done: true },
                { label: "Email", done: true },
                { label: "Банковская карта", done: true },
                { label: "ИНН / Самозанятый", done: false },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${item.done ? "bg-green-100" : "bg-muted"}`}>
                    <Icon
                      name={item.done ? "Check" : "Minus"}
                      size={11}
                      className={item.done ? "text-green-600" : "text-muted-foreground"}
                    />
                  </div>
                  <span className={`text-sm ${item.done ? "text-foreground" : "text-muted-foreground"}`}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white border border-border rounded-2xl p-6">
            <h3 className="font-semibold text-foreground mb-4">Навыки</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="text-xs px-3 py-1.5 bg-primary/8 text-primary rounded-full font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white border border-border rounded-2xl p-6">
            <h3 className="font-semibold text-foreground mb-4">Статистика</h3>
            <div className="space-y-3">
              {[
                { label: "Выполнено проектов", value: "142" },
                { label: "Повторные заказчики", value: "68%" },
                { label: "Среднее время ответа", value: "2 часа" },
                { label: "Выполнено в срок", value: "97%" },
              ].map((s) => (
                <div key={s.label} className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{s.label}</span>
                  <span className="text-sm font-semibold text-foreground">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="md:col-span-2 space-y-6">
          {/* Portfolio */}
          <div className="bg-white border border-border rounded-2xl p-6">
            <h3 className="font-semibold text-foreground mb-4">Портфолио</h3>
            <div className="space-y-3">
              {portfolio.map((item) => (
                <div key={item.title} className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="FolderOpen" size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground">{item.title}</div>
                    <div className="text-xs text-muted-foreground">{item.tech}</div>
                  </div>
                  <span className="text-xs text-muted-foreground">{item.year}</span>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full border border-dashed border-border rounded-xl py-3 text-sm text-muted-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2">
              <Icon name="Plus" size={14} />
              Добавить проект
            </button>
          </div>

          {/* Reviews */}
          <div className="bg-white border border-border rounded-2xl p-6">
            <h3 className="font-semibold text-foreground mb-4">Отзывы</h3>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.author} className="pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground">{review.author}</span>
                      {review.verified && (
                        <span className="verified-badge">
                          <Icon name="BadgeCheck" size={10} />
                          Верифицирован
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={13}
                        className={i < review.rating ? "text-amber-400 fill-amber-400" : "text-muted"}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
