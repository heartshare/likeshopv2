(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order_details-order_details"],{"049c":function(t,i,e){"use strict";e.r(i);var a=e("46b8"),r=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=r.a},"2a9f":function(t,i,e){"use strict";var a=e("84bb"),r=e.n(a);r.a},"38d7":function(t,i,e){"use strict";e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var a={loading:e("3732").default},r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{class:"loading "+("flex"==t.type?"flex":""),style:{backgroundColor:t.backgroundColor}},[e("loading",{attrs:{color:t.color,size:t.size}})],1)},s=[]},"46b8":function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{}},props:{type:{type:String,default:"fixed"},backgroundColor:{type:String},color:{type:String},size:{type:Number,default:40}},methods:{}};i.default=a},"4a34":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* pages/order_details/order_details.wxss */.order-details[data-v-139406d5]{position:relative;padding-bottom:calc(%?120?% + env(safe-area-inset-bottom))}.order-details .header-bg[data-v-139406d5]{position:absolute;top:0;width:100%;height:%?200?%;background-color:#ff2c3c;z-index:0}.order-details .main[data-v-139406d5]{position:relative;z-index:1}.order-details .contain[data-v-139406d5]{margin:0 %?20?% %?20?%;border-radius:%?14?%;background-color:#fff}.order-details .header[data-v-139406d5]{padding:%?24?% %?40?%;box-sizing:border-box}.order-details .header .van-count-down[data-v-139406d5]{color:#fff;margin:0 %?10?%}.order-details .img-line[data-v-139406d5]{height:1.5px;width:100%;display:block}.order-details .address-wrap[data-v-139406d5]{height:%?164?%;padding:0 %?24?%}.order-details .order-info[data-v-139406d5]{padding:%?12?% 0}.order-details .order-info .item[data-v-139406d5]{padding:%?12?% %?24?%}.order-details .order-info .item .title[data-v-139406d5]{width:%?180?%;-webkit-box-flex:0;-webkit-flex:none;flex:none}.order-details .price > uni-view[data-v-139406d5]{height:%?60?%;padding:0 %?24?%}.order-details .footer[data-v-139406d5]{position:fixed;bottom:0;left:0;right:0;height:%?100?%;padding:0 %?24?%}.footer .plain[data-v-139406d5]{border:1px solid #bbb}.footer .plain.red[data-v-139406d5]{border:1px solid var(--primary-color)}.tips-dialog[data-v-139406d5]{height:%?230?%;width:100%}.order-details .invite-btn[data-v-139406d5]{background:-webkit-linear-gradient(right,#ff2c3c,#f95f2f);background:linear-gradient(270deg,#ff2c3c,#f95f2f);margin:%?30?% %?26?% %?40?%}',""]),t.exports=i},"4c55":function(t,i,e){"use strict";e.r(i);var a=e("5f80"),r=e("961c");for(var s in r)"default"!==s&&function(t){e.d(i,t,(function(){return r[t]}))}(s);e("e334");var n,o=e("f0c5"),d=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"139406d5",null,!1,a["a"],n);i["default"]=d.exports},"5f80":function(t,i,e){"use strict";e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var a={orderGoods:e("158d").default,priceFormat:e("5d08").default,loadingView:e("bef4").default,orderDialog:e("4f72").default},r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"order-details"},[e("v-uni-view",{staticClass:"header-bg"}),e("v-uni-view",{staticClass:"main"},[e("v-uni-view",{staticClass:"header"},[0==t.orderDetail.order_status?e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"white lg mb10"},[t._v("等待买家付款")])],1):t._e(),1==t.orderDetail.order_status?e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"white lg mb10"},[t._v("等待商家发货")]),e("v-uni-view",{staticClass:"white sm"},[t._v("您的商品正在打包中，请耐心等待…")])],1):t._e(),2==t.orderDetail.order_status?e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"white lg mb10"},[t._v("已发货")]),e("v-uni-view",{staticClass:"white sm"},[t._v("您的商品正在路中，请耐心等待…")])],1):t._e(),3==t.orderDetail.order_status?e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"white lg mb10"},[t._v("已完成")]),e("v-uni-view",{staticClass:"white sm"},[t._v("商品已签收，期待再次购买！")])],1):t._e(),4==t.orderDetail.order_status?e("v-uni-view",{staticClass:"item"},[e("v-uni-view",{staticClass:"white lg mb10"},[t._v("订单已关闭")])],1):t._e()],1),e("v-uni-view",{staticClass:"address-wrap row contain"},[e("v-uni-image",{staticClass:"icon-md mr20",attrs:{src:"/static/images/icon_address.png"}}),e("v-uni-view",{staticClass:"address"},[e("v-uni-view",[e("v-uni-text",{staticClass:"name md mr10"},[t._v(t._s(t.orderDetail.consignee))]),e("v-uni-text",{staticClass:"phone md"},[t._v(t._s(t.orderDetail.mobile))]),e("v-uni-view",{staticClass:"area sm mt10 lighter"},[t._v(t._s(t.orderDetail.delivery_address))])],1)],1)],1),e("v-uni-view",{staticClass:"goods contain"},[e("order-goods",{attrs:{"show-comment":t.orderDetail.comment_btn,link:"true",list:t.orderDetail.order_goods}})],1),e("v-uni-view",{staticClass:"price contain"},[e("v-uni-view",{staticClass:"row-between"},[e("v-uni-view",[t._v("商品金额")]),e("v-uni-view",{staticClass:"black"},[e("price-format",{attrs:{price:t.orderDetail.goods_price}})],1)],1),e("v-uni-view",{staticClass:"row-between"},[e("v-uni-view",[t._v("运费")]),e("v-uni-view",{staticClass:"black"},[t._v("+"),e("price-format",{attrs:{price:t.orderDetail.shipping_price}})],1)],1),0!=t.orderDetail.discount_amount?e("v-uni-view",{staticClass:"row-between"},[e("v-uni-view",[t._v("优惠券")]),e("v-uni-view",{staticClass:"primary"},[t._v("-"),e("price-format",{attrs:{price:t.orderDetail.discount_amount}})],1)],1):t._e(),e("v-uni-view",{staticClass:"row-end"},[e("v-uni-view",{staticClass:"lighter"},[t._v("实付金额：")]),e("v-uni-view",{staticClass:"primary xl"},[e("price-format",{attrs:{"first-size":34,"second-size":34,price:t.orderDetail.order_amount}})],1)],1)],1),e("v-uni-view",{staticClass:"order-info contain"},[e("v-uni-view",{staticClass:"item row",staticStyle:{"align-items":"flex-start"}},[e("v-uni-view",{staticClass:"title"},[t._v("买家留言")]),e("v-uni-view",{staticClass:"black"},[t._v(t._s(t.orderDetail.user_remark||"无"))])],1)],1),e("v-uni-view",{staticClass:"order-info contain"},[e("v-uni-view",{staticClass:"item row"},[e("v-uni-view",{staticClass:"title"},[t._v("订单编号")]),e("v-uni-view",{staticClass:"black"},[t._v(t._s(t.orderDetail.order_sn))])],1),e("v-uni-view",{staticClass:"item row"},[e("v-uni-view",{staticClass:"title"},[t._v("支付方式")]),e("v-uni-view",{staticClass:"black"},[t._v(t._s(t.orderDetail.pay_way_text))])],1),e("v-uni-view",{staticClass:"item row"},[e("v-uni-view",{staticClass:"title"},[t._v("下单时间")]),e("v-uni-view",{staticClass:"black"},[t._v(t._s(t.orderDetail.create_time))])],1),t.orderDetail.pay_time?e("v-uni-view",{staticClass:"item row"},[e("v-uni-view",{staticClass:"title"},[t._v("付款时间")]),e("v-uni-view",{staticClass:"black"},[t._v(t._s(t.orderDetail.pay_time))])],1):t._e(),t.orderDetail.shipping_time?e("v-uni-view",{staticClass:"item row"},[e("v-uni-view",{staticClass:"title"},[t._v("发货时间")]),e("v-uni-view",{staticClass:"black"},[t._v(t._s(t.orderDetail.shipping_time))])],1):t._e(),t.orderDetail.confirm_take_time?e("v-uni-view",{staticClass:"item row"},[e("v-uni-view",{staticClass:"title"},[t._v("成交时间")]),e("v-uni-view",{staticClass:"black"},[t._v(t._s(t.orderDetail.confirm_take_time))])],1):t._e(),t.orderDetail.cancel_time?e("v-uni-view",{staticClass:"item row"},[e("v-uni-view",{staticClass:"title"},[t._v("关闭时间")]),e("v-uni-view",{staticClass:"black"},[t._v(t._s(t.orderDetail.cancel_time))])],1):t._e()],1),t.orderDetail.cancel_btn||t.orderDetail.delivery_btn||t.orderDetail.take_btn||t.orderDetail.del_btn||t.orderDetail.pay_btn?e("v-uni-view",{staticClass:"footer bg-white row fixed"},[e("v-uni-view",{staticStyle:{flex:"1"}}),t.orderDetail.cancel_btn?e("v-uni-view",[e("v-uni-button",{staticClass:"plain br60",attrs:{size:"sm","hover-class":"none"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.cancelOrder.apply(void 0,arguments)}}},[t._v("取消订单")])],1):t._e(),t.orderDetail.delivery_btn?e("v-uni-navigator",{attrs:{"hover-class":"none",url:"/pages/goods_logistics/goods_logistics?id="+t.orderDetail.id}},[e("v-uni-button",{staticClass:"plain br60",attrs:{size:"sm","hover-class":"none"}},[t._v("查看物流")])],1):t._e(),t.orderDetail.take_btn?e("v-uni-view",{staticClass:"ml20"},[e("v-uni-button",{staticClass:"plain br60 primary red",attrs:{size:"sm","hover-class":"none"},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.comfirmOrder.apply(void 0,arguments)}}},[t._v("确认收货")])],1):t._e(),t.orderDetail.del_btn?e("v-uni-view",[e("v-uni-button",{staticClass:"plain br60",attrs:{size:"sm","hover-class":"none"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.delOrder.apply(void 0,arguments)}}},[t._v("删除订单")])],1):t._e(),t.orderDetail.pay_btn?e("v-uni-view",{staticClass:"ml20"},[e("v-uni-button",{staticClass:"bg-primary br60 white",attrs:{size:"sm"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.payNow.apply(void 0,arguments)}}},[t._v("立即付款")])],1):t._e()],1):t._e()],1)],1),t.isFirstLoading?e("loading-view"):t._e(),e("order-dialog",{ref:"orderDialog",attrs:{orderId:t.orderDetail.id,type:t.type},on:{refresh:function(i){arguments[0]=i=t.$handleEvent(i),t.onRefresh.apply(void 0,arguments)}}})],1)},s=[]},"694f":function(t,i,e){"use strict";e("caad"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e("9b9e"),r=e("b1f0"),s=e("2b44"),n={data:function(){return{orderDetail:{},isFirstLoading:!0,type:0,cancelTime:0,showCancel:""}},components:{},props:{},onLoad:function(t){this.id=t.id,this.getOrderDetailFun()},methods:{onRefresh:function(){uni.$emit("refreshorder");var t=this.type;[0,2].includes(t)?this.getOrderDetailFun():1==t&&setTimeout((function(){uni.navigateBack()}),2e3)},orderDialog:function(){this.$refs.orderDialog.open()},delOrder:function(){var t=this;this.type=1,this.$nextTick((function(){t.orderDialog()}))},comfirmOrder:function(){var t=this;this.type=2,this.$nextTick((function(){t.orderDialog()}))},cancelOrder:function(){var t=this;this.type=0,this.$nextTick((function(){t.orderDialog()}))},payNow:function(t){var i=this;this.toast=Toast.loading({duration:0,forbidClick:!0,message:"请稍等..."}),(0,r.prepay)({from:"order",order_id:this.id}).then((function(t){if(Toast.clear(),1==t.code){var e=t.data;(0,s.wxpay)(e).then((function(){Tips({title:"支付成功"}),i.getOrderDetailFun(),event.emit("RESET_LIST")})).catch((function(){}))}}))},getOrderDetailFun:function(){var t=this;(0,a.getOrderDetail)(this.id).then((function(i){if(1==i.code){i.data.order_cancel_time,Date.now();t.orderDetail=i.data,t.$nextTick((function(){t.isFirstLoading=!1}))}}))}}};i.default=n},"84bb":function(t,i,e){var a=e("fdb4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("665c4132",a,!0,{sourceMap:!1,shadowMode:!1})},"961c":function(t,i,e){"use strict";e.r(i);var a=e("694f"),r=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=r.a},"9d75":function(t,i,e){var a=e("4a34");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("4f06").default;r("0728c4e0",a,!0,{sourceMap:!1,shadowMode:!1})},bef4:function(t,i,e){"use strict";e.r(i);var a=e("38d7"),r=e("049c");for(var s in r)"default"!==s&&function(t){e.d(i,t,(function(){return r[t]}))}(s);e("2a9f");var n,o=e("f0c5"),d=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"5027cfe8",null,!1,a["a"],n);i["default"]=d.exports},e334:function(t,i,e){"use strict";var a=e("9d75"),r=e.n(a);r.a},fdb4:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".loading[data-v-5027cfe8]{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff}.loading.flex[data-v-5027cfe8]{position:static;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:100%}",""]),t.exports=i}}]);