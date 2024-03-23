const navbar = document.getElementById('navbar');

// Add scroll event listener
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Add hover effect on menu items
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.color = '#ffd700';
  });

  item.addEventListener('mouseout', () => {
    item.style.color = 'white';
  });
});
