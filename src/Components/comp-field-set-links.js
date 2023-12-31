import { processElement } from "../lib/@prix.js";
export default function fieldset({tag}){

    tag.addEventListener("click", (e) => {
        const elementos = [
          "facebook",
          "instagram",
          "whatsapp",
          "youtube",
          "linkedin",
          "site",
        ];
  
    
        elementos.forEach((id) => {
          const elemento = document.getElementById(id);
          if (elemento) {
            const ativo = id === e.target.id;
            elemento.style.opacity = ativo ? "40%" : "100%";
            elemento.style.border = ativo ? "2px solid blue" : "none";
            elemento.className = ativo ? "Ativo" : "";
          }
        });

        processElement(tag, "render")
    
       
    
          
          
        
      });
    
    
    
    
    return` 
        <fieldset class="radio-image escolhaIcone" id="fieldset">
                 <label for="A">
                     <img src="./img/facebook.png" id="facebook"   name="group" class="escolha"  alt="facebook" height="45px">
                 </label>

                 <label for="B">
                     <img src="./img/instagram.png" id="instagram"  name="group" class="escolha" alt="instagram" height="45px">
                 </label>

                 <label for="C">
                     <img src="./img/whatsapp.png" id="whatsapp"   name="group"  class="escolha" alt="whatsapp" height="45px">
                 </label>
                 <label for="D">
                     <img src="./img/youtube.png" id="youtube"   name="group" class="escolha" alt="youtube" height="45px">
                 </label>    
                 <label for="E">
                     <img src="./img/linkedin.png" id="linkedin"   name="group" class="escolha" alt="youtube" height="45px">
                 </label>    
                 <label for="E">
                     <img src="./img/site.png" id="site"  name="group" class="escolha" alt="youtube" height="45px">
                 </label>           
             </fieldset>`
}