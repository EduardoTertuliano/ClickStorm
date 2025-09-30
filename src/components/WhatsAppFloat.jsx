import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Mostrar o ícone após 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Mostrar tooltip após mais 2 segundos
      setTimeout(() => setShowTooltip(true), 2000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Esconder tooltip após 5 segundos
    if (showTooltip) {
      const timer = setTimeout(() => setShowTooltip(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [showTooltip])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Vim através do site da ClickStorm e gostaria de solicitar um orçamento para criação do meu site profissional."
    )
    window.open(`https://wa.me/5511987838439?text=${message}`, '_blank')
  }

  const handleTooltipClose = () => {
    setShowTooltip(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                className="absolute bottom-20 right-0 mb-2 mr-2"
              >
                <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-xs relative">
                  <button
                    onClick={handleTooltipClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="pr-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      💬 Precisa de ajuda?
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Fale conosco agora e solicite seu orçamento gratuito!
                    </p>
                    <button
                      onClick={handleWhatsAppClick}
                      className="bg-green-500 hover:bg-green-600 text-white text-sm px-3 py-2 rounded-lg transition-colors w-full"
                    >
                      Solicitar Orçamento
                    </button>
                  </div>
                  {/* Seta do tooltip */}
                  <div className="absolute bottom-[-8px] right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botão flutuante do WhatsApp */}
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 group relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              boxShadow: '0 8px 32px rgba(37, 211, 102, 0.4)'
            }}
          >
            {/* Efeito de ondas */}
            <div className="absolute inset-0 rounded-full">
              <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"></div>
              <div className="absolute inset-0 rounded-full bg-white opacity-10 animate-pulse"></div>
            </div>
            
            {/* Ícone do WhatsApp */}
            <MessageCircle className="w-8 h-8 relative z-10" />
            
            {/* Badge de notificação */}
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-bounce">
              1
            </div>
          </motion.button>

          {/* Texto "WhatsApp" abaixo do botão */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-2"
          >
            <span className="text-xs text-gray-600 font-medium bg-white px-2 py-1 rounded-full shadow-sm">
              WhatsApp
            </span>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default WhatsAppFloat
