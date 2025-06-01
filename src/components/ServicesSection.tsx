import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Store",
      title: "Собственная торговая марка",
      description:
        "Создаем косметику под вашим брендом для малого и среднего бизнеса",
      features: [
        "Разработка рецептуры",
        "Дизайн упаковки",
        "Сертификация",
        "Минимальный заказ от 100 единиц",
      ],
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "Scissors",
      title: "Для салонов красоты",
      description: "Профессиональная косметика для салонов и частных мастеров",
      features: [
        "Профессиональные серии",
        "Обучение персонала",
        "Маркетинговая поддержка",
        "Эксклюзивные формулы",
      ],
      color: "bg-pink-50 border-pink-200",
    },
    {
      icon: "Gift",
      title: "Корпоративные подарки",
      description:
        "Натуральная косметика с фирменным логотипом — оригинальная идея для подарков",
      features: [
        "Брендинг под компанию",
        "Подарочная упаковка",
        "Любые объемы",
        "Персонализация",
      ],
      color: "bg-green-50 border-green-200",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный цикл производства косметической продукции под ваши задачи
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${service.color} hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <CardHeader className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Icon
                    name={service.icon}
                    size={32}
                    className="text-purple-600"
                  />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-700">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-600 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full hover:bg-purple-50 border-purple-200"
                >
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
