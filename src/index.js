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

    homeBtn.addEventListener('click', ()  => {
        content.innerHTML = "";
        loadHome(content);
    });

    menuBtn.addEventListener('click', () => {
        content.innerHTML = "";
        loadMenu(content);
    }); 

    aboutBtn.addEventListener('click', () => {
        content.innerHTML = "";
        loadAbout(content);
    });

    loadHome(content)
}


document.addEventListener('DOMContentLoaded', pageLoad);