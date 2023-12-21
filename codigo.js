//array de mensagens 
const messages = [
    "Bem-vindo ao ConfideChat! Clique no botão e descubra as mensagens escondidas.",
    "Sistema Operacional que estais na memória.",
    "Compilado seja o vosso programa",
    "Seja executada a nossa rotina",
    "Assim na memória, como na impressora.",
    "Acerto nosso de cada dia, rodai hoje",
    "Informai os nossos erros",
    "Assim como nós informamos o que está corrigido",
    "Não nos deixai entrar em looping",
    "Mas livrai-nos do Dump",
    "A main().",
];

let currentMessageIndex = 0;

function setup() {
    displayMessage(messages[currentMessageIndex]);
}

function displayMessage(message) {
    const mainContent = document.getElementById("main-content");

    // Limpa o conteúdo anterior
    mainContent.innerHTML = "";

    // Adiciona a animação de aparecimento à mensagem
    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    messageElement.classList.add("fade-in");
    mainContent.appendChild(messageElement);

    currentMessageIndex++;

    if (currentMessageIndex < messages.length) {
        // Adiciona botão para revelar a próxima mensagem
        const button = document.createElement("button");
        button.textContent = "Revelar Próxima Mensagem";
        button.onclick = function () {
            displayMessage(messages[currentMessageIndex]);
        };
        mainContent.appendChild(button);
    } else {
        // Adiciona botão para reiniciar a sequência de mensagens
        const restartButton = document.createElement("button");
        restartButton.textContent = "Reiniciar";
        restartButton.onclick = function () {
            currentMessageIndex = 0;
            displayMessage(messages[currentMessageIndex]);
        };
        mainContent.appendChild(restartButton);
    }
}
