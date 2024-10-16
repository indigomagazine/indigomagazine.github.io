// script.js

let targetX = 0, targetY = 0; // Where the cursor/touch wants to go
let currentX = 0, currentY = 0; // Current position of the movement

// Function to smoothly animate the images
function smoothMove() {
  const wrappers = document.querySelectorAll('.floating-photo-wrapper');
  
  // Lerp (Linear Interpolation) for smoother movement
  currentX += (targetX - currentX) * 0.05; 
  currentY += (targetY - currentY) * 0.05;

  wrappers.forEach((wrapper) => {
    // Apply smoother transform
    wrapper.style.transform = `translate(${currentX}px, ${currentY}px)`;
  });

  requestAnimationFrame(smoothMove); // Continue the animation
}

// Mouse move event for desktop
document.addEventListener('mousemove', (event) => {
  targetX = (event.clientX - window.innerWidth / 2) / 10; // Increase divisor for quicker movement
  targetY = (event.clientY - window.innerHeight / 2) / 10;
});

// Touch move event for mobile
document.addEventListener('touchmove', (event) => {
  const touch = event.touches[0];
  targetX = (touch.clientX - window.innerWidth / 2) / 10;
  targetY = (touch.clientY - window.innerHeight / 2) / 10;
});

// Start the smooth movement loop
smoothMove();


"https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js">
"https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js">
$(function() {
  $('#aura-section').ripples({
      resolution: 512,
      dropRadius: 20,
      interactive: true,
      perturbance: 0.02,
  });

  // Update size on window resize
  $(window).resize(function() {
      $('#aura-section').ripples('updateSize');
  });
});



function changeColor() {
  const body = document.body;
  const changeModeBtn = document.querySelector(".change-mode"); // Select the button
  const themeLogoImg = document.querySelector(".logo"); // Select the logo
  const taskbarText = document.querySelectorAll(".taskbar-text"); // Select the taskbar text

  // Toggle the light mode class
  body.classList.toggle("light-mode");

  // Check the current mode and update the button, logo, and taskbar text accordingly
  if (body.classList.contains("light-mode")) {
    changeModeBtn.textContent = "☼"; // Show sun symbol for light mode
    themeLogoImg.src = "assets/logos/indigologoblack.png"; // Show black logo in light mode
    taskbarText.forEach(text => text.style.color = "black"); // Change text to black in light mode
    body.style.backgroundColor = "white"; // Set background to white for light mode
    localStorage.setItem('theme', 'light'); // Save the light theme in localStorage
  } else {
    changeModeBtn.textContent = "☾"; // Show moon symbol for dark mode
    themeLogoImg.src = "assets/logos/indigologowhite.png"; // Show white logo in dark mode
    taskbarText.forEach(text => text.style.color = "white"); // Change text to white in dark mode
    body.style.backgroundColor = "black"; // Set background to black for dark mode
    localStorage.setItem('theme', 'dark'); // Save the dark theme in localStorage
  }
}

// On page load, apply the saved theme from localStorage
window.onload = () => {
  const taskbarText = document.querySelectorAll(".taskbar-text"); // Select the taskbar text

  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add("light-mode");
    document.querySelector(".change-mode").textContent = "☼"; // Show sun symbol for light mode
    document.querySelector(".logo").src = "assets/logos/indigologoblack.png"; // Show black logo in light mode
    taskbarText.forEach(text => text.style.color = "black"); // Set text to black for light mode
    document.body.style.backgroundColor = "white"; // Set background to white
  } else {
    document.querySelector(".change-mode").textContent = "☾"; // Show moon symbol for dark mode
    document.querySelector(".logo").src = "assets/logos/indigologowhite.png"; // Show white logo in dark mode
    taskbarText.forEach(text => text.style.color = "white"); // Set text to white for dark mode
    document.body.style.backgroundColor = "black"; // Set background to black
  }
};


let lastScrollTop = 0;
const taskbar = document.getElementById("Taskbar-container");
let ticking = false;

function handleScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    taskbar.classList.add('hidden');
    taskbar.classList.remove('visible');
  } else {
    taskbar.classList.remove('hidden');
    taskbar.classList.add('visible');
  }
  
  lastScrollTop = scrollTop;
  ticking = false;
}

window.addEventListener('scroll', function () {
  if (!ticking) {
    window.requestAnimationFrame(handleScroll);
    ticking = true;
  }
});
