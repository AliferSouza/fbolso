import { useNavigate } from "../../lib/@prix.js";

export default function ({ tagPage }) {
  const lancamentos = JSON.parse(localStorage.getItem('lancamentos')) || [];


  const valorTotalReceitasObj = lancamentos
  .filter(lancamento => lancamento.tipoLancamento === "receita")

const valorTotalDespesasObj = lancamentos
  .filter(lancamento => lancamento.tipoLancamento === "despesa")


// Soma dos valores das receitas
const valorTotalReceitas = valorTotalReceitasObj.reduce(
  (acumulador, receita) => acumulador + parseFloat(receita.valor),
  0
);

// Soma dos valores das despesas
const valorTotalDespesas = valorTotalDespesasObj.reduce(
  (acumulador, despesa) => acumulador + parseFloat(despesa.valor),
  0
);

// Diferença entre receitas e despesas
const diferenca = valorTotalReceitas - valorTotalDespesas;


tagPage.addEventListener("click", e=>{
if(e.target.tagName === "BUTTON"){
  lancamentos.splice(e.target.id, 1);
  localStorage.setItem('lancamentos', JSON.stringify(lancamentos));
}

useNavigate("/#/relatorio/");
})




  return `
   
    
                <div class="container">
                <h3>F-bolso</h3>                      
                <h1>Dashboard</h1>
                  <div class="total_valores">
                    <h2> ${diferenca > 0  ? `<h2 style="color: green">R$ ${diferenca.toFixed(2)}</h2>` : `<h2 style="color: red">R$ -${Math.abs(diferenca).toFixed(2)}`}</h2>
                 </div>

                 <div class="comp-relatorios">                           
                   ${lancamentos.map((receita, key) => `<div> <h5 style="${receita.tipoLancamento === 'receita' ? 'color: green' : 'color: red'}" >${receita.descricao} ${receita.valor} reais</h5>   <button id=" ${key} "></button> </div>`).join('')}
                </div> 
                </div>
                                    
      
                      
                 <comp-menu-mobile priority class="container_comp_menu"  id="Lançamentos"></comp-menu-mobile>
     
   
`
}
