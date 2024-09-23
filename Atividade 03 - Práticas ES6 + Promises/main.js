const consultarCep = async () => {
    const cep = document.getElementById('cep').value.trim();
    const resultados = document.getElementById('resultados');
  
    // Valida o CEP
    if (!/^\d{8}$/.test(cep)) {
        resultados.innerHTML = '<p style="color: red;">Por favor, insira um CEP válido com 8 dígitos.</p>';
        console.log('CEP inválido:', cep);
        return;
    }
  
    resultados.innerHTML = 'Consultando...';
    console.log('Consultando CEP:', cep);
  
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        console.log('Resposta recebida:', response);
  
        if (!response.ok) {
            throw new Error('Erro na consulta do CEP');
        }
  
        const data = await response.json();
        console.log('Dados recebidos:', data);
  
        // Verifica se a resposta contém um erro
        if (data.erro) {
            resultados.innerHTML = '<p style="color: red;">CEP não encontrado.</p>';
        } else {
            resultados.innerHTML = `
                <p><strong>Cidade:</strong> ${data.localidade}</p>
                <p><strong>Endereço:</strong> ${data.logradouro}</p>
                <p><strong>Bairro:</strong> ${data.bairro}</p>
                <p><strong>Estado:</strong> ${data.uf}</p>
            `;
        }
    } catch (error) {
        console.error('Erro ao consultar o CEP:', error);
        resultados.innerHTML = `<p style="color: red;">Erro ao consultar o CEP: ${error.message}</p>`;
    }
  }