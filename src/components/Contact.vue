<template>
  <section id="contact" class="section">
    <div class="section-heading">
      <h2>Contact</h2>
      <hr />
    </div>
    <div class="card">
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
  margin-bottom: 2rem;
}
.contact-section {
  padding: 0;
}
.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #2196f3;
  text-align: center;
}
.contact-info p {
  font-size: 1.1rem;
  color: #444;
}
.contact-details {
  margin-bottom: 1rem;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
}
.social-icons {
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
}
.social-icon {
  color: #333;
  transition: color 0.2s;
}
.social-icon:hover {
  color: #2196f3;
}
.contact-form .form-control {
  border-radius: 0.5rem;
}
</style>
