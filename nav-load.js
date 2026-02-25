/* Load nav.html and highlight current page */
document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');

  fetch('nav.html')
    .then(res => res.text())
    .then(data => {
      navPlaceholder.innerHTML = data;

      const sidebar = document.getElementById('sidebar');
      const hamburger = document.getElementById('hamburger');

      // Mobile hamburger toggle
      if (hamburger && sidebar) {
        hamburger.addEventListener('click', () => sidebar.classList.toggle('active'));
      }

      // Highlight current page link
      const currentPath = window.location.pathname.split('/').pop();
      const links = sidebar.querySelectorAll('a');

      links.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
          link.classList.add('active');
        }
      });
    })
    .catch(err => console.error('Failed to load navigation:', err));
});
