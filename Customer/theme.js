// BHMIS Theme - Dark mode persistence
(function() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.documentElement.classList.add('dark-mode');
  }
})();
