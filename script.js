/**
 * Leo Enterprises — Interactive Portfolio Logic
 */

const MACHINE_SPECS = {
  'LE-RS3200': {
    code: 'LE-RS3200',
    category: 'Spraying & Drying',
    name: 'Automatic Rotary Spray & Drying Line',
    summary:
      'Glass-enclosed rotary carousel spray booth with PLC optical hide-sensing economizer, seamlessly integrated with a multi-zone heated drying tunnel for uniform pigment and top-coat application.',
    specs: [
      ['Working Width', '2,800 mm / 3,200 mm'],
      ['Rotary Arm Configuration', '8-gun or 12-gun high-speed carousel'],
      ['Conveyor Speed', '6 – 22 m/min (VFD synchronized)'],
      ['Control Interface', '10" Color HMI Touchscreen + PLC'],
      ['Booth Enclosure', 'Powder-coated steel + tempered glass'],
      ['Exhaust & Filtration', 'Dry-baffle or water-wash scrubber']
    ],
    features: [
      'Optical hide-profile economizer cuts pigment waste up to 28%',
      'Independent pressure & atomizing air manifolds',
      'Synchronized nylon-cord conveyor with tensioner',
      'Quick-latch side panels for rapid booth washdown'
    ]
  },
  'LE-AM1800': {
    code: 'LE-AM1800',
    category: 'Measuring & QC',
    name: 'Electronic Pinwheel Area Measuring Machine',
    summary:
      'High-accuracy electronic leather area measuring bridge with hardened metallic pinwheel sensors, polished hardwood feed and catch tables, and an overhead high-visibility LED counter.',
    specs: [
      ['Working Width', '1,800 mm / 2,400 mm'],
      ['Measurement Accuracy', '±0.2% certified repeatability'],
      ['Display Units', 'sq.ft, sq.dm, sq.m (switchable)'],
      ['Feed Speed', '18 m/min'],
      ['Table Construction', 'Seasoned hardwood shelf & catch apron'],
      ['Data Output', 'RS-232 / USB + thermal lot ticket printer']
    ],
    features: [
      'Overhead dual-line LED display for operator & supervisor',
      'Piece-by-piece accumulation and batch totalizer',
      'Low-friction pinwheel bridge safe for delicate nappa',
      'Includes certified calibration template'
    ]
  },
  'LE-SG100': {
    code: 'LE-SG100',
    category: 'Spray Guns & Modules',
    name: 'Automatic HVLP Leather Spray Gun',
    summary:
      'Precision CNC-machined automatic pneumatic spray gun featuring an emerald-anodized aluminum body, numbered micrometric fluid/fan regulator dials, and stainless steel fluid passages.',
    specs: [
      ['Nozzle Bore Options', '0.8 mm / 1.0 mm / 1.2 mm / 1.4 mm'],
      ['Atomizing Air Pressure', '1.8 – 3.0 bar (HVLP)'],
      ['Fluid Tip & Needle', 'Hardened AISI 316 stainless steel'],
      ['Body Material', 'Anodized billet aluminum'],
      ['Air & Fluid Ports', '1/4" BSP stainless fittings'],
      ['Adjustments', 'Numbered 0–5 knurled micrometric dials']
    ],
    features: [
      'Repeatable click-stop fan & fluid volume settings',
      'Solvent-resistant PTFE needle packing seals',
      'Quick-detach chrome air cap for fast cleaning',
      'Compatible with rotary & reciprocating manifolds'
    ]
  },
  'LE-DP200': {
    code: 'LE-DP200',
    category: 'Spray Guns & Modules',
    name: 'Pneumatic Diaphragm Pump & Surge Arrestor',
    summary:
      'Air-operated double-diaphragm pigment and binder transfer pump fitted with a vertical mesh-guarded pulsation dampener, dual pressure gauges, air filter-regulator, and stainless ball valve.',
    specs: [
      ['Flow Capacity', 'Up to 18 L/min (stepless air control)'],
      ['Air Supply Pressure', '1.5 – 6.0 bar'],
      ['Pulsation Dampener', 'Vertical surge arrestor with safety mesh'],
      ['Diaphragm & Seats', 'PTFE / Santoprene chemical-resistant'],
      ['Pressure Monitoring', 'Dual analog gauges (air + fluid)'],
      ['Fluid Connections', 'Stainless ball valve + barbed outlet']
    ],
    features: [
      'Pulse-free pigment delivery to multi-gun rotary manifolds',
      'Integrated air regulator & moisture trap assembly',
      'Dry-run safe and stall-proof air valve design',
      'Easy-flush chambers for rapid color changeovers'
    ]
  },
  'LE-DT400': {
    code: 'LE-DT400',
    category: 'Spraying & Drying',
    name: 'Multi-Zone Leather Drying Tunnel',
    summary:
      'Modular insulated drying tunnel engineered for even moisture and solvent evaporation without case-hardening or grain shrinkage.',
    specs: [
      ['Tunnel Length', '6,000 mm – 14,000 mm (modular 2m bays)'],
      ['Operating Temperature', '45 °C – 110 °C'],
      ['Heating Options', 'Steam, thermic oil, or electric IR'],
      ['Temperature Control', 'PID digital zone controllers'],
      ['Conveyor Options', 'Nylon cord or stainless wire mesh'],
      ['Insulation', '75 mm high-density rockwool panels']
    ],
    features: [
      'Balanced laminar hot-air recirculation per zone',
      'Hinged top inspection doors with gas struts',
      'Variable-frequency exhaust damper balancing',
      'Cool-down exit section before stacking'
    ]
  },
  'LE-SP800': {
    code: 'LE-SP800',
    category: 'Spraying & Drying',
    name: 'Reciprocating Spray Booth & Water Scrubber',
    summary:
      'Compact linear reciprocating spray booth built for small-batch specialty leathers, paired with a stainless steel water-curtain overspray scrubber.',
    specs: [
      ['Working Width', '1,800 mm / 2,400 mm'],
      ['Gun Carriage', '2 – 4 LE-SG100 HVLP guns'],
      ['Reciprocation Speed', 'Up to 65 strokes/min (servo/VFD)'],
      ['Exhaust Airflow', '8,500 m³/hr'],
      ['Scrubber Tank', 'AISI 304 stainless steel'],
      ['Total Power', '7.5 kW']
    ],
    features: [
      'Adjustable stroke width for varying hide sizes',
      'Integrated water-curtain pump & sludge tray',
      'Explosion-proof lighting inside spray chamber',
      'Small footprint for specialty finishing rooms'
    ]
  },
  'LE-RC220': {
    code: 'LE-RC220',
    category: 'Measuring & QC',
    name: 'Digital Area Readout & Stamp Unit',
    summary:
      'Microprocessor counter, high-brightness LED display, and thermal barcode/lot printer kit designed to modernize existing pinwheel area measuring machines.',
    specs: [
      ['Display Type', 'High-contrast 7-segment LED'],
      ['Supported Units', 'sq.ft, sq.dm, sq.m'],
      ['Connectivity', 'RS-232, USB, ERP CSV export'],
      ['Printer Output', '58 mm thermal lot & bale tickets'],
      ['Power Supply', '110–240V AC, 50/60Hz'],
      ['Enclosure', 'Powder-coated steel swivel mount']
    ],
    features: [
      'Drop-in retrofit for legacy optical/pinwheel bridges',
      'Stores up to 500 batch summaries in memory',
      'Automatic hide-count & average size calculation',
      'Optional ink-stamp trigger output'
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------------
     Mobile Navigation Toggle
     ------------------------------------------------------------------------ */
  const navToggle = document.getElementById('nav-toggle');
  const navMobile = document.getElementById('nav-mobile');

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMobile.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navMobile.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMobile.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ------------------------------------------------------------------------
     Equipment Category Filtering
     ------------------------------------------------------------------------ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const machineCards = document.querySelectorAll('.machine-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.filter;

      filterBtns.forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');

      machineCards.forEach((card) => {
        const cardCat = card.dataset.category;
        if (category === 'all' || cardCat === category) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     Machine Technical Specification Modal
     ------------------------------------------------------------------------ */
  const modalBackdrop = document.getElementById('spec-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalCloseFooterBtn = document.getElementById('modal-close-footer');
  const modalQuoteBtn = document.getElementById('modal-quote-btn');

  const modalCode = document.getElementById('modal-code');
  const modalTitle = document.getElementById('modal-title');
  const modalSummary = document.getElementById('modal-summary');
  const modalSpecsBody = document.getElementById('modal-specs-body');
  const modalFeaturesList = document.getElementById('modal-features-list');

  let activeModelName = '';

  function openSpecModal(modelId) {
    const data = MACHINE_SPECS[modelId];
    if (!data || !modalBackdrop) return;

    activeModelName = `${data.code} — ${data.name}`;
    modalCode.textContent = `${data.code} · ${data.category}`;
    modalTitle.textContent = data.name;
    modalSummary.textContent = data.summary;

    modalSpecsBody.innerHTML = data.specs
      .map(([k, v]) => `<tr><th scope="row">${k}</th><td>${v}</td></tr>`)
      .join('');

    modalFeaturesList.innerHTML = data.features
      .map((feat) => `<li>${feat}</li>`)
      .join('');

    modalBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    modalCloseBtn.focus();
  }

  function closeSpecModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.js-open-spec').forEach((btn) => {
    btn.addEventListener('click', () => {
      openSpecModal(btn.dataset.model);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeSpecModal);
  if (modalCloseFooterBtn) modalCloseFooterBtn.addEventListener('click', closeSpecModal);

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeSpecModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('is-open')) {
      closeSpecModal();
    }
  });

  if (modalQuoteBtn) {
    modalQuoteBtn.addEventListener('click', () => {
      const equipSelect = document.getElementById('quote-equipment');
      const notesField = document.getElementById('quote-notes');
      closeSpecModal();

      if (equipSelect) {
        for (const opt of equipSelect.options) {
          if (activeModelName.includes(opt.value) && opt.value !== '') {
            equipSelect.value = opt.value;
            break;
          }
        }
      }
      if (notesField && activeModelName) {
        notesField.value = `Requesting technical datasheet, lead time, and pricing for ${activeModelName}.`;
      }

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /* ------------------------------------------------------------------------
     Quote Request Form Handling
     ------------------------------------------------------------------------ */
  const quoteForm = document.getElementById('quote-form');
  const formStatus = document.getElementById('form-status');

  if (quoteForm && formStatus) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('quote-name');
      const companyInput = document.getElementById('quote-company');
      const equipInput = document.getElementById('quote-equipment');

      const clientName = nameInput ? nameInput.value.trim() : 'Partner';
      const companyName = companyInput ? companyInput.value.trim() : '';
      const selectedEquip = equipInput && equipInput.value ? equipInput.value : 'Custom Finishing Equipment';

      formStatus.textContent = `Thank you, ${clientName}${companyName ? ` (${companyName})` : ''}. Your inquiry for ${selectedEquip} has been logged. Our engineering desk will respond with a formal technical proposal within 1 business day.`;
      formStatus.className = 'form-status is-success';

      quoteForm.reset();
    });
  }

  /* ------------------------------------------------------------------------
     Active Navigation Highlight on Scroll
     ------------------------------------------------------------------------ */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-desktop .nav-link');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px' }
  );

  sections.forEach((sec) => observer.observe(sec));
});
