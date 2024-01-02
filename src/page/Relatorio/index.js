import config  from "../../@prix_config.js"
export default function ({ tagPage, Data }) {
  const lancamentos = Data || JSON.parse(localStorage.getItem('lancamentos')) || [];

  const resultado = lancamentos.reduce((total, lancamento) => {
    const valor = parseFloat(lancamento.VALOR);
    if (lancamento.TIPO === "receita") {
      total.valorTotalReceitas += valor;
    } else if (lancamento.TIPO === "despesa") {
      total.valorTotalDespesas += valor;
    }
    return total;
  }, { valorTotalReceitas: 0, valorTotalDespesas: 0 });

  const { valorTotalReceitas, valorTotalDespesas } = resultado;
  const diferenca = valorTotalReceitas - valorTotalDespesas;

  const tipoLancamentoAtual = location.href.split("/").pop();

  const resultados = tipoLancamentoAtual !== 'receita' && tipoLancamentoAtual !== 'despesa'
    ? lancamentos
    : lancamentos.filter(e => e.TIPO === tipoLancamentoAtual);

    tagPage.addEventListener('click', e=>{
      console.log(e.target.id);
      const requestOptions = {
        method: 'GET',
    
      mode: 'no-cors'
      };
      console.log()
 
     fetch(`${config.keyGoogleSheetsGetExcluir}?action=delete&id=${e.target.id}`, requestOptions)
        .then(response => response.ok ? response.json() : Promise.reject('Erro no pedido POST: ' + response.statusText))
       .then(data => console.log("Pedido POST bem-sucedido:", data))
        .catch(error => console.error(error));


    })

  return `
    <div class="container_relatorio">
      <h3>F-bolso</h3>
      <h1>Dashboard</h1>
      <div class="total_valores">
        <h2>${diferenca > 0 ? `<h2 style="color: green">R$ ${diferenca.toFixed(2)}</h2>` : `<h2 style="color: red">R$ -${Math.abs(diferenca).toFixed(2)}`}</h2>
      </div>

      <div class="comp-relatorios">
        ${resultados.map((lancamento, index) => `
          <div>
            <h5 style="${lancamento.TIPO === 'receita' ? 'color: green' : 'color: red'}">${lancamento.DESCRICAO} ${lancamento.VALOR} reais</h5>
            <button id="${lancamento.ID}"></button>
          </div>`
        ).join('')}
      </div>
    </div>

    <comp-menu-mobile priority class="container_comp_menu"  id="Lançamentos"></comp-menu-mobile>
  `;
}
