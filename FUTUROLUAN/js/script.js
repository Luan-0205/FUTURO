// Modo Claro/Escuro
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Relógio Futurista
function updateClock() {
    const now = new Date();
    const future = new Date('2050-01-01');
    const diff = future - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById('time-remaining').innerText = 
        `${days} dias, ${hours} horas e ${minutes} minutos restantes.`;
}
setInterval(updateClock, 1000);

// Iniciar Assistente Virtual
function startAI() {
    window.location.href = "pages/future-ai.html";
}

// Galeria Animada
function galeria() {
    alert("Acesse nossa galeria na seção 'Sobre'!");
    window.location.href = "pages/about.html";
}
