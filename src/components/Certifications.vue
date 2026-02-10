<template>
  <section id="certifications" class="section">
    <div class="section-heading">
      <h2>Certifications & Education</h2>
      <hr />
    </div>
    <div class="container">
  <div class="education-block mb-4 reveal">
        <h3 class="title-with-bar education-heading">
          <span class="bar" aria-hidden="true"></span>
          EDUCATION
        </h3>
        <p class="education-details mb-2">Bachelor of Science (BSc) in Math-Physics-Statistics</p>
        <p class="education-details">Continuously expanding my skillset across the full spectrum of front-end development and the design, development, and delivery of effective eLearning solutions.</p>
      </div>

      <h3 class="title-with-bar certifications-title mt-4">
        <span class="bar" aria-hidden="true"></span>
        PROFESSIONAL CERTIFICATIONS
      </h3>

      <div class="cert-grid mt-3">
        <div class="cert-card reveal" v-for="(c, i) in certifications" :key="i">
          <h4 class="cert-title">{{ c.title }}</h4>
          <p class="cert-issuer">{{ c.issuer }}</p>
          <p class="cert-date">{{ c.date }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const certifications = [
  { title: 'Learning Next.js', issuer: 'LinkedIn Learning', date: 'January 2025' },
  { title: 'Building RESTful APIs with Node.js and Express', issuer: 'LinkedIn Learning', date: 'December 2024' },
  { title: 'Microsoft Azure Fundamentals (AZ-900) Cert Prep', issuer: 'Microsoft Press', date: 'December 2024' },
  { title: 'Node.js Essential Training', issuer: 'LinkedIn Learning', date: 'November 2024' },
  { title: 'TypeScript Essential Training', issuer: 'LinkedIn Learning', date: 'May 2024' },
  { title: 'Advanced Selenium: Automation Frameworks', issuer: 'LinkedIn Learning', date: 'December 2023' },
  { title: 'ChatGPT for Web Developers', issuer: 'LinkedIn Learning', date: 'December 2023' },
  { title: 'Learning Vue.js', issuer: 'LinkedIn Learning', date: 'March 2022' },
  { title: 'Unconscious Bias', issuer: 'LinkedIn Learning', date: 'February 2022' },
  { title: 'Confronting Bias: Thriving Across Our Differences', issuer: 'LinkedIn Learning', date: 'February 2022' },
  { title: "React.js Essential Training", issuer: 'LinkedIn Learning', date: 'December 2020' },
]

onMounted(() => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        obs.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })

  const elems = document.querySelectorAll('.education-block.reveal, .cert-card.reveal')
  elems.forEach((el, i) => {
    el.style.transitionDelay = `${i * 80}ms`
    observer.observe(el)
  })
})
</script>

/* component styles - section heading is centralized in assets/style.scss */
<style scoped>
.education-details {
  font-size: 1.02rem;
  color: var(--color-text-muted);
  line-height: 1.7;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.6rem;
}

.cert-card {
  background: rgba(255, 255, 255, 0.92);
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.65);
  padding: 1.6rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.education-block {
  padding: 0.75rem 1rem;
  background: rgba(76, 111, 255, 0.08);
  border-radius: var(--radius-md);
  border: 1px solid rgba(76, 111, 255, 0.12);
  box-shadow: 0 16px 30px rgba(15, 23, 42, 0.08);
}

.education-heading,
.certifications-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 800;
  color: var(--color-heading);
  letter-spacing: 0.08em;
}

.education-heading {
  font-size: 1.15rem;
}

.certifications-title {
  font-size: 1.2rem;
  margin-top: 2.25rem;
}

.education-heading .bar,
.certifications-title .bar {
  width: 6px;
  height: 32px;
  border-radius: 999px;
  background: var(--gradient-primary);
}

.cert-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-heading);
}

.cert-issuer {
  color: var(--color-text-muted);
  font-weight: 500;
}

.cert-date {
  color: rgba(15, 23, 42, 0.5);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.85rem;
}
</style>
