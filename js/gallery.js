document.addEventListener('DOMContentLoaded', function() {
  // Automatically copy figcaption text to Lightbox2
  document.querySelectorAll('figure').forEach(function(figure) {
    const link = figure.querySelector('a[data-lightbox]');
    const caption = figure.querySelector('figcaption');
    if (link && caption) {
      link.setAttribute('data-title', caption.textContent.trim());
    }
  });

  // Lightbox2 options
  if (typeof lightbox !== "undefined") {
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true,      // Arrows loop from last → first
      fadeDuration: 200,
      imageFadeDuration: 200
    });
  }
});
