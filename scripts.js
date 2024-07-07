document.querySelectorAll('.gallery-photo').forEach(photo => {
    photo.addEventListener('mouseover', () => {
        document.querySelectorAll('.gallery-photo').forEach(p => {
            if (p !== photo) {
                p.style.filter = 'brightness(0.3)';
            }
        });
    });

    photo.addEventListener('mouseout', () => {
        document.querySelectorAll('.gallery-photo').forEach(p => {
            p.style.filter = 'brightness(1)';
        });
    });
});


document.getElementById('schedule-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const response = await fetch('https://api.exemplo.com/schedule', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, date, time })
    });

    const result = await response.json();

    const messageDiv = document.getElementById('message');
    if (response.ok) {
        messageDiv.textContent = 'Agendamento realizado com sucesso!';
    } else {
        messageDiv.textContent = `Erro: ${result.message}`;
    }
});