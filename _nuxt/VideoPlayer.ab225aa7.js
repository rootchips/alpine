import{d as _,J as i,r as m,b as o,c,N as e,X as f,f as u,F as v,Z as h,n as k,a1 as b,p as g,i as w,e as x,k as B}from"./entry.1b08dd6b.js";const I=t=>(g("data-v-dc877b94"),t=t(),w(),t),S={key:1,class:"loaded"},V=["poster"],C=["src"],N=["src","type"],$=["autoplay","src"],P=I(()=>x("button",null,null,-1)),E=[P],F=_({__name:"VideoPlayer",props:{poster:{type:String,default:""},src:{type:String,default:""},sources:{type:Array,default:()=>[]},autoplay:{type:Boolean,default:!1}},setup(t){const r=t,a=i(()=>{if(r.src&&r.src.includes("youtube.com/watch")){const s=r.src.match(/\?v=([^&]*)/);return{name:"youtube",src:`https://www.youtube-nocookie.com/embed/${(s==null?void 0:s[1])||""}?autoplay=1`,poster:r.poster||`https://i3.ytimg.com/vi/${(s==null?void 0:s[1])||""}/hqdefault.jpg`}}}),d=m(!1);if(!r.src&&!r.sources.length)throw new Error("VideoPlayer: you need to provide either `src` or `sources` props");const p=i(()=>{var s,l;return r.src||((l=(s=r.sources)==null?void 0:s[0])==null?void 0:l.src)||!1});return(s,l)=>{const y=b;return o(),c("div",{class:k(["video-player",{loaded:e(d)}])},[(e(a)?e(a).poster:t.poster)?(o(),f(y,{key:0,src:e(a)?e(a).poster:t.poster},null,8,["src"])):u("",!0),e(d)?(o(),c("div",S,[e(a)?e(a).name==="youtube"?(o(),c("iframe",{key:1,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true",autoplay:t.autoplay,src:e(a).src},null,8,$)):u("",!0):(o(),c("video",{key:0,poster:t.poster,controls:"",autoplay:""},[e(p)?(o(),c("source",{key:0,src:e(p)},null,8,C)):u("",!0),(o(!0),c(v,null,h(t.sources,n=>(o(),c("source",{key:n.src||n,src:n.src||n,type:n.type},null,8,N))),128))],8,V))])):u("",!0),e(d)?u("",!0):(o(),c("div",{key:2,class:"play-button",onClick:l[0]||(l[0]=n=>d.value=!0)},E))],2)}}});const q=B(F,[["__scopeId","data-v-dc877b94"]]);export{q as default};
