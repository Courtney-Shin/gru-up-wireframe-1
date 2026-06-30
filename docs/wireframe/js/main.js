/* ─────────────────────────────────────────
   Paired & Prepared — Global JS
   ───────────────────────────────────────── */

// Nav scroll effect
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  });
}

// Mobile menu
const menuBtn = document.querySelector('.nav__menu');
const navLinks = document.querySelector('.nav__links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('nav__links--open');
  });
}

// Active nav link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__link').forEach(link => {
  const href = link.getAttribute('href') || '';
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Dropdown — click to open, click outside to close
document.querySelectorAll('.nav__dropdown').forEach(dropdown => {
  const toggle = dropdown.querySelector('.nav__dropdown-toggle');
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.contains('open');
    document.querySelectorAll('.nav__dropdown').forEach(d => d.classList.remove('open'));
    if (!isOpen) dropdown.classList.add('open');
  });
  dropdown.querySelector('.nav__dropdown-menu').addEventListener('click', (e) => {
    e.stopPropagation();
  });
});
document.addEventListener('click', () => {
  document.querySelectorAll('.nav__dropdown').forEach(d => d.classList.remove('open'));
});

// Scroll fade-up animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Language toggle ──
const translations = {
  // Nav
  'nav.issues':    { ko: 'issues',    en: 'issues' },
  'nav.masthead':  { ko: 'masthead',  en: 'masthead' },
  'nav.about':     { ko: 'about',     en: 'about' },

  // Homepage
  'home.issue-live':   { ko: 'Issue 01: Mobility — Now Live', en: 'Issue 01: Mobility — Now Live' },
  'home.explore':      { ko: 'Explore Issues →',              en: 'Explore Issues →' },
  'home.issue-label':  { ko: '차량 산업 패러다임의 변화',          en: 'The Paradigm Shift in the Automotive Industry' },
  'home.issue-sub':    { ko: 'Mobility — from racing culture to SDV', en: 'Mobility — from racing culture to SDV' },

  // Issues page
  'issues.hero-title': { ko: 'Issues', en: 'Issues' },
  'issues.hero-sub':   { ko: 'Business, Design, Data & Engineering의 교차점에서 반기 단위로 발행하는 리서치 아카이브.', en: 'A semi-annual research archive at the intersection of Business, Design, and Engineering.' },
  'issues.banner-title': { ko: '차량 산업 패러다임의 변화', en: 'The Paradigm Shift in the Automotive Industry' },
  'issues.s1-title': { ko: 'Business — 역사 및 기업 사례', en: 'Business — History & Corporate Cases' },
  'issues.s2-title': { ko: 'Business × Design — 소비자 선택 국면', en: 'Business × Design — Consumer Decision Making' },
  'issues.s3-title': { ko: 'Business × Engineering — 기술적 측면', en: 'Business × Engineering — Technical Dimensions' },
  'issues.s4-title': { ko: '최종 제언', en: 'Final Remarks' },

  // About page
  'about.hero-body':   { ko: 'dots mag는 Business, Design, Engineering의 교차점에서 산업을 분석하는 리서치 매거진입니다. 성균관대학교 GRU 출신 멤버들이 만들며, 반기 단위로 하나의 주제를 구조적으로 파고듭니다.', en: 'dots mag is a research magazine analyzing industries at the intersection of Business, Design, and Engineering. Made by alumni of GRU at Sungkyunkwan University, published semi-annually around a single theme.' },
  'about.why-label':   { ko: '왜 만들었나', en: 'Why we started' },
  'about.why-quote':   { ko: '"대부분의 프로젝트는 완성되고, 발표되고, 잊혀진다."', en: '"Most projects are finished, presented, and forgotten."' },
  'about.why-p1':      { ko: '학회에서, 외부 프로젝트에서, 스타트업과의 협업에서 우리는 짧고 강한 실행을 경험했습니다. 하지만 프로젝트가 끝나면 사람은 흩어지고, 많은 생각들은 슬라이드 몇 장이나 드라이브 폴더 안에 남은 채 조용히 사라졌습니다.', en: 'In student clubs, external projects, and startup collaborations, we experienced short, intense bursts of execution. But when projects ended, people scattered — and most of the thinking quietly disappeared into slide decks and drive folders.' },
  'about.why-p2':      { ko: 'dots mag는 그 반대편에 있습니다. 빠르게 끝나는 프로젝트가 아니라 조금 더 긴 호흡으로 생각을 밀고 나가는 곳 — 각 Issue는 단순한 발간물이 아니라, 앞으로 수년간 쌓여갈 지식 구조의 한 노드입니다.', en: 'dots mag is the opposite. Not a fast project, but a place to push thinking further — each Issue is not just a publication, but a node in a knowledge structure that will compound over years.' },
  'about.who-label':   { ko: '누가 만드나', en: 'Who makes it' },
  'about.who-quote':   { ko: '"같은 질문을 오래 붙잡아본 사람들."', en: '"People who stayed with the same question long enough."' },
  'about.who-p1':      { ko: 'dots mag는 성균관대학교 GRU(실천경영전략학회) 출신 멤버들이 만듭니다. GRU는 학제를 넘어 비즈니스·디자인·엔지니어링을 함께 탐구해온 학회로, dots mag는 그 연장선 위에 있습니다.', en: 'dots mag is made by alumni of GRU (Strategy & Management Society) at Sungkyunkwan University. GRU is a club that explores business, design, and engineering across disciplines — dots mag is a direct extension of that.' },
  'about.who-p2':      { ko: '매 Issue마다 팀이 구성되고, 하나의 주제를 수개월에 걸쳐 리서치하고 쓰고 편집합니다. 독자는 같은 교차점에 관심 있는 누구든 환영합니다 — 학생이든, 실무자든, 그냥 궁금한 사람이든.', en: 'Each Issue, a team is formed and spends months researching, writing, and editing a single theme. Anyone curious about the same intersection is welcome — students, practitioners, or just the curious.' },
  'about.closing':     { ko: 'dots mag는 관심 있는 이야기를 그냥 흘려보내지 않기 위해 만들어졌습니다. 하나의 점에서 시작해, 점들이 이어집니다.', en: 'dots mag was made so that interesting ideas don\'t just pass by. It starts from a dot. Dots connect.' },

  // Masthead
  'masthead.hero-title': { ko: 'dots mag를 만드는 사람들.', en: 'The people behind dots mag.' },
  'masthead.hero-sub':   { ko: 'Issue마다 구성이 달라집니다. 각 호의 팀을 아래에서 확인하세요.', en: 'Team composition varies by issue. See each issue\'s contributors below.' },
  'masthead.origin-title': { ko: 'From GRU', en: 'From GRU' },
  'masthead.origin-p1': { ko: 'dots mag는 GRU에서 이어진 문제의식 위에 있습니다. GRU는 학생과 실무자들이 학제를 넘어 함께 작업하고, 가정을 검증하며, 구조적 탐구의 문화를 만들어온 곳입니다.', en: 'dots mag builds on the intellectual curiosity that started at GRU — a community where students and practitioners work across disciplines, test assumptions, and build a culture of structured inquiry.' },
  'masthead.origin-p2': { ko: 'GRU에서 싹튼 더 깊이 파고들고 싶다는 충동이 dots mag가 되었습니다.', en: 'The urge to dig deeper that grew at GRU became dots mag.' },
  'masthead.contrib-label': { ko: 'Issue 01 Contributors', en: 'Issue 01 Contributors' },

};

(function() {
  let currentLang = localStorage.getItem('dotsmag-lang') || 'ko';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('dotsmag-lang', lang);

    // Set lang on html element — CSS .ko/.en rules handle visibility
    document.documentElement.lang = lang;

    // Toggle buttons
    document.querySelectorAll('.nav__lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });


  }

  document.addEventListener('click', e => {
    if (e.target.classList.contains('nav__lang-btn')) {
      applyLang(e.target.dataset.lang);
    }
  });

  // Apply on load
  document.addEventListener('DOMContentLoaded', () => applyLang(currentLang));
  applyLang(currentLang);
})();

// Trailing dots cursor effect
(function() {
  const DOTS = 18;
  const dots = [];

  for (let i = 0; i < DOTS; i++) {
    const el = document.createElement('div');
    el.style.cssText = `
      position: fixed;
      width: ${4 - i * 0.15}px;
      height: ${4 - i * 0.15}px;
      border-radius: 50%;
      background: var(--accent);
      opacity: 0;
      pointer-events: none;
      z-index: 9999;
      transition: opacity 0.3s;
      transform: translate(-50%, -50%);
    `;
    document.body.appendChild(el);
    dots.push({ el, x: 0, y: 0 });
  }

  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dots[0].el.style.opacity = '1';
  });

  document.addEventListener('mouseleave', () => {
    dots.forEach(d => d.el.style.opacity = '0');
  });

  function animate() {
    let x = mouseX, y = mouseY;
    dots.forEach((dot, i) => {
      dot.x += (x - dot.x) * (0.25 - i * 0.01);
      dot.y += (y - dot.y) * (0.25 - i * 0.01);
      dot.el.style.left = dot.x + 'px';
      dot.el.style.top = dot.y + 'px';
      dot.el.style.opacity = Math.max(0, 1 - i / DOTS * 1.2);
      x = dot.x;
      y = dot.y;
    });
    requestAnimationFrame(animate);
  }
  animate();
})();

// Category filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const bar = this.closest('.filter-bar');
    bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    const filter = this.dataset.filter;
    document.querySelectorAll('.card[data-category]').forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
