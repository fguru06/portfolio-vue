<template>
  <div class="project-card reveal">
    <div class="project-card__image">
      <img :src="image" :alt="title" />
      <button v-if="showLeftArrow" class="arrow left" @click="$emit('prev')">&#8592;</button>
      <button v-if="showRightArrow" class="arrow right" @click="$emit('next')">&#8594;</button>
    </div>
    <div class="project-card__content">
      <h2 class="project-card__title">
        <span class="highlight"></span>{{ title }}
      </h2>
      <p class="project-card__desc">{{ description }}</p>
      <div class="project-card__tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <div class="project-card__actions">
        <button class="btn" @click="$emit('view-demo')">View Demo</button>
        <button class="btn" @click="$emit('details')">Details</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: Array, default: () => [] },
    showLeftArrow: { type: Boolean, default: false },
    showRightArrow: { type: Boolean, default: false }
  }
}
</script>

<style scoped>
.project-card {
  display: flex;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  margin: 2rem 0;
  overflow: hidden;
  align-items: center;
}
.project-card__image {
  position: relative;
  flex: 0 0 350px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f7f7;
}
.project-card__image img {
  max-width: 100%;
  max-height: 90%;
  border-radius: 10px;
}
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.arrow.left { left: 10px; }
.arrow.right { right: 10px; }
.project-card__content {
  flex: 1;
  padding: 2rem;
}
.project-card__title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #222;
}
.project-card__desc {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.5rem;
}
.project-card__tags {
  margin-bottom: 1.5rem;
}
.tag {
  display: inline-block;
  background: #f0f4ff;
  color: #3a6ee8;
  border-radius: 20px;
  padding: 0.4em 1em;
  margin-right: 0.5em;
  font-size: 0.95em;
  margin-bottom: 0.3em;
}
.project-card__actions {
  display: flex;
  gap: 1em;
}
.btn {
  background: #3a6ee8;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7em 1.5em;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.2s;
}
.btn:hover {
  background: #2456b6;
}
</style>
