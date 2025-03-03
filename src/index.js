import "./styles.css"
import cafeBackground from  "./images/background2.jpg";
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

function pageLoad() {
    document.body.style.backgroundImage = `url(${cafeBackground})`;

    const homeBtn = document.querySelector('#home');
    const menuBtn = document.querySelector('#menu');
    const aboutBtn = document.querySelector('#about');
    const content = document.querySelector('#content');
    
    function loadPage(loadFunction) {
        content.classList.add('hidden');
        setTimeout(() => {
            content.innerHTML = '';
            loadFunction(content);
            content.classList.remove('hidden');
        }, 500); // Match the duration of the CSS transition
    }

    homeBtn.addEventListener('click', () => loadPage(loadHome));
    menuBtn.addEventListener('click', () => loadPage(loadMenu));
    aboutBtn.addEventListener('click', () => loadPage(loadAbout));
    loadHome(content)
}


document.addEventListener('DOMContentLoaded', pageLoad);