(this.webpackJsonpreactbasics=this.webpackJsonpreactbasics||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),a=n.n(s),o=(n(14),n(3)),i=n.n(o),u=n(5),h=n(6),l=n(7),j=n(9),d=n(8),f=(n(16),n(17),n(0)),p=function(e){return Object(f.jsxs)("div",{className:"card-container",children:[Object(f.jsx)("img",{alt:"MONSTER",src:"https://robohash.org/".concat(e.monster.id,"?set=set2")}),Object(f.jsx)("h2",{children:e.monster.name}),Object(f.jsx)("p",{children:e.monster.email})]})},b=(n(19),function(e){return Object(f.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(f.jsx)(p,{monster:e},e.id)}))})}),m=(n(20),function(e){var t=e.placeholder,n=e.changeSearch;return Object(f.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),O=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).changeText=function(){e.setState({string:"Hello Ali"})},e.changeSearch=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({monsters:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Monsters"}),Object(f.jsx)(m,{placeholder:"Search Monsters",changeSearch:this.changeSearch}),Object(f.jsx)(b,{monsters:c})]})}}]),n}(c.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root")),x()}],[[21,1,2]]]);
//# sourceMappingURL=main.dbb6eaa6.chunk.js.map