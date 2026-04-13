import { useState } from "react";
import Icon from "@/components/ui/icon";

const categories = ["Все", "Разработка", "Дизайн", "Копирайтинг", "Маркетинг", "Видео", "Аналитика"];

const jobs = [
  {
    id: 1,
    title: "Разработка интернет-магазина на React",
    client: "Технодом",
    clientVerified: true,
    category: "Разработка",
    budget: "80 000 – 120 000 ₽",
    deadline: "30 дней",
    responses: 12,
    tags: ["React", "TypeScript", "Node.js"],
    posted: "2 часа назад",
    urgent: false,
  },
  {
    id: 2,
    title: "Дизайн мобильного приложения для фитнес-клуба",
    client: "FitLife Pro",
    clientVerified: true,
    category: "Дизайн",
    budget: "45 000 – 70 000 ₽",
    deadline: "14 дней",
    responses: 8,
    tags: ["Figma", "UI/UX", "iOS"],
    posted: "5 часов назад",
    urgent: true,
  },
  {
    id: 3,
    title: "SEO-тексты для строительной компании",
    client: "СтройМастер",
    clientVerified: false,
    category: "Копирайтинг",
    budget: "15 000 – 25 000 ₽",
    deadline: "7 дней",
    responses: 24,
    tags: ["SEO", "Строительство", "LSI"],
    posted: "1 день назад",
    urgent: false,
  },
  {
    id: 4,
    title: "Настройка рекламы в Яндекс.Директ",
    client: "АвтоЗапчасти77",
    clientVerified: true,
    category: "Маркетинг",
    budget: "30 000 ₽",
    deadline: "7 дней",
    responses: 6,
    tags: ["Яндекс.Директ", "Контекст", "E-commerce"],
    posted: "3 часа назад",
    urgent: false,
  },
  {
    id: 5,
    title: "Монтаж и цветокоррекция корпоративного видео",
    client: "Газпром Медиа",
    clientVerified: true,
    category: "Видео",
    budget: "50 000 – 80 000 ₽",
    deadline: "21 день",
    responses: 4,
    tags: ["Premiere Pro", "DaVinci", "4K"],
    posted: "6 часов назад",
    urgent: false,
  },
  {
    id: 6,
    title: "Аналитика продаж и построение дашборда",
    client: "RetailPro",
    clientVerified: true,
    category: "Аналитика",
    budget: "40 000 – 60 000 ₽",
    deadline: "14 дней",
    responses: 9,
    tags: ["Power BI", "Python", "SQL"],
    posted: "12 часов назад",
    urgent: false,
  },
];

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [search, setSearch] = useState("");

  const filtered = jobs.filter((job) => {
    const matchCat = activeCategory === "Все" || job.category === activeCategory;
    const matchSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-4xl font-semibold text-foreground mb-2">Работы</h1>
        <p className="text-muted-foreground">Актуальные заказы от верифицированных клиентов</p>
      </div>

      {/* Search + filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Icon name="Search" size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Поиск по названию или технологиям..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 border border-border rounded-xl bg-white text-sm font-medium text-foreground hover:bg-muted transition-colors">
          <Icon name="SlidersHorizontal" size={16} />
          Фильтры
        </button>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
          <Icon name="Plus" size={16} />
          Разместить заказ
        </button>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-white border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">Найдено: {filtered.length} заказов</span>
        <select className="text-sm border border-border rounded-lg px-3 py-1.5 bg-white text-foreground focus:outline-none">
          <option>Сначала новые</option>
          <option>По бюджету (убывание)</option>
          <option>По откликам</option>
        </select>
      </div>

      <div className="space-y-4">
        {filtered.map((job) => (
          <div
            key={job.id}
            className="bg-white border border-border rounded-2xl p-6 hover:shadow-md transition-all hover-scale"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 flex-wrap mb-2">
                  <h3 className="font-semibold text-foreground text-base leading-tight">{job.title}</h3>
                  {job.urgent && (
                    <span className="flex-shrink-0 text-xs font-medium text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                      Срочно
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-muted-foreground">Клиент: <span className="text-foreground font-medium">{job.client}</span></span>
                  {job.clientVerified ? (
                    <span className="verified-badge">
                      <Icon name="BadgeCheck" size={11} />
                      Верифицирован
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground border border-border px-2 py-0.5 rounded-full">
                      <Icon name="Clock" size={11} />
                      На проверке
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {job.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 bg-primary/8 text-primary rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={13} />
                    {job.deadline}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="MessageSquare" size={13} />
                    {job.responses} откликов
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Calendar" size={13} />
                    {job.posted}
                  </span>
                </div>
              </div>
              <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-3 md:min-w-[160px]">
                <div className="text-right">
                  <div className="font-semibold text-foreground text-sm">{job.budget}</div>
                  <div className="text-xs text-muted-foreground">Бюджет</div>
                </div>
                <button className="flex-shrink-0 bg-primary text-primary-foreground px-5 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
                  Откликнуться
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
