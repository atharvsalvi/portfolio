const home = document.querySelector(".home");
const intro = document.querySelector(".information");

const about = document.querySelector(".about-nav");
const aboutMe = document.querySelector(".about-me");
const aboutDiv = document.querySelector(".about");

const projectsDiv = document.querySelector(".showcase");
const projects = document.querySelector(".projects-nav");
const projectsTab = document.querySelector(".projects");

const connect = document.querySelector(".connect");
const connectTab = document.querySelector(".connect-tab");

const aboutMq = window.matchMedia("(max-width: 950px)");
const projectsMq = window.matchMedia("(max-width: 1250px)");

about.addEventListener("click", ()=>{
    aboutMe.scrollIntoView({ behavior: "smooth" });
})

projects.addEventListener("click", ()=>{
    projectsTab.scrollIntoView({ behavior: "smooth" });
})

home.addEventListener("click", ()=>{
    intro.scrollIntoView({ behavior: "smooth" });
});

connect.addEventListener("click", ()=>{
    connectTab.scrollIntoView({ behavior: "smooth" });
});

function handleAboutMedia(e) {
    if(e.matches) {
        aboutDiv.innerHTML = `
            <div class="description">
                <div class="image">
                    <img src="./assets/my-image.png" class="me-with-guitar"/>
                </div>
                <div class="my-description">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div class="description">
                <div class="image">
                    <img src="./assets/my-image-next.png" class="me-with-guitar me-next"/>
                </div>
                <div class="my-description">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        `;
    }
    else {
        aboutDiv.innerHTML = `
            <div class="description">
                <div class="my-description">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div class="image">
                    <img src="./assets/my-image.png" class="me-with-guitar"/>
                </div>
            </div>
            <div class="description">
                <div class="image">
                    <img src="./assets/my-image-next.png" class="me-with-guitar me-next"/>
                </div>
                <div class="my-description">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        `;
    }
}
window.addEventListener("resize", () => {
    handleAboutMedia(aboutMq);
});

function handleProjectsMedia(e) {
    if(e.matches) {
        projectsDiv.innerHTML = `
            <div class="project-etho project-card">
                <div class="project-image-div etho-image">
                    <img src="./assets/projects/etho.png" class="etho project-image"/>
                </div>
                <div class="etho-desc project-desc">
                    <h2>Etho</h2>
                    <p>Etho is a command-line AI assistant that lets you type instructions in plain English and automatically executes the corresponding shell commands. With Etho, you don’t need to memorize commands — just tell it what you want to do, and it handles the rest.</p>
                </div>
            </div>
            <div class="project-flappy-bird project-card">
                <div class="project-image-div flappy-bird-image">
                    <img src="./assets/projects/flappy-bird.png" class="flappy-bird project-image"/>
                </div>
                <div class="flappy-bird-desc project-desc">
                    <h2>Flappy Bird</h2>
                    <p>Flappy Bird is a mobile game that challenges players to navigate a bird through a series of pipes by tapping the screen to make the bird flap its wings. The game is known for its simple yet addictive gameplay, as well as its retro-inspired graphics and sound effects.</p>
                </div>
            </div>
            <div class="project-encode project-card">
                <div class="project-image-div encode-image">
                    <img src="./assets/projects/encode.png" class="encode project-image"/>
                </div>
                <div class="encode-desc project-desc">
                    <h2>Encode</h2>
                    <p>Developed a web application using React that allows users to encode and decode text with a custom key.</p>
                </div>
            </div>
        `;
    }
    else {
        projectsDiv.innerHTML = `
            <div class="project-etho project-card">
                <div class="project-image-div etho-image">
                    <img src="./assets/projects/etho.png" class="etho project-image"/>
                </div>
                <div class="etho-desc project-desc">
                    <h2>Etho</h2>
                    <p>Etho is a command-line AI assistant that lets you type instructions in plain English and automatically executes the corresponding shell commands. With Etho, you don’t need to memorize commands — just tell it what you want to do, and it handles the rest.</p>
                </div>
            </div>
            <div class="project-flappy-bird project-card">
                <div class="flappy-bird-desc project-desc">
                    <h2>Flappy Bird</h2>
                    <p>Flappy Bird is a mobile game that challenges players to navigate a bird through a series of pipes by tapping the screen to make the bird flap its wings. The game is known for its simple yet addictive gameplay, as well as its retro-inspired graphics and sound effects.</p>
                </div>
                <div class="project-image-div flappy-bird-image">
                    <img src="./assets/projects/flappy-bird.png" class="flappy-bird project-image"/>
                </div>
            </div>
            <div class="project-encode project-card">
                <div class="project-image-div encode-image">
                    <img src="./assets/projects/encode.png" class="encode project-image"/>
                </div>
                <div class="encode-desc project-desc">
                    <h2>Encode</h2>
                    <p>Developed a web application using React that allows users to encode and decode text with a custom key.</p>
                </div>
            </div>
        `;
    }
}
window.addEventListener("resize", () => {
    handleProjectsMedia(projectsMq);
});

handleProjectsMedia(projectsMq);
handleAboutMedia(aboutMq);