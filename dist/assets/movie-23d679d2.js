import{a as q,b as A,g as R}from"./md5-d3aef2ca.js";import{s as S,a as $}from"./functions-b7e798af.js";import"./modal-b654d49f.js";const D=document.querySelector(".tabs__nav");D.addEventListener("click",e=>{if(e.target.classList.contains("tabs__title")){const t=document.querySelector(".tabs__item._active"),n=document.querySelector(".tabs__title._active");n&&n.classList.remove("_active"),t&&t.classList.remove("_active");const s=`#${e.target.getAttribute("data-tab")}`,o=document.querySelector(s);e.target.classList.add("_active"),o.classList.add("_active");const i=document.querySelector(".tabs__content");document.querySelector("#tab_1").classList.contains("_active")?i.classList.add("_tab-1-active"):i.classList.remove("_tab-1-active")}});const B=new Intl.DateTimeFormat("ru-RU",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",hour12:!1,timeZone:"UTC",timeZoneName:"short"});function P(e){const n=e.description;let s="",o,i="",c="";n.length>1400?(o=n.slice(0,1400),s=n.slice(1400),c=" review-post__body_collapsed",i='<button class="review-post__expand-button">... &#10230;</button>'):o=n;let r;e.type=="POSITIVE"?r="review-post_type_positive":e.type=="NEGATIVE"?r="review-post_type_negative":r="review-post_type_neutral";let l;return e.title===null?l="&#10077":l=e.title,`
    <article class="review-post ${r}">
        <h3 class="review-post__title">${l}</h3>
        <p class="review-post__body${c}">${o}<span class="review-post__remaining-text _hidden">${s}</span>${i}</p>
        <div class="review-post__usefulness usefulness">
            <div class="usefulness__positive">Полезно ${e.positiveRating}</div>
            <div class="usefulness__negative">Нет ${e.negativeRating}</div>
        </div>
    </article>
    `}function j(){const e=document.querySelector('[data-tab="tab_3"]'),t=document.querySelector('[data-tab="tab_2"]'),n=document.querySelector("#tab_3"),s=document.querySelector("#tab_2");e.classList.add("_active"),t.classList.remove("_active"),n.classList.add("_active"),s.classList.remove("_active")}function F(e){const n=e.text;let s="",o,i="",c="";n.length>200?(o=n.slice(0,200),s=n.slice(200),c=" comment-post__text_collapsed",i='<button class="comment-post__expand-button">... &#10230;</button>'):o=n;let r;return e.title===void 0||e.title===""?r="&#10077":r=e.title,`
    <article class="comments-container__comment-post comment-post">
        <h3 class="comment-post__title">${r}</h3>
        <p class="comment-post__text${c}">${o}<span class="comment-post__remaining-text _hidden">${s}</span>${i}</p>
        <p class="comment-post__author">Автор отзыва: ${e.name}</p>
        <time class="comment-post__date">${B.format(e.date)}</time>
    </article>
    `}function O(e){const t=e.target.closest(".comment-post__text"),n=t.querySelector(".comment-post__remaining-text");t.classList.contains("comment-post__text_collapsed")?(t.classList.remove("comment-post__text_collapsed"),n.classList.remove("_hidden"),n.classList.add("_visible"),e.target.innerHTML="&nbsp;&nbsp;&nbsp;&#10229; Свернуть"):(t.classList.add("comment-post__text_collapsed"),n.classList.remove("_visible"),n.classList.add("_hidden"),e.target.innerHTML="... Развернуть &#10230;")}function N(e){const t=e.target.closest(".review-post__body"),n=t.querySelector(".review-post__remaining-text");t.classList.contains("review-post__body_collapsed")?(t.classList.remove("review-post__body_collapsed"),n.classList.remove("_hidden"),n.classList.add("_visible"),e.target.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&#10229; Свернуть"):(t.classList.add("review-post__body_collapsed"),n.classList.remove("_visible"),n.classList.add("_hidden"),e.target.innerHTML="... Развернуть &#10230;")}document.addEventListener("click",function(e){e.target.matches(".comment-post__expand-button")?O(e):e.target.matches(".review-post__expand-button")&&N(e)});function T(e,t){t.innerHTML+=e}function K(e,t){const n=document.createElement("div");n.classList.add("reviews-container__total-wrapper","total-wrapper");const s=`
    <div class="total-wrapper__total total">
        <div class="total__count count-text">Всего <span class="count-number count-number_type_all">${e.total}</span></div>
        <div class="total__positive count-text">Положительные <span class="count-number count-number_type_positive">${e.totalPositiveReviews}</span></div>
        <div class="total__neutral count-text">Нейтральные <span class="count-number count-number_type_neutral">${e.totalNeutralReviews}</span></div>
        <div class="total__negative count-text">Отрицательные <span class="count-number count-number_type_negative">${e.totalNegativeReviews}</span></div>
    </div>
    `;t.before(n),n.innerHTML=s}async function U(){try{let e=new URLSearchParams(window.location.search).get("id");const n=await(await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${e}/reviews`,{method:"GET",headers:{"X-API-KEY":"94ca834b-5c22-427c-af84-610eb7685d60","Content-Type":"application/json"}})).json(),s=document.querySelector(".posts-wrapper");if(n.items.length===0){const o=`
            <article class="review-post review-post_no-reviews">
                <h3 class="review-post__title">Пока нет рецензий от зрителей Кинопоиска</h3>
            </article>
            `;s.innerHTML=o}else n.items.forEach(o=>{const i=P(o);T(i,s)}),K(n,s)}catch(e){console.error("%c%s","padding: 0 .5rem; background: #d14758; font: 1.125rem Arial; color: white;",e)}}async function k(){try{let e=new URLSearchParams(window.location.search).get("id");const n=await q("comments","film_id",e);if(n.length===0){const s=document.querySelector(".comments-container"),o=`
            <article class="comments-container__comment-post comment-post сomment-post_no-comments">
                <h3 class="comment-post__title">Будьте первым, кто оставит отзыв!</h3>
                <button class="comment-post__add-btn" id="goToTabThreeBtn">Добавить&nbsp;&#10010;</button>
            </article>
            `;s.innerHTML=o,document.querySelector("#goToTabThreeBtn").addEventListener("click",j)}else{const s=document.querySelector(".comments-container");n.forEach(o=>{const i=F(o);T(i,s)})}}catch(e){console.error("Ошибка при получении данных из БД:",e)}}const G=document.querySelector("#btnCloseRedirectionModal"),E=document.querySelector("#redirectionModal");let f=localStorage.getItem("client");f=f?JSON.parse(f):null;function H(){window.redirectionModal.showModal(),document.body.classList.add("scroll-lock")}function Y(){document.body.classList.remove("scroll-lock")}function X(){window.successModal.showModal(),setTimeout(()=>window.successModal.close(),4e3)}function C(){E.close(),Y()}G.addEventListener("click",C);E.addEventListener("click",W);function W({currentTarget:e,target:t}){t===e&&C()}async function J(e,t,n,s,o,i){const c={};c.title=s,c.text=o,c.date=i,c.name=t,c.user_id=e,c.film_id=n;const r=await A("comments",c);return X(),reviewTitleInput.value="",reviewTextInput.value="",k(),r}async function V(){const e=document.forms.reviewForm,t=e.elements.reviewTitle,n=e.elements.reviewText,s=t.value.trim(),o=n.value.trim();if(o!==""&&f){const i=Date.now(),c=s,r=o;let l=new URLSearchParams(window.location.search).get("id");const m=f.id,u=f.name,d=await J(m,u,l,c,r,i);console.log("Comment added with id:",d)}else f===null&&H()}function Z(){const e=document.querySelector(".review-form");let t;f?t=`
        <div class="review-form__container" id="reviewContainer">
            <h2 class="review-form__title">Оставьте отзыв</h2>
            <p class="review-form__text">Поделитесь своим мнением о фильме</p>
            <form class="comment-form" name="reviewForm" novalidate>
                <div class="comment-form__content-title">
                    <input type="text" name="reviewTitle" class="comment-form__title-input" id="reviewTitle"
                    placeholder="Заголовок">
                </div>
                <div class="comment-form__content-text">
                    <textarea name="reviewText" id="reviewText" rows="15" class="comment-form__text-input"
                    placeholder="Текст отзыва" minlength="8" spellcheck="true" required></textarea>
                    <!-- <p class="error-message"></p> -->
                </div>
                <div class="review-form__btn">
                    <input class="review-form__btn-text" type="submit" name="sendReview" id="btnSendReview"
                    value="Отправить">
                </div>
            </form>
        </div>
        `:t=`
        <div class="review-form__container" id="reviewContainer">
            <h2 class="review-form__title">Вы не вошли на сайт</h2>
            <p class="review-form__text">Авторизуйтесь, чтобы оставить отзыв</p>
            <button class="review-form__auth-redirect-btn btn" id="goToAuthModal">Перейти к форме авторизации</button>
        </div>
        `,e.innerHTML=t,f?reviewForm.addEventListener("submit",n=>{n.preventDefault(),V()}):document.querySelector("#goToAuthModal").addEventListener("click",S)}U();k();Z();let b,v=new URLSearchParams(window.location.search).get("id");document.addEventListener("DOMContentLoaded",async function(){try{const t=await(await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${v}`,{method:"GET",headers:{"X-API-KEY":"94ca834b-5c22-427c-af84-610eb7685d60","Content-Type":"application/json"}})).json();b=t.serial,Q(t)}catch(e){console.error("Error fetching data:",e)}try{const t=await(await fetch(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${v}`,{method:"GET",headers:{"X-API-KEY":"71366ccb-2bd6-4045-b47f-fb75863ae604","Content-Type":"application/json"}})).json();ee(t)}catch(e){console.error("Error fetching data:",e)}if(b==!1)try{const t=await(await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${v}/similars`,{method:"GET",headers:{"X-API-KEY":"8f24ccbd-b43e-481c-914d-439866b4c2a9","Content-Type":"application/json"}})).json();x(t)}catch(e){console.error("Error fetching data:",e)}else{try{const t=await(await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${v}/similars`,{method:"GET",headers:{"X-API-KEY":"8f24ccbd-b43e-481c-914d-439866b4c2a9","Content-Type":"application/json"}})).json();x(t)}catch(e){console.error("Error fetching data:",e)}try{const t=await(await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${v}/seasons`,{method:"GET",headers:{"X-API-KEY":"93a0d256-5519-4fe4-baf9-8f7b6109ae42","Content-Type":"application/json"}})).json();te(t)}catch(e){console.error("Error fetching data:",e)}}try{const t=await(await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${v}/external_sources?page=1`,{method:"GET",headers:{"X-API-KEY":"efb74c12-361f-4478-a2aa-d7214dd21813","Content-Type":"application/json"}})).json();ne(t)}catch(e){console.error("Error fetching data:",e)}});async function z(){let e=!1;const t=window.localStorage.getItem("client");if(t!=null){const n=JSON.parse(t).id;let i=(await R("users",n)).likes[v];e=i||!1}return e}async function Q(e){let t=await z(),n="",s=!0,o="";const i=document.querySelector(".name-ru"),c=document.querySelector(".name-en"),r=document.querySelector(".name-original"),l=document.querySelector(".block-movie__poster"),m=document.querySelector(".block-movie__rating-age-limit"),u=document.querySelector(".block-movie__rating-kinopoisk"),d=document.querySelector(".start-year"),p=document.querySelector(".film-length"),h=document.querySelector(".about"),g=document.querySelector(".countries"),a=document.querySelector(".genres"),w=document.querySelector(".description"),M=document.querySelector(".slogan");i.textContent=e.nameRu,c.textContent=e.nameEn,r.textContent=e.nameOriginal,e.ratingAgeLimits!=null?m.setAttribute("src",`../assets/images/${e.ratingAgeLimits}.svg`):m.setAttribute("class","no-visible"),l.setAttribute("src",e.posterUrl),u.textContent=e.ratingKinopoisk;const I=document.querySelector(".likeIcon");oe(),t&&I.classList.add("liked"),d.textContent=e.year,e.filmLength!==null?p.textContent=String(e.filmLength)+" мин.":p.setAttribute("class","no-visible"),e.slogan!==null&&(M.textContent=e.slogan);for(let _=0;_<e.countries.length;_++)s||(o=", "),n+=o+e.countries[_].country,s=!1;g.textContent=n;let y="",L=!0;o="";for(let _=0;_<e.genres.length;_++)L||(o=", "),y+=o+e.genres[_].genre,L=!1;a.textContent=y,e.serial==!1?h.textContent="О фильме":h.textContent="О сериале",e.description!==0?w.textContent=e.description:w.textContent=e.shotDescription}function ee(e){const t=document.querySelector(".director"),n=document.querySelector(".actor");let s="",o=!0,i="",c=!0,r="",l="",m=[];const u=e.filter(a=>a.professionKey=="DIRECTOR"),d=e.filter(a=>a.professionKey=="ACTOR"),p=document.getElementById("actors-photos");let h,g;for(let a=0;a<u.length&&(o||(r=", "),s+=r+u[a].nameRu,o=!1,a!=3);a++);t.textContent=s;for(let a=0;a<d.length&&(c||(l=", "),i+=l+d[a].nameRu,m[a]=d[a].posterUrl,c=!1,a!=4);a++);n.textContent=i;for(let a=0;a<m.length;a++)h=m[a],g=document.createElement("img"),g.src=h,p.append(g),g.classList.add("tiny-pict")}function x(e){const t=document.querySelector(".similar-movies__title");if(e.items.length!==0){b==!1?t.textContent="Похожие фильмы":t.textContent="Похожие сериалы",document.querySelector(".similar-movies");const n=document.getElementById("posters-contanier");let s,o,i,c;for(let r=0;r<e.items.length&&(s=e.items[r],i=document.createElement("a"),o=document.createElement("img"),o.src=s.posterUrl,i.setAttribute("href","/page-movie.html?id="+s.filmId),n.append(i),i.append(o),o.classList.add("small-pict"),r!=3);r++);if(e.items.length>=4){let r=!0;const l=document.getElementById("more-posters-contanier"),m=document.querySelector(".similar-movies__container");document.querySelector(".similar-movies__container-wrapper"),c=document.createElement("button"),c.textContent="Еще похожие",c.classList.add("btn-more-similar"),c.classList.add("btn"),m.append(c),document.querySelector(".btn-more-similar").addEventListener("click",function(){if(r){for(let d=4;d<e.items.length;d++)s=e.items[d],i=document.createElement("a"),o=document.createElement("img"),o.src=s.posterUrl,i.setAttribute("href","/page-movie.html?id="+s.filmId),l.append(i),i.append(o),o.classList.add("small-pict");c.textContent="Скрыть",r=!1}else l.classList.toggle("no-visible"),l.classList.contains("no-visible")?c.textContent="Еще похожие":c.textContent="Скрыть"})}}else t.textContent="",document.querySelector(".similar-movies").classList.toggle("no-visible")}function te(e){if(e.items.length!==0){document.querySelector(".block-movie__seasons-wrapper").classList.toggle("no-visible");const n=document.getElementById("seasons");let s,o,i,c,r,l,m,u;for(let d=0;d<e.items.length;d++){s=e.items[d],l=document.createElement("details"),o=document.createElement("summary"),o.classList.add("titleSeason"),o.textContent="СЕЗОН "+Number(d+1),l.append(o),m=document.createElement("div"),m.classList.add("episod-container"),l.append(m);for(let p=0;p<s.episodes.length;p++)r=s.episodes[p],u=document.createElement("div"),u.classList.add("episod-wrapper"),i=document.createElement("div"),i.classList.add("title-episod"),i.textContent=`СЕРИЯ ${Number(p+1)}. ${r.nameRu?r.nameRu:r.nameEn?r.nameEn:""}`,u.append(i),c=document.createElement("p"),c.classList.add("episod"),c.textContent=`${r.synopsis?r.synopsis:""}`,u.append(c),m.append(u);n.append(l)}}}function ne(e){if(e.items.length!==0){const t=document.getElementById("external-sources");let n,s,o;for(let i=0;i<e.items.length&&(n=e.items[i],o=document.createElement("a"),s=document.createElement("img"),s.classList.add("small-icon"),s.src=n.logoUrl,o.setAttribute("href",n.url),o.setAttribute("target","_blank"),t.append(o),o.append(s),i!=4);i++);}else document.querySelector(".movie-sources").classList.toggle("no-visible")}function oe(){document.querySelector(".likeBtn").addEventListener("click",function(e){e.preventDefault(),S();const t=document.querySelector(".likeIcon"),n=window.localStorage.getItem("client"),s=JSON.parse(n).id;t.classList.toggle("liked"),$(s,v,t.classList.contains("liked"))})}