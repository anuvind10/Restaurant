import "./styles.css"
import cafeBackground from  "./images/background2.jpg";
import homePageLoad from "./home";

function pageLoad() {
    homePageLoad();
    document.body.style.backgroundImage = `url(${cafeBackground})`;
}   

pageLoad();