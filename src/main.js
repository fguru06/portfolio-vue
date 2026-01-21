import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './router'
import 'primeicons/primeicons.css'
// Bootstrap imports for styles and JS (required for carousel controls)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Global app styles (SCSS)
import './assets/style.scss'

const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.mount('#app')

// Global subtle reveal animation initializer
// Observes any element with the `reveal` class and toggles `visible` when it enters view.
// Respects users' prefers-reduced-motion setting.
function initGlobalReveal() {
	try {
		const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
		const elems = document.querySelectorAll('.reveal')
		if (!elems || elems.length === 0) return
		if (prefersReduced) {
			elems.forEach(el => el.classList.add('visible'))
			return
		}

		const observer = new IntersectionObserver((entries, obs) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible')
					obs.unobserve(entry.target)
				}
			})
		}, { threshold: 0.12 })

		elems.forEach((el, i) => {
			// Stagger by index to make a subtle cascading effect
			const delay = (i % 12) * 60 // ms
			el.style.transitionDelay = `${delay}ms`
			observer.observe(el)
		})
	} catch (e) {
		// Fail silently in older browsers
		console.warn('reveal init failed', e)
	}
}

// Run after mount so DOM nodes exist
window.addEventListener('load', () => initGlobalReveal())
