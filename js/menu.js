'use strict';

const openMenu = () => {
  const button = document.getElementById('menu-button');
  const sidebar = document.getElementById('sidebar');
  const cross = document.getElementById('cross');

  button.style.visibility = 'hidden';
  sidebar.style.visibility = 'visible';
  sidebar.style.width = '400px';
  cross.style.visibility = 'visible';
};

const closeMenu = () => {
  const button = document.getElementById('menu-button');
  const sidebar = document.getElementById('sidebar');
  const cross = document.getElementById('cross');
  
  button.removeAttribute('style');
  sidebar.removeAttribute('style');
  cross.removeAttribute('style');
};

document.getElementById('menu-button').addEventListener('click', openMenu);
document.getElementById('cross').addEventListener('click', closeMenu);
