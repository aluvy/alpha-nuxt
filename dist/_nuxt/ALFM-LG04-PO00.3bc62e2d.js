import{_ as n,c as i,a as t,t as c,o as l}from"./entry.c8fdadf4.js";const _={name:"ALFM-LG04-PO00",emits:["setLayout","openAlert"],data(){return{layout:{header:"sub2",footer:"none",floatMenu:"none",title:"회원가입 메인 > 정보입력"}}},mounted(){this.$emit("setLayout",this.layout)}},a={class:"container"},d={class:"content",id:"content"},r={class:"title_nav"},u={class:"section"},b=t("h3",{class:"tit02"},"중복된 이메일이 없을 경우",-1),p={class:"btn_group"},h={class:"section"},L=t("h3",{class:"tit02"},"기존 계정 또는 탈퇴한 경우",-1),m={class:"btn_group"},v={class:"section"},G=t("h3",{class:"tit02"},"가입된 회원정보가 있는 경우",-1),O={class:"btn_group"};function P($,s,y,A,e,f){return l(),i("div",a,[t("div",d,[t("h2",r,c(e.layout.title),1),t("div",u,[b,t("div",p,[t("button",{type:"button",class:"btn md c03",id:"btn_LG04PO00",onClick:s[0]||(s[0]=o=>{this.$emit("openAlert",["LG04PO00","btn_LG04PO00",101])})},"Alert")])]),t("div",h,[L,t("div",m,[t("button",{type:"button",class:"btn md c03",id:"btn_LG04PO00B",onClick:s[1]||(s[1]=o=>{this.$emit("openAlert",["LG04PO00B","btn_LG04PO00B",101])})},"Alert")])]),t("div",v,[G,t("div",O,[t("button",{type:"button",class:"btn md c03",id:"btn_LG04PO00C",onClick:s[2]||(s[2]=o=>{this.$emit("openAlert",["LG04PO00C","btn_LG04PO00C",101])})},"Alert")])])])])}const C=n(_,[["render",P]]);export{C as default};