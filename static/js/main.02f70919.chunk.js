(this["webpackJsonpheadway-test-task"]=this["webpackJsonpheadway-test-task"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={homeContent:"Layout_homeContent__1n8hk",startBackground:"Layout_startBackground__2ugAi",handIcon:"Layout_handIcon__1DcVi",homeTitle:"Layout_homeTitle__12PAe",subText:"Layout_subText__Yu4Gp",titleWrapper:"Layout_titleWrapper__1j7jz",homeButton:"Layout_homeButton__1taod"}},,,function(e,t,n){e.exports={priceListWrapper:"PriceList_priceListWrapper__3j-wD",collapsedMenuOpen:"PriceList_collapsedMenuOpen__2NonN",collapsedMenuClose:"PriceList_collapsedMenuClose__3Tctk"}},function(e,t,n){e.exports={rectangleButton:"RectangleButton_rectangleButton__38eXZ",answerText:"RectangleButton_answerText__1JmNo",answerLetter:"RectangleButton_answerLetter__2if6B"}},,,function(e,t,n){e.exports={button:"Button_button__3SlS9"}},,,,function(e,t,n){e.exports={priceItemWrapper:"PriceItem_priceItemWrapper__3HPf8",doneStage:"PriceItem_doneStage__1UymC"}},function(e,t,n){e.exports={gameWrapper:"Game_gameWrapper__2InCR",burgerIcon:"Game_burgerIcon__j60wx"}},,,,,,function(e,t,n){e.exports={wrapper:"Answers_wrapper__23hip"}},function(e,t,n){e.exports={question:"QuestionTitle_question__1QKf1"}},function(e,t,n){e.exports={wrapper:"QuestionHolder_wrapper__vas0Q",question:"QuestionHolder_question__1RoeB"}},,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(21),r=n.n(c),a=n(27),o=n(2),s=n(13),u=n.n(s),i=n(0),l=function(e){var t=e.text,n=e.handleClick,c=e.children,r=e.customClass;return Object(i.jsx)(i.Fragment,{children:c?Object(i.jsx)("button",{onClick:n,type:"button",className:"".concat(u.a.button).concat(r?" ".concat(r):""),children:c}):Object(i.jsx)("button",{onClick:n,type:"button",className:"".concat(u.a.button).concat(r?" ".concat(r):""),children:t})})},j=n.p+"static/media/hand.ae778be2.svg",b=n(6),p=n.n(b),d=function(e){var t=e.buttonText,n=e.titleText,c=e.clickHandler,r=e.isStart;return Object(i.jsxs)("div",{className:"".concat(p.a.homeContent," ").concat(r?p.a.startBackground:null),children:[Object(i.jsx)("img",{className:p.a.handIcon,src:j,alt:"Hand"}),Object(i.jsxs)("div",{className:p.a.titleWrapper,children:[!r&&Object(i.jsx)("h3",{className:p.a.subText,children:"Total score:"}),Object(i.jsx)("h1",{className:p.a.homeTitle,children:n}),Object(i.jsx)(l,{customClass:p.a.homeButton,handleClick:c,children:t})]})]})},h=function(){var e=Object(o.f)();return Object(i.jsx)(d,{isStart:!0,titleText:"Who wants to be a\xa0millionaire?",buttonText:"Start",clickHandler:function(){return e.push("/game")}})},x=n(16),m=n.n(x),O=n(23),f=n(3),g=n(1),w={score:"0",setCurrentScore:function(){},stage:0,setCurrentStage:function(){}},_=Object(g.createContext)(w),v=(new Intl.NumberFormat).format,C=n(17),y=n.n(C),B=function(e){var t=e.item,n=e.current,c=parseInt(t.money,10),r=v(c);return Object(i.jsxs)("div",{className:"".concat(y.a.priceItemWrapper," ").concat(t.done?y.a.doneStage:void 0),children:[Object(i.jsx)("svg",{width:"69",height:"2",viewBox:"0 0 69 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{d:"M69 1H0",stroke:n?"#FF8B37":"#D0D0D8"})}),Object(i.jsx)("svg",{width:"240",height:"40",viewBox:"0 0 240 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{d:"M13.4526 4.63788C15.6376 2.01596 18.8742 0.5 22.2872 0.5H217.713C221.126 0.5 224.362 2.01597 226.547 4.63788L239.349 20L226.547 35.3621C224.362 37.984 221.126 39.5 217.713 39.5H22.2872C18.8742 39.5 15.6376 37.984 13.4526 35.3621L0.650853 20L13.4526 4.63788Z",fill:"white",stroke:n?"#FF8B37":"#D0D0D8"})}),Object(i.jsxs)("p",{children:["$",r]}),Object(i.jsx)("svg",{width:"69",height:"2",viewBox:"0 0 69 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{d:"M69 1H0",stroke:n?"#FF8B37":"#D0D0D8"})})]},t.money)},k=n(9),L=n.n(k),S=function(e){var t=e.money,n=e.openMenu,c=e.setOpenMenu,r=Object(g.useContext)(_).stage,a=Object(g.useState)(!1),o=Object(f.a)(a,2),s=o[0],u=o[1],l=function(){var e=Object(g.useState)(0),t=Object(f.a)(e,2),n=t[0],c=t[1];return Object(g.useLayoutEffect)((function(){function e(){c(document.body.clientWidth)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}();return Object(g.useEffect)((function(){l<=1350?u(!0):(u(!1),c(!1))}),[l,c]),Object(i.jsx)("div",{className:"".concat(L.a.priceListWrapper," ").concat(n&&L.a.collapsedMenuOpen," ").concat(!n&&s&&L.a.collapsedMenuClose),children:t&&t.map((function(e,t){return Object(i.jsx)(B,{item:e,current:t===r},e.money)}))})},M=n(10),N=n.n(M),D=function(e,t){return e?t:null},F=function(e){var t,n=e.text,c=e.isCorrect,r=e.money,a=e.letterIndex,o=Object(g.useState)(!1),s=Object(f.a)(o,2),u=s[0],l=s[1],j=Object(g.useState)(!1),b=Object(f.a)(j,2),p=b[0],d=b[1],h=Object(g.useContext)(_),x=h.setCurrentScore,m=h.setCurrentStage,O=h.stage;return Object(i.jsxs)("div",{tabIndex:-1,role:"button",className:N.a.rectangleButton,onMouseEnter:function(){return l(!0)},onMouseLeave:function(){return l(!1)},onMouseDown:function(){d(!0),c?r.forEach((function(e,t){t===O&&x(e.money)})):m(12),setTimeout((function(){return m(O+1)}),500)},children:[Object(i.jsx)("svg",{width:"25",height:"2",viewBox:"0 0 69 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{d:"M69 1H0",stroke:"".concat(D(u&&!p,"#FF8B37")||D(p&&c,"#47D867")||D(p&&!c,"#EC6259")||"#000")})}),Object(i.jsx)("svg",{width:"389",height:"72",viewBox:"0 0 240 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{fill:"".concat(D(p&&c,"#E6FAEA")||D(p&&!c,"#FDEEED")||D(u,"#FFF3EB")||"#fff"),d:"M13.4526 4.63788C15.6376 2.01596 18.8742 0.5 22.2872 0.5H217.713C221.126 0.5 224.362 2.01597 226.547 4.63788L239.349 20L226.547 35.3621C224.362 37.984 221.126 39.5 217.713 39.5H22.2872C18.8742 39.5 15.6376 37.984 13.4526 35.3621L0.650853 20L13.4526 4.63788Z",stroke:"".concat(D(!p,"#FF8B37")||D(p&&c,"#47D867")||D(p&&!c,"#EC6259")||"#D0D0D8")})}),Object(i.jsxs)("p",{className:N.a.answerText,children:[Object(i.jsx)("span",{className:N.a.answerLetter,children:(t=a,"abcdefghijklmnopqrstuvwxyz".split("").filter((function(e,n){return n===t})).join("").toUpperCase())}),n]}),Object(i.jsx)("svg",{width:"25",height:"2",viewBox:"0 0 69 1",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{d:"M69 1H0",stroke:"".concat(D(u&&!p,"#FF8B37")||D(p&&c,"#47D867")||D(p&&!c,"#EC6259")||"#000")})})]})},T=n(24),E=n.n(T),I=function(e){var t=e.answers,n=e.money,c=Object(g.useContext)(_).stage;return Object(i.jsx)("div",{className:E.a.wrapper,children:t.map((function(e,t){return c===t?e.map((function(e,t){return Object(i.jsx)(F,{letterIndex:t,money:n,text:e.answer,isCorrect:e.isCorrect},Math.random())})):null}))})},H=n(25),W=n.n(H),q=function(e){var t=e.titles,n=Object(g.useContext)(_).stage;return Object(i.jsx)("h1",{className:W.a.question,children:t.map((function(e,t){return t===n?e:null}))})},P=n(26),A=n.n(P),Q=function(e){var t=e.questions,n=e.money,c=t.map((function(e){return e.question})),r=t.map((function(e){return e.answers}));return Object(i.jsxs)("div",{className:A.a.wrapper,children:[Object(i.jsx)(q,{titles:c}),Object(i.jsx)(I,{answers:r,money:n})]})},R=n.p+"static/media/burger-menu.4cc3cba4.svg",z=n.p+"static/media/cross.46c988ed.svg",G=n(18),J=n.n(G),Z=function(){var e=Object(g.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(g.useState)([]),a=Object(f.a)(r,2),s=a[0],u=a[1],l=Object(g.useState)(!1),j=Object(f.a)(l,2),b=j[0],p=j[1],d=Object(g.useContext)(_).stage;return Object(g.useEffect)((function(){(function(){var e=Object(O.a)(m.a.mark((function e(){var t,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("./gameConfig.json").then((function(e){return e.json()}));case 3:t=e.sent,n=t.questions.map((function(e,t){return 0===t?{money:e.money,current:!0,done:!1}:{money:e.money,current:!1,done:!1}})),r=t.questions.map((function(e){return{question:e.question,answers:e.answers}})),c(r),u(n),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Error when fetching data! ".concat(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(i.jsxs)("div",{className:J.a.gameWrapper,children:[Object(i.jsx)("div",{tabIndex:0,role:"button",className:J.a.burgerIcon,onClick:function(){return p(!b)},onKeyDown:function(){return p(!b)},children:Object(i.jsx)("img",{src:b?z:R,alt:"burger-menu",width:"16"})}),b&&Object(i.jsx)(S,{money:s,openMenu:b,setOpenMenu:p}),12===d||s.length>0&&d+1>s.length?Object(i.jsx)(o.a,{to:"/end"}):Object(i.jsxs)(i.Fragment,{children:[!b&&Object(i.jsx)(Q,{questions:n,money:s}),!b&&Object(i.jsx)(S,{money:s,openMenu:b,setOpenMenu:p})]})]})},K=n(8),U=function(){var e=Object(o.f)(),t=Object(g.useContext)(_),n=t.score,c=t.setCurrentScore,r=t.setCurrentStage,a="$".concat(v(+n)," earned");return Object(i.jsx)(d,{titleText:a,buttonText:"Try again",clickHandler:function(){e.push("/game"),c("0"),r(0)}})},$=(n(39),function(){var e=function(){var e=Object(g.useState)({score:"0",stage:0}),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(g.useCallback)((function(e){return c((function(t){return Object(K.a)(Object(K.a)({},t),{},{score:e})}))}),[]),a=Object(g.useCallback)((function(e){return c((function(t){return Object(K.a)(Object(K.a)({},t),{},{stage:e})}))}),[]);return{score:n.score,setCurrentScore:r,stage:n.stage,setCurrentStage:a}}();return Object(i.jsx)(_.Provider,{value:e,children:Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(o.b,{exact:!0,path:"/",component:h}),Object(i.jsx)(o.b,{exact:!0,path:"/game",component:Z}),Object(i.jsx)(o.b,{exact:!0,path:"/end",component:U})]})})});n(40);r.a.render(Object(i.jsx)(a.a,{children:Object(i.jsx)($,{})}),document.getElementById("root"))}],[[41,1,2]]]);
//# sourceMappingURL=main.02f70919.chunk.js.map