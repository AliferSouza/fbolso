export default function fieldset({tag}){

    tag.addEventListener("click", e => {
        const elementos = ["um", "dois", "tres", "quatro", "cinco", "seis"];
        
        elementos.forEach(id => {
            const elemento = document.getElementById(id);
            if (elemento) {
                const ativo = id === e.target.id;
                elemento.style.opacity = ativo ? "40%" : "100%";
                elemento.style.border = ativo ? "2px solid blue" : "none";
                elemento.className = ativo ? "Ativo" : "";
            }
        });
    });
    
    
    
    return` 
        <fieldset class="radio-image escolhaIcone">
            <label for="A">
                <img src="../public/banner/1.jpg" id="um"  class="escolhaa"
                    height="45px">
            </label>

            <label for="B">
                <img src="../public/banner/2.jpg" id="dois"  class="escolhaa"
                    height="45px">
            </label>

            <label for="C">
                <img src="../public/banner/3.jpg" id="tres"  class="escolhaa"
                    height="45px">
            </label>
            <label for="D">
                <img src="../public/banner/4.jpg" id="quatro" class="escolhaa"
                    height="45px">
            </label>
            <label for="E">
                <img src="../public/banner/5.jpg" id="cinco"  class="escolhaa"
                    height="45px">
            </label>
            <label for="F">
                <img src="../public/banner/6.jpg" id="seis"  class="escolhaa"
                    height="45px">
            </label>

        </fieldset>`
}