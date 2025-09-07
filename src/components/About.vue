<template>
  <section id="about" class="section" aria-label="About Me">
    <div class="section-heading">
      <h2>About Me</h2>
      <hr />
    </div>
    <div class="card" tabindex="0">
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
.section-heading {
  text-align: center;
  margin-bottom: 2rem;
}
.section-heading h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1565c0;
  margin-bottom: 0.5rem;
}
.section-heading hr {
  border: none;
  border-top: 4px solid #e0e4ea;
  width: 90%;
  margin: 0 auto;
}
.card {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 2rem;
  margin: 0 auto;
  max-width: 800px;
}
.about-content {
  margin-bottom: 2rem;
}
.about-content p {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1rem;
}
</style>
