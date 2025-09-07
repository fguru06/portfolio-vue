<template>
  <section class="hero" aria-label="Hero">
    <div class="hero-overlay">
      <div class="hero-content">
        <h1 class="hero-title">
          Hello, I'm <span class="hero-name">Fareed Hassan</span>
        </h1>
        <h2 class="hero-subtitle">Front-End Web Developer &amp; eLearning Specialist</h2>
        <p class="hero-desc">I create interactive, accessible, and responsive web experiences with a focus on eLearning solutions.</p>
        <div class="hero-buttons">
          <button class="btn hero-btn">View My Work</button>
          <button class="btn hero-btn-outline">Get In Touch</button>
        </div>
      </div>
      <span class="hero-copyright">© Fareed Hassan</span>
    </div>
  </section>
</template>

<script setup>
// No logic needed for static hero section
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 420px;
  background: url('@/images/headerImg1.jpg') center center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-overlay {
  position: relative;
  width: 100%;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(30, 30, 30, 0.55);
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.hero-content {
  background: rgba(255,255,255,0.92);
  border-radius: 2rem;
  box-shadow: 0 8px 32px rgba(3,76,183,0.10);
  padding: 2.5rem 2rem;
  max-width: 600px;
  margin: 2rem auto 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
}
.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 0.5rem;
}
.hero-name {
  color: #ffc107;
  font-weight: 700;
}
.hero-subtitle {
  font-size: 1.3rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 1rem;
}
.hero-desc {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 2rem;
}
.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 0.5rem;
}
.hero-btn {
  background: #ffc107;
  color: #222;
  border-radius: 2rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(255,193,7,0.08);
  border: none;
  padding: 0.75rem 2rem;
  transition: background 0.2s, box-shadow 0.2s;
}
.hero-btn:hover, .hero-btn:focus {
  background: #e0a800;
  color: #222;
  box-shadow: 0 4px 16px rgba(255,193,7,0.16);
}
.hero-btn-outline {
  background: transparent;
  color: #ffc107;
  border: 2px solid #ffc107;
  border-radius: 2rem;
  font-weight: 600;
  padding: 0.75rem 2rem;
  transition: background 0.2s, color 0.2s;
}
.hero-btn-outline:hover, .hero-btn-outline:focus {
  background: #ffc107;
  color: #222;
}
.hero-copyright {
  position: absolute;
  right: 2rem;
  bottom: 1rem;
  color: #fff;
  font-size: 0.9rem;
  opacity: 0.7;
  z-index: 3;
}
@media (max-width: 768px) {
  .hero-content {
    padding: 1.5rem 0.5rem;
    max-width: 95vw;
  }
  .hero-title {
    font-size: 1.5rem;
  }
}
</style>
