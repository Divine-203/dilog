const navbar = document.querySelector(".navbar-cont");
const target = document.querySelector(".navbar-cont .target");
const links = document.querySelectorAll(".navbar--navlinks-cont .nav-link");
$(window).scroll(function() {
    if ($(window).scrollTop()) navbar.classList.add("navbar-cont-on-scroll");
    else navbar.classList.remove("navbar-cont-on-scroll");
});
function mouseenterFunc() {
    for(let i = 0; i < links.length; i++)if (links[i].parentNode.classList.contains("active")) links[i].parentNode.classList.remove("active");
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
for(let i = 0; i < links.length; i++){
    links[i].addEventListener("click", (e)=>e.preventDefault());
    links[i].addEventListener("mouseenter", mouseenterFunc);
}

//# sourceMappingURL=article.72be8890.js.map
