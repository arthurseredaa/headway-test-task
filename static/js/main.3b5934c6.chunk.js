(this["webpackJsonpheadway-test-task"]=this["webpackJsonpheadway-test-task"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports={homeContent:"Layout_homeContent__1n8hk",startBackground:"Layout_startBackground__2ugAi",handIcon:"Layout_handIcon__1DcVi",homeTitle:"Layout_homeTitle__12PAe",titleWrapper:"Layout_titleWrapper__1j7jz",homeButton:"Layout_homeButton__1taod"}},,,function(e,t,n){e.exports={priceListWrapper:"PriceList_priceListWrapper__3j-wD",collapsedMenuOpen:"PriceList_collapsedMenuOpen__2NonN",collapsedMenuClose:"PriceList_collapsedMenuClose__3Tctk"}},,,function(e,t,n){e.exports={button:"Button_button__3SlS9"}},,,,function(e,t,n){e.exports={priceItemWrapper:"PriceItem_priceItemWrapper__3HPf8",doneStage:"PriceItem_doneStage__1UymC"}},function(e,t,n){e.exports={gameWrapper:"Game_gameWrapper__2InCR",burgerIcon:"Game_burgerIcon__j60wx"}},,,,,function(e,t,n){e.exports={rectangleButton:"RectangleButton_rectangleButton__38eXZ"}},function(e,t,n){e.exports={wrapper:"Answers_wrapper__23hip"}},function(e,t,n){e.exports={question:"QuestionTitle_question__1QKf1"}},function(e,t,n){e.exports={wrapper:"QuestionHolder_wrapper__vas0Q",question:"QuestionHolder_question__1RoeB"}},,,,,,function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(22),r=n.n(c),s=(n(34),n(2)),a=n(15),o=n.n(a),i=n(1),u=function(e){var t=e.text,n=e.handleClick,c=e.children,r=e.customClass;return Object(i.jsx)(i.Fragment,{children:c?Object(i.jsx)("button",{onClick:n,className:"".concat(o.a.button).concat(r?" "+r:""),children:c}):Object(i.jsx)("button",{onClick:n,className:"".concat(o.a.button).concat(r?" "+r:""),children:t})})},j=n.p+"static/media/hand.ae778be2.svg",l=n(9),b=n.n(l),p=function(e){var t=e.buttonText,n=e.titleText,c=e.clickHandler,r=e.isStart;return Object(i.jsxs)("div",{className:"".concat(b.a.homeContent," ").concat(r?b.a.startBackground:null),children:[Object(i.jsx)("img",{className:b.a.handIcon,src:j,alt:"Hand"}),Object(i.jsxs)("div",{className:b.a.titleWrapper,children:[Object(i.jsx)("h1",{className:b.a.homeTitle,children:n}),Object(i.jsx)(u,{customClass:b.a.homeButton,handleClick:c,children:t})]})]})},d=function(){var e=Object(s.f)();return Object(i.jsx)(p,{isStart:!0,titleText:"Who wants to be a\xa0millionaire?",buttonText:"Start",clickHandler:function(){return e.push("/game")}})},h=n(18),m=n.n(h),x=n(24),O=n(4),f=n(0),g={score:"0",setCurrentScore:function(){},stage:0,setCurrentStage:function(){}},w=Object(f.createContext)(g),v=(new Intl.NumberFormat).format,_=n(19),C=n.n(_),y=function(e){var t=e.item,n=e.current,c=parseInt(t.money),r=v(c);return Object(i.jsxs)("div",{className:"".concat(C.a.priceItemWrapper," ").concat(t.done?C.a.doneStage:void 0),children:[Object(i.jsx)("svg",{width:"69",height:"2",viewBox:"0 0 69 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{d:"M69 1H0",stroke:n?"#FF8B37":"#D0D0D8"})}),Object(i.jsx)("svg",{width:"240",height:"40",viewBox:"0 0 240 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{d:"M13.4526 4.63788C15.6376 2.01596 18.8742 0.5 22.2872 0.5H217.713C221.126 0.5 224.362 2.01597 226.547 4.63788L239.349 20L226.547 35.3621C224.362 37.984 221.126 39.5 217.713 39.5H22.2872C18.8742 39.5 15.6376 37.984 13.4526 35.3621L0.650853 20L13.4526 4.63788Z",fill:"white",stroke:n?"#FF8B37":"#D0D0D8"})}),Object(i.jsxs)("p",{children:["$",r]}),Object(i.jsx)("svg",{width:"69",height:"2",viewBox:"0 0 69 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{d:"M69 1H0",stroke:n?"#FF8B37":"#D0D0D8"})})]},t.money)},k=n(12),B=n.n(k),L=function(e){var t=e.money,n=e.openMenu,c=Object(f.useContext)(w).stage,r=Object(f.useState)(!1),s=Object(O.a)(r,2),a=s[0],o=s[1],u=function(){var e=Object(f.useState)(0),t=Object(O.a)(e,2),n=t[0],c=t[1];return Object(f.useLayoutEffect)((function(){function e(){c(document.body.clientWidth)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}();return Object(f.useEffect)((function(){o(u<=1350)}),[u]),Object(i.jsx)("div",{className:"".concat(B.a.priceListWrapper," ").concat(n&&B.a.collapsedMenuOpen," ").concat(!n&&a&&B.a.collapsedMenuClose),children:t&&t.map((function(e,t){return Object(i.jsx)(y,{item:e,current:t===c},e.money)}))})},S=n(25),D=n.n(S),F=function(e){var t=e.text,n=e.isCorrect,c=e.money,r=Object(f.useState)(!1),s=Object(O.a)(r,2),a=s[0],o=s[1],u=Object(f.useState)(!1),j=Object(O.a)(u,2),l=j[0],b=j[1],p=Object(f.useContext)(w),d=p.setCurrentScore,h=p.setCurrentStage,m=p.stage;return Object(i.jsxs)("div",{className:D.a.rectangleButton,onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},onMouseDown:function(){b(!0),n?c.forEach((function(e,t){t===m&&d(e.money)})):h(12),setTimeout((function(){return h(m+1)}),500)},children:[Object(i.jsx)("svg",{width:"25",height:"2",viewBox:"0 0 69 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{d:"M69 1H0",stroke:a&&!l?"#FF8B37":l&&n?"#47D867":l&&!n?"#EC6259":"#000"})}),Object(i.jsx)("svg",{width:"389",height:"72",viewBox:"0 0 240 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{fill:l&&n?"#E6FAEA":l&&!n?"#FDEEED":a?"#FFF3EB":"white",d:"M13.4526 4.63788C15.6376 2.01596 18.8742 0.5 22.2872 0.5H217.713C221.126 0.5 224.362 2.01597 226.547 4.63788L239.349 20L226.547 35.3621C224.362 37.984 221.126 39.5 217.713 39.5H22.2872C18.8742 39.5 15.6376 37.984 13.4526 35.3621L0.650853 20L13.4526 4.63788Z",stroke:a&&!l?"#FF8B37":l&&n?"#47D867":l&&!n?"#EC6259":"#D0D0D8"})}),Object(i.jsx)("p",{children:t}),Object(i.jsx)("svg",{width:"25",height:"2",viewBox:"0 0 69 1",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{d:"M69 1H0",stroke:a&&!l?"#FF8B37":l&&n?"#47D867":l&&!n?"#EC6259":"#000"})})]})},E=n(26),N=n.n(E),M=function(e){var t=e.answers,n=e.money,c=Object(f.useContext)(w).stage;return Object(i.jsx)("div",{className:N.a.wrapper,children:t.map((function(e,t){return c===t?e.map((function(e,t){return Object(i.jsx)(F,{money:n,text:e.answer,isCorrect:e.isCorrect},t)})):null}))})},H=n(27),I=n.n(H),W=function(e){var t=e.titles,n=Object(f.useContext)(w).stage;return Object(i.jsx)("h1",{className:I.a.question,children:t.map((function(e,t){return t===n?e:null}))})},T=n(28),q=n.n(T),P=function(e){var t=e.questions,n=e.money,c=t.map((function(e){return e.question})),r=t.map((function(e){return e.answers}));return Object(i.jsxs)("div",{className:q.a.wrapper,children:[Object(i.jsx)(W,{titles:c}),Object(i.jsx)(M,{answers:r,money:n})]})},A=n.p+"static/media/burger-menu.4cc3cba4.svg",Q=n.p+"static/media/cross.46c988ed.svg",z=n(20),R=n.n(z),Z=function(){var e=Object(f.useState)([]),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(f.useState)([]),a=Object(O.a)(r,2),o=a[0],u=a[1],j=Object(f.useState)(!1),l=Object(O.a)(j,2),b=l[0],p=l[1],d=Object(f.useContext)(w).stage;return Object(f.useEffect)((function(){(function(){var e=Object(x.a)(m.a.mark((function e(){var t,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("./gameConfig.json").then((function(e){return e.json()}));case 3:t=e.sent,n=t.questions.map((function(e,t){return 0===t?{money:e.money,current:!0,done:!1}:{money:e.money,current:!1,done:!1}})),r=t.questions.map((function(e){return{question:e.question,answers:e.answers}})),c(r),u(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error when fetching data!",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(i.jsxs)("div",{className:R.a.gameWrapper,children:[Object(i.jsx)("div",{className:R.a.burgerIcon,onClick:function(){return p(!b)},children:Object(i.jsx)("img",{src:b?Q:A,alt:"burger-menu",width:"16"})}),b&&Object(i.jsx)(L,{money:o,openMenu:b}),12===d||o.length>0&&d+1>o.length?Object(i.jsx)(s.a,{to:"/end"}):Object(i.jsxs)(i.Fragment,{children:[!b&&Object(i.jsx)(P,{questions:n,money:o}),!b&&Object(i.jsx)(L,{money:o})]})]})},G=n(11),J=function(){var e=Object(s.f)(),t=Object(f.useContext)(w),n=t.score,c=t.setCurrentScore,r=t.setCurrentStage,a="$".concat(v(+n)," earned");return Object(i.jsx)(p,{titleText:a,buttonText:"Try again",clickHandler:function(){e.push("/game"),c("0"),r(0)}})},$=(n(42),function(){var e=function(){var e=Object(f.useState)({score:"0",stage:0}),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(f.useCallback)((function(e){return c((function(t){return Object(G.a)(Object(G.a)({},t),{},{score:e})}))}),[]),s=Object(f.useCallback)((function(e){return c((function(t){return Object(G.a)(Object(G.a)({},t),{},{stage:e})}))}),[]);return{score:n.score,setCurrentScore:r,stage:n.stage,setCurrentStage:s}}();return Object(i.jsx)(w.Provider,{value:e,children:Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(s.b,{exact:!0,path:"/",component:d}),Object(i.jsx)(s.b,{exact:!0,path:"/game",component:Z}),Object(i.jsx)(s.b,{exact:!0,path:"/end",component:J})]})})}),K=n(29);r.a.render(Object(i.jsx)(K.a,{basename:"/headway-test-task",children:Object(i.jsx)($,{})}),document.getElementById("root"))}],[[43,1,2]]]);
//# sourceMappingURL=main.3b5934c6.chunk.js.map