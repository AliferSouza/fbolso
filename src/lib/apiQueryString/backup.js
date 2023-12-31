import { addBanco, download } from "../index.js";


export default function backup(data){
       const [, URL] = data.split("data=")   
       const objetoData = JSON.parse(URL);

       download(URL, "text/plain;charset=utf-8;")
}