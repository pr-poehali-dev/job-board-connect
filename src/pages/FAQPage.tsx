import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    category: "Верификация",
    items: [
      {
        q: "Зачем нужна верификация профиля?",
        a: "Верификация подтверждает вашу личность и повышает доверие клиентов и исполнителей. Верифицированные пользователи получают приоритет в поиске и значок доверия на профиле.",
      },
      {
        q: "Какие документы нужны для верификации?",
        a: "Для физических лиц — паспорт РФ и подтверждение телефона. Для ИП и юрлиц — дополнительно ИНН и выписка из ЕГРИП/ЕГРЮЛ. Проверка занимает до 24 часов.",
      },
      {
        q: "Могу ли я работать без верификации?",
        a: "Да, но с ограничениями: нельзя откликаться на заказы более 10 000 ₽ и выводить средства. Мы рекомендуем пройти верификацию сразу после регистрации.",
      },
    ],
  },
  {
    category: "Оплата",
    items: [
      {
        q: "Как происходит оплата проектов?",
        a: "Клиент вносит оплату на безопасный счёт платформы. Средства поступают исполнителю после подтверждения выполнения работы. Комиссия платформы — 10%.",
      },
      {
        q: "Как вывести заработанные деньги?",
        a: "Выводите на банковскую карту, расчётный счёт или в электронный кошелёк. Минимальная сумма вывода — 500 ₽. Средства поступают в течение 1–3 рабочих дней.",
      },
      {
        q: "Что делать, если клиент не платит?",
        a: "Обратитесь в службу поддержки. Если оплата была внесена на безопасный счёт, мы автоматически переведём её вам после истечения срока проверки (5 дней).",
      },
    ],
  },
  {
    category: "Проекты",
    items: [
      {
        q: "Как найти подходящий заказ?",
        a: "Используйте фильтры на странице «Работы» — по категории, бюджету и дедлайну. Верифицированные исполнители получают доступ к эксклюзивным заказам.",
      },
      {
        q: "Сколько откликов можно отправить?",
        a: "Бесплатный аккаунт — до 5 откликов в месяц. Профессиональный — неограниченно. Подписка включает также приоритетное отображение в поиске.",
      },
      {
        q: "Как разрешить спор с заказчиком?",
        a: "Нажмите «Открыть спор» в разделе проекта. Наш медиатор рассмотрит ситуацию в течение 48 часов и вынесет решение, основываясь на переписке и договорённостях.",
      },
    ],
  },
  {
    category: "Аккаунт",
    items: [
      {
        q: "Как изменить ставку или профиль?",
        a: "Зайдите в раздел «Профиль» → «Редактировать». Вы можете изменить фото, описание, навыки и ставку в любое время. Обновление отображается сразу.",
      },
      {
        q: "Могу ли я иметь два аккаунта — клиента и исполнителя?",
        a: "Нет необходимости — один аккаунт поддерживает обе роли. Переключайтесь между режимами клиента и исполнителя в настройках профиля.",
      },
    ],
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fade-in">
      <div className="mb-10 text-center">
        <h1 className="font-display text-4xl font-semibold text-foreground mb-3">Частые вопросы</h1>
        <p className="text-muted-foreground">Всё, что нужно знать о работе платформы</p>
      </div>

      {/* Search hint */}
      <div className="relative mb-10">
        <Icon name="Search" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Найти ответ на вопрос..."
          className="w-full pl-11 pr-4 py-3 border border-border rounded-xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div className="space-y-8">
        {faqs.map((section) => (
          <div key={section.category}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
              {section.category}
            </h2>
            <div className="space-y-2">
              {section.items.map((item) => {
                const key = `${section.category}-${item.q}`;
                const isOpen = open === key;
                return (
                  <div
                    key={item.q}
                    className="bg-white border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors"
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : key)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-medium text-foreground">{item.q}</span>
                      <Icon
                        name={isOpen ? "ChevronUp" : "ChevronDown"}
                        size={16}
                        className="text-muted-foreground flex-shrink-0 transition-transform"
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 animate-fade-in">
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Support CTA */}
      <div className="mt-12 bg-primary/5 border border-primary/15 rounded-2xl p-8 text-center">
        <Icon name="HelpCircle" size={32} className="text-primary mx-auto mb-3" />
        <h3 className="font-semibold text-foreground mb-2">Не нашли ответ?</h3>
        <p className="text-sm text-muted-foreground mb-4">Наша команда ответит в течение 2 часов в рабочее время</p>
        <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
          <Icon name="MessageSquare" size={15} />
          Написать в поддержку
        </button>
      </div>
    </div>
  );
}
