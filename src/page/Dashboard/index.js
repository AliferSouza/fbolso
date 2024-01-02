export default function Dashboard({ tagPage, Data }) {
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


  return `        
                <div class="container">   
              
           
                  <h3>F-bolso</h3>                        
                  <h1>Dashboard</h1>
                  ${diferenca > 0 ? `<h2 style="color: green">R$ ${diferenca.toFixed(2)}</h2>` : `<h2 style="color: red">R$ -${Math.abs(diferenca).toFixed(2)}`}</h2>
                   
                  <div class="container_corpo">           
                 
                  <comp-dashboard-card style="background:#A100FFFF" class="das-card"  id="lacamentos"></comp-dashboard-card>
                  <comp-dashboard-card style="background:#279260"  class="das-card " id="receita"></comp-dashboard-card>
                  <comp-dashboard-card style="background:#000000" class="das-card" id="despesa"></comp-dashboard-card>
                  </div>
                                           
             
                  </div>
             
                  <comp-menu-mobile priority class="container_comp_menu" id="Lançamentos"></comp-menu-mobile>
            
   
   
        `
}
