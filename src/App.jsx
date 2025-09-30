import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Monitor, 
  Smartphone, 
  Tablet, 
  Zap, 
  TrendingUp, 
  Shield, 
  Clock, 
  Users, 
  Star,
  CheckCircle,
  ArrowRight,
  Globe,
  Search,
  BarChart3,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Menu,
  X
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import clickstormLogo from './assets/Clickstorm_logo.jpg'
import WhatsAppFloat from './components/WhatsAppFloat'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'vantagens', 'servicos', 'sobre', 'contato']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const vantagens = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Presença Digital 24/7",
      description: "Seu negócio funcionando 24 horas por dia, 7 dias por semana. Seus clientes podem conhecer seus produtos e serviços a qualquer momento, aumentando suas oportunidades de venda mesmo quando você está dormindo."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Aumento de Vendas Comprovado",
      description: "Empresas com sites profissionais vendem até 300% mais que aquelas sem presença digital. Transforme visitantes em clientes com estratégias de conversão otimizadas e design persuasivo."
    },
    {
      icon: <Search className="w-8 h-8 text-purple-500" />,
      title: "Seja Encontrado no Google",
      description: "Apareça nas primeiras posições do Google quando seus clientes procurarem por seus serviços. SEO otimizado para garantir que você seja a primeira opção dos consumidores da sua região."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Credibilidade Profissional",
      description: "Um site profissional transmite confiança e seriedade. 75% dos consumidores julgam a credibilidade de uma empresa pela qualidade do seu site. Não perca clientes por falta de presença digital."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: "Análise de Resultados",
      description: "Acompanhe em tempo real quantas pessoas visitam seu site, de onde vêm e quais produtos mais interessam. Dados precisos para tomar decisões estratégicas e aumentar seus lucros."
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      title: "Alcance Ilimitado",
      description: "Atenda clientes de qualquer lugar do Brasil e do mundo. Expanda seu mercado além das limitações geográficas e multiplique suas oportunidades de negócio exponencialmente."
    }
  ]

  const servicos = [
    {
      title: "Sites Institucionais",
      description: "Sites elegantes e profissionais que transmitem credibilidade e convertem visitantes em clientes.",
      features: ["Design Responsivo", "SEO Otimizado", "Carregamento Rápido", "Formulários de Contato"]
    },
    {
      title: "E-commerce Completo",
      description: "Lojas virtuais completas com sistema de pagamento integrado e gestão de produtos.",
      features: ["Catálogo de Produtos", "Carrinho de Compras", "Pagamento Online", "Gestão de Pedidos"]
    },
    {
      title: "Landing Pages",
      description: "Páginas de alta conversão focadas em capturar leads e gerar vendas para campanhas específicas.",
      features: ["Alta Conversão", "A/B Testing", "Integração com CRM", "Analytics Avançado"]
    }
  ]

  const depoimentos = [
    {
      nome: "Maria Silva",
      empresa: "Boutique Elegance",
      texto: "Depois do site da ClickStorm, minhas vendas triplicaram! Agora recebo pedidos até de madrugada.",
      rating: 5
    },
    {
      nome: "João Santos",
      empresa: "Consultoria JS",
      texto: "Profissionalismo excepcional. O site ficou exatamente como eu imaginava, só que melhor!",
      rating: 5
    },
    {
      nome: "Ana Costa",
      empresa: "Clínica Bem Estar",
      texto: "Agora apareço no Google e minha agenda está sempre lotada. Investimento que se paga sozinho!",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={clickstormLogo} alt="ClickStorm" className="h-12 w-auto" />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Início' },
                { id: 'vantagens', label: 'Vantagens' },
                { id: 'servicos', label: 'Serviços' },
                { id: 'sobre', label: 'Sobre' },
                { id: 'contato', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contato')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Solicitar Orçamento
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4 border-t border-gray-200"
              >
                <div className="flex flex-col space-y-4 pt-4">
                  {[
                    { id: 'home', label: 'Início' },
                    { id: 'vantagens', label: 'Vantagens' },
                    { id: 'servicos', label: 'Serviços' },
                    { id: 'sobre', label: 'Sobre' },
                    { id: 'contato', label: 'Contato' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button 
                    onClick={() => scrollToSection('contato')}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full"
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                🚀 Transforme Seu Negócio Digital
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Sites que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Convertem</span> Visitantes em Clientes
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Não perca mais vendas por não ter um site profissional. A ClickStorm cria sites responsivos, otimizados para SEO e focados em resultados que fazem seu negócio crescer exponencialmente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection('contato')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6"
                >
                  Quero Meu Site Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('vantagens')}
                  className="text-lg px-8 py-6 border-2 hover:bg-gray-50"
                >
                  Ver Vantagens
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Monitor className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Desktop</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Tablet className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Tablet</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Smartphone className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Mobile</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">100% Responsivo</h3>
                  <p className="text-gray-600">Perfeito em todos os dispositivos</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vantagens Section */}
      <section id="vantagens" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              💰 ROI Garantido
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Por Que Seu Negócio <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">PRECISA</span> de um Site?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada dia sem um site profissional é dinheiro perdido. Veja como um site pode revolucionar seus resultados e multiplicar seus lucros.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vantagens.map((vantagem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader>
                    <div className="mb-4">{vantagem.icon}</div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {vantagem.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {vantagem.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
              <h3 className="text-2xl font-bold text-red-800 mb-4">
                ⚠️ ATENÇÃO: Você está perdendo clientes AGORA!
              </h3>
              <p className="text-lg text-red-700 mb-6">
                Enquanto você lê isso, seus concorrentes estão vendendo online. Não deixe que eles fiquem com seus clientes!
              </p>
              <Button 
                size="lg"
                onClick={() => scrollToSection('contato')}
                className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6"
              >
                Parar de Perder Vendas AGORA!
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
              🎯 Soluções Completas
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas e personalizadas para cada tipo de negócio. Do site institucional à loja virtual completa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {servico.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {servico.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {servico.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
              ⭐ Clientes Satisfeitos
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              O Que Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">Clientes</span> Dizem
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(depoimento.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{depoimento.texto}"</p>
                    <div>
                      <p className="font-bold text-gray-900">{depoimento.nome}</p>
                      <p className="text-gray-600 text-sm">{depoimento.empresa}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                🏆 Especialistas em Resultados
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Sobre a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">ClickStorm</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Somos especialistas em criar sites que não apenas impressionam visualmente, mas que realmente convertem visitantes em clientes. Nossa missão é transformar seu negócio através de uma presença digital poderosa e estratégica.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Com anos de experiência no mercado digital, já ajudamos centenas de empresas a multiplicarem suas vendas através de sites profissionais, otimizados e focados em resultados concretos.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Sites Criados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">300%</div>
                  <div className="text-gray-600">Aumento Médio de Vendas</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Clock className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Entrega Rápida</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Shield className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Garantia Total</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <Users className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Suporte 24/7</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <TrendingUp className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">Resultados Garantidos</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              📞 Fale Conosco
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Pronto para <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Decolar</span> Seu Negócio?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Entre em contato agora e descubra como podemos transformar seu negócio com um site profissional que realmente vende.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Entre em Contato
                  </CardTitle>
                  <CardDescription>
                    Fale conosco agora e solicite seu orçamento gratuito
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                      <a 
                        href="https://wa.me/5511987838439" 
                        className="text-green-600 hover:text-green-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        (11) 98783-8439
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Telefone</p>
                      <a 
                        href="tel:+5511987838439" 
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        (11) 98783-8439
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">E-mail</p>
                      <a 
                        href="mailto:contato@clickstorm.com.br" 
                        className="text-purple-600 hover:text-purple-700 transition-colors"
                      >
                        contato@clickstorm.com.br
                      </a>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button 
                      size="lg"
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg py-6"
                      onClick={() => window.open('https://wa.me/5511987838439?text=Olá! Gostaria de solicitar um orçamento para criação do meu site profissional.', '_blank')}
                    >
                      <MessageCircle className="mr-2 w-5 h-5" />
                      Solicitar Orçamento via WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-blue-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    🎁 Oferta Especial!
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Entre em contato hoje e ganhe:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Consultoria gratuita de 1 hora</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Análise completa do seu negócio</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Proposta personalizada</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Desconto especial de 20%</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 italic">
                    * Oferta válida por tempo limitado
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 bg-gradient-to-br from-red-50 to-orange-50">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-red-800 mb-4">
                    ⏰ Não Espere Mais!
                  </h3>
                  <p className="text-red-700 mb-4">
                    Cada dia sem um site profissional é dinheiro perdido. Seus concorrentes não vão esperar!
                  </p>
                  <Button 
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white w-full"
                    onClick={() => window.open('https://wa.me/5511987838439?text=Olá! Quero parar de perder vendas e preciso do meu site URGENTE!', '_blank')}
                  >
                    QUERO MEU SITE AGORA!
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={clickstormLogo} alt="ClickStorm" className="h-12 w-auto mb-4 brightness-0 invert" />
              <p className="text-gray-400 mb-4">
                Transformando negócios através de sites profissionais que realmente convertem.
              </p>
              <div className="flex space-x-4">
                <Button 
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  onClick={() => window.open('https://wa.me/5511987838439', '_blank')}
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sites Institucionais</li>
                <li>E-commerce</li>
                <li>Landing Pages</li>
                <li>SEO e Marketing Digital</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p>WhatsApp: (11) 98783-8439</p>
                <p>E-mail: contato@clickstorm.com.br</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ClickStorm. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  )
}

export default App
