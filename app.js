// 1. Inicializa o SDK do Telegram
const tg = window.Telegram.WebApp;

// Configurações iniciais da janela do Telegram
tg.expand();
tg.ready();

// Ajuste dinâmico de tema (Claro/Escuro)
if (tg.colorScheme === 'light') {
    document.body.classList.remove('bg-gray-900', 'text-gray-100');
    document.body.classList.add('bg-white', 'text-gray-800');
}

// 2. Elementos do DOM
const form = document.getElementById('contaForm');

// 3. Listener do Evento de Submit
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o reload da página

    // Captura os valores digitados
    const descricao = document.getElementById('descricao').value.trim();
    const valorTotal = document.getElementById('valor').value;
    const classificacaoDespesa = document.getElementById('classificacaoDespesa').value;
    const dataVencimento = document.getElementById('dataVencimento').value;

    // Validação
    if (!descricao || isNaN(valorTotal) || !classificacaoDespesa || !dataVencimento) {
        tg.showAlert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Objeto DTO que espelha seu Record em Java
    const payload = {
        descricao: descricao,
        valorTotal: valorTotal,
        classificacaoDespesa: classificacaoDespesa,
        dataVencimento: dataVencimento
    };

    
    // Envia a String JSON para o Telegram Webhook
    tg.sendData(JSON.stringify(payload));
});
