"use strict";(self["webpackChunkfortissimo"]=self["webpackChunkfortissimo"]||[]).push([[30],{1566:function(t,e,r){r.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-privacy"},[r("div",{staticClass:"container-wrapper narrow"},[r("div",{staticClass:"text",domProps:{innerHTML:t._s(t.text)}})])])},s=[],i={props:{text:{type:String,required:!0}}},n=i,o=r(3736),l=(0,o.Z)(n,a,s,!1,null,"8da0096e",null),c=l.exports},2541:function(t,e,r){r.r(e),r.d(e,{default:function(){return v}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),r("div",{staticClass:"privacy"},[r("BreadCrumbs",{attrs:{items:t.breadCrumbs}}),r("TitleCoffee",{attrs:{title:t.getPage().title}}),r("TextPrivacy",{attrs:{text:t.getPage().description_first}})],1),r("Footer")],1)},s=[],i=r(7965),n=r(6325),o=r(2631),l=r(1566),c={components:{TextPrivacy:l.Z,TitleCoffee:o.Z,BreadCrumbs:n.Z},data:function(){return{breadCrumbs:[{name:"Головна",link:"/"},{name:"Політика конфіденційності",link:"privacy"}]}},methods:{getPage:function(){var t=this.$store.getters.getPages;if(t){var e,r=null,a=(0,i.Z)(t);try{for(a.s();!(e=a.n()).done;){var s=e.value;6===s.id&&(r=s)}}catch(n){a.e(n)}finally{a.f()}return console.log(r),r}}},beforeCreate:function(){this.$store.dispatch("loadPages")}},u=c,f=r(3736),d=(0,f.Z)(u,a,s,!1,null,"05e79fa2",null),v=d.exports}}]);