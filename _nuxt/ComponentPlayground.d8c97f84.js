import{u as m}from"./asyncData.4f73c8d6.js";import{N as c,J as p,d as i,ae as u,r as l,O as n,k as d}from"./entry.9c06bbb8.js";import f from"./Ellipsis.28dd523a.js";import _ from"./ComponentPlaygroundData.4473637d.js";import"./TabsHeader.f4259f7d.js";import"./ComponentPlaygroundProps.6934365a.js";import"./ProseH4.06b32d17.js";import"./ProseCodeInline.de7e6d5c.js";import"./Badge.de1541eb.js";import"./MDCSlot.dd4a4dfe.js";import"./slot.a24769a8.js";import"./ProseP.9b35bb41.js";import"./index.8d6c48c4.js";import"./ComponentPlaygroundSlots.vue.2e6c39d1.js";import"./ComponentPlaygroundTokens.vue.923b6aa7.js";async function y(o){const t=c(o);{const{data:e}=await m(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>e.value)}}const g=i({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),e=l({...o.props}),r=await y(o.component);return{as:t,formProps:e,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((e,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");e[s]=a}return e},{});return n("div",{class:"component-playground"},[n("div",{class:"component-playground-wrapper"},[n(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),n(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),n(_,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":e=>o.formProps=e})])}});const E=d(g,[["__scopeId","data-v-1cd0b156"]]);export{E as default};