import{_ as s,c as n,a as t,t as i,o as a}from"./entry.b6e4d86e.js";const c={name:"ALFM-BU01-PO02",emits:["setLayout","openAlert"],data(){return{layout:{header:"sub2",footer:"none",floatMenu:"none",title:"바로배송 안내"}}},mounted(){this.$emit("setLayout",this.layout),this.$emit("openAlert",["BU01PO02","btn_BU01PO02",101])}},r={class:"container"},l={class:"content",id:"content"},_={class:"title_nav"},d={class:"section"},u={class:"btn_group"};function p(m,e,h,B,o,b){return a(),n("div",r,[t("div",l,[t("h2",_,i(o.layout.title),1),t("div",d,[t("div",u,[t("button",{type:"button",class:"btn md c03",id:"btn_BU01PO02",onClick:e[0]||(e[0]=f=>{this.$emit("openAlert",["BU01PO02","btn_BU01PO02",101])})},"Alert")])])])])}const O=s(c,[["render",p]]);export{O as default};