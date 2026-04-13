import { useState } from "react";
import Icon from "@/components/ui/icon";

type Tab = "freelancers" | "clients";

const freelancers = [
  { rank: 1, name: "Мария Соколова", role: "UI/UX дизайнер", rating: 5.0, reviews: 142, projects: 198, earnings: "2.4 млн ₽", verified: true, avatar: "МС", badge: "gold" },
  { rank: 2, name: "Алексей Громов", role: "Full-stack разработчик", rating: 4.9, reviews: 87, projects: 142, earnings: "1.9 млн ₽", verified: true, avatar: "АГ", badge: "silver" },
  { rank: 3, name: "Дмитрий Волков", role: "Маркетолог", rating: 4.8, reviews: 63, projects: 94, earnings: "1.1 млн ₽", verified: true, avatar: "ДВ", badge: "bronze" },
  { rank: 4, name: "Елена Фёдорова", role: "Копирайтер", rating: 4.8, reviews: 121, projects: 203, earnings: "890 000 ₽", verified: true, avatar: "ЕФ", badge: null },
  { rank: 5, name: "Игорь Смирнов", role: "Аналитик данных", rating: 4.7, reviews: 44, projects: 67, earnings: "780 000 ₽", verified: true, avatar: "ИС", badge: null },
  { rank: 6, name: "Ольга Новикова", role: "Видеомонтажёр", rating: 4.7, reviews: 38, projects: 52, earnings: "620 000 ₽", verified: false, avatar: "ОН", badge: null },
  { rank: 7, name: "Павел Козырев", role: "iOS разработчик", rating: 4.6, reviews: 29, projects: 41, earnings: "540 000 ₽", verified: true, avatar: "ПК", badge: null },
];

const clients = [
  { rank: 1, name: "Технодом", type: "ООО", rating: 4.9, reviews: 87, projects: 124, spent: "8.2 млн ₽", verified: true, avatar: "ТД", badge: "gold" },
  { rank: 2, name: "RetailPro", type: "АО", rating: 4.8, reviews: 62, projects: 89, spent: "5.7 млн ₽", verified: true, avatar: "RP", badge: "silver" },
  { rank: 3, name: "FitLife Pro", type: "ИП", rating: 4.8, reviews: 41, projects: 58, spent: "3.4 млн ₽", verified: true, avatar: "FL", badge: "bronze" },
  { rank: 4, name: "Газпром Медиа", type: "ПАО", rating: 4.9, reviews: 34, projects: 47, spent: "12.1 млн ₽", verified: true, avatar: "ГМ", badge: null },
  { rank: 5, name: "АвтоЗапчасти77", type: "ИП", rating: 4.6, reviews: 28, projects: 36, spent: "1.8 млн ₽", verified: true, avatar: "АЗ", badge: null },
];

const badgeColors: Record<string, string> = {
  gold: "text-amber-600 bg-amber-50 border-amber-200",
  silver: "text-slate-600 bg-slate-50 border-slate-200",
  bronze: "text-orange-600 bg-orange-50 border-orange-200",
};

const badgeLabel: Record<string, string> = {
  gold: "🥇 Топ 1",
  silver: "🥈 Топ 2",
  bronze: "🥉 Топ 3",
};

export default function RatingsPage() {
  const [tab, setTab] = useState<Tab>("freelancers");

  const data = tab === "freelancers" ? freelancers : clients;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in">
      <div className="mb-8">
        <h1 className="font-display text-4xl font-semibold text-foreground mb-2">Рейтинги</h1>
        <p className="text-muted-foreground">Лучшие участники платформы по версии клиентов и исполнителей</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-muted p-1 rounded-xl mb-8 w-fit">
        <button
          onClick={() => setTab("freelancers")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            tab === "freelancers" ? "bg-white shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Icon name="User" size={15} />
          Исполнители
        </button>
        <button
          onClick={() => setTab("clients")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            tab === "clients" ? "bg-white shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Icon name="Building2" size={15} />
          Клиенты
        </button>
      </div>

      {/* Top 3 podium */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {data.slice(0, 3).map((person, i) => (
          <div
            key={person.rank}
            className={`bg-white border rounded-2xl p-5 text-center hover-scale transition-all ${
              i === 0 ? "border-amber-200 shadow-md shadow-amber-100 ring-1 ring-amber-200" : "border-border"
            }`}
          >
            <div className={`text-2xl mb-2`}>{i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}</div>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2 ${
              i === 0 ? "bg-amber-100 text-amber-700" : "bg-primary/10 text-primary"
            }`}>
              {person.avatar}
            </div>
            <div className="font-semibold text-foreground text-sm mb-0.5">{person.name}</div>
            <div className="text-xs text-muted-foreground mb-2">
              {"role" in person ? person.role : person.type}
            </div>
            <div className="flex items-center justify-center gap-1">
              <Icon name="Star" size={13} className="text-amber-400 fill-amber-400" />
              <span className="text-sm font-bold text-foreground">{person.rating}</span>
            </div>
            {person.verified && (
              <div className="mt-2 flex justify-center">
                <span className="verified-badge">
                  <Icon name="BadgeCheck" size={10} />
                  Верифицирован
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Full table */}
      <div className="bg-white border border-border rounded-2xl overflow-hidden">
        <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-muted/50 text-xs font-medium text-muted-foreground border-b border-border">
          <div className="col-span-1">#</div>
          <div className="col-span-4">Участник</div>
          <div className="col-span-2 text-center">Рейтинг</div>
          <div className="col-span-2 text-center">Проекты</div>
          <div className="col-span-2 text-right hidden md:block">
            {tab === "freelancers" ? "Заработок" : "Расходы"}
          </div>
          <div className="col-span-1 text-center">Статус</div>
        </div>
        {data.map((person) => (
          <div
            key={person.rank}
            className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-border last:border-0 items-center hover:bg-muted/30 transition-colors"
          >
            <div className="col-span-1">
              {person.badge ? (
                <span className={`text-xs font-bold px-1.5 py-0.5 rounded border ${badgeColors[person.badge]}`}>
                  {person.rank}
                </span>
              ) : (
                <span className="text-sm text-muted-foreground font-medium">{person.rank}</span>
              )}
            </div>
            <div className="col-span-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0">
                {person.avatar}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-medium text-foreground truncate">{person.name}</div>
                <div className="text-xs text-muted-foreground truncate">
                  {"role" in person ? person.role : person.type}
                </div>
              </div>
            </div>
            <div className="col-span-2 text-center">
              <div className="flex items-center justify-center gap-1">
                <Icon name="Star" size={12} className="text-amber-400 fill-amber-400" />
                <span className="text-sm font-semibold text-foreground">{person.rating}</span>
              </div>
              <div className="text-xs text-muted-foreground">{person.reviews} отзывов</div>
            </div>
            <div className="col-span-2 text-center text-sm font-medium text-foreground">
              {person.projects}
            </div>
            <div className="col-span-2 text-right text-sm font-medium text-primary hidden md:block">
              {"earnings" in person ? person.earnings : person.spent}
            </div>
            <div className="col-span-1 text-center">
              {person.verified ? (
                <Icon name="BadgeCheck" size={16} className="text-blue-500 mx-auto" />
              ) : (
                <Icon name="Clock" size={16} className="text-muted-foreground mx-auto" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
