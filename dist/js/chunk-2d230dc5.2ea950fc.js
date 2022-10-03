(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230dc5"],{eda1:function(e,t,n){"use strict";n.r(t);var c=n("7a23");const o=Object(c["createElementVNode"])("div",{class:"mb-10"},[Object(c["createElementVNode"])("h1",{class:"anchor fw-bolder mb-5"},[Object(c["createElementVNode"])("a",{href:"#switch"}),Object(c["createTextVNode"])(" Switch ")]),Object(c["createElementVNode"])("div",{class:"py-5"}," Switch is used for switching between two opposing states. ")],-1);function a(e,t,n,a,l,r){const d=Object(c["resolveComponent"])("EUIBasicUsage"),i=Object(c["resolveComponent"])("EUITextDescription"),s=Object(c["resolveComponent"])("EUIExtendedValueTypes"),u=Object(c["resolveComponent"])("EUIDisabled"),b=Object(c["resolveComponent"])("EUILoading");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[o,Object(c["createVNode"])(d),Object(c["createVNode"])(i),Object(c["createVNode"])(s),Object(c["createVNode"])(u),Object(c["createVNode"])(b)],64)}var l=n("4fb2");const r={class:"mb-10"},d=Object(c["createElementVNode"])("h2",{class:"anchor fw-bolder mb-5"},[Object(c["createElementVNode"])("a",{href:"#basic-usage"}),Object(c["createTextVNode"])(" Basic usage ")],-1),i={class:"rounded border p-10"};function s(e,t,n,o,a,l){const s=Object(c["resolveComponent"])("el-switch"),u=Object(c["resolveComponent"])("CodeHighlighter");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",r,[d,Object(c["createElementVNode"])("div",i,[Object(c["createVNode"])(s,{style:{"margin-right":"5px"},modelValue:e.value1,"onUpdate:modelValue":t[0]||(t[0]=t=>e.value1=t)},null,8,["modelValue"]),Object(c["createVNode"])(s,{modelValue:e.value2,"onUpdate:modelValue":t[1]||(t[1]=t=>e.value2=t),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"]),Object(c["createVNode"])(u,{lang:"html"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.code1),1)]),_:1})])])}var u=n("8e21"),b='<el-switch v-model="value1">\n</el-switch>\n<el-switch\n  v-model="value2"\n  active-color="#13ce66"\n  inactive-color="#ff4949">\n</el-switch>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: true,\n        value2: true\n      }\n    }\n  };\n<\/script>',v='<el-switch\n  v-model="value1"\n  active-text="Pay by month"\n  inactive-text="Pay by year">\n</el-switch>\n<el-switch\n  style="display: block"\n  v-model="value2"\n  active-color="#13ce66"\n  inactive-color="#ff4949"\n  active-text="Pay by month"\n  inactive-text="Pay by year">\n</el-switch>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: true,\n        value2: true\n      }\n    }\n  };\n<\/script>',m='<el-tooltip :content="\'Switch value: \' + value" placement="top">\n  <el-switch\n    v-model="value"\n    active-color="#13ce66"\n    inactive-color="#ff4949"\n    active-value="100"\n    inactive-value="0">\n  </el-switch>\n</el-tooltip>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: \'100\'\n      }\n    }\n  };\n<\/script>',p='<el-switch\n  v-model="value1"\n  disabled>\n</el-switch>\n<el-switch\n  v-model="value2"\n  disabled>\n</el-switch>\n\n<script>\n  export default {\n    data() {\n      return {\n        value1: true,\n        value2: false\n      }\n    }\n  };\n<\/script>',j='<el-switch\n  v-model="value1"\n  loading>\n</el-switch>\n<el-switch\n  v-model="value2"\n  loading>\n</el-switch>\n<script>\n  export default {\n    data() {\n      return {\n        value1: true,\n        value2: false\n      }\n    }\n  };\n<\/script>',O=Object(c["defineComponent"])({name:"basic-usage",data(){return{value1:!0,value2:!0}},components:{CodeHighlighter:u["a"]},setup(){return{code1:b}}}),h=n("d959"),V=n.n(h);const g=V()(O,[["render",s]]);var f=g;const w={class:"mb-10"},N=Object(c["createElementVNode"])("h2",{class:"anchor fw-bolder mb-5"},[Object(c["createElementVNode"])("a",{href:"#text-description"}),Object(c["createTextVNode"])(" Text description ")],-1),x={class:"rounded border p-10"};function y(e,t,n,o,a,l){const r=Object(c["resolveComponent"])("el-switch"),d=Object(c["resolveComponent"])("CodeHighlighter");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",w,[N,Object(c["createElementVNode"])("div",x,[Object(c["createVNode"])(r,{style:{"margin-bottom":"5px"},modelValue:e.value1,"onUpdate:modelValue":t[0]||(t[0]=t=>e.value1=t),"active-text":"Pay by month","inactive-text":"Pay by year"},null,8,["modelValue"]),Object(c["createVNode"])(r,{style:{display:"block"},modelValue:e.value2,"onUpdate:modelValue":t[1]||(t[1]=t=>e.value2=t),"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"Pay by month","inactive-text":"Pay by year"},null,8,["modelValue"]),Object(c["createVNode"])(d,{lang:"html"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.code2),1)]),_:1})])])}var C=Object(c["defineComponent"])({name:"text-description",data(){return{value1:!0,value2:!0}},components:{CodeHighlighter:u["a"]},setup(){return{code2:v}}});const E=V()(C,[["render",y]]);var U=E;const k={class:"mb-10"},T=Object(c["createElementVNode"])("h2",{class:"anchor fw-bolder mb-5"},[Object(c["createElementVNode"])("a",{href:"#extended-value-types"}),Object(c["createTextVNode"])(" Extended value types ")],-1),B={class:"rounded border p-10"};function D(e,t,n,o,a,l){const r=Object(c["resolveComponent"])("el-switch"),d=Object(c["resolveComponent"])("el-tooltip"),i=Object(c["resolveComponent"])("CodeHighlighter");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",k,[T,Object(c["createElementVNode"])("div",B,[Object(c["createVNode"])(d,{content:"Switch value: "+e.value,placement:"top"},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(r,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=t=>e.value=t),"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"100","inactive-value":"0"},null,8,["modelValue"])]),_:1},8,["content"]),Object(c["createVNode"])(i,{lang:"html"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.code3),1)]),_:1})])])}var H=Object(c["defineComponent"])({name:"extended-value-types",data(){return{value:"100"}},components:{CodeHighlighter:u["a"]},setup(){return{code3:m}}});const I=V()(H,[["render",D]]);var S=I;const P={class:"mb-10"},_=Object(c["createElementVNode"])("h2",{class:"anchor fw-bolder mb-5"},[Object(c["createElementVNode"])("a",{href:"#disabled"}),Object(c["createTextVNode"])(" Disabled ")],-1),L={class:"rounded border p-10"};function J(e,t,n,o,a,l){const r=Object(c["resolveComponent"])("el-switch"),d=Object(c["resolveComponent"])("CodeHighlighter");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",P,[_,Object(c["createElementVNode"])("div",L,[Object(c["createVNode"])(r,{style:{"margin-right":"5px"},modelValue:e.value1,"onUpdate:modelValue":t[0]||(t[0]=t=>e.value1=t),disabled:""},null,8,["modelValue"]),Object(c["createVNode"])(r,{modelValue:e.value2,"onUpdate:modelValue":t[1]||(t[1]=t=>e.value2=t),disabled:""},null,8,["modelValue"]),Object(c["createVNode"])(d,{lang:"html"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.code4),1)]),_:1})])])}var F=Object(c["defineComponent"])({name:"disabled",data(){return{value1:!0,value2:!1}},components:{CodeHighlighter:u["a"]},setup(){return{code4:p}}});const q=V()(F,[["render",J]]);var z=q;const A={class:"mb-10"},G=Object(c["createElementVNode"])("h2",{class:"anchor fw-bolder mb-5"},[Object(c["createElementVNode"])("a",{href:"#loading"}),Object(c["createTextVNode"])(" Loading ")],-1),K={class:"rounded border p-10"};function M(e,t,n,o,a,l){const r=Object(c["resolveComponent"])("el-switch"),d=Object(c["resolveComponent"])("CodeHighlighter");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",A,[G,Object(c["createElementVNode"])("div",K,[Object(c["createVNode"])(r,{style:{"margin-right":"5px"},modelValue:e.value1,"onUpdate:modelValue":t[0]||(t[0]=t=>e.value1=t),loading:""},null,8,["modelValue"]),Object(c["createVNode"])(r,{modelValue:e.value2,"onUpdate:modelValue":t[1]||(t[1]=t=>e.value2=t),loading:""},null,8,["modelValue"]),Object(c["createVNode"])(d,{lang:"html"},{default:Object(c["withCtx"])(()=>[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.code5),1)]),_:1})])])}var Q=Object(c["defineComponent"])({name:"loading",data(){return{value1:!0,value2:!1}},components:{CodeHighlighter:u["a"]},setup(){return{code5:j}}});const R=V()(Q,[["render",M]]);var W=R,X=Object(c["defineComponent"])({name:"switch",components:{EUIBasicUsage:f,EUITextDescription:U,EUIExtendedValueTypes:S,EUIDisabled:z,EUILoading:W},setup(){Object(l["b"])("Switch")}});const Y=V()(X,[["render",a]]);t["default"]=Y}}]);
//# sourceMappingURL=chunk-2d230dc5.2ea950fc.js.map