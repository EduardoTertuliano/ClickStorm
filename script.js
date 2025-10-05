// Menu Hamburguer
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// WhatsApp Float Button e Modal
const whatsappFloat = document.getElementById('whatsappFloat');
const whatsappModal = document.getElementById('whatsappModal');
const closeModal = document.getElementById('closeModal');
const sendWhatsapp = document.getElementById('sendWhatsapp');
const whatsappMessage = document.getElementById('whatsappMessage');

// Abrir modal
whatsappFloat.addEventListener('click', () => {
    whatsappModal.classList.add('active');
    whatsappMessage.focus();
});

// Fechar modal
closeModal.addEventListener('click', () => {
    whatsappModal.classList.remove('active');
});

// Fechar modal ao clicar fora
whatsappModal.addEventListener('click', (e) => {
    if (e.target === whatsappModal) {
        whatsappModal.classList.remove('active');
    }
});

// Enviar mensagem para WhatsApp
sendWhatsapp.addEventListener('click', () => {
    const message = whatsappMessage.value.trim();
    const phoneNumber = '5511987838439';
    
    if (message) {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
        whatsappModal.classList.remove('active');
        whatsappMessage.value = '';
    } else {
        alert('Por favor, digite uma mensagem antes de enviar.');
    }
});

// Permitir envio com Enter (Ctrl+Enter para nova linha)
whatsappMessage.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.ctrlKey) {
        e.preventDefault();
        sendWhatsapp.click();
    }
});

// Animação de entrada dos elementos ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards
document.querySelectorAll('.importancia-card, .servico-card, .tool-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Efeito de mudança de cor do header ao scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px var(--shadow)';
    } else {
        header.style.boxShadow = '0 2px 10px var(--shadow)';
    }
});

// Fechar modal com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && whatsappModal.classList.contains('active')) {
        whatsappModal.classList.remove('active');
    }
});
