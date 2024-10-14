let lastScrolTop = 0;

const taskbar = document.getElementById("Taskbar-container");

window.addEventListener('scroll',  function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      taskbar.classList.add('hidden');
    } else {
      // Scrolling up
      taskbar.classList.remove('hidden');
    }
  
    lastScrollTop = scrollTop

});