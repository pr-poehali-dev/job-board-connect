import { useState } from "react";
import Icon from "@/components/ui/icon";

const chats = [
  {
    id: 1,
    name: "Технодом",
    role: "Клиент",
    verified: true,
    lastMessage: "Отлично! Когда сможете начать?",
    time: "12:41",
    unread: 2,
    online: true,
    avatar: "ТД",
  },
  {
    id: 2,
    name: "Мария Соколова",
    role: "Исполнитель",
    verified: true,
    lastMessage: "Пришлю макеты к завтрашнему утру",
    time: "11:20",
    unread: 0,
    online: true,
    avatar: "МС",
  },
  {
    id: 3,
    name: "RetailPro",
    role: "Клиент",
    verified: true,
    lastMessage: "Спасибо за работу, оставим отзыв!",
    time: "Вчера",
    unread: 0,
    online: false,
    avatar: "RP",
  },
  {
    id: 4,
    name: "Дмитрий Волков",
    role: "Исполнитель",
    verified: true,
    lastMessage: "Готов взяться за проект. Давайте обсудим?",
    time: "Вчера",
    unread: 1,
    online: false,
    avatar: "ДВ",
  },
];

type Message = {
  id: number;
  text: string;
  time: string;
  mine: boolean;
};

const mockMessages: Record<number, Message[]> = {
  1: [
    { id: 1, text: "Добрый день! Посмотрел ваш проект — готов взяться.", time: "10:15", mine: false },
    { id: 2, text: "Отлично! Расскажите подробнее о вашем опыте в e-commerce.", time: "10:22", mine: true },
    { id: 3, text: "7 лет в разработке, из них 4 — в интернет-магазинах. Реализовал 12 подобных проектов.", time: "10:35", mine: false },
    { id: 4, text: "Хорошо. Бюджет 95 000 ₽ вас устраивает? Срок — 28 дней.", time: "10:41", mine: true },
    { id: 5, text: "Да, подходит. Могу начать в понедельник.", time: "11:02", mine: false },
    { id: 6, text: "Отлично! Когда сможете начать?", time: "12:41", mine: false },
  ],
  2: [
    { id: 1, text: "Привет! Я посмотрела бриф по приложению для FitLife.", time: "09:10", mine: false },
    { id: 2, text: "Здравствуйте! Что думаете по срокам?", time: "09:15", mine: true },
    { id: 3, text: "Реализую за 12 дней. Пришлю первый вариант через 3 дня.", time: "09:20", mine: false },
    { id: 4, text: "Пришлю макеты к завтрашнему утру", time: "11:20", mine: false },
  ],
};

export default function MessengerPage() {
  const [activeChat, setActiveChat] = useState(chats[0]);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Record<number, Message[]>>(mockMessages);

  const currentMessages = messages[activeChat.id] || [];

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg: Message = {
      id: Date.now(),
      text: input.trim(),
      time: new Date().toLocaleTimeString("ru", { hour: "2-digit", minute: "2-digit" }),
      mine: true,
    };
    setMessages((prev) => ({
      ...prev,
      [activeChat.id]: [...(prev[activeChat.id] || []), newMsg],
    }));
    setInput("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 animate-fade-in">
      <div className="mb-6">
        <h1 className="font-display text-4xl font-semibold text-foreground mb-1">Мессенджер</h1>
        <p className="text-muted-foreground text-sm">Переписка с клиентами и исполнителями</p>
      </div>

      <div className="bg-white border border-border rounded-2xl overflow-hidden flex" style={{ height: "600px" }}>
        {/* Sidebar */}
        <div className="w-72 border-r border-border flex-shrink-0 flex flex-col">
          <div className="p-4 border-b border-border">
            <div className="relative">
              <Icon name="Search" size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Поиск..."
                className="w-full pl-9 pr-3 py-2 text-sm bg-muted rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {chats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setActiveChat(chat)}
                className={`w-full flex items-start gap-3 px-4 py-3.5 text-left transition-colors ${
                  activeChat.id === chat.id ? "bg-primary/5 border-r-2 border-primary" : "hover:bg-muted/50"
                }`}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                    {chat.avatar}
                  </div>
                  {chat.online && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-sm font-medium text-foreground truncate">{chat.name}</span>
                    <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">{chat.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground truncate">{chat.lastMessage}</span>
                    {chat.unread > 0 && (
                      <span className="flex-shrink-0 ml-2 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col">
          {/* Chat header */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                {activeChat.avatar}
              </div>
              {activeChat.online && (
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground text-sm">{activeChat.name}</span>
                {activeChat.verified && (
                  <span className="verified-badge">
                    <Icon name="BadgeCheck" size={10} />
                    Верифицирован
                  </span>
                )}
              </div>
              <div className="text-xs text-muted-foreground">
                {activeChat.online ? "Онлайн" : "Был(а) недавно"} · {activeChat.role}
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
            {currentMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.mine ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs md:max-w-md px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.mine
                      ? "bg-primary text-primary-foreground rounded-tr-sm"
                      : "bg-muted text-foreground rounded-tl-sm"
                  }`}
                >
                  <p>{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.mine ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="px-4 py-4 border-t border-border">
            <div className="flex items-center gap-3 bg-muted rounded-xl px-4 py-2">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Paperclip" size={18} />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Написать сообщение..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-40"
              >
                <Icon name="Send" size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
