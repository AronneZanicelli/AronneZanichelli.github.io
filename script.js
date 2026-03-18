const translations = {
  en: {
    nav: { home: 'Home', editing: 'Editing', featured: 'Featured Projects' },
    toc: {
      title: 'On this page',
      home: 'Intro',
      about: 'About',
      availability: 'Availability',
      skills: 'Skills',
      portfolio: 'Portfolio',
      timeline: 'Timeline',
      cv: 'CV',
      contact: 'Contact'
    },
    hero: {
      positioning: 'Junior Developer with creative and AI-oriented skills.',
      subtitle: 'I build practical digital experiences by combining development fundamentals, visual communication, and strategic content thinking.',
      ctaProjects: 'View Featured Projects',
      ctaCv: 'Download CV',
      ctaContact: 'Contact'
    },
    about: {
      title: 'About Me',
      bio: 'I am Aronne Zanichelli, an IT graduate in Computer Science and Telecommunications. I grew up with technology and I enjoy turning digital passion into real, useful work. My profile blends development fundamentals with visual communication and social content execution.',
      goalTitle: 'Professional Goal',
      goalText: 'I want to enter the world of video games and interactive technologies, including VR-oriented experiences. I am looking for junior opportunities in web/game development where I can combine programming, creativity, and fast learning.',
      valueTitle: 'What I bring to a team',
      valueOne: 'Technical + creative mindset: code with attention to communication and UX.',
      valueTwo: 'Operational autonomy in execution and delivery.',
      valueThree: 'Problem-solving attitude and strong motivation for junior growth paths.'
    },
    availability: {
      title: 'Availability',
      text: 'Based in Italy (Europe/Rome timezone). Open to junior opportunities, internships, and collaborative projects in web development or game development, with remote or hybrid setup. Driving license B and own vehicle.'
    },
    skills: {
      title: 'Technical Skills',
      html: 'HTML and CSS for responsive interfaces (solid foundations)',
      java: 'Java for object-oriented projects',
      cpp: 'C++ foundations for logic and performance',
      python: 'Python (beginner level, currently building fundamentals)',
      sql: 'SQL and relational database fundamentals',
      creative: 'DaVinci Resolve, Office Suite, Adobe Suite (basic/intermediate)'
    },
    softSkills: {
      title: 'Soft Skills',
      one: 'Problem solving',
      two: 'Fast learning mindset',
      three: 'Teamwork and communication',
      four: 'Creative discipline and reliability'
    },
    languages: {
      title: 'Languages',
      it: 'Italian — Native',
      en: 'English — Intermediate (B2)',
      es: 'Spanish — Basic (A1)'
    },
    portfolio: {
      title: 'Portfolio',
      intro: 'Selected projects — from code to creative production.',
      badge: { live: '● Live', progress: '◐ In Progress', soon: '○ Coming Soon' },
      p1: {
        title: 'Bilingual Portfolio Website',
        desc: 'Static bilingual site (EN/IT) built from scratch. Includes theme toggle, contact form, CV download, and GA4 analytics tracking.'
      },
      p2: {
        title: 'Labelbike — Social Media Project',
        desc: 'End-to-end social content production for an Italian motorcycle sticker brand: visual strategy, AI-assisted moodboards, carousel formats, and caption writing.'
      },
      p3: {
        title: 'Game Dev — First Project',
        desc: 'Personal game development project currently in early planning. Combining C++ fundamentals with interactive design thinking.'
      },
      link: { live: 'View Live ↗', repo: 'GitHub Repo ↗', details: 'View Editing Work ↗', wip: 'Work in Progress…' }
    },
    timeline: {
      title: 'Education & Experience',
      educationDate: '2019-2025',
      educationTitle: "IT Diploma - Istituto Superiore Statale S. D'Arzo",
      educationDesc: 'Technical diploma in computer science and telecommunications.',
      conadDate: 'May 2021 - Sep 2021',
      conadTitle: 'Cashier / Warehouse Assistant - Conad',
      conadDesc: 'Managed cashier operations, shelf restocking, and warehouse organization with operational autonomy.',
      sinegoDate: 'Sep 2021 - Aug 2022',
      sinegoTitle: 'Public Relations Assistant - Sinego Srl',
      sinegoDesc: 'Front-facing communication support and relationship management in customer-facing activities.',
      optimaDate: 'May 2024 - Jul 2025',
      optimaTitle: 'Commercial Consultant - Optima Spa',
      optimaDesc: 'Consulting for telecom services targeted to both private clients and businesses.',
      currentDate: 'Current',
      currentTitle: 'IFTS Graphic Technician & AI-based Social Media Manager',
      currentDesc: 'Training path combining visual design, media strategy, and AI-oriented digital workflows.'
    },
    cv: {
      title: 'Curriculum Vitae',
      description: 'Preview and download my CV in English or Italian.',

    },
    contact: {
      title: 'Contact',
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'Message',
      send: 'Send message',
      success: 'Thanks! Your message was sent successfully.',
      error: 'Please complete all fields with a valid email.'
    },
    footer: { language: 'Language: English' },
    feat: {
      pageTitle: 'Featured Projects',
      pageIntro: 'Selected projects — problem, solution, stack, result.',
      toc: { p1: 'Portfolio Site', p2: 'Labelbike', p3: 'Game Dev' },
      label: { problem: 'Problem', solution: 'Solution', stack: 'Stack', result: 'Result' },
      linkSite: '↗ Live site',
      linkEditing: 'Editing archive →',
      p1: {
        title: 'Portfolio Website',
        status: 'Live',
        problem: 'Build a bilingual, professional online presence targeting junior dev and creative roles.',
        solution: 'Designed and built a fully static bilingual site (EN/IT) from scratch — language toggle, dark/light theme, GA4 analytics, Formspree contact form, CV download, and a portfolio section.',
        result: 'Live personal site with full SEO setup, conversion tracking and modular content sections ready to grow.'
      },
      p2: {
        title: 'Labelbike — Social Media & Content',
        status: 'In progress',
        problem: 'A niche handmade motorcycle sticker brand with no structured social presence or content workflow.',
        solution: 'AI-based social media strategy covering moodboards, short-form video editing, carousel post packaging and caption writing for Instagram and TikTok.',
        result: 'Ongoing content production as part of an IFTS Project Work. Visual identity defined, first posts published.'
      },
      p3: {
        title: 'Game Dev Project',
        status: 'Coming soon',
        problem: 'First personal game development project — stack and scope in definition.',
        solution: 'Building a small interactive experience to apply programming fundamentals in a creative context.',
        stack: '(stack in definition — follow GitHub for updates)'
      }
    },
    edit: {
      pageTitle: 'Editing Works',
      pageIntro: 'Archive of video editing and post-production work, organised by client and project type.',
      filters: {
        title: 'Filters',
        freelance: 'Freelance',
        personal: 'Personal',
        reset: 'Reset filters'
      },
      postprod: {
        label: 'Post-production scope: ',
        text: 'Full pipeline handled end-to-end — editing, upload, titles, descriptions, keyword research, custom thumbnails, timestamps, and multilingual translation across 9 languages via a custom AI agent.'
      },
      noResults: 'No videos match the selected filters.',
      lb: {
        status: 'In progress',
        desc: 'Ongoing collaboration for an artisan 3D resin motorcycle sticker brand based in Italy. AI-based content strategy, short-form video editing and post packaging.',
        role: 'Role: Social Media Manager & Content Editor (IFTS Project Work)',
        igTitle: 'Instagram',
        ig1: 'Carousel — Brand storytelling: origin, craft process, product detail. (in production)',
        ig2: 'Carousel — Community post: rider lifestyle, user content hooks. (in production)',
        ig3: 'Reel — Product showcase with short-form edit and CTA. (in production)',
        ttTitle: 'TikTok',
        tt1: 'Short — Behind the scenes of the 3D resin production process. (in production)',
        tt2: 'Short — Product reveal with trending audio hook. (in production)'
      }
    }
  },
  it: {
    nav: { home: 'Home', editing: 'Editing', featured: 'Featured Projects' },
    toc: {
      title: 'In questa pagina',
      home: 'Intro',
      about: 'Chi sono',
      availability: 'Disponibilità',
      skills: 'Competenze',
      portfolio: 'Portfolio',
      timeline: 'Timeline',
      cv: 'CV',
      contact: 'Contatti'
    },
    hero: {
      positioning: 'Junior Developer con competenze creative e AI-oriented.',
      subtitle: 'Realizzo esperienze digitali pratiche unendo basi di sviluppo, comunicazione visiva e pensiero strategico sui contenuti.',
      ctaProjects: 'Vedi Featured Projects',
      ctaCv: 'Scarica CV',
      ctaContact: 'Contattami'
    },
    about: {
      title: 'Chi sono',
      bio: 'Sono Aronne Zanichelli, diplomato in Informatica e Telecomunicazioni. Sono cresciuto con la tecnologia e mi piace trasformare la passione digitale in lavoro reale e utile. Il mio profilo unisce basi di sviluppo, comunicazione visiva e produzione contenuti social.',
      goalTitle: 'Obiettivo professionale',
      goalText: 'Voglio entrare nel mondo dei videogiochi e delle tecnologie interattive, con una visione che include anche la realtà virtuale. Cerco opportunità junior in web/game development dove unire programmazione, creatività e crescita rapida.',
      valueTitle: 'Cosa porto in un team',
      valueOne: 'Mentalità tecnica + creativa: codice con attenzione a comunicazione e UX.',
      valueTwo: "Autonomia operativa nell'esecuzione e nella consegna.",
      valueThree: 'Approccio al problem solving e forte motivazione in percorsi junior.'
    },
    availability: {
      title: 'Disponibilità',
      text: 'Base in Italia (fuso Europe/Rome). Disponibile per opportunità junior, stage e collaborazioni in web development o game development, in remoto o ibrido. Patente B e automunito.'
    },
    skills: {
      title: 'Competenze tecniche',
      html: 'HTML e CSS per interfacce responsive (basi solide)',
      java: 'Java per progetti orientati agli oggetti',
      cpp: 'Basi di C++ per logica e performance',
      python: 'Python (livello iniziale, sto consolidando i fondamentali)',
      sql: 'SQL e fondamenti di database relazionali',
      creative: 'DaVinci Resolve, Pacchetto Office, Pacchetto Adobe (base/intermedio)'
    },
    softSkills: {
      title: 'Soft Skills',
      one: 'Problem solving',
      two: 'Apprendimento rapido',
      three: 'Teamwork e comunicazione',
      four: 'Disciplina creativa e affidabilità'
    },
    languages: {
      title: 'Lingue',
      it: 'Italiano — Madrelingua',
      en: 'Inglese — Intermedio (B2)',
      es: 'Spagnolo — Base (A1)'
    },
    portfolio: {
      title: 'Portfolio',
      p1Title: 'Sito Portfolio',
      p1Status: 'Live',
      p1Desc: 'Sito statico bilingue (IT/EN) con download CV, form contatti, analytics GA4, modalità dark/light e questa stessa sezione portfolio.',
      p1Stack: 'HTML · CSS · JS · GitHub Pages · Formspree · GA4',
      p2Title: 'Labelbike — Social Media & Content',
      p2Status: 'In corso',
      p2Desc: 'Gestione social media AI-based per brand artigianale di adesivi in resina 3D per moto. Strategia, moodboard, editing short-form e post packaging in formato carosello per Instagram e TikTok.',
      p2Stack: 'Social Strategy · AI Content · Canva · DaVinci Resolve',
      p3Title: 'Progetto Game Dev',
      p3Status: 'Coming soon',
      p3Desc: 'Primo progetto personale di game development — stack e scope in definizione. Segui GitHub per gli aggiornamenti.',
      p3Stack: '(stack in definizione)',
      linkLive: '↗ Live',
      linkRepo: 'GitHub',
      linkDetail: 'Dettagli →'
    },
    timeline: {
      title: 'Formazione ed esperienza',
      educationDate: '2019-2025',
      educationTitle: "Diploma IT - Istituto Superiore Statale S. D'Arzo",
      educationDesc: 'Diploma tecnico in Informatica e Telecomunicazioni.',
      conadDate: 'Mag 2021 - Set 2021',
      conadTitle: 'Cassiere / Magazziniere - Conad',
      conadDesc: 'Gestione cassa, rifornimento scaffali e organizzazione magazzino in autonomia.',
      sinegoDate: 'Set 2021 - Ago 2022',
      sinegoTitle: 'Addetto alle Pubbliche Relazioni - Sinego Srl',
      sinegoDesc: 'Supporto nella comunicazione front-facing e gestione relazionale con il pubblico.',
      optimaDate: 'Mag 2024 - Lug 2025',
      optimaTitle: 'Consulente Commerciale - Optima Spa',
      optimaDesc: 'Consulenza su servizi di telecomunicazione rivolta ad aziende e privati.',
      currentDate: 'Attuale',
      currentTitle: 'IFTS Tecnico Grafico & Social Media Manager AI-based',
      currentDesc: "Percorso che integra design visivo, strategia media e workflow digitali orientati all'AI."
    },
    cv: {
      title: 'Download CV',
      description: "Anteprima del CV qui sotto. Usa il bottone Scarica CV in alto per salvarne una copia."
    },
    contact: {
      title: 'Contatti',
      formName: 'Nome',
      formEmail: 'Email',
      formMessage: 'Messaggio',
      send: 'Invia messaggio',
      success: 'Grazie! Il messaggio è stato inviato con successo.',
      error: 'Compila tutti i campi con una email valida.'
    },
    footer: { language: 'Lingua: Italiano' },
    feat: {
      pageTitle: 'Featured Projects',
      pageIntro: 'Progetti selezionati — problema, soluzione, stack, risultato.',
      toc: { p1: 'Sito Portfolio', p2: 'Labelbike', p3: 'Game Dev' },
      label: { problem: 'Problema', solution: 'Soluzione', stack: 'Stack', result: 'Risultato' },
      linkSite: '↗ Sito live',
      linkEditing: 'Archivio editing →',
      p1: {
        title: 'Sito Portfolio',
        status: 'Live',
        problem: 'Costruire una presenza online bilingue e professionale per posizioni junior dev e creative.',
        solution: 'Progettato e sviluppato un sito statico bilingue (IT/EN) da zero — toggle lingua, tema dark/light, GA4, form Formspree, download CV e sezione portfolio.',
        result: 'Sito live con setup SEO completo, tracciamento conversioni e sezioni di contenuto modulari pronte a crescere.'
      },
      p2: {
        title: 'Labelbike — Social Media & Content',
        status: 'In corso',
        problem: 'Brand artigianale di adesivi moto di nicchia senza una presenza social strutturata o un workflow di contenuto.',
        solution: 'Strategia social AI-based: moodboard, editing video short-form, packaging caroselli e scrittura caption per Instagram e TikTok.',
        result: 'Produzione contenuti in corso come Project Work IFTS. Identità visiva definita, primi post pubblicati.'
      },
      p3: {
        title: 'Progetto Game Dev',
        status: 'Coming soon',
        problem: 'Primo progetto personale di game development — stack e scope in definizione.',
        solution: 'Costruire una piccola esperienza interattiva per applicare i fondamentali di programmazione in un contesto creativo.',
        stack: '(stack in definizione — segui GitHub per aggiornamenti)'
      }
    },
    edit: {
      pageTitle: 'Editing Works',
      pageIntro: 'Archivio di lavori di editing video e post-produzione, organizzato per cliente e tipo di progetto.',
      filters: {
        title: 'Filtri',
        freelance: 'Freelance',
        personal: 'Lavori personali',
        reset: 'Resetta filtri'
      },
      postprod: {
        label: 'Scope post-produzione: ',
        text: 'Pipeline gestita interamente — editing, upload, titoli, descrizioni, keyword research, thumbnail personalizzate, timestamp e traduzione in 9 lingue tramite un agente AI custom.'
      },
      noResults: 'Nessun video corrisponde ai filtri selezionati.',
      lb: {
        status: 'In corso',
        desc: 'Collaborazione in corso per un brand artigianale italiano di adesivi in resina 3D per moto. Strategia AI-based, editing video short-form e packaging post.',
        role: 'Ruolo: Social Media Manager & Content Editor (Project Work IFTS)',
        igTitle: 'Instagram',
        ig1: 'Carosello — Brand storytelling: origini, processo artigianale, dettaglio prodotto. (in produzione)',
        ig2: 'Carosello — Post community: lifestyle rider, hook per contenuto user. (in produzione)',
        ig3: 'Reel — Showcase prodotto con edit short-form e CTA. (in produzione)',
        ttTitle: 'TikTok',
        tt1: 'Short — Dietro le quinte del processo produttivo in resina 3D. (in produzione)',
        tt2: 'Short — Product reveal con hook audio di tendenza. (in produzione)'
      }
    }
  }
};

const getValueByPath = (obj, path) => path.split('.').reduce((acc, key) => acc?.[key], obj);

function applyLanguage(lang) {
  const safeLang = translations[lang] ? lang : 'en';
  document.documentElement.lang = safeLang;
  localStorage.setItem('lang', safeLang);
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = getValueByPath(translations[safeLang], key);
    if (value) el.textContent = value;
  });
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === safeLang);
  });
  // Sync hero CV download button with active language
  const heroCvBtn = document.getElementById('heroCvDownload');
  if (heroCvBtn) heroCvBtn.href = `assets/cv-${safeLang}.pdf`;

  // Sync CV preview image
  const cvImg = document.getElementById('cv-img');
  if (cvImg) {
    cvImg.src = `assets/cv-${safeLang}.webp`;
    cvImg.alt = safeLang === 'it' ? 'Anteprima CV' : 'CV Preview';
  }
}

function setupTheme() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.classList.toggle('light', savedTheme === 'light');
  toggle.textContent = savedTheme === 'light' ? '☀︎' : '☾';
  toggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    toggle.textContent = isLight ? '☀︎' : '☾';
  });
}

function setupMenu() {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

function setupContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  if (!form || !feedback) return;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const lang = localStorage.getItem('lang') || 'en';
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !emailValid || !message) {
      feedback.textContent = translations[lang].contact.error;
      return;
    }
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      });
      if (response.ok) {
        if (typeof window.gtag === 'function') window.gtag('event', 'submit_contact_form_success');
        feedback.textContent = translations[lang].contact.success;
        form.reset();
      } else {
        if (typeof window.gtag === 'function') window.gtag('event', 'submit_contact_form_error');
        feedback.textContent = translations[lang].contact.error;
      }
    } catch {
      feedback.textContent = translations[lang].contact.error;
    }
  });
}

function setupAnalyticsEvents() {
  const track = (eventName, params = {}) => {
    if (typeof window.gtag === 'function') window.gtag('event', eventName, params);
  };
  document.getElementById('viewFeaturedCta')?.addEventListener('click', () => track('click_cta', { cta: 'view_featured_projects' }));
  document.getElementById('heroCvDownload')?.addEventListener('click', () => {
    const lang = localStorage.getItem('lang') || 'en';
    track('download_cv', { language: lang });
  });
  document.getElementById('linkedinLink')?.addEventListener('click', () => track('click_social', { platform: 'linkedin' }));
  document.getElementById('githubLink')?.addEventListener('click', () => track('click_social', { platform: 'github' }));
  document.getElementById('instagramLink')?.addEventListener('click', () => track('click_social', { platform: 'instagram' }));
  document.getElementById('emailLink')?.addEventListener('click', () => track('click_email'));
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      track('switch_language', { language: btn.dataset.lang });
      applyLanguage(btn.dataset.lang);
    });
  });
}

function init() {
  const preferredLang = localStorage.getItem('lang') || 'en';
  applyLanguage(preferredLang);
  setupTheme();
  setupMenu();
  setupContactForm();
  setupAnalyticsEvents();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', init);
