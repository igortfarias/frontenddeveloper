function openMenu(){document.body.classList.add('menu--open')}
function closeMenu(){document.body.classList.remove('menu--open')}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
