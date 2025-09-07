<template>
  <section id="projects" class="section" aria-label="Projects">
    <div class="section-heading">
      <h2>Projects</h2>
      <hr />
    </div>
    <div
      v-for="project in projects"
      :key="project.id"
      class="card mb-4"
      tabindex="0"
      aria-label="Project: {{ project.title }}"
    >
      <div class="row g-0 align-items-center flex-column flex-md-row">
        <div class="col-12 col-md-5 text-center mb-3 mb-md-0">
          <img
            :src="project.image"
            :alt="project.title"
            class="img-fluid project-img"
          />
        </div>
        <div class="col-12 col-md-7">
          <div class="project-content">
            <h4 class="project-title">
              <span class="project-title-bar" aria-hidden="true"></span>
              {{ project.title }}
            </h4>
            <p class="project-desc">{{ project.description }}</p>
            <div class="mb-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="badge rounded-pill bg-light text-primary me-2 mb-1 project-tag"
                aria-label="Tag: {{ tag }}"
                >{{ tag }}</span
              >
            </div>
            <div>
              <button
                class="btn me-2"
                aria-label="View Demo"
                tabindex="0"
                @click="openDemo(project.demo)"
                >View Demo</button
              >
              <button
                class="btn btn-outline-secondary"
                aria-label="Details"
                tabindex="0"
                @click="openDetails(project.details)"
                >Details</button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import projectsData from '../data/projects.json';
import { ref } from 'vue';
const projects = ref(projectsData);

const projects = ref([
  {
    title: 'Interactive Human Body with Hotspots & Quiz',
    description:
      'An interactive human body illustration with clickable hotspots to reveal information about different body parts. Includes a quiz feature to test knowledge. Built with modern web technologies for accessibility and engagement.',
    images: ['/src/assets/AR/HumanBodyAR.jpg'],
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Vue.js',
      'Responsive Design',
      'Accessibility',
    ],
    demo: '/src/assets/interactives/humanbody/index.html',
    details: '#',
  },
  {
    title: 'Interactive Flashcard Health Learning Tool',
    description:
      'An engaging health education flashcard system designed for interactive learning. This tool features a card-based interface where students can review health and medical concepts through an intuitive flip-card experience. The application provides a structured learning environment with modern responsive design, making it perfect for health education courses and medical training programs.',
    images: ['/src/assets/images/project1-1-placeholder.jpg'],
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Vue.js',
      'Responsive Design',
      'Accessibility',
    ],
    demo: '/src/assets/interactives/flashcard-health/index.html',
    details: '#',
  },
  {
    title: 'Likert Scale Health Survey',
    description:
      'Likert scale interactive for health surveys, allowing users to provide feedback and responses in a structured format.',
    images: ['/src/assets/images/project2-1-placeholder.jpg'],
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Vue.js',
      'Responsive Design',
      'Accessibility',
    ],
    demo: '/src/assets/interactives/likertscale-health/index.html',
    details: '#',
  },
  {
    title: 'Peer Evaluation Tool',
    description:
      'Peer evaluation interactive for group activities, enabling students and instructors to review and assess group work efficiently.',
    images: ['/src/assets/images/project3-1-placeholder.jpg'],
    tech: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Vue.js',
      'Responsive Design',
      'Accessibility',
    ],
    demo: '/src/assets/interactives/peereval/index.html',
    details: '#',
  },
  {
    title: 'Health Education Video Series',
    description:
      'A collection of educational health videos for various scenarios and topics, designed for accessible and engaging learning.',
    images: ['/src/assets/images/project1-2-placeholder.jpg'],
    tech: ['HTML5', 'CSS3', 'Video', 'Responsive Design', 'Accessibility'],
    demo: '/src/assets/videos/Adolescent-Visit-Scenario.webm',
    details: '#',
  },
  {
    title: 'Human Body AR Experience',
    description:
      'Augmented reality experience for human body learning, providing interactive and immersive educational content.',
    images: ['/src/assets/AR/HumanBodyAR.jpg'],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'AR', 'Responsive Design', 'Accessibility'],
    demo: '/src/assets/AR/HumanBodyAR.jpg',
    details: '#',
  },
]);

function openDemo(demoUrl) {
  window.open(demoUrl, '_blank');
}

function openDetails(detailsUrl) {
  window.open(detailsUrl, '_blank');
}
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
.projects-section {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
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
.project-list {
  margin-top: 2rem;
}
.project-card {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  min-height: 320px;
}
.project-img-col {
  flex: 0 0 320px;
  max-width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.project-img {
  max-width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 1rem;
}
.project-details-col {
  flex: 1;
  padding-left: 0.5rem;
}
.project-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}
.project-title-bar {
  display: inline-block;
  width: 4px;
  height: 2rem;
  background: #ffd600;
  margin-right: 0.75rem;
  border-radius: 2px;
}
.project-desc {
  color: #444;
  margin-bottom: 1rem;
}
.project-tag {
  font-size: 0.95rem;
  font-weight: 500;
  background: #f3f6ff;
  color: #1565c0;
  border: none;
}
</style>
