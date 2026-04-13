import Icon from "@/components/ui/icon";

type Page = "home" | "works" | "profile" | "responses" | "ratings" | "messenger" | "faq";

interface Props {
  onNavigate: (page: Page) => void;
}

const stats = [
  { value: "12 400+", label: "Исполнителей" },
  { value: "3 800+", label: "Клиентов" },
  { value: "98%", label: "Верифицированных" },
  { value: "4.9", label: "Средний рейтинг" },
];

const categories = [
  { icon: "Code2", label: "Разработка", count: 1840 },
  { icon: "Palette", label: "Дизайн", count: 1230 },
  { icon: "PenTool", label: "Копирайтинг", count: 876 },
  { icon: "TrendingUp", label: "Маркетинг", count: 654 },
  { icon: "Video", label: "Видео", count: 541 },
  { icon: "BarChart2", label: "Аналитика", count: 312 },
];

const featured = [
  {
    name: "Алексей Громов",
    role: "Full-stack разработчик",
    rating: 4.9,
    reviews: 87,
    rate: "от 3 500 ₽/час",
    verified: true,
    skills: ["React", "Node.js", "PostgreSQL"],
    avatar: "АГ",
  },
  {
    name: "Мария Соколова",
    role: "UI/UX дизайнер",
    rating: 5.0,
    reviews: 142,
    rate: "от 2 800 ₽/час",
    verified: true,
    skills: ["Figma", "Branding", "Motion"],
    avatar: "МС",
  },
  {
    name: "Дмитрий Волков",
    role: "Маркетолог",
    rating: 4.8,
    reviews: 63,
    rate: "от 2 200 ₽/час",
    verified: true,
    skills: ["SEO", "Контекст", "Аналитика"],
    avatar: "ДВ",
  },
];

export default function HomePage({ onNavigate }: Props) {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full mb-6">
              <Icon name="ShieldCheck" size={14} />
              Все профили проверены и верифицированы
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6">
              Найдите<br />
              <span className="text-primary italic">профессионала</span><br />
              которому можно доверять
            </h1>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Биржа фриланса с верификацией каждого участника. Работайте только с проверенными клиентами и исполнителями.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onNavigate("works")}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                <Icon name="Search" size={18} />
                Найти работу
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-border bg-white text-foreground px-6 py-3.5 rounded-xl font-medium hover:bg-muted transition-colors">
                <Icon name="PlusCircle" size={18} />
                Разместить заказ
              </button>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-primary to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-semibold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl font-semibold text-foreground">Категории работ</h2>
            <p className="text-muted-foreground mt-2">Найдите специалиста в любой области</p>
          </div>
          <button
            onClick={() => onNavigate("works")}
            className="hidden md:flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Все категории <Icon name="ArrowRight" size={14} />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => onNavigate("works")}
              className="group flex flex-col items-center gap-3 p-5 bg-white border border-border rounded-2xl hover:border-primary hover:shadow-md transition-all duration-200 hover-scale"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon name={cat.icon} size={22} className="text-primary" />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-foreground">{cat.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{cat.count.toLocaleString()} вакансий</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Featured freelancers */}
      <section className="bg-secondary/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl font-semibold text-foreground">Топ исполнители</h2>
              <p className="text-muted-foreground mt-2">Проверенные профессионалы с высоким рейтингом</p>
            </div>
            <button
              onClick={() => onNavigate("ratings")}
              className="hidden md:flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Все рейтинги <Icon name="ArrowRight" size={14} />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((person) => (
              <div
                key={person.name}
                className="bg-white border border-border rounded-2xl p-6 hover:shadow-md transition-shadow hover-scale"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-sm font-semibold text-primary flex-shrink-0">
                    {person.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-foreground text-sm">{person.name}</span>
                      {person.verified && (
                        <span className="verified-badge">
                          <Icon name="BadgeCheck" size={11} />
                          Верифицирован
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">{person.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <Icon name="Star" size={14} className="text-amber-400 fill-amber-400" />
                  <span className="text-sm font-semibold text-foreground">{person.rating}</span>
                  <span className="text-xs text-muted-foreground">({person.reviews} отзывов)</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {person.skills.map((skill) => (
                    <span key={skill} className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">{person.rate}</span>
                  <button className="text-xs font-medium text-primary border border-primary/30 px-3 py-1.5 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all">
                    Профиль
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl font-semibold text-foreground">Как это работает</h2>
          <p className="text-muted-foreground mt-2">Просто, безопасно, прозрачно</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "UserCheck", step: "01", title: "Пройдите верификацию", desc: "Загрузите документы и пройдите быструю проверку. Занимает до 24 часов." },
            { icon: "Search", step: "02", title: "Найдите проект или специалиста", desc: "Просматривайте тысячи актуальных предложений от проверенных участников." },
            { icon: "Handshake", step: "03", title: "Работайте и получайте оплату", desc: "Безопасные расчёты, прозрачные условия и поддержка платформы." },
          ].map((item) => (
            <div key={item.step} className="relative">
              <div className="text-7xl font-display font-semibold text-primary/8 absolute -top-4 -left-2 select-none">
                {item.step}
              </div>
              <div className="relative pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={item.icon} size={22} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary mx-4 sm:mx-6 lg:mx-8 mb-0 rounded-2xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
            Готовы начать?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
            Присоединитесь к тысячам профессионалов и клиентов на платформе с верификацией
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-colors">
              Я исполнитель
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 px-6 py-3 rounded-xl font-medium hover:bg-primary-foreground/20 transition-colors">
              Я клиент
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
