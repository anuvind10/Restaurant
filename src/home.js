export default function pageLoad() {
    const cafeName = document.createElement('h1');
    cafeName.innerHTML = "Café Obscura"

    const headline = document.createElement('h3');
    headline.innerHTML = "Discover the Dark Side of Coffee";

    const subText = document.createElement('p');
    subText.innerHTML = "Where every sip is a journey through bold flavors and rich aromas."

    const homePage = document.querySelector('#homePage');
    homePage.appendChild(cafeName);
    homePage.appendChild(headline);
    homePage.appendChild(subText);
}