import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Icon from "@/components/ui/icon";
import HomePage from "@/pages/HomePage";
import WorksPage from "@/pages/WorksPage";
import ProfilePage from "@/pages/ProfilePage";
import ResponsesPage from "@/pages/ResponsesPage";
import RatingsPage from "@/pages/RatingsPage";
import MessengerPage from "@/pages/MessengerPage";
import FAQPage from "@/pages/FAQPage";

type Page = "home" | "works" | "profile" | "responses" | "ratings" | "messenger" | "faq";

const navItems: { id: Page; label: string; icon: string }[] = [
  { id: "home", label: "Главная", icon: "House" },
  { id: "works", label: "Работы", icon: "Briefcase" },
  { id: "profile", label: "Профиль", icon: "User" },
  { id: "responses", label: "Отклики", icon: "FileText" },
  { id: "ratings", label: "Рейтинги", icon: "Star" },
  { id: "messenger", label: "Мессенджер", icon: "MessageSquare" },
  { id: "faq", label: "FAQ", icon: "HelpCircle" },
];

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch (page) {
      case "home": return <HomePage onNavigate={setPage} />;
      case "works": return <WorksPage />;
      case "profile": return <ProfilePage />;
      case "responses": return <ResponsesPage />;
      case "ratings": return <RatingsPage />;
      case "messenger": return <MessengerPage />;
      case "faq": return <FAQPage />;
    }
  };

  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen bg-background flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={() => setPage("home")}
                className="flex items-center gap-2"
              >
                <span className="font-display text-2xl font-semibold text-primary tracking-tight">
                  Craft
                </span>
                <span className="text-xs font-medium text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                  Биржа
                </span>
              </button>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPage(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      page === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon name={item.icon} size={14} />
                    {item.label}
                  </button>
                ))}
              </nav>

              <div className="hidden md:flex items-center gap-3">
                <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Войти
                </button>
                <button className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  Регистрация
                </button>
              </div>

              <button
                className="md:hidden p-2 rounded-lg text-muted-foreground hover:bg-muted"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-white animate-fade-in">
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { setPage(item.id); setMobileMenuOpen(false); }}
                    className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      page === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon name={item.icon} size={16} />
                    {item.label}
                  </button>
                ))}
                <div className="pt-2 border-t border-border flex gap-2">
                  <button className="flex-1 text-sm font-medium border border-border px-4 py-2 rounded-lg hover:bg-muted transition-colors">
                    Войти
                  </button>
                  <button className="flex-1 text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                    Регистрация
                  </button>
                </div>
              </div>
            </div>
          )}
        </header>

        <main className="flex-1">
          {renderPage()}
        </main>

        <footer className="border-t border-border bg-white mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="font-display text-xl font-semibold text-primary">Craft Биржа</span>
                <p className="text-sm text-muted-foreground mt-1">Платформа для проверенных профессионалов</p>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <button onClick={() => setPage("works")} className="hover:text-foreground transition-colors">Работы</button>
                <button onClick={() => setPage("ratings")} className="hover:text-foreground transition-colors">Рейтинги</button>
                <button onClick={() => setPage("faq")} className="hover:text-foreground transition-colors">FAQ</button>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-border text-xs text-muted-foreground">
              © 2026 Craft Биржа. Все права защищены.
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}
