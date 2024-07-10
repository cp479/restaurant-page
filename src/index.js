document.addEventListener('DOMContentLoaded', function() {
    function createNav() {
        const nav = document.createElement('nav');

        const about = document.createElement('a');
        about.textContent = 'About';
        about.href = '#';
        about.addEventListener('click', loadAbout);

        const menu = document.createElement('a');
        menu.textContent = 'Menu';
        menu.href = '#';
        menu.addEventListener('click', loadMenu);

        const contact = document.createElement('a');
        contact.textContent = 'Contact';
        contact.href = '#';
        contact.addEventListener('click', loadContact);

        nav.appendChild(about);
        nav.appendChild(menu);
        nav.appendChild(contact);

        return nav;
    }

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

    function loadMenu() {
        const content = document.getElementById('content');
        content.innerHTML = '';

        const section = document.createElement('section');
        section.innerHTML = `
            <h1>Menu</h1>
            <div class="card">
                <h2>Pizza</h2>
                <p>Delicious cheese pizza with a crispy crust.</p>
            </div>
            <div class="card">
                <h2>Pasta</h2>
                <p>Classic spaghetti with marinara sauce.</p>
            </div>
            <div class="card">
                <h2>Salad</h2>
                <p>Fresh garden salad with a variety of vegetables.</p>
            </div>
        `;
        content.appendChild(section);
    }

    function loadContact() {
        const content = document.getElementById('content');
        content.innerHTML = '';

        const section = document.createElement('section');
        section.innerHTML = `
            <h1>Contact Us</h1>
            <p>Get in touch with us!</p>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"><br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"><br><br>
                <input type="submit" value="Submit">
            </form>
        `;
        content.appendChild(section);
    }

    function initializeWebsite() {
        const content = document.getElementById('content');
        content.appendChild(createNav());
        loadAbout();
    }

    initializeWebsite();
});
