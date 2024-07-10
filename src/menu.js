function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const section = document.createElement('section');
    section.innerHTML = `
        <h1>Menu</h1>
        <p>Check out our delicious menu!</p>
        <ul>
            <li>Pizza</li>
            <li>Pasta</li>
            <li>Salad</li>
        </ul>
    `;
    content.appendChild(section);
}

export default loadMenu;
