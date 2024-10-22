const audio = document.getElementById('background-music');

window.addEventListener('load', () => {
    if (localStorage.getItem('musicPlaying') === 'true') {
        audio.play().catch(error => {
            console.log("Erro ao tocar a música: ", error);
        });
    }
});

window.addEventListener('beforeunload', () => {
    localStorage.setItem('musicPlaying', 'true');
});