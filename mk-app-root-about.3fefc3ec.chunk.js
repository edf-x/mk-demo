webpackJsonp([2],{1603:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,a,r=n(2),i=u(r),c=n(58),d=u(c),f=n(5),l=u(f),s=n(10),p=u(s),h=n(7),m=u(h),_=n(8),v=u(_),k=n(0),b=(u(k),n(273)),w=n(630),y=u(w),M=(o=(0,b.wrapper)(y.default))(a=function(t){function e(){return(0,l.default)(this,e),(0,m.default)(this,(e.__proto__||(0,d.default)(e)).apply(this,arguments))}return(0,v.default)(e,t),(0,p.default)(e,[{key:"render",value:function(){return this.props.monkeyKing((0,i.default)({},this.props,{path:"root"}))}}]),e}(k.Component))||a;e.default=M,t.exports=e.default},1604:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=new f.action(t),n=new p((0,r.default)({},t,{metaAction:e})),u=(0,r.default)({},e,n);return e.config({metaHandlers:u}),u}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),r=u(a),i=n(5),c=u(i);e.default=o;var d=n(0),f=(u(d),n(273)),l=n(611),s=u(l),p=function t(e){var n=this;(0,c.default)(this,t),this.onInit=function(t){var e=t.component,u=t.injections;n.component=e,n.injections=u,u.reduce("init")},this.handleAboutClick=function(){n.component.props.onRedirect({appName:"mk-app-root-about",appParams:{}})},this.handleHelloClick=function(){n.component.props.onRedirect({appName:"mk-app-root-helloWorld",appParams:{}})},this.metaAction=e.metaAction,this.config=s.default.current};t.exports=e.default},1605:function(t,e,n){"use strict";function u(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=new d.reducer(t),n=new p((0,r.default)({},t,{metaReducer:e}));return(0,r.default)({},e,n)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),r=u(a),i=n(5),c=u(i);e.default=o;var d=(n(80),n(273)),f=n(611),l=u(f),s=n(631),p=function t(e){var n=this;(0,c.default)(this,t),this.init=function(t,e){return n.metaReducer.init(t,(0,s.getInitState)())},this.metaReducer=e.metaReducer,this.config=l.default.current};t.exports=e.default}});