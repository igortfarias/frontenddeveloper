function openMenu() {
  document.body.classList.add('menu--open');
}

function closeMenu() {
  document.body.classList.remove('menu--open');
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});
