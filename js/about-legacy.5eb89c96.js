"use strict";(self["webpackChunkfortissimo"]=self["webpackChunkfortissimo"]||[]).push([[443],{8120:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("h1",[t._v("This is an about page")])])}],a=s(3736),r={},n=(0,a.Z)(r,i,o,!1,null,null,null),c=n.exports},5592:function(t,e,s){s.r(e),s.d(e,{default:function(){return b}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"catalog"},[s("Links"),s("Catalog")],1)},o=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"footer_products products"},[s("router-link",{staticClass:"products_link",attrs:{"active-class":"products_link--active",tag:"a",to:"/all"}},[t._v("Всі товари")]),s("router-link",{staticClass:"products_link",attrs:{"active-class":"products_link--active",tag:"a",to:"/1"}},[t._v("Арабіка")]),s("router-link",{staticClass:"products_link",attrs:{"active-class":"products_link--active",tag:"a",to:"/2"}},[t._v("суміш арабіка/робуста")]),s("router-link",{staticClass:"products_link",attrs:{"active-class":"products_link--active",tag:"a",to:"/3"}},[t._v("Дегустаційні сети")]),s("router-link",{staticClass:"products_link",attrs:{"active-class":"products_link--active",tag:"a",to:"/4"}},[t._v("мерч")])],1)},r=[],n={name:"Links"},c=n,l=s(3736),d=(0,l.Z)(c,a,r,!1,null,"72b5fc6a",null),u=d.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"products_slider products-slider"},[s("div",{staticClass:"products-slider_wrapper"},[s("VueSlickCarousel",t._b({ref:"carousel",on:{afterChange:t.changed}},"VueSlickCarousel",{slidesToShow:4,slidesToScroll:4,arrows:!1,infinite:!1,rows:2,responsive:[{breakpoint:1600,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1}},{breakpoint:1199,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,infinite:!1,centerMode:!0,centerPadding:"30px"}}]},!1),t._l(t.products,(function(e,i){return s("div",{key:i,staticClass:"products-slider_container"},[s("div",{staticClass:"products-slider_item slider-item"},[s("div",{staticClass:"slider-item_top"},[s("div",{staticClass:"slider-item_head item-head"},[s("div",{staticClass:"item-head_markers head-markers"},t._l(e.marks,(function(e,i){return s("div",{key:i,staticClass:"head-markers_item",domProps:{textContent:t._s(e)}})})),0)]),s("div",{staticClass:"slider-item_img"},[s("img",{attrs:{src:t.getImg(e.img),alt:""}})]),s("div",{staticClass:"slider-item_group"},[s("div",{staticClass:"slider-item_title",domProps:{textContent:t._s(e.title)}}),s("div",{staticClass:"slider-item_taste",domProps:{textContent:t._s(e.taste)}})])]),s("div",[s("div",{staticClass:"slider-item_choose item-choose"},[s("div",{staticClass:"item-choose_container"},[s("div",{staticClass:"item-choose_wrap"},[s("div",{staticClass:"item-choose_weight choose-weight"},t._l(e.priseStructure[e.typeChoosed].prises,(function(i,o){return s("div",{key:o,staticClass:"choose-weight_item"},[s("label",{class:{active:o===e.weightChoosed}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.weightChoosed,expression:"el.weightChoosed"}],attrs:{type:"radio",required:"",name:"weight"},domProps:{value:o,checked:t._q(e.weightChoosed,o)},on:{change:function(s){return t.$set(e,"weightChoosed",o)}}}),t._v(" "+t._s(t.weightText(o))+" ")])])})),0),s("div",{staticClass:"item-choose_type choose-type"},t._l(e.priseStructure,(function(i,o){return s("div",{key:o,staticClass:"choose-type_item"},[s("label",{class:{active:o===e.typeChoosed}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.typeChoosed,expression:"el.typeChoosed"}],attrs:{type:"radio",required:"",name:"type"},domProps:{value:o,checked:t._q(e.typeChoosed,o)},on:{change:function(s){return t.$set(e,"typeChoosed",o)}}}),t._v(" "+t._s("ground"===o?"мелена":"зерна")+" ")])])})),0)])])]),s("div",{staticClass:"slider-item_footer item-footer"},[s("button",{staticClass:"item-footer_price"},["object"===typeof t.calcPrise(e.id)?[s("span",{staticClass:"new"},[t._v(t._s(t.calcPrise(e.id).new)+" грн")]),s("span",{staticClass:"old"},[t._v(t._s(t.calcPrise(e.id).old)+" грн")])]:[s("span",{domProps:{innerHTML:t._s(t.calcPrise(e.id))}}),t._v(" "),s("span",[t._v("грн")])]],2),s("div",{class:["item-footer_basket-group",{active:t.isBasketEmpty(e)}]},[s("div",{staticClass:"item-footer_basket-control basket-control"},[s("button",{staticClass:"basket-control_minus",on:{click:function(s){return t.decrementProduct(e)}}},[t._v(" - ")]),s("button",{staticClass:"basket-control_plus",on:{click:function(s){return t.incrementProduct(e)}}},[t._v(" + ")])]),s("button",{class:["item-footer_basket basket"],on:{click:function(s){return t.addInBasket(e)}}},[s("svg",{staticClass:"basket_img",attrs:{width:"22",height:"26",viewBox:"0 0 22 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16.1187 5V5.34984C18.5888 5.61682 20.5424 7.73416 20.6989 10.3787L21.2399 19.5216C21.4227 22.6117 19.0972 25.25 16.1309 25.25H5.86905C2.90284 25.25 0.577238 22.6117 0.760089 19.5216L1.30108 10.3787C1.45754 7.73431 3.41094 5.61706 5.8809 5.34989V5C5.8809 2.66586 7.67556 0.75 9.91781 0.75H12.0818C14.324 0.75 16.1187 2.66586 16.1187 5ZM14.5367 5V5.32143H7.46287V5C7.46287 3.54705 8.5747 2.39286 9.91781 2.39286H12.0818C13.4248 2.39286 14.5367 3.54705 14.5367 5ZM2.88007 10.4795C2.9977 8.49159 4.55425 6.96429 6.41004 6.96429H15.5899C17.4457 6.96429 19.0023 8.49159 19.1199 10.4795L19.6609 19.6224C19.7895 21.7958 18.1576 23.6071 16.1309 23.6071H5.86905C3.84242 23.6071 2.21047 21.7958 2.33908 19.6224L2.88007 10.4795ZM7.46287 9.32143H5.8809V10.7143C5.8809 13.0484 7.67556 14.9643 9.91781 14.9643H12.0818C14.324 14.9643 16.1187 13.0484 16.1187 10.7143V9.32143H14.5367V10.7143C14.5367 12.1672 13.4248 13.3214 12.0818 13.3214H9.91781C8.57471 13.3214 7.46287 12.1672 7.46287 10.7143V9.32143Z",fill:"#1B1B1A"}})]),t.isBasketEmpty(e)?s("span",{staticClass:"basket_count",domProps:{textContent:t._s(t.showBasketCnt(e))}}):s("span",{staticClass:"basket_text"},[t._v("кошик")])])])])])])])})),0)],1)])},p=[],C=(s(1539),s(4747),s(8862),s(561),s(2529)),v=s.n(C),_={name:"Catalog",components:{VueSlickCarousel:v()},data:function(){return{products:[],currentSlide:0}},computed:{},methods:{getImg:function(t){return s(990)("./".concat(t))},calcPrise:function(t){var e="";return this.products.forEach((function(s){if(s.id===t){var i=s["priseStructure"][s.typeChoosed],o=i["prises"];return e=o[s.weightChoosed],e}})),e},isBasketEmpty:function(t){var e=this._findElInBasket(t,(function(t){return t.cnt>0}));return e},_findElInBasket:function(t,e){var s;return t.addedInBasket.forEach((function(i){if(t.typeChoosed!==i.typeChoosed||t.weightChoosed!==i.weightChoosed)return!1;s=e(i)})),s},showBasketCnt:function(t){return this._findElInBasket(t,(function(t){return t.cnt}))},addInBasket:function(t){var e={cnt:1,weightChoosed:t.weightChoosed,typeChoosed:t.typeChoosed};t.addedInBasket.push(e);var s=JSON.parse(JSON.stringify(t));this.$store.commit("addInBaskt",{clone:JSON.parse(JSON.stringify(s)),basketObj:JSON.parse(JSON.stringify(e))})},incrementProduct:function(t){var e=this;this._findElInBasket(t,(function(s){s.cnt++,e.$store.commit("incrProdInBasket",{id:t.id,typeChoosed:s.typeChoosed,weightChoosed:s.weightChoosed})}))},decrementProduct:function(t){for(var e=t.addedInBasket,s=0;s<e.length;s++){var i=e[s],o={id:t.id,typeChoosed:i.typeChoosed,weightChoosed:i.weightChoosed};i.typeChoosed===t.typeChoosed&&i.weightChoosed===t.weightChoosed&&(i.cnt-1!=0?(i.cnt--,this.$store.commit("decrProdInBasket",o)):(e.splice(s,1),this.$store.commit("decrProdInBasket",o)))}},prev:function(){this.$refs.carousel.prev()},next:function(){this.$refs.carousel.next()},changed:function(t){this.currentSlide=t},weightText:function(t){return"1000"===t?"1 кг":"".concat(t," г")}},created:function(){this.products=this.$store.getters.getAllProducts}},m=_,f=(0,l.Z)(m,h,p,!1,null,"0950a4cf",null),k=f.exports,g={name:"CatalogPage",components:{Links:u,Catalog:k}},w=g,y=(0,l.Z)(w,i,o,!1,null,"6e4713cf",null),b=y.exports}}]);