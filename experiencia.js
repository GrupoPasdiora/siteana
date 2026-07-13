const WHATSAPP_NUMBER = '556999950406';

const experiences = {
  feijoada: {
    title: 'Feijoada',
    eyebrow: 'Especialidade brasileira',
    intro: 'Escolha entre a Feijoada para Delivery aos sábados ou a Feijoada Premium para o seu evento.',
    image: './feijoada-hero.webp',
    choicesTitle: 'Como você deseja sua feijoada?',
    choicesIntro: 'Escolha uma das duas opções e fale diretamente com a Chef Ana para consultar os detalhes.',
    menus: [
      {
        id: 'delivery',
        badge: 'Todos os sábados',
        name: 'Feijoada para Delivery',
        description: 'Feijoada completa para receber em casa, disponível para entrega todos os sábados.',
        price: 69,
        image: './feijoada-delivery-mobile.webp',
        imageAlt: 'Feijoada para Delivery da Chef Ana Santos com acompanhamentos embalados',
        imageLayout: 'portrait',
        includes: [
          '🍚 Arroz fresquinho',
          '🌿 Couve refogada',
          '🍊 Laranja suculenta',
          '🍛 Farofa especial',
          '🥓 Torresmo crocante',
          '🍋 Sobremesa: Mousse de limão'
        ],
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
    choicesIntro: 'Selecione a proposta que mais combina com a ocasião e fale diretamente com a Chef Ana.',
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
    intro: 'Escolha uma proposta de menu autoral para uma noite especial.',
    image: './chef-green.webp',
    choicesTitle: 'Escolha o menu para seu jantar',
    choicesIntro: 'Duas propostas completas para uma noite especial. Escolha uma e converse com a Chef Ana.',
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

const $ = (selector) => document.querySelector(selector);

function whatsappLink(menu) {
  const message = [
    'Olá, Chef Ana! Vi o seu site e gostaria de saber mais sobre esta opção.',
    '',
    `Experiência: ${current.title}`,
    `Opção escolhida: ${menu.name}`,
    '',
    'Pode me passar mais informações?'
  ].join('\n');

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderMenus() {
  $('#menu-options').innerHTML = current.menus.map((menu, index) => `
    <article class="menu-option ${menu.imageLayout === 'portrait' ? 'menu-option-portrait' : ''}">
      <img src="${menu.image}" alt="${menu.imageAlt || menu.name}" loading="lazy" decoding="async" />
      <div class="menu-option-copy">
        <small>${menu.badge || `Opção 0${index + 1}`}</small>
        <strong>${menu.name}</strong>
        <span>${menu.description}</span>
        ${menu.includes ? `
          <div class="menu-includes">
            <b>Acompanhamentos</b>
            <ul>${menu.includes.map((item) => `<li>${item}</li>`).join('')}</ul>
          </div>
        ` : ''}
        <a class="menu-whatsapp-button" href="${whatsappLink(menu)}" target="_blank" rel="noopener">
          Falar com a Chef <i aria-hidden="true">↗</i>
        </a>
      </div>
    </article>
  `).join('');
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
}

initialize();
