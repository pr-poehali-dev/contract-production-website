import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const stats = [
    { number: "500+", label: "Успешных проектов" },
    { number: "15", label: "Лет опыта" },
    { number: "50+", label: "Видов продукции" },
    { number: "99%", label: "Довольных клиентов" },
  ];

  const certifications = [
    "ISO 22716 (GMP косметика)",
    "Декларации соответствия",
    "Санитарно-эпидемиологические заключения",
    "Сертификаты качества на сырье",
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
              О компании
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong>КосметикаКонтракт</strong> — ведущий производитель
                натуральной косметики в России с 15-летним опытом работы на
                рынке.
              </p>
              <p>
                Мы специализируемся на контрактном производстве косметических
                средств под собственными торговыми марками клиентов. За годы
                работы помогли запустить более 500 успешных брендов по всей
                стране.
              </p>
              <p>
                Наше производство оснащено современным европейским оборудованием
                и сертифицировано по международным стандартам качества.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Наши сертификаты:</h3>
              <div className="grid grid-cols-1 gap-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <Icon
                      name="BadgeCheck"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    <span className="text-sm text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button className="mt-8 bg-purple-600 hover:bg-purple-700">
              <Icon name="FileText" size={16} />
              Скачать сертификаты
            </Button>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-purple-50 rounded-xl"
                >
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-6 text-white">
              <div className="flex items-center mb-4">
                <Icon name="Trophy" size={24} className="mr-2" />
                <span className="font-semibold">Лидер отрасли</span>
              </div>
              <p className="text-sm opacity-90 mb-4">
                Входим в ТОП-3 производителей контрактной косметики в России.
                Работаем с брендами от стартапов до федеральных сетей.
              </p>
              <div className="flex items-center text-sm">
                <Icon name="Award" size={16} className="mr-2" />
                <span>Премия "Лучший OEM-производитель 2023"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
