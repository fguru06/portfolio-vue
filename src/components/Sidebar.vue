<template>
  <div class="sidebar sticky-top" aria-label="Sidebar">
    <div class="profile-section text-center">
      <div class="profile-img-container">
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
            <button
              :class="['accordion-button', { collapsed: openAccordion !== 'skills' }]"
              type="button"
              @click.prevent="toggleAccordion('skills')"
              :aria-expanded="openAccordion === 'skills' ? 'true' : 'false'"
              aria-controls="skillsCollapseSidebar"
            >
              Skills
            </button>
          </h2>
          <transition name="accordion">
          <div
            id="skillsCollapseSidebar"
            class="accordion-collapse"
            aria-labelledby="skillsHeading"
            data-bs-parent="#sidebarAccordion"
            v-show="openAccordion === 'skills'"
          >
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
          </transition>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="contactHeading">
            <button
              :class="['accordion-button', { collapsed: openAccordion !== 'contact' }]"
              type="button"
              @click.prevent="toggleAccordion('contact')"
              :aria-expanded="openAccordion === 'contact' ? 'true' : 'false'"
              aria-controls="contactCollapseSidebar"
            >
              Contact
            </button>
          </h2>
          <transition name="accordion">
          <div id="contactCollapseSidebar" class="accordion-collapse" aria-labelledby="contactHeading" data-bs-parent="#sidebarAccordion" v-show="openAccordion === 'contact'">
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
          </transition>
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

// Control which accordion panel is open (null = all closed)
const openAccordion = ref('skills'); // open skills by default
function toggleAccordion(name) {
  openAccordion.value = openAccordion.value === name ? null : name;
}
</script>

<style scoped>
.sidebar {
  background: rgba(255, 255, 255, 0.92);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: var(--shadow-sm);
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  padding: 2rem 1.5rem 2.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  position: relative;
  z-index: 1020;
  width: 100%;
}

.sidebar::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(180deg, rgba(76, 111, 255, 0.14) 0%, rgba(34, 211, 238, 0.08) 60%, rgba(255, 255, 255, 0.45) 100%);
  opacity: 0.6;
  pointer-events: none;
}

.profile-section,
.sidebar-accordion,
.download-cv {
  position: relative;
  z-index: 1;
  width: 100%;
}

.profile-img-container {
  width: 136px;
  height: 136px;
  margin: 0 auto;
  border-radius: 50%;
  padding: 4px;
  background:
    linear-gradient(135deg, rgba(17, 24, 39, 0.92), rgba(17, 24, 39, 0.55)) padding-box,
    linear-gradient(135deg, #4f46e5, #2563eb, #14b8a6) border-box;
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 35px rgba(76, 111, 255, 0.3);
  position: relative;
}

.profile-img-container::after {
  content: '';
  position: absolute;
  inset: 14px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.55);
  z-index: -1;
}

.profile-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.85);
}

.dev-name {
  font-size: clamp(1.6rem, 1.8vw, 1.85rem);
  font-weight: 800;
  color: var(--color-heading);
  margin-bottom: 0.35rem;
}

.dev-title {
  color: var(--color-text-muted);
  font-size: 1.02rem;
  margin: 0;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1.2rem;
}

.social-icon {
  color: var(--color-heading);
  background: rgba(247, 249, 255, 0.9);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 160ms ease, box-shadow 220ms ease, background 220ms ease, color 160ms ease;
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.08);
}

.social-icon:hover {
  color: #fff;
  background: linear-gradient(135deg, #4f46e5 0%, #2563eb 45%, #14b8a6 100%);
  transform: translateY(-2px);
  box-shadow: 0 18px 28px rgba(76, 111, 255, 0.28);
}

.sidebar-accordion {
  width: 100%;
}

.skills-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.skill-item span {
  font-weight: 600;
  color: var(--color-heading);
}

.progress {
  margin-top: 0.5rem;
  height: 8px;
  background: rgba(15, 23, 42, 0.08);
  border-radius: 999px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(135deg, #4f46e5 0%, #2563eb 45%, #14b8a6 100%) !important;
  box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.3);
}

.show-more {
  text-align: left;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--color-primary);
}

.download-cv {
  text-align: center;
}

.download-cv .btn-primary {
  width: 100%;
  padding: 0.85rem 0;
}

.sidebar .accordion-button {
  background: rgba(79, 70, 229, 0.12);
  color: var(--color-heading);
  border: 1px solid rgba(79, 70, 229, 0.12);
  border-radius: var(--radius-sm);
  font-weight: 600;
  box-shadow: none;
  transition: background 200ms ease, color 200ms ease, box-shadow 200ms ease;
}

.sidebar .accordion-button::after {
  filter: none;
  transform: scale(0.85);
}

.sidebar .accordion-button:not(.collapsed) {
  background: linear-gradient(135deg, #4f46e5 0%, #2563eb 45%, #14b8a6 100%);
  color: #fff;
  box-shadow: 0 14px 32px rgba(76, 111, 255, 0.28);
}

.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 320ms cubic-bezier(.2,.9,.2,1), opacity 260ms ease;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 800px;
  opacity: 1;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.98rem;
  color: var(--color-text-muted);
}

.contact-item i {
  color: var(--color-primary);
}

@media (max-width: 992px) {
  .sidebar {
    height: auto;
    max-height: none;
    overflow: visible;
    padding: 2.25rem 1.65rem;
  }
}
</style>
