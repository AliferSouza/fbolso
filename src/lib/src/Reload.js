export default function reload(props){   
    function recarregar(){        
    document.location.reload(true);
    }
    setTimeout(recarregar, `${props}`)
}