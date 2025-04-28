import{_ as C,r as a,c as n,a as e,b as m,d as s,w as v,T as g,o,n as j,t as b,e as t}from"./index-BtLGl_CC.js";const M={class:"min-h-screen w-svw flex flex-col items-center justify-center bg-gradient-to-b from-yellow-200 via-yellow-100 to-white p-4 relative overflow-hidden"},z={class:"text-center max-w-sm w-full"},F={key:0,class:"text-3xl font-bold mb-6 text-yellow-600"},I={key:1,class:"relative flex flex-col items-center mb-6 h-[400px] overflow-visible"},N={key:0,class:"flex flex-col items-center space-y-4"},T={class:"absolute w-full h-full rounded-lg shadow-lg backface-hidden overflow-hidden"},V=["src"],B={class:"absolute w-full h-full rounded-lg shadow-lg backface-hidden bg-white transform rotateY-180 p-4 flex flex-col justify-around"},D={class:"text-yellow-700 font-bold text-lg mb-2"},R={class:"text-gray-700 whitespace-pre-line text-md leading-relaxed"},Y={class:"text-right text-[1rem] text-gray-500 mt-2"},A={key:0,class:"text-yellow-600 mt-8 font-bold text-[1.5rem] animate-fadein-up"},E={key:2,class:"relative flex justify-center items-center mt-24"},S={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},q={__name:"DrawFortune",setup(G){const r=a(!1),i=a(!1),d=a(!1),f=a(!1),u=a({}),w=a(""),h=[{title:"🌻 最幸福的人 🌻",content:`當我的心對別人
所做的一切感到麻木的時候，
是自己的心變冷酷了吧？

心變冷了，自己會幸福嗎？
絕對不會。

心裡裝著滿滿的感恩的人，
是最幸福的。`,source:"出處《希望新生》"},{title:"🌻 讚美是最簡單的心鑰 🌻",content:`其實跟別人說幾句讚美的話，
他就開心了，
但我們總把事情搞得太複雜，
不會用非常簡單的方式處理。`,source:"出處《希望新生》"},{title:"🌻 凡事都從「好」處看 🌻",content:`養成一種習慣，
一看就會看到別人哪裡好、
哪裡善良、
哪裡無私、今天幫忙多少人，

都從這樣的角度去看待別人，
沿著這樣的方向，
假以時日自己就會體會到越來
越多的幸福感。`,source:"出處《希望新生》"},{title:"🌻 慈悲心就是幸福 🌻",content:`慈悲心是幸福的──

你對別人慈悲，
結果自己會覺得幸福，
很像「予人玫瑰，手留餘香」的感覺。

所以一定要學會
對家人、周圍的人多生慈悲心，
多表達自己的感恩心。`,source:"出處《希望新生》"}],p=["./img/fortune1.png","./img/fortune2.png","./img/fortune3.png","./img/fortune4.png","./img/fortune5.jpg","./img/fortune6.png","./img/fortune7.png","./img/fortune8.png","./img/fortune9.png","./img/fortune10.png"],x=()=>{r.value=!0,i.value=!1,d.value=!1,setTimeout(()=>{const c=Math.floor(Math.random()*h.length);u.value=h[c];const l=Math.floor(Math.random()*p.length);w.value=p[l],r.value=!1,i.value=!0},3e3)},y=()=>{d.value=!0},_=()=>{f.value=!0},k=()=>{f.value=!1};return(c,l)=>(o(),n("div",M,[e("div",z,[!r.value&&!i.value&&!c.showResult?(o(),n("h1",F,"🌟 靈籤祈願 🌟 ")):s("",!0),r.value?(o(),n("div",I,l[0]||(l[0]=[e("div",{class:"relative perspective w-4/6 h-[22rem]"},[e("div",{class:"w-full h-full rounded-lg shadow-lg transform animate-fly-flip overflow-hidden bg-cover bg-center relative",style:{"background-image":"url('./img/flycard-default.png')"}},[e("div",{class:"absolute inset-0 rounded-lg bg-white opacity-20 pointer-events-none animate-glow"})])],-1)]))):s("",!0),m(g,{name:"fade"},{default:v(()=>[i.value?(o(),n("div",N,[e("div",{class:"relative perspective w-5/6 h-[28rem]",onClick:y},[e("div",{class:j(["w-full h-full transition-transform duration-700 transform-style preserve-3d",{"rotateY-180":d.value}])},[e("div",T,[e("img",{src:w.value,class:"w-full h-full object-cover"},null,8,V)]),e("div",B,[e("div",D,b(u.value.title),1),e("div",R,b(u.value.content),1),e("div",Y,b(u.value.source),1)])],2)]),d.value?s("",!0):(o(),n("div",A," 請點擊卡片翻開查看籤文 ")),d.value?(o(),n("button",{key:1,onClick:_,class:"mt-10 px-6 py-3 bg-amber-600 text-white rounded-full font-bold hover:bg-amber-500 transition"}," 💌 送出我的感恩祝福 ")):s("",!0)])):s("",!0)]),_:1}),!r.value&&!i.value&&!c.showResult?(o(),n("div",E,[l[1]||(l[1]=e("span",{class:"absolute size-24 rounded-full bg-yellow-400 opacity-40 animate-ping-slow"},null,-1)),e("button",{onClick:x,class:"size-24 shadow-md bg-yellow-500 text-white rounded-full font-bold text-[1.3rem] z-10 flex items-center justify-center hover:bg-yellow-600 transition"}," 許願 ")])):s("",!0)]),m(g,{name:"fade"},{default:v(()=>[f.value?(o(),n("div",S,[m(g,{name:"zoom-fade"},{default:v(()=>[e("div",{class:"bg-white rounded-xl shadow-2xl p-5 max-w-md w-11/12 relative"},[l[2]||(l[2]=e("h2",{class:"text-2xl font-bold text-pink-500 mb-2 text-center"},"🌸【母親節卡片傳恩情】🌸",-1)),l[3]||(l[3]=e("p",{class:"text-gray-700 whitespace-pre-line leading-relaxed text-left text-sm"},[t(" 國北福青社邀你一起傳遞溫暖與感謝 💌"),e("br"),t(" 母親節快到了，還在想要怎麼表達對媽媽的愛嗎？"),e("br"),t(" 來福青社的卡片傳恩情活動，親手寫下感謝的話語，讓愛不只放在心裡！"),e("br"),e("br"),t(" 📍實體擺攤"),e("br"),t(" 🗓️ 4/30（三）、5/1（四）"),e("br"),t(" 🕛 中午12:10 - 13:20"),e("br"),t(" 📌 活動中心一樓學餐前"),e("br"),t(" 我們準備了多款精美卡片，歡迎來挑選寫卡～我們還會幫你免費寄送喔！"),e("br"),e("br"),t(" 📍無人攤位（自助式）"),e("br"),t(" 🗓️ 4/24（四）～5/6（二）"),e("br"),t(" 📌 國北圖書館一樓 （借還書櫃檯旁邊）"),e("br"),e("br"),t(" 害羞不敢來攤位？這裡也能自由拿卡片，隨時傳遞你的心意！"),e("br"),t(" 讓我們用一張卡片，說出一聲「謝謝你，媽媽」❤️ ")],-1)),e("button",{onClick:k,class:"mt-6 w-full bg-yellow-400 text-white font-bold py-2 rounded-full hover:bg-yellow-500 transition"}," 關閉 ")])]),_:1})])):s("",!0)]),_:1})]))}},J=C(q,[["__scopeId","data-v-75dcafc5"]]);export{J as default};
