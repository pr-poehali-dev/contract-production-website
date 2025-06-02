import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const ContactsSection = () => {
  return (
    <section
      id="contacts"
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Получите персональное коммерческое предложение в течение 24 часов
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Оставить заявку
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <Input placeholder="Введите имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Компания
                    </label>
                    <Input placeholder="Название компании" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <Input placeholder="+7 (999) 999-99-99" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тип продукции
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип продукции" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="face">Уход за лицом</SelectItem>
                      <SelectItem value="body">Уход за телом</SelectItem>
                      <SelectItem value="hair">Уход за волосами</SelectItem>
                      <SelectItem value="children">
                        Детская косметика
                      </SelectItem>
                      <SelectItem value="men">Мужская косметика</SelectItem>
                      <SelectItem value="professional">
                        Профессиональная косметика
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Планируемый объем заказа
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите объем" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100-500">100-500 единиц</SelectItem>
                      <SelectItem value="500-1000">500-1000 единиц</SelectItem>
                      <SelectItem value="1000-5000">
                        1000-5000 единиц
                      </SelectItem>
                      <SelectItem value="5000+">5000+ единиц</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Комментарий
                  </label>
                  <Textarea
                    placeholder="Расскажите подробнее о вашем проекте, требованиях к продукции, сроках..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-3">
                  <Icon name="Send" size={20} />
                  Отправить заявку
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных
                  данных
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon
                    name="MapPin"
                    size={24}
                    className="text-purple-600 mr-3"
                  />
                  <h3 className="text-lg font-semibold">Адрес производства</h3>
                </div>
                <p className="text-gray-700 ml-9">
                  г. Москва, ул. Производственная, 15
                  <br />
                  Производственный комплекс "КосметикаКонтракт"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon
                    name="Phone"
                    size={24}
                    className="text-purple-600 mr-3"
                  />
                  <h3 className="text-lg font-semibold">Телефоны</h3>
                </div>
                <div className="ml-9 space-y-2">
                  <div>
                    <div className="font-medium text-gray-900">
                      +7 (800) 123-45-67
                    </div>
                    <div className="text-sm text-gray-600">
                      Бесплатная горячая линия
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      +7 (495) 123-45-67
                    </div>
                    <div className="text-sm text-gray-600">
                      Отдел продаж (Москва)
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon
                    name="Clock"
                    size={24}
                    className="text-purple-600 mr-3"
                  />
                  <h3 className="text-lg font-semibold">Время работы</h3>
                </div>
                <div className="ml-9 space-y-1">
                  <div className="text-gray-700">Пн-Пт: 9:00 - 18:00</div>
                  <div className="text-gray-700">Сб-Вс: выходной</div>
                  <div className="text-sm text-purple-600 font-medium">
                    Заявки принимаем круглосуточно
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Icon
                    name="Mail"
                    size={24}
                    className="text-purple-600 mr-3"
                  />
                  <h3 className="text-lg font-semibold">Email</h3>
                </div>
                <div className="ml-9 space-y-1">
                  <div className="text-gray-700">
                    info@kosmetika-contract.ru
                  </div>
                  <div className="text-sm text-gray-600">Общие вопросы</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
