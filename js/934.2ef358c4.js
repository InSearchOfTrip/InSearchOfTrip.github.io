"use strict";(self["webpackChunkfortissimo"]=self["webpackChunkfortissimo"]||[]).push([[934],{3271:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("Header"),r("div",{staticClass:"orderPage"},[r("BreadCrumbs",{attrs:{items:e.breadCrumbs}}),r("Order")],1),r("Footer")],1)},o=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.showPopup?r("SuccesOrder",{attrs:{orderNumber:e.orderNumber,orderTitle:"Замовлення оформлено!",orderText:"Дякуємо, що обрали нас! Ваше замовлення успішно оформлено, очікуйте на смс повідомлення"},on:{closePopup:function(t){e.showPopup=!1}}}):e._e(),r("div",{staticClass:"order"},[r("div",{staticClass:"order_wrap"},[e._m(0),r("form",{ref:"form",staticClass:"order_content order-content"},[r("div",{staticClass:"order-content_fields order-fields"},[r("div",{staticClass:"order-fields_contacts order-contacts"},[r("div",{staticClass:"order-contacts_title order-title"},[e._v("Контактні дані")]),r("div",{staticClass:"order-contacts_field-wrap"},[r("div",{staticClass:"order-contacts_row"},[r("div",{staticClass:"order-contacts_field input-wrap",class:{error:e.$v.form.lastName.$error}},[r("input",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:e.$v.form.lastName.$model,expression:"$v.form.lastName.$model",modifiers:{trim:!0,lazy:!0}}],attrs:{type:"text",placeholder:"Прізвище"},domProps:{value:e.$v.form.lastName.$model},on:{change:function(t){e.$set(e.$v.form.lastName,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"order-contacts_field input-wrap",class:{error:e.$v.form.firstName.$error}},[r("input",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:e.$v.form.firstName.$model,expression:"$v.form.firstName.$model",modifiers:{trim:!0,lazy:!0}}],attrs:{type:"text",placeholder:"Ім‘я"},domProps:{value:e.$v.form.firstName.$model},on:{change:function(t){e.$set(e.$v.form.firstName,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"order-contacts_field input-wrap",class:{error:e.$v.form.phone.$error}},[r("input",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:e.$v.form.phone.$model,expression:"$v.form.phone.$model",modifiers:{trim:!0,lazy:!0}}],attrs:{type:"text",placeholder:"Телефон"},domProps:{value:e.$v.form.phone.$model},on:{change:function(t){e.$set(e.$v.form.phone,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"order-contacts_field input-wrap",class:{error:e.$v.form.mail.$error}},[r("input",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:e.$v.form.mail.$model,expression:"$v.form.mail.$model",modifiers:{trim:!0,lazy:!0}}],attrs:{type:"text",placeholder:"Email"},domProps:{value:e.$v.form.mail.$model},on:{change:function(t){e.$set(e.$v.form.mail,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])])])]),r("div",{staticClass:"order-fields_delivery order-delivery"},[r("div",{staticClass:"order-delivery_title order-title"},[e._v(" Спосіб доставки ")]),r("div",{staticClass:"order-delivery_company order-company"},[r("label",{staticClass:"order-company_item radio input-wrap"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.deliveryCompany,expression:"form.deliveryCompany"}],attrs:{type:"radio",value:"Нова пошта кур’єр",name:"order-company"},domProps:{checked:e._q(e.form.deliveryCompany,"Нова пошта кур’єр")},on:{change:function(t){return e.$set(e.form,"deliveryCompany","Нова пошта кур’єр")}}}),r("div",{staticClass:"circle"}),e._v(" Нова пошта кур’єр ")]),r("label",{staticClass:"order-company_item radio input-wrap"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.deliveryCompany,expression:"form.deliveryCompany"}],attrs:{type:"radio",value:"Нова пошта відділення",name:"order-company"},domProps:{checked:e._q(e.form.deliveryCompany,"Нова пошта відділення")},on:{change:function(t){return e.$set(e.form,"deliveryCompany","Нова пошта відділення")}}}),r("div",{staticClass:"circle"}),e._v(" Нова пошта відділення ")]),r("label",{staticClass:"order-company_item radio input-wrap"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.deliveryCompany,expression:"form.deliveryCompany"}],attrs:{type:"radio",value:"Самовивіз",name:"order-company"},domProps:{checked:e._q(e.form.deliveryCompany,"Самовивіз")},on:{change:function(t){return e.$set(e.form,"deliveryCompany","Самовивіз")}}}),r("div",{staticClass:"circle"}),e._v(" Самовивіз ")])]),e.orderType("Нова пошта кур’єр")?r("div",{staticClass:"order-delivery_address order-address"},[r("div",{staticClass:"order-address_row order-address_row"},[r("div",{staticClass:"\n                    order-address_input order-address_city order-address_item\n                  ",class:{error:e.$v.form.city.$error}},[r("label",[r("span",[e._v("Місто/Населений пункт")]),r("v-select",{attrs:{value:e.form.city,options:e.cityesShow,label:"Description"},on:{search:e.searching,input:e.onSelectCity}})],1)]),r("div",{staticClass:"order-address_street order-address_item"},[r("label",[r("span",[e._v("Вулиця")]),r("div",{staticClass:"order-address_input-wrap input-wrap",class:{error:e.$v.form.street.$error}},[r("input",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:e.$v.form.street.$model,expression:"$v.form.street.$model",modifiers:{trim:!0,lazy:!0}}],attrs:{type:"text"},domProps:{value:e.$v.form.street.$model},on:{change:function(t){e.$set(e.$v.form.street,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])])])]),r("div",{staticClass:"order-address_row order-address_row-house"},[r("div",{staticClass:"order-address_item input-wrap",class:{error:e.$v.form.house.$error}},[r("input",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:e.$v.form.house.$model,expression:"$v.form.house.$model",modifiers:{trim:!0,lazy:!0}}],attrs:{type:"text",placeholder:"№ будинку"},domProps:{value:e.$v.form.house.$model},on:{change:function(t){e.$set(e.$v.form.house,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"order-address_item input-wrap"},[r("input",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:e.form.apartmant,expression:"form.apartmant",modifiers:{trim:!0,lazy:!0}}],attrs:{type:"text",placeholder:"№ квартири"},domProps:{value:e.form.apartmant},on:{change:function(t){e.$set(e.form,"apartmant",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"order-address_item input-wrap"},[r("input",{directives:[{name:"model",rawName:"v-model.trim.lazy",value:e.form.entrance,expression:"form.entrance",modifiers:{trim:!0,lazy:!0}}],attrs:{type:"text",placeholder:"№ під’їзду"},domProps:{value:e.form.entrance},on:{change:function(t){e.$set(e.form,"entrance",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e._m(1)]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.comment,expression:"form.comment"}],attrs:{name:"wish",placeholder:"Побажання до замовлення"},domProps:{value:e.form.comment},on:{input:function(t){t.target.composing||e.$set(e.form,"comment",t.target.value)}}})]):e._e(),e.orderType("Нова пошта відділення")?r("div",{staticClass:"order-delivery_department order-department"},[r("div",{staticClass:"order-department_item",class:{error:e.$v.form.city.$error}},[r("label",[r("span",[e._v("Місто/Населений пункт")]),r("v-select",{attrs:{value:e.form.city,options:e.cityesShow,label:"Description"},on:{search:e.searching,input:e.onSelectCity}})],1)]),r("div",{staticClass:"order-department_item",class:{error:e.$v.form.NpWarehouse.$error}},[r("label",[r("span",[e._v("Оберіть відділення")]),r("v-select",{attrs:{value:e.form.NpWarehouse,options:e.NpWarehousesArr,label:"Description"},on:{input:e.onSelectDep}})],1)]),r("textarea",{attrs:{name:"wish",placeholder:"Побажання до замовлення"}})]):e._e(),e.orderType("Самовивіз")?r("div",{staticClass:"order-delivery_self order-self"},[r("div",{staticClass:"order-self_info"},[e._v(" Забирайте замовлення за адресою м. Рівне, вул. Івана Франка 11. Графік роботи 09:00–23:00, без вихідних. ")])]):e._e()]),r("div",{staticClass:"order-fields_pay order-pay"},[r("div",{staticClass:"order-pay_title order-title"},[e._v("Спосіб оплати")]),"Самовивіз"!==e.form.deliveryCompany?r("div",{staticClass:"order-pay_payType order-payType"},[r("label",{staticClass:"order-payType_item radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.payType,expression:"form.payType"}],attrs:{type:"radio",value:"Онлайн оплата карткою / Liqpay",name:"order-payType"},domProps:{checked:e._q(e.form.payType,"Онлайн оплата карткою / Liqpay")},on:{change:function(t){return e.$set(e.form,"payType","Онлайн оплата карткою / Liqpay")}}}),r("div",{staticClass:"circle"}),e._v(" Онлайн оплата карткою / Liqpay ")]),r("label",{staticClass:"order-payType_item radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.payType,expression:"form.payType"}],attrs:{type:"radio",value:"Накладений платіж (післяоплата)",name:"order-cpayType"},domProps:{checked:e._q(e.form.payType,"Накладений платіж (післяоплата)")},on:{change:function(t){e.$set(e.form,"payType","Накладений платіж (післяоплата)")}}}),r("div",{staticClass:"circle"}),e._v(" Накладений платіж (післяоплата) ")])]):r("div",{staticClass:"order-pay_payType order-payType"},[r("label",{staticClass:"order-payType_item radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.payTypeSD,expression:"form.payTypeSD"}],attrs:{type:"radio",value:"Онлайн оплата карткою / Liqpay",name:"order-payType"},domProps:{checked:e._q(e.form.payTypeSD,"Онлайн оплата карткою / Liqpay")},on:{change:function(t){return e.$set(e.form,"payTypeSD","Онлайн оплата карткою / Liqpay")}}}),r("div",{staticClass:"circle"}),e._v(" Онлайн оплата карткою / Liqpay ")]),r("label",{staticClass:"order-payType_item radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.payTypeSD,expression:"form.payTypeSD"}],attrs:{type:"radio",value:"Накладений платіж (післяоплата)",name:"order-cpayType"},domProps:{checked:e._q(e.form.payTypeSD,"Накладений платіж (післяоплата)")},on:{change:function(t){e.$set(e.form,"payTypeSD","Накладений платіж (післяоплата)")}}}),r("div",{staticClass:"circle"}),e._v(" Готівка ")])])])]),r("div",{staticClass:"order-content_products order-products"},[r("div",{staticClass:"order-products_products"},[r("div",{staticClass:"order-products_title order-title"},[e._v("замовлення")]),r("div",{staticClass:"order-products_main products-main"},e._l(e.getBasket,(function(t,s){return r("div",{key:s,staticClass:"products-main_row"},e._l(t.addedInBasket,(function(s,o){return r("div",{key:o,staticClass:"products-main_item products-item"},[r("div",{staticClass:"products-item_img"},[r("img",{attrs:{src:e.getImg(t.img),alt:""}})]),r("div",{staticClass:"products-item_control products-control"},[r("div",{staticClass:"products-control_top"},[r("div",{staticClass:"products-control_title",domProps:{textContent:e._s(t.title)}},[e._v(" Бразилія Сантос 100% арабіка ")]),r("div",{staticClass:"products-control_choosed products-choosed"},e._l(e.productParams(t),(function(e,t){return r("div",{key:t,staticClass:"products-choosed_item"})})),0)]),r("div",{staticClass:"products-control_bottom"},[r("div",{staticClass:"products-control_prise",domProps:{textContent:e._s(e.getPrise(t,s))}}),r("div",{staticClass:"products-control_group"},[r("div",{staticClass:"products-control_minus",on:{click:function(r){return e.decrementProduct(t,s)}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"2",viewBox:"0 0 22 2",fill:"none"}},[r("path",{attrs:{d:"M1.66663 1H20.3333",stroke:"#1B1B1A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])]),r("div",{staticClass:"products-control_count",domProps:{textContent:e._s(e.showBasketCnt(s))}},[e._v(" 0 ")]),r("div",{staticClass:"products-control_plus",on:{click:function(r){return e.incrementProduct(t,s)}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none"}},[r("path",{attrs:{d:"M16.0001 6.6665V25.3332M6.66675 15.9998H25.3334",stroke:"#1B1B1A","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])]),r("div",{staticClass:"products-control_delete",on:{click:function(r){return e.basketDelete(t,s)}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"22",viewBox:"0 0 20 22",fill:"none"}},[r("path",{attrs:{d:"M1 5.07544H3M3 5.07544H19M3 5.07544V19.0754C3 19.6059 3.21071 20.1146 3.58579 20.4897C3.96086 20.8647 4.46957 21.0754 5 21.0754H15C15.5304 21.0754 16.0391 20.8647 16.4142 20.4897C16.7893 20.1146 17 19.6059 17 19.0754V5.07544H3ZM6 5.07544V3.07544C6 2.54501 6.21071 2.0363 6.58579 1.66123C6.96086 1.28615 7.46957 1.07544 8 1.07544H12C12.5304 1.07544 13.0391 1.28615 13.4142 1.66123C13.7893 2.0363 14 2.54501 14 3.07544V5.07544",stroke:"#666666","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])])])})),0)})),0)]),r("div",{staticClass:"order-products_prises order-prises"},[r("div",{staticClass:"order-prises_item"},[r("div",{staticClass:"order-prises_name"},[e._v("Доставка")]),r("div",{staticClass:"order-prises_count"},[e._v(e._s(e.deliveryPrise)+" грн")])]),r("div",{staticClass:"order-prises_item"},[r("div",{staticClass:"order-prises_name"},[e._v("Товарів у кошику")]),r("div",{staticClass:"order-prises_count",domProps:{textContent:e._s(e.productsSum.sum+" грн")}})]),r("div",{staticClass:"order-prises_item order-prises_item--sum"},[r("div",{staticClass:"order-prises_name"},[e._v("До оплати")]),r("div",{staticClass:"order-prises_count",domProps:{textContent:e._s(e.productsSum.sum+e.deliveryPrise+" грн")}})])]),r("div",{staticClass:"order-products_btns order-btns"},[r("button",{staticClass:"order-btns_back",attrs:{type:"button"},on:{click:e.goBack}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"14",viewBox:"0 0 22 13",fill:"none"}},[r("path",{attrs:{d:"M0.206507 7.30637C0.521473 7.64494 1.01782 7.8931 1.39203 8.15132C2.2194 8.72259 7.78254 12.5479 7.57489 12.299C8.25805 13.1169 9.41414 11.9357 8.73658 11.1233C8.45104 10.7814 7.89177 10.5399 7.53034 10.3062C6.68865 9.76146 3.59261 7.76965 2.88368 7.31912C3.92113 7.3893 9.31582 7.48987 10.975 7.52536C14.2909 7.59632 17.6802 7.87705 20.9927 7.70454C22.3346 7.63436 22.3369 5.66118 20.9927 5.59122C17.6804 5.41851 14.2909 5.69924 10.975 5.7704C9.37385 5.80471 3.80595 5.89646 2.62796 5.99585C3.33862 5.34323 4.05583 4.69903 4.77407 4.05483C5.82832 3.11127 7.32998 2.20359 8.06135 0.975972C8.18119 0.775225 7.98276 0.524095 7.76343 0.584279C6.35994 0.964795 5.03 2.30769 3.8925 3.19123C2.62897 4.17339 1.41093 5.21968 0.206622 6.27691C-0.0924711 6.54079 -0.0441873 7.03682 0.206507 7.30637Z",fill:"#1B1B1A"}})]),r("span",[e._v("повернутись")])]),r("button",{staticClass:"order-btns_order",attrs:{type:"button"},on:{click:e.submit}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"23",viewBox:"0 0 18 23",fill:"none"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.4945 4.39152V4.70566C15.6634 4.9454 17.3788 6.84668 17.5161 9.22139L17.9911 17.4313C18.1517 20.2061 16.1097 22.5752 13.5052 22.5752H4.49478C1.8903 22.5752 -0.151694 20.2061 0.00885851 17.4313L0.483873 9.22139C0.621254 6.84682 2.33644 4.94562 4.50519 4.70571V4.39152C4.50519 2.29556 6.081 0.575195 8.0498 0.575195H9.94986C11.9187 0.575195 13.4945 2.29556 13.4945 4.39152ZM12.1054 4.39152V4.68015H5.89424V4.39152C5.89424 3.08683 6.87049 2.05041 8.0498 2.05041H9.94986C11.1292 2.05041 12.1054 3.08683 12.1054 4.39152ZM1.87031 9.31193C1.97359 7.52683 3.34033 6.15537 4.9698 6.15537H13.0302C14.6597 6.15537 16.0264 7.52683 16.1297 9.31193L16.6048 17.5219C16.7176 19.4734 15.2848 21.1 13.5052 21.1H4.49478C2.7153 21.1 1.28237 19.4734 1.39529 17.5219L1.87031 9.31193ZM5.89424 8.27199H4.50519V9.52272C4.50519 11.6187 6.081 13.339 8.0498 13.339H9.94986C11.9187 13.339 13.4945 11.6187 13.4945 9.52272V8.27199H12.1054V9.52272C12.1054 10.8274 11.1292 11.8638 9.94986 11.8638H8.0498C6.87049 11.8638 5.89424 10.8274 5.89424 9.52272V8.27199Z",fill:"#1B1B1A"}})]),r("span",[e._v("оформити замовлення")])])])])])])])],1)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"order_title"},[r("h1",[e._v("Оформлення замовлення")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"order-address_item input-wrap"},[r("input",{attrs:{type:"text",placeholder:"Код домофону"}})])}],d=r(9938),n=r.n(d),l=r(2381),m=r(9669),c=r.n(m),p=r(379);const u=e=>{let t=/[а-яА-ЯёЁіІїЇєЄҐ0-9\/.,\s]+$/;return!(e.length>0)||t.test(e)},v=e=>{let t=/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;return!(e.length>0)||t.test(e)},h=e=>{let t=/[а-яА-ЯёЁіІїЇєЄҐґ.,\s]+$/;return!(e.length>0)||t.test(e)};var f={name:"Order",components:{vSelect:n(),SuccesOrder:l.Z},data(){return{basket:[],form:{firstName:"",lastName:"",phone:"",mail:"",payType:"Онлайн оплата карткою / Liqpay",payTypeSD:"Онлайн оплата карткою / Liqpay",deliveryCompany:"Нова пошта кур’єр",city:"",street:"",house:"",apartmant:"",NpWarehouse:"",comment:""},showPopup:!1,orderNumber:null,citiesArr:[],cityesShow:[],NpWarehousesArr:[]}},computed:{getBasket(){let e=this.$store.getters.getBasket;return this.basket=e,e},productsSum(){let e=this.$store.getters.getBasket,t=0,r=0;return e.length>0&&e.forEach((e=>{e.addedInBasket.forEach((function(s){let o=s.cnt;r+=o;let a=e["priseStructure"][s.typeChoosed],i=a["prises"],d=i[s.weightChoosed];"object"===typeof d?t+=+d.new*o:isNaN(d)||(t+=+d*o)}))})),{count:r,sum:t}},deliveryPrise(){return"Самовивіз"===this.form.deliveryCompany?0:60}},methods:{getPrise(e,t){let r=0;for(let s=0;s<t.cnt;s++){let s=e.priseStructure[t.typeChoosed],o=s.prises,a=o[t.weightChoosed];isNaN(+a)||(r+=+a)}return r+" грн"},orderType(e){return e===this.form.deliveryCompany},_findElInBasket(e,t){let r;return e.addedInBasket.forEach((s=>{if(e.typeChoosed!==s.typeChoosed||e.weightChoosed!==s.weightChoosed)return!1;r=t(s)})),r},getImg(e){return`https://fortissimo.devseonet.com//storage/${e}`},submit(){switch(this.form.deliveryCompany){case"Нова пошта кур’єр":this.$v.form.NpWarehouse.$model=!0;break;case"Нова пошта відділення":this.$v.form.house.$model=!0,this.$v.form.street.$model=!0,this.form.payTypeSD="пусто";break;case"Самовивіз":this.$v.form.street.$model=!0,this.$v.form.city.$model=!0,this.$v.form.NpWarehouse.$model=!0,this.$v.form.house.$model=!0,this.form.payType="пусто";break}if(this.$v.form.$touch(),this.$v.form.$invalid)console.log(this.$v.form),window.scrollTo({top:this.$refs.form.offsetTop-document.querySelector(".header").offsetHeight,behavior:"smooth"});else{let e=JSON.parse(JSON.stringify(this.form));for(let t in e)"boolean"!==typeof e[t]&&0!==e[t].length||(e[t]="пусто");this.basket.length>0?(e.products=this.basket,console.log(e),c().post("https://fortissimo.devseonet.com/api/order",e).then((e=>{console.log(e),200===e.status&&(this.orderNumber=e.data,this.showPopup=!0,this.clearBasket())})).catch((e=>{console.log(e)}))):alert("Кошик пустий")}},incrementProduct(e,t){this.$store.commit("incrProdInBasket",{id:e.id,typeChoosed:t.typeChoosed,weightChoosed:t.weightChoosed})},decrementProduct(e,t){let r={id:e.id,typeChoosed:t.typeChoosed,weightChoosed:t.weightChoosed};t.cnt,this.$store.commit("decrProdInBasket",r)},showBasketCnt(e){return e.cnt},productParams(e){},basketDelete(e,t){this.$store.commit("deleteProduct",{id:e.id,typeChoosed:t.typeChoosed,weightChoosed:t.weightChoosed})},goBack(){this.$router.go(-1)},onSelectCity(e){e?(fetch(`https://fortissimo.devseonet.com/api/np_warehouses?ref=${e.Ref}`).then((e=>e.json())).then((e=>{this.NpWarehousesArr=e.data})),this.$v.form.city.$model=e.Description):this.form.city=""},onSelectDep(e){e?this.$v.form.NpWarehouse.$model=e.Description:this.$v.form.NpWarehouse=""},clearBasket(){this.basket=[],this.$store.commit("clearBasket"),this.$store.commit("clearProductBasket")},searching(e){let t=e.toLowerCase(),r=this.citiesArr.filter((r=>{let s=r.Description.toLowerCase();return s=s.slice(0,e.length),-1!==s.indexOf(t)}));this.cityesShow=r}},watch:{"form.deliveryCompany"(){this.form.street="",this.form.city="",this.form.NpWarehouse="",this.form.house=""}},validations:{form:{lastName:{required:p.C1,cyrillic:h,minLength:(0,p.Ei)(3)},firstName:{required:p.C1,cyrillic:h,minLength:(0,p.Ei)(3)},city:{required:p.C1,minLength:(0,p.Ei)(3)},NpWarehouse:{required:p.C1,minLength:(0,p.Ei)(3)},phone:{required:p.C1,validPhone:v},mail:{required:p.C1,email:p.Do},street:{required:p.C1,minLength:(0,p.Ei)(3)},house:{validAddress:u,required:p.C1}}},beforeCreate(){fetch("https://fortissimo.devseonet.com/api/np_cities").then((e=>e.json())).then((e=>{this.citiesArr=e.data,this.cityesShow=e.data}))}},y=f,C=r(3736),_=(0,C.Z)(y,a,i,!1,null,"a218b25c",null),$=_.exports,w=r(6325),g={name:"OrderPage",components:{Order:$,BreadCrumbs:w.Z},data(){return{breadCrumbs:[{name:"Головна",link:"/"},{name:"Оформлення замовлення",link:"order"}]}}},b=g,k=(0,C.Z)(b,s,o,!1,null,"69a95b72",null),N=k.exports}}]);