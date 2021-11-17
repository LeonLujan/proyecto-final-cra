(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(4),c=a(5),i=a(6),l=a(7),o=a(2),r=a(9),h=a(8),d=a(0),b=function(e){Object(r.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={al_nombre:"",al_curso:"",b1:"",b2:"",c1:"",b3:"",b4:"",c2:"",notes:[]},e.handleChange=e.handleChange.bind(Object(o.a)(e)),e.addNote=e.addNote.bind(Object(o.a)(e)),e}return Object(l.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(c.a)({},a,n))}},{key:"addNote",value:function(e){var t=this;e.preventDefault(),this.state._id?fetch("/api/notes/".concat(this.state._id),{method:"PUT",body:JSON.stringify({al_nombre:this.state.al_nombre,al_curso:this.state.al_curso,b1:this.state.b1,b2:this.state.b2,c1:this.state.c1,b3:this.state.b3,b4:this.state.b4,c2:this.state.c2}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){window.M.toast({html:"Note Updated"}),t.setState({_id:"",al_nombre:"",al_curso:"",b1:"",b2:"",c1:"",b3:"",b4:"",c2:""}),t.fetchNotes()})):fetch("/api/notes",{method:"POST",body:JSON.stringify(this.state),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),window.M.toast({html:"Note Saved"}),t.setState({al_nombre:"",al_curso:"",b1:"",b2:"",c1:"",b3:"",b4:"",c2:""}),t.fetchNotes()})).catch((function(e){return console.error(e)}))}},{key:"deleteNote",value:function(e){var t=this;fetch("/api/notes/".concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e),window.M.toast({html:"Note deleted"}),t.fetchNotes()}))}},{key:"editNote",value:function(e){var t=this;fetch("/api/notes/".concat(e)).then((function(e){return e.json()})).then((function(e){console.log(e),t.setState({_id:e._id,al_nombre:e.al_nombre,al_curso:e.al_curso,b1:e.b1,b2:e.b2,c1:e.c1,b3:e.b3,b4:e.b4,c2:e.c2})}))}},{key:"componentDidMount",value:function(){this.fetchNotes()}},{key:"fetchNotes",value:function(){var e=this;fetch("/api/notes").then((function(e){return e.json()})).then((function(t){e.setState({notes:t}),console.log(e.state.notes)}))}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("nav",{className:"red darken-4",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"nav-wrapper",children:Object(d.jsx)("a",{href:"/",className:"brand-logo",children:"ETN 35"})})})}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col s5",children:Object(d.jsx)("div",{className:"card",children:Object(d.jsx)("div",{className:"card-content",children:Object(d.jsxs)("form",{onSubmit:this.addNote,children:[Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"input-field col s5",children:Object(d.jsx)("input",{name:"al_nombre",onChange:this.handleChange,value:this.state.al_nombre,type:"text",placeholder:"nombre del alumno",autoFocus:!0})})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"input-field col s5",children:[Object(d.jsx)("textarea",{name:"al_curso",onChange:this.handleChange,value:this.state.al_curso,cols:"15",rows:"5",placeholder:"curso del alumno",className:"materialize-textarea"}),Object(d.jsx)("textarea",{name:"b1",onChange:this.handleChange,value:this.state.b1,cols:"30",rows:"10",placeholder:"nota del primer bimestre",className:"materialize-textarea"}),Object(d.jsx)("textarea",{name:"b2",onChange:this.handleChange,value:this.state.b2,cols:"30",rows:"10",placeholder:"nota del segundo bimestre",className:"materialize-textarea"}),Object(d.jsx)("textarea",{name:"c1",onChange:this.handleChange,value:this.state.c1,cols:"30",rows:"10",placeholder:"nota del primer cuatrimestre",className:"materialize-textarea"}),Object(d.jsx)("textarea",{name:"b3",onChange:this.handleChange,value:this.state.b3,cols:"30",rows:"10",placeholder:"nota del tercer bimestre",className:"materialize-textarea"}),Object(d.jsx)("textarea",{name:"b4",onChange:this.handleChange,value:this.state.b4,cols:"30",rows:"10",placeholder:"nota del cuarto bimestre",className:"materialize-textarea"}),Object(d.jsx)("textarea",{type:"text",name:"c2",onChange:this.handleChange,value:this.state.c2,cols:"30",rows:"10",placeholder:"nota del segundo cuatrimestre",className:"materialize-textarea"})]})}),Object(d.jsx)("button",{type:"submit",className:"btn red darken-4",children:"Send"})]})})})}),Object(d.jsx)("div",{className:"col s7",children:Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"alumno"}),Object(d.jsx)("th",{children:"curso"}),Object(d.jsx)("th",{children:"b1"}),Object(d.jsx)("th",{children:"b2"}),Object(d.jsx)("th",{children:"c1"}),Object(d.jsx)("th",{children:"b3"}),Object(d.jsx)("th",{children:"b3"}),Object(d.jsx)("th",{children:"c2"})]})}),Object(d.jsx)("tbody",{children:this.state.notes.map((function(t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.al_nombre}),Object(d.jsx)("td",{children:t.b1.substring(0,11)}),Object(d.jsx)("td",{children:t.b2.substring(0,11)}),Object(d.jsx)("td",{children:t.c1.substring(0,11)}),Object(d.jsx)("td",{children:t.b3.substring(0,11)}),Object(d.jsx)("td",{children:t.b4.substring(0,11)}),Object(d.jsx)("td",{children:t.c2.substring(0,11)}),Object(d.jsxs)("td",{children:[Object(d.jsx)("button",{onClick:function(){return e.deleteNote(t._id)},className:"btn red darken-4",children:Object(d.jsx)("i",{className:"material-icons",children:"delete"})}),Object(d.jsx)("button",{onClick:function(){return e.editNote(t._id)},className:"btn red darken-4",style:{margin:"4px"},children:Object(d.jsx)("i",{className:"material-icons",children:"edit"})})]})]},t._id)}))})]})})]})})]})}}]),a}(n.Component);Object(s.render)(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.923a4068.chunk.js.map