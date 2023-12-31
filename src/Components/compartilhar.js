export default function compartilhar(){
    compartilharURL("LINK", "Compartilhe o link", window.location.href )
    return`

    <button style="" onclick="compartilhar()" class="compartilhar"><h4 class="animacao">compartilhar➤<h4></button>
 
    `
  
}