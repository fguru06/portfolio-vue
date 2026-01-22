<template>
  <nav class="navbar navbar-expand-md sticky-navbar" aria-label="Main navigation" role="navigation">
    <div class="navbar-inner flex-row">
      <div class="navbar-brand-wrap">
        <span class="navbar-brand-name vibrant-brand" tabindex="0">Portfolio</span>
      </div>
      <div class="navbar-links-wrap">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav nav-right" role="menubar">
            <li class="nav-item" v-for="section in sections" :key="section" role="none">
              <a
                class="nav-link px-3"
                :class="{ active: activeSection === section }"
                :href="`#${section}`"
                @click.prevent="scrollToSection(section)"
                role="menuitem"
                :aria-current="activeSection === section ? 'page' : undefined"
                tabindex="0"
              >
                {{ section.charAt(0).toUpperCase() + section.slice(1) }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const sections = [
  'home',
  'about',
  'experience',
  'projects',
  'testimonials',
  'certifications',
  'contact',
];
const activeSection = ref('home');

const getNavOffset = () => {
  const navEl = document.querySelector('.navbar');
  if (!navEl) return 96;
  const extra = 12; // slight breathing room below the sticky nav
  return navEl.offsetHeight + extra;
};

function collapseNavIfOpen() {
  const navCollapse = document.getElementById('navbarNav');
  if (!navCollapse || !navCollapse.classList.contains('show')) return;
  const bootstrap = window.bootstrap;
  if (bootstrap && typeof bootstrap.Collapse === 'function') {
    let instance = bootstrap.Collapse.getInstance(navCollapse);
    if (!instance) {
      instance = new bootstrap.Collapse(navCollapse, { toggle: false });
    }
    instance.hide();
  } else {
    navCollapse.classList.remove('show');
  }
}

function setManualSelection(section) {
  manualSelection = section;
  if (manualSelectionTimeout) {
    window.clearTimeout(manualSelectionTimeout);
  }
  manualSelectionTimeout = window.setTimeout(() => {
    manualSelection = null;
    manualSelectionTimeout = null;
  }, 900);
}

function scrollToSection(section) {
  setManualSelection(section);
  activeSection.value = section;
  collapseNavIfOpen();
  if (section === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(section);
  if (!el) return;
  const offset = getNavOffset();
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: top > 0 ? top : 0, behavior: 'smooth' });
}

let observers = [];
let fallbackScrollHandler = null;
let manualSelection = null;
let manualSelectionTimeout = null;

onMounted(() => {
  sections.forEach((section) => {
    const el = document.getElementById(section);
    if (!el) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (manualSelection) return;
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          activeSection.value = section;
        }
      },
      {
        root: null,
        rootMargin: `-${getNavOffset()}px 0px 0px 0px`,
        threshold: [0.3, 0.5, 0.7],
      }
    );
    observer.observe(el);
    observers.push(observer);
  });

  fallbackScrollHandler = () => {
    if (manualSelection) return;
    const triggerLine = getNavOffset();
    let found = false;
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const el = document.getElementById(section);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= triggerLine && rect.bottom > triggerLine) {
        activeSection.value = section;
        found = true;
        break;
      }
    }
    if (!found) activeSection.value = sections[0];
  };

  window.addEventListener('scroll', fallbackScrollHandler, { passive: true });
});

onUnmounted(() => {
  if (fallbackScrollHandler) {
    window.removeEventListener('scroll', fallbackScrollHandler);
    fallbackScrollHandler = null;
  }
  if (manualSelectionTimeout) {
    window.clearTimeout(manualSelectionTimeout);
    manualSelectionTimeout = null;
  }
  manualSelection = null;
  observers.forEach((observer) => observer.disconnect());
  observers = [];
});
</script>

<style scoped>
.navbar {
  position: sticky;
  top: var(--sticky-nav-top, 0px);
  z-index: 1030;
  width: 100%;
  background: rgba(255, 255, 255, 0.9) !important;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: var(--shadow-sm);
  margin-bottom: 2.25rem;
  transition: box-shadow 220ms ease, transform 220ms ease, background 220ms ease;
  padding: 0;
  backdrop-filter: blur(16px);
}

.navbar::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(76, 111, 255, 0.12) 0%, rgba(255, 255, 255, 0) 65%);
  pointer-events: none;
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 2rem;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}

.navbar-brand-wrap {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-right: clamp(1.25rem, 4vw, 3rem);
}

.navbar-brand-name.vibrant-brand {
  font-weight: 800;
  font-size: 1.65rem;
  line-height: 1;
  letter-spacing: -0.01em;
  background: linear-gradient(120deg, #4c6fff 0%, #8b5cf6 45%, #22d3ee 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.navbar-brand-name.vibrant-brand::after {
  content: none;
}

.navbar-links-wrap {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  justify-content: flex-end;
  min-width: 0;
}

.nav-right {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0.45rem 0.6rem;
  align-items: center;
  background: rgba(247, 249, 255, 0.85);
  border-radius: 999px;
  border: 1px solid rgba(76, 111, 255, 0.14);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(16px);
}

.nav-right li {
  display: flex;
}

.nav-link {
  color: var(--color-text-muted);
  font-size: 1rem;
  padding: 0.55rem 1.25rem;
  border-radius: 999px;
  transition: color 160ms ease, background 220ms ease, transform 160ms ease, box-shadow 220ms ease;
  position: relative;
  font-weight: 600;
}

.nav-link::after {
  content: '';
  position: absolute;
  inset: auto 18% 0;
  height: 3px;
  border-radius: 999px;
  background: transparent;
  transition: transform 220ms ease, opacity 160ms ease;
  transform-origin: center;
  opacity: 0;
}

.nav-link:hover {
  color: var(--color-heading) !important;
  background: rgba(76, 111, 255, 0.12);
  transform: translateY(-1px);
  box-shadow: 0 10px 24px rgba(76, 111, 255, 0.18);
}

.nav-link:hover::after {
  background: var(--gradient-primary);
  opacity: 1;
  transform: scaleX(1.1);
}

.nav-link.active {
  color: var(--color-heading) !important;
  background: rgba(76, 111, 255, 0.18);
  box-shadow: 0 18px 40px rgba(76, 111, 255, 0.24);
}

.nav-link.active::after {
  background: var(--gradient-primary);
  opacity: 1;
  transform: scaleX(1);
}

.is-fixed {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1030;
  border-color: rgba(76, 111, 255, 0.16);
  box-shadow: var(--shadow-md);
  background: rgba(255, 255, 255, 0.96) !important;
}

.navbar-toggler {
  border: none;
  background: rgba(76, 111, 255, 0.1);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 22px;
  height: 22px;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path stroke="%234c6fff" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 8h22M4 15h22M4 22h22"/></svg>') center/contain no-repeat;
}

@media (max-width: 1200px) {
  .navbar-inner {
    padding: 0.9rem 1.65rem;
  }
  .navbar-brand-wrap {
    margin-right: clamp(0.8rem, 3vw, 1.6rem);
  }
  .nav-right {
    gap: 0.6rem;
    padding: 0.35rem 0.5rem;
  }
  .nav-link {
    padding: 0.5rem 0.95rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 1080px) {
  .nav-right {
    gap: 0.5rem;
    padding: 0.3rem 0.4rem;
  }
  .nav-link {
    padding: 0.45rem 0.8rem;
    font-size: 0.9rem;
  }
  .navbar-brand-name.vibrant-brand {
    font-size: 1.48rem;
  }
}

@media (max-width: 1040px) {
  .navbar-inner {
    padding: 0.85rem 1.4rem;
  }
  .navbar-brand-wrap {
    margin-right: clamp(0.55rem, 2.5vw, 1.2rem);
  }
  .nav-right {
    gap: 0.35rem;
    padding: 0.22rem 0.32rem;
  }
  .nav-link {
    padding: 0.38rem 0.68rem;
    font-size: 0.86rem;
  }
  .navbar-brand-name.vibrant-brand {
    font-size: 1.36rem;
  }
}

@media (max-width: 992px) {
  .navbar-inner {
    padding: 0.85rem 1.5rem;
    flex-wrap: wrap;
  }
  .navbar-links-wrap {
    width: 100%;
    justify-content: flex-end;
    gap: 0.5rem;
  }
  .navbar-toggler {
    order: 1;
    margin-left: auto;
  }
  .navbar-collapse {
    order: 2;
    width: 100%;
    margin-top: 0.75rem;
  }
  .nav-right {
    flex-direction: column;
    align-items: stretch;
    gap: 0.4rem;
    padding: 0;
    background: transparent;
    border: none;
    box-shadow: none;
    backdrop-filter: none;
    width: 100%;
  }
  .nav-link {
    display: block;
    width: 100%;
    text-align: left;
    padding: 0.65rem 0.85rem;
  }
}

@media (max-width: 600px) {
  .navbar-inner {
    padding: 0.75rem 1.1rem;
  }
}
</style>
