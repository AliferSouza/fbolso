export default function ({ Data }) {
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
            <button id="button_${index}"></button>
          </div>`
        ).join('')}
      </div>
    </div>

    <comp-menu-mobile priority class="container_comp_menu"  id="Lançamentos"></comp-menu-mobile>
  `;
}
