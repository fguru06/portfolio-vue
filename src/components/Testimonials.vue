<template>
  <section id="testimonials" class="section">
    <div class="section-heading">
      <h2>Testimonials</h2>
      <hr />
    </div>
    <div class="card">
      <div class="row testimonials-container">
        <div class="col-md-6 mb-4" v-for="testimonial in testimonials" :key="testimonial.author">
          <div class="card h-100 p-4 shadow-sm">
            <div class="testimonial-content mb-3">
              <i class="bi bi-quote quote-icon"></i>
              <p class="testimonial-text">{{ testimonial.text }}</p>
            </div>
            <div class="testimonial-author">
              <h4 class="author-name mb-0">{{ testimonial.author }}</h4>
              <p class="author-position mb-0 text-muted">{{ testimonial.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const testimonials = ref([
  {
    text: 'Fareed is a consummate professional capable of tackling any design and development challenges. His excellent design judgment and creative abilities greatly enhance the learner experience.',
    author: 'Mark Bronny',
    position: 'Instructional Designer',
  },
  {
    text: 'Fareed brings an exceptional level of determination and integrity to everything he works on. He is unwavering in his pursuit of the right solutions, tackling challenges head-on without hesitation.',
    author: 'Aaron Chapman',
    position: 'Associate Director, Keypath Education',
  },
  {
    text: 'Fareed is a highly skilled and motivated eLearning professional. His work on designing and developing engaging, mobile-first multimedia content has been exceptional.',
    author: 'Anmoal Thethi',
    position: 'ID Process Manager, Keypath Education',
  },
]);
</script>

<style scoped>
.section {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  padding: 2rem;
  margin-bottom: 2rem;
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
.testimonial-content {
  font-size: 1.1rem;
  color: #444;
}
.quote-icon {
  font-size: 2rem;
  color: #ffd600;
}
.author-name {
  font-size: 1.1rem;
  font-weight: bold;
}
.author-position {
  font-size: 1rem;
}
</style>
