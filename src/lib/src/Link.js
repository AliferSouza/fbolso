import router from "./Router.js";

export default function link(link){  
    const keys = Object.keys(link)
   window.history.pushState( null, null, keys);
   router({link})
 }