export default function addBanco(nome, dados){
   const link = JSON.parse(localStorage.getItem(nome) || "[]")              
     link.push(dados) 
     localStorage.setItem(nome, JSON.stringify(link))
 }