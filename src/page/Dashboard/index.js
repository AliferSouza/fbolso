export default function Dashboard({ tagPage, Data}) {
  const lancamentos =  Data || JSON.parse(localStorage.getItem('lancamentos')) || [];


  const valorTotalReceitasObj = lancamentos
  .filter(lancamento => lancamento.TIPO === "receita")

const valorTotalDespesasObj = lancamentos
  .filter(lancamento => lancamento.TIPO === "despesa")


// Soma dos valores das receitas
const valorTotalReceitas = valorTotalReceitasObj.reduce(
  (acumulador, receita) => acumulador + parseFloat(receita.VALOR),
  0
);

// Soma dos valores das despesas
const valorTotalDespesas = valorTotalDespesasObj.reduce(
  (acumulador, despesa) => acumulador + parseFloat(despesa.VALOR),
  0
);

// Diferença entre receitas e despesas
const diferenca = valorTotalReceitas - valorTotalDespesas;



  return `
   
    
       
                <div class="container">

            

                  <h3>F-bolso</h3>                        
                  <h1>Dashboard</h1>
                  ${diferenca > 0  ? `<h2 style="color: green">R$ ${diferenca.toFixed(2)}</h2>` : `<h2 style="color: red">R$ -${Math.abs(diferenca).toFixed(2)}`}</h2>
                   <div class="container_corpo">           
                 
                  <comp-dashboard-card style="background:#A100FFFF" class="das-card"  id="Laçamentos"></comp-dashboard-card>
                  <comp-dashboard-card style="background:#279260"  class="das-card " id="receita"></comp-dashboard-card>
                  <comp-dashboard-card style="background:#000000" class="das-card" id="despesa"></comp-dashboard-card>
                  </div>
                                           
             
                  </div>
                  
                  <comp-menu-mobile priority class="container_comp_menu" id="Lançamentos"></comp-menu-mobile>
            
   
   
        `
}
