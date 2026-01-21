<template>
  <section id="contact" class="section">
    <div class="section-heading">
      <h2>Contact</h2>
      <hr />
    </div>
  <div class="card reveal">
      <div class="contact-section">
        <h2 class="section-title">Get In Touch</h2>
        <div class="row">
          <div class="col-md-6">
            <div class="contact-info mb-4">
              <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
              <div class="contact-details mb-3">
                <div class="contact-item mb-2">
                  <i class="bi bi-geo-alt-fill"></i>
                  <span>Waterloo, ON. Canada</span>
                </div>
                <div class="contact-item mb-2">
                  <i class="bi bi-envelope-fill"></i>
                  <span>fhassan06@gmail.com</span>
                </div>
                <div class="contact-item mb-2">
                  <i class="bi bi-phone-fill"></i>
                  <span>+1 (647) 849-9656</span>
                </div>
              </div>
              <div class="social-icons">
                <a href="#" class="social-icon"><i class="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/fhassan06/" class="social-icon"><i class="bi bi-linkedin"></i></a>
                <a href="#" class="social-icon"><i class="bi bi-twitter"></i></a>
                <a href="#" class="social-icon"><i class="bi bi-envelope-fill"></i></a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <form class="contact-form">
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Your Name" required />
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" placeholder="Your Email" required />
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" placeholder="Subject" />
              </div>
              <div class="mb-3">
                <textarea class="form-control" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No logic needed for static contact section
</script>

<style scoped>
.card {
  background: rgba(255, 255, 255, 0.92);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.65);
  box-shadow: var(--shadow-sm);
  padding: clamp(2rem, 3vw, 2.75rem);
}

.section-title {
  font-size: clamp(1.75rem, 2.5vw, 2.1rem);
  font-weight: 700;
  margin-bottom: 1.75rem;
  color: var(--color-heading);
}

.contact-info p {
  font-size: 1.05rem;
  color: var(--color-text-muted);
}

.contact-details {
  margin: 1.25rem 0;
  display: grid;
  gap: 0.75rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-heading);
  font-weight: 500;
}

.contact-item i {
  color: var(--color-primary);
  font-size: 1.1rem;
}

.social-icons {
  display: flex;
  gap: 0.85rem;
  font-size: 1.3rem;
}

.social-icon {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(247, 249, 255, 0.9);
  color: var(--color-heading);
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.12);
  transition: transform 160ms ease, box-shadow 200ms ease, background 200ms ease, color 160ms ease;
}

.social-icon:hover {
  background: var(--gradient-primary);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 18px 32px rgba(76, 111, 255, 0.24);
}

.contact-form .form-control {
  border-radius: 16px;
  border: 1.5px solid rgba(15, 23, 42, 0.1);
  padding: 0.85rem 1rem;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: none;
}

.contact-form .form-control:focus {
  border-color: rgba(76, 111, 255, 0.45);
  box-shadow: 0 0 0 3px rgba(76, 111, 255, 0.12);
}

.contact-form button {
  margin-top: 0.5rem;
}
</style>
