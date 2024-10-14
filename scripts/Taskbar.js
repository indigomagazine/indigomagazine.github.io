let lastScrollTop = 0;
const taskbar = document.getElementById("Taskbar-container");

window.addEventListener('scroll', function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down: hide the taskbar or make it fully transparent
    taskbar.classList.add('hidden');
    taskbar.style.backgroundColor = 'rgba(255, 255, 255, 0)'; // Fully transparent
  } else {
    // Scrolling up: show the taskbar and make it slightly visible
    taskbar.classList.remove('hidden');
    taskbar.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; // Slightly visible
  }

  lastScrollTop = scrollTop;
});
