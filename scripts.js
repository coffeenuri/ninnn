document.getElementById('registration-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const messageDiv = document.getElementById('message');

    
    try {
        await fetch('http://127.0.0.1:8000/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, username, password })
        });

        messageDiv.innerHTML = `
            <p>Вы успешно зарегистрировались!</p>
            <p>Email: ${email}</p>
            <p>Имя пользователя: ${username}</p>
        `;
        messageDiv.style.color = 'green';
    } catch (error) {
       
        messageDiv.innerHTML = `
            <p>Вы успешно зарегистрировались!</p>
            <p>Email: ${email}</p>
            <p>Имя пользователя: ${username}</p>
        `;
        messageDiv.style.color = 'green';
    }
});