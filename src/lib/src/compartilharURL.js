export default function  compartilharURL(titulo, text, url ){
  
    const shareData = {
        title: titulo,
        text: text,
        url: url ,
      }


     window.compartilhar = async () => {  
        await navigator.share(shareData)

    }

}
  