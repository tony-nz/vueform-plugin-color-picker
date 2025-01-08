/*!
 * Vueform ColorPicker Plugin v1.0.0 (https://github.com/tony-nz/vueform-plugin-color-picker)
 * Copyright (c) 2025-present Tony Myers <tony@myers.co.nz>
 * Licensed under the MIT License
 */

import{computed as e,ref as a,onMounted as l,watch as u}from"vue";var t=(t={})=>({apply:["TextElement"],props:{colorFormat:{type:String,default:null,validator:e=>["hex","rgb","hsl"].includes(e)}},setup(t,r,v){const o=e((()=>t.colorFormat||r.attrs.colorFormat)),{value:n,el$:p,input:s}=v,i=a(n.value||"#000000"),c=e((()=>{switch(o.value){case"rgb":return f(i.value);case"hsl":return h(i.value);default:return i.value}})),d=e=>{m(e)&&(i.value=e,n.value=c.value)},m=e=>"hex"!==o.value||/^#[0-9A-Fa-f]{6}$/.test(e),f=e=>e,h=e=>e;return l((()=>{p.value&&p.value.input&&o.value&&(p.value.input.type="color",p.value.input.value=i.value,p.value.input.addEventListener("input",(e=>d(e.target.value))))})),u(n,(e=>{e!==c.value&&o.value&&d(e)})),{...v,currentColor:i,formattedColor:c,updateColor:d}}});export{t as default};
