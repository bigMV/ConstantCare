export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps(binding, vnode) {
      return { class: 'reveal-hidden' }
    },
    mounted(el, binding) {
      // Add initial hidden class (mainly for client-side routing)
      if (!el.classList.contains('reveal-hidden')) {
        el.classList.add('reveal-hidden');
      }
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add a slight delay if specified, otherwise immediately add visible class
            const delay = binding.value?.delay || 0;
            setTimeout(() => {
              el.classList.add('reveal-visible');
            }, delay);
            
            // By default, only animate once. Use .repeat modifier to animate every time it enters view.
            if (!binding.modifiers.repeat) {
              observer.unobserve(el);
            }
          } else if (binding.modifiers.repeat) {
            el.classList.remove('reveal-visible');
          }
        });
      }, {
        threshold: binding.value?.threshold || 0.15,
        rootMargin: binding.value?.margin || '0px 0px -50px 0px'
      });
      
      observer.observe(el);
    },
    unmounted(el) {
      // Cleanup is handled automatically by garbage collection of the DOM element
      // but if we kept a Map of observers, we'd clean them here.
    }
  });
});
