import Icon from "@/components/ui/icon";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "Target",
      title: "Индивидуальный подход",
      description:
        "Разрабатываем уникальные формулы специально под ваши требования и целевую аудиторию",
    },
    {
      icon: "Shield",
      title: "Полная конфиденциальность",
      description:
        "Гарантируем защиту ваших рецептур и коммерческой информации",
    },
    {
      icon: "Truck",
      title: "Логистика по России",
      description:
        "Организуем доставку готовой продукции в любой регион страны",
    },
    {
      icon: "HeartHandshake",
      title: "Поддержка 24/7",
      description:
        "Сопровождаем на всех этапах: от разработки до продажи готовой продукции",
    },
    {
      icon: "TrendingUp",
      title: "Масштабирование бизнеса",
      description:
        "Помогаем развивать ваш бренд и увеличивать объемы производства",
    },
    {
      icon: "Banknote",
      title: "Выгодная цена",
      description:
        "Конкурентные цены благодаря собственному производству и оптимизации процессов",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 500 успешных проектов и довольных клиентов по всей России
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Icon
                  name={benefit.icon}
                  size={24}
                  className="text-purple-600"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Готовы начать сотрудничество?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Оставьте заявку и получите персональное коммерческое предложение в
            течение 24 часов
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center">
              <Icon name="Phone" size={20} className="mr-2" />
              <span className="text-lg">+7 (800) 123-45-67</span>
            </div>
            <div className="flex items-center justify-center">
              <Icon name="Mail" size={20} className="mr-2" />
              <span className="text-lg">info@kosmetika-contract.ru</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
