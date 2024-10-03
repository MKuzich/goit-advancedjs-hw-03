import{S as c,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p="27957885-8dff7fee3c243073fce7c6825",u=(a,r)=>fetch(`https://pixabay.com/api/?key=${p}&q=${a}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${r}`),i=document.querySelector(".gallery"),m=()=>{i.innerHTML='<span class="loader"></span>'},d=({webformatURL:a,largeImageURL:r,tags:n,likes:s,views:e,comments:t,downloads:o})=>`
<li>
  <a href="${r}">
    <div class="image-container">
      <img class="image-preview" src="${a}" alt="${n}" />
    </div>
    <div class="card-description">
      <span class="attribute"><span>Likes</span> ${s}</span>
      <span class="attribute"><span>Views</span> ${e}</span>
      <span class="attribute"><span>Comments</span> ${t}</span>
      <span class="attribute"><span>Downloads</span> ${o}</span>
    </div>
  </a>
</li>
  `,f=a=>{const r=a.map(d).join("");i.innerHTML=`<ul class="gallery-list">${r}</ul>`},y=()=>{i.innerHTML=""},g=new c(".gallery a",{overlayOpacity:.8,captions:!0,captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"}),h=document.querySelector(".search-form"),b=a=>{a.preventDefault();const r=a.target,n=r.elements.query.value.trim();n&&(r.reset(),m(),u(n,1).then(s=>s.json()).then(s=>{if(s.total===0)return Promise.reject(new Error("Sorry, there are no images matching your search query. Please try again!"));f(s.hits)}).then(()=>{g.refresh()}).catch(s=>{l.error({title:"Error",message:s.message}),y()}))};h.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
