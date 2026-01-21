<template>
  <section class="hero" aria-label="Hero" :style="{ backgroundImage: `url(${headerImg})` }">
    <div class="hero-overlay">
      <div class="hero-content">
        <h1 class="hero-title">
          Hello, I'm <span class="hero-name">Fareed Hassan</span>
        </h1>
        <h2 class="hero-subtitle">Front-End Web Developer &amp; eLearning Specialist</h2>
        <p class="hero-desc">I create interactive, accessible, and responsive web experiences with a focus on eLearning solutions.</p>
        <div class="hero-buttons">
          <button class="btn hero-btn" type="button" @click="scrollToSection('projects')">View My Work</button>
          <button class="btn hero-btn-outline" type="button" @click="scrollToSection('contact')">Get In Touch</button>
        </div>
      </div>
      <span class="hero-copyright">© Fareed Hassan</span>
    </div>
  </section>
</template>

<script setup>
// Import the hero image so the bundler (Vite) resolves the asset path correctly
import headerImg from '../images/headerImg1.jpg'

const getNavOffset = () => {
  const navEl = document.querySelector('.navbar')
  if (!navEl) return 96
  const extra = 12
  return navEl.offsetHeight + extra
}

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  const offset = getNavOffset()
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top: top > 0 ? top : 0, behavior: 'smooth' })
}
</script>

<style scoped lang="scss">
.hero {
  position: relative;
  min-height: 420px;
  border-radius: 34px;
  overflow: hidden;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(140deg, rgba(17, 24, 39, 0.8) 0%, rgba(17, 24, 39, 0.35) 45%, rgba(17, 24, 39, 0.65) 100%);
  mix-blend-mode: multiply;
  pointer-events: none;
}

.hero-overlay {
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 1.5rem 3rem;
  gap: 1.5rem;
}

.hero-content {
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 28px;
  backdrop-filter: blur(18px) saturate(125%);
  -webkit-backdrop-filter: blur(18px) saturate(125%);
  padding: clamp(2rem, 3vw, 2.75rem) clamp(1.5rem, 4vw, 3rem);
  max-width: 760px;
  text-align: center;
  color: #f9fafb;
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.35);
}

.hero-title {
  font-size: clamp(2.25rem, 4vw, 3.05rem);
  font-weight: 800;
  margin: 0 0 0.65rem;
  letter-spacing: -0.015em;
}

.hero-name {
  color: #facc15;
  background: linear-gradient(120deg, #fde68a 0%, #facc15 50%, #f97316 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: clamp(1.15rem, 2vw, 1.4rem);
  font-weight: 600;
  color: rgba(229, 231, 235, 0.92);
  margin-bottom: 1rem;
}

.hero-desc {
  font-size: clamp(1.05rem, 1.5vw, 1.15rem);
  color: rgba(229, 231, 235, 0.78);
  margin-bottom: 1.75rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-btn {
  background: linear-gradient(135deg, #4f46e5 0%, #2563eb 45%, #14b8a6 100%);
  color: #fff;
  border-radius: 999px;
  font-weight: 600;
  padding: 0.85rem 2.4rem;
  border: none;
  box-shadow: 0 16px 36px rgba(37, 99, 235, 0.32);
  transition: transform 180ms ease, box-shadow 220ms ease;
}

.hero-btn:hover,
.hero-btn:focus {
  transform: translateY(-2px);
  box-shadow: 0 22px 48px rgba(37, 99, 235, 0.42);
}

.hero-btn-outline {
  background:
    linear-gradient(135deg, rgba(17, 24, 39, 0.88), rgba(17, 24, 39, 0.6)) padding-box,
    linear-gradient(135deg, rgba(79, 70, 229, 0.85), rgba(20, 184, 166, 0.9)) border-box;
  color: #f9fafb;
  border: 1.5px solid transparent;
  border-radius: 999px;
  font-weight: 600;
  padding: 0.82rem 2.35rem;
  transition: background 180ms ease, color 180ms ease, transform 180ms ease, box-shadow 220ms ease;
}

.hero-btn-outline:hover,
.hero-btn-outline:focus {
  background:
    linear-gradient(135deg, rgba(30, 38, 54, 0.9), rgba(17, 24, 39, 0.7)) padding-box,
    linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(45, 212, 191, 0.85)) border-box;
  color: #fff;
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.24);
  transform: translateY(-2px);
}

.hero-copyright {
  position: absolute;
  right: clamp(1.5rem, 4vw, 3.5rem);
  bottom: 1.5rem;
  color: rgba(229, 231, 235, 0.75);
  font-size: 0.92rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .hero {
    border-radius: 28px;
  }
  .hero-content {
    padding: 2rem 1.35rem;
  }
  .hero-title {
    font-size: 1.9rem;
  }
}
</style>
