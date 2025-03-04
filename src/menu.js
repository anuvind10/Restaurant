export default function pageLoad(content) {
    const sections = [
        { id: 'coffeeDiv', header: 'Signature Coffees & Brews' },
        { id: 'bitesDiv', header: 'Pastries & Light Bites' },
        { id: 'brunchDiv', header: 'All-Day Brunch Specials' },
        { id: 'dessertDiv', header: 'Desserts & Sweet Treats' }
    ];

    const menuPage = document.createElement('div');
    menuPage.id = 'menuPage';
    sections.forEach(section => {
        const header = document.createElement('h3');
        header.innerHTML = section.header;

        const div = document.createElement('div');
        div.id = section.id;
        div.classList.add('section');
        div.appendChild(header);

        menuPage.appendChild(div);
    });

    const menu = [
        { section: 'coffeeDiv', name: 'Obscura Espresso', description: 'Deep, bold single-origin espresso with a velvety crema.', price: '$4.50' },
        { section: 'coffeeDiv', name: 'Dark Matter Cold Brew', description: 'Slow-steeped, ultra-smooth, and rich with subtle chocolate notes.', price: '$5.00' },
        { section: 'coffeeDiv', name: 'Mocha Eclipse', description: 'Dark chocolate-infused espresso with steamed milk, topped with cocoa dust.', price: '$5.50' },
        { section: 'coffeeDiv', name: 'Velvet Noir Latte', description: 'A luxurious blend of espresso, vanilla bean, and microfoam.', price: '$5.75' },
        { section: 'coffeeDiv', name: 'Caramel Obscura Macchiato', description: 'Double shot espresso, layered with frothy milk and house-made caramel.', price: '$5.50' },
        { section: 'coffeeDiv', name: 'Spanish Midnight Latte', description: 'Sweetened espresso, cold milk, and a hint of cinnamon.', price: '$5.25' },
        { section: 'coffeeDiv', name: 'Matcha Eclipse Latte', description: 'Japanese matcha whisked to perfection with a touch of vanilla.', price: '$5.75' },
    ]

    let oddEvenFlag = 'O';
    content.appendChild(menuPage);
    menu.forEach(item => {
        const name = document.createElement('h4');
        name.classList.add('menuItemName');
        name.innerHTML = item.name;
        const description = document.createElement('p');
        description.classList.add('menuItemDescription');
        description.innerHTML = item.description;
        const price = document.createElement('p');
        price.classList.add('menuItemPrice');
        price.innerHTML = item.price;

        const div = document.createElement('div');
        div.classList.add('menuItem');
        if (oddEvenFlag === 'O') {
            div.classList.add('odd');
            oddEvenFlag = 'E';
        }
        else {
            div.classList.add('even');
            oddEvenFlag = 'O';
        }
        div.appendChild(name);
        div.appendChild(description);
        div.appendChild(price);

        const section = document.getElementById(item.section);
        section.appendChild(div);
    });

    
}