const progressBarPhp = document.querySelector('.php');
const progressBarJs = document.querySelector('.js');
const progressBarHtml = document.querySelector('.html');
const progressBarCSS = document.querySelector('.css');
const progressBarSASS = document.querySelector('.sass');
const progressBarJava = document.querySelector('.java');
const progressBarLaravel = document.querySelector('.laravel');
const progressBarSymfony = document.querySelector('.symfony');
const progressBarBootstrap = document.querySelector('.bootstrap');
const progressBarGit = document.querySelector('.git');
const progressBarReact = document.querySelector('.react');
const progressBarVueJs = document.querySelector('.vuejs');
const progressBarGithub= document.querySelector('.github');
const progressBarPostman = document.querySelector('.postman');
const progressBarVscode = document.querySelector('.vscode');
const progressBarPrestashop = document.querySelector('.prestashop');
const progressBarTailwind = document.querySelector('.tailwind');



const section3 = document.querySelector('.list');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0 // Détection immédiate
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.target.id === 'list' && entry.isIntersecting) {
        animateProgressBar(60, progressBarGit);
        animateProgressBar(70, progressBarBootstrap);
        animateProgressBar(50, progressBarPhp);
        animateProgressBar(30, progressBarJs);
        animateProgressBar(60, progressBarLaravel);
        animateProgressBar(30, progressBarSymfony);
        animateProgressBar(80, progressBarSASS);
        animateProgressBar(80, progressBarCSS);
        animateProgressBar(80, progressBarHtml);
        animateProgressBar(70, progressBarPostman);
        animateProgressBar(60, progressBarReact);
        animateProgressBar(40, progressBarPrestashop);
        animateProgressBar(70, progressBarVscode);
        animateProgressBar(70, progressBarGithub);
        animateProgressBar(30, progressBarJava);
        animateProgressBar(50, progressBarVueJs);
        animateProgressBar(80, progressBarTailwind);

    }   
  });
}, options);

observer.observe(section3);
function animateProgressBar(targetWidth, techno) {
    let currentWidth = 0;
    const animationDuration = targetWidth * 20; // Durée de l'animation en millisecondes
    const animationSteps = 100; // Nombre de pas pour l'animation
  
    const step = (targetWidth - currentWidth) / animationSteps;
    const stepDuration = animationDuration / animationSteps;
  
    const intervalId = setInterval(() => {
      currentWidth += step;
      switch (techno) {
        case techno = progressBarGit:
            progressBarGit.style.width = `${currentWidth}%`;
            break;
        case techno = progressBarBootstrap:
            progressBarBootstrap.style.width = `${currentWidth}%`;
            break;
        case techno = progressBarPhp:
            progressBarPhp.style.width = `${currentWidth}%`;
            break;
        case techno = progressBarJs:
            progressBarJs.style.width = `${currentWidth}%`;
            break;
        case techno = progressBarPostman:
            progressBarPostman.style.width = `${currentWidth}%`;
            break;
        case techno = progressBarPrestashop:
            progressBarPrestashop.style.width = `${currentWidth}%`;
            break;
        case techno = progressBarGithub:
            progressBarGithub.style.width = `${currentWidth}%`;
            break;
        case techno = progressBarSASS:
            progressBarSASS.style.width = `${currentWidth}%`;
            break;
        case techno = progressBarSymfony:
            progressBarSymfony.style.width = `${currentWidth}%`;
            break;
        case techno = progressBarVueJs:
            progressBarVueJs.style.width = `${currentWidth}%`;
            break;
        case techno = progressBarCSS:
            progressBarCSS.style.width = `${currentWidth}%`;
            break;
        case techno = progressBarVscode:
            progressBarVscode.style.width = `${currentWidth}%`;
            break;
        case techno = progressBarJava:
            progressBarJava.style.width = `${currentWidth}%`;
            break;
        case techno = progressBarLaravel:
            progressBarLaravel.style.width = `${currentWidth}%`;
            break;
        case techno = progressBarHtml:
            progressBarHtml.style.width = `${currentWidth}%`;
            break;
        case techno = progressBarReact:
            progressBarReact.style.width = `${currentWidth}%`;
        case techno = progressBarTailwind:
            progressBarTailwind.style.width = `${currentWidth}%`;
        default:
            break;
      }
      if (currentWidth >= targetWidth) {
        clearInterval(intervalId);
      }
    }, stepDuration);
  }

let num = "20"
console.log(45 + num);
