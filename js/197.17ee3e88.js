"use strict";(self["webpackChunkfortissimo"]=self["webpackChunkfortissimo"]||[]).push([[197],{8264:function(t,e,r){r.d(e,{Z:function(){return o}});var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-privacy"},[r("div",{staticClass:"container-wrapper narrow"},[r("div",{staticClass:"text",domProps:{innerHTML:t._s(t.text)}})])])},i=[],a={props:{text:{type:String,required:!0}}},n=a,l=r(3736),c=(0,l.Z)(n,s,i,!1,null,"5ff6e481",null),o=c.exports},6325:function(t,e,r){r.d(e,{Z:function(){return o}});var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bread-crumbs"},[r("div",{staticClass:"container-wrapper large"},[r("div",{staticClass:"body"},[t._l(t.items,(function(e){return[e!==t.items[t.items.length-1]?[r("RouterLink",{staticClass:"link",attrs:{to:e.link}},[t._v(" "+t._s(e.name)+" ")]),r("span",{staticClass:"sep"},[t._v("/")])]:r("span",{staticClass:"current"},[t._v(t._s(e.name))])]}))],2)])])},i=[],a={props:{items:{type:Array,required:!0}}},n=a,l=r(3736),c=(0,l.Z)(n,s,i,!1,null,"392138ea",null),o=c.exports},2631:function(t,e,r){r.d(e,{Z:function(){return o}});var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.title?r("div",{staticClass:"title-coffee"},[r("div",{staticClass:"container-wrapper"},[r("div",{staticClass:"body"},[r("h1",[t._v(t._s(t.title))])])])]):t._e()},i=[],a={props:{title:{type:String,required:!0}}},n=a,l=r(3736),c=(0,l.Z)(n,s,i,!1,null,"55e2edfc",null),o=c.exports},4197:function(t,e,r){r.r(e),r.d(e,{default:function(){return p}});var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Header"),r("div",{staticClass:"privacy"},[r("BreadCrumbs",{attrs:{items:t.breadCrumbs}}),r("TitleCoffee",{attrs:{title:t.getPage().title}}),r("TextPrivacy",{attrs:{text:t.getPage().description_first}})],1),r("Footer")],1)},i=[],a=r(6325),n=r(2631),l=r(8264),c={components:{TextPrivacy:l.Z,TitleCoffee:n.Z,BreadCrumbs:a.Z},data(){return{breadCrumbs:[{name:"Головна",link:"/"},{name:"Умови використання",link:"privacy"}]}},methods:{getPage(){let t=this.$store.getters.getPages;if(t){let e=null;for(let r of t)console.log(this.$router.history.current.path.slice(1)),r.link.split("/")[4]===this.$router.history.current.path.slice(1)&&(e=r);return e}}},computed:{},beforeCreate(){this.$store.dispatch("loadPages"),this.$forceUpdate()}},o=c,u=r(3736),f=(0,u.Z)(o,s,i,!1,null,"84581e58",null),p=f.exports}}]);