import{_ as s,c as o,a as t,t as a,o as i}from"./entry.c8fdadf4.js";const n={name:"GuideTemplate",emits:["setLayout","openPopup"],data(){return{layout:{header:"sub",footer:"",title:"Guide"}}},mounted(){this.$emit("setLayout",this.layout)}},c={class:"container"},_={class:"content",id:"content"},l={class:"title_nav"},d=t("div",{class:"page_info"},"page info",-1),r=t("div",{class:"section"},[t("h3",{class:"tit02"},"sub title in section")],-1);function p(u,h,m,f,e,y){return i(),o("div",c,[t("div",_,[t("h2",l,a(e.layout.title),1),d,r])])}const $=s(n,[["render",p]]);export{$ as default};