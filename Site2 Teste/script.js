document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('demo-button');

    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#bb86fc';
    });

    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#6200ea';
    });

    button.addEventListener('click', () => {
        alert('Você clicou no botão!');
    });
});
