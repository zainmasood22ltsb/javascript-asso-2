function submitForm() {
    // Input values lein
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Output element ko select karein
    var output = document.getElementById('output');

    // Agar input valid hai tou show karein
    if (name && email) {
        output.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p>`;
    } else {
        output.innerHTML = `<p>Please fill out both fields.</p>`;
    }
}
