import { useNavigate } from "../../lib/@prix.js"

export default function compDashboardCard({ tag, Data }) {
   const validar = tag.id
   const lancamentos = Data || JSON.parse(localStorage.getItem('lancamentos')) || []
   const ultimosTresLancamentos = lancamentos.slice(-3);

   const valorPReceitas = ultimosTresLancamentos
      .filter(lancamento => lancamento.TIPO === "receita")
   const valorPDespesas = ultimosTresLancamentos
      .filter(lancamento => lancamento.TIPO === "despesa")

  
   const valorLancamento = {
      ...valorPReceitas.reduce((acc, receita, index) => ({ ...acc, [`receita${index + 1}`]: receita }), {}),
      ...valorPDespesas.reduce((acc, despesa, index) => ({ ...acc, [`despesa${index + 1}`]: despesa }), {})
   };

   const valorTotalReceitas = lancamentos.filter(lancamento => lancamento.TIPO === validar)
      .reduce((acumulador, receita) => {
         return acumulador + parseFloat(receita.VALOR);
      }, 0);


   const valorTotalReceitasObj = lancamentos
      .filter(lancamento => lancamento.TIPO === validar).slice(0, 3);


      tag.addEventListener("click", e =>{           
            if(tag.tagName === "COMP-DASHBOARD-CARD"){             
              useNavigate(`/relatorio/${validar}`)
            }
               
          
      })


   if (validar === "lacamentos") {
      return `
  
         <h4> ${tag.id.toUpperCase()}</h4>     
         <div>       
         ${Object.values(valorLancamento).map(lancamento => `<h4 style="${lancamento.TIPO === 'receita' ? 'color: #83f28f' : 'color: #f94449'}">${lancamento.DESCRICAO.slice(0, 5)} ${lancamento.VALOR} reais</h4>`).join('')}
        </div> 
    
     `
   }


   return `
         <h4> ${tag.id.toUpperCase()}: R$ ${valorTotalReceitas.toFixed(2)} Reais</h4>   
        
            <div>       
            ${valorTotalReceitasObj.map(receita => `<h5>${receita.DESCRICAO.slice(0, 5)} ${receita.VALOR} reais</h5>`).join('')}
    
            <h1> ${tag.id === "receita" ? `⇧` : `⇩`}<h1>

        </div>
   
    `

}