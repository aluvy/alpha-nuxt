import{_ as l,V as r,i as p,o as n,c as t,r as c,h as _,g as d,F as h}from"./entry.c8fdadf4.js";const u={name:"Lottie",data(){return{data:[{name:"loading",show:!1,data:"/images/animation/loading.json"},{name:"complete",show:!1,data:"/images/animation/ani_complete.json"},{name:"joinComplate",show:!1,data:"/images/animation/ani_join_complete.json"},{name:"mainChar",show:!1,data:"/images/animation/ani_main_char.json"},{name:"plan01",show:!1,data:"/images/animation/ani_plan01.json"},{name:"plan02",show:!1,data:"/images/animation/ani_plan02.json"},{name:"plan03",show:!1,data:"/images/animation/ani_plan03.json"},{name:"plan04",show:!1,data:"/images/animation/ani_plan04.json"}]}},mounted(){const e=this.name;this.data.forEach(a=>{e==a.name&&(a.show=!0)})},props:{name:String},components:{Vue3Lottie:r}};function f(e,a,g,j,s,w){const i=p("Vue3Lottie");return n(!0),t(h,null,c(s.data,(o,m)=>(n(),t("div",{key:m},[o.show?(n(),_(i,{key:0,animationLink:o.data,loop:"",autoplay:""},null,8,["animationLink"])):d("",!0)]))),128)}const L=l(u,[["render",f]]);export{L as _};