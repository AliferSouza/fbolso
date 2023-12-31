


export default function Router(Pagina){ 
    const dataPaginaName = Object.keys(Pagina)[0]   
      
   
    window.document.querySelector("#app").innerHTML =  Pagina[dataPaginaName]()

    
 }




