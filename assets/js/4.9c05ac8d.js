(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{338:function(t,e,n){},339:function(t,e,n){},343:function(t,e,n){t.exports=function(){"use strict";return function(t,e,n){var r=(new Date).getTimezoneOffset(),i=e.prototype;n.utc=function(t){return new e({date:t,utc:!0,args:arguments})},i.utc=function(){return n(this.toDate(),{locale:this.$L,utc:!0})},i.local=function(){return n(this.toDate(),{locale:this.$L,utc:!1})};var o=i.parse;i.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),o.call(this,t)};var s=i.init;i.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else s.call(this)};var a=i.utcOffset;i.utcOffset=function(t,e){var n=this.$utils().u;if(n(t))return this.$u?0:n(this.$offset)?a.call(this):this.$offset;var i=Math.abs(t)<=16?60*t:t,o=this;return e?(o.$offset=i,o.$u=0===t,o):(0!==t?(o=this.local().add(i+r,"minute")).$offset=i:o=this.utc(),o)};var u=i.format;i.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return u.call(this,e)},i.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+r;return this.$d.valueOf()-6e4*t},i.isUTC=function(){return!!this.$u},i.toISOString=function(){return this.toDate().toISOString()},i.toString=function(){return this.toDate().toUTCString()};var c=i.toDate;i.toDate=function(t){return"s"===t&&this.$offset?n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():c.call(this)};var p=i.diff;i.diff=function(t,e,r){var i=this.local(),o=n(t).local();return p.call(i,o,e,r)}}}()},346:function(t,e,n){"use strict";var r=n(338);n.n(r).a},347:function(t,e,n){"use strict";var r=n(339);n.n(r).a},348:function(t,e,n){"use strict";var r=n(11),i=n(6),o=n(84),s=n(17),a=n(13),u=n(25),c=n(205),p=n(51),f=n(3),l=n(38),h=n(52).f,m=n(30).f,v=n(12).f,g=n(204).trim,d=i.Number,_=d.prototype,$="Number"==u(l(_)),y=function(t){var e,n,r,i,o,s,a,u,c=p(t,!1);if("string"==typeof c&&c.length>2)if(43===(e=(c=g(c)).charCodeAt(0))||45===e){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(s=(o=c.slice(2)).length,a=0;a<s;a++)if((u=o.charCodeAt(a))<48||u>i)return NaN;return parseInt(o,r)}return+c};if(o("Number",!d(" 0o1")||!d("0b1")||d("+0x1"))){for(var b,C=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof C&&($?f((function(){_.valueOf.call(n)})):"Number"!=u(n))?c(new d(y(e)),n,C):y(e)},x=r?h(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;x.length>O;O++)a(d,b=x[O])&&!a(C,b)&&v(C,b,m(d,b));C.prototype=_,_.constructor=C,s(i,"Number",C)}},349:function(t,e,n){var r=n(201),i=n(194),o=n(350),s=n(354);t.exports=function(t,e){if(null==t)return{};var n=r(s(t),(function(t){return[t]}));return e=i(e),o(t,n,(function(t,n){return e(t,n[0])}))}},350:function(t,e,n){var r=n(127),i=n(351),o=n(122);t.exports=function(t,e,n){for(var s=-1,a=e.length,u={};++s<a;){var c=e[s],p=r(t,c);n(p,c)&&i(u,o(c,t),p)}return u}},351:function(t,e,n){var r=n(352),i=n(122),o=n(125),s=n(82),a=n(54);t.exports=function(t,e,n,u){if(!s(t))return t;for(var c=-1,p=(e=i(e,t)).length,f=p-1,l=t;null!=l&&++c<p;){var h=a(e[c]),m=n;if("__proto__"===h||"constructor"===h||"prototype"===h)return t;if(c!=f){var v=l[h];void 0===(m=u?u(v,h,l):void 0)&&(m=s(v)?v:o(e[c+1])?[]:{})}r(l,h,m),l=l[h]}return t}},352:function(t,e,n){var r=n(353),i=n(124),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var s=t[e];o.call(t,e)&&i(s,n)&&(void 0!==n||e in t)||r(t,e,n)}},353:function(t,e,n){var r=n(202);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},354:function(t,e,n){var r=n(195),i=n(355),o=n(357);t.exports=function(t){return r(t,o,i)}},355:function(t,e,n){var r=n(123),i=n(356),o=n(196),s=n(197),a=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,o(t)),t=i(t);return e}:s;t.exports=a},356:function(t,e,n){var r=n(200)(Object.getPrototypeOf,Object);t.exports=r},357:function(t,e,n){var r=n(198),i=n(358),o=n(126);t.exports=function(t){return o(t)?r(t,!0):i(t)}},358:function(t,e,n){var r=n(82),i=n(199),o=n(359),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=i(t),n=[];for(var a in t)("constructor"!=a||!e&&s.call(t,a))&&n.push(a);return n}},359:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},361:function(t,e,n){},367:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return l}));n(16);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(2).then(n.t.bind(null,385,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},i=(n(346),n(9)),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,s=(n(347),Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),a=(n(348),n(85)),u=n.n(a),c=n(349),p=n.n(c),f={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return p()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},l=Object(i.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},374:function(t,e,n){"use strict";var r=n(361);n.n(r).a},389:function(t,e,n){"use strict";n.r(e);n(53),n(1);var r=n(128),i=n.n(r),o=n(343),s=n.n(o),a=n(7),u=n(367);i.a.extend(s.a);var c={components:{NavigationIcon:a.n,ClockIcon:a.a,TagIcon:a.q},data:function(){return{paginationComponent:null}},computed:{pages:function(){return this.$pagination.pages}},created:function(){this.paginationComponent=this.getPaginationComponent()},methods:{getPaginationComponent:function(){return u.c},resolvePostDate:function(t){return i.a.utc(t).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvePostTags:function(t){return!t||Array.isArray(t)?t:[t]}}},p=(n(374),n(9)),f=Object(p.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"base-list-layout"}},[n("div",{staticClass:"ui-posts",attrs:{itemscope:"",itemtype:"http://schema.org/Blog"}},t._l(t.pages,(function(e){return n("article",{key:e.key,staticClass:"ui-post",attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("meta",{attrs:{itemprop:"mainEntityOfPage",content:e.path}}),t._v(" "),n("header",{staticClass:"ui-post-title",attrs:{itemprop:"name headline"}},[n("NavLink",{attrs:{link:e.path}},[t._v(t._s(e.title))])],1),t._v(" "),e.excerpt?n("client-only",[n("p",{staticClass:"ui-post-summary",attrs:{itemprop:"description"},domProps:{innerHTML:t._s(e.excerpt)}})]):n("p",{staticClass:"ui-post-summary",attrs:{itemprop:"description"}},[t._v("\n        "+t._s(e.frontmatter.summary||e.summary)+"\n      ")]),t._v(" "),n("footer",[e.frontmatter.author?n("div",{staticClass:"ui-post-meta ui-post-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[n("NavigationIcon"),t._v(" "),n("span",{attrs:{itemprop:"name"}},[t._v(t._s(e.frontmatter.author))]),t._v(" "),e.frontmatter.location?n("span",{attrs:{itemprop:"address"}},[t._v("\n              in "+t._s(e.frontmatter.location)+"\n          ")]):t._e()],1):t._e(),t._v(" "),e.frontmatter.date?n("div",{staticClass:"ui-post-meta ui-post-date"},[n("ClockIcon"),t._v(" "),n("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:e.frontmatter.date}},[t._v("\n            "+t._s(t.resolvePostDate(e.frontmatter.date))+"\n          ")])],1):t._e(),t._v(" "),e.frontmatter.tags?n("div",{staticClass:"ui-post-meta ui-post-tag",attrs:{itemprop:"keywords"}},[n("TagIcon"),t._v(" "),t._l(t.resolvePostTags(e.frontmatter.tags),(function(e){return n("router-link",{key:e,attrs:{to:"/tag/"+e}},[t._v("\n            "+t._s(e)+"\n          ")])}))],2):t._e()])],1)})),0),t._v(" "),t.$pagination.length>1&&t.paginationComponent?n(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,null,null);e.default=f.exports}}]);