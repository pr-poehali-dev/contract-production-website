import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "О компании", href: "#about" },
    { name: "Услуги", href: "#services" },
    { name: "Портфолио", href: "#portfolio" },
    { name: "Тарифы", href: "#pricing" },
  ];

  const services = [
    "Собственная торговая марка",
    "Для салонов красоты",
    "Корпоративные подарки",
    "Частная маркировка",
  ];

  const contacts = [
    { icon: "MapPin", text: "г. Москва, ул. Производственная, 15" },
    { icon: "Phone", text: "+7 (800) 123-45-67" },
    { icon: "Mail", text: "info@kosmetika-contract.ru" },
    { icon: "Clock", text: "Пн-Пт: 9:00-18:00, Сб-Вс: выходной" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Icon
                name="Sparkles"
                size={28}
                className="text-purple-400 mr-2"
              />
              <span className="text-xl font-bold">КосметикаКонтракт</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Ведущий производитель натуральной косметики под собственными
              торговыми марками. 15 лет опыта, 500+ успешных проектов.
            </p>
            <div className="flex space-x-3">
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-purple-600"
              >
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-purple-600"
              >
                <Icon name="Send" size={20} />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-purple-600"
              >
                <Icon name="Instagram" size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-start">
                  <Icon
                    name={contact.icon}
                    size={16}
                    className="text-purple-400 mr-2 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-400 text-sm">{contact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 КосметикаКонтракт. Все права защищены.
          </div>
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
