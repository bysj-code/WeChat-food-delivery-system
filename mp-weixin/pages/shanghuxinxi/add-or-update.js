(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shanghuxinxi/add-or-update"],{"193d":function(i,n,e){"use strict";e.r(n);var t=e("2183"),r=e("24a1");for(var a in r)"default"!==a&&function(i){e.d(n,i,(function(){return r[i]}))}(a);e("94f3");var u,s=e("f0c5"),o=Object(s["a"])(r["default"],t["b"],t["c"],!1,null,"2e634849",null,!1,t["a"],u);n["default"]=o.exports},2183:function(i,n,e){"use strict";var t={"w-picker":function(){return Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(e.bind(null,"9689"))}},r=function(){var i=this,n=i.$createElement;i._self._c},a=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return t}))},"24a1":function(i,n,e){"use strict";e.r(n);var t=e("f3b7"),r=e.n(t);for(var a in t)"default"!==a&&function(i){e.d(n,i,(function(){return t[i]}))}(a);n["default"]=r.a},"36b9":function(i,n,e){"use strict";(function(i){e("d515"),e("921b");t(e("66fd"));var n=t(e("193d"));function t(i){return i&&i.__esModule?i:{default:i}}i(n.default)}).call(this,e("543d")["createPage"])},4490:function(i,n,e){},"94f3":function(i,n,e){"use strict";var t=e("4490"),r=e.n(t);r.a},f3b7:function(i,n,e){"use strict";(function(i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(e("a34a"));function r(i){return i&&i.__esModule?i:{default:i}}function a(i,n,e,t,r,a,u){try{var s=i[a](u),o=s.value}catch(h){return void e(h)}s.done?n(o):Promise.resolve(o).then(t,r)}function u(i){return function(){var n=this,e=arguments;return new Promise((function(t,r){var u=i.apply(n,e);function s(i){a(u,t,r,s,o,"next",i)}function o(i){a(u,t,r,s,o,"throw",i)}s(void 0)}))}}var s=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("9689"))}.bind(null,e)).catch(e.oe)},o={data:function(){return{ruleForm:{shangjiazhanghao:"",shangjiaxingming:"",dianpumingcheng:"",mendianzhaopian:"",peisongshijian:"",dianpudizhi:"",dianpuxiangqing:"",peisongjiage:"",qisongjiage:"",yueshoushuliang:"",kaiyeshijian:"",xiuyeshijian:"",thumbsupnum:"",crazilynum:"",clicktime:"",clicknum:""},user:{},ro:{shangjiazhanghao:!1,shangjiaxingming:!1,dianpumingcheng:!1,mendianzhaopian:!1,peisongshijian:!1,dianpudizhi:!1,dianpuxiangqing:!1,peisongjiage:!1,qisongjiage:!1,yueshoushuliang:!1,kaiyeshijian:!1,xiuyeshijian:!1,thumbsupnum:!1,crazilynum:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:s},computed:{},onLoad:function(){var n=u(t.default.mark((function n(e){var r,a,u,s;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=i.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:if(a=n.sent,this.user=a.data,this.ruleForm.shangjiazhanghao=this.user.shangjiazhanghao,this.ruleForm.shangjiaxingming=this.user.shangjiaxingming,this.ruleForm.dianpumingcheng=this.user.dianpumingcheng,this.ruleForm.dianpudizhi=this.user.dianpudizhi,this.ruleForm.userid=i.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=i.getStorageSync("nickname")),!e.id){n.next=17;break}return this.ruleForm.id=e.id,n.next=15,this.$api.info("shanghuxinxi",this.ruleForm.id);case 15:a=n.sent,this.ruleForm=a.data;case 17:if(!e.cross){n.next=88;break}u=i.getStorageSync("crossObj"),n.t0=t.default.keys(u);case 20:if((n.t1=n.t0()).done){n.next=88;break}if(s=n.t1.value,"shangjiazhanghao"!=s){n.next=26;break}return this.ruleForm.shangjiazhanghao=u[s],this.ro.shangjiazhanghao=!0,n.abrupt("continue",20);case 26:if("shangjiaxingming"!=s){n.next=30;break}return this.ruleForm.shangjiaxingming=u[s],this.ro.shangjiaxingming=!0,n.abrupt("continue",20);case 30:if("dianpumingcheng"!=s){n.next=34;break}return this.ruleForm.dianpumingcheng=u[s],this.ro.dianpumingcheng=!0,n.abrupt("continue",20);case 34:if("mendianzhaopian"!=s){n.next=38;break}return this.ruleForm.mendianzhaopian=u[s],this.ro.mendianzhaopian=!0,n.abrupt("continue",20);case 38:if("peisongshijian"!=s){n.next=42;break}return this.ruleForm.peisongshijian=u[s],this.ro.peisongshijian=!0,n.abrupt("continue",20);case 42:if("dianpudizhi"!=s){n.next=46;break}return this.ruleForm.dianpudizhi=u[s],this.ro.dianpudizhi=!0,n.abrupt("continue",20);case 46:if("dianpuxiangqing"!=s){n.next=50;break}return this.ruleForm.dianpuxiangqing=u[s],this.ro.dianpuxiangqing=!0,n.abrupt("continue",20);case 50:if("peisongjiage"!=s){n.next=54;break}return this.ruleForm.peisongjiage=u[s],this.ro.peisongjiage=!0,n.abrupt("continue",20);case 54:if("qisongjiage"!=s){n.next=58;break}return this.ruleForm.qisongjiage=u[s],this.ro.qisongjiage=!0,n.abrupt("continue",20);case 58:if("yueshoushuliang"!=s){n.next=62;break}return this.ruleForm.yueshoushuliang=u[s],this.ro.yueshoushuliang=!0,n.abrupt("continue",20);case 62:if("kaiyeshijian"!=s){n.next=66;break}return this.ruleForm.kaiyeshijian=u[s],this.ro.kaiyeshijian=!0,n.abrupt("continue",20);case 66:if("xiuyeshijian"!=s){n.next=70;break}return this.ruleForm.xiuyeshijian=u[s],this.ro.xiuyeshijian=!0,n.abrupt("continue",20);case 70:if("thumbsupnum"!=s){n.next=74;break}return this.ruleForm.thumbsupnum=u[s],this.ro.thumbsupnum=!0,n.abrupt("continue",20);case 74:if("crazilynum"!=s){n.next=78;break}return this.ruleForm.crazilynum=u[s],this.ro.crazilynum=!0,n.abrupt("continue",20);case 78:if("clicktime"!=s){n.next=82;break}return this.ruleForm.clicktime=u[s],this.ro.clicktime=!0,n.abrupt("continue",20);case 82:if("clicknum"!=s){n.next=86;break}return this.ruleForm.clicknum=u[s],this.ro.clicknum=!0,n.abrupt("continue",20);case 86:n.next=20;break;case 88:this.styleChange();case 89:case"end":return n.stop()}}),n,this)})));function e(i){return n.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},kaiyeshijianConfirm:function(i){console.log(i),this.ruleForm.kaiyeshijian=i.result,this.$forceUpdate()},xiuyeshijianConfirm:function(i){console.log(i),this.ruleForm.xiuyeshijian=i.result,this.$forceUpdate()},clicktimeConfirm:function(i){console.log(i),this.ruleForm.clicktime=i.result,this.$forceUpdate()},mendianzhaopianTap:function(){var i=this;this.$api.upload((function(n){i.ruleForm.mendianzhaopian=i.$base.url+"upload/"+n.file,i.$forceUpdate(),i.$nextTick((function(){i.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var i=u(t.default.mark((function i(){return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!this.ruleForm.peisongjiage||this.$validate.isIntNumer(this.ruleForm.peisongjiage)){i.next=3;break}return this.$utils.msg("配送价格应输入整数"),i.abrupt("return");case 3:if(!this.ruleForm.qisongjiage||this.$validate.isIntNumer(this.ruleForm.qisongjiage)){i.next=6;break}return this.$utils.msg("起送价格应输入整数"),i.abrupt("return");case 6:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){i.next=9;break}return this.$utils.msg("赞应输入整数"),i.abrupt("return");case 9:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){i.next=12;break}return this.$utils.msg("踩应输入整数"),i.abrupt("return");case 12:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){i.next=15;break}return this.$utils.msg("点击次数应输入整数"),i.abrupt("return");case 15:if(!this.ruleForm.id){i.next=20;break}return i.next=18,this.$api.update("shanghuxinxi",this.ruleForm);case 18:i.next=22;break;case 20:return i.next=22,this.$api.add("shanghuxinxi",this.ruleForm);case 22:this.$utils.msgBack("提交成功");case 23:case"end":return i.stop()}}),i,this)})));function n(){return i.apply(this,arguments)}return n}(),optionsChange:function(i){this.index=i.target.value},bindDateChange:function(i){this.date=i.target.value},getDate:function(i){var n=new Date,e=n.getFullYear(),t=n.getMonth()+1,r=n.getDate();return"start"===i?e-=60:"end"===i&&(e+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(e,"-").concat(t,"-").concat(r)},toggleTab:function(i){this.$refs[i].show()}}};n.default=o}).call(this,e("543d")["default"])}},[["36b9","common/runtime","common/vendor"]]]);