const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const occasionSelect = document.querySelector('#ocasiao');
const budgetForm = document.querySelector('#budget-form');
const WHATSAPP_NUMBER = '5569999999999'; // Troque pelo número real da Chef Ana Santos

menuToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-fill]').forEach((button) => {
  button.addEventListener('click', () => {
    if (occasionSelect) occasionSelect.value = button.dataset.fill;
  });
});

const filters = document.querySelectorAll('.filter');
const dishes = document.querySelectorAll('.dish-card');
filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    filter.classList.add('active');
    const selected = filter.dataset.filter;
    dishes.forEach((dish) => {
      const categories = dish.dataset.category || '';
      dish.hidden = selected !== 'all' && !categories.includes(selected);
    });
  });
});

budgetForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(budgetForm);
  const nome = data.get('nome') || '';
  const whatsapp = data.get('whatsapp') || '';
  const dataEvento = data.get('data') || 'a definir';
  const pessoas = data.get('pessoas') || 'a definir';
  const ocasiao = data.get('ocasiao') || 'quero orientação';
  const mensagem = data.get('mensagem') || 'Sem observações adicionais.';

  const texto = [
    'Olá, vi o site da Chef Ana Santos e quero receber uma sugestão personalizada.',
    '',
    `Nome: ${nome}`,
    `WhatsApp: ${whatsapp}`,
    `Data: ${dataEvento}`,
    `Nº de pessoas: ${pessoas}`,
    `Ocasião: ${ocasiao}`,
    `Mensagem: ${mensagem}`
  ].join('\n');

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`, '_blank');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
