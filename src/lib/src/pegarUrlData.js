export default function pegarUrlData(){ 
    const urlParams = window.location.href  
    const [, URL] = urlParams.split("data=")
    const data = decodeURI(URL)
    const objetoData = JSON.parse(data);

    return objetoData
  
}