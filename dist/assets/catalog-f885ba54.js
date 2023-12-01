import{g as m}from"./md5-d3aef2ca.js";import{s as g,a as p}from"./functions-b7e798af.js";import"./modal-b654d49f.js";let c=1,a=!1,r=!1;const f=document.querySelector(".catalog__image");document.querySelector(".btn").addEventListener("click",function(e){f.style.display="none",e.preventDefault(),c=1;const t=document.querySelector(".content");t.innerHTML="",l(c),window.scrollTo({top:0,behavior:"smooth"}),r=!0});window.addEventListener("scroll",function(){r&&window.innerHeight+window.scrollY>=document.body.offsetHeight&&!a&&(a=!0,l(c+1))});async function l(e){const t=document.getElementById("genre").value,i=document.getElementById("country").value,n=document.getElementById("movie-serial").value;try{const s=await(await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films?countries=${i}&genres=${t}&order=RATING&type=${n}&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=${e}`,{method:"GET",headers:{"content-type":"application/json","X-API-KEY":"6e01b98a-32ba-41c9-b64f-a2a9582aafa5"}})).json();await v(s),c=e,a=!1}catch(o){console.error("Ошибка загрузки:",o),a=!1}}async function v(e){const t=document.querySelector(".content");if(e&&e.items&&Array.isArray(e.items)){let i=[];if(window.localStorage.getItem("client")){const n=window.localStorage.getItem("client"),o=JSON.parse(n).id;i=(await m("users",o)).likes}e.items.forEach(n=>{const o=y(n,i);t.appendChild(o)})}}function y(e,t){const i=document.createElement("div");i.classList.add("content__item");let n="";const o=e.nameRu||e.nameOriginal;o!=null&&(n=`<a class="content__title" href="page-movie.html?id=${e.kinopoiskId}">${o}</a>`);const s=e.ratingImdb!==null?e.ratingImdb:"-",d=t&&e.kinopoiskId in t?"liked":"",u=`
        <div class="content__poster">
            <img src="${e.posterUrlPreview}" alt="poster" class="content__img">
        </div>
        <div class="content__info">
            ${n}
            <div class="content__year">Год выхода фильма: ${e.year}</div>
            <div class="content__rating">Рейтинг по кинопоиску: ${e.ratingKinopoisk}</div>
            <div class="content__rating-imdb">Рейтинг по Imdb: ${s}</div>
        </div>
        <div class="content__favorite">
            <button class="content-button like" id="${e.kinopoiskId}">
                <span class="like__icon ${d}"></span>
            </button>
        </div>
    `;return i.innerHTML=u,i}document.querySelector(".content").addEventListener("click",function(e){const t=e.target.closest(".content-button");if(t){e.preventDefault(),g();const i=t.getAttribute("id"),n=t.querySelector(".like__icon");if(n){n.classList.toggle("liked");const o=window.localStorage.getItem("client"),s=JSON.parse(o).id;p(s,i,n.classList.contains("liked"))}}});
