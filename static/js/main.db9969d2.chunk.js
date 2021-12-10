(this["webpackJsonpreact-master"]=this["webpackJsonpreact-master"]||[]).push([[0],{73:function(n,e,t){"use strict";t.r(e);var c=t(1),i=t.n(c),r=t(27),o=t.n(r),a=t(8),s=t(7),l=t(18),d=t(6),j=t(13),b="https://api.coinpaprika.com/v1";function h(){return fetch("".concat(b,"/coins")).then((function(n){return n.json()}))}function p(n){return fetch("".concat(b,"/tickers/").concat(n)).then((function(n){return n.json()}))}var u,x,O,f,g,m,v,y,k,w,C,L,q,I,S,B,z,Q,P,_,M=t(0),A=s.c.div(u||(u=Object(a.a)(["\n  background-color: rgba(0, 0, 0, 0.4);\n  padding: 20px 30px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  line-height: 1.4;\n"]))),D=s.c.div(x||(x=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  margin-bottom: 3px;\n"]))),F=function(n){var e=n.coinId,t=Object(j.useQuery)(["price",e],(function(){return p(e)})),c=t.isLoading,i=t.data,r=null===i||void 0===i?void 0:i.quotes.USD;return Object(M.jsx)("div",{children:c?"Loading price...":Object(M.jsxs)(A,{children:[Object(M.jsxs)(D,{children:[Object(M.jsx)("span",{children:"Rank"}),Object(M.jsx)("span",{children:null===i||void 0===i?void 0:i.rank})]}),Object(M.jsxs)(D,{children:[Object(M.jsx)("span",{children:"Total Supply"}),Object(M.jsx)("span",{children:null===i||void 0===i?void 0:i.total_supply})]}),Object(M.jsxs)(D,{children:[Object(M.jsx)("span",{children:"Price"}),Object(M.jsx)("span",{children:null===r||void 0===r?void 0:r.price})]}),Object(M.jsxs)(D,{children:[Object(M.jsx)("span",{children:"Market Cap"}),Object(M.jsx)("span",{children:null===r||void 0===r?void 0:r.market_cap})]}),Object(M.jsxs)(D,{children:[Object(M.jsx)("span",{children:"Ath Date"}),Object(M.jsx)("span",{children:null===r||void 0===r?void 0:r.ath_date})]}),Object(M.jsxs)(D,{children:[Object(M.jsx)("span",{children:"Ath Price"}),Object(M.jsx)("span",{children:null===r||void 0===r?void 0:r.ath_price})]})]})})},R=t(45),T=t.n(R),G=function(n){var e=n.coinId,t=Object(j.useQuery)(["chart",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(b,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)})),c=t.isLoading,i=t.data;return Object(M.jsx)("div",{children:c?"Loading charts...":Object(M.jsx)(T.a,{type:"candlestick",series:[{name:"Price",data:null===i||void 0===i?void 0:i.map((function(n){return{x:n.time_close,y:[n.open,n.high,n.low,n.close]}}))}],options:{theme:{mode:"dark"},chart:{type:"candlestick",height:350,toolbar:{show:!1},background:"transparent"},title:{text:"CandleStick Chart",align:"left"},grid:{show:!1},yaxis:{show:!1,tooltip:{enabled:!0}},xaxis:{type:"datetime"}}})})},H=t(28),J=s.c.h1(O||(O=Object(a.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),U=s.c.span(f||(f=Object(a.a)(["\n  text-align: center;\n  display: block;\n"]))),E=s.c.div(g||(g=Object(a.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),N=s.c.header(m||(m=Object(a.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n"]))),K=s.c.div(v||(v=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: ",";\n  padding: 10px 20px;\n  border-radius: 10px;\n"])),(function(n){return n.theme.textBg})),V=s.c.div(y||(y=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),W=s.c.p(k||(k=Object(a.a)(["\n  margin: 20px 0px;\n"]))),X=s.c.div(w||(w=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),Y=s.c.span(C||(C=Object(a.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: ",";\n  padding: 7px 0px;\n  border-radius: 10px;\n  a {\n    display: block;\n  }\n  color: ",";\n"])),(function(n){return n.theme.textBg}),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor})),Z=s.c.div(L||(L=Object(a.a)(["\n  padding: 5px 10px;\n  background-color: ",";\n  font-size: 10px;\n  border-radius: 5px;\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n"])),(function(n){return n.theme.textBg})),$=function(){var n=Object(d.g)().coinId,e=Object(d.f)().state,t=Object(d.h)("/".concat(n,"/price")),c=Object(d.h)("/".concat(n,"/chart")),i=Object(j.useQuery)(["coin",n],(function(){return function(n){return fetch("".concat(b,"/coins/").concat(n)).then((function(n){return n.json()}))}(n)})),r=i.isLoading,o=i.data,a=Object(j.useQuery)(["ticker",n],(function(){return p(n)}),{refetchInterval:1e4}),s=a.isLoading,h=a.data,u=r||s;return Object(M.jsxs)(E,{children:[Object(M.jsx)(H.a,{children:Object(M.jsx)("title",{children:(null===e||void 0===e?void 0:e.name)?e.name:u?"Loading...":null===o||void 0===o?void 0:o.name})}),Object(M.jsxs)(N,{children:[Object(M.jsx)(Z,{children:Object(M.jsx)(l.b,{to:"/",children:"Go Back"})}),Object(M.jsx)(J,{children:(null===e||void 0===e?void 0:e.name)?e.name:u?"Loading...":null===o||void 0===o?void 0:o.name})]}),u?Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(Z,{children:"Go Back"}),Object(M.jsx)(U,{children:"Loading..."})]}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(K,{children:[Object(M.jsxs)(V,{children:[Object(M.jsx)("span",{children:"Rank:"}),Object(M.jsx)("span",{children:null===o||void 0===o?void 0:o.rank})]}),Object(M.jsxs)(V,{children:[Object(M.jsx)("span",{children:"Symbol:"}),Object(M.jsx)("span",{children:null===o||void 0===o?void 0:o.symbol})]}),Object(M.jsxs)(V,{children:[Object(M.jsx)("span",{children:"Price:"}),Object(M.jsx)("span",{children:null===h||void 0===h?void 0:h.quotes.USD.price.toFixed(3)})]})]}),Object(M.jsx)(W,{children:null===o||void 0===o?void 0:o.description}),Object(M.jsxs)(K,{children:[Object(M.jsxs)(V,{children:[Object(M.jsx)("span",{children:"Total Suply:"}),Object(M.jsx)("span",{children:null===h||void 0===h?void 0:h.total_supply})]}),Object(M.jsxs)(V,{children:[Object(M.jsx)("span",{children:"Max Supply:"}),Object(M.jsx)("span",{children:null===h||void 0===h?void 0:h.max_supply})]})]}),Object(M.jsxs)(X,{children:[Object(M.jsx)(Y,{isActive:null!==t,children:Object(M.jsx)(l.b,{to:"/".concat(n,"/price"),children:"Price"})}),Object(M.jsx)(Y,{isActive:null!==c,children:Object(M.jsx)(l.b,{to:"/".concat(n,"/chart"),children:"Chart"})})]}),Object(M.jsxs)(d.c,{children:[Object(M.jsx)(d.a,{path:"/:coinId/price",children:Object(M.jsx)(F,{coinId:n})}),Object(M.jsx)(d.a,{path:"/:coinId/chart",children:Object(M.jsx)(G,{coinId:n})})]})]})]})},nn={bgColor:"whitesmoke",textColor:"black",accentColor:"#9c88ff",textBg:"rgba(0, 0, 0, 0.2)"},en=s.c.div(q||(q=Object(a.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),tn=s.c.header(I||(I=Object(a.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n"]))),cn=s.c.ul(S||(S=Object(a.a)([""]))),rn=s.c.li(B||(B=Object(a.a)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  a {\n    padding: 20px;\n    transition: color 0.2s ease-in;\n    display: flex;\n    align-items: center;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.textBg}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),on=s.c.h1(z||(z=Object(a.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),an=s.c.div(Q||(Q=Object(a.a)(["\n  font-size: 30px;\n"]))),sn=s.c.img(P||(P=Object(a.a)(["\n  width: 30px;\n  height: 30px;\n  margin-right: 10px;\n"]))),ln=s.c.div(_||(_=Object(a.a)(["\n  position: absolute;\n  right: 0;\n  top: 20px;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  background-color: #f7e545;\n  div {\n    display: ",";\n    width: 23px;\n    height: 23px;\n    border-radius: 50%;\n    background-color: ",";\n  }\n"])),(function(n){return n.theme===nn?"none":"span"}),(function(n){return n.theme.bgColor}));var dn,jn=function(){var n=Object(j.useQuery)("allCoins",h),e=n.isLoading,t=n.data;return Object(M.jsxs)(en,{children:[Object(M.jsx)(H.a,{children:Object(M.jsx)("title",{children:"Coin"})}),Object(M.jsxs)(tn,{children:[Object(M.jsx)(ln,{children:Object(M.jsx)("div",{})}),Object(M.jsx)(on,{children:"Coin"})]}),e?Object(M.jsx)(an,{children:"Loading..."}):Object(M.jsx)(cn,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(M.jsx)(rn,{children:Object(M.jsxs)(l.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(M.jsx)(sn,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase()),alt:""}),n.name," \u2192"]})},n.id)}))})]})},bn=function(){return Object(M.jsx)(l.a,{children:Object(M.jsxs)(d.c,{children:[Object(M.jsx)(d.a,{path:"/:coinId",children:Object(M.jsx)($,{})}),Object(M.jsx)(d.a,{path:"/",children:Object(M.jsx)(jn,{})})]})})},hn=t(49),pn=Object(s.b)(dn||(dn=Object(a.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;800&family=Rubik:wght@500&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\n* {\n  box-sizing: border-box;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var un=function(){return Object(M.jsx)("div",{children:Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(pn,{}),Object(M.jsx)(bn,{}),Object(M.jsx)(hn.ReactQueryDevtools,{initialIsOpen:!0})]})})},xn=new j.QueryClient;o.a.render(Object(M.jsx)(i.a.StrictMode,{children:Object(M.jsx)(j.QueryClientProvider,{client:xn,children:Object(M.jsx)(s.a,{theme:{bgColor:"#2f3640",textColor:"#f5f6fa",accentColor:"#9c88ff",textBg:"rgba(0, 0, 0, 0.5)"},children:Object(M.jsx)(un,{})})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.db9969d2.chunk.js.map