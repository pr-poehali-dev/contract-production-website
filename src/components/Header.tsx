import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "О компании", href: "#about" },
    { name: "Услуги", href: "#services" },
    { name: "Как работаем", href: "#process" },
    { name: "Портфолио", href: "#portfolio" },
    { name: "Тарифы", href: "#pricing" },
    { name: "Отзывы", href: "#testimonials" },
    { name: "Контакты", href: "#contacts" },
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Icon name="Sparkles" size={32} className="text-purple-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">
              КосметикаКонтракт
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-purple-600 transition-colors text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <div className="text-right">
              <div className="text-sm font-semibold text-gray-900">
                +7 (800) 123-45-67
              </div>
              <div className="text-xs text-gray-500">Звонок бесплатный</div>
            </div>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              Консультация
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-purple-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 border-t">
                <div className="text-sm font-semibold text-gray-900 mb-2">
                  +7 (800) 123-45-67
                </div>
                <Button
                  size="sm"
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  Консультация
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
