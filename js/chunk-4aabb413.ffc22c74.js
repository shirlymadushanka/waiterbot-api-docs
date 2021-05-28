(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4aabb413"],{"1f4f":function(e,t,a){"use strict";var s=a("5530"),r=(a("a9e3"),a("8b37"),a("80d2")),n=a("7560"),o=a("58df");t["a"]=Object(o["a"])(n["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(s["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(r["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(e){return e("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"232f":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"param-table"},[a("h5",{staticClass:"param-table__title"},[e._v(e._s(e.title))]),a("v-simple-table",{attrs:{"fixed-header":""},scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v(" Response Code ")]),a("th",{staticClass:"text-left"},[e._v(" Description ")])])]),a("tbody",e._l(e.responses,(function(t){return a("tr",{key:t.name},[a("td",[e._v(e._s(t.code))]),a("td",[e._v(" "+e._s(t.description)+" ")])])})),0)]},proxy:!0}])})],1)},r=[],n={props:{responses:{default:[]},title:{defalt:""}}},o=n,l=(a("45fd"),a("2877")),i=a("6544"),c=a.n(i),d=a("1f4f"),p=Object(l["a"])(o,s,r,!1,null,"064fd40f",null);t["a"]=p.exports;c()(p,{VSimpleTable:d["a"]})},3141:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("EndPointComponent",{attrs:{urlEndPoint:"/properties/:propertyId/tables/:tableId",description:"Edit table data",method:"patch",accessList:["OWNER only"]}}),a("ParamsTable",{attrs:{params:e.headerParams,title:"Header parameters"}}),a("ParamsTable",{attrs:{params:e.bodyParams,title:"Body parameters"}}),a("ExampleReqResObjects",{attrs:{requestExample:e.requestExample,responseExample:e.responseExample}}),a("hr",{staticClass:"mb-4"}),a("EndPointComponent",{attrs:{urlEndPoint:"/properties/:propertyId/tables/:tableId",description:"Delete table data",method:"delete",accessList:["OWNER only"]}}),a("ResponseTable",{attrs:{responses:e.responses,title:"Expected responses"}})],1)},r=[],n=a("a957"),o=a("b4a2"),l=a("b5ac"),i=a("232f"),c={data:function(){return{headerParams:[{param:"Authentication",type:"Bearer scheme",description:"Ex: Authorization: Bearer <token>"}],bodyParams:[{param:"turn_direction",type:"left or right",description:"Junction turn direction of the table (Optional)"},{param:"junction",type:"Integear",description:"Junction of the table (Optional)"},{param:"table_number",type:"Integear",description:"Table number (Optional)"}],responseExample:{data:{turn_direction:"left",_id:"6011e229f94ee1415029714d",property:"6009beb47b6077088836fca5",table_number:"10",junction:4,createdAt:"2021-01-27T21:59:05.320Z",updatedAt:"2021-01-27T23:21:53.759Z",__v:0},message:"Table updated successfully.",success:!0},requestExample:{table_number:10,junction:4},responses:[{code:200,description:"Stores updated/deleted successfully!"},{code:401,description:"Unauthorized! (Only store owner can perform this action)"},{code:404,description:"Store not found!"},{code:422,description:"Unprocessable entity!"}]}},components:{ParamsTable:n["a"],EndPointComponent:o["a"],ExampleReqResObjects:l["a"],ResponseTable:i["a"]},created:function(){this.$emit("update:layout","StoreMain")}},d=c,p=a("2877"),u=Object(p["a"])(d,s,r,!1,null,null,null);t["default"]=u.exports},"3d42":function(e,t,a){"use strict";a("8e83")},"45fd":function(e,t,a){"use strict";a("ef17")},"8b37":function(e,t,a){},"8e83":function(e,t,a){},a957:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"param-table"},[a("h5",{staticClass:"param-table__title"},[e._v(e._s(e.title))]),a("v-simple-table",{attrs:{"fixed-header":""},scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v(" Name ")]),a("th",{staticClass:"text-left"},[e._v(" Description ")])])]),a("tbody",e._l(e.params,(function(t){return a("tr",{key:t.name},[a("td",[e._v(e._s(t.param))]),a("td",[t.type?[a("b",[e._v(e._s(t.type))]),a("br")]:e._e(),e._v(" "+e._s(t.description)+" ")],2)])})),0)]},proxy:!0}])})],1)},r=[],n={props:{params:{default:[]},title:{defalt:""}}},o=n,l=(a("3d42"),a("2877")),i=a("6544"),c=a.n(i),d=a("1f4f"),p=Object(l["a"])(o,s,r,!1,null,"a4288a58",null);t["a"]=p.exports;c()(p,{VSimpleTable:d["a"]})},b5ac:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{staticClass:"pb-2"},[e.requestExample?a("v-col",[e._t("requestHead",[a("h5",[e._v("Request Body Example (application/json)")])]),a("json-viewer",{attrs:{value:e.requestExample,"expand-depth":2,copyable:"",boxed:"",sort:""}})],2):e._e(),e.responseExample?a("v-col",[e._t("responseHead",[a("h5",[e._v("Response Body Example (application/json)")])]),a("json-viewer",{attrs:{value:e.responseExample,"expand-depth":2,copyable:"",boxed:"",sort:""}})],2):e._e()],1)},r=[],n={props:["requestExample","responseExample"],data:function(){return{}}},o=n,l=a("2877"),i=a("6544"),c=a.n(i),d=a("ade3"),p=a("5530"),u=(a("a9e3"),a("b64b"),a("ac1f"),a("5319"),a("4ec9"),a("d3b7"),a("3ca3"),a("ddb0"),a("caad"),a("159b"),a("2ca0"),a("4b85"),a("2b0e")),f=a("d9f7"),b=a("80d2"),m=["sm","md","lg","xl"],h=function(){return m.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),v=function(){return m.reduce((function(e,t){return e["offset"+Object(b["q"])(t)]={type:[String,Number],default:null},e}),{})}(),_=function(){return m.reduce((function(e,t){return e["order"+Object(b["q"])(t)]={type:[String,Number],default:null},e}),{})}(),y={col:Object.keys(h),offset:Object.keys(v),order:Object.keys(_)};function x(e,t,a){var s=e;if(null!=a&&!1!==a){if(t){var r=t.replace(e,"");s+="-".concat(r)}return"col"!==e||""!==a&&!0!==a?(s+="-".concat(a),s.toLowerCase()):s.toLowerCase()}}var E=new Map,j=u["default"].extend({name:"v-col",functional:!0,props:Object(p["a"])(Object(p["a"])(Object(p["a"])(Object(p["a"])({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var a=t.props,s=t.data,r=t.children,n=(t.parent,"");for(var o in a)n+=String(a[o]);var l=E.get(n);return l||function(){var e,t;for(t in l=[],y)y[t].forEach((function(e){var s=a[e],r=x(t,e,s);r&&l.push(r)}));var s=l.some((function(e){return e.startsWith("col-")}));l.push((e={col:!s||!a.cols},Object(d["a"])(e,"col-".concat(a.cols),a.cols),Object(d["a"])(e,"offset-".concat(a.offset),a.offset),Object(d["a"])(e,"order-".concat(a.order),a.order),Object(d["a"])(e,"align-self-".concat(a.alignSelf),a.alignSelf),e)),E.set(n,l)}(),e(a.tag,Object(f["a"])(s,{class:l}),r)}}),g=a("0fd9"),O=Object(l["a"])(o,s,r,!1,null,"eeb33b8c",null);t["a"]=O.exports;c()(O,{VCol:j,VRow:g["a"]})},ef17:function(e,t,a){}}]);
//# sourceMappingURL=chunk-4aabb413.ffc22c74.js.map