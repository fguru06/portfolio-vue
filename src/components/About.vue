<template>
  <section id="about" class="section" aria-label="About Me">
    <div class="section-heading">
      <h2>About Me</h2>
      <hr />
    </div>
    <div class="card reveal" tabindex="0">
      <div class="about-content">
        <p>
          I'm a highly motivated and results-oriented front-end and eLearning developer with 10+ years of cutting-edge experience designing, developing, and maintaining engaging and accessible learning experiences.
        </p>
        <p>
          I have a proven ability to create interactive, mobile-first, and responsive multimedia content that seamlessly integrates with university and college course curricula. I'm adept at collaborating with instructional designers and creative teams to deliver impactful eLearning solutions.
        </p>
        <p>
          In addition to my eLearning expertise, I have 4 years of extensive experience in front-end development. I have developed numerous web-based responsive and accessible applications using modern technologies such as HTML5, CSS3, JavaScript, Vue.js, and React.js. My work includes creating user-friendly interfaces, optimizing performance, and ensuring cross-browser compatibility.
        </p>
        <p>
          Passionate about staying at the forefront of the ever-evolving eLearning and front-end development landscape, I'm eager to contribute to innovative projects and am open to new opportunities and collaborations.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// No logic needed for static about section
</script>

<style scoped>
.card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.6);
  padding: clamp(2rem, 3vw, 2.75rem);
  max-width: 860px;
  margin: 0 auto;
  box-shadow: var(--shadow-sm);
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
  font-size: 1.05rem;
  color: var(--color-text-muted);
}

.about-content p {
  margin: 0;
  line-height: 1.7;
}
</style>
```
