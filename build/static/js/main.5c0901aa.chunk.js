(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{176:function(e,t,n){"use strict";(function(e){var a=n(9),c=n(10),s=n(30),r=n(29),i=n(2),o=n(0),l=n.n(o),d=n(41),p=n(15),h=n(186),u=(n(94),n(345),n(8)),m=n.n(u),b=n(1),j=p.a.init();p.a.main=!1;var x=p.a.main?"MainNet":"TestNet",f=["chat"],g={chat:{}};function v(){return(v=Object(i.a)(l.a.mark((function e(){var t,n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t<f.length)){e.next=18;break}return n=f[t],e.next=5,fetch("teal/"+n+".txt");case 5:return a=e.sent,e.next=8,a.text();case 8:return g[n].program=e.sent,e.next=11,fetch("teal/"+n+" clear.txt");case 11:return c=e.sent,e.next=14,c.text();case 14:g[n].clearProgram=e.sent;case 15:t++,e.next=1;break;case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(t){var n=e.from(t,"base64");return console.log(n),n}function N(e){document.getElementById("chatLog").insertRow(0).insertCell(0).innerHTML=e}function y(){return(y=Object(i.a)(l.a.mark((function e(t){var n,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://algoindexer.algoexplorerapi.io/v2/transactions/",n="https://algoindexer.algoexplorerapi.io/v2/transactions/"+t,e.prev=2,e.next=5,fetch(n);case 5:return a=e.sent,e.next=8,a.json();case 8:return c=e.sent,s=c.transaction.note,e.abrupt("return",s);case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}var w=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).fetchBalance=function(e){p.a.balance(e).then((function(e){c.setState({balance:e})}))},c.setNet=function(e){"TestNet"===e.target.value?(p.a.main=!1,c.setState({net:"TestNet"})):(p.a.main=!0,c.setState({net:"MainNet"}))},c.handleConnect=function(){p.a.connect(j).then((function(e){c.setState({myAddress:e}),setInterval((function(){return c.fetchBalance(c.state.myAddress)}),5e3)}))},c.switchConnector=function(e){p.a.pipeConnector=e.target.value,console.log(p.a.pipeConnector)},c.deploy=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"chat",p.a.deployTeal(g.chat.program,g.chat.clearProgram,[3,3,0,0],["create"]).then((function(e){document.getElementById("appid").value=e,c.setState({appAddress:m.a.getApplicationAddress(e)})}));case 2:case"end":return e.stop()}}),e)}))),c.delete=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.a.deleteApp(document.getElementById("appid").value).then((function(e){c.setState({txID:e})}));case 1:case"end":return e.stop()}}),e)}))),c.optIn=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("appid").value,c.state.appAddress=m.a.getApplicationAddress(parseInt(t)),(n=[]).push("register"),p.a.optIn(t,n).then((function(e){c.setState({txID:e})}));case 5:case"end":return e.stop()}}),e)}))),c.changePic=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("appid").value,m.a.getApplicationAddress(parseInt(t)),n=document.getElementById("picAddress").value,console.log(n),p.a.appCall(t,["pic",n]).then((function(e){c.setState({txID:e})}));case 5:case"end":return e.stop()}}),e)}))),c.fund=Object(i.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("appid").value,n=m.a.getApplicationAddress(parseInt(t)),a=parseInt(document.getElementById("fundAmt").value),p.a.appCallWithTxn(t,["fund"],n,a,"funding",0,[n]).then((function(e){c.setState({txID:e})}));case 4:case"end":return e.stop()}}),e)}))),c.deposit=Object(i.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("appid").value,n=m.a.getApplicationAddress(parseInt(t)),a=parseInt(document.getElementById("depAmt").value),p.a.appCallWithTxn(t,["deposit"],n,a,"depositing",0,[n]).then((function(e){c.setState({txID:e})}));case 4:case"end":return e.stop()}}),e)}))),c.modifyTeal=function(){for(var e=document.getElementById("newGoal").value,t=["BKGZZRBHXOBCD5HMITYZ5CI3V3LS6OMLUT2I7C7QIRU6VA3B2BXUFRN2BE","3000000"],n=[document.getElementById("recipient").value,e],a=0;a<n.length;a++)g.daoDeposit.program=g.daoDeposit.program.replaceAll(t[a],n[a]),console.log(g.daoDeposit.program);c.setState({goal:e}),alert("Contract modified! Check console log to preview")},c.check=function(){c.readGlobal()},c.post=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("appid").value,m.a.getApplicationAddress(parseInt(t)),n=document.getElementById("postMessage").value,p.a.appCall(t,["chat",n]).then((function(e){c.setState({txID:e})}));case 4:case"end":return e.stop()}}),e)}))),c.readGlobal=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.a.readGlobalState(document.getElementById("appid").value).then((function(e){console.log("App Data"),console.log(e);for(var t="",n=0;n<e.length;n++){var a=window.atob(e[n].key);if("pic"===a){var s=e[t=n].value.bytes;c.handleFetch(window.atob(s))}else if("chat"===a){t=n;var r=window.atob(e[t].value.bytes);console.log(r),N('<td><img src="'+document.getElementById("canvas2").toDataURL("image/png")+'"></img></td><td>'+r+"</td>")}}}));case 1:case"end":return e.stop()}}),e)}))),c.readLocalState=function(){var e=Object(i.a)(l.a.mark((function e(t,n,a){var s,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s="",s=t?"https://algoindexer.algoexplorerapi.io":"https://algoindexer.testnet.algoexplorerapi.io",e.next=5,fetch(s+"/v2/accounts/"+n);case 5:return r=e.sent,e.next=8,r.json();case 8:return i=e.sent,e.next=11,i.account["apps-local-state"];case 11:e.sent.forEach((function(e){e.id===parseInt(a)&&e["key-value"].forEach((function(e){if("YW10"===e.key){var t=e.value.uint;c.setState({share:parseInt(t/c.state.goal*100)||0})}if("d2l0aGRyYXdu"===e.key){var n=e.value.uint;c.setState({withdrawn:n||0})}}))})),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,n,a){return e.apply(this,arguments)}}(),c.startRefresh=function(){c.check()},c.handleFetch=function(e){(function(e){return y.apply(this,arguments)})(e).then((function(e){return c.setState({data:O(e)},(function(){return c.drawData()}))}))},c.drawData=function(){var e=document.getElementById("canvas2"),t=e.getContext("2d");t.clearRect(0,0,e.width,e.height);var n=function(e){for(var t=[],n=-1,a=0;a<e.length;a++)n<2?(t.push(e[a]),n++):(t.push(255),t.push(e[a]),n=0);return t.push(255),t}(function(e){for(var t=[],n=0;n<e.length;n++){var a=e[n],c=32*(a>>5),s=32*((28&a)>>2),r=64*(3&a);t.push(c),t.push(s),t.push(r)}return t}(c.state.data)),a=new Uint8ClampedArray(n),s=new ImageData(a,30,30),r=document.createElement("canvas");r.getContext("2d").putImageData(s,0,0),t.drawImage(r,0,0,300,150)},c.state={net:x,txID:"",myAddress:"",balance:0,appAddress:"",goal:0,level:0,fundAmount:"Not fetched yet...",share:0,depositAmount:0,myProfits:0,withdrawn:0,contribution:0,data:"",messages:[]},c}return Object(c.a)(n,[{key:"componentDidMount",value:function(){!function(){v.apply(this,arguments)}()}},{key:"render",value:function(){var e=this.state.loading?"App-logo Spin":"App-logo";return Object(b.jsxs)("div",{align:"center",children:[Object(b.jsx)("nav",{className:"py-2 bg-light border-bottom",children:Object(b.jsxs)("div",{className:"container d-flex flex-wrap",children:[Object(b.jsxs)("ul",{className:"nav me-auto",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{href:"#",class:"nav-link link-dark px-2 active","aria-current":"page",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{href:"#",class:"nav-link link-dark px-2",children:"Features"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{href:"#",class:"nav-link link-dark px-2",children:"Pricing"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{href:"#",class:"nav-link link-dark px-2",children:"FAQs"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{href:"#",class:"nav-link link-dark px-2",children:"About"})})]}),Object(b.jsxs)("ul",{className:"nav",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{href:"#",class:"nav-link link-dark px-2",children:"Login"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{href:"#",class:"nav-link link-dark px-2",children:"Sign up"})})]})]})}),Object(b.jsxs)("header",{className:"py-3 mb-4 border-bottom",children:[Object(b.jsxs)("div",{className:"container d-flex flex-wrap justify-content-center",children:[Object(b.jsx)("a",{href:"/",class:"d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none",children:Object(b.jsx)("p",{children:"Connected Address: "+this.state.myAddress})}),Object(b.jsx)("form",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:Object(b.jsx)("p",{children:"Balance: "+this.state.balance})})]}),Object(b.jsxs)("select",{className:"form-select",onClick:this.setNet,children:[Object(b.jsx)("option",{children:"TestNet"}),Object(b.jsx)("option",{children:"MainNet"})]}),Object(b.jsxs)("select",{className:"form-select",onChange:this.switchConnector,children:[Object(b.jsx)("option",{children:"myAlgoWallet"}),Object(b.jsx)("option",{children:"WalletConnect"}),Object(b.jsx)("option",{children:"AlgoSigner"})]}),Object(b.jsx)("button",{className:"btn btn-sm btn-bd-light mb-2 mb-md-0",onClick:this.handleConnect,children:"Click to Connect"})]}),Object(b.jsx)("h2",{className:"px-2 badge bg-warning",children:this.state.net}),Object(b.jsxs)("div",{className:"App container bg-light shadow",children:[Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("img",{src:h.a,className:e,alt:"logo"}),Object(b.jsxs)("h1",{className:"App-title",children:["Algo Chat",Object(b.jsx)("span",{className:"px-2",role:"img","aria-label":"Chat",children:"\ud83d\udcac"})]}),Object(b.jsxs)("p",{children:["Brought to you by"," ",Object(b.jsx)("a",{className:"text-light",href:"https://headline-inc.com",children:"HEADLINE"})]})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-4  pt-3 border-right",children:[Object(b.jsx)("h6",{children:"Say something about Algorand"}),Object(b.jsx)("div",{className:"comment-form"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{className:"form-control",placeholder:"\ud83d\ude0e Your Name",name:"name",type:"text"})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("textarea",{className:"form-control",placeholder:"\ud83e\udd2c Your Comment",name:"message",rows:"5",spellCheck:"false",type:"text",id:"postMessage"})}),Object(b.jsx)("div",{className:"alert alert-danger",style:{display:"none"},children:"Something went wrong while submitting form."}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("button",{className:"btn btn-primary form-group",onClick:this.post,children:"Comment \u27a4"})})]})]}),Object(b.jsxs)("div",{className:"col-8  pt-3 bg-white",children:[Object(b.jsx)("div",{className:"comment-list",loading:this.state.loading,comments:this.state.comments}),Object(b.jsxs)("div",{className:"comment-list",children:[Object(b.jsxs)("h5",{className:"text-muted mb-4",children:[Object(b.jsx)("span",{className:"badge badge-success",children:"0"})," Comment"]}),Object(b.jsx)("div",{className:"alert text-center alert-info",children:"Be the first to comment"})," ",Object(b.jsx)("div",{children:Object(b.jsx)("table",{className:"media-body p-2 shadow-sm rounded bg-light border rounded",id:"chatLog",style:{display:"none"}})})]})]}),Object(b.jsxs)("footer",{class:"App-footer",children:[Object(b.jsx)("button",{className:"btn btn-bd-light",onClick:this.startRefresh,children:"Refresh"}),Object(b.jsx)("canvas",{id:"canvas2",height:"30px",width:"30px"}),Object(b.jsx)("div",{children:"Transaction ID: "+this.state.txID})]})]})]}),Object(b.jsxs)("div",{class:"App container ",children:[Object(b.jsx)("input",{className:"form-control",type:"text",id:"picAddress",placeholder:"txid of pic"}),Object(b.jsx)("div",{className:"bd-example",children:Object(b.jsxs)("table",{className:"table",width:"100%",children:[Object(b.jsx)("td",{}),Object(b.jsx)("tbody",{children:Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{width:"50%",children:[Object(b.jsx)("h1",{children:"ACTIONS"}),Object(b.jsx)("button",{className:"btn btn-sm btn-bd-light mb-2 mb-md-0",onClick:this.deploy,children:"Deploy Contract"}),Object(b.jsx)("button",{className:"btn btn-sm btn-bd-light mb-2 mb-md-0",onClick:this.optIn,children:"Opt In"}),Object(b.jsx)("input",{className:"form-control ds-input",placeholder:"App Id",id:"appid",type:"number"})]}),Object(b.jsxs)("td",{width:"50%",children:[Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"Application Address: "+this.state.appAddress}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"btn btn-danger",onClick:this.delete,children:"Delete App"}),Object(b.jsx)("h3",{children:"Change Profile Pic"}),Object(b.jsx)("input",{className:"form-control ds-input",type:"text",id:"picAddress",placeholder:"txid of pic"}),Object(b.jsx)("button",{className:"btn btn-sm btn-bd-light mb-2 mb-md-0",onClick:this.changePic,children:"Fuse"})]})]})})]})})]})]})}}]),n}(d.Component);t.a=w}).call(this,n(11).Buffer)},186:function(e,t,n){"use strict";t.a=n.p+"static/media/logo.34786464.svg"},202:function(e,t){},261:function(e,t){},263:function(e,t){},274:function(e,t){},276:function(e,t){},303:function(e,t){},309:function(e,t){},311:function(e,t){},329:function(e,t){},345:function(e,t,n){},348:function(e,t,n){"use strict";n.r(t);var a=n(41),c=n.n(a),s=n(175),r=n.n(s),i=(n(94),n(176)),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,351)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},l=n(1);r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(i.a,{})}),document.getElementById("root")),o()},94:function(e,t,n){}},[[348,1,2]]]);
//# sourceMappingURL=main.5c0901aa.chunk.js.map