const sounds = [
    '/sons/click1.mp3',
    '/sons/click2.mp3',
    '/sons/click3.mp3',
    '/sons/click4.mp3',
    '/sons/click5.mp3',
    '/sons/click6.mp3'
];




let lastSoundIndex = -1;

// Função para tocar um som aleatório
function playRandomSound() {
    let randomIndex;

    // Garante que o som não seja repetido
    do {
        randomIndex = Math.floor(Math.random() * sounds.length);
    } while (randomIndex === lastSoundIndex);

    lastSoundIndex = randomIndex; // Atualiza o último som tocado
    const audio = new Audio(sounds[randomIndex]);
    audio.play();
}

// Seleciona todas as caixinhas e adiciona o evento de clique
const boxes = document.querySelectorAll('.cell');
boxes.forEach(box => {
    box.addEventListener('click', playRandomSound);
});