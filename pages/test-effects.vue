<script setup>
import { ref, onMounted } from 'vue'

const effects = [
  { 
    id: 'blur-clear', 
    title: '1. The "Polished" Reveal', 
    subtitle: 'Blur to Clear (Editorial)',
    description: 'Mimics the transition from a dusty surface to a polished one. Starts with a heavy blur and clears up.',
    serif: true 
  },
  { 
    id: 'character-stagger', 
    title: '2. Editorial Stagger', 
    subtitle: 'Word Reveal (Architectural)',
    description: 'Sophisticated staggered entrance where words slide up and fade in with an intentional delay.',
    serif: true 
  },
  { 
    id: 'pure-expansion', 
    title: '3. The "Pure" Expansion', 
    subtitle: 'Airy Spacing (Scandinavian)',
    description: 'Starts with wide letter-spacing and subtly narrows as it settles, creating a sense of "fresh air".',
    serif: false 
  },
  { 
    id: 'gradient-sweep', 
    title: '4. Soft Gradient Sweep', 
    subtitle: 'Polished Shimmer (Pristine)',
    description: 'A light "sweep" across the text that mimics a reflection on a clean glass or marble surface.',
    serif: true 
  },
  { 
    id: 'line-mask', 
    title: '5. Line-Mask Reveal', 
    subtitle: 'Structural Elevation (Modern)',
    description: 'Text slides up from an invisible floor, appearing from within a hidden mask.',
    serif: false 
  }
]

const activeEffect = ref(null)

const triggerEffect = (id) => {
  activeEffect.value = null
  setTimeout(() => {
    activeEffect.value = id
  }, 50)
}

onMounted(() => {
  // Trigger all on mount
  setTimeout(() => {
    activeEffect.value = 'all'
  }, 500)
})
</script>

<template>
  <div class="min-h-screen bg-surface py-32 px-6">
    <div class="max-w-4xl mx-auto">
      <header class="mb-24 text-center">
        <h1 class="text-5xl md:text-7xl font-serif mb-6">Text Effects Lab</h1>
        <p class="text-xl opacity-60 max-w-2xl mx-auto">
          A showcase of premium typography animations tailored for Anka Renhold.
        </p>
        <button @click="activeEffect = 'all'" class="mt-8 btn btn-primary">
          Play All Effects
        </button>
      </header>

      <div class="space-y-40 mb-40">
        <!-- Effect 1: Blur to Clear -->
        <section class="effect-box">
          <div class="mb-8">
            <span class="label-md">Visual Metaphor: Polishing Glass</span>
            <h3 class="text-2xl mt-2">{{ effects[0].title }}</h3>
          </div>
          <div 
            class="effect-content transition-all duration-1000 ease-out"
            :class="[activeEffect === 'blur-clear' || activeEffect === 'all' ? 'is-active' : 'is-hidden-blur']"
          >
            <h2 class="font-serif text-6xl md:text-8xl leading-tight">
              Purity in Every<br/>Single Detail.
            </h2>
          </div>
          <button @click="triggerEffect('blur-clear')" class="mt-8 text-sm opacity-40 hover:opacity-100 transition-opacity">Replay Effect</button>
        </section>

        <!-- Effect 2: Character Stagger -->
        <section class="effect-box">
          <div class="mb-8">
            <span class="label-md">Visual Metaphor: Editorial Flow</span>
            <h3 class="text-2xl mt-2">{{ effects[1].title }}</h3>
          </div>
          <div 
            class="stagger-container flex flex-wrap gap-x-4 md:gap-x-8"
            :class="[activeEffect === 'character-stagger' || activeEffect === 'all' ? 'is-active' : 'is-hidden-stagger']"
          >
            <span v-for="(word, i) in ['Premium', 'Renhold', 'for', 'moderne', 'hjem.']" :key="i" 
                  class="stagger-word font-serif text-5xl md:text-7xl"
                  :style="{ transitionDelay: `${i * 150}ms` }">
              {{ word }}
            </span>
          </div>
          <button @click="triggerEffect('character-stagger')" class="mt-8 text-sm opacity-40 hover:opacity-100 transition-opacity">Replay Effect</button>
        </section>

        <!-- Effect 3: Pure Expansion -->
        <section class="effect-box">
          <div class="mb-8">
            <span class="label-md">Visual Metaphor: Fresh Air</span>
            <h3 class="text-2xl mt-2">{{ effects[2].title }}</h3>
          </div>
          <div 
            class="expansion-container"
            :class="[activeEffect === 'pure-expansion' || activeEffect === 'all' ? 'is-active' : 'is-hidden-expansion']"
          >
            <h2 class="font-sans text-4xl md:text-6xl font-bold uppercase tracking-widest transition-all duration-1000 ease-out">
              Oslo's Finest Cleaning
            </h2>
          </div>
          <button @click="triggerEffect('pure-expansion')" class="mt-8 text-sm opacity-40 hover:opacity-100 transition-opacity">Replay Effect</button>
        </section>

        <!-- Effect 4: Gradient Sweep -->
        <section class="effect-box">
          <div class="mb-8">
            <span class="label-md">Visual Metaphor: Polished Marble</span>
            <h3 class="text-2xl mt-2">{{ effects[3].title }}</h3>
          </div>
          <div 
            class="sweep-container"
            :class="[activeEffect === 'gradient-sweep' || activeEffect === 'all' ? 'is-active' : '']"
          >
            <h2 class="font-serif text-6xl md:text-8xl leading-tight shimmer-text">
              Refined Quality
            </h2>
          </div>
          <button @click="triggerEffect('gradient-sweep')" class="mt-8 text-sm opacity-40 hover:opacity-100 transition-opacity">Replay Effect</button>
        </section>

        <!-- Effect 5: Line Mask -->
        <section class="effect-box">
          <div class="mb-8">
            <span class="label-md">Visual Metaphor: Precision Elevation</span>
            <h3 class="text-2xl mt-2">{{ effects[4].title }}</h3>
          </div>
          <div class="mask-container overflow-hidden">
            <div 
              class="mask-slide transition-all duration-1000 cubic-bezier(0.2, 1, 0.3, 1)"
              :class="[activeEffect === 'line-mask' || activeEffect === 'all' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0']"
            >
              <h2 class="font-sans text-5xl md:text-7xl font-bold leading-tight">
                Beyond spotless.<br/>Beyond expectations.
              </h2>
            </div>
          </div>
          <button @click="triggerEffect('line-mask')" class="mt-8 text-sm opacity-40 hover:opacity-100 transition-opacity">Replay Effect</button>
        </section>
      </div>

      <footer class="mt-60 pt-20 border-t border-on-surface/10 text-center opacity-40">
        <p>Lab by Antigravity AI &bull; Anka Renhold</p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.effect-box {
  @apply relative;
}

/* 1. Blur to Clear */
.is-hidden-blur {
  filter: blur(40px);
  opacity: 0;
  transform: scale(0.95);
}

.is-active.effect-content {
  filter: blur(0);
  opacity: 1;
  transform: scale(1);
}

/* 2. Character Stagger */
.stagger-word {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
}

.is-active .stagger-word {
  opacity: 1;
  transform: translateY(0);
}

/* 3. Pure Expansion */
.is-hidden-expansion h2 {
  letter-spacing: 0.8em;
  opacity: 0;
  transform: scale(1.1);
}

.is-active.expansion-container h2 {
  letter-spacing: 0.1em;
  opacity: 1;
  transform: scale(1);
}

/* 4. Gradient Sweep (Shimmer) */
.shimmer-text {
  background: linear-gradient(
    to right,
    var(--color-on-surface) 0%,
    var(--color-on-surface) 40%,
    var(--color-primary) 50%,
    var(--color-on-surface) 60%,
    var(--color-on-surface) 100%
  );
  background-size: 200% auto;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

.is-active .shimmer-text {
  animation: shine 3s ease-out forwards;
}

@keyframes shine {
  to {
    background-position: -200% center;
  }
}

/* 5. Line Mask */
.mask-slide {
  /* Class based transitions via Tailwind classes */
}

.label-md {
  color: var(--color-primary);
  letter-spacing: 0.3em;
}
</style>
