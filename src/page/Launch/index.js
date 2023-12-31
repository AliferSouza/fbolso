import Config from "../../config.js"

export default function Launch({ tagPage }) {

  console.log(Config.keyGoogleSheetsPost)
  const dataFormatada = new Date().toLocaleString('pt-BR');

  tagPage.addEventListener("submit", (event) => {
    event.preventDefault();

    const tipoLancamento = document.querySelector("#tipoLancamento").value;
    const categoria = document.querySelector("#categoria").value;
    const valor = document.querySelector("#valor").value;
    const descricao = document.querySelector("#descricao").value;
    const dataLacamento = document.querySelector("#data").value;

    if (tipoLancamento && valor && descricao && categoria) {

      const dados = {
        dataLacamento,
        descricao,
        categoria,
        tipoLancamento,
        valor, 
        dataHorarioRegistro: dataFormatada,
      };
      
      const lancamentos = JSON.parse(localStorage.getItem("lancamentos")) || [];
      lancamentos.push(dados);
      localStorage.setItem("lancamentos", JSON.stringify(lancamentos));
      
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados),
        mode: 'no-cors'
      };
      
 
      fetch(Config.keyGoogleSheetsPost, requestOptions)
        .then(response => response.ok ? response.json() : Promise.reject('Erro no pedido POST: ' + response.statusText))
        .then(data => console.log("Pedido POST bem-sucedido:", data))
        .catch(error => console.error(error));
      
      document.querySelector("#formLancamento").reset();
    }



  });


  return `

          <div class="container">          

            <form id="formLancamento">
              
            <h3>F-bolso</h3>    
            <h2>Formulário de Receitas e Despesas</h2>
              <label for="tipoLancamento">Tipo de Lançamento:</label>
              <select id="tipoLancamento" name="tipoLancamento">
                <option value="receita">Receita</option>
                <option value="despesa">Despesa</option>
              </select>
              <label for="categoria">Categoria:</label>
              <select id="categoria" name="categoria">
                <option value="estudo">Estudo</option>
                <option value="casa">Casa</option>
                <option value="empresa">Empresa</option>
                <option value="superfluo">Supérfluo</option>
              </select>
              <label for="data">Data do lançamento:</label>
              <input type="date" id="data" name="data" required>
              <label for="valor">Valor:</label>
              <input type="number" id="valor" name="valor" step="0.01" required>
              <label for="descricao">Descrição:</label>
              <input type="text" id="descricao" name="descricao" required>
              <button type="submit">Adicionar Lançamento</button>
            </form>
           
          </div>
          <comp-menu-mobile priority class="container_comp_menu" id="Lançamentos"></comp-menu-mobile>
  
    `;
}
