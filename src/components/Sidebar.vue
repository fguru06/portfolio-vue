<template>
  <div class="sidebar sticky-top" aria-label="Sidebar">
    <div class="profile-section text-center">
      <div class="profile-img-container blue-border">
        <img src="/src/assets/images/photo.png" alt="Profile photo" class="profile-img" />
      </div>
      <h2 class="dev-name mt-3 text-primary" tabindex="0">Fareed Hassan</h2>
      <p class="dev-title mb-3">Front-end Developer</p>
      <div class="social-icons mb-3" aria-label="Social links">
        <a href="#" class="social-icon round" aria-label="GitHub" tabindex="0"><i class="bi bi-github" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/fhassan06/" class="social-icon round" aria-label="LinkedIn" target="_blank" tabindex="0"><i class="bi bi-linkedin" aria-hidden="true"></i></a>
        <a href="#" class="social-icon round" aria-label="Twitter" tabindex="0"><i class="bi bi-twitter" aria-hidden="true"></i></a>
        <a href="#" class="social-icon round" aria-label="Email" tabindex="0"><i class="bi bi-envelope-fill" aria-hidden="true"></i></a>
      </div>
    </div>
    <div class="sidebar-accordion">
      <div class="accordion" id="sidebarAccordion">
        <div class="accordion-item">
          <h2 class="accordion-header" id="skillsHeading">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#skillsCollapseSidebar" aria-expanded="true" aria-controls="skillsCollapseSidebar">
              Skills
            </button>
          </h2>
          <div id="skillsCollapseSidebar" class="accordion-collapse collapse show" aria-labelledby="skillsHeading" data-bs-parent="#sidebarAccordion">
            <div class="accordion-body">
              <div class="skills-list">
                <div class="skill-item">
                  <div class="d-flex justify-content-between"><span>HTML5</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 95%"></div></div>
                </div>
                <div class="skill-item">
                  <div class="d-flex justify-content-between"><span>CSS3/SASS</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 90%"></div></div>
                </div>
                <div class="skill-item">
                  <div class="d-flex justify-content-between"><span>JavaScript</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 85%"></div></div>
                </div>
                <div class="skill-item">
                  <div class="d-flex justify-content-between"><span>Vue.js</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 75%"></div></div>
                </div>
                <div class="skill-item">
                  <div class="d-flex justify-content-between"><span>React.js</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 65%"></div></div>
                </div>
                <div v-if="showMore" class="skill-item">
                  <div class="d-flex justify-content-between"><span>Bootstrap 5</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 80%"></div></div>
                </div>
                <div v-if="showMore" class="skill-item">
                  <div class="d-flex justify-content-between"><span>PrimeVue</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 75%"></div></div>
                </div>
                <div v-if="showMore" class="skill-item">
                  <div class="d-flex justify-content-between"><span>WCAG Accessibility</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 70%"></div></div>
                </div>
                <div v-if="showMore" class="skill-item">
                  <div class="d-flex justify-content-between"><span>eLearning Development</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 65%"></div></div>
                </div>
                <div v-if="showMore" class="skill-item">
                  <div class="d-flex justify-content-between"><span>Git & Version Control</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 70%"></div></div>
                </div>
                <div v-if="showMore" class="skill-item">
                  <div class="d-flex justify-content-between"><span>Figma, Storyline, Camtasia</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 60%"></div></div>
                </div>
                <div v-if="showMore" class="skill-item">
                  <div class="d-flex justify-content-between"><span>Figma</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 60%"></div></div>
                </div>
                <div v-if="showMore" class="skill-item">
                  <div class="d-flex justify-content-between"><span>Articulate 360 (Storyline, Rise)</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 70%"></div></div>
                </div>
                <div v-if="showMore" class="skill-item">
                  <div class="d-flex justify-content-between"><span>Adobe Creative Suite</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 90%"></div></div>
                </div>
                <div v-if="showMore" class="skill-item">
                  <div class="d-flex justify-content-between"><span>Microsoft Office Suite</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 90%"></div></div>
                </div>
                <div v-if="showMore" class="skill-item">
                  <div class="d-flex justify-content-between"><span>Video Editing (Adobe Premiere, Camtasia, DaVinci Resolve)</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 80%"></div></div>
                </div>
                <div v-if="showMore" class="skill-item">
                  <div class="d-flex justify-content-between"><span>3D Modeling (Blender)</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 60%"></div></div>
                </div>
                <div v-if="showMore" class="skill-item">
                  <div class="d-flex justify-content-between"><span>LMS (Moodle, Canvas, D2L)</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 70%"></div></div>
                </div>
                <div v-if="showMore" class="skill-item">
                  <div class="d-flex justify-content-between"><span>SEO Best Practices</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 80%"></div></div>
                </div>
                <div v-if="showMore" class="skill-item">
                  <div class="d-flex justify-content-between"><span>Performance Optimization</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 70%"></div></div>
                </div>
                <div v-if="showMore" class="skill-item">
                  <div class="d-flex justify-content-between"><span>Cross-Browser Compatibility</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 80%"></div></div>
                </div>
                <div v-if="showMore" class="skill-item">
                  <div class="d-flex justify-content-between"><span>Testing & Debugging</span></div>
                  <div class="progress"><div class="progress-bar bg-primary" style="width: 80%"></div></div>
                </div>
                <div class="show-more text-primary mt-2" style="cursor:pointer;" @click="toggleShowMore">{{ showMore ? 'Show Less' : 'Show More' }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="contactHeading">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#contactCollapseSidebar" aria-expanded="false" aria-controls="contactCollapseSidebar">
              Contact
            </button>
          </h2>
          <div id="contactCollapseSidebar" class="accordion-collapse collapse" aria-labelledby="contactHeading" data-bs-parent="#sidebarAccordion">
            <div class="accordion-body">
              <div class="contact-item">
                <i class="bi bi-geo-alt-fill"></i>
                <span>Waterloo, ON. Canada</span>
              </div>
              <div class="contact-item">
                <i class="bi bi-envelope-fill"></i>
                <span>fhassan06@gmail.com</span>
              </div>
              <div class="contact-item">
                <i class="bi bi-phone-fill"></i>
                <span>+1 (647) 849-9656</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="download-cv mt-4">
      <a href="/src/assets/Fareed_Hassan_Resume.pdf" class="btn btn-primary btn-lg rounded-pill w-100" target="_blank" rel="noopener noreferrer">
        Download CV
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const showMore = ref(false);
function toggleShowMore() {
  showMore.value = !showMore.value;
}
</script>

<style scoped>
.sidebar {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  position: sticky;
  z-index: 1020;
}
.profile-img-container {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.blue-border {
  border: 4px solid #1565c0;
}
.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.dev-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1565c0;
}
.dev-title {
  color: #888;
  font-size: 1rem;
}
.social-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 1.5rem;
}
.social-icon {
  color: #333;
  background: #f5f5f5;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s, background 0.2s;
}
.social-icon.round {
  box-shadow: 0 1px 4px rgba(21,101,192,0.08);
}
.social-icon:hover {
  color: #1565c0;
  background: #e3f2fd;
}
.sidebar-accordion {
  width: 100%;
  margin-top: 1.5rem;
}
.skills-list {
  width: 100%;
}
.skill-item {
  margin-bottom: 1rem;
}
.progress {
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
  overflow: hidden;
}
.progress-bar {
  height: 100%;
  border-radius: 3px;
}
.show-more {
  text-align: left;
  font-weight: 500;
  font-size: 0.95rem;
}
.download-cv {
  width: 100%;
  text-align: center;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
</style>
