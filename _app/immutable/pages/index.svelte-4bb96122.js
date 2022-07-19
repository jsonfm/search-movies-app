import{S as F,i as G,s as H,K as L,l as f,a as y,u as M,L as K,m,h as c,c as I,p as k,v as N,q as i,F as u,b as P,M as R,N as B,n as D,w as V,e as T,O as J,P as j}from"../chunks/index-e1cc1dfa.js";class Q{constructor(t="http://www.omdbapi.com",e="6efd9b42"){this.urlbase=t,this.key=e,this.url=`${this.urlbase}/?apikey=${e}`}async searchMovie(t=""){const e=`${this.url}&s=${t}`;return await fetch(e).then(s=>s.json()).then(s=>s.Search)}}function O(o,t,e){const l=o.slice();return l[5]=t[e],l}function W(o){let t,e=o[8].message+"",l;return{c(){t=f("p"),l=M(e)},l(s){t=m(s,"P",{});var a=k(t);l=N(a,e),a.forEach(c)},m(s,a){P(s,t,a),u(t,l)},p(s,a){a&1&&e!==(e=s[8].message+"")&&V(l,e)},d(s){s&&c(t)}}}function X(o){let t,e=o[4],l=[];for(let a=0;a<e.length;a+=1)l[a]=Y(O(o,e,a));let s=null;return e.length||(s=U()),{c(){for(let a=0;a<l.length;a+=1)l[a].c();t=T(),s&&s.c()},l(a){for(let r=0;r<l.length;r+=1)l[r].l(a);t=T(),s&&s.l(a)},m(a,r){for(let n=0;n<l.length;n+=1)l[n].m(a,r);P(a,t,r),s&&s.m(a,r)},p(a,r){if(r&1){e=a[4];let n;for(n=0;n<e.length;n+=1){const _=O(a,e,n);l[n]?l[n].p(_,r):(l[n]=Y(_),l[n].c(),l[n].m(t.parentNode,t))}for(;n<l.length;n+=1)l[n].d(1);l.length=e.length,!e.length&&s?s.p(a,r):e.length?s&&(s.d(1),s=null):(s=U(),s.c(),s.m(t.parentNode,t))}},d(a){J(l,a),a&&c(t),s&&s.d(a)}}}function U(o){let t,e;return{c(){t=f("div"),e=M("Something was wrong"),this.h()},l(l){t=m(l,"DIV",{class:!0});var s=k(t);e=N(s,"Something was wrong"),s.forEach(c),this.h()},h(){i(t,"class","my-12 font-bold")},m(l,s){P(l,t,s),u(t,e)},p:D,d(l){l&&c(t)}}}function Y(o){let t,e,l,s,a,r=o[5].Title+"",n,_,p,w=o[5].Year+"",g,E;return{c(){t=f("div"),e=f("img"),s=y(),a=f("p"),n=M(r),_=y(),p=f("p"),g=M(w),E=y(),this.h()},l(v){t=m(v,"DIV",{class:!0});var h=k(t);e=m(h,"IMG",{src:!0,alt:!0,class:!0,loading:!0}),s=I(h),a=m(h,"P",{class:!0});var d=k(a);n=N(d,r),d.forEach(c),_=I(h),p=m(h,"P",{});var b=k(p);g=N(b,w),b.forEach(c),E=I(h),h.forEach(c),this.h()},h(){j(e.src,l=o[5].Poster)||i(e,"src",l),i(e,"alt","Poster"),i(e,"class","h-64"),i(e,"loading","lazy"),i(a,"class","mt-4 font-semibold"),i(t,"class","p-4 flex flex-col items-center ease-in-out duration-100")},m(v,h){P(v,t,h),u(t,e),u(t,s),u(t,a),u(a,n),u(t,_),u(t,p),u(p,g),u(t,E)},p(v,h){h&1&&!j(e.src,l=v[5].Poster)&&i(e,"src",l),h&1&&r!==(r=v[5].Title+"")&&V(n,r),h&1&&w!==(w=v[5].Year+"")&&V(g,w)},d(v){v&&c(t)}}}function Z(o){let t,e=o[1].length>3&&z();return{c(){e&&e.c(),t=T()},l(l){e&&e.l(l),t=T()},m(l,s){e&&e.m(l,s),P(l,t,s)},p(l,s){l[1].length>3?e||(e=z(),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},d(l){e&&e.d(l),l&&c(t)}}}function z(o){let t,e,l;return{c(){t=f("div"),e=f("span"),l=M("..."),this.h()},l(s){t=m(s,"DIV",{class:!0,role:!0});var a=k(t);e=m(a,"SPAN",{class:!0});var r=k(e);l=N(r,"..."),r.forEach(c),a.forEach(c),this.h()},h(){i(e,"class","visually-hidden"),i(t,"class","mx-auto spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full m-12"),i(t,"role","status")},m(s,a){P(s,t,a),u(t,e),u(e,l)},d(s){s&&c(t)}}}function ee(o){let t,e,l,s,a,r,n,_,p,w,g,E,v,h,d={ctx:o,current:null,token:null,hasCatch:!0,pending:Z,then:X,catch:W,value:4,error:8};return L(E=o[0],d),{c(){t=f("meta"),e=y(),l=f("section"),s=f("div"),a=f("div"),r=f("p"),n=M("Look for a movie \u{1F37F}"),_=y(),p=f("input"),w=y(),g=f("div"),d.block.c(),this.h()},l(b){const x=K('[data-svelte="svelte-t32ptj"]',document.head);t=m(x,"META",{name:!0,content:!0}),x.forEach(c),e=I(b),l=m(b,"SECTION",{class:!0});var C=k(l);s=m(C,"DIV",{class:!0});var q=k(s);a=m(q,"DIV",{class:!0});var S=k(a);r=m(S,"P",{class:!0});var $=k(r);n=N($,"Look for a movie \u{1F37F}"),$.forEach(c),_=I(S),p=m(S,"INPUT",{class:!0,type:!0,placeholder:!0}),w=I(S),g=m(S,"DIV",{class:!0});var A=k(g);d.block.l(A),A.forEach(c),S.forEach(c),q.forEach(c),C.forEach(c),this.h()},h(){document.title="Home",i(t,"name","description"),i(t,"content","Svelte demo app"),i(r,"class","text-2xl mb-5"),i(p,"class","px-5 py-2 rounded-full max-w-[400px] w-80 text-blue-600 font-bold focus:border-blue-500 mb-5"),i(p,"type","search"),i(p,"placeholder","Spiderman, Alien, Matrix, etc ..."),i(g,"class","grid md:grid-cols-2 lg:grid-cols-3 place-content-center"),i(a,"class","mx-auto flex flex-col items-center"),i(s,"class","max-w-[1024px] mx-auto mt-12 py-5"),i(l,"class","min-h-screen")},m(b,x){u(document.head,t),P(b,e,x),P(b,l,x),u(l,s),u(s,a),u(a,r),u(r,n),u(a,_),u(a,p),u(a,w),u(a,g),d.block.m(g,d.anchor=null),d.mount=()=>g,d.anchor=null,v||(h=R(p,"input",o[2]),v=!0)},p(b,[x]){o=b,d.ctx=o,x&1&&E!==(E=o[0])&&L(E,d)||B(d,o,x)},i:D,o:D,d(b){c(t),b&&c(e),b&&c(l),d.block.d(),d.token=null,d=null,v=!1,h()}}}const se=!0;function te(o,t,e){let l=new Q,s=l.searchMovie(),a="";return[s,a,n=>{const _=n.target;_&&(e(1,a=_.value),a.length>3?e(0,s=l.searchMovie(a)):e(0,s=new Promise(p=>[])))}]}class ae extends F{constructor(t){super(),G(this,t,te,ee,H,{})}}export{ae as default,se as prerender};
