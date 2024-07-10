function loadAbout() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const section = document.createElement('section');
    section.innerHTML = `
        <h1>About Us</h1>
        <p>Welcome to our restaurant! We offer the best food in town.</p>
    `;
    content.appendChild(section);
}

export default loadAbout;
