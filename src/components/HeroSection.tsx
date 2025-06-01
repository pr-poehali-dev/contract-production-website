import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-montserrat">
          Контрактное производство
          <span className="text-purple-600 block">натуральной косметики</span>
        </h1>

        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Производство продукции под вашей собственной торговой маркой – удачное
          решение для малого и среднего косметического бизнеса, салонов красоты
          и частных мастеров
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
          >
            <Icon name="Sparkles" size={20} />
            Начать производство
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg"
          >
            <Icon name="Phone" size={20} />
            Консультация
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Icon name="Award" size={32} className="text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Сертифицированное качество
            </h3>
            <p className="text-gray-600">
              Все стандарты ГОСТ и международные сертификаты
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Icon name="Zap" size={32} className="text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Быстрый запуск</h3>
            <p className="text-gray-600">
              От идеи до готовой продукции за 14 дней
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Icon name="Leaf" size={32} className="text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">100% натурально</h3>
            <p className="text-gray-600">
              Только экологически чистые компоненты
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
