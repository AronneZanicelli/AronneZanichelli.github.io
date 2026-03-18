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
      downloadEn: 'Download CV (EN)',
      downloadIt: 'Download CV (IT)',
      print: 'Print / Save as PDF'
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
    footer: { language: 'Language: English' }
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
      goalText: "Voglio entrare nel mondo dei videogiochi e delle tecnologie interattive, con una visione che include anche la realtà virtuale. Cerco opportunità junior in web/game development dove unire programmazione, creatività e crescita rapida.",
      valueTitle: 'Cosa porto in un team',
      valueOne: "Mentalità tecnica + creativa: codice con attenzione a comunicazione e UX.",
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
      intro: 'Progetti selezionati — dal codice alla produzione creativa.',
      badge: { live: '● Live', progress: '◐ In Corso', soon: '○ In Arrivo' },
      p1: {
        title: 'Portfolio Bilingue',
        desc: 'Sito statico bilingue (EN/IT) costruito da zero. Include toggle tema, form di contatto, download CV e tracciamento GA4.'
      },
      p2: {
        title: 'Labelbike — Progetto Social Media',
        desc: "Produzione contenuti social end-to-end per un brand italiano di adesivi moto: strategia visiva, moodboard AI-assisted, formati carosello e copywriting caption."
      },
      p3: {
        title: 'Game Dev — Primo Progetto',
        desc: 'Progetto personale di sviluppo videogiochi, attualmente in fase di pianificazione. Combina i fondamentali del C++ con il design interattivo.'
      },
      link: { live: 'Vedi Live ↗', repo: 'GitHub Repo ↗', details: 'Vedi Editing Work ↗', wip: 'Work in Progress…' }
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
      title: 'Curriculum Vitae',
      description: "Visualizza un'anteprima del mio curriculum e scaricalo nella lingua che preferisci.",
      downloadEn: 'Scarica CV (EN)',
      downloadIt: 'Scarica CV (IT)',
      print: 'Stampa / Salva PDF'
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
    footer: { language: 'Lingua: Italiano' }
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
    cvImg.src = `assets/cv-${safeLang}.png`;
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
  document.getElementById('cvDownloadBtn')?.addEventListener('click', () => {
    const lang = localStorage.getItem('lang') || 'it';
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
  document.getElementById('heroCvDownload')?.addEventListener('click', () => {
    const lang = localStorage.getItem('lang') || 'en';
    if (typeof window.gtag === 'function') window.gtag('event', 'download_cv', { language: lang });
  });
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', init);
