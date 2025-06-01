import Icon from "@/components/ui/icon";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: "MessageSquare",
      title: "Консультация и анализ",
      description:
        "Изучаем ваши потребности, целевую аудиторию и бюджет. Подбираем оптимальные решения.",
      duration: "1 день",
    },
    {
      number: "02",
      icon: "Beaker",
      title: "Разработка рецептуры",
      description:
        "Создаем уникальную формулу под ваши требования. Тестируем и корректируем состав.",
      duration: "3-5 дней",
    },
    {
      number: "03",
      icon: "Palette",
      title: "Дизайн упаковки",
      description:
        "Разрабатываем привлекательный дизайн этикетки и упаковки с вашим брендингом.",
      duration: "2-3 дня",
    },
    {
      number: "04",
      icon: "ClipboardCheck",
      title: "Согласование образца",
      description:
        "Производим пробную партию для тестирования. Вносим правки по необходимости.",
      duration: "2 дня",
    },
    {
      number: "05",
      icon: "Factory",
      title: "Производство",
      description:
        "Запускаем серийное производство после финального согласования всех деталей.",
      duration: "5-7 дней",
    },
    {
      number: "06",
      icon: "Truck",
      title: "Доставка",
      description:
        "Упаковываем готовую продукцию и доставляем в любую точку России.",
      duration: "1-3 дня",
    },
  ];

  return (
    <section
      id="process"
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Как мы работаем
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Пошаговый процесс создания вашей косметической продукции от идеи до
            доставки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                    {step.number}
                  </div>
                  <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center">
                    <Icon
                      name={step.icon}
                      size={20}
                      className="text-purple-600"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="flex items-center text-xs text-purple-600 font-medium">
                  <Icon name="Clock" size={14} className="mr-1" />
                  {step.duration}
                </div>
              </div>

              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-purple-200 transform translate-x-0"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Полный цикл — всего за 14 дней!
          </h3>
          <p className="text-lg opacity-90 mb-6">
            От первой консультации до готовой продукции в вашем складе
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="flex items-center">
              <Icon name="Clock" size={20} className="mr-2" />
              <span>Средний срок: 14 дней</span>
            </div>
            <div className="flex items-center">
              <Icon name="Shield" size={20} className="mr-2" />
              <span>Гарантия качества</span>
            </div>
            <div className="flex items-center">
              <Icon name="Zap" size={20} className="mr-2" />
              <span>Срочное производство: 7 дней</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
