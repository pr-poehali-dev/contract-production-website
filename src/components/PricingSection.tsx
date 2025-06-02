import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PricingSection = () => {
  const plans = [
    {
      name: "Стартовый",
      price: "от 25 000",
      period: "за партию",
      description: "Идеально для тестирования рынка",
      minOrder: "100-500 единиц",
      features: [
        "Базовые рецептуры",
        "Простая упаковка",
        "Стандартные этикетки",
        "Производство 7-10 дней",
        "Доставка по России",
      ],
      popular: false,
      color: "border-gray-200",
    },
    {
      name: "Профессиональный",
      price: "от 45 000",
      period: "за партию",
      description: "Оптимальный выбор для развития бизнеса",
      minOrder: "500-2000 единиц",
      features: [
        "Индивидуальные рецептуры",
        "Дизайн упаковки",
        "Фирменные этикетки",
        "Производство 5-7 дней",
        "Маркетинговая поддержка",
        "Сертификаты качества",
      ],
      popular: true,
      color: "border-purple-500 bg-purple-50",
    },
    {
      name: "Премиум",
      price: "от 85 000",
      period: "за партию",
      description: "Для серьезного бизнеса и больших объемов",
      minOrder: "2000+ единиц",
      features: [
        "Эксклюзивные рецептуры",
        "Премиум упаковка",
        "Полный брендинг",
        "Приоритетное производство",
        "Персональный менеджер",
        "Логистическая поддержка",
        "Маркетинговые материалы",
      ],
      popular: false,
      color: "border-gray-200",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Тарифы и цены
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий тариф для запуска вашего косметического бренда
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.color} hover:shadow-xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Популярный
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-purple-600">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
                <div className="bg-purple-100 px-4 py-2 rounded-lg mt-4">
                  <span className="text-sm font-medium text-purple-800">
                    Минимальный заказ: {plan.minOrder}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-600 mr-3 flex-shrink-0"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "bg-gray-800 hover:bg-gray-900"
                  }`}
                >
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Нужен индивидуальный расчет?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Для больших объемов и особых требований предоставим персональное
            предложение
          </p>
          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600"
          >
            <Icon name="Calculator" size={20} />
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
