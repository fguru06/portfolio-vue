<template>
  <section id="projects" class="section" aria-label="Projects">
    <div class="section-heading">
      <h2>My Projects</h2>
      <hr />
    </div>

    <div
      v-for="(project, idx) in projects"
      :key="project.title + idx"
      class="card mb-4 p-3 reveal"
      tabindex="0"
      :aria-label="`Project: ${project.title}`"
    >
      <div class="row g-0 align-items-center flex-column flex-md-row">
        <div class="col-12 col-md-5 text-center mb-3 mb-md-0">
          <!-- Carousel when multiple images -->
          <div v-if="project.images && project.images.length > 1" :id="`carousel-${idx}`" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div v-for="(img, i) in project.images" :key="i" :class="['carousel-item', { active: i === 0 }]">
                <img :src="img" :alt="`${project.title} image ${i+1}`" class="d-block w-100 project-img" loading="lazy" />
              </div>
            </div>

            <!-- Indicators -->
            <div class="carousel-indicators mt-2">
              <button v-for="(img, i) in project.images" :key="i" type="button" :data-bs-target="`#carousel-${idx}`" :data-bs-slide-to="i" :class="{ active: i === 0 }" :aria-current="i === 0 ? 'true' : undefined" :aria-label="`Slide ${i+1}`"></button>
            </div>

            <button class="carousel-control-prev" type="button" :data-bs-target="`#carousel-${idx}`" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" :data-bs-target="`#carousel-${idx}`" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>

            <!-- Thumbnails -->
            <div class="d-flex gap-2 mt-3 justify-content-center thumb-strip">
              <img v-for="(img, i) in project.images" :key="i" :src="img" :alt="`thumb ${i+1}`" class="thumb-img" loading="lazy" @click="() => { const c = document.getElementById(`carousel-${idx}`); if(c) new bootstrap.Carousel(c).to(i) }" />
            </div>
          </div>

          <!-- Single image fallback -->
          <img v-else-if="project.images && project.images.length === 1" :src="project.images[0]" :alt="project.title" class="img-fluid project-img" />
          <!-- No image placeholder -->
          <div v-else class="project-img-placeholder">No image</div>
        </div>

        <div class="col-12 col-md-7">
          <div class="project-content px-3">
            <h4 class="title-with-bar project-title">
              <span class="bar project-title-bar" aria-hidden="true"></span>
              {{ project.title }}
            </h4>
            <p class="project-desc">{{ project.description }}</p>
            <div class="mb-2">
              <span
                v-for="tag in project.tech || []"
                :key="tag"
                class="badge rounded-pill bg-light text-primary me-2 mb-1 project-tag"
                :aria-label="`Tag: ${tag}`"
                >{{ tag }}</span
              >
            </div>
            <div>
              <button
                v-if="project.demo"
                class="btn btn-outline-primary me-2"
                aria-label="View Demo"
                tabindex="0"
                @click="openDemo(project.demo)"
              >
                View Demo
              </button>

              <button
                v-if="project.details"
                class="btn btn-outline-secondary"
                aria-label="Details"
                tabindex="0"
                @click="openDetails(project.details)"
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import projectsData from '../data/projects.json'

const staticAssetMap = import.meta.glob('../assets/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,avif,AVIF,gif,GIF,svg,SVG,mp4,MP4,webm,WEBM,ogg,OGG,mp3,MP3,pdf,PDF,json,JSON,woff,WOFF,woff2,WOFF2,ttf,TTF}', {
  eager: true,
  import: 'default'
})

const assetMap = { ...staticAssetMap }

const resolveMediaPath = (value) => {
  if (!value) return value
  if (typeof value !== 'string') return value
  if (/^https?:\/\//i.test(value)) return value

  let normalized = value.replace(/^\/+/, '')
  if (normalized.startsWith('src/')) normalized = normalized.replace(/^src\//, '')

  const candidates = []

  if (normalized.startsWith('assets/')) {
    const withoutPrefix = normalized.replace(/^assets\//, '')
    candidates.push(`../assets/${withoutPrefix}`)
    candidates.push(`../${normalized}`)
  } else {
    candidates.push(`../assets/${normalized}`)
    candidates.push(`../${normalized}`)
  }

  for (const key of candidates) {
    if (assetMap[key]) {
      return assetMap[key]
    }
  }

  return value
}

const resolveInteractivePath = (value) => {
  if (!value) return value
  if (typeof value !== 'string') return value
  if (/^https?:\/\//i.test(value)) return value

  let normalized = value.replace(/^\/+/, '')
  if (normalized.startsWith('assets/')) {
    normalized = normalized.replace(/^assets\//, '')
  }
  if (!normalized.startsWith('interactives/')) {
    normalized = `interactives/${normalized}`
  }

  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  return `${base}/${normalized}`
}

const normalizeProject = (project) => {
  const normalized = { ...project }
  if (Array.isArray(project.images)) {
    normalized.images = project.images.map((img) => resolveMediaPath(img)).filter(Boolean)
  }
  if (project.video) {
    normalized.video = resolveMediaPath(project.video)
  }
  if (project.demo) {
    normalized.demo = resolveInteractivePath(project.demo)
  }
  if (project.details) {
    const isHtml = typeof project.details === 'string' && /\.html?$/i.test(project.details)
    normalized.details = isHtml ? resolveInteractivePath(project.details) : resolveMediaPath(project.details)
  }
  return normalized
}

const projects = ref(projectsData.map(normalizeProject))

function openDemo(demoUrl) {
  window.open(demoUrl, '_blank')
}

function openDetails(detailsUrl) {
  window.open(detailsUrl, '_blank')
}

// Sync thumbnail active state with Bootstrap carousel slide events
onMounted(async () => {
  await nextTick()
  projects.value.forEach((p, idx) => {
    const carousel = document.getElementById(`carousel-${idx}`)
    if (!carousel) return

    // set initial active thumb
    const card = carousel.closest('.card')
    if (card) {
      const thumbs = card.querySelectorAll('.thumb-img')
      thumbs.forEach((t, i) => t.classList.toggle('thumb-active', i === 0))
    }

    carousel.addEventListener('slid.bs.carousel', () => {
      const card = carousel.closest('.card')
      if (!card) return
      const items = carousel.querySelectorAll('.carousel-item')
      let activeIndex = 0
      items.forEach((it, i) => {
        if (it.classList.contains('active')) activeIndex = i
      })
      const thumbs = card.querySelectorAll('.thumb-img')
      thumbs.forEach((t, i) => t.classList.toggle('thumb-active', i === activeIndex))
    })
  })
})
</script>

<style scoped>
.card {
  background: rgba(255, 255, 255, 0.94);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.65);
  box-shadow: var(--shadow-sm);
  padding: clamp(2rem, 3vw, 2.4rem) !important;
}

.project-img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.16);
}

.project-content {
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.project-title {
  font-size: clamp(1.35rem, 2vw, 1.65rem);
  font-weight: 700;
  color: var(--color-heading);
}

.project-title .bar.project-title-bar {
  width: 6px;
  height: 32px;
  margin-right: 0.6rem;
  border-radius: 999px;
  background: var(--gradient-primary);
  box-shadow: 0 10px 20px rgba(76, 111, 255, 0.25);
}

.project-desc {
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: 0;
}

.project-tag {
  background: rgba(76, 111, 255, 0.14);
  color: var(--color-heading);
  border: none;
  padding: 0.45rem 0.9rem;
  margin-right: 0.35rem;
}

.carousel-control-prev,
.carousel-control-next {
  width: 3.15rem;
  height: 3.15rem;
  top: 40%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.85);
  border-radius: 50%;
  border: 1px solid rgba(76, 111, 255, 0.18);
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.18);
  transition: transform 160ms ease, box-shadow 180ms ease, background 180ms ease;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  transform: translateY(-50%) scale(1.04);
  background: rgba(76, 111, 255, 0.15);
  box-shadow: 0 18px 32px rgba(76, 111, 255, 0.28);
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(27%) sepia(89%) saturate(5089%) hue-rotate(226deg) brightness(96%) contrast(92%);
}

.btn-outline-secondary {
  border-radius: 999px;
  border: 1.5px solid rgba(15, 23, 42, 0.16);
  color: var(--color-heading);
  background: transparent;
  transition: transform 160ms ease, box-shadow 200ms ease, border-color 200ms ease;
}

.btn-outline-secondary:hover,
.btn-outline-secondary:focus {
  transform: translateY(-1px);
  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.16);
  border-color: rgba(76, 111, 255, 0.35);
}

.project-img-placeholder {
  width: 100%;
  height: 320px;
  background: rgba(247, 249, 255, 0.8);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(15, 23, 42, 0.35);
  font-weight: 600;
  letter-spacing: 0.08em;
}

.carousel-indicators [data-bs-target] {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(76, 111, 255, 0.15);
}

.carousel-indicators .active {
  background: var(--color-primary);
}

.thumb-strip {
  max-width: 420px;
  margin: 0 auto;
  gap: 0.6rem;
}

.thumb-img {
  width: 64px;
  height: 48px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid transparent;
  opacity: 0.85;
  transition: transform 160ms ease, border-color 180ms ease, opacity 160ms ease;
}

.thumb-img:hover {
  opacity: 1;
  transform: translateY(-2px);
}

.thumb-img.thumb-active {
  border-color: var(--color-primary);
  box-shadow: 0 12px 24px rgba(76, 111, 255, 0.2);
  opacity: 1;
}

@media (max-width: 992px) {
  .project-img {
    height: 260px;
  }
  .card {
    padding: 1.75rem !important;
  }
}

@media (max-width: 576px) {
  .project-img {
    height: 220px;
  }
}
</style>
