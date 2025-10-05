const about = document.querySelector(".about-nav");
const aboutMe = document.querySelector(".about-me");

const projects = document.querySelector(".projects-nav");
const projectsTab = document.querySelector(".projects");


about.addEventListener("click", ()=>{
    aboutMe.scrollIntoView({ behavior: "smooth" });
    about.style.color = "rgba(240, 240, 240, 0.945)";
})

projects.addEventListener("click", ()=>{
    projectsTab.scrollIntoView({ behavior: "smooth" });
    projects.style.color = "rgba(240, 240, 240, 0.945)";
})