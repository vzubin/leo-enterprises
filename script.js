/**
 * Leo Enterprises — Interactive Portfolio Logic
 */

const MACHINE_SPECS = {
  'LE-D240': {
    code: 'LE-D240',
    category: 'Beamhouse & Tanning',
    name: 'Hardwood & SS316 Tanning Drum',
    summary:
      'Heavy-duty automated tanning, liming, and milling drum constructed from seasoned African Iroko hardwood with AISI 316L stainless steel internal ribs and automated liquor dosing.',
    specs: [
      ['Drum Diameter × Width', '2,400 mm × 2,000 mm'],
      ['Batch Load Capacity', '1,800 – 2,200 kg wet weight'],
      ['Drive Motor & VFD', '18.5 kW helical geared with inverter'],
      ['Rotation Speed', '2.5 – 14 RPM (programmable reverse)'],
      ['Control Interface', 'PLC touchscreen with temperature & pH probe'],
      ['Frame Construction', 'Epoxy-coated IS2062 heavy structural steel']
    ],
    features: [
      'Automatic water & chemical dosing manifold',
      'Pneumatic sliding loading door with safety interlock',
      'Integrated heat-exchanger liquor circulation',
      'Low-noise double-row spherical roller bearings'
    ]
  },
  'LE-S420': {
    code: 'LE-S420',
    category: 'Splitting & Shaving',
    name: 'Precision Band-Knife Splitting Machine',
    summary:
      'High-rigidity cast-iron band-knife splitter engineered for uniform wet-blue, vegetable-tanned, and dry crust hides with micrometric thickness control.',
    specs: [
      ['Working Width', '1,600 mm / 2,100 mm options'],
      ['Splitting Tolerance', '±0.05 mm across full width'],
      ['Minimum Split Thickness', '0.35 mm (calf & sheep), 0.60 mm (bovine)'],
      ['Feed Speed', '8 – 26 m/min stepless hydraulic'],
      ['Total Installed Power', '14.5 kW (380–415V, 50/60Hz)'],
      ['Knife Grinding Unit', 'Dual CBN / diamond-wheel automatic sharpener']
    ],
    features: [
      'Digital thickness readout in 0.01 mm increments',
      'Optical knife-edge alignment sensor',
      'Sectional rubber & brass feed roller system',
      'Centralized automatic grease lubrication'
    ]
  },
  'LE-SH300': {
    code: 'LE-SH300',
    category: 'Splitting & Shaving',
    name: 'Hydraulic Leather Shaving Machine',
    summary:
      'High-speed spiral cylinder shaving machine designed for clean, chatter-free thickness calibration of wet-blue and vegetable-tanned hides.',
    specs: [
      ['Working Width', '1,500 mm'],
      ['Cylinder Speed', '1,450 RPM dynamically balanced'],
      ['Shaving Thickness Range', '0.4 mm – 4.5 mm'],
      ['Main Drive Power', '22 kW'],
      ['Grinding Attachment', 'Automated traverse emery wheel'],
      ['Dust Extraction Port', 'Ø 200 mm cyclone-ready flange']
    ],
    features: [
      'Quick-change spiral blade cylinder assembly',
      'Foot-pedal pneumatic bolster engagement',
      'Hard-chrome plated transport roller',
      'Emergency knee-bar & light-curtain safety'
    ]
  },
  'LE-P600': {
    code: 'LE-P600',
    category: 'Finishing & Pressing',
    name: 'Hydraulic Embossing & Ironing Press',
    summary:
      '600-ton four-column hydraulic press with thermal oil heated upper platen for grain embossing, smooth plating, and kiss-plating.',
    specs: [
      ['Platen Dimensions', '1,400 mm × 750 mm'],
      ['Max Pressing Force', '600 Tons (adjustable 50–600T)'],
      ['Platen Temperature', 'Up to 180 °C (±1.5 °C PID control)'],
      ['Cycle Throughput', '140 – 180 hides / hour'],
      ['Hydraulic Power Pack', '15 kW low-noise vane pump'],
      ['Plate Changeover', 'Quick-lock hydraulic T-slot rails']
    ],
    features: [
      'Dual-zone PID digital thermal regulation',
      'Two-hand synchronized safety start & light barrier',
      'Programmable dwell timer & pressure profile',
      'Includes 1 standard mirror-chrome smooth plate'
    ]
  },
  'LE-V180': {
    code: 'LE-V180',
    category: 'Finishing & Pressing',
    name: 'Twin-Table Vacuum Leather Dryer',
    summary:
      'Energy-efficient double-table vacuum drying unit with mirror-polished stainless steel heating plates for flat, supple grain retention.',
    specs: [
      ['Table Working Area', '3,200 mm × 1,800 mm (×2 tables)'],
      ['Heating Medium', 'Closed-loop hot water / thermal oil'],
      ['Vacuum Pump Capacity', '160 m³/hr liquid-ring system'],
      ['Operating Temperature', '45 °C – 90 °C'],
      ['Cycle Time', '90 – 180 seconds per load'],
      ['Total Power', '11 kW (excluding external boiler)']
    ],
    features: [
      'Automatic lid lift & pneumatic clamping',
      'Condensate recovery & water-saving condenser',
      'Independent timer & vacuum gauge per table',
      'Anti-crease Teflon mesh upper blanket'
    ]
  },
  'LE-F180': {
    code: 'LE-F180',
    category: 'Beamhouse & Tanning',
    name: 'Hydraulic Fleshing & Unhairing Machine',
    summary:
      'Robust wet-end fleshing machine engineered for green, limed, and pickled hides with corrosion-resistant SS304 shrouds.',
    specs: [
      ['Working Width', '1,800 mm / 2,400 mm'],
      ['Cylinder Drive', '18.5 kW heavy-duty motor'],
      ['Feed Roller', 'Pneumatic & hydraulic dual-pressure'],
      ['Throughput', '90 – 130 full hides / hour'],
      ['Water Spray Bar', 'High-pressure self-cleaning nozzles'],
      ['Machine Weight', '4,200 kg cast-iron chassis']
    ],
    features: [
      'Hardened helical fleshing blades',
      'Splash-proof IP65 electrical control cabinet',
      'Automatic blade sharpening attachment',
      'Quick-release rubber bolster roller'
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
      const selectedEquip = equipInput && equipInput.value ? equipInput.value : 'Custom Tannery Machinery';

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
