(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0687c4e"],{a80a:function(e,t,n){"use strict";n.r(t);var a=n("7a23");const o=Object(a["createElementVNode"])("div",{class:"mb-10"},[Object(a["createElementVNode"])("h1",{class:"anchor fw-bolder mb-5"},[Object(a["createElementVNode"])("a",{href:"#loading"}),Object(a["createTextVNode"])(" Loading ")]),Object(a["createElementVNode"])("div",{class:"py-5"}," Show animation while loading data. ")],-1);function c(e,t,n,c,l,i){const d=Object(a["resolveComponent"])("EUILoadingInsideAContainer"),r=Object(a["resolveComponent"])("EUICustomization"),s=Object(a["resolveComponent"])("EUIFullScreenLoading"),b=Object(a["resolveComponent"])("EUIService");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[o,Object(a["createVNode"])(d),Object(a["createVNode"])(r),Object(a["createVNode"])(s),Object(a["createVNode"])(b)],64)}var l=n("4fb2");const i={class:"mb-10"},d=Object(a["createElementVNode"])("h2",{class:"anchor fw-bolder mb-5"},[Object(a["createElementVNode"])("a",{href:"#loading-inside-a-container"}),Object(a["createTextVNode"])(" Loading inside a container ")],-1),r=Object(a["createElementVNode"])("div",{class:"py-5"}," Displays animation in a container (such as a table) while loading data. ",-1),s={class:"rounded border p-10"};function b(e,t,n,o,c,l){const b=Object(a["resolveComponent"])("el-table-column"),m=Object(a["resolveComponent"])("el-table"),u=Object(a["resolveComponent"])("CodeHighlighter"),g=Object(a["resolveDirective"])("loading");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",i,[d,r,Object(a["createElementVNode"])("div",s,[Object(a["withDirectives"])((Object(a["openBlock"])(),Object(a["createBlock"])(m,{data:e.tableData,style:{width:"100%"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(b,{prop:"date",label:"Date",width:"180"}),Object(a["createVNode"])(b,{prop:"name",label:"Name",width:"180"}),Object(a["createVNode"])(b,{prop:"address",label:"Address"})]),_:1},8,["data"])),[[g,e.loading]]),Object(a["createVNode"])(u,{"field-height":400,lang:"html"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.code1),1)]),_:1})])])}var m=n("8e21"),u='<template>\n  <el-table\n    v-loading="loading"\n    :data="tableData"\n    style="width: 100%">\n    <el-table-column\n      prop="date"\n      label="Date"\n      width="180">\n    </el-table-column>\n    <el-table-column\n      prop="name"\n      label="Name"\n      width="180">\n    </el-table-column>\n    <el-table-column\n      prop="address"\n      label="Address">\n    </el-table-column>\n  </el-table>\n</template>\n\n<style>\n  body {\n    margin: 0;\n  }\n</style>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: \'2016-05-02\',\n          name: \'John Smith\',\n          address: \'No.1518,  Jinshajiang Road, Putuo District\'\n        }, {\n          date: \'2016-05-04\',\n          name: \'John Smith\',\n          address: \'No.1518,  Jinshajiang Road, Putuo District\'\n        }, {\n          date: \'2016-05-01\',\n          name: \'John Smith\',\n          address: \'No.1518,  Jinshajiang Road, Putuo District\'\n        }],\n        loading: true\n      };\n    }\n  };\n<\/script>',g='<template>\n  <el-table\n    v-loading="loading"\n    element-loading-text="Loading..."\n    element-loading-spinner="el-icon-loading"\n    element-loading-background="rgba(0, 0, 0, 0.8)"\n    :data="tableData"\n    style="width: 100%">\n    <el-table-column\n      prop="date"\n      label="Date"\n      width="180">\n    </el-table-column>\n    <el-table-column\n      prop="name"\n      label="Name"\n      width="180">\n    </el-table-column>\n    <el-table-column\n      prop="address"\n      label="Address">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: \'2016-05-02\',\n          name: \'John Smith\',\n          address: \'No.1518,  Jinshajiang Road, Putuo District\'\n        }, {\n          date: \'2016-05-04\',\n          name: \'John Smith\',\n          address: \'No.1518,  Jinshajiang Road, Putuo District\'\n        }, {\n          date: \'2016-05-01\',\n          name: \'John Smith\',\n          address: \'No.1518,  Jinshajiang Road, Putuo District\'\n        }],\n        loading: true\n      };\n    }\n  };\n<\/script>',h='<template>\n  <el-button\n    type="primary"\n    @click="openFullScreen1"\n    v-loading.fullscreen.lock="fullscreenLoading">\n    As a directive\n  </el-button>\n  <el-button\n    type="primary"\n    @click="openFullScreen2">\n    As a service\n  </el-button>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        fullscreenLoading: false\n      }\n    },\n    methods: {\n      openFullScreen1() {\n        this.fullscreenLoading = true;\n        setTimeout(() => {\n          this.fullscreenLoading = false;\n        }, 2000);\n      },\n      openFullScreen2() {\n        const loading = this.$loading({\n          lock: true,\n          text: \'Loading\',\n          spinner: \'el-icon-loading\',\n          background: \'rgba(0, 0, 0, 0.7)\'\n        });\n        setTimeout(() => {\n          loading.close();\n        }, 2000);\n      }\n    }\n  }\n<\/script>',p=Object(a["defineComponent"])({name:"loading-inside-a-container",data(){return{tableData:[{date:"2016-05-02",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-04",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-01",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"}],loading:!0}},components:{CodeHighlighter:m["a"]},setup(){return{code1:u}}}),j=(n("e38a"),n("d959")),O=n.n(j);const v=O()(p,[["render",b]]);var f=v;const N={class:"mb-10"},V=Object(a["createElementVNode"])("h2",{class:"anchor fw-bolder mb-5"},[Object(a["createElementVNode"])("a",{href:"#customization"}),Object(a["createTextVNode"])(" Customization ")],-1),w=Object(a["createElementVNode"])("div",{class:"py-5"}," You can customize loading text, loading spinner and background color. ",-1),C={class:"rounded border p-10"};function k(e,t,n,o,c,l){const i=Object(a["resolveComponent"])("el-table-column"),d=Object(a["resolveComponent"])("el-table"),r=Object(a["resolveComponent"])("CodeHighlighter"),s=Object(a["resolveDirective"])("loading");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",N,[V,w,Object(a["createElementVNode"])("div",C,[Object(a["withDirectives"])((Object(a["openBlock"])(),Object(a["createBlock"])(d,{"element-loading-text":"Loading...","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)",data:e.tableData,style:{width:"100%"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(i,{prop:"date",label:"Date",width:"180"}),Object(a["createVNode"])(i,{prop:"name",label:"Name",width:"180"}),Object(a["createVNode"])(i,{prop:"address",label:"Address"})]),_:1},8,["data"])),[[s,e.loading]]),Object(a["createVNode"])(r,{"field-height":400,lang:"html"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.code2),1)]),_:1})])])}var y=Object(a["defineComponent"])({name:"customization",data(){return{tableData:[{date:"2016-05-02",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-04",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-01",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"}],loading:!0}},components:{CodeHighlighter:m["a"]},setup(){return{code2:g}}});const D=O()(y,[["render",k]]);var E=D;const S={class:"mb-10"},L=Object(a["createElementVNode"])("h2",{class:"anchor fw-bolder mb-5"},[Object(a["createElementVNode"])("a",{href:"#full-screen-loading"}),Object(a["createTextVNode"])(" Full screen loading ")],-1),x=Object(a["createElementVNode"])("div",{class:"py-5"}," Show a full screen animation while loading data. ",-1),J={class:"rounded border p-10"},B=Object(a["createTextVNode"])(" As a directive "),T=Object(a["createTextVNode"])(" As a service ");function I(e,t,n,o,c,l){const i=Object(a["resolveComponent"])("el-button"),d=Object(a["resolveComponent"])("CodeHighlighter"),r=Object(a["resolveDirective"])("loading");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",S,[L,x,Object(a["createElementVNode"])("div",J,[Object(a["withDirectives"])((Object(a["openBlock"])(),Object(a["createBlock"])(i,{type:"primary",onClick:e.openFullScreen1},{default:Object(a["withCtx"])(()=>[B]),_:1},8,["onClick"])),[[r,e.fullscreenLoading,void 0,{fullscreen:!0,lock:!0}]]),Object(a["createVNode"])(i,{type:"primary",onClick:e.openFullScreen2},{default:Object(a["withCtx"])(()=>[T]),_:1},8,["onClick"]),Object(a["createVNode"])(d,{"field-height":400,lang:"html"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.code3),1)]),_:1})])])}var P=Object(a["defineComponent"])({name:"full-screen-loading",data(){return{fullscreenLoading:!1}},methods:{openFullScreen1(){this.fullscreenLoading=!0,setTimeout(()=>{this.fullscreenLoading=!1},2e3)},openFullScreen2(){const e=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});setTimeout(()=>{e.close()},2e3)}},components:{CodeHighlighter:m["a"]},setup(){return{code3:h}}});const F=O()(P,[["render",I]]);var R=F;const A={class:"mb-10"},H=Object(a["createElementVNode"])("h2",{class:"anchor fw-bolder mb-5"},[Object(a["createElementVNode"])("a",{href:"#service"}),Object(a["createTextVNode"])(" Service ")],-1),U=Object(a["createElementVNode"])("div",{class:"py-5"}," You can also invoke Loading with a service. Import Loading service: ",-1),_=Object(a["createTextVNode"])(Object(a["toDisplayString"])("import { ElLoading } from 'element-plus';")),z=Object(a["createStaticVNode"])('<div class="py-5"> Invoke it: </div><div class="py-5"> The parameter <code>options</code> is the configuration of Loading, and its details can be found in the following table. <code>LoadingService</code> returns a Loading instance, and you can <code>close</code> it by invoking its close method: </div><div class="py-5"> Note that in this case the full screen Loading is singleton. If a new full screen Loading is invoked before an existing one is closed, the existing full screen Loading instance will be returned instead of actually creating another Loading instance: </div><div class="py-5"> Calling the <code>close</code> method on any one of them can close this full screen Loading. </div><div class="py-5"> If Element Plus is imported entirely, a globally method <code>$loading</code> will be registered to <code>app.config.globalProperties</code>. You can invoke it like this: <code>this.$loading(options)</code>, and it also returns a Loading instance. </div>',5);function $(e,t,n,o,c,l){const i=Object(a["resolveComponent"])("CodeHighlighter");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",A,[H,U,Object(a["createVNode"])(i,{lang:"html"},{default:Object(a["withCtx"])(()=>[_]),_:1}),z])}var Y=Object(a["defineComponent"])({name:"service",components:{CodeHighlighter:m["a"]},setup(){return{}}});const M=O()(Y,[["render",$]]);var q=M,G=Object(a["defineComponent"])({name:"loading",components:{EUILoadingInsideAContainer:f,EUICustomization:E,EUIFullScreenLoading:R,EUIService:q},setup(){Object(a["onMounted"])(()=>{Object(l["b"])("Loading")})}});const K=O()(G,[["render",c]]);t["default"]=K},d40a:function(e,t,n){},e38a:function(e,t,n){"use strict";n("d40a")}}]);
//# sourceMappingURL=chunk-a0687c4e.4541f47b.js.map