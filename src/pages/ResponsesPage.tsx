import { useState } from "react";
import Icon from "@/components/ui/icon";

type Tab = "incoming" | "outgoing";

const incoming = [
  {
    id: 1,
    name: "Мария Соколова",
    role: "UI/UX дизайнер",
    rating: 5.0,
    reviews: 142,
    verified: true,
    project: "Дизайн мобильного приложения",
    message: "Привет! Я специализируюсь на мобильных интерфейсах для фитнес-приложений. Посмотрел ваш бриф — готова взяться за проект. Моё портфолио: 12 похожих проектов.",
    rate: "2 800 ₽/час",
    date: "Сегодня, 11:30",
    status: "new",
  },
  {
    id: 2,
    name: "Иван Петров",
    role: "Мобильный разработчик",
    rating: 4.7,
    reviews: 53,
    verified: true,
    project: "Дизайн мобильного приложения",
    message: "Имею опыт 5 лет в разработке iOS/Android. Смогу реализовать проект за 12 дней. Готов обсудить детали.",
    rate: "3 200 ₽/час",
    date: "Вчера, 18:45",
    status: "viewed",
  },
  {
    id: 3,
    name: "Анна Козлова",
    role: "Product designer",
    rating: 4.9,
    reviews: 88,
    verified: false,
    project: "Дизайн мобильного приложения",
    message: "Специализируюсь на фитнес и health-продуктах. Готова показать похожие кейсы.",
    rate: "2 500 ₽/час",
    date: "Вчера, 09:12",
    status: "viewed",
  },
];

const outgoing = [
  {
    id: 4,
    project: "Разработка интернет-магазина на React",
    client: "Технодом",
    clientVerified: true,
    budget: "80 000 – 120 000 ₽",
    myRate: "95 000 ₽",
    date: "12 апреля 2026",
    status: "pending",
  },
  {
    id: 5,
    project: "Аналитика продаж и построение дашборда",
    client: "RetailPro",
    clientVerified: true,
    budget: "40 000 – 60 000 ₽",
    myRate: "55 000 ₽",
    date: "10 апреля 2026",
    status: "accepted",
  },
  {
    id: 6,
    project: "SEO-тексты для строительной компании",
    client: "СтройМастер",
    clientVerified: false,
    budget: "15 000 – 25 000 ₽",
    myRate: "22 000 ₽",
    date: "8 апреля 2026",
    status: "rejected",
  },
];

const statusLabel: Record<string, { label: string; color: string }> = {
  new: { label: "Новый", color: "text-blue-700 bg-blue-50 border-blue-200" },
  viewed: { label: "Просмотрен", color: "text-muted-foreground bg-muted border-border" },
  pending: { label: "На рассмотрении", color: "text-amber-700 bg-amber-50 border-amber-200" },
  accepted: { label: "Принят", color: "text-green-700 bg-green-50 border-green-200" },
  rejected: { label: "Отклонён", color: "text-red-700 bg-red-50 border-red-200" },
};

export default function ResponsesPage() {
  const [tab, setTab] = useState<Tab>("incoming");

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in">
      <div className="mb-8">
        <h1 className="font-display text-4xl font-semibold text-foreground mb-2">Отклики</h1>
        <p className="text-muted-foreground">Управляйте входящими и исходящими откликами</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-muted p-1 rounded-xl mb-8 w-fit">
        <button
          onClick={() => setTab("incoming")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            tab === "incoming" ? "bg-white shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Icon name="Inbox" size={15} />
          Входящие
          <span className="bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full">3</span>
        </button>
        <button
          onClick={() => setTab("outgoing")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            tab === "outgoing" ? "bg-white shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Icon name="Send" size={15} />
          Исходящие
        </button>
      </div>

      {tab === "incoming" && (
        <div className="space-y-4">
          {incoming.map((item) => (
            <div
              key={item.id}
              className={`bg-white border rounded-2xl p-6 hover:shadow-md transition-all ${
                item.status === "new" ? "border-primary/30 shadow-sm shadow-primary/10" : "border-border"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary flex-shrink-0">
                  {item.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-semibold text-foreground">{item.name}</span>
                    {item.verified && (
                      <span className="verified-badge">
                        <Icon name="BadgeCheck" size={11} />
                        Верифицирован
                      </span>
                    )}
                    <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${statusLabel[item.status].color}`}>
                      {statusLabel[item.status].label}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground mb-1">{item.role}</div>
                  <div className="flex items-center gap-1 mb-2">
                    <Icon name="Star" size={12} className="text-amber-400 fill-amber-400" />
                    <span className="text-xs font-semibold text-foreground">{item.rating}</span>
                    <span className="text-xs text-muted-foreground">({item.reviews})</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">{item.message}</p>
                  <div className="text-xs text-muted-foreground">На проект: <span className="text-foreground font-medium">{item.project}</span></div>
                </div>
                <div className="flex flex-col items-end gap-3 md:min-w-[140px]">
                  <div className="text-right">
                    <div className="font-semibold text-foreground text-sm">{item.rate}</div>
                    <div className="text-xs text-muted-foreground">{item.date}</div>
                  </div>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-xl text-xs font-medium hover:opacity-90 transition-opacity w-full">
                    Принять
                  </button>
                  <button className="border border-border text-foreground px-4 py-2 rounded-xl text-xs font-medium hover:bg-muted transition-colors w-full">
                    Написать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "outgoing" && (
        <div className="space-y-4">
          {outgoing.map((item) => (
            <div key={item.id} className="bg-white border border-border rounded-2xl p-6 hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{item.project}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-muted-foreground">Клиент: <span className="text-foreground font-medium">{item.client}</span></span>
                    {item.clientVerified ? (
                      <span className="verified-badge">
                        <Icon name="BadgeCheck" size={11} />
                        Верифицирован
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground border border-border px-2 py-0.5 rounded-full">На проверке</span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>Бюджет: <span className="text-foreground">{item.budget}</span></span>
                    <span>Моя ставка: <span className="text-primary font-semibold">{item.myRate}</span></span>
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={13} />
                      {item.date}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`text-xs px-3 py-1.5 rounded-full border font-medium ${statusLabel[item.status].color}`}>
                    {statusLabel[item.status].label}
                  </span>
                  {item.status === "pending" && (
                    <button className="text-xs text-muted-foreground hover:text-red-600 transition-colors">
                      Отозвать
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
