"use strict";(self["webpackChunkfortissimo"]=self["webpackChunkfortissimo"]||[]).push([[974],{6142:function(t,e,r){r.r(e),r.d(e,{default:function(){return b}});var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"privacy"},[r("BreadCrumbs",{attrs:{items:t.breadCrumbs}}),r("TitleCoffee",{attrs:{title:t.getPage().title}}),r("TextPrivacy",{attrs:{text:t.getPage().description_first}})],1)},a=[],i=r(7965),n=r(6325),l=r(2631),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-privacy"},[r("div",{staticClass:"container-wrapper narrow"},[r("div",{staticClass:"text",domProps:{innerHTML:t._s(t.text)}})])])},c=[],u={props:{text:{type:String,required:!0}}},f=u,d=r(3736),p=(0,d.Z)(f,o,c,!1,null,"8da0096e",null),v=p.exports,m={components:{TextPrivacy:v,TitleCoffee:l.Z,BreadCrumbs:n.Z},data:function(){return{breadCrumbs:[{name:"Головна",link:"/"},{name:"Політика конфіденційності",link:"privacy"}]}},methods:{getPage:function(){var t=this.$store.getters.getPages;if(t){var e,r=null,s=(0,i.Z)(t);try{for(s.s();!(e=s.n()).done;){var a=e.value;6===a.id&&(r=a)}}catch(n){s.e(n)}finally{s.f()}return r}}},beforeCreate:function(){this.$store.dispatch("loadPages")}},C=m,g=(0,d.Z)(C,s,a,!1,null,"56410ebf",null),b=g.exports}}]);