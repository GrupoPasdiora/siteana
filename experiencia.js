const WHATSAPP_NUMBER = '5569999999999'; // Substitua pelo número real da Chef Ana Santos.

const experiences = {
  feijoada: {
    title: 'Feijoada',
    eyebrow: 'Especialidade brasileira',
    intro: 'Escolha entre a Feijoada para Delivery aos sábados ou a Feijoada Premium para o seu evento.',
    image: './feijoada-hero.webp',
    choicesTitle: 'Como você deseja sua feijoada?',
    choicesIntro: 'Escolha uma das duas opções. Depois, informe a data e o número de pessoas para calcular os pratos.',
    menus: [
      {
        id: 'delivery',
        badge: 'Todos os sábados',
        name: 'Feijoada para Delivery',
        description: 'Feijoada completa para receber em casa, disponível para entrega todos os sábados.',
        price: 69,
        image: './feijoada-cards.webp',
        service: 'Delivery aos sábados',
        saturdayOnly: true,
        dishes: [
          { name: 'Feijoada da Chef', perPerson: 0.4, unit: 'kg' },
          { name: 'Arroz branco', perPerson: 0.15, unit: 'kg' },
          { name: 'Farofa especial', perPerson: 0.08, unit: 'kg' },
          { name: 'Couve refogada', perPerson: 0.1, unit: 'kg' },
          { name: 'Vinagrete da casa', perPerson: 0.08, unit: 'kg' },
          { name: 'Laranja fresca', perPerson: 0.5, unit: 'un.' }
        ]
      },
      {
        id: 'eventos',
        badge: 'Para eventos',
        name: 'Feijoada Premium para Eventos',
        description: 'Uma experiência completa para aniversários, encontros, empresas e comemorações.',
        price: 109,
        image: './feijoada-cards.webp',
        service: 'Evento na data escolhida',
        serviceFee: 300,
        dishes: [
          { name: 'Torresmo de entrada', perPerson: 0.1, unit: 'kg' },
          { name: 'Feijoada da Chef', perPerson: 0.4, unit: 'kg' },
          { name: 'Arroz branco', perPerson: 0.15, unit: 'kg' },
          { name: 'Farofa especial', perPerson: 0.08, unit: 'kg' },
          { name: 'Couve e vinagrete', perPerson: 0.18, unit: 'kg' },
          { name: 'Pudim da casa', perPerson: 1, unit: 'porção' }
        ]
      }
    ]
  },
  eventos: {
    title: 'Eventos e comemorações',
    eyebrow: 'Receber com fartura',
    intro: 'Menus demonstrativos para aniversários, encontros de família, recepções e confraternizações de qualquer tamanho.',
    image: './chef-red-counter.webp',
    choicesTitle: 'Escolha o menu para seu evento',
    choicesIntro: 'Selecione a proposta que mais combina com a ocasião e calcule as quantidades para seus convidados.',
    menus: [
      {
        id: 'brasileiro',
        badge: 'Menu brasileiro',
        name: 'Celebração Brasileira',
        description: 'Sabores afetivos em uma apresentação pensada para servir grupos.',
        price: 118,
        image: './nhoque-ragu.webp',
        service: 'Evento na data escolhida',
        dishes: [
          { name: 'Petiscos de boas-vindas', perPerson: 3, unit: 'un.' },
          { name: 'Filé ao molho da casa', perPerson: 0.22, unit: 'kg' },
          { name: 'Arroz festivo', perPerson: 0.15, unit: 'kg' },
          { name: 'Legumes assados', perPerson: 0.14, unit: 'kg' },
          { name: 'Sobremesa individual', perPerson: 1, unit: 'porção' }
        ]
      },
      {
        id: 'italiano',
        badge: 'Menu italiano',
        name: 'Mesa Italiana',
        description: 'Massas artesanais e molhos encorpados para uma comemoração acolhedora.',
        price: 105,
        image: './ravioli-salvia.webp',
        service: 'Evento na data escolhida',
        dishes: [
          { name: 'Caponata e pães', perPerson: 0.12, unit: 'kg' },
          { name: 'Ravióli artesanal', perPerson: 0.28, unit: 'kg' },
          { name: 'Nhoque com ragu', perPerson: 0.28, unit: 'kg' },
          { name: 'Salada da estação', perPerson: 0.12, unit: 'kg' },
          { name: 'Tiramisù', perPerson: 1, unit: 'porção' }
        ]
      }
    ]
  },
  jantar: {
    title: 'Jantar Intimista',
    eyebrow: 'Uma noite especial',
    intro: 'Escolha uma proposta de menu autoral e veja a quantidade prevista para cada etapa do jantar.',
    image: './chef-green.webp',
    choicesTitle: 'Escolha o menu para seu jantar',
    choicesIntro: 'Duas propostas completas para uma noite especial. Selecione uma para calcular o orçamento.',
    menus: [
      {
        id: 'terra',
        badge: 'Carnes e sabores intensos',
        name: 'Menu Terra',
        description: 'Sabores intensos, texturas cremosas e finalização elegante.',
        price: 159,
        image: './file-mignon-pure.webp',
        service: 'Jantar na data escolhida',
        dishes: [
          { name: 'Entrada da estação', perPerson: 1, unit: 'porção' },
          { name: 'Filé ao molho de vinho', perPerson: 0.22, unit: 'kg' },
          { name: 'Purê aveludado', perPerson: 0.18, unit: 'kg' },
          { name: 'Sobremesa autoral', perPerson: 1, unit: 'porção' }
        ]
      },
      {
        id: 'mar',
        badge: 'Peixes e frutos do mar',
        name: 'Menu Mar',
        description: 'Uma sequência leve com camarões, peixe e ervas frescas.',
        price: 169,
        image: './risoto-camaroes.webp',
        service: 'Jantar na data escolhida',
        dishes: [
          { name: 'Entrada cítrica', perPerson: 1, unit: 'porção' },
          { name: 'Risoto de camarões', perPerson: 0.32, unit: 'kg' },
          { name: 'Salmão com ervas', perPerson: 0.2, unit: 'kg' },
          { name: 'Sobremesa leve', perPerson: 1, unit: 'porção' }
        ]
      }
    ]
  },
  finalizacao: {
    title: 'Pratos com finalização em casa',
    eyebrow: 'Praticidade com assinatura',
    intro: 'Os pratos chegam preparados e porcionados. Você recebe instruções simples para aquecer, finalizar e servir.',
    image: './chef-white-knife.webp',
    choicesTitle: 'Escolha o que deseja finalizar em casa',
    choicesIntro: 'Selecione uma proposta. Os pratos chegam preparados e com orientações para servir no melhor ponto.',
    menus: [
      {
        id: 'conforto',
        badge: 'Massas artesanais',
        name: 'Menu Conforto',
        description: 'Pratos afetivos prontos para a última etapa na sua cozinha.',
        price: 79,
        image: './nhoque-ragu.webp',
        service: 'Retirada ou entrega combinada',
        dishes: [
          { name: 'Nhoque artesanal', perPerson: 0.3, unit: 'kg' },
          { name: 'Ragu da casa', perPerson: 0.18, unit: 'kg' },
          { name: 'Queijo e ervas para finalizar', perPerson: 0.03, unit: 'kg' },
          { name: 'Sobremesa pronta', perPerson: 1, unit: 'porção' }
        ]
      },
      {
        id: 'receber',
        badge: 'Receber com elegância',
        name: 'Menu Receber Bem',
        description: 'Uma composição completa que parece recém-saída da cozinha da chef.',
        price: 96,
        image: './medalhao-risoto.webp',
        service: 'Retirada ou entrega combinada',
        dishes: [
          { name: 'Medalhão pré-selado', perPerson: 0.22, unit: 'kg' },
          { name: 'Risoto para finalizar', perPerson: 0.22, unit: 'kg' },
          { name: 'Molho da casa', perPerson: 0.08, unit: 'litro' },
          { name: 'Sobremesa pronta', perPerson: 1, unit: 'porção' }
        ]
      }
    ]
  }
};

const type = new URLSearchParams(window.location.search).get('tipo');
const currentKey = Object.hasOwn(experiences, type) ? type : 'feijoada';
const current = experiences[currentKey];
let selectedMenuId = current.menus[0].id;

const $ = (selector) => document.querySelector(selector);
const guestInput = $('#guest-count');
const dateInput = $('#event-date');

function validGuests() {
  const value = Math.floor(Number(guestInput.value));
  return Number.isFinite(value) && value > 0 ? value : 1;
}

function selectedMenu() {
  return current.menus.find((menu) => menu.id === selectedMenuId) || current.menus[0];
}

function money(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

function formatQuantity(item, guests) {
  const total = item.perPerson * guests;
  if (item.unit === 'un.') return `${Math.ceil(total)} un.`;
  if (item.unit === 'porção') return `${Math.ceil(total)} ${Math.ceil(total) === 1 ? 'porção' : 'porções'}`;
  const digits = total < 10 ? 2 : 1;
  return `${total.toLocaleString('pt-BR', { maximumFractionDigits: digits })} ${item.unit}`;
}

function formatDate(value) {
  if (!value) return 'A definir';
  const [year, month, day] = value.split('-').map(Number);
  return new Intl.DateTimeFormat('pt-BR').format(new Date(year, month - 1, day));
}

function isSaturday(value) {
  if (!value) return false;
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day).getDay() === 6;
}

function renderMenus() {
  $('#menu-options').innerHTML = current.menus.map((menu, index) => `
    <label class="menu-option ${menu.id === selectedMenuId ? 'selected' : ''}">
      <input type="radio" name="menu-option" value="${menu.id}" ${menu.id === selectedMenuId ? 'checked' : ''} />
      <img src="${menu.image}" alt="${menu.name}" />
      <span class="menu-option-copy">
        <small>${menu.badge || `Opção 0${index + 1}`}</small>
        <strong>${menu.name}</strong>
        <span>${menu.description}</span>
        <b>${money(menu.price)} por pessoa</b>
        <span class="menu-option-action">${menu.id === selectedMenuId ? 'Opção selecionada' : 'Escolher esta opção'} <i aria-hidden="true">${menu.id === selectedMenuId ? '✓' : '→'}</i></span>
      </span>
    </label>
  `).join('');

  document.querySelectorAll('input[name="menu-option"]').forEach((input) => {
    input.addEventListener('change', () => {
      selectedMenuId = input.value;
      renderMenus();
      updateDateFeedback();
      updateCalculation();
    });
  });
}

function updateDateFeedback() {
  const menu = selectedMenu();
  const feedback = $('#date-feedback');
  dateInput.setCustomValidity('');
  feedback.classList.remove('error');

  if (!menu.saturdayOnly) {
    feedback.textContent = dateInput.value ? 'Data considerada no orçamento demonstrativo.' : '';
    return true;
  }

  if (!dateInput.value) {
    feedback.textContent = 'A Feijoada para Delivery está disponível todos os sábados.';
    return true;
  }

  if (isSaturday(dateInput.value)) {
    feedback.textContent = 'Perfeito: a data escolhida é sábado e está disponível para Delivery.';
    return true;
  }

  const message = 'A Feijoada para Delivery acontece aos sábados. Escolha uma data de sábado.';
  dateInput.setCustomValidity(message);
  feedback.textContent = message;
  feedback.classList.add('error');
  return false;
}

function updateCalculation() {
  const guests = validGuests();
  const menu = selectedMenu();
  const fee = menu.serviceFee || 0;
  const total = (menu.price * guests) + fee;

  guestInput.value = guests;
  $('#calculated-dishes').innerHTML = menu.dishes.map((dish) => `
    <article class="calculated-dish">
      <span aria-hidden="true">✓</span>
      <div><strong>${dish.name}</strong><small>Quantidade calculada para ${guests} ${guests === 1 ? 'pessoa' : 'pessoas'}</small></div>
      <b>${formatQuantity(dish, guests)}</b>
    </article>
  `).join('');

  $('#summary-experience').textContent = current.title;
  $('#summary-menu').textContent = menu.name;
  $('#summary-date').textContent = formatDate(dateInput.value);
  $('#summary-guests').textContent = String(guests);
  $('#summary-mode').textContent = menu.service || 'Sob consulta';
  $('#summary-total').textContent = money(total);
  $('#summary-breakdown').textContent = fee
    ? `${money(menu.price)} × ${guests} pessoas + ${money(fee)} de estrutura para evento.`
    : `${money(menu.price)} × ${guests} pessoas. Valores sujeitos à confirmação.`;
}

function renderOtherExperiences() {
  $('#other-links').innerHTML = Object.entries(experiences)
    .filter(([key]) => key !== currentKey)
    .map(([key, experience]) => `<a href="./experiencia.html?tipo=${key}"><span>${experience.eyebrow}</span><strong>${experience.title}</strong><b aria-hidden="true">↗</b></a>`)
    .join('');
}

function initialize() {
  document.body.dataset.experience = currentKey;
  document.title = `${current.title} | Chef Ana Santos`;
  $('#experience-title').textContent = current.title;
  $('#experience-eyebrow').textContent = current.eyebrow;
  $('#experience-intro').textContent = current.intro;
  $('#experience-image').src = current.image;
  $('#experience-image').alt = `Experiência ${current.title} com a Chef Ana Santos`;
  $('#choices-title').textContent = current.choicesTitle;
  $('#choices-intro').textContent = current.choicesIntro;
  renderMenus();
  renderOtherExperiences();
  updateDateFeedback();
  updateCalculation();
}

guestInput.addEventListener('input', updateCalculation);
guestInput.addEventListener('blur', updateCalculation);
dateInput.addEventListener('change', () => {
  updateDateFeedback();
  updateCalculation();
});

$('#experience-form').addEventListener('submit', (event) => {
  event.preventDefault();
  if (!updateDateFeedback()) {
    dateInput.reportValidity();
    return;
  }
  const guests = validGuests();
  const menu = selectedMenu();
  const fee = menu.serviceFee || 0;
  const total = (menu.price * guests) + fee;
  const dishes = menu.dishes.map((dish) => `- ${dish.name}: ${formatQuantity(dish, guests)}`).join('\n');
  const message = [
    'Olá, quero confirmar um orçamento demonstrativo do site da Chef Ana Santos.',
    '',
    `Nome: ${$('#customer-name').value}`,
    `Meu WhatsApp: ${$('#customer-whatsapp').value}`,
    `Experiência: ${current.title}`,
    `Cardápio: ${menu.name}`,
    `Data: ${formatDate(dateInput.value)}`,
    `Pessoas: ${guests}`,
    `Atendimento: ${menu.service || 'Sob consulta'}`,
    '',
    'Quantidades calculadas:',
    dishes,
    '',
    `Estimativa demonstrativa: ${money(total)}`,
    `Observação: ${$('#customer-note').value || 'Sem observações.'}`,
    '',
    'Sei que os pratos e valores são demonstrativos e aguardo a confirmação da equipe.'
  ].join('\n');

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

initialize();
