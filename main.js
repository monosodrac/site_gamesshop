document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contact');
        
    const fullName = document.getElementById('full-name');
    const email = document.getElementById('email');
    const phoneNumber = document.getElementById('phone-number');
    const message = document.getElementById('message');
    const smallMsg = document.querySelectorAll('.small-text');
    
    const successMessage = 'Sua mensagem foi enviada com sucesso!';
    const nullFieldMsg = 'Este campo é obrigatório';
    
    const spanYear = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    spanYear.innerText = currentYear

    function clearErrors() {
        smallMsg.forEach(el => {
            el.style.display = 'none';
            el.innerHTML = '';
        });
    };

    function isValidForm() {
        clearErrors();
        let valid = true;

        const arrayAsName = fullName.value.trim().split(' ');
        if (!fullName.value.trim()) {
            fullName.nextElementSibling.style.display = 'block';
            fullName.nextElementSibling.innerHTML = nullFieldMsg;
            valid = false;
        } else if (arrayAsName.length < 2) {
            fullName.nextElementSibling.style.display = 'block';
            fullName.nextElementSibling.innerHTML = 'O nome não está completo';
            valid = false;
        };
        
        if (!email.value.trim()) {
            email.nextElementSibling.style.display = 'block';
            email.nextElementSibling.innerHTML = nullFieldMsg;
            valid = false;
        }

        if (!message.value.trim()) {
            message.nextElementSibling.style.display = 'block';
            message.nextElementSibling.innerHTML = nullFieldMsg;
            valid = false;
        }

        return valid;
    };



    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (isValidForm()) {
            document.querySelector('.success-message').innerHTML = successMessage;

            fullName.value = '';
            email.value = '';
            phoneNumber.value = '';
            message.value = '';

            clearErrors();
        };
    });
});
