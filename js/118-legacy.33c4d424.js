"use strict";(self["webpackChunkfortissimo"]=self["webpackChunkfortissimo"]||[]).push([[118],{8264:function(t,e,r){r.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-privacy"},[r("div",{staticClass:"container-wrapper narrow"},[r("div",{staticClass:"text",domProps:{innerHTML:t._s(t.text)}})])])},s=[],n={props:{text:{type:String,required:!0}}},i=n,o=r(3736),l=(0,o.Z)(i,a,s,!1,null,"5ff6e481",null),c=l.exports},3203:function(t,e,r){r.r(e),r.d(e,{default:function(){return v}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("Header"),r("div",{staticClass:"privacy"},[r("BreadCrumbs",{attrs:{items:t.breadCrumbs}}),r("TitleCoffee",{attrs:{title:t.getPage().title}}),r("TextPrivacy",{attrs:{text:t.getPage().description_first}})],1),r("Footer")],1)},s=[],n=r(7965),i=r(6325),o=r(2631),l=r(8264),c={components:{TextPrivacy:l.Z,TitleCoffee:o.Z,BreadCrumbs:i.Z},data:function(){return{breadCrumbs:[{name:"Головна",link:"/"},{name:"Політика конфіденційності",link:"privacy"}]}},methods:{getPage:function(){var t=this.$store.getters.getPages;if(t){var e,r=null,a=(0,n.Z)(t);try{for(a.s();!(e=a.n()).done;){var s=e.value;6===s.id&&(r=s)}}catch(i){a.e(i)}finally{a.f()}return console.log(r),r}}}},u=c,f=r(3736),d=(0,f.Z)(u,a,s,!1,null,"a3a25076",null),v=d.exports}}]);