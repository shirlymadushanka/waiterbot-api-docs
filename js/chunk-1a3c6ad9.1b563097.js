(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a3c6ad9"],{"1f4f":function(e,t,a){"use strict";var s=a("5530"),n=(a("a9e3"),a("8b37"),a("80d2")),r=a("7560"),o=a("58df");t["a"]=Object(o["a"])(r["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(s["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(e){return e("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"232f":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"param-table"},[a("h5",{staticClass:"param-table__title"},[e._v(e._s(e.title))]),a("v-simple-table",{attrs:{"fixed-header":""},scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v(" Response Code ")]),a("th",{staticClass:"text-left"},[e._v(" Description ")])])]),a("tbody",e._l(e.responses,(function(t){return a("tr",{key:t.name},[a("td",[e._v(e._s(t.code))]),a("td",[e._v(" "+e._s(t.description)+" ")])])})),0)]},proxy:!0}])})],1)},n=[],r={props:{responses:{default:[]},title:{defalt:""}}},o=r,l=(a("45fd"),a("2877")),c=a("6544"),i=a.n(c),d=a("1f4f"),u=Object(l["a"])(o,s,n,!1,null,"064fd40f",null);t["a"]=u.exports;i()(u,{VSimpleTable:d["a"]})},"32b7":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("EndPointComponent",{attrs:{urlEndPoint:"/robots/:id",description:"Retreive details of the robot",accessList:["Public"]}}),a("ExampleReqResObjects",{attrs:{responseExample:e.responseExample}}),a("ResponseTable",{attrs:{responses:e.responses,title:"Expected responses"}})],1)},n=[],r=a("b4a2"),o=a("b5ac"),l=a("232f"),c={data:function(){return{responseExample:{data:{status:"Idle",_id:"6010727f6bdd77367cedce24",property:"6009beb47b6077088836fca5",createdAt:"2021-01-26T19:50:23.552Z",updatedAt:"2021-01-26T19:50:23.552Z",__v:0},message:"Robot fetched successfully.",success:!0},responses:[{code:200,description:"Robot details fetched successfully!"},{code:404,description:"Robot not found!"}]}},components:{EndPointComponent:r["a"],ExampleReqResObjects:o["a"],ResponseTable:l["a"]}},i=c,d=a("2877"),u=Object(d["a"])(i,s,n,!1,null,null,null);t["default"]=u.exports},"45fd":function(e,t,a){"use strict";a("ef17")},"8b37":function(e,t,a){},b5ac:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{staticClass:"pb-2"},[e.requestExample?a("v-col",[e._t("requestHead",[a("h5",[e._v("Request Body Example (application/json)")])]),a("json-viewer",{attrs:{value:e.requestExample,"expand-depth":2,copyable:"",boxed:"",sort:""}})],2):e._e(),e.responseExample?a("v-col",[e._t("responseHead",[a("h5",[e._v("Response Body Example (application/json)")])]),a("json-viewer",{attrs:{value:e.responseExample,"expand-depth":2,copyable:"",boxed:"",sort:""}})],2):e._e()],1)},n=[],r={props:["requestExample","responseExample"],data:function(){return{}}},o=r,l=a("2877"),c=a("6544"),i=a.n(c),d=a("ade3"),u=a("5530"),p=(a("a9e3"),a("b64b"),a("ac1f"),a("5319"),a("4ec9"),a("d3b7"),a("3ca3"),a("ddb0"),a("caad"),a("159b"),a("2ca0"),a("4b85"),a("2b0e")),f=a("d9f7"),b=a("80d2"),h=["sm","md","lg","xl"],v=function(){return h.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),m=function(){return h.reduce((function(e,t){return e["offset"+Object(b["q"])(t)]={type:[String,Number],default:null},e}),{})}(),x=function(){return h.reduce((function(e,t){return e["order"+Object(b["q"])(t)]={type:[String,Number],default:null},e}),{})}(),_={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(x)};function g(e,t,a){var s=e;if(null!=a&&!1!==a){if(t){var n=t.replace(e,"");s+="-".concat(n)}return"col"!==e||""!==a&&!0!==a?(s+="-".concat(a),s.toLowerCase()):s.toLowerCase()}}var j=new Map,y=p["default"].extend({name:"v-col",functional:!0,props:Object(u["a"])(Object(u["a"])(Object(u["a"])(Object(u["a"])({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var a=t.props,s=t.data,n=t.children,r=(t.parent,"");for(var o in a)r+=String(a[o]);var l=j.get(r);return l||function(){var e,t;for(t in l=[],_)_[t].forEach((function(e){var s=a[e],n=g(t,e,s);n&&l.push(n)}));var s=l.some((function(e){return e.startsWith("col-")}));l.push((e={col:!s||!a.cols},Object(d["a"])(e,"col-".concat(a.cols),a.cols),Object(d["a"])(e,"offset-".concat(a.offset),a.offset),Object(d["a"])(e,"order-".concat(a.order),a.order),Object(d["a"])(e,"align-self-".concat(a.alignSelf),a.alignSelf),e)),j.set(r,l)}(),e(a.tag,Object(f["a"])(s,{class:l}),n)}}),E=a("0fd9"),O=Object(l["a"])(o,s,n,!1,null,"eeb33b8c",null);t["a"]=O.exports;i()(O,{VCol:y,VRow:E["a"]})},ef17:function(e,t,a){}}]);
//# sourceMappingURL=chunk-1a3c6ad9.1b563097.js.map