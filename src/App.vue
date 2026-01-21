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
  <div class="app-layout">
    <aside class="sidebar-wrapper">
      <Sidebar />
    </aside>
    <main class="main-content-wrapper">
      <Hero />
      <Navbar class="sticky-navbar" />
      <div class="content-sections">
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <Certifications />
        <Contact />
      </div>
      <Footer />
    </main>
  </div>
</template>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css');
.app-layout {
  display: flex;
  min-height: 100vh;
  background: transparent;
}
.sidebar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 360px;
  min-width: 340px;
  max-width: 380px;
  height: 100vh;
  padding: 0.5rem 1rem 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background: transparent;
}
.main-content-wrapper {
  margin-left: 360px;
  width: calc(100% - 360px);
  padding: 0 3rem;
  box-sizing: border-box;
}
.main-content-wrapper > *:first-child {
  margin-top: 0;
}
.content-sections {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}
@media (max-width: 1100px) {
  .sidebar-wrapper {
    width: 300px;
    min-width: 0;
    max-width: none;
    margin-left: 0;
    padding: 1.35rem 1rem 1.85rem;
  }
  .main-content-wrapper {
    margin-left: 300px;
    width: calc(100% - 300px);
    padding: 0 2.5rem;
  }
}
@media (max-width: 992px) {
  .app-layout {
    flex-direction: column;
  }
  .sidebar-wrapper {
    position: static;
    width: 100%;
    max-width: none;
    height: auto;
    padding: 1.75rem 1.5rem 0;
  }
  .main-content-wrapper {
    margin-left: 0;
    width: 100%;
    padding: 0 1.25rem 2rem;
  }
  .content-sections {
    padding-top: 2rem;
  }
}
</style>
