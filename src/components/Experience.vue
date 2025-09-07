<template>
  <section id="experience" class="section" aria-label="Work Experience">
    <div class="section-heading">
      <h2>Work Experience</h2>
      <hr />
    </div>
    <div v-for="job in jobs" :key="job.company" class="experience-card card mb-4">
      <div class="experience-header">
        <div class="experience-company">
          <span class="company-bar"></span>
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
  padding: 2rem 2rem 1.5rem 2rem;
  border-radius: 1.2rem;
  box-shadow: 0 4px 24px rgba(21, 101, 192, 0.08);
  background: #fff;
  margin-bottom: 2rem;
}
.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}
.company-bar {
  display: inline-block;
  width: 4px;
  height: 2rem;
  background: #ffc107;
  margin-right: 0.75rem;
  border-radius: 2px;
}
.company-name {
  font-size: 2rem;
  font-weight: 700;
  color: #6c2eb6;
  letter-spacing: 1px;
}
.experience-date {
  font-size: 1.1rem;
  color: #222;
  font-weight: 400;
}
.experience-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #034cb7;
  margin-bottom: 0.5rem;
}
.experience-desc {
  color: #222;
  margin-bottom: 0.5rem;
}
.experience-list {
  margin-left: 1.2rem;
  margin-bottom: 0;
  color: #222;
}
.experience-list li {
  margin-bottom: 0.3rem;
  font-size: 1rem;
}
@media (max-width: 768px) {
  .experience-card {
    padding: 1rem 0.5rem;
  }
  .company-name {
    font-size: 1.2rem;
  }
  .experience-title {
    font-size: 1rem;
  }
}
</style>
