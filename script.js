


(function () {
    //public key
    emailjs.init("-nYR1UAlwa-1SZWs6");
})();

const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('success-message');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        to_name: "Admin",
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        reply_to: document.getElementById('email').value
    };

    // Service_ID Template_ID
    emailjs.send('aktechnik_mailservice', 'template_mk01vgz', formData).then(function (response) {
        successMessage.classList.remove('hidden');
        contactForm.reset();

        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
    }).catch(function (error) {
        alert('Failed to send message. Please try again.');
    });
});