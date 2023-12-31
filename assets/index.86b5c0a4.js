(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const b=document.querySelector("#app");let f=[];const v={},w={};function y(t,...o){if(w[t]){const n=w[t].map(a=>a(...o)).filter(a=>a!==void 0);return n.length>0?n:""}return""}async function x(t,o){const a=`#${`/${t.replace(/^\/+|\/+$/g,"")}`}`;a!==window.location.hash?(window.history.pushState(null,null,a),o?await C(o):await C()):await C(o)}let L;const m=new Map,O=t=>{if(t.tagName.includes("-")){const o=()=>{const e=t.hasAttribute("use:revalidate"),r=t.getAttribute("use:revalidate")||1e3;return[e,r]},[n,a]=o();if(n){const r=setInterval(async()=>h(t),a);m.set(t.tagName.toLowerCase(),r),L=location.href}else{const e=t.tagName.toLowerCase(),r=m.get(e);r?(clearInterval(r),m.delete(e)):L!==location.href&&m.clear()}}},T=async t=>{const{tag:o,Data:n}=t,a=o.tagName.toLowerCase(),e=()=>{const[l,u]=(o.getAttribute("use:fetch")||"").split("|").map(p=>p.trim());return[l,u]},[r,i]=e();let s,c,d;if(v[a])s=await v[a](n);else{const l=`${location.origin}/${r}/${a}.${i}`;if(d=await fetch(l),!d.ok)throw new Error("Failed to fetch page content");i==="html"&&(document.querySelector(a).innerHTML=await d.text()),i==="js"&&(c=await d.text(),s=Function("return "+c)(),s=await retonarPaginaOcultaEmFun\u00E7\u00E3o(dataApp),v[a]=retonarPaginaOcultaEmFun\u00E7\u00E3o)}return s},h=async(t,o)=>{const{Components:n={},Data:a={}}=f[0],e=t.tagName.toLowerCase();let i=await(t.hasAttribute("use:fetch")?T({tag:t,Data:a}):n[e]({tag:t,Data:a}));t.hasAttribute("use:revalidate")||o?(t.innerHTML=i,y(e)):(t.innerHTML+=i,y(e)),Array.from(t.querySelectorAll("*")).filter(async s=>{s.tagName.includes("-")&&s.tagName.toLowerCase()!==e&&(await h(s),O(s))})};async function $(){const t=Array.from(document.querySelectorAll("*")).filter(o=>{const n=o.tagName.includes("-"),a=o.hasAttribute("priority");if(n)if(a)h(o);else return o});(()=>{const o=new Set,n=new IntersectionObserver(async(e,r)=>{const i=e.find(s=>s.isIntersecting);if(i){const{target:s}=i;await h(s),O(s),r.unobserve(s);const c=t.find(d=>!o.has(d));c&&o.add(c)&&r.observe(c)}}),a=t.find(e=>!o.has(e));a&&o.add(a)&&n.observe(a)})()}function E(t,o){let n;return function(...a){clearTimeout(n),n=setTimeout(()=>{t.apply(this,a)},o)}}const C=async(t={})=>{f.length===0&&f.push(t);const{Pages:o={},Data:n={},Config:a={}}=f[0];async function e(){const s=location.href.match(/#\/([^\/?]+)/),c=s?s[1]:null;if(c===null||c==="#")return;const d=c==="/"?Object.keys(o)[0]:c;(o[d]||"erro")==="erro"?r(o):(b.innerHTML=await o[d]({currentPage:d,Data:n,tagPage:b}),y(d),$())}function r(s){b.innerHTML=`
      <div class="erroPages">
        ${Object.keys(s).map((c,d)=>`<a class="Erro" id="${d}"  use:href="/#/${c}">${c.toUpperCase()}</a>`).join("")}
      </div>
    `}function i(s){const c=s.target.getAttribute("use:href");if(c){const d=`#${c.replace(/\/+/g,"/")}`;d!==window.location.hash&&(window.history.pushState(null,null,d),e())}}window.addEventListener("popstate",e),document.body.addEventListener("click",E(i,200)),e()};function P({tagPage:t}){const o=JSON.parse(localStorage.getItem("lancamentos"))||[],n=o.filter(s=>s.tipoLancamento==="receita"),a=o.filter(s=>s.tipoLancamento==="despesa"),e=n.reduce((s,c)=>s+parseFloat(c.valor),0),r=a.reduce((s,c)=>s+parseFloat(c.valor),0),i=e-r;return`
   
    
       
                <div class="container">

            

                  <h3>F-bolso</h3>                        
                  <h1>Dashboard</h1>
                  ${i>0?`<h2 style="color: green">R$ ${i.toFixed(2)}</h2>`:`<h2 style="color: red">R$ -${Math.abs(i).toFixed(2)}`}</h2>
                   <div class="container_corpo">           
                 
                  <comp-dashboard-card style="background:#A100FFFF" class="das-card"  id="La\xE7amentos"></comp-dashboard-card>
                  <comp-dashboard-card style="background:#279260"  class="das-card " id="receita"></comp-dashboard-card>
                  <comp-dashboard-card style="background:#000000" class="das-card" id="despesa"></comp-dashboard-card>
                  </div>
                                           
             
                  </div>
                  
                  <comp-menu-mobile priority class="container_comp_menu" id="Lan\xE7amentos"></comp-menu-mobile>
            
   
   
        `}const g={path:"./src/",keyGoogleSheetsPost:"https://script.google.com/macros/s/AKfycbx2OyT2OHC1W_slxtfraoLs-foY33H2WkFwJrjNjd7_2FeWrtCZ__dgUWd8HBp70o0_/exec",keyGoogleSheetsGet:"https://script.googleusercontent.com/macros/echo?user_content_key=WUteHYR-Q8t3Tof__Nllui2k66TooQSr_jhRTXIYpPyOkk6vLWF7tCvAqd5jKLY5_1Uf7zGEnR6eETr8GVFPPu6w39WFQU6Nm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIOj7fTEWBA_TBRXQaryQy0x9pRf_Mwk-yYHs_qyVTRZhdNX02SZrwEI3hXcgXcK6aWaK4N_I9QBKz6shhN649i_PCw1CmZ_xA&lib=MVpqGhYIQrSYd2Bg3nrXOOURFxkos_pL4"};function _({tagPage:t}){console.log(g.keyGoogleSheetsPost);const o=new Date().toLocaleString("pt-BR");return t.addEventListener("submit",n=>{n.preventDefault();const a=document.querySelector("#tipoLancamento").value,e=document.querySelector("#categoria").value,r=document.querySelector("#valor").value,i=document.querySelector("#descricao").value,s=document.querySelector("#data").value;if(a&&r&&i&&e){const c={dataLacamento:s,descricao:i,categoria:e,tipoLancamento:a,valor:r,dataHorarioRegistro:o},d=JSON.parse(localStorage.getItem("lancamentos"))||[];d.push(c),localStorage.setItem("lancamentos",JSON.stringify(d));const l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c),mode:"no-cors"};fetch(g.keyGoogleSheetsPost,l).then(u=>u.ok?u.json():Promise.reject("Erro no pedido POST: "+u.statusText)).then(u=>console.log("Pedido POST bem-sucedido:",u)).catch(u=>console.error(u)),document.querySelector("#formLancamento").reset()}}),`

          <div class="container">          

            <form id="formLancamento">
              
            <h3>F-bolso</h3>    
            <h2>Formul\xE1rio de Receitas e Despesas</h2>
              <label for="tipoLancamento">Tipo de Lan\xE7amento:</label>
              <select id="tipoLancamento" name="tipoLancamento">
                <option value="receita">Receita</option>
                <option value="despesa">Despesa</option>
              </select>
              <label for="categoria">Categoria:</label>
              <select id="categoria" name="categoria">
                <option value="estudo">Estudo</option>
                <option value="casa">Casa</option>
                <option value="empresa">Empresa</option>
                <option value="superfluo">Sup\xE9rfluo</option>
              </select>
              <label for="data">Data do lan\xE7amento:</label>
              <input type="date" id="data" name="data" required>
              <label for="valor">Valor:</label>
              <input type="number" id="valor" name="valor" step="0.01" required>
              <label for="descricao">Descri\xE7\xE3o:</label>
              <input type="text" id="descricao" name="descricao" required>
              <button type="submit">Adicionar Lan\xE7amento</button>
            </form>
           
          </div>
          <comp-menu-mobile priority class="container_comp_menu" id="Lan\xE7amentos"></comp-menu-mobile>
  
    `}function I({tagPage:t}){const o=JSON.parse(localStorage.getItem("lancamentos"))||[],n=o.filter(s=>s.tipoLancamento==="receita"),a=o.filter(s=>s.tipoLancamento==="despesa"),e=n.reduce((s,c)=>s+parseFloat(c.valor),0),r=a.reduce((s,c)=>s+parseFloat(c.valor),0),i=e-r;return t.addEventListener("click",s=>{s.target.tagName==="BUTTON"&&(o.splice(s.target.id,1),localStorage.setItem("lancamentos",JSON.stringify(o))),x("/#/relatorio/")}),`
   
    
                <div class="container">
                <h3>F-bolso</h3>                      
                <h1>Dashboard</h1>
                  <div class="total_valores">
                    <h2> ${i>0?`<h2 style="color: green">R$ ${i.toFixed(2)}</h2>`:`<h2 style="color: red">R$ -${Math.abs(i).toFixed(2)}`}</h2>
                 </div>

                 <div class="comp-relatorios">                           
                   ${o.map((s,c)=>`<div> <h5 style="${s.tipoLancamento==="receita"?"color: green":"color: red"}" >${s.descricao} ${s.valor} reais</h5>   <button id=" ${c} "></button> </div>`).join("")}
                </div> 
                </div>
                                    
      
                      
                 <comp-menu-mobile priority class="container_comp_menu"  id="Lan\xE7amentos"></comp-menu-mobile>
     
   
`}const F={dashboard:P,launch:_,relatorio:I};function R({tag:t}){return t.addEventListener("click",o=>{["um","dois","tres","quatro","cinco","seis"].forEach(a=>{const e=document.getElementById(a);if(e){const r=a===o.target.id;e.style.opacity=r?"40%":"100%",e.style.border=r?"2px solid blue":"none",e.className=r?"Ativo":""}})}),` 
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

        </fieldset>`}function N({tag:t}){return t.addEventListener("click",o=>{["facebook","instagram","whatsapp","youtube","linkedin","site"].forEach(a=>{const e=document.getElementById(a);if(e){const r=a===o.target.id;e.style.opacity=r?"40%":"100%",e.style.border=r?"2px solid blue":"none",e.className=r?"Ativo":""}}),h(t,"render")}),` 
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
             </fieldset>`}function j(){return`    
    <div class="container_comp_menu">
        <div class="comp_menu">
          <h3>F-bolso</h3> 
      
        </div>
   </div>
   
    `}function A({tag:t}){return`


            <div class="comp_menu">      
                 
            <svg use:href="/dashboard/" xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none">
            <path use:href="/dashboard/" d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
            <path  use:href="/dashboard/" d="M15 18H9" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          
   
            <svg use:href="/launch/" xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none">
            <path use:href="/launch/" d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
            <path use:href="/launch/" d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
     
                  
            <svg use:href="/relatorio/" xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24" fill="none">
            <path use:href="/relatorio/"  d="M15 5L9.5 5C8.56538 5 8.09808 5 7.75 5.20096C7.52197 5.33261 7.33261 5.52197 7.20096 5.75C7 6.09808 7 6.56538 7 7.5C7 8.43462 7 8.90192 7.20096 9.25C7.33261 9.47803 7.52197 9.66739 7.75 9.79904C8.09808 10 8.56538 10 9.5 10L18.5 10C19.4346 10 19.9019 10 20.25 9.79904C20.478 9.66739 20.6674 9.47803 20.799 9.25C21 8.90192 21 8.43462 21 7.5C21 6.56538 21 6.09808 20.799 5.75C20.6674 5.52197 20.478 5.33261 20.25 5.20096C19.9704 5.03954 19.6139 5.00778 19 5.00153" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
            <path use:href="/relatorio/"  d="M7 16.5C7 15.5654 7 15.0981 7.20096 14.75C7.33261 14.522 7.52197 14.3326 7.75 14.201C8.09808 14 8.56538 14 9.5 14H15.5C16.4346 14 16.9019 14 17.25 14.201C17.478 14.3326 17.6674 14.522 17.799 14.75C18 15.0981 18 15.5654 18 16.5C18 17.4346 18 17.9019 17.799 18.25C17.6674 18.478 17.478 18.6674 17.25 18.799C16.9019 19 16.4346 19 15.5 19H9.5C8.56538 19 8.09808 19 7.75 18.799C7.52197 18.6674 7.33261 18.478 7.20096 18.25C7 17.9019 7 17.4346 7 16.5Z" stroke="#1C274C" stroke-width="1.5"/>
            <path use:href="/relatorio/"  d="M3 14L3 2M3 22L3 18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            </div>
             

   
   
    `}function D({tag:t,Data:o}){const n=o||JSON.parse(localStorage.getItem("lancamentos"))||[],a=n.slice(-3);console.log(a);const e=t.id,r=a.filter(l=>l.TIPO==="receita"),i=a.filter(l=>l.TIPO==="despesa"),s={...r.reduce((l,u,p)=>({...l,[`receita${p+1}`]:u}),{}),...i.reduce((l,u,p)=>({...l,[`despesa${p+1}`]:u}),{})};if(e==="La\xE7amentos")return`
  
         <h4> ${t.id.toUpperCase()}</h4>     
         <div>       
         ${Object.values(s).map(l=>`<h4 style="${l.TIPO==="receita"?"color: #83f28f":"color: #f94449"}">${l.DESCRICAO.slice(0,5)} ${l.VALOR} reais</h4>`).join("")}
        </div> 
    
     `;const c=n.filter(l=>l.TIPO===e).reduce((l,u)=>l+parseFloat(u.VALOR),0),d=n.filter(l=>l.TIPO===e).slice(0,3);return`
         <h4> ${t.id.toUpperCase()}: R$ ${c.toFixed(2)} Reais</h4>   
        
            <div>       
            ${d.map(l=>`<h5>${l.DESCRICAO.slice(0,5)} ${l.VALOR} reais</h5>`).join("")}
    
            <h1> ${t.id==="receita"?"\u21E7":"\u21E9"}<h1>

        </div>
   
    `}const M={"comp-field-set":R,"comp-field-set-links":N,"comp-menu":j,"comp-menu-mobile":A,"comp-dashboard-card":D},k="cachedData",S="cacheTimestamp",q=2*60*1e3;async function H(){try{const t=JSON.parse(localStorage.getItem(k)),o=localStorage.getItem(S);if(t&&o&&Date.now()-o<q)return t;const n=await fetch(g.keyGoogleSheetsGet);if(!n.ok)throw new Error(`Request failed with status: ${n.status}`);const a=await n.json();return localStorage.setItem(k,JSON.stringify(a)),localStorage.setItem(S,Date.now().toString()),console.log("Data received:",a),a}catch(t){throw console.error("Error:",t),t}}async function B(){const t=await H();x("/dashboard/",{Pages:F,Components:M,Data:t,Config:g})}B();
