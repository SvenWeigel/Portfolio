/**
 * Initializes one-time scroll reveal animations for elements
 * using `.fade-up` and `.fade-up-right` classes.
 */
document.addEventListener('DOMContentLoaded', function () {
  /** @type {NodeListOf<HTMLElement>} */
  const targets = document.querySelectorAll('.fade-up, .fade-up-right');
  if (!targets.length) return;

  /**
   * Adds the `in-view` class once an observed element becomes visible
   * and then stops observing that element.
   *
   * @param {IntersectionObserverEntry[]} entries - Observer entries for this frame.
   * @param {IntersectionObserver} obs - Active observer instance.
   */
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.3
    }
  );

  targets.forEach((el) => observer.observe(el));
});
