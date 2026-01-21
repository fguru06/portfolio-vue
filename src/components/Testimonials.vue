<template>
  <section id="testimonials" class="section">
    <div class="section-heading">
      <h2>Testimonials</h2>
      <hr />
    </div>
    <div class="container">
      <div class="row testimonials-row">
        <div class="col-md-4 mb-4" v-for="testimonial in testimonials" :key="testimonial.author">
          <div class="testimonial-card h-100 p-4 reveal">
            <div class="testimonial-content mb-3">
              <span class="quote-mark">“</span>
              <p class="testimonial-text">{{ testimonial.text }}</p>
            </div>
            <div class="testimonial-author">
              <a href="#" class="author-name">{{ testimonial.author }}</a>
              <p class="author-position mb-0 text-muted">{{ testimonial.position }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- static indicators like in screenshot -->
      <div class="d-flex justify-content-center mt-3">
        <div class="dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
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
  background: transparent;
  padding-bottom: 0;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: var(--shadow-sm);
  min-height: 220px;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.testimonial-content {
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.7;
}

.quote-mark {
  display: inline-block;
  font-size: 2.4rem;
  color: rgba(76, 111, 255, 0.18);
  vertical-align: top;
  margin-right: 0.75rem;
}

.testimonial-text {
  display: inline-block;
  width: calc(100% - 48px);
}

.author-name {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-heading);
}

.author-position {
  font-size: 0.95rem;
  color: var(--color-text-muted);
}

.dots {
  display: inline-flex;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  background: rgba(76, 111, 255, 0.45);
  border-radius: 50%;
  display: inline-block;
}
</style>
