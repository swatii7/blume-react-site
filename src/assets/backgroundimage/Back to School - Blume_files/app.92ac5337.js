(function(t){function e(e){for(var r,o,i=e[0],s=e[1],u=e[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a={app:0},c=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-20d41afd":"e2f2fbb0","chunk-2d0883f4":"a44f3e3d","chunk-45581d2e":"c5a77eef"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-20d41afd":1,"chunk-2d0883f4":1,"chunk-45581d2e":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-20d41afd":"b2d489bf","chunk-2d0883f4":"c7cfb421","chunk-45581d2e":"acfd8b59"}[t]+".css",a=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[t],f.parentNode.removeChild(f),n(c)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0fb9":function(t,e,n){},1192:function(t,e,n){},"3f30":function(t,e,n){"use strict";var r=n("0fb9"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("b174"),o=n.n(r),a=n("45e3"),c=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade"}},[t.isLoading?n("div",{staticClass:"main-loader"}):t._e()]),n("router-view",{attrs:{products:t.products,merchant:t.merchant,cart:t.cart,location:t.location,"checkout-token":t.checkoutToken,orderRef:t.orderRef}}),n("GlobalFooter")],1)},s=[],u=(n("d81d"),n("bc3a")),l=n.n(u),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"footer"},[n("a",{staticClass:"footer__logo",attrs:{href:""}},[n("a",{attrs:{href:"https://blume.com",target:"_blank",rel:"noopener"}},[n("img",{attrs:{src:"/images/logo-white.svg",alt:"Blume"}})])]),n("div",{staticClass:"footer__link"},[n("a",{attrs:{href:"https://www.blume.com/pages/privacy"}},[t._v("Privacy Policy")])]),n("div",{staticClass:"footer__link"},[n("a",{attrs:{href:"https://www.blume.com/pages/terms-conditions"}},[t._v("Terms & Conditions")])]),n("div",{staticClass:"footer__contact"},[n("a",{attrs:{href:"mailto:hi@blume.com"}},[t._v("hi@blume.com")]),t._v(" | "),n("a",{attrs:{href:"mailto:press@blume.com"}},[t._v("press@blume.com")]),t._v(" | "),n("a",{attrs:{href:"mailto:wholesale@blume.com"}},[t._v("wholesale@blume.com")]),t._v(" | "),n("a",{attrs:{href:"tel:18882726718"}},[t._v("1-888-272-6718")])]),n("div",{staticClass:"footer__disclaimer"},[t._v(" Blume is in no way affiliated with Judy Blume ")])])}],h=(n("3f30"),n("2877")),m={},p=Object(h["a"])(m,d,f,!1,null,null,null),v=p.exports,g={name:"app",components:{GlobalFooter:v},data:function(){return{isLoading:!0,merchant:{business_name:"Loading..."},products:[],cart:[],orderRef:null,location:{country:null,county_state:null},checkoutToken:null}},created:function(){document.body.classList.add("isLoading"),this.getProducts(),this.getMerchantInformation(),this.getCart(),this.findLocation(),window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{prepopulateCart:function(){var t=this;0===this.cart.total_items&&this.$commerce.cart.add("prod_ZRjywMAv9w7Y8G",1,null).then((function(e){t.cart=e.cart})).catch((function(t){console.error("Add to Cart Error: ".concat(t.message))}))},generateToken:function(){var t=this;this.$commerce.checkout.generateToken(this.cart.id,{type:"cart"}).then((function(e){t.checkoutToken=e.id})).catch((function(e){t.message.copy="An error occurred with your cart",console.log(e)}))},getProducts:function(){var t=this;this.$commerce.products.list().then((function(e){t.products=e.data.map((function(t){return t}))})).catch((function(t){console.error("Product Error: ".concat(t.message))}))},findLocation:function(){var t=this;l.a.get("https://api.ipstack.com/check?access_key=98d300c4a16de9a520b8c17197d0893e&format=1").then((function(e){"US"===e.data.country_code||"CA"===e.data.country_code?(t.location.country=e.data.country_code,t.location.county_state=e.data.region_code):t.location.country="US"}))},getMerchantInformation:function(){var t=this;this.$commerce.merchants.about().then((function(e){t.merchant=e,document.title="Back to School - ".concat(t.merchant.business_name)})).catch((function(t){console.error("Merchant Error: ".concat(t.message))}))},getCart:function(){var t=this;this.$commerce.cart.retrieve().then((function(e){t.cart=e,t.prepopulateCart(),t.generateToken(),t.isLoading=!1,document.body.classList.remove("isLoading")})).catch((function(t){console.error("Cart Error: ".concat(t.message))}))}}},b=g,C=(n("5c0b"),Object(h["a"])(b,i,s,!1,null,null,null)),y=C.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"text-align":"center","margin-top":"10rem",color:"#283341"}},[n("svg",{staticStyle:{display:"block",margin:"2rem auto"},attrs:{fill:"#41556C",width:"95",height:"90",xmlns:"http://www.w3.org/2000/svg","data-v-00a1771e":""}},[n("path",{attrs:{d:"M53.688 0.756117C54.6961 -0.252039 56.3307 -0.252039 57.3394 0.756117L92.1756 35.5982C93.1838 36.6063 93.1838 38.2414 92.1756 39.2502L88.9904 42.4353L50.5034 3.94245L53.688 0.756117Z","data-v-00a1771e":""}}),n("path",{attrs:{d:"M61.0131 22.2828L39.8008 1.07695C38.7926 0.0687988 37.1564 0.0687982 36.1494 1.07813L1.75597 35.4926C0.747814 36.5014 0.747815 38.1365 1.75714 39.1446L21.1455 58.526C22.1537 59.5335 23.7858 59.5347 24.7957 58.5271L46.9259 36.4398L69.1211 58.54C70.1275 59.5423 71.7533 59.5435 72.762 58.5424L84.8833 46.5108L61.0131 22.2828ZM29.884 36.9559C25.8907 36.9559 22.783 33.7045 22.783 29.8548C22.783 26.0034 25.8907 22.7532 29.884 22.7532C33.8774 22.7532 36.9851 26.004 36.9851 29.8548C36.9839 33.7056 33.8762 36.9559 29.884 36.9559Z","data-v-00a1771e":""}}),n("path",{attrs:{d:"M32.4299 30.4688C32.4229 30.1357 32.288 29.8372 32.0247 29.5739C31.8282 29.3768 31.6159 29.2618 31.3895 29.2284C31.159 29.1921 30.9391 29.205 30.7291 29.2683C30.5221 29.3287 30.2605 29.4266 29.9438 29.5633C29.6535 29.6929 29.4318 29.785 29.2788 29.8384C29.1251 29.8847 28.9902 29.9029 28.8735 29.8935C28.7603 29.88 28.6536 29.8231 28.5533 29.7234C28.4131 29.5832 28.3533 29.4266 28.3732 29.253C28.3932 29.0795 28.4337 28.893 28.7668 28.5592L29.4295 27.8965L28.9896 27.4567L28.5034 27.9429C28.48 27.9528 28.4618 27.9511 28.4483 27.9382L28.0829 27.5528C28.0665 27.5364 28.0466 27.5294 28.0225 27.5329C27.9991 27.5294 27.9791 27.5364 27.9627 27.5528L27.5721 27.9429C27.5557 27.9599 27.5475 27.981 27.5475 28.008C27.5475 28.0279 27.5557 28.0461 27.5721 28.0631L27.9522 28.4232C27.9651 28.4367 27.9668 28.4549 27.9568 28.4783C27.7299 28.785 27.6202 29.0988 27.6267 29.419C27.6366 29.7357 27.7686 30.0207 28.0219 30.2741C28.2184 30.4712 28.4307 30.5896 28.6571 30.6289C28.8805 30.6659 29.1005 30.6524 29.3169 30.5896C29.5339 30.5263 29.7972 30.426 30.1075 30.2894C30.3907 30.1726 30.6095 30.0905 30.7626 30.0442C30.9162 29.9908 31.0529 29.9709 31.1731 29.9838C31.2898 29.9938 31.3948 30.0454 31.488 30.1392C31.6247 30.2753 31.6863 30.4377 31.6728 30.6242C31.6628 30.8072 31.5848 31.026 31.3877 31.2224L30.4212 32.1544L30.8388 32.6042L31.5027 32.0054C31.5262 31.9954 31.5443 31.9972 31.5578 32.0107L31.888 32.3508C31.9044 32.3672 31.9232 32.3755 31.9431 32.3755C31.9695 32.3755 31.9918 32.3672 32.0082 32.3508L32.3988 31.9608C32.4153 31.9438 32.4223 31.9245 32.4188 31.9004C32.4217 31.8769 32.4153 31.857 32.3988 31.84L32.064 31.5145C32.0505 31.5016 32.0487 31.4828 32.0587 31.4594C32.3132 31.1321 32.437 30.8019 32.4299 30.4688Z","data-v-00a1771e":""}})]),n("h3",[t._v("CommerceJs API Key Not Found")]),n("p",{staticStyle:{width:"50%",margin:"1rem auto"}},[t._v(" Looks like you havent provided a CommerceJs API key! You can find your API key in the settings section of the Dashboard. Please visit the link below to get started! ")]),n("a",{staticStyle:{color:"#41556C","text-decoration":"underline"},attrs:{href:"https://dashboard.chec.io/"}},[t._v("Visit Chec Dashboard")])])},k=[],w={name:"info"},L=w,S=(n("a67e"),Object(h["a"])(L,_,k,!1,null,null,null)),E=S.exports,P=(n("d3b7"),n("8c4f"));c["a"].use(P["a"]);var O=[{path:"/",name:"Products",component:function(){return n.e("chunk-45581d2e").then(n.bind(null,"b717"))}},{path:"/order-confirmation",name:"Order Confirmation",component:function(){return n.e("chunk-20d41afd").then(n.bind(null,"3171"))}},{path:"*",name:"Page Not Found",component:function(){return n.e("chunk-2d0883f4").then(n.bind(null,"a5b5"))}}],x=new P["a"]({routes:O,scrollBehavior:function(){return{x:0,y:0}}}),j=x;n("1192"),n("b20f");c["a"].config.productionTip=!1;var T=!1,A=new o.a("pk_18627c04e095e314a493d7ee1661ead4b9c97f01a5608",T,{url:"https://api.chec.io"}),$=l.a.create({headers:{"X-Authorization":"pk_18627c04e095e314a493d7ee1661ead4b9c97f01a5608"}});document.addEventListener("DOMContentLoaded",(function(){var t=null,e=null;"undefined"!==typeof Stripe&&(t=Stripe("pk_live_9XS4gXSzlYhWaOoj5cbVyEfi"),e=t.elements({fonts:[{family:"Cooper",src:"url('https://cdn.shopify.com/s/files/1/0003/4580/0755/files/39F9F0_0_0.woff2?44147')"}]})),c["a"].mixin({beforeCreate:function(){this.$stripe=t,this.$elements=e}})})),c["a"].use(a["a"]),c["a"].mixin({beforeCreate:function(){this.$axios=$,this.$commerce=A}}),new c["a"]({router:j,render:function(t){return t(null!==A?y:E)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(t,e,n){},a67e:function(t,e,n){"use strict";var r=n("e2d4"),o=n.n(r);o.a},b20f:function(t,e,n){},e2d4:function(t,e,n){}});
//# sourceMappingURL=app.92ac5337.js.map