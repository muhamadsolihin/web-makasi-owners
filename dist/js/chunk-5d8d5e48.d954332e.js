(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d8d5e48"],{"36c8":function(e,t,n){"use strict";n("6364")},6364:function(e,t,n){},f5cf:function(e,t,n){"use strict";n.r(t);var a=n("7a23");const o=Object(a["createElementVNode"])("div",{class:"mb-10"},[Object(a["createElementVNode"])("h1",{class:"anchor fw-bolder mb-5"},[Object(a["createElementVNode"])("a",{href:"#skeleton"}),Object(a["createTextVNode"])(" Skeleton ")]),Object(a["createElementVNode"])("div",{class:"py-5"},[Object(a["createTextVNode"])(" When loading data, and you need a rich experience for visual and interactions for your end users, you can choose "),Object(a["createElementVNode"])("code",null,"skeleton"),Object(a["createTextVNode"])(". ")])],-1);function c(e,t,n,c,l,i){const r=Object(a["resolveComponent"])("EUIBasicUsage"),d=Object(a["resolveComponent"])("EUIConfigurableRows"),s=Object(a["resolveComponent"])("EUIAnimation"),m=Object(a["resolveComponent"])("EUICustomizedTemplate"),b=Object(a["resolveComponent"])("EUILoadingState"),p=Object(a["resolveComponent"])("EUIRenderingAListOfData"),h=Object(a["resolveComponent"])("EUIAvoidingRenderingBouncing");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[o,Object(a["createVNode"])(r),Object(a["createVNode"])(d),Object(a["createVNode"])(s),Object(a["createVNode"])(m),Object(a["createVNode"])(b),Object(a["createVNode"])(p),Object(a["createVNode"])(h)],64)}var l=n("4fb2");const i={class:"mb-10"},r=Object(a["createElementVNode"])("h2",{class:"anchor fw-bolder mb-5"},[Object(a["createElementVNode"])("a",{href:"#basic-usage"}),Object(a["createTextVNode"])(" Basic usage ")],-1),d=Object(a["createElementVNode"])("div",{class:"py-5"}," The basic skeleton. ",-1),s={class:"rounded border p-10"};function m(e,t,n,o,c,l){const m=Object(a["resolveComponent"])("el-skeleton"),b=Object(a["resolveComponent"])("CodeHighlighter");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",i,[r,d,Object(a["createElementVNode"])("div",s,[Object(a["createVNode"])(m),Object(a["createVNode"])(b,{lang:"html"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.code1),1)]),_:1})])])}var b=n("8e21"),p="<template>\n  <el-skeleton />\n</template>",h='<el-skeleton :rows="5" />',g='<el-skeleton :rows="5" animated />',j='<template>\n  <el-skeleton style="width: 240px">\n    <template #template>\n      <el-skeleton-item variant="image" style="width: 240px; height: 240px;" />\n      <div style="padding: 14px;">\n        <el-skeleton-item variant="p" style="width: 50%" />\n        <div\n          style="display: flex; align-items: center; justify-content: space-between;"\n        >\n          <el-skeleton-item variant="text" style="margin-right: 16px;" />\n          <el-skeleton-item variant="text" style="width: 30%;" />\n        </div>\n      </div>\n    </template>\n  </el-skeleton>\n</template>',O='<template>\n  <el-space direction="vertical" alignment="flex-start">\n    <div>\n      <label style="margin-right: 16px;">Switch Loading</label>\n      <el-switch v-model="loading" />\n    </div>\n    <el-skeleton style="width: 240px" :loading="loading" animated>\n      <template #template>\n        <el-skeleton-item\n          variant="image"\n          style="width: 240px; height: 240px;"\n        />\n        <div style="padding: 14px;">\n          <el-skeleton-item variant="h3" style="width: 50%;" />\n          <div\n            style="display: flex; align-items: center; justify-content: space-between; margin-top: 16px; height: 16px;"\n          >\n            <el-skeleton-item variant="text" style="margin-right: 16px;" />\n            <el-skeleton-item variant="text" style="width: 30%;" />\n          </div>\n        </div>\n      </template>\n      <template #default>\n        <el-card :body-style="{ padding: \'0px\', marginBottom: \'1px\' }">\n          <img\n            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"\n            class="image"\n          />\n          <div style="padding: 14px;">\n            <span>Delicious hamberger</span>\n            <div class="bottom card-header">\n              <span class="time">{{ currentDate }}</span>\n              <el-button type="text" class="button">Operation button</el-button>\n            </div>\n          </div>\n        </el-card>\n      </template>\n    </el-skeleton>\n  </el-space>\n</template>\n\n<script>\nimport { defineComponent } from \'vue\'\n\nconst dayjs = require(\'dayjs\')\n\nexport default defineComponent({\n  data() {\n    return {\n      loading: true,\n      currentDate: dayjs().format(\'YYYY-MM-DD\'),\n    }\n  },\n})\n<\/script>',u='<template>\n  <el-space direction="vertical" alignment="flex-start">\n    <el-button @click="setLoading">Click me to reload</el-button>\n    <el-skeleton style="width: 240px" :loading="loading" animated :count="3">\n      <template #template>\n        <el-skeleton-item\n          variant="image"\n          style="width: 400px; height: 267px;"\n        />\n        <div style="padding: 14px;">\n          <el-skeleton-item variant="h3" style="width: 50%;" />\n          <div\n            style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"\n          >\n            <el-skeleton-item variant="text" style="margin-right: 16px;" />\n            <el-skeleton-item variant="text" style="width: 30%;" />\n          </div>\n        </div>\n      </template>\n      <template #default>\n        <el-card\n          :body-style="{ padding: \'0px\', marginBottom: \'1px\' }"\n          v-for="item in lists"\n        >\n          <img :src="item.imgUrl" class="image multi-content" />\n          <div style="padding: 14px;">\n            <span>{{ item.name }}</span>\n            <div class="bottom card-header">\n              <span class="time">{{ currentDate }}</span>\n              <el-button type="text" class="button">Operation button</el-button>\n            </div>\n          </div>\n        </el-card>\n      </template>\n    </el-skeleton>\n  </el-space>\n</template>\n\n<script>\n  import { defineComponent } from \'vue\'\n\n  const dayjs = require(\'dayjs\')\n\n  export default defineComponent({\n    data() {\n      return {\n        loading: true,\n        currentDate: dayjs().format(\'YYYY-MM-DD\'),\n        lists: [],\n      }\n    },\n    mounted() {\n      this.loading = false\n      this.lists = [\n        {\n          imgUrl:\n            \'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg\',\n          name: \'Deer\',\n        },\n        {\n          imgUrl:\n            \'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg\',\n          name: \'Horse\',\n        },\n        {\n          imgUrl:\n            \'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg\',\n          name: \'Mountain Lion\',\n        },\n      ]\n    },\n    methods: {\n      setLoading() {\n        this.loading = true\n        setTimeout(() => (this.loading = false), 2000)\n      },\n    },\n  })\n<\/script>',v='<template>\n  <el-space direction="vertical" alignment="flex-start">\n    <div>\n      <label style="margin-right: 16px;">Switch Loading</label>\n      <el-switch v-model="loading" />\n    </div>\n    <el-skeleton style="width: 240px" :loading="loading" animated :throttle="500">\n      <template #template>\n        <el-skeleton-item\n          variant="image"\n          style="width: 240px; height: 240px;"\n        />\n        <div style="padding: 14px;">\n          <el-skeleton-item variant="h3" style="width: 50%;" />\n          <div\n            style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"\n          >\n            <el-skeleton-item variant="text" style="margin-right: 16px;" />\n            <el-skeleton-item variant="text" style="width: 30%;" />\n          </div>\n        </div>\n      </template>\n      <template #default>\n        <el-card :body-style="{ padding: \'0px\', marginBottom: \'1px\' }">\n          <img\n            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"\n            class="image"\n          />\n          <div style="padding: 14px;">\n            <span>Delicious hamberger</span>\n            <div class="bottom card-header">\n              <span class="time">{{ currentDate }}</span>\n              <el-button type="text" class="button">operation button</el-button>\n            </div>\n          </div>\n        </el-card>\n      </template>\n    </el-skeleton>\n  </el-space>\n</template>\n\n<script>\nimport { defineComponent } from \'vue\'\n\nconst dayjs = require(\'dayjs\')\n\nexport default defineComponent({\n  data() {\n    return {\n      loading: false,\n      currentDate: dayjs().format(\'YYYY-MM-DD\'),\n    }\n  },\n})\n<\/script>',f=Object(a["defineComponent"])({name:"basic-usage",components:{CodeHighlighter:b["a"]},setup(){return{code1:p}}}),x=n("d959"),V=n.n(x);const y=V()(f,[["render",m]]);var N=y;const w={class:"mb-10"},C=Object(a["createElementVNode"])("h2",{class:"anchor fw-bolder mb-5"},[Object(a["createElementVNode"])("a",{href:"#configurable-rows"}),Object(a["createTextVNode"])(" Configurable Rows ")],-1),E=Object(a["createElementVNode"])("div",{class:"py-5"}," You can configure the row numbers yourself, for more precise rendering effect, the actual rendered row number will always be 1 row more than the given number, that is because we are rendering a title row with 33% width of the others. ",-1),k={class:"rounded border p-10"};function D(e,t,n,o,c,l){const i=Object(a["resolveComponent"])("el-skeleton"),r=Object(a["resolveComponent"])("CodeHighlighter");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",w,[C,E,Object(a["createElementVNode"])("div",k,[Object(a["createVNode"])(i,{rows:5}),Object(a["createVNode"])(r,{lang:"html"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.code2),1)]),_:1})])])}var T=Object(a["defineComponent"])({name:"configurable-rows",components:{CodeHighlighter:b["a"]},setup(){return{code2:h}}});const B=V()(T,[["render",D]]);var U=B;const Y={class:"mb-10"},M=Object(a["createElementVNode"])("h2",{class:"anchor fw-bolder mb-5"},[Object(a["createElementVNode"])("a",{href:"#animation"}),Object(a["createTextVNode"])(" Animation ")],-1),_=Object(a["createElementVNode"])("div",{class:"py-5"},[Object(a["createTextVNode"])(" We have provided a switch flag indicating whether showing the loading animation, called "),Object(a["createElementVNode"])("code",null,"animated"),Object(a["createTextVNode"])(" when this is true, all children of "),Object(a["createElementVNode"])("code",null,"l-skeleton"),Object(a["createTextVNode"])(" will show animation ")],-1),S={class:"rounded border p-10"};function I(e,t,n,o,c,l){const i=Object(a["resolveComponent"])("el-skeleton"),r=Object(a["resolveComponent"])("CodeHighlighter");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",Y,[M,_,Object(a["createElementVNode"])("div",S,[Object(a["createVNode"])(i,{rows:5,animated:""}),Object(a["createVNode"])(r,{lang:"html"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.code3),1)]),_:1})])])}var L=Object(a["defineComponent"])({name:"accordion",components:{CodeHighlighter:b["a"]},setup(){return{code3:g}}});const H=V()(L,[["render",I]]);var A=H;const R={class:"mb-10"},z=Object(a["createElementVNode"])("h2",{class:"anchor fw-bolder mb-5"},[Object(a["createElementVNode"])("a",{href:"#customized-template"}),Object(a["createTextVNode"])(" Customized Template ")],-1),q=Object(a["createElementVNode"])("div",{class:"py-5"},[Object(a["createTextVNode"])(" ElementPlus only provides the most common template, sometimes that could be a problem, so you have a slot named "),Object(a["createElementVNode"])("code",null,"template"),Object(a["createTextVNode"])(" to do that work."),Object(a["createElementVNode"])("br"),Object(a["createTextVNode"])(" Also we have provided different types skeleton unit that you can choose, for more detailed info, please scroll down to the bottom of this page to see the API description. Also, when building your own customized skeleton structure, you should be structuring them as closer to the real DOM as possible, which avoiding the DOM bouncing caused by the height difference. ")],-1),P={class:"rounded border p-10"},W={style:{padding:"14px"}},F={style:{display:"flex","align-items":"center","justify-items":"space-between"}};function J(e,t,n,o,c,l){const i=Object(a["resolveComponent"])("el-skeleton-item"),r=Object(a["resolveComponent"])("el-skeleton"),d=Object(a["resolveComponent"])("CodeHighlighter");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",R,[z,q,Object(a["createElementVNode"])("div",P,[Object(a["createVNode"])(r,{style:{width:"240px"}},{template:Object(a["withCtx"])(()=>[Object(a["createVNode"])(i,{variant:"image",style:{width:"240px",height:"240px"}}),Object(a["createElementVNode"])("div",W,[Object(a["createVNode"])(i,{variant:"p",style:{width:"50%"}}),Object(a["createElementVNode"])("div",F,[Object(a["createVNode"])(i,{variant:"text",style:{"margin-right":"16px"}}),Object(a["createVNode"])(i,{variant:"text",style:{width:"30%"}})])])]),_:1}),Object(a["createVNode"])(d,{lang:"html"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.code4),1)]),_:1})])])}var G=Object(a["defineComponent"])({name:"customized-template",components:{CodeHighlighter:b["a"]},setup(){return{code4:j}}});const K=V()(G,[["render",J]]);var Q=K;const X={class:"mb-10"},Z=Object(a["createElementVNode"])("h2",{class:"anchor fw-bolder mb-5"},[Object(a["createElementVNode"])("a",{href:"#loading-state"}),Object(a["createTextVNode"])(" Loading state ")],-1),$=Object(a["createElementVNode"])("div",{class:"py-5"}," When Loading ends, we always need to show the real UI with data to our end users. with the attribtue loading we can control whether showing the DOM. You can also use slot default to structure the real DOM element. ",-1),ee={class:"rounded border p-10"},te=Object(a["createElementVNode"])("label",{style:{"margin-right":"16px"}},"Switch Loading",-1),ne={style:{padding:"14px"}},ae={style:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},oe=Object(a["createElementVNode"])("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",class:"image"},null,-1),ce={style:{padding:"14px"}},le=Object(a["createElementVNode"])("span",null,"Delicious hamberger",-1),ie={class:"bottom card-header"},re={class:"time"},de=Object(a["createTextVNode"])("Operation button");function se(e,t,n,o,c,l){const i=Object(a["resolveComponent"])("el-switch"),r=Object(a["resolveComponent"])("el-skeleton-item"),d=Object(a["resolveComponent"])("el-button"),s=Object(a["resolveComponent"])("el-card"),m=Object(a["resolveComponent"])("el-skeleton"),b=Object(a["resolveComponent"])("el-space"),p=Object(a["resolveComponent"])("CodeHighlighter");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",X,[Z,$,Object(a["createElementVNode"])("div",ee,[Object(a["createVNode"])(b,{direction:"vertical",alignment:"flex-start"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",null,[te,Object(a["createVNode"])(i,{modelValue:e.loading,"onUpdate:modelValue":t[0]||(t[0]=t=>e.loading=t)},null,8,["modelValue"])]),Object(a["createVNode"])(m,{style:{width:"240px"},loading:e.loading,animated:""},{template:Object(a["withCtx"])(()=>[Object(a["createVNode"])(r,{variant:"image",style:{width:"240px",height:"240px"}}),Object(a["createElementVNode"])("div",ne,[Object(a["createVNode"])(r,{variant:"h3",style:{width:"50%"}}),Object(a["createElementVNode"])("div",ae,[Object(a["createVNode"])(r,{variant:"text",style:{"margin-right":"16px"}}),Object(a["createVNode"])(r,{variant:"text",style:{width:"30%"}})])])]),default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(s,{"body-style":{padding:"0px",marginBottom:"1px"}},{default:Object(a["withCtx"])(()=>[oe,Object(a["createElementVNode"])("div",ce,[le,Object(a["createElementVNode"])("div",ie,[Object(a["createElementVNode"])("span",re,Object(a["toDisplayString"])(e.currentDate),1),Object(a["createVNode"])(d,{type:"text",class:"button"},{default:Object(a["withCtx"])(()=>[de]),_:1})])])]),_:1})]),_:1},8,["loading"])]),_:1}),Object(a["createVNode"])(p,{"field-height":400,lang:"html"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.code5),1)]),_:1})])])}const me=n("5a0c");var be=Object(a["defineComponent"])({name:"loading-state",data(){return{loading:!0,currentDate:me().format("YYYY-MM-DD")}},components:{CodeHighlighter:b["a"]},setup(){return{code5:O}}});const pe=V()(be,[["render",se]]);var he=pe;const ge={class:"mb-10"},je=Object(a["createElementVNode"])("h2",{class:"anchor fw-bolder mb-5"},[Object(a["createElementVNode"])("a",{href:"#rendering-a-list-of-data"}),Object(a["createTextVNode"])(" Rendering a list of data ")],-1),Oe=Object(a["createElementVNode"])("div",{class:"py-5"},[Object(a["createTextVNode"])(" Most of the time, skeleton is used as indicators of rendering a list of data which haven't been fetched from server yet, then we need to create a list of skeleton out of no where to make it look like it is loading, with "),Object(a["createElementVNode"])("code",null,"count"),Object(a["createTextVNode"])(" attribute, you can control how many these templates you need to render to the browser. ")],-1),ue={class:"rounded border p-10"},ve=Object(a["createTextVNode"])("Click me to reload"),fe={style:{padding:"14px"}},xe={style:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},Ve=["src"],ye={style:{padding:"14px"}},Ne={class:"bottom card-header"},we={class:"time"},Ce=Object(a["createTextVNode"])("Operation button");function Ee(e,t,n,o,c,l){const i=Object(a["resolveComponent"])("el-button"),r=Object(a["resolveComponent"])("el-skeleton-item"),d=Object(a["resolveComponent"])("el-card"),s=Object(a["resolveComponent"])("el-skeleton"),m=Object(a["resolveComponent"])("el-space"),b=Object(a["resolveComponent"])("CodeHighlighter");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",ge,[je,Oe,Object(a["createElementVNode"])("div",ue,[Object(a["createVNode"])(m,{direction:"vertical",alignment:"flex-start"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(i,{onClick:e.setLoading},{default:Object(a["withCtx"])(()=>[ve]),_:1},8,["onClick"]),Object(a["createVNode"])(s,{style:{width:"240px"},loading:e.loading,animated:"",count:3},{template:Object(a["withCtx"])(()=>[Object(a["createVNode"])(r,{variant:"image",style:{width:"400px",height:"267px"}}),Object(a["createElementVNode"])("div",fe,[Object(a["createVNode"])(r,{variant:"h3",style:{width:"50%"}}),Object(a["createElementVNode"])("div",xe,[Object(a["createVNode"])(r,{variant:"text",style:{"margin-right":"16px"}}),Object(a["createVNode"])(r,{variant:"text",style:{width:"30%"}})])])]),default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.lists,(t,n)=>(Object(a["openBlock"])(),Object(a["createBlock"])(d,{"body-style":{padding:"0px",marginBottom:"1px"},key:n},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("img",{src:t.imgUrl,class:"image multi-content"},null,8,Ve),Object(a["createElementVNode"])("div",ye,[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(t.name),1),Object(a["createElementVNode"])("div",Ne,[Object(a["createElementVNode"])("span",we,Object(a["toDisplayString"])(e.currentDate),1),Object(a["createVNode"])(i,{type:"text",class:"button"},{default:Object(a["withCtx"])(()=>[Ce]),_:1})])])]),_:2},1024))),128))]),_:1},8,["loading"])]),_:1}),Object(a["createVNode"])(b,{"field-height":400,lang:"html"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.code6),1)]),_:1})])])}const ke=n("5a0c");var De=Object(a["defineComponent"])({name:"rendering-a-list-of-data",components:{CodeHighlighter:b["a"]},data(){return{loading:!0,currentDate:ke().format("YYYY-MM-DD"),lists:[]}},mounted(){this.loading=!1,this.lists=[{imgUrl:"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",name:"Deer"},{imgUrl:"https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",name:"Horse"},{imgUrl:"https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",name:"Mountain Lion"}]},methods:{setLoading(){this.loading=!0,setTimeout(()=>this.loading=!1,2e3)}},setup(){return{code6:u}}});n("36c8");const Te=V()(De,[["render",Ee]]);var Be=Te;const Ue={class:"mb-10"},Ye=Object(a["createElementVNode"])("h2",{class:"anchor fw-bolder mb-5"},[Object(a["createElementVNode"])("a",{href:"#avoiding-rendering-bouncing"}),Object(a["createTextVNode"])(" Avoiding rendering bouncing. ")],-1),Me=Object(a["createElementVNode"])("div",{class:"py-5"},[Object(a["createTextVNode"])(" Sometimes API responds very quickly, when that happens, the skeleton just gets rendered to the DOM then it needs to switch back to real DOM, that causes the sudden flashy. To avoid such thing, you can use the "),Object(a["createElementVNode"])("code",null,"throttle"),Object(a["createTextVNode"])(" attribute. ")],-1),_e={class:"rounded border p-10"},Se=Object(a["createElementVNode"])("label",{style:{"margin-right":"16px"}},"Switch Loading",-1),Ie={style:{padding:"14px"}},Le={style:{display:"flex","align-items":"center","justify-items":"space-between","margin-top":"16px",height:"16px"}},He=Object(a["createElementVNode"])("img",{src:"https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",class:"image"},null,-1),Ae={style:{padding:"14px"}},Re=Object(a["createElementVNode"])("span",null,"Delicious hamberger",-1),ze={class:"bottom card-header"},qe={class:"time"},Pe=Object(a["createTextVNode"])("operation button");function We(e,t,n,o,c,l){const i=Object(a["resolveComponent"])("el-switch"),r=Object(a["resolveComponent"])("el-skeleton-item"),d=Object(a["resolveComponent"])("el-button"),s=Object(a["resolveComponent"])("el-card"),m=Object(a["resolveComponent"])("el-skeleton"),b=Object(a["resolveComponent"])("el-space"),p=Object(a["resolveComponent"])("CodeHighlighter");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",Ue,[Ye,Me,Object(a["createElementVNode"])("div",_e,[Object(a["createVNode"])(b,{direction:"vertical",alignment:"flex-start"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",null,[Se,Object(a["createVNode"])(i,{modelValue:e.loading,"onUpdate:modelValue":t[0]||(t[0]=t=>e.loading=t)},null,8,["modelValue"])]),Object(a["createVNode"])(m,{style:{width:"240px"},loading:e.loading,animated:"",throttle:500},{template:Object(a["withCtx"])(()=>[Object(a["createVNode"])(r,{variant:"image",style:{width:"240px",height:"240px"}}),Object(a["createElementVNode"])("div",Ie,[Object(a["createVNode"])(r,{variant:"h3",style:{width:"50%"}}),Object(a["createElementVNode"])("div",Le,[Object(a["createVNode"])(r,{variant:"text",style:{"margin-right":"16px"}}),Object(a["createVNode"])(r,{variant:"text",style:{width:"30%"}})])])]),default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(s,{"body-style":{padding:"0px",marginBottom:"1px"}},{default:Object(a["withCtx"])(()=>[He,Object(a["createElementVNode"])("div",Ae,[Re,Object(a["createElementVNode"])("div",ze,[Object(a["createElementVNode"])("span",qe,Object(a["toDisplayString"])(e.currentDate),1),Object(a["createVNode"])(d,{type:"text",class:"button"},{default:Object(a["withCtx"])(()=>[Pe]),_:1})])])]),_:1})]),_:1},8,["loading"])]),_:1}),Object(a["createVNode"])(p,{"field-height":400,lang:"html"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.code7),1)]),_:1})])])}const Fe=n("5a0c");var Je=Object(a["defineComponent"])({name:"avoiding-rendering-bouncing",data(){return{loading:!1,currentDate:Fe().format("YYYY-MM-DD")}},components:{CodeHighlighter:b["a"]},setup(){return{code7:v}}});const Ge=V()(Je,[["render",We]]);var Ke=Ge,Qe=Object(a["defineComponent"])({name:"skeleton",components:{EUIBasicUsage:N,EUIConfigurableRows:U,EUIAnimation:A,EUICustomizedTemplate:Q,EUILoadingState:he,EUIRenderingAListOfData:Be,EUIAvoidingRenderingBouncing:Ke},setup(){Object(l["b"])("Skeleton")}});const Xe=V()(Qe,[["render",c]]);t["default"]=Xe}}]);
//# sourceMappingURL=chunk-5d8d5e48.d954332e.js.map