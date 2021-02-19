

Vue.directive('lazyLoad', {
   
    bind:  function (el, binding) {
        let lazyImgObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry, index) => {
            let lazyImg = entry.target;
            if (entry.intersectionRatio > 0) {
              lazyImg.src = binding.value;

              lazyImgObserver.unobserve(lazyImg);
            }
          });
        });

        lazyImgObserver.observe(el)
    }
})