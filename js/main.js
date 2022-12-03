const navbar = document.querySelector('.navbar-cont');
const target = document.querySelector(".navbar-cont .target");
const links = document.querySelectorAll(".navbar--navlinks-cont .nav-link");
const body = document.querySelector('body');
const themeBtn = document.querySelector('#theme-btn');

let darkTheme = false;

$(window).scroll(() => {
	if($(window).scrollTop()) {
		navbar.classList.add('navbar-cont-on-scroll');
	}
	else {
		navbar.classList.remove('navbar-cont-on-scroll');
	}
});

const toggleDarkTheme = () => {
  darkTheme = !darkTheme;
  if(darkTheme){
    themeBtn.textContent = 'Light theme';
    body.classList.add('dark');
  } else {
    themeBtn.textContent = 'Dark theme';
    body.classList.remove('dark');
  }
}



const mouseenterFunc = () => {
  for (let i = 0; i < links.length; i++) {
    if (links[i].parentNode.classList.contains("active")) {
      links[i].parentNode.classList.remove("active");
    }
  }
   
  this.parentNode.classList.add("active");
  this.style.opacity = "1";
   
  const width = this.getBoundingClientRect().width;
  const height = this.getBoundingClientRect().height;
  const left = this.getBoundingClientRect().left;
  const top = this.getBoundingClientRect().top;
 
  target.style.width = `${width}px`;
  target.style.height = `${height}px`;
  target.style.left = `${left}px`;
  target.style.top = `${top}px`;
  target.style.transform = "none";
}


for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => e.preventDefault());
  links[i].addEventListener("mouseenter", mouseenterFunc);
}