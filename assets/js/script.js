document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Fecha o menu ao clicar em qualquer link
  const links = document.querySelectorAll('#menu-ul a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });
});

let elemento = document.querySelector('.titles-area h1');
elemento.addEventListener('click', ()=> {
  if (window.innerWidth > 850) {
    if (elemento.classList.contains('ativa')) {
      elemento.classList.remove('ativa');
      elemento.classList.add('h1');
    } else {
      elemento.classList.remove('h1');
      elemento.classList.add('ativa');
    }
  } 
});

let elemento2 = document.querySelector('.titles-area p');
elemento2.addEventListener('click', ()=> {
  if (window.innerWidth > 850) {
    if (elemento2.classList.contains('pativa')) {
      elemento2.classList.remove('pativa');
      elemento2.classList.add('p');
    } else {
      elemento2.classList.remove('p');
      elemento2.classList.add('pativa');
    }
  } 
});

let skills = document.querySelectorAll('.skill-area-item');
skills.forEach((skill) => {
  skill.addEventListener('click', ()=> {
    if(window.innerWidth > 850) {
      if (skill.classList.contains('skill-area-item-x')) {
        skill.classList.remove('skill-area-item-x');
        skill.classList.add('skill-area-item');
      } else {
        skill.classList.remove('skill-area-item');
        skill.classList.add('skill-area-item-x')
      }
    }
  })
});


