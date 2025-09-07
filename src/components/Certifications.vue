<template>
  <section id="certifications" class="section">
    <div class="section-heading">
      <h2>Certifications</h2>
      <hr />
    </div>
    <div class="card">
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="card h-100 p-4 shadow-sm">
            <h3 class="education-title">Education</h3>
            <p class="education-details mb-2">Bachelor of Science (BSc) in Math-Physics-Statistics, Punjab University</p>
            <p class="education-details">Continuously expanding my skillset across the full spectrum of front-end development and the design, development, and delivery of effective eLearning solutions.</p>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card h-100 p-4 shadow-sm">
            <h3 class="certifications-title">Professional Certifications</h3>
            <ul class="list-unstyled mb-0">
              <li>Certified Front-End Developer</li>
              <li>Certified eLearning Specialist</li>
              <li>WCAG Accessibility Training</li>
              <li>JavaScript Advanced Course</li>
              <li>Vue.js Mastery</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No logic needed for static certifications section
</script>

<style scoped>
.certifications-section {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  padding: 2rem;
  margin-bottom: 2rem;
}
.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #2196f3;
  text-align: center;
}
.education-title, .certifications-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.education-details {
  font-size: 1rem;
  color: #444;
}
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
</style>
