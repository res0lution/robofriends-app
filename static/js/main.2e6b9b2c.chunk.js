(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),i=n(2),l=n(1),s=n(11);n(27),n(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=function(e){var t=e.name,n=e.id,r=e.email;return a.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(n,"{?200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,r)))},h=function(e){var t=e.robots;return a.a.createElement("div",null,t.map((function(e){return a.a.createElement(u,{key:e.id,id:e.id,name:e.name,email:e.email})})))},d=function(e){var t=e.searchField,n=e.onSearchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{type:"search",className:"pa3 ba b--green bg-lightest-blue",placeholder:"Search robots",value:t,onChange:n}))},E=(n(29),function(e){var t=e.children;return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"600px"}},t)}),b=n(12),m=n(13),f=n(15),p=n(16),g=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(m.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Ooops! That is not good!"):this.props.children}}]),n}(r.Component),v=function(){var e=Object(l.c)((function(e){return e.searchRobots.searchField})),t=Object(l.c)((function(e){return e.requestRobots.robots})),n=Object(l.c)((function(e){return e.requestRobots.isPending})),o=(Object(l.c)((function(e){return e.requestRobots.error})),Object(l.b)());Object(r.useEffect)((function(){return o((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}),[]);var c=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return n?a.a.createElement("h1",{className:"tc"},"Loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",null,"RoboFriends"),a.a.createElement(d,{onSearchChange:function(e){return o({type:"CHANGE_SEARCH_FIELD",payload:e.target.value})},searchField:e}),a.a.createElement(E,null,a.a.createElement(g,null,a.a.createElement(h,{robots:c}))))},O=n(3),S={searchField:""},R={isPending:!1,robots:[],error:""},j=n(14),y=Object(j.createLogger)(),w=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(O.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(O.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(O.a)({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(O.a)({},e,{error:t.payload});default:return e}}}),_=Object(i.d)(w,Object(i.a)(y,s.a));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(l.a,{store:_},a.a.createElement(v,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.2e6b9b2c.chunk.js.map