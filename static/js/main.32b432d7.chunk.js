(this["webpackJsonpheadway-test-task"]=this["webpackJsonpheadway-test-task"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={homeContent:"Layout_homeContent__1n8hk",startBackground:"Layout_startBackground__2ugAi",handIcon:"Layout_handIcon__1DcVi",homeTitle:"Layout_homeTitle__12PAe",subText:"Layout_subText__Yu4Gp",titleWrapper:"Layout_titleWrapper__1j7jz",homeButton:"Layout_homeButton__1taod"}},,,function(e,t,n){e.exports={priceListWrapper:"PriceList_priceListWrapper__3j-wD",collapsedMenuOpen:"PriceList_collapsedMenuOpen__2NonN",collapsedMenuClose:"PriceList_collapsedMenuClose__3Tctk"}},function(e,t,n){e.exports={rectangleButton:"RectangleButton_rectangleButton__38eXZ",answerText:"RectangleButton_answerText__1JmNo",answerLetter:"RectangleButton_answerLetter__2if6B"}},,,function(e,t,n){e.exports={button:"Button_button__3SlS9"}},,,,function(e,t,n){e.exports={priceItemWrapper:"PriceItem_priceItemWrapper__3HPf8",doneStage:"PriceItem_doneStage__1UymC"}},function(e,t,n){e.exports={gameWrapper:"Game_gameWrapper__2InCR",burgerIcon:"Game_burgerIcon__j60wx"}},,,,,,function(e,t,n){e.exports={wrapper:"Answers_wrapper__23hip"}},function(e,t,n){e.exports={question:"QuestionTitle_question__1QKf1"}},function(e,t,n){e.exports={wrapper:"QuestionHolder_wrapper__vas0Q",question:"QuestionHolder_question__1RoeB"}},,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(21),c=n.n(r),o=n(27),s=n(2),a=n(13),i=n.n(a),u=n(0),l=function(e){var t=e.text,n=e.handleClick,r=e.children,c=e.customClass;return Object(u.jsx)(u.Fragment,{children:r?Object(u.jsx)("button",{onClick:n,type:"button",className:"".concat(i.a.button).concat(c?" ".concat(c):""),children:r}):Object(u.jsx)("button",{onClick:n,type:"button",className:"".concat(i.a.button).concat(c?" ".concat(c):""),children:t})})},j=n.p+"static/media/hand.ae778be2.svg",b=n(6),p=n.n(b),d=function(e){var t=e.buttonText,n=e.titleText,r=e.clickHandler,c=e.isStart;return Object(u.jsxs)("div",{className:"".concat(p.a.homeContent," ").concat(c?p.a.startBackground:null),children:[Object(u.jsx)("img",{className:p.a.handIcon,src:j,alt:"Hand"}),Object(u.jsxs)("div",{className:p.a.titleWrapper,children:[!c&&Object(u.jsx)("h3",{className:p.a.subText,children:"Total score:"}),Object(u.jsx)("h1",{className:p.a.homeTitle,children:n}),Object(u.jsx)(l,{customClass:p.a.homeButton,handleClick:r,children:t})]})]})},h=function(){var e=Object(s.f)();return Object(u.jsx)(d,{isStart:!0,titleText:"Who wants to be a\xa0millionaire?",buttonText:"Start",clickHandler:function(){return e.push("/game")}})},x=n(16),m=n.n(x),f=n(23),O=n(3),g=n(1),w={score:"0",setCurrentScore:function(){},stage:0,setCurrentStage:function(){}},_=Object(g.createContext)(w),v=(new Intl.NumberFormat).format,C=n(17),y=n.n(C),k=function(e){var t=e.item,n=e.current,r=parseInt(t.money,10),c=v(r);return Object(u.jsxs)("div",{className:"".concat(y.a.priceItemWrapper," ").concat(t.done?y.a.doneStage:void 0),children:[Object(u.jsx)("svg",{width:"69",height:"2",viewBox:"0 0 69 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M69 1H0",stroke:n?"#FF8B37":"#D0D0D8"})}),Object(u.jsx)("svg",{width:"240",height:"40",viewBox:"0 0 240 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M13.4526 4.63788C15.6376 2.01596 18.8742 0.5 22.2872 0.5H217.713C221.126 0.5 224.362 2.01597 226.547 4.63788L239.349 20L226.547 35.3621C224.362 37.984 221.126 39.5 217.713 39.5H22.2872C18.8742 39.5 15.6376 37.984 13.4526 35.3621L0.650853 20L13.4526 4.63788Z",fill:"white",stroke:n?"#FF8B37":"#D0D0D8"})}),Object(u.jsxs)("p",{children:["$",c]}),Object(u.jsx)("svg",{width:"69",height:"2",viewBox:"0 0 69 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M69 1H0",stroke:n?"#FF8B37":"#D0D0D8"})})]},t.money)},B=n(9),L=n.n(B),E=function(e){var t=e.money,n=e.openMenu,r=e.setOpenMenu,c=Object(g.useContext)(_).stage,o=Object(g.useState)(!1),s=Object(O.a)(o,2),a=s[0],i=s[1],l=function(){var e=Object(g.useState)(0),t=Object(O.a)(e,2),n=t[0],r=t[1];return Object(g.useLayoutEffect)((function(){function e(){r(document.body.clientWidth)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}();return Object(g.useEffect)((function(){l<=1350?i(!0):(i(!1),r(!1))}),[l,r]),Object(u.jsx)("div",{className:"".concat(L.a.priceListWrapper," ").concat(n&&L.a.collapsedMenuOpen," ").concat(!n&&a&&L.a.collapsedMenuClose),children:t&&t.map((function(e,t){return Object(u.jsx)(k,{item:e,current:t===c},e.money)}))})},S=n(10),F=n.n(S),M=function(e,t,n,r){return t&&n?r?"#47D867":"#E6FAEA":t&&!n?r?"#EC6259":"#FDEEED":e?r?"#FF8B37":"#FFF3EB":r?"#000":"#fff"},N=function(e){var t=e.text,n=e.isCorrect,r=e.letter,c=e.setIsHover,o=e.handleClick,s=e.isHover,a=e.isClicked,i=e.rectangleColor,l=e.lineColor;return Object(u.jsxs)("div",{tabIndex:-1,role:"button",className:F.a.rectangleButton,onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},onMouseDown:o,children:[Object(u.jsx)("svg",{width:"25",height:"2",viewBox:"0 0 69 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M69 1H0",stroke:l})}),Object(u.jsx)("svg",{width:"389",height:"72",viewBox:"0 0 240 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{fill:a?"#fefefe":i,d:"M13.4526 4.63788C15.6376 2.01596 18.8742 0.5 22.2872 0.5H217.713C221.126 0.5 224.362 2.01597 226.547 4.63788L239.349 20L226.547 35.3621C224.362 37.984 221.126 39.5 217.713 39.5H22.2872C18.8742 39.5 15.6376 37.984 13.4526 35.3621L0.650853 20L13.4526 4.63788Z",stroke:M(s,a,n,!0)})}),Object(u.jsxs)("p",{className:F.a.answerText,children:[Object(u.jsx)("span",{className:F.a.answerLetter,children:r}),t]}),Object(u.jsx)("svg",{width:"25",height:"2",viewBox:"0 0 69 1",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M69 1H0",stroke:l})})]})},I=function(e,t,n,r){return t&&n?r?"#47D867":"#E6FAEA":t&&!n?r?"#EC6259":"#FDEEED":e?r?"#FF8B37":"#FFF3EB":r?"#000":"#fff"},T=function(e){var t,n=e.text,r=e.isCorrect,c=e.money,o=e.letterIndex,s=Object(g.useState)(!1),a=Object(O.a)(s,2),i=a[0],l=a[1],j=Object(g.useState)(!1),b=Object(O.a)(j,2),p=b[0],d=b[1],h=Object(g.useContext)(_),x=h.setCurrentScore,m=h.setCurrentStage,f=h.stage,w=(t=o,"abcdefghijklmnopqrstuvwxyz".split("").filter((function(e,n){return n===t})).join("").toUpperCase()),v=I(i,p,r,!0),C=I(i,p,r,!1);return Object(u.jsx)(N,{lineColor:v,rectangleColor:C,letter:w,text:n,isCorrect:r,isHover:i,isClicked:p,setIsHover:l,handleClick:function(){d(!0),r?c.forEach((function(e,t){t===f&&x(e.money)})):m(12),setTimeout((function(){return m(f+1)}),500)}})},D=n(24),H=n.n(D),W=function(e){var t=e.answers,n=e.money,r=Object(g.useContext)(_).stage;return Object(u.jsx)("div",{className:H.a.wrapper,children:t.map((function(e,t){return r===t?e.map((function(e,t){return Object(u.jsx)(T,{letterIndex:t,money:n,text:e.answer,isCorrect:e.isCorrect},Math.random())})):null}))})},q=n(25),P=n.n(q),A=function(e){var t=e.titles,n=Object(g.useContext)(_).stage;return Object(u.jsx)("h1",{className:P.a.question,children:t.map((function(e,t){return t===n?e:null}))})},Q=n(26),R=n.n(Q),z=function(e){var t=e.questions,n=e.money,r=t.map((function(e){return e.question})),c=t.map((function(e){return e.answers}));return Object(u.jsxs)("div",{className:R.a.wrapper,children:[Object(u.jsx)(A,{titles:r}),Object(u.jsx)(W,{answers:c,money:n})]})},G=n.p+"static/media/burger-menu.4cc3cba4.svg",J=n.p+"static/media/cross.46c988ed.svg",Z=n(18),K=n.n(Z),U=function(){var e=Object(g.useState)([]),t=Object(O.a)(e,2),n=t[0],r=t[1],c=Object(g.useState)([]),o=Object(O.a)(c,2),a=o[0],i=o[1],l=Object(g.useState)(!1),j=Object(O.a)(l,2),b=j[0],p=j[1],d=Object(g.useContext)(_).stage;return Object(g.useEffect)((function(){(function(){var e=Object(f.a)(m.a.mark((function e(){var t,n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("./gameConfig.json").then((function(e){return e.json()}));case 3:t=e.sent,n=t.questions.map((function(e,t){return 0===t?{money:e.money,current:!0,done:!1}:{money:e.money,current:!1,done:!1}})),c=t.questions.map((function(e){return{question:e.question,answers:e.answers}})),r(c),i(n),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Error when fetching data! ".concat(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(u.jsxs)("div",{className:K.a.gameWrapper,children:[Object(u.jsx)("div",{tabIndex:0,role:"button",className:K.a.burgerIcon,onClick:function(){return p(!b)},onKeyDown:function(){return p(!b)},children:Object(u.jsx)("img",{src:b?J:G,alt:"burger-menu",width:"16"})}),b&&Object(u.jsx)(E,{money:a,openMenu:b,setOpenMenu:p}),12===d||a.length>0&&d+1>a.length?Object(u.jsx)(s.a,{to:"/end"}):Object(u.jsxs)(u.Fragment,{children:[!b&&Object(u.jsx)(z,{questions:n,money:a}),!b&&Object(u.jsx)(E,{money:a,openMenu:b,setOpenMenu:p})]})]})},$=n(8),V=function(){var e=Object(s.f)(),t=Object(g.useContext)(_),n=t.score,r=t.setCurrentScore,c=t.setCurrentStage,o="$".concat(v(+n)," earned");return Object(u.jsx)(d,{titleText:o,buttonText:"Try again",clickHandler:function(){e.push("/game"),r("0"),c(0)}})},X=(n(39),function(){var e=function(){var e=Object(g.useState)({score:"0",stage:0}),t=Object(O.a)(e,2),n=t[0],r=t[1],c=Object(g.useCallback)((function(e){return r((function(t){return Object($.a)(Object($.a)({},t),{},{score:e})}))}),[]),o=Object(g.useCallback)((function(e){return r((function(t){return Object($.a)(Object($.a)({},t),{},{stage:e})}))}),[]);return{score:n.score,setCurrentScore:c,stage:n.stage,setCurrentStage:o}}();return Object(u.jsx)(_.Provider,{value:e,children:Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(s.b,{exact:!0,path:"/",component:h}),Object(u.jsx)(s.b,{exact:!0,path:"/game",component:U}),Object(u.jsx)(s.b,{exact:!0,path:"/end",component:V})]})})});n(40);c.a.render(Object(u.jsx)(o.a,{children:Object(u.jsx)(X,{})}),document.getElementById("root"))}],[[41,1,2]]]);
//# sourceMappingURL=main.32b432d7.chunk.js.map