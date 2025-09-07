<template>
  <nav class="navbar sticky-navbar navbar-expand-md" aria-label="Main navigation" role="navigation">
    <span class="navbar-brand-name" tabindex="0">Portfolio</span>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto" role="menubar">
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

function scrollToSection(section) {
  activeSection.value = section;
  if (section === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(section);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

let observers = [];
onMounted(() => {
  sections.forEach((section) => {
    const el = document.getElementById(section);
    if (el) {
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            activeSection.value = section;
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.5,
        }
      );
      observer.observe(el);
      observers.push(observer);
    }
  });
});
onUnmounted(() => {
  observers.forEach((observer) => observer.disconnect());
  observers = [];
});
</script>

<style scoped>
.navbar {
  background: #fff !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border-radius: 0;
  margin-bottom: 2rem;
}
.sticky-navbar {
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-link.active {
  background: #f3f6ff;
  color: #1565c0 !important;
  border-radius: 0.5rem;
  font-weight: 500;
}
.navbar-brand-name {
  color: #1565c0;
  font-weight: 700;
  font-size: 1.5rem;
}
.navbar-toggler {
  border: none;
  background: transparent;
}
.navbar-toggler-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path stroke="rgba(3,76,183,1)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/></svg>') center/contain no-repeat;
}
</style>
