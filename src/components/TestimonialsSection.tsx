import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Елена Морозова",
      position: "Основатель бренда NaturaBella",
      company: "Сеть салонов красоты",
      text: "Сотрудничаем уже 3 года. Качество продукции на высшем уровне, сроки всегда соблюдаются. Благодаря их поддержке смогли запустить собственную линейку косметики и увеличить прибыль салонов на 40%.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Андрей Петров",
      position: "Директор по закупкам",
      company: "Косметика Профи",
      text: "Искали надежного производителя для нашей федеральной сети. КосметикаКонтракт превзошли все ожидания — отличное качество, конкурентные цены, полная прозрачность процессов.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Мария Николаева",
      position: "Индивидуальный предприниматель",
      company: "Бренд детской косметики BabyGarden",
      text: "Начинала с минимальной партии в 100 единиц. Команда помогла с рецептурой, дизайном, сертификацией. Сейчас заказываю по 2000 единиц ежемесячно. Рекомендую всем начинающим!",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 500 довольных клиентов доверяют нам свой бизнес
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-purple-600 font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-green-50 p-6 rounded-xl">
            <Icon
              name="Users"
              size={32}
              className="text-green-600 mx-auto mb-4"
            />
            <div className="text-2xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Довольных клиентов</div>
          </div>
          <div className="bg-yellow-50 p-6 rounded-xl">
            <Icon
              name="Star"
              size={32}
              className="text-yellow-600 mx-auto mb-4"
            />
            <div className="text-2xl font-bold text-yellow-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Средняя оценка</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl">
            <Icon
              name="Repeat"
              size={32}
              className="text-purple-600 mx-auto mb-4"
            />
            <div className="text-2xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600">Повторных заказов</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
