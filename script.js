const PROJECTS = [
  { title: 'Romance Memories', cat: 'websites', desc: 'Wedding photography & memories platform', url: 'https://romancememories.com/', img: 'assets/projects/romance-memories.jpg' },
  { title: 'Chiran Madushanka Production', cat: 'websites', desc: 'Professional media production showcase', url: 'https://www.chiranmadushankaproduction.com/', img: 'assets/projects/chiran-madushanka-production.jpg' },
  { title: 'Randika Methruwan Photography', cat: 'websites', desc: 'Photography portfolio & booking', url: 'https://randikamethruwanphotography.com/', img: 'assets/projects/randika-methruwan-photography.jpg' },
  { title: 'Diya Closet', cat: 'websites', desc: 'E-commerce fashion store', url: 'https://diyacloset.com', img: 'assets/projects/diya-closet.jpg' },
  { title: 'Dhanushka SmartTech', cat: 'websites', desc: 'Tech solutions & services', url: 'https://dhanushka-smarttech.vercel.app/', img: 'assets/projects/dhanushka-smarttech.jpg' },
  { title: 'Salon Website', cat: 'websites', desc: 'Salon & beauty services booking', url: 'https://v0-salon-website-design-jade.vercel.app/', img: 'assets/projects/salon-website.jpg' },
  { title: 'Lanka Escapes', cat: 'websites', desc: 'Sri Lanka travel & tours platform', url: 'https://lanka-escapes-theta.vercel.app/', img: 'assets/projects/lanka-escapes.jpg' },
  { title: 'Ceylon Mystique', cat: 'websites', desc: 'Tourism & cultural travel packages', url: 'https://ceylon-tour.vercel.app/', img: 'assets/projects/ceylon-mystique.jpg' },
  { title: 'Haven Coast Resort', cat: 'websites', desc: 'Luxury resort & spa', url: 'https://haven-coast.vercel.app/', img: 'assets/projects/haven-coast-resort.jpg' },
  { title: 'Emerald Collection', cat: 'websites', desc: 'Premium jewelry collection', url: 'https://emerald-collection.vercel.app/', img: 'assets/projects/emerald-collection.jpg' },
  { title: 'Serenity Crest', cat: 'websites', desc: 'Wellness & spa retreat', url: 'https://serenity-crest.vercel.app/', img: 'assets/projects/serenity-crest.jpg' },
  { title: 'Evory Bloom', cat: 'websites', desc: 'Floral arrangements & events', url: 'https://evory-bloom.vercel.app/', img: 'assets/projects/evory-bloom.jpg' },
  { title: 'Barber Shop One', cat: 'websites', desc: 'Classic barbering services', url: 'https://barbarshop-one.vercel.app/', img: 'assets/projects/barber-shop-one.jpg' },
  { title: 'Barber Shop Two', cat: 'websites', desc: 'Modern grooming services', url: 'https://barbershop-two-nine.vercel.app/', img: 'assets/projects/barber-shop-two.jpg' },
  { title: 'Barber Shop Three', cat: 'websites', desc: 'Premium barber experience', url: 'https://barbershop-three-blue.vercel.app/', img: 'assets/projects/barber-shop-three.jpg' },
  { title: 'DJ One', cat: 'websites', desc: 'DJ & entertainment services', url: 'https://dj-one-tan.vercel.app/', img: 'assets/projects/dj-one.jpg' },
  { title: 'Artisan Cakes', cat: 'websites', desc: 'Bakery & custom cakes', url: 'https://cakes-flax.vercel.app/', img: 'assets/projects/artisan-cakes.jpg' },
  { title: 'Fresh Juice Bar', cat: 'websites', desc: 'Juice bar & smoothies', url: 'https://juice-bar-mu.vercel.app/', img: 'assets/projects/fresh-juice-bar.jpg' },
  { title: 'Crysenya Events', cat: 'websites', desc: 'Event management platform', url: 'https://crysenya-events.vercel.app/', img: 'assets/projects/crysenya-events.jpg' },
  { title: 'Shan Tours', cat: 'websites', desc: 'Sri Lanka tours and travels', url: 'https://www.shantourslk.com/', img: 'assets/projects/shan-tours.jpg' },
  { title: 'Weather App', cat: 'websites', desc: 'Real-time weather forecast', url: 'https://weather-app-mocha-ten-90.vercel.app/', img: 'assets/projects/weather-app.jpg' },
  { title: 'Janaka Service & Garage', cat: 'ai-videos', desc: 'Veo 3 AI marketing video for garage center', video: 'v3AZBsSgEdI' },
  { title: 'AI Video Project 2', cat: 'ai-videos', desc: 'Advanced Veo 3 AI creation', video: 'vQDGBabQgR0' },
  { title: 'AI Video Project 3', cat: 'ai-videos', desc: 'Professional Veo 3 AI showcase', video: 'Xf8jnc7QaU8' },
  { title: 'AI Commercial Ad #1', cat: 'ai-videos', desc: 'AI-generated commercial advertisement', video: 'Sfk5YpA3-2I' },
  { title: 'AI Commercial Ad #2', cat: 'ai-videos', desc: 'AI-powered commercial video', video: 'T4tglCdaYQ8' },
  { title: 'AI Commercial Ad #3', cat: 'ai-videos', desc: 'Advanced AI commercial content', video: 'H_qhBRKAxoo' },
  { title: 'AI Video Creation #4', cat: 'ai-videos', desc: 'AI-powered video generation', video: '9XXxj6h3gyY' },
  { title: 'AI Video Creation #5', cat: 'ai-videos', desc: 'Intelligent content generation', video: 'tWcevoar9ZQ' },
  { title: 'AI Video Creation #6', cat: 'ai-videos', desc: 'Automated video production', video: 'fYp3WTle6bQ' },
  { title: 'AI Video Creation #7', cat: 'ai-videos', desc: 'Sophisticated AI video tools', video: 'xryTGjJgIWg' },
  { title: 'AI Video Creation #8', cat: 'ai-videos', desc: 'Advanced AI-powered creation', video: 'hlnRaZVRw2M' },
  { title: 'AI Video Creation #9', cat: 'ai-videos', desc: 'Cutting-edge AI video', video: 'HbLPa0E3UPg' },
];


document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initNavigation();
  initTypedText();
  initStatsCounter();
  initProjects();
  initVideoModal();
  initContactForm();
  initBusinessPopup();
  initScrollAnimations();
  initCursorFollower();
  initSmoothScroll();
});

function initPreloader() {
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => setTimeout(() => preloader.classList.add('hidden'), 800));
  setTimeout(() => preloader.classList.add('hidden'), 3000);
}

function initNavigation() {
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    let current = '';
    sections.forEach(s => {
      const top = s.offsetTop - 200;
      const bottom = top + s.offsetHeight;
      if (window.scrollY >= top && window.scrollY < bottom) current = s.id;
    });
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
  });

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  links.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      menuToggle.classList.remove('active');
      navLinks.classList.remove('open');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });
}

function initTypedText() {
  const titles = ['Full Stack Developer', 'AI Video Creator', 'System Architect', 'UI/UX Enthusiast', 'Tech Innovator'];
  const el = document.getElementById('typed-text');
  let idx = 0, charIdx = 0, isDeleting = false;
  function type() {
    const current = titles[idx];
    if (isDeleting) {
      el.textContent = current.substring(0, charIdx--);
      if (charIdx < 0) { isDeleting = false; idx = (idx + 1) % titles.length; setTimeout(type, 400); return; }
      setTimeout(type, 40);
    } else {
      el.textContent = current.substring(0, charIdx++);
      if (charIdx > current.length) { isDeleting = true; setTimeout(type, 1500); return; }
      setTimeout(type, 80);
    }
  }
  type();
}

function initStatsCounter() {
  const stats = document.querySelectorAll('.stat-num');
  let counted = false;
  function countUp() {
    if (counted) return;
    counted = true;
    stats.forEach(stat => {
      const target = parseInt(stat.dataset.count);
      let current = 0;
      const step = Math.ceil(target / 40);
      const interval = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(interval); }
        stat.textContent = current;
      }, 40);
    });
  }
  const observer = new IntersectionObserver(entries => { if (entries[0].isIntersecting) countUp(); }, { threshold: 0.5 });
  observer.observe(document.querySelector('.hero-stats'));
}

function initProjects() {
  let currentFilter = 'all';
  let swiperInstance = null;

  function renderProjects(filter) {
    const grid = document.getElementById('projectsGrid');
    const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);

    grid.innerHTML = filtered.map((p, idx) => {
      const isVideo = !!p.video;
      const icon = isVideo ? 'fa-video' : 'fa-globe';
      const vid = p.video || '';
      const img = isVideo
        ? `https://img.youtube.com/vi/${vid}/maxresdefault.jpg`
        : (p.url ? `https://s0.wp.com/mshots/v1/${encodeURIComponent(p.url)}?w=800&h=600` : `https://placehold.co/800x600/161b22/8b949e?text=${encodeURIComponent(p.title)}`);
      return `
        <div class="swiper-slide">
          <div class="project-card" data-video="${vid}" data-url="${p.url || ''}" data-isvideo="${isVideo}">
            <img src="${img}" alt="${p.title}" class="project-thumb" loading="lazy" onerror="this.src='https://placehold.co/400x200/161b22/8b949e?text=${encodeURIComponent(p.title)}'" />
            <div class="project-body">
              <div class="project-type"><i class="fas ${icon}"></i> ${isVideo ? 'Video' : 'Website'}</div>
              <h3 class="project-title">${p.title}</h3>
              <p class="project-desc">${p.desc}</p>
            </div>
          </div>
        </div>`;
    }).join('');

    grid.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const isVideo = card.dataset.isvideo === 'true';
        if (isVideo && card.dataset.video) {
          openVideoModal(card.dataset.video);
        } else if (card.dataset.url) {
          window.open(card.dataset.url, '_blank');
        }
      });
    });

    if (swiperInstance) swiperInstance.destroy(true, true);
    swiperInstance = new Swiper('.projects-slider', {
      slidesPerView: 1, spaceBetween: 20,
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-next', prevEl: '.swiper-prev' },
      breakpoints: { 640: { slidesPerView: 2 }, 968: { slidesPerView: 3 } },
    });
  }

  renderProjects('all');

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.filter-btn.active').classList.remove('active');
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProjects(currentFilter);
    });
  });
}

function initVideoModal() {
  const modal = document.getElementById('videoModal');
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');
  const frame = document.getElementById('videoFrame');

  window.openVideoModal = function(videoId) {
    const src = videoId.includes('youtube.com/embed') ? videoId : `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    frame.src = src;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    modal.classList.remove('active');
    frame.src = '';
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('formName').value;
    const email = document.getElementById('formEmail').value;
    const subject = document.getElementById('formSubject').value;
    const message = document.getElementById('formMessage').value;
    const mailto = `mailto:mdlakruwan2020@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message)}`;
    window.location.href = mailto;
    status.textContent = '✓ Redirecting to your email client...';
    status.style.color = 'var(--green)';
  });
}

function initBusinessPopup() {
  const popup = document.getElementById('businessPopup');
  const closeBtn = document.getElementById('popupClose');
  if (!sessionStorage.getItem('popupShown')) {
    setTimeout(() => {
      popup.style.display = 'flex';
      popup.style.opacity = '0';
      requestAnimationFrame(() => { popup.style.transition = 'opacity 0.4s'; popup.style.opacity = '1'; });
      sessionStorage.setItem('popupShown', 'true');
    }, 8000);
  }
  closeBtn.addEventListener('click', () => { popup.style.opacity = '0'; setTimeout(() => { popup.style.display = 'none'; }, 400); });
  popup.addEventListener('click', e => { if (e.target === popup) { popup.style.opacity = '0'; setTimeout(() => { popup.style.display = 'none'; }, 400); } });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.service-card, .project-card, .timeline-content, .contact-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

function initCursorFollower() {
  const cursor = document.getElementById('cursorFollower');
  document.addEventListener('mousemove', e => { cursor.style.left = e.clientX + 'px'; cursor.style.top = e.clientY + 'px'; cursor.style.opacity = '1'; });
  document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
  document.querySelectorAll('a, button, input, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.transform = 'translate(-50%, -50%) scale(1.5)'; cursor.style.borderColor = 'var(--accent)'; });
    el.addEventListener('mouseleave', () => { cursor.style.transform = 'translate(-50%, -50%) scale(1)'; });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]:not(.nav-link)').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}
