const WHATSAPP_NUMBER = '556999950406';

const experiences = {
  massas: {
    title: 'Noite de Massas',
    eyebrow: 'Massas artesanais',
    intro: 'Uma seleção de massas artesanais com molhos encorpados, preparadas para uma noite especial à mesa.',
    image: './ravioli-salvia.webp',
    choicesTitle: 'Qual massa combina com a sua noite?',
    choicesIntro: 'Escolha uma das massas artesanais e fale diretamente com a Chef Ana.',
    menus: [
      {
        id: 'fettuccine-camaroes',
        badge: 'Massa artesanal',
        name: 'Fettuccine ao molho de camarões',
        description: 'Massa artesanal envolvida em um molho cremoso de camarões.',
        image: './fettuccine-camaroes.webp',
        service: 'Jantar na data escolhida',
        dishes: [
          { name: 'Fettuccine artesanal', perPerson: 0.28, unit: 'kg' },
          { name: 'Molho cremoso de camarões', perPerson: 0.12, unit: 'litro' },
          { name: 'Salada da estação', perPerson: 0.12, unit: 'kg' },
          { name: 'Sobremesa individual', perPerson: 1, unit: 'porção' }
        ]
      },
      {
        id: 'ravioli-salvia',
        badge: 'Massa recheada',
        name: 'Ravióli artesanal à sálvia',
        description: 'Ravióli recheado, finalizado na manteiga aromatizada com sálvia.',
        image: './ravioli-salvia.webp',
        service: 'Jantar na data escolhida',
        dishes: [
          { name: 'Ravióli artesanal', perPerson: 0.28, unit: 'kg' },
          { name: 'Manteiga de sálvia', perPerson: 0.05, unit: 'kg' },
          { name: 'Salada da estação', perPerson: 0.12, unit: 'kg' },
          { name: 'Sobremesa individual', perPerson: 1, unit: 'porção' }
        ]
      }
    ]
  },
  risotos: {
    title: 'Noite de Risotos',
    eyebrow: 'Risotos cremosos',
    intro: 'Risotos preparados e finalizados no ponto cremoso para uma experiência marcante. Escolha o seu e converse com a Chef Ana.',
    image: './risoto-camaroes.webp',
    choicesTitle: 'Qual risoto combina com a sua ocasião?',
    choicesIntro: 'Selecione um dos risotos cremosos da Chef Ana e fale diretamente pelo WhatsApp.',
    menus: [
      {
        id: 'file-mignon',
        badge: 'Sabores intensos',
        name: 'Risoto cremoso de filé mignon',
        description: 'Risoto cremoso finalizado com cubos macios de filé mignon.',
        image: './medalhao-risoto.webp',
        service: 'Jantar na data escolhida',
        dishes: [
          { name: 'Risoto cremoso', perPerson: 0.3, unit: 'kg' },
          { name: 'Filé mignon em cubos', perPerson: 0.15, unit: 'kg' },
          { name: 'Salada da estação', perPerson: 0.12, unit: 'kg' },
          { name: 'Sobremesa individual', perPerson: 1, unit: 'porção' }
        ]
      },
      {
        id: 'camarao',
        badge: 'Frutos do mar',
        name: 'Risoto de camarão',
        description: 'Risoto cremoso com camarões dourados e um toque de ervas frescas.',
        image: './risoto-camaroes.webp',
        service: 'Jantar na data escolhida',
        dishes: [
          { name: 'Risoto cremoso', perPerson: 0.3, unit: 'kg' },
          { name: 'Camarões dourados', perPerson: 0.15, unit: 'kg' },
          { name: 'Salada da estação', perPerson: 0.12, unit: 'kg' },
          { name: 'Sobremesa individual', perPerson: 1, unit: 'porção' }
        ]
      },
      {
        id: 'salmao',
        badge: 'Leve e sofisticado',
        name: 'Risoto de salmão',
        description: 'Risoto cremoso com lascas de salmão e finalização delicada de ervas.',
        image: './risoto-salmao.webp',
        service: 'Jantar na data escolhida',
        dishes: [
          { name: 'Risoto cremoso', perPerson: 0.3, unit: 'kg' },
          { name: 'Salmão em lascas', perPerson: 0.15, unit: 'kg' },
          { name: 'Salada da estação', perPerson: 0.12, unit: 'kg' },
          { name: 'Sobremesa individual', perPerson: 1, unit: 'porção' }
        ]
      }
    ]
  },
  eventos: {
    title: 'Jantares e Comemorações',
    eyebrow: 'Receber com fartura',
    intro: 'Menus demonstrativos para aniversários, encontros de família, recepções e confraternizações de qualquer tamanho.',
    image: './chef-red-counter.webp',
    choicesTitle: 'Escolha os pratos para o seu evento',
    choicesIntro: 'Todos os pratos disponíveis para o seu jantar ou comemoração. Escolha um e fale diretamente com a Chef Ana.',
    menus: [
      {
        id: 'salmao-grelhado',
        badge: 'Menu leve',
        name: 'Salmão grelhado com legumes assados',
        description: 'Salmão dourado, servido com legumes assados.',
        image: './salmao-grelhado.webp',
        service: 'Evento na data escolhida'
      },
      {
        id: 'fettuccine-camaroes',
        badge: 'Massa artesanal',
        name: 'Fettuccine ao molho de camarões',
        description: 'Massa artesanal envolvida em um molho cremoso de camarões.',
        image: './ravioli-salvia.webp',
        service: 'Evento na data escolhida'
      },
      {
        id: 'file-gorgonzola',
        badge: 'Jantar exclusivo',
        name: 'Filé mignon ao molho de gorgonzola',
        description: 'Filé mignon com molho cremoso de gorgonzola.',
        image: './file-mignon-pure.webp',
        service: 'Evento na data escolhida'
      },
      {
        id: 'file-parmegiana',
        badge: 'Clássico especial',
        name: 'Filé à parmegiana',
        description: 'Filé empanado, molho de tomate e queijo gratinado.',
        image: './file-parmegiana.webp',
        service: 'Evento na data escolhida'
      },
      {
        id: 'dourado-bechamel',
        badge: 'Peixes',
        name: 'Filé de dourado gratinado ao molho bechamel',
        description: 'Peixe delicado com cobertura dourada e molho bechamel.',
        image: './dourado-bechamel.webp',
        service: 'Evento na data escolhida'
      },
      {
        id: 'camarao-moranga',
        badge: 'Assinatura',
        name: 'Camarão na moranga',
        description: 'Moranga assada, recheio cremoso e camarões dourados.',
        image: './camarao-moranga.webp',
        service: 'Evento na data escolhida'
      },
      {
        id: 'maminha',
        badge: 'Sabores intensos',
        name: 'Maminha braseada na cerveja preta',
        description: 'Carne macia, fatiada e servida com molho encorpado.',
        image: './maminha-cerveja-preta.webp',
        service: 'Evento na data escolhida'
      },
      {
        id: 'file-musseline',
        badge: 'Premium',
        name: 'Filé mignon com musseline de batatas',
        description: 'Filé macio servido sobre musseline de batatas.',
        image: './file-mignon-musseline.webp',
        service: 'Evento na data escolhida'
      },
      {
        id: 'salmao-asiatico',
        badge: 'Sabores asiáticos',
        name: 'Salmão ao molho asiático',
        description: 'Salmão laqueado em molho intenso, finalizado com gergelim.',
        image: './salmao-asiatico.webp',
        service: 'Evento na data escolhida'
      },
      {
        id: 'paella',
        badge: 'Para compartilhar',
        name: 'Paella',
        description: 'Arroz e frutos do mar preparados para chegar à mesa com presença.',
        image: './paella.webp',
        service: 'Evento na data escolhida'
      },
      {
        id: 'salmao-legumes',
        badge: 'Menu leve',
        name: 'Salmão com crosta de ervas e legumes',
        description: 'Crosta aromática, legumes tostados e ervas frescas.',
        image: './salmao-legumes.webp',
        service: 'Evento na data escolhida'
      }
    ]
  },
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
        name: 'Feijoada Premium para Delivery',
        description: 'Feijoada completa para receber em casa, disponível para entrega todos os sábados.',
        price: 69,
        image: './feijoada-delivery-mobile.webp',
        imageAlt: 'Feijoada para Delivery da Chef Ana Santos com acompanhamentos embalados',
        imageLayout: 'portrait',
        pricing: [
          'Individual: R$ 69,00',
          'Para 2 pessoas: R$ 95,00 (bem servida)'
        ],
        includesTitle: 'Acompanhamentos incluídos',
        includes: [
          '🍚 Arroz fresquinho',
          '🌿 Couve refogada',
          '🍊 Laranja suculenta',
          '🍛 Farofa especial',
          '🥓 Torresmo crocante',
          '🍋 Sobremesa: Mousse de limão'
        ],
        deliveryNote: 'Entrega: valor conforme o endereço.',
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
        includesTitle: 'Opções de acompanhamentos',
        includes: [
          'Arroz com amêndoas laminadas',
          'Arroz com castanhas',
          'Farofa de banana-da-terra com bacon',
          'Farofa tradicional',
          'Salada fresca da estação'
        ],
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
  }
};

const type = new URLSearchParams(window.location.search).get('tipo');
const currentKey = Object.hasOwn(experiences, type) ? type : 'massas';
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
        ${menu.pricing ? `
          <div class="menu-pricing">
            <b>Valores</b>
            <ul>${menu.pricing.map((item) => `<li>${item}</li>`).join('')}</ul>
          </div>
        ` : ''}
        ${menu.includes ? `
          <div class="menu-includes">
            <b>${menu.includesTitle || 'Acompanhamentos'}</b>
            <ul>${menu.includes.map((item) => `<li>${item}</li>`).join('')}</ul>
          </div>
        ` : ''}
        ${menu.deliveryNote ? `<p class="menu-delivery-note">🚚 ${menu.deliveryNote}</p>` : ''}
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
