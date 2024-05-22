$(document).ready(function($) {
  castParallax();
});

function castParallax() {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return;
  } else {
    window.addEventListener("scroll", function() {
      var top = this.scrollY;
      var layers = document.querySelectorAll(".parallax");

      layers.forEach((layer) => {
        var speed = layer.getAttribute('data-speed');
        var yPos = -(top * speed / 100);
        layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
      });
    });
  }
}
