import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-industrial-accent" style={{fontFamily: 'Roboto Condensed'}}>
              СТАЛЬПРОМ
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors" style={{fontFamily: 'Open Sans'}}>О заводе</a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors" style={{fontFamily: 'Open Sans'}}>Продукция</a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors" style={{fontFamily: 'Open Sans'}}>Проекты</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors" style={{fontFamily: 'Open Sans'}}>Контакты</a>
          </nav>
          <Button className="bg-industrial-accent hover:bg-industrial-accent/90 text-white">
            <Icon name="Phone" size={16} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-steel-dark to-metal-dark overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/img/54a21f37-abe4-431e-9443-84169787ad26.jpg" 
            alt="Industrial steel construction" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight" style={{fontFamily: 'Roboto Condensed'}}>
            МЕТАЛЛОКОНСТРУКЦИИ
            <br />
            <span className="text-industrial-accent">БУДУЩЕГО</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90" style={{fontFamily: 'Open Sans'}}>
            Производство высокопрочных строительных элементов с применением передовых технологий
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-industrial-accent hover:bg-industrial-accent/90 text-white px-8 py-3 text-lg">
              <Icon name="Building" size={20} className="mr-2" />
              Наши проекты
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-steel-dark px-8 py-3 text-lg">
              <Icon name="FileText" size={20} className="mr-2" />
              Каталог продукции
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-industrial-accent text-white">С 1985 года</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" style={{fontFamily: 'Roboto Condensed'}}>
                Лидер металлургической отрасли
              </h2>
              <p className="text-lg text-muted-foreground mb-8" style={{fontFamily: 'Open Sans'}}>
                Наш завод специализируется на производстве высококачественных металлоконструкций 
                и строительных элементов. Современное оборудование и многолетний опыт позволяют 
                нам создавать решения для самых сложных инженерных задач.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-industrial-accent mb-2" style={{fontFamily: 'Roboto Condensed'}}>38+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-industrial-accent mb-2" style={{fontFamily: 'Roboto Condensed'}}>500+</div>
                  <div className="text-sm text-muted-foreground">проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-industrial-accent mb-2" style={{fontFamily: 'Roboto Condensed'}}>15k</div>
                  <div className="text-sm text-muted-foreground">тонн в месяц</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/5b34b471-3078-471a-be7d-d4ec70479160.jpg" 
                alt="Steel components" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-industrial-accent text-white">Продукция</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" style={{fontFamily: 'Roboto Condensed'}}>
              Наша специализация
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{fontFamily: 'Open Sans'}}>
              Полный цикл производства металлоконструкций от проектирования до монтажа
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-industrial-accent">
              <CardHeader>
                <Icon name="Building2" size={40} className="text-industrial-accent mb-4" />
                <CardTitle style={{fontFamily: 'Roboto Condensed'}}>Каркасы зданий</CardTitle>
                <CardDescription style={{fontFamily: 'Open Sans'}}>
                  Стальные каркасы промышленных и гражданских зданий любой сложности
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-industrial-accent">
              <CardHeader>
                <Icon name="Construction" size={40} className="text-industrial-accent mb-4" />
                <CardTitle style={{fontFamily: 'Roboto Condensed'}}>Мостовые конструкции</CardTitle>
                <CardDescription style={{fontFamily: 'Open Sans'}}>
                  Элементы мостов, эстакад и транспортных развязок
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-industrial-accent">
              <CardHeader>
                <Icon name="Wrench" size={40} className="text-industrial-accent mb-4" />
                <CardTitle style={{fontFamily: 'Roboto Condensed'}}>Нестандартные изделия</CardTitle>
                <CardDescription style={{fontFamily: 'Open Sans'}}>
                  Изготовление по индивидуальным чертежам и техническим требованиям
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-industrial-accent">
              <CardHeader>
                <Icon name="Factory" size={40} className="text-industrial-accent mb-4" />
                <CardTitle style={{fontFamily: 'Roboto Condensed'}}>Промышленное оборудование</CardTitle>
                <CardDescription style={{fontFamily: 'Open Sans'}}>
                  Металлоконструкции для технологического оборудования
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-industrial-accent">
              <CardHeader>
                <Icon name="Zap" size={40} className="text-industrial-accent mb-4" />
                <CardTitle style={{fontFamily: 'Roboto Condensed'}}>Энергетические объекты</CardTitle>
                <CardDescription style={{fontFamily: 'Open Sans'}}>
                  Конструкции для электростанций и энергетической инфраструктуры
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-industrial-accent">
              <CardHeader>
                <Icon name="Shield" size={40} className="text-industrial-accent mb-4" />
                <CardTitle style={{fontFamily: 'Roboto Condensed'}}>Защитные сооружения</CardTitle>
                <CardDescription style={{fontFamily: 'Open Sans'}}>
                  Ограждения, защитные экраны и специальные конструкции
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="/img/38a98fe4-c336-4428-8a68-e5ad239be35b.jpg" 
                alt="Modern steel factory" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-industrial-accent text-white">Технологии</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" style={{fontFamily: 'Roboto Condensed'}}>
                Современное производство
              </h2>
              <p className="text-lg text-muted-foreground mb-8" style={{fontFamily: 'Open Sans'}}>
                Наш завод оснащен передовым европейским оборудованием, которое позволяет 
                обеспечивать высочайшее качество продукции и соблюдать самые строгие 
                международные стандарты.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="CheckCircle" size={24} className="text-industrial-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1" style={{fontFamily: 'Roboto Condensed'}}>Автоматизированная резка</h3>
                    <p className="text-sm text-muted-foreground" style={{fontFamily: 'Open Sans'}}>Плазменная и лазерная резка с ЧПУ</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="CheckCircle" size={24} className="text-industrial-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1" style={{fontFamily: 'Roboto Condensed'}}>Роботизированная сварка</h3>
                    <p className="text-sm text-muted-foreground" style={{fontFamily: 'Open Sans'}}>Высокоточные сварочные роботы</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="CheckCircle" size={24} className="text-industrial-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1" style={{fontFamily: 'Roboto Condensed'}}>Контроль качества</h3>
                    <p className="text-sm text-muted-foreground" style={{fontFamily: 'Open Sans'}}>Ультразвуковая дефектоскопия</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-industrial-accent text-white">Портфолио</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" style={{fontFamily: 'Roboto Condensed'}}>
              Реализованные проекты
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{fontFamily: 'Open Sans'}}>
              Наши конструкции служат основой для крупнейших объектов России
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-steel-dark to-metal-dark flex items-center justify-center">
                <Icon name="Building2" size={64} className="text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{fontFamily: 'Roboto Condensed'}}>ТРЦ "Метрополис"</h3>
                <p className="text-muted-foreground mb-4" style={{fontFamily: 'Open Sans'}}>
                  Стальной каркас торгово-развлекательного центра площадью 45,000 м²
                </p>
                <Badge variant="outline">Завершен 2023</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-steel-dark to-metal-dark flex items-center justify-center">
                <Icon name="Construction" size={64} className="text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{fontFamily: 'Roboto Condensed'}}>Мост через р. Волга</h3>
                <p className="text-muted-foreground mb-4" style={{fontFamily: 'Open Sans'}}>
                  Металлические пролетные строения автодорожного моста длиной 1,200 м
                </p>
                <Badge variant="outline">Завершен 2022</Badge>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-steel-dark to-metal-dark flex items-center justify-center">
                <Icon name="Factory" size={64} className="text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{fontFamily: 'Roboto Condensed'}}>Завод "Сибирьметалл"</h3>
                <p className="text-muted-foreground mb-4" style={{fontFamily: 'Open Sans'}}>
                  Производственные корпуса и инженерные сооружения металлургического предприятия
                </p>
                <Badge variant="outline">Завершен 2023</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-industrial-accent text-white">Преимущества</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" style={{fontFamily: 'Roboto Condensed'}}>
              Почему выбирают нас
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-industrial-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-industrial-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{fontFamily: 'Roboto Condensed'}}>Сертификаты качества</h3>
              <p className="text-muted-foreground text-sm" style={{fontFamily: 'Open Sans'}}>ISO 9001, ГОСТ Р, международные стандарты</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-industrial-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-industrial-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{fontFamily: 'Roboto Condensed'}}>Точные сроки</h3>
              <p className="text-muted-foreground text-sm" style={{fontFamily: 'Open Sans'}}>Соблюдение договорных обязательств</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-industrial-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-industrial-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{fontFamily: 'Roboto Condensed'}}>Логистика</h3>
              <p className="text-muted-foreground text-sm" style={{fontFamily: 'Open Sans'}}>Доставка по всей России</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-industrial-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={32} className="text-industrial-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{fontFamily: 'Roboto Condensed'}}>Поддержка 24/7</h3>
              <p className="text-muted-foreground text-sm" style={{fontFamily: 'Open Sans'}}>Техническая поддержка и сервис</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-steel-dark text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Badge className="mb-4 bg-industrial-accent text-white">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: 'Roboto Condensed'}}>
                Начните свой проект
              </h2>
              <p className="text-lg text-gray-300 mb-8" style={{fontFamily: 'Open Sans'}}>
                Свяжитесь с нами для получения персонального предложения и технической консультации
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Icon name="Phone" size={24} className="text-industrial-accent" />
                  <div>
                    <div className="font-semibold">+7 (495) 123-45-67</div>
                    <div className="text-sm text-gray-400">Отдел продаж</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Icon name="Mail" size={24} className="text-industrial-accent" />
                  <div>
                    <div className="font-semibold">info@stalprom.ru</div>
                    <div className="text-sm text-gray-400">Общие вопросы</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" size={24} className="text-industrial-accent" />
                  <div>
                    <div className="font-semibold">г. Москва, Промышленная ул., 15</div>
                    <div className="text-sm text-gray-400">Главный офис и производство</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-card">
              <CardHeader>
                <CardTitle style={{fontFamily: 'Roboto Condensed'}}>Оставить заявку</CardTitle>
                <CardDescription style={{fontFamily: 'Open Sans'}}>
                  Опишите ваш проект, и мы подготовим коммерческое предложение
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Имя</label>
                    <input className="w-full mt-1 p-2 border rounded" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Компания</label>
                    <input className="w-full mt-1 p-2 border rounded" placeholder="Название компании" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input className="w-full mt-1 p-2 border rounded" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium">Телефон</label>
                  <input className="w-full mt-1 p-2 border rounded" placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="text-sm font-medium">Описание проекта</label>
                  <textarea className="w-full mt-1 p-2 border rounded h-20" placeholder="Опишите ваши требования..."></textarea>
                </div>
                <Button className="w-full bg-industrial-accent hover:bg-industrial-accent/90">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-industrial-dark text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4" style={{fontFamily: 'Roboto Condensed'}}>
                СТАЛЬПРОМ
              </div>
              <p className="text-sm" style={{fontFamily: 'Open Sans'}}>
                Металлургический завод полного цикла производства высокопрочных конструкций
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4" style={{fontFamily: 'Roboto Condensed'}}>Продукция</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-industrial-accent transition-colors">Каркасы зданий</a></li>
                <li><a href="#" className="hover:text-industrial-accent transition-colors">Мостовые конструкции</a></li>
                <li><a href="#" className="hover:text-industrial-accent transition-colors">Промышленное оборудование</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4" style={{fontFamily: 'Roboto Condensed'}}>Услуги</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-industrial-accent transition-colors">Проектирование</a></li>
                <li><a href="#" className="hover:text-industrial-accent transition-colors">Производство</a></li>
                <li><a href="#" className="hover:text-industrial-accent transition-colors">Монтаж</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-white mb-4" style={{fontFamily: 'Roboto Condensed'}}>Контакты</h3>
              <ul className="space-y-2 text-sm">
                <li>+7 (495) 123-45-67</li>
                <li>info@stalprom.ru</li>
                <li>г. Москва, Промышленная ул., 15</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 СТАЛЬПРОМ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;