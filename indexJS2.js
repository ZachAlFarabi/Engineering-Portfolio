window.addEventListener('scroll', function() {
    const scrollPoint = 3000; // Adjust this value as needed
    if (window.scrollY > scrollPoint) {
      document.body.classList.add('scroll-changed');
    } else {
      document.body.classList.remove('scroll-changed');
    }
  });
  