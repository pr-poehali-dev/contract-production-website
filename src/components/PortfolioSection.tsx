import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      category: "Уход за лицом",
      brand: "NaturaBella",
      description: "Линейка антивозрастной косметики для салонов красоты",
      products: ["Крем для лица", "Сыворотка", "Маска"],
      volume: "5000 единиц/месяц",
      image:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400",
    },
    {
      category: "Детская косметика",
      brand: "BabyGarden",
      description: "Гипоаллергенная серия для малышей",
      products: ["Детский крем", "Шампунь", "Масло"],
      volume: "2000 единиц/месяц",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    },
    {
      category: "Мужская косметика",
      brand: "BarberPro",
      description: "Профессиональная серия для барбершопов",
      products: ["Крем для бритья", "Бальзам", "Воск для усов"],
      volume: "1500 единиц/месяц",
      image:
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=400",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Наши успешные проекты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 500 реализованных проектов — от стартапов до федеральных сетей
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-purple-100 to-indigo-100 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.brand}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.brand}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>

                <div className="space-y-3">
                  <div>
                    <div className="flex items-center mb-2">
                      <Icon
                        name="Package"
                        size={16}
                        className="text-purple-600 mr-2"
                      />
                      <span className="font-medium text-sm">Продукты:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {item.products.map((product, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Icon
                      name="TrendingUp"
                      size={16}
                      className="text-green-600 mr-2"
                    />
                    <span className="text-sm text-gray-600">{item.volume}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-purple-50 p-6 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Проектов запущено</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-sm text-gray-600">Активных брендов</div>
          </div>
          <div className="bg-green-50 p-6 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-sm text-gray-600">Видов продукции</div>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl">
            <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
            <div className="text-sm text-gray-600">Довольных клиентов</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
