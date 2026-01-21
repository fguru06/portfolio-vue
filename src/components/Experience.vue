<template>
  <section id="experience" class="section" aria-label="Work Experience">
    <div class="section-heading">
      <h2>Work Experience</h2>
      <hr />
    </div>
    <div v-for="job in jobs" :key="job.company" class="experience-card card mb-4">
      <div class="experience-header">
        <div class="experience-company">
          <span class="bar company-bar" aria-hidden="true"></span>
          <span class="company-name">{{ job.company }}</span>
        </div>
        <span class="experience-date">{{ job.date }}</span>
      </div>
      <h3 class="experience-title">{{ job.title }}</h3>
      <p class="experience-desc">{{ job.description }}</p>
      <ul class="experience-list">
        <li v-for="item in job.bullets" :key="item">{{ item }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const jobs = [
  {
    company: 'KEYPATH EDUCATION, TORONTO, ON',
    title: 'Front End Web Developer',
    date: 'April 2021 - Feb 2025',
    description: 'Developed engaging and instructionally sound learning content for online healthcare courses, including interactive elements like quizzes and group activities with faculty performance review capabilities. Created reusable templates for healthcare courses, streamlining development and ensuring consistent design.',
    bullets: [
      'Collaborated with instructional designers on storyboarding and translated highly customized concepts into user-friendly interactive components and templates.',
      'Built custom LMS themes using JavaScript and CSS to align with partner branding, demonstrating expertise in front-end development and LMS customization.',
      'Automated user interface testing for standalone interactives using Selenium WebDriver, improving testing efficiency.',
      'Developed accessible and responsive content, adhering to accessibility guidelines (WCAG) and best practices.',
      'Managed tasks, reported progress using Jira, and utilized Bitbucket for code management in a multi-project environment.',
      'Researched and implemented new web technologies to enhance course interactivity and user experience.'
    ]
  },
  {
    company: 'PEARSON',
    title: 'eLearning Multimedia Production Specialist',
    date: '2008 - 2020',
    description: 'Collaborated with instructional designers and subject matter experts (SMEs) to create instructionally sound, engaging, and target-audience appropriate learning solutions and activities, such as courses, case studies, simulations, and scenarios for universities across the US.',
    bullets: [
      'Reduced development cost by creating media templates for multiple courses, thriving cross-functionally with Project Managers and eLearning Developers on efficient review and feedback of deliverables.',
      'Designed and developed interactive multimedia content using HTML5, CSS3, and JavaScript.',
      'Ensured accessibility and responsive design for all deliverables.',
      'Managed project timelines and deliverables using Agile methodologies.'
    ]
  },
  {
    company: 'EMBANET',
    title: 'Multimedia Developer',
    date: '2004 - 2008',
    description: 'Developed interactive multimedia content for educational courses, including animations, simulations, and interactive exercises. Worked closely with instructional designers to ensure content met educational objectives and was engaging for students.',
    bullets: [
      'Created interactive simulations that enhanced student learning and engagement.',
      'Developed animations and graphics to support course content.',
      'Collaborated with instructional designers to create instructionally sound multimedia content.',
      'Ensured all multimedia content was accessible and met accessibility guidelines.'
    ]
  }
];
</script>

<style scoped>
.experience-card {
  padding: clamp(2rem, 3vw, 2.75rem);
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.65);
  box-shadow: var(--shadow-sm);
  margin-bottom: 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.experience-company {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.company-bar {
  width: 5px;
  height: 42px;
  border-radius: 999px;
  background: var(--gradient-primary);
  box-shadow: 0 10px 20px rgba(76, 111, 255, 0.25);
}

.company-name {
  font-size: clamp(1.35rem, 2.2vw, 1.65rem);
  font-weight: 700;
  color: var(--color-heading);
  letter-spacing: -0.01em;
}

.experience-date {
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  background: rgba(76, 111, 255, 0.12);
  color: var(--color-heading);
}

.experience-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-primary);
}

.experience-desc {
  color: var(--color-text-muted);
  margin-bottom: 0.5rem;
  line-height: 1.65;
}

.experience-list {
  margin: 0;
  padding-left: 1.1rem;
  color: var(--color-text-muted);
  display: grid;
  gap: 0.6rem;
}

.experience-list li {
  line-height: 1.55;
}

@media (max-width: 768px) {
  .experience-card {
    padding: 1.5rem;
  }
  .experience-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .experience-date {
    align-self: flex-start;
  }
}
</style>
