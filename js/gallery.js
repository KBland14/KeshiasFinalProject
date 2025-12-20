
document.addEventListener('DOMContentLoaded', function() {
  // Copy figcaption text into the data-title for Lightbox2
  document.querySelectorAll('figure').forEach(function(figure) {
    const link = figure.querySelector('a[data-lightbox]');
    const caption = figure.querySelector('figcaption');
    if (link && caption) {
      link.setAttribute('data-title', caption.textContent.trim());
    }
  });

  // Initialize Lightbox2 AFTER data-title is set
  if (typeof lightbox !== "undefined") {
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true,
      fadeDuration: 200,
      imageFadeDuration: 200
    });
  }
});
