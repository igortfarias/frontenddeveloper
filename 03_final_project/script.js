// Mobile navigation: keep the original menu behavior with simpler DOM APIs.
function openMenu() {
  document.body.classList.add('menu--open');
}

function closeMenu() {
  document.body.classList.remove('menu--open');
}
