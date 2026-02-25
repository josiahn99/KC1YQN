const navPlaceholder = document.getElementById('nav-placeholder');

fetch('nav.html')
  .then(response => response.text())
  .then(data => {
    navPlaceholder.innerHTML = data;

    // Mobile hamburger toggle
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    if (hamburger && sidebar) {
      hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('active');
      });
    }
  })
  .catch(err => console.error('Failed to load navigation:', err));
