import{g as _,u as E,r as S}from"./md5-d3aef2ca.js";import"./modal-b654d49f.js";document.addEventListener("DOMContentLoaded",function(){const i=document.querySelector("#listInput"),o=document.querySelector(".list__title");let c=document.querySelector(".lk__btn"),s=document.querySelector(".lk__modalList");const l=document.getElementById("modal-box"),u=document.querySelector(".modalList__btn");let r=!1;c.addEventListener("click",e=>{s.showModal(),r=!0,e.stopPropagation()}),u.addEventListener("click",()=>{s.close(),r=!1}),document.addEventListener("click",e=>{r&&!l.contains(e.target)&&s.close()});function p(){let e=i.value.trim();if(e!==""){let t=document.createElement("li"),n=document.createElement("a");n.href="#",n.innerHTML=e,t.appendChild(n),o.appendChild(t),i.value=""}}u.addEventListener("click",p),i.addEventListener("keyup",e=>{e.key==="Enter"&&(p(),s.close())});const y=window.localStorage.getItem("client"),L=JSON.parse(y).id;_("users",L).then(e=>{const t=Object.keys(e.likes).filter(n=>e.likes[n]===!0);g(t)}).catch(e=>{console.error("Ошибка при получении данных из БД:",e)});async function g(e){try{for(const t of e){const d=await(await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${t}`,{method:"GET",headers:{"content-type":"application/json","X-API-KEY":"4cb59c01-681c-4c05-bed7-5b173e7511c3"}})).json();I(d)}}catch(t){console.error("Ошибка загрузки:",t)}}let f=window.document.querySelector(".list__movieList");function I(e){const t=document.querySelector(".list__empty"),n=document.createElement("div");n.classList.add("content__item");const d=`
<div class="content__poster">
<img src="${e.posterUrlPreview}" alt="poster" class="poster__img">
</div>
<div class="content__info">
 <h3 class="content__title"><a href="page-movie.html?id=${e.kinopoiskId}" class="favorites_title">${e.nameRu}</a></h3> 
 <div class="content__year">Год выхода фильма: ${e.year}</div>
 <div class="content__rating">Рейтинг по кинопоиску: ${e.ratingKinopoisk}</div>
 <div class="content__ratingImdb">Рейтинг по Imdb: ${e.ratingImdb}</div>
 <div class="filmFavContainer">
     <button class="content-button likeBtn" id="${e.kinopoiskId}">
         <span class="liked"></span>
     </button>
 </div>
 </div>
       `;n.innerHTML=d,f.appendChild(n),t.style.display="none",f.addEventListener("click",async function(m){m.preventDefault();const a=m.target.closest(".likeBtn");if(a){const b=a.getAttribute("id"),h=window.localStorage.getItem("client"),w=JSON.parse(h).id;a.querySelector("span").classList.toggle("liked");const v=a.closest(".content__item");v&&v.remove(),q(w,b,!1)}const k=m.target.closest(".favorites_title");k&&(window.location.href=k.href)})}});async function $(i){const o=await _("users",i),c=Object.keys(o.likes).filter(s=>o.likes[s]===!0);likeList.textContent="",await getMovies(c)}async function q(i,o,c){let s=`likes.${o}`;if(c){const l={};l[s]=!0,await E("users",i,l)}else await S("users",i,s);$(i)}
