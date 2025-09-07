<script setup>
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import Testimonials from './components/Testimonials.vue';
import Certifications from './components/Certifications.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="container-fluid p-0">
    <div class="row g-0">
      <div class="col-lg-3 sidebar-wrapper">
        <Sidebar />
      </div>
      <div class="col-lg-9 main-content-wrapper">
        <Hero />
        <Navbar class="sticky-navbar" />
        <div class="content-container">
          <About />
          <Experience />
          <Projects />
          <Testimonials />
          <Certifications />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css');
body {
  background: #f4f6fb;
}
.sticky-navbar {
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>
