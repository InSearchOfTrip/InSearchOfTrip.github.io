(self["webpackChunkfortissimo"]=self["webpackChunkfortissimo"]||[]).push([[735],{813:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return B}});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header"),s("div",{staticClass:"catalog"},[s("BreadCrumbs",{attrs:{items:t.breadCrumbs}}),s("Links"),s("Sorter",{on:{setSortedOptions:t.setOptions}}),s("Catalog",{attrs:{sortedPoducts:t.getProducts,rows:t.cualityRows(),sliderSettings:{slidesToShow:4,slidesToScroll:4,infinite:!1,swipe:!1,dots:!0,arrows:!1,adaptiveHeight:!1,rows:t.cualityRows(),responsive:[{breakpoint:1600,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1}},{breakpoint:1199,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,infinite:!1,rows:8}}]}}})],1),s("Footer")],1)},o=[],i=(s(2707),s(1539),s(2656)),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"sorter"},[s("div",{staticClass:"sorter_wrapper"},[s("div",{staticClass:"container"},[s("div",{staticClass:"sorter_group"},[s("div",{staticClass:"sorter_radio sorter-radio"},[s("div",{staticClass:"sorter-radio_text"},[t._v("маса")]),s("div",{staticClass:"sorter-radio_input-group"},[s("div",{staticClass:"sorter-radio_input",class:{active:"250"===t.sort.weight}},[s("label",[t._v(" 250 г "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.sort.weight,expression:"sort.weight"}],attrs:{type:"radio",value:"250"},domProps:{checked:t._q(t.sort.weight,"250")},on:{change:function(e){return t.$set(t.sort,"weight","250")}}})])]),s("div",{staticClass:"sorter-radio_input",class:{active:"500"===t.sort.weight}},[s("label",[t._v(" 500 г "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.sort.weight,expression:"sort.weight"}],attrs:{type:"radio",value:"500"},domProps:{checked:t._q(t.sort.weight,"500")},on:{change:function(e){return t.$set(t.sort,"weight","500")}}})])]),s("div",{staticClass:"sorter-radio_input",class:{active:"1000"===t.sort.weight}},[s("label",[t._v(" 1 кг "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.sort.weight,expression:"sort.weight"}],attrs:{type:"radio",value:"1000"},domProps:{checked:t._q(t.sort.weight,"1000")},on:{change:function(e){return t.$set(t.sort,"weight","1000")}}})])])])]),s("div",{staticClass:"sorter_radio sorter-radio"},[s("div",{staticClass:"sorter-radio_text"},[t._v("помел")]),s("div",{staticClass:"sorter-radio_input-group"},[s("div",{staticClass:"sorter-radio_input",class:{active:"Мелена"===t.sort.type}},[s("label",[t._v(" Мелена "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.sort.type,expression:"sort.type"}],attrs:{type:"radio",value:"Мелена"},domProps:{checked:t._q(t.sort.type,"Мелена")},on:{change:function(e){return t.$set(t.sort,"type","Мелена")}}})])]),s("div",{staticClass:"sorter-radio_input",class:{active:"Зерна"===t.sort.type}},[s("label",[t._v(" Зерна "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.sort.type,expression:"sort.type"}],attrs:{type:"radio",value:"Зерна"},domProps:{checked:t._q(t.sort.type,"Зерна")},on:{change:function(e){return t.$set(t.sort,"type","Зерна")}}})])])])]),s("div",{staticClass:"sorter_clear"},[s("button",{on:{click:t.clearSort}},[t._v("Очистити фільтри")])])]),s("div",{staticClass:"sorter_group"},[s("div",{staticClass:"sorter_type sorter-type"},[s("div",{staticClass:"sorter-type_text"},[t._v("Сортувати")]),s("div",{staticClass:"sorter-type_select"},[s("v-select",{attrs:{value:t.sort.sortType,options:t.sortOptions},on:{search:t.searching,input:t.onSelect}})],1)])])])])])},a=[],c=s(9938),d=s.n(c),l={components:{vSelect:d()},data:function(){return{sort:{weight:"",type:"",sortType:"По замовчуванню"},sortOptions:["По замовчуванню","Спочатку дешеві","Спочатку дорогі","Новинка","Хіт продажів","Акція"]}},methods:{clearSort:function(){this.sort.weight="",this.sort.type=""},onSelect:function(t){this.sort.sortType=t},searching:function(){console.log("searching")}},watch:{sort:{handler:function(){this.$emit("setSortedOptions",this.sort)},deep:!0}},beforeCreate:function(){}},u=l,h=s(3736),p=(0,h.Z)(u,n,a,!1,null,"9488f890",null),v=p.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"products_slider products-slider",class:"rows_"+t.rows},[s("div",{staticClass:"products-slider_wrapper"},[s("VueSlickCarousel",t._b({ref:"carousel",on:{afterChange:t.changed,reInit:t.addArrows}},"VueSlickCarousel",t.sliderSettings,!1),t._l(t.sortedPoducts,(function(e,r){return s("div",{key:r,staticClass:"products-slider_container"},[s("div",{staticClass:"products-slider_item slider-item"},[s("router-link",{staticClass:"slider-item_top",attrs:{tag:"div",to:"/productPage:"+e.id}},[s("div",{staticClass:"slider-item_head item-head"},[s("div",{staticClass:"item-head_markers head-markers"},t._l(e.marks,(function(e,r){return s("div",{key:r,staticClass:"head-markers_item",domProps:{textContent:t._s(e)}})})),0)]),s("div",{staticClass:"slider-item_img"},[s("img",{attrs:{src:t.getImg(e.img),alt:""}})]),s("div",{staticClass:"slider-item_group"},[s("div",{staticClass:"slider-item_title",domProps:{textContent:t._s(e.title)}}),s("div",{staticClass:"slider-item_taste",domProps:{textContent:t._s(e.taste)}})])]),s("div",[s("div",{staticClass:"slider-item_choose item-choose"},[s("div",{staticClass:"item-choose_container"},[s("div",{staticClass:"item-choose_wrap"},[s("div",{staticClass:"item-choose_weight choose-weight"},t._l(e.priseStructure[e.typeChoosed].prises,(function(r,o){return s("div",{key:o,staticClass:"choose-weight_item"},[s("label",{class:{active:o===e.weightChoosed}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.weightChoosed,expression:"el.weightChoosed"}],attrs:{type:"radio",required:"",name:"weight"},domProps:{value:o,checked:t._q(e.weightChoosed,o)},on:{change:function(s){return t.$set(e,"weightChoosed",o)}}}),t._v(" "+t._s(t.weightText(o))+" ")])])})),0),s("div",{staticClass:"item-choose_type choose-type"},t._l(e.priseStructure,(function(r,o){return s("div",{key:o,staticClass:"choose-type_item"},[s("label",{class:{active:o===e.typeChoosed}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.typeChoosed,expression:"el.typeChoosed"}],attrs:{type:"radio",required:"",name:"type"},domProps:{value:o,checked:t._q(e.typeChoosed,o)},on:{change:function(s){return t.$set(e,"typeChoosed",o)}}}),t._v(" "+t._s("ground"===o?"мелена":"зерна")+" ")])])})),0)])])]),s("div",{staticClass:"slider-item_footer item-footer"},[s("button",{staticClass:"item-footer_price"},["object"===typeof t.calcPrise(e.id)?[s("span",{staticClass:"new"},[t._v(t._s(t.calcPrise(e.id).new)+" грн")]),s("span",{staticClass:"old"},[t._v(t._s(t.calcPrise(e.id).old)+" грн")])]:[s("span",{domProps:{innerHTML:t._s(t.calcPrise(e.id))}}),t._v(" "),s("span",[t._v("грн")])]],2),s("div",{class:["item-footer_basket-group",{active:t.isBasketEmpty(e)}]},[s("div",{staticClass:"item-footer_basket-control basket-control"},[s("button",{staticClass:"basket-control_minus",on:{click:function(s){return t.decrementProduct(e)}}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"}},[s("path",{attrs:{d:"M5 12H19",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])]),s("button",{staticClass:"basket-control_plus",on:{click:function(s){return t.incrementProduct(e)}}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"}},[s("path",{attrs:{d:"M8 1V15M1 8H15",stroke:"black","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),s("button",{class:["item-footer_basket basket"],on:{click:function(s){return t.addInBasket(e)}}},[s("svg",{staticClass:"basket_img",attrs:{width:"22",height:"26",viewBox:"0 0 22 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16.1187 5V5.34984C18.5888 5.61682 20.5424 7.73416 20.6989 10.3787L21.2399 19.5216C21.4227 22.6117 19.0972 25.25 16.1309 25.25H5.86905C2.90284 25.25 0.577238 22.6117 0.760089 19.5216L1.30108 10.3787C1.45754 7.73431 3.41094 5.61706 5.8809 5.34989V5C5.8809 2.66586 7.67556 0.75 9.91781 0.75H12.0818C14.324 0.75 16.1187 2.66586 16.1187 5ZM14.5367 5V5.32143H7.46287V5C7.46287 3.54705 8.5747 2.39286 9.91781 2.39286H12.0818C13.4248 2.39286 14.5367 3.54705 14.5367 5ZM2.88007 10.4795C2.9977 8.49159 4.55425 6.96429 6.41004 6.96429H15.5899C17.4457 6.96429 19.0023 8.49159 19.1199 10.4795L19.6609 19.6224C19.7895 21.7958 18.1576 23.6071 16.1309 23.6071H5.86905C3.84242 23.6071 2.21047 21.7958 2.33908 19.6224L2.88007 10.4795ZM7.46287 9.32143H5.8809V10.7143C5.8809 13.0484 7.67556 14.9643 9.91781 14.9643H12.0818C14.324 14.9643 16.1187 13.0484 16.1187 10.7143V9.32143H14.5367V10.7143C14.5367 12.1672 13.4248 13.3214 12.0818 13.3214H9.91781C8.57471 13.3214 7.46287 12.1672 7.46287 10.7143V9.32143Z",fill:"#1B1B1A"}})]),t.isBasketEmpty(e)?s("span",{staticClass:"basket_count",domProps:{textContent:t._s(t.showBasketCnt(e))}}):s("span",{staticClass:"basket_text"},[t._v("кошик")])])])])])],1)])})),0)],1)])},f=[],g=(s(4747),s(8862),s(561),s(2529)),m=s.n(g),w={name:"Catalog",components:{VueSlickCarousel:m()},props:["sortedPoducts","sliderSettings","rows"],data:function(){return{products:[],currentSlide:0,dotsCtn:0}},computed:{getAllProducts:function(){var t=this.$store.getters.getAllProducts;return this.products=t,t}},methods:{getImg:function(t){return"https://fortissimo.devseonet.com//storage/".concat(t)},calcPrise:function(t){var e="";return this.sortedPoducts.forEach((function(s){if(s.id===t){var r=s["priseStructure"][s.typeChoosed],o=r["prises"];return e=o[s.weightChoosed],e}})),e},isBasketEmpty:function(t){var e=this._findElInBasket(t,(function(t){return t.cnt>0}));return e},_findElInBasket:function(t,e){var s;return t.addedInBasket.forEach((function(r){if(t.typeChoosed!==r.typeChoosed||t.weightChoosed!==r.weightChoosed)return!1;s=e(r)})),s},showBasketCnt:function(t){return this._findElInBasket(t,(function(t){return t.cnt}))},addInBasket:function(t){var e={cnt:1,weightChoosed:t.weightChoosed,typeChoosed:t.typeChoosed};t.addedInBasket.push(e);var s=JSON.parse(JSON.stringify(t));this.$store.commit("addInBaskt",{clone:JSON.parse(JSON.stringify(s)),basketObj:JSON.parse(JSON.stringify(e))})},incrementProduct:function(t){var e=this;this._findElInBasket(t,(function(s){s.cnt++,e.$store.commit("incrProdInBasket",{id:t.id,typeChoosed:s.typeChoosed,weightChoosed:s.weightChoosed})}))},decrementProduct:function(t){for(var e=t.addedInBasket,s=0;s<e.length;s++){var r=e[s],o={id:t.id,typeChoosed:r.typeChoosed,weightChoosed:r.weightChoosed};r.typeChoosed===t.typeChoosed&&r.weightChoosed===t.weightChoosed&&(r.cnt-1!=0?(r.cnt--,this.$store.commit("decrProdInBasket",o)):(e.splice(s,1),this.$store.commit("decrProdInBasket",o)))}},prev:function(){this.$refs.carousel.prev()},next:function(){this.$refs.carousel.next()},changed:function(t){this.currentSlide=t},weightText:function(t){return"1000"===t?"1 кг":"".concat(t," г")},addArrows:function(){var t,e=document.querySelector(".slick-dots");if(e&&(t=e.querySelectorAll("li").length),e&&t!==this.dotsCtn){this.dotsCtn=t;var s=document.querySelector(".control");s&&s.remove();var r=document.createElement("div");r.classList.add("control");var o=document.createElement("button"),i=document.createElement("button");o.classList.add("control_prev"),i.classList.add("control_next"),o.onclick=this.prev,i.onclick=this.next,o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none" > <path d="M0.22528 7.8042C0.568878 8.17662 1.11035 8.4496 1.51858 8.73363C2.42116 9.36204 8.49003 13.5699 8.2635 13.2961C9.00877 14.1958 10.27 12.8965 9.5308 12.0028C9.21931 11.6268 8.60919 11.3611 8.2149 11.104C7.29669 10.5048 3.9192 8.3138 3.14583 7.81822C4.27759 7.89542 10.1627 8.00604 11.9727 8.04508C15.5901 8.12314 19.2875 8.43195 22.9011 8.24218C24.365 8.16498 24.3675 5.99449 22.9011 5.91753C19.2877 5.72755 15.5901 6.03635 11.9727 6.11463C10.226 6.15237 4.15194 6.25329 2.86686 6.36263C3.64213 5.64473 4.42453 4.93612 5.20807 4.2275C6.35816 3.18958 7.99633 2.19114 8.79419 0.840757C8.92491 0.619935 8.70845 0.343692 8.46918 0.409895C6.93811 0.828462 5.48727 2.30565 4.24635 3.27754C2.86796 4.35791 1.5392 5.50884 0.225405 6.67179C-0.100877 6.96205 -0.0482042 7.50769 0.22528 7.8042Z" fill="#1B1B1A" /> </svg>',i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="14" viewBox="0 0 24 14" fill="none" > <path d="M0.22528 7.8042C0.568878 8.17662 1.11035 8.4496 1.51858 8.73363C2.42116 9.36204 8.49003 13.5699 8.2635 13.2961C9.00877 14.1958 10.27 12.8965 9.5308 12.0028C9.21931 11.6268 8.60919 11.3611 8.2149 11.104C7.29669 10.5048 3.9192 8.3138 3.14583 7.81822C4.27759 7.89542 10.1627 8.00604 11.9727 8.04508C15.5901 8.12314 19.2875 8.43195 22.9011 8.24218C24.365 8.16498 24.3675 5.99449 22.9011 5.91753C19.2877 5.72755 15.5901 6.03635 11.9727 6.11463C10.226 6.15237 4.15194 6.25329 2.86686 6.36263C3.64213 5.64473 4.42453 4.93612 5.20807 4.2275C6.35816 3.18958 7.99633 2.19114 8.79419 0.840757C8.92491 0.619935 8.70845 0.343692 8.46918 0.409895C6.93811 0.828462 5.48727 2.30565 4.24635 3.27754C2.86796 4.35791 1.5392 5.50884 0.225405 6.67179C-0.100877 6.96205 -0.0482042 7.50769 0.22528 7.8042Z" fill="#1B1B1A" /> </svg>',r.appendChild(o),r.appendChild(e),r.appendChild(i),document.querySelector(".products-slider_wrapper").appendChild(r)}}},beforeMount:function(){this.products=this.sortedPoducts}},_=w,k=(0,h.Z)(_,C,f,!1,null,"fe127650",null),y=k.exports,b=s(6325),P={name:"CatalogPage",components:{Links:i.Z,Catalog:y,BreadCrumbs:b.Z,Sorter:v},data:function(){return{breadCrumbs:[{name:"Головна",link:"/"},{name:"Каталог",link:"catalog"}],sortedOptions:"",sortedProducts:[]}},computed:{getProducts:function(){0===this.sortedProducts.length&&(this.sortedProducts=this.$store.getters.getAllProducts);var t=this.sortedMain(this.sortedOptions);return t}},methods:{setOptions:function(t){this.sortedOptions=t},getSorterProducts:function(){return 0===this.products.length&&(console.log("true"),this.products=this.$store.getters.getAllProducts),this.products},sortMarks:function(t,e){return t.sort((function(t){var s=t.marks.some((function(t){return t===e}));return s?-1:1}))},cheapFirst:function(t){return t.sort((function(t,e){var s=t.priseStructure.grains.prises["250"]||t.priseStructure.ground.prises["250"];console.log(s)}))},sortedMain:function(t){switch(t.sortType){case"Новинка":return this.sortMarks(this.sortedProducts,"Новинка");case"Хіт продажів":return this.sortMarks(this.sortedProducts,"Хіт продажів");case"Акція":return this.sortMarks(this.sortedProducts,"Акція");case"Спочатку дешеві":return this.cheapFirst(this.sortedProducts);default:return this.$store.getters.getAllProducts}},cualityRows:function(){var t=this.sortedProducts.length;return t>=12?3:t>=8&&t<12?2:1}},beforeCreate:function(){this.$store.dispatch("loadProducts"),this.$store.commit("setNewFields")}},S=P,x=(0,h.Z)(S,r,o,!1,null,"5eba2adb",null),B=x.exports},4362:function(t,e,s){var r=s(1589),o=Math.floor,i=function(t,e){var s=t.length,c=o(s/2);return s<8?n(t,e):a(t,i(r(t,0,c),e),i(r(t,c),e),e)},n=function(t,e){var s,r,o=t.length,i=1;while(i<o){r=i,s=t[i];while(r&&e(t[r-1],s)>0)t[r]=t[--r];r!==i++&&(t[r]=s)}return t},a=function(t,e,s,r){var o=e.length,i=s.length,n=0,a=0;while(n<o||a<i)t[n+a]=n<o&&a<i?r(e[n],s[a])<=0?e[n++]:s[a++]:n<o?e[n++]:s[a++];return t};t.exports=i},8886:function(t,e,s){var r=s(8113),o=r.match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},256:function(t,e,s){var r=s(8113);t.exports=/MSIE|Trident/.test(r)},8008:function(t,e,s){var r=s(8113),o=r.match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},2707:function(t,e,s){"use strict";var r=s(2109),o=s(1702),i=s(9662),n=s(7908),a=s(6244),c=s(1340),d=s(7293),l=s(4362),u=s(9341),h=s(8886),p=s(256),v=s(7392),C=s(8008),f=[],g=o(f.sort),m=o(f.push),w=d((function(){f.sort(void 0)})),_=d((function(){f.sort(null)})),k=u("sort"),y=!d((function(){if(v)return v<70;if(!(h&&h>3)){if(p)return!0;if(C)return C<603;var t,e,s,r,o="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:s=3;break;case 68:case 71:s=4;break;default:s=2}for(r=0;r<47;r++)f.push({k:e+r,v:s})}for(f.sort((function(t,e){return e.v-t.v})),r=0;r<f.length;r++)e=f[r].k.charAt(0),o.charAt(o.length-1)!==e&&(o+=e);return"DGBEFHACIJK"!==o}})),b=w||!_||!k||!y,P=function(t){return function(e,s){return void 0===s?-1:void 0===e?1:void 0!==t?+t(e,s)||0:c(e)>c(s)?1:-1}};r({target:"Array",proto:!0,forced:b},{sort:function(t){void 0!==t&&i(t);var e=n(this);if(y)return void 0===t?g(e):g(e,t);var s,r,o=[],c=a(e);for(r=0;r<c;r++)r in e&&m(o,e[r]);l(o,P(t)),s=o.length,r=0;while(r<s)e[r]=o[r++];while(r<c)delete e[r++];return e}})}}]);