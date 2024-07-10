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

export default loadContact;
