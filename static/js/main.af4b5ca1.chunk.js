(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,o){e.exports=o(29)},28:function(e,t,o){},29:function(e,t,o){"use strict";o.r(t);var n,a=o(0),r=o.n(a),c=o(10),l=o.n(c),s=o(8),i=o(11),d=o(9),m=o(18),u={currentItem:{text:"",key:""},todos:[],completed:[]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CURRENT":return Object(m.a)({},e,{currentItem:t.id});case"ADD_TASK":return{currentItem:{text:"",key:""},todos:[].concat(Object(d.a)(e.todos),[t.id]),completed:Object(d.a)(e.completed)};case"ADD_TO_COMPLETED":console.log(t.id);var o=e.todos.filter(function(e){return e.key!==t.id.key}),n=e.completed?[].concat(Object(d.a)(e.completed),[t.id]):[t.id];return console.log(n),{currentItem:e.currentItem,todos:o,completed:n};case"REMOVE_TASK":console.log(t.id);var a=e.todos.filter(function(e){return e.key!==t.id.key});return{currentItem:e.currentItem,todos:a,completed:e.completed};case"REMOVE_COMPLETED":console.log(t.id);var r=e.completed.filter(function(e){return e.key!==t.id.key});return{currentItem:e.currentItem,todos:e.todos,completed:r};case"ADD_LOCAL_STORAGE":console.log(t.id);var c=t.id.todos?t.id.todos:[],l=t.id.completed?t.id.completed:[];return{currentItem:{text:"",key:""},todos:Object(d.a)(c),completed:Object(d.a)(l)};default:return e}},v=o(2),h=o(3),f=o(5),E=o(4),O=o(6),b=(o(28),function(e){function t(){var e,o;Object(v.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(a)))).handleTaskChange=function(e){e.preventDefault();var t={text:e.target.value,key:new Date};o.props.changeCurrent(t)},o.addTask=function(e){e.preventDefault();var t=o.props.currentItem;t.text&&o.props.addTask(t)},o}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.currentItem;return r.a.createElement("header",null,r.a.createElement("form",{onSubmit:this.addTask},r.a.createElement("input",{id:"item",type:"text",value:e.text,placeholder:"add task...",onChange:this.handleTaskChange}),r.a.createElement("button",{type:"submit",id:"add"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},r.a.createElement("path",{className:"fill",d:"M16,8c0,0.5-0.5,1-1,1H9v6c0,0.5-0.5,1-1,1s-1-0.5-1-1V9H1C0.5,9,0,8.5,0,8s0.5-1,1-1h6V1c0-0.5,0.5-1,1-1s1,0.5,1,1v6h6C15.5,7,16,7.5,16,8z"})))))}}]),t}(r.a.Component)),C=Object(s.b)(function(e){return{currentItem:e.currentItem,todos:e.todos}},function(e){return{changeCurrent:function(t){e({type:"CHANGE_CURRENT",id:t})},addTask:function(t){e({type:"ADD_TASK",id:t})}}})(b),g=function(e){function t(){var e,o;Object(v.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(o=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(a)))).createCompleted=function(e,t){return r.a.createElement("li",{key:e.key},e.text,r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{className:"remove",onClick:function(){return o.props.removeCompleted(e,t,"remove")}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 22"},r.a.createElement("rect",{className:"noFill",width:"22",height:"22"}),r.a.createElement("path",{className:"fill",d:"M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"}),r.a.createElement("path",{className:"fill",d:"M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"}),r.a.createElement("path",{className:"fill",d:"M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"}),r.a.createElement("path",{className:"fill",d:"M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"}))),r.a.createElement("button",{className:"complete",onClick:function(){return o.props.removeCompleted(e,t,"complete")}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 22"},r.a.createElement("rect",{className:"noFill",width:"22",height:"22"}),r.a.createElement("path",{className:"fill",d:"M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"})))))},o}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,o=t.todos,n=t.id;console.log(o);var a=o?o.map(function(t){return e.createCompleted(t,n)}):null;return r.a.createElement("ul",{className:"todo",id:n},a)}}]),t}(r.a.Component),k=function(e){function t(){var e,o;Object(v.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(a)))).removeCompleted=function(e,t,n){"todo"===t&&("complete"===n?o.props.addTaskToCompleted(e):"remove"===n&&o.props.removeTask(e)),"completed"===t&&"remove"===n&&o.props.removeCompletedTask(e)},o}return Object(O.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("todoList"));this.props.addLocalStorage(e)}},{key:"render",value:function(){var e=this.props,t=e.todos,o=e.completed;return r.a.createElement("div",{className:"container"},r.a.createElement(g,{todos:t,removeCompleted:this.removeCompleted,id:"todo"}),r.a.createElement(g,{todos:o,removeCompleted:this.removeCompleted,id:"completed"}))}}]),t}(r.a.Component),y=Object(s.b)(function(e){return{todos:e.todos,completed:e.completed}},function(e){return{addTaskToCompleted:function(t){e({type:"ADD_TO_COMPLETED",id:t})},removeTask:function(t){e({type:"REMOVE_TASK",id:t})},removeCompletedTask:function(t){e({type:"REMOVE_COMPLETED",id:t})},addLocalStorage:function(t){e({type:"ADD_LOCAL_STORAGE",id:t})}}})(k),w=function(e){function t(){return Object(v.a)(this,t),Object(f.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(y,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=Object(i.b)(p);j.subscribe(function(){var e=n;n=j.getState(),console.log(n),e!==n&&localStorage.setItem("todoList",JSON.stringify(n))});l.a.render(r.a.createElement(s.a,{store:j},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.af4b5ca1.chunk.js.map