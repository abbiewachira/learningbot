(this.webpackJsonpmathbot=this.webpackJsonpmathbot||[]).push([[0],{16:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(9),s=n.n(o),c=(n(16),n(5)),r=n(2),u=(n(22),n(0)),d=function(e){var t=[{text:"General Knowledge",handler:e.actionProvider.handleJavascriptQuiz,id:1},{text:"COVID-19",handler:e.actionProvider.handleCovidQuiz,id:2},{text:"Volume",handler:function(){},id:3}].map((function(e){return Object(u.jsx)("button",{onClick:e.handler,className:"option-button",children:e.text},e.id)}));return Object(u.jsx)("div",{className:"options-container",children:t})},l=n(8),h=(n(24),function(e){var t=e.question,n=e.answer,i=e.incrementIndex,o=Object(a.useState)(!1),s=Object(l.a)(o,2),c=s[0],r=s[1];return Object(a.useEffect)((function(){return r(!1)}),[t]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"flashcard-container",onClick:function(){return r(!c)},children:[!c&&t,c&&n]}),c&&Object(u.jsx)("button",{onClick:i,className:"flashcard-button",children:"Next question"})]})}),b=function(e){console.log(e);var t=Object(a.useState)(0),n=Object(l.a)(t,2),i=n[0],o=n[1],s=e.questions[i];return s?Object(u.jsx)(h,{question:s.question,answer:s.answer,incrementIndex:function(){return o((function(e){return e+1}))}}):Object(u.jsx)("p",{children:"Quiz over."})},j={botName:"Learningbot",initialMessages:[Object(c.createChatBotMessage)("Hello, What would you like to learn?",{widget:"options"})],widgets:[{widgetName:"options",widgetFunc:function(e){return Object(u.jsx)(d,Object(r.a)({},e))}},{widgetName:"javascriptQuiz",widgetFunc:function(e){return Object(u.jsx)(b,Object(r.a)({},e))},props:{questions:[{question:"How many months have 28 days??",answer:"All 12!",id:1},{question:"Imagine you\u2019re in a room that\u2019s filling up with water quickly. There are no windows or doors. How do you get out?",answer:"Stop imagining.",id:2},{question:"I am an odd number. Take away one letter and I become even. What number am I?",answer:"Seven (take away the \u2018s\u2019 and it becomes \u2018even\u2019).",id:3},{question:"What can you make that no one\u2014not even you\u2014can see?",answer:"Noise.",id:4}]}}],customStyles:{botMessageBox:{backgroundColor:"#47C1E4"},chatButton:{backgroundColor:"#47C1E4"}}},g=n(11),f=n(7),m=function e(t,n,a){var i=this;Object(f.a)(this,e),this.greet=function(){var e=i.createChatBotMessage("Hello friend.");i.addMessageToState(e)},this.handleJavascriptQuiz=function(){var e=i.createChatBotMessage("Fantastic. Here is your quiz. Good luck!",{widget:"javascriptQuiz"});i.addMessageToState(e)},this.addMessageToState=function(e){i.setState((function(t){return Object(r.a)(Object(r.a)({},t),{},{messages:[].concat(Object(g.a)(t.messages),[e])})}))},this.createChatBotMessage=t,this.setState=n,this.createClientMessage=a},v=n(10),O=function(){function e(t,n){Object(f.a)(this,e),this.actionProvider=t,this.state=n}return Object(v.a)(e,[{key:"parse",value:function(e){console.log(e);var t=e.toLowerCase();t.includes("hello")&&this.actionProvider.greet(),(t.includes("javascript")||t.includes("js"))&&this.actionProvider.handleJavascriptQuiz()}}]),e}();n(25);var w=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("div",{style:{maxWidth:"300px"},children:Object(u.jsx)(c.Chatbot,{config:j,actionProvider:m,messageParser:O})})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),o(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),p()}},[[26,1,2]]]);
//# sourceMappingURL=main.5070ebb9.chunk.js.map