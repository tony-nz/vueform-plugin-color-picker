/*!
 * Vueform ColorPicker Plugin v1.0.0 (https://github.com/tony-nz/vueform-plugin-color-picker)
 * Copyright (c) 2025-present Tony Myers <tony@myers.co.nz>
 * Licensed under the MIT License
 */

import{toRefs as e,ref as u,computed as a,onMounted as t,watch as l}from"vue";var r=r=>({apply:["TextElement"],props:{colorFormat:{type:String,default:"hex",validator:e=>["hex","rgb","hsl"].includes(e)}},setup(r,v,o){const{colorFormat:n}=e(r),{value:p,el$:i,input:s}=o,c=u(p.value||"#000000"),d=a((()=>{switch(n.value){case"rgb":return m(c.value);case"hsl":return x(c.value);default:return c.value}})),f=e=>{h(e)&&(c.value=e,p.value=d.value)},h=e=>"hex"!==n.value||/^#[0-9A-Fa-f]{6}$/.test(e),m=e=>e,x=e=>e;return t((()=>{i.value&&i.value.input&&(i.value.input.type="color",i.value.input.value=c.value,i.value.input.addEventListener("input",(e=>f(e.target.value))))})),l(p,(e=>{e!==d.value&&f(e)})),{...o,currentColor:c,formattedColor:d,updateColor:f}}});export{r as default};
