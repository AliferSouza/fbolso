import {gerarQueryString}  from"../lib/index.js"

function apiGerar(prop, props){

const a = JSON.parse(localStorage.getItem(prop))
const b = JSON.parse(localStorage.getItem(props))

const valorJutons = {a, b}

const data = gerarQueryString(valorJutons)



return data

}

function apiPegar(){   
    const urlParams = window.location.href  
    const [, URL] = urlParams.split("data=")
    const data = decodeURI(URL) 
    const objetoData = JSON.parse(data);

    return objetoData  

}

export {
    apiGerar,
    apiPegar
}