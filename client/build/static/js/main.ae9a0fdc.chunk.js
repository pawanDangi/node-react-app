(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{182:function(e,t,a){e.exports=a.p+"static/media/PG_Axis_Logo.4ca53aa9.png"},185:function(e){e.exports={pro:{API_HOST:"",BASE_URL:"/api/v2.0.0"},dev:{API_HOST:"http://127.0.0.1:8080",BASE_URL:"/api/v2.0.0"}}},5451:function(e,t,a){e.exports=a(5641)},5462:function(e,t,a){},5616:function(e,t,a){},5620:function(e,t,a){},5641:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(29),o=a.n(i),c=a(31);a(5460),a(5462),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(50),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COOKIES":return t.cookies;default:return e}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LOADER":return t.status;default:return e}},d=a(23),m={open:!1,anchorOrigin:{vertical:"bottom",horizontal:"right"},autoHideDuration:3e3,variant:"success",message:"This is a success message!"},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_SNACKBAR":return Object(d.a)({},m,t.data,{open:!0});case"HIDE_SNACKBAR":return m;default:return e}},h={open:!1,title:"Confirmation",text:"Are you sure, you want to perform this operation?",agree:"Yes",disagree:"No",handleClose:function(){},handleSuccess:function(){}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_ALERT":return Object(d.a)({},h,t.data,{open:!0});case"HIDE_ALERT":return h;default:return e}},f=Object(s.b)({cookies:l,loader:u,snackbar:p,alert:g}),v=Object(s.c)(f),b=a(18),E=a.n(b),x=a(33),y=a(24),w=a(25),S=a(27),O=a(26),j=a(28),k=a(11),C=a(4),A=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(S.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={completed:0},a.progress=function(){var e=a.state.completed;a.setState({completed:e>=100?0:e+1})},a}return Object(j.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.progress,20)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.loader,n=this.state.completed;return r.a.createElement("div",{className:t.center},r.a.createElement(C.e,{open:a,classes:{paper:t.dialog}},r.a.createElement(C.c,{className:t.progress,variant:"determinate",size:50,value:n})))}}]),t}(r.a.Component),N=Object(c.b)(function(e){return{loader:e.loader}},function(){return{}})(Object(k.withStyles)(function(e){return{progress:{margin:2*e.spacing.unit,background:"transparent"},center:{textAlign:"center"},dialog:{background:"transparent",padding:0,margin:0,boxShadow:"none"}}})(A)),H=a(187),z=a(3),D=a.n(z),_=a(20),B=a(59),W={success:_.c,warning:_.m,error:_.f,info:_.h};var I=Object(k.withStyles)(function(e){return{success:{backgroundColor:B.green[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:B.amber[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing.unit},message:{display:"flex",alignItems:"center"}}})(function(e){var t=e.classes,a=e.message,n=e.onClose,i=e.variant,o=Object(H.a)(e,["classes","message","onClose","variant"]),c=W[i];return r.a.createElement(C.w,Object.assign({className:D()(t[i]),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:t.message},r.a.createElement(c,{className:D()(t.icon,t.iconVariant)}),a),action:[r.a.createElement(C.n,{key:"close","aria-label":"Close",color:"inherit",className:t.close,onClick:n},r.a.createElement(_.d,{className:t.icon}))]},o))}),P=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(S.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a.handleClose=function(e,t){"clickaway"!==t&&a.setState({open:!1})},a}return Object(j.a)(t,e),Object(w.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this,a=e.snackbar.open;a&&this.setState({open:!1},function(){t.setState({open:a})})}},{key:"render",value:function(){var e=this.state.open,t=this.props.snackbar,a=t.anchorOrigin,n=t.autoHideDuration,i=t.variant,o=t.message;return r.a.createElement("div",null,r.a.createElement(C.v,{anchorOrigin:{vertical:a.vertical,horizontal:a.horizontal},open:e,autoHideDuration:n,onClose:this.handleClose},r.a.createElement(I,{onClose:this.handleClose,variant:i,message:o})))}}]),t}(r.a.Component);P.defaultProps={snackbar:{open:!1,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:3e3,variant:"success",message:"This is a success message!"}};var T=Object(c.b)(function(e){return{snackbar:e.snackbar}},function(){return{}})(P),Y=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(S.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a.handleClose=function(){var e=a.props.alert.handleClose;a.setState({open:!1},function(){e&&e()})},a.handleSuccess=function(){var e=a.props.alert.handleSuccess;a.setState({open:!1},function(){e&&e()})},a}return Object(j.a)(t,e),Object(w.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this,a=e.alert.open;a&&this.setState({open:!1},function(){t.setState({open:a})})}},{key:"render",value:function(){var e=this.state.open,t=this.props.alert,a=t.title,n=t.text,i=t.disagree,o=t.agree;return r.a.createElement("div",null,r.a.createElement(C.e,{open:e,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(C.i,{id:"alert-dialog-title"},a),r.a.createElement(C.g,null,r.a.createElement(C.h,{id:"alert-dialog-description"},n)),r.a.createElement(C.f,null,r.a.createElement(C.b,{onClick:this.handleClose,color:"primary"},i),r.a.createElement(C.b,{onClick:this.handleSuccess,color:"primary"},o))))}}]),t}(r.a.Component),L=Object(c.b)(function(e){return{alert:e.alert}},function(){return{}})(Y),R=a(5643),M=a(5646),U=a(5613),F=a(5644),G=a(34),K=a(182),J=a.n(K);var X=Object(k.withStyles)(function(e){return{appBar:{zIndex:e.zIndex.drawer+1,backgroundColor:"#000",transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},toolBar:{padding:"0px 2px"},menuButton:{margin:0,cursor:"pointer","&:focus":{outline:"none"}},logo:{width:"115px"}}})(function(e){var t=e.classes,a=e.open,n=e.handleDrawer;return r.a.createElement(C.a,{position:"fixed",className:D()(t.appBar,Object(G.a)({},t.appBarShift,a))},r.a.createElement(C.z,{className:t.toolBar},r.a.createElement(C.n,{color:"inherit","aria-label":"Open drawer",onClick:n,className:D()(t.menuButton)},r.a.createElement(_.i,null)),r.a.createElement(C.B,{color:"inherit"},r.a.createElement("img",{alt:"Header Icon",src:J.a,className:t.logo}))))}),V=a(5642),q=a(5645),$=[{text:"Dashboard",path:"/dashboard",icon:r.a.createElement(_.e,{style:{fontSize:30}})},{text:"Streams",path:"/streams",icon:r.a.createElement(_.l,{style:{fontSize:30}})},{text:"Demands",path:"/demands",icon:r.a.createElement(_.j,{style:{fontSize:30}})},{text:"Setting",path:"/setting",isBottom:!0,icon:r.a.createElement(_.k,{style:{fontSize:30}})}],Q=function(e){var t=e.classes,a=e.location;return r.a.createElement(C.q,{className:t.list},$.map(function(e){return r.a.createElement(C.r,{button:!0,key:e.text,className:D()(e.isBottom?t.setting:"")},r.a.createElement(V.a,{to:e.path,className:D()(t.link),activeStyle:{color:"#1998db"}},r.a.createElement(C.s,{style:{color:a.pathname===e.path?"#000":""}},e.icon),r.a.createElement(C.t,{className:t.text,primary:e.text})))}))},Z=Object(k.withStyles)({list:{height:"100%"},link:{letterSpacing:"1px",color:"white",display:"flex","&:hover":{textDecoration:"none",color:"inherit"}},text:{paddingTop:"4px"},setting:{position:"absolute",bottom:"70px"}})(Object(q.a)(function(e){return r.a.createElement(Q,e)}));var ee=Object(k.withStyles)(function(e){return{drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(G.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:7*e.spacing.unit+1},e.breakpoints.up("sm"),{width:9*e.spacing.unit+1}),drawerPaper:{top:"64px"}}})(function(e){var t,a,n=e.classes,i=e.open;return r.a.createElement(C.j,{variant:"permanent",className:D()(n.drawer,(t={},Object(G.a)(t,n.drawerOpen,i),Object(G.a)(t,n.drawerClose,!i),t)),classes:{paper:D()(n.drawerPaper,(a={},Object(G.a)(a,n.drawerOpen,i),Object(G.a)(a,n.drawerClose,!i),a))},open:i},r.a.createElement(Z,null))}),te=a(41),ae=a.n(te);var ne=Object(k.withStyles)({appBar:{display:"flex",flexDirection:"column",minHeight:"100%",alignItems:"center",background:"#000","& div":{background:"#000"}},toolbar:{alignItems:"center",justifyContent:"space-between",background:"#000 !important"}})(function(e){var t=e.classes;return r.a.createElement(C.a,{position:"absolute",color:"primary",className:t.appBar},r.a.createElement(C.z,{className:t.toolbar},"\u24b8 Copyright ",ae()().format("YYYY")," Intertrust Technologies Corporation. All rights reserved."))}),re=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(S.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,minHeight:"".concat(window.innerHeight-60,"px")},a.updateHeight=function(){var e="".concat(window.innerHeight-60,"px");a.setState({minHeight:e})},a.handleDrawer=function(){var e=a.state.open;a.setState({open:!e})},a}return Object(j.a)(t,e),Object(w.a)(t,[{key:"componentWillMount",value:function(){this.updateHeight()}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateHeight)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateHeight)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.children,n=this.state,i=n.open,o=n.minHeight;return r.a.createElement("div",{className:t.root},r.a.createElement(C.d,null),r.a.createElement(X,{open:i,handleDrawer:this.handleDrawer}),r.a.createElement(ee,{open:i}),r.a.createElement("main",{className:t.content},r.a.createElement("div",{style:{minHeight:o}},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(C.B,{component:"div"},a)),r.a.createElement("div",{className:t.footer},r.a.createElement(ne,null))))}}]),t}(r.a.Component),ie=Object(k.withStyles)(function(e){return{root:{display:"flex"},content:{width:"calc(100% - ".concat(240,"px)"),flexGrow:1,"& div":{background:"rgb(242, 242, 242)"}},toolbar:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),footer:{position:"relative"}}})(re),oe=a(36),ce=a.n(oe),se=a(37),le=a.n(se);var ue=Object(k.withStyles)(function(e){return{root:Object(d.a)({},e.mixins.gutters(),{paddingTop:e.spacing.unit,paddingBottom:e.spacing.unit,boxShadow:"none"})}})(function(e){var t=e.classes,a=e.title;return r.a.createElement("div",null,r.a.createElement(ce.a,{className:t.root,elevation:1},r.a.createElement(le.a,{variant:"h5",component:"h3"},a)))}),de=a(17),me=(a(5616),function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(S.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],svgWidth:0,svg:null,parseDate:de.k("%m/%d/%Y %H:%M"),margin:{top:20,right:20,bottom:110,left:40},margin2:{top:430,right:20,bottom:30,left:40},width:0,x:null,x2:null,xAxis:null,brush:null,zoom:null,line:null,lineChart:null,focus:null,context:null},a.updateWidth=function(){var e=a.props.id,t=document.getElementById("".concat(e,"-div")).offsetWidth;a.setState({svgWidth:t},function(){a.createGraph()})},a.createGraph=function(){var e=a.props,t=e.id,n=e.svgHeight,r=e.title,i=a.state,o=i.svgWidth,c=i.margin,s=i.margin2,l=de.j("#".concat(t));l.selectAll("*").remove();var u=o-c.left-c.right,d=n-c.top-c.bottom,m=n-s.top-s.bottom;l.append("text").attr("x",u/2).attr("dy",10).attr("text-anchor","middle").text(r);var p=de.i().range([0,u]),h=de.i().range([0,u]),g=de.h().range([d,0]),f=de.h().range([m,0]),v=de.a(p),b=de.a(h),E=de.b(g);a.setState({svg:l,width:u,x:p,x2:h,xAxis:v},function(){var e=de.c().extent([[0,0],[u,m]]).on("brush end",a.brushed),t=de.l().scaleExtent([1,1/0]).translateExtent([[0,0],[u,d]]).extent([[0,0],[u,d]]).on("zoom",a.zoomed),n=de.f().x(function(e){return p(e.date)}).y(function(e){return g(e.value)}),r=de.f().x(function(e){return h(e.date)}).y(function(e){return f(e.value)});l.append("defs").append("svg:clipPath").attr("id","clip").append("svg:rect").attr("width",u).attr("height",d).attr("x",0).attr("y",0);var i=l.append("g").attr("class","focus").attr("transform","translate(".concat(c.left,",").concat(c.top,")")).attr("clip-path","url(#clip)"),o=l.append("g").attr("class","focus").attr("transform","translate(".concat(c.left,",").concat(c.top,")")),x=l.append("g").attr("class","context").attr("transform","translate(".concat(s.left,",").concat(s.top,")"));a.setState({brush:e,zoom:t,line:n,lineChart:i,focus:o,context:x},function(){var s=a.state.data;p.domain(de.e(s,function(e){return e.date})),g.domain([0,de.g(s,function(e){return e.value})]),h.domain(p.domain()),f.domain(g.domain()),o.append("g").attr("class","axis axis--x").attr("transform","translate(0,".concat(d,")")).call(v),o.append("g").attr("class","axis axis--y").call(E),i.append("path").datum(s).attr("class","line").attr("d",n),x.append("path").datum(s).attr("class","line").attr("d",r),x.append("g").attr("class","axis axis--x").attr("transform","translate(0,".concat(m,")")).call(b),x.append("g").attr("class","brush").call(e).call(e.move,p.range()),l.append("rect").attr("class","zoom").attr("width",u).attr("height",d).attr("transform","translate(".concat(c.left,",").concat(c.top,")")).call(t)})})},a.brushed=function(){if(!de.d.sourceEvent||"zoom"!==de.d.sourceEvent.type){var e=a.state,t=e.x,n=e.x2,r=e.lineChart,i=e.line,o=e.xAxis,c=e.focus,s=e.svg,l=e.zoom,u=e.width,d=de.d.selection||n.range();t.domain(d.map(n.invert,n)),r.select(".line").attr("d",i),c.select(".axis--x").call(o),s.select(".zoom").call(l.transform,de.m.scale(u/(d[1]-d[0])).translate(-d[0],0))}},a.zoomed=function(){if(!de.d.sourceEvent||"brush"!==de.d.sourceEvent.type){var e=de.d.transform,t=a.state,n=t.x,r=t.x2,i=t.lineChart,o=t.line,c=t.focus,s=t.xAxis,l=t.context,u=t.brush;n.domain(e.rescaleX(r).domain()),i.select(".line").attr("d",o),c.select(".axis--x").call(s),l.select(".brush").call(u.move,n.range().map(e.invertX,e))}},a.type=function(e){return{date:(0,a.state.parseDate)(ae()(e.date).format("M/D/YYYY HH:mm")),value:+e.value}},a}return Object(j.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",this.updateWidth);var t=this.props.data;this.setState({data:t.map(this.type)},function(){e.updateWidth()})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWidth)}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.svgHeight;return r.a.createElement("div",{id:"".concat(t,"-div"),className:"line-chart"},r.a.createElement("svg",{id:t,width:"100%",height:a}))}}]),t}(r.a.Component)),pe=[{date:14939226e5,value:320},{date:1494009e6,value:552},{date:14940954e5,value:342},{date:14941818e5,value:431},{date:14942682e5,value:251},{date:1494354600220,value:445}];var he=Object(k.withStyles)(function(e){return{root:{flexGrow:1},grid:{"& div":{background:"#fff"}},pager:Object(d.a)({},e.mixins.gutters(),{paddingTop:e.spacing.unit,paddingBottom:e.spacing.unit})}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(C.m,{container:!0,spacing:24},r.a.createElement(C.m,{item:!0,md:6,xs:12,className:t.grid},r.a.createElement(C.u,{className:t.pager},r.a.createElement(me,{id:"line-chart-1",title:"Chart",svgHeight:500,data:pe}))),r.a.createElement(C.m,{item:!0,md:6,xs:12,className:t.grid},r.a.createElement(C.u,{className:t.pager},r.a.createElement(me,{id:"line-chart-2",title:"Chart",svgHeight:500,data:pe}))),r.a.createElement(C.m,{item:!0,md:6,xs:12,className:t.grid},r.a.createElement(C.u,{className:t.pager},r.a.createElement(me,{id:"line-chart-3",title:"Chart",svgHeight:500,data:pe}))),r.a.createElement(C.m,{item:!0,md:6,xs:12,className:t.grid},r.a.createElement(C.u,{className:t.pager},r.a.createElement(me,{id:"line-chart-4",title:"Chart",svgHeight:500,data:pe})))))}),ge=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(S.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(j.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ue,{title:"Dashboard"}),r.a.createElement(he,null))}}]),t}(n.Component);var fe=function(){return r.a.createElement("div",null,"performance")},ve=a(60),be=a(76),Ee=a.n(be),xe=a(5615);var ye=Object(k.withStyles)(function(e){return{root:{flexGrow:1,padding:"10px 0px"},grid:{alignItems:"center"},paper:Object(d.a)({},e.mixins.gutters(),{paddingTop:e.spacing.unit,paddingBottom:e.spacing.unit,color:e.palette.text.secondary,boxShadow:"none"}),createStream:{textAlign:"left"},button:{margin:0,backgroundColor:"#1656a0","&:hover":{textDecoration:"none",color:"inherit",backgroundColor:"#1656a0"}},serachArea:{textAlign:"right"},textField:{margin:0,height:"36px","& label":{top:"-6px"},"& div":{background:"#fff"}}}})(function(e){var t=e.classes,a=e.onSearch;return r.a.createElement("div",{className:t.root},r.a.createElement(C.m,{container:!0,spacing:0,className:t.grid},r.a.createElement(C.m,{item:!0,xs:3},r.a.createElement(C.u,{className:D()(t.paper,t.createStream)},r.a.createElement(C.A,{title:"Create Stream","aria-label":"Create Stream"},r.a.createElement(C.k,{component:xe.a,size:"small",to:"streams/create",color:"primary","aria-label":"Add",className:t.button},r.a.createElement(Ee.a,null))))),r.a.createElement(C.m,{item:!0,xs:9},r.a.createElement(C.u,{className:D()(t.paper,t.serachArea)},r.a.createElement(C.y,{id:"outlined-dense",label:"Search Here",className:t.textField,margin:"dense",variant:"outlined",onChange:a})))))}),we=a(186),Se=a(184),Oe=a.n(Se);a(5618),a(5620);function je(e){var t=e.loading,a=e.classes,n=e.columns,i=e.data,o=e.pages,c=e.onFetchData,s=e.defaultSorted,l=e.showPaginationTop,u=e.showPaginationBottom,d=e.defaultPageSize,m=e.pageSizeOptions;return r.a.createElement("div",{className:a.root},r.a.createElement(C.m,{container:!0,spacing:0},r.a.createElement(C.u,{className:Oe()(a.paper,"stream-table")},r.a.createElement(we.a,{manual:!0,onFetchData:c,loading:t,data:i,columns:n,pages:o,defaultPageSize:d,pageSizeOptions:m,defaultSorted:s,className:"-striped -highlight",showPaginationTop:l,showPaginationBottom:u}))))}je.defaultProps={showPaginationTop:!0,showPaginationBottom:!1,defaultPageSize:50,pageSizeOptions:[50,100,200,500],loading:!1,defaultSorted:[{id:"id",desc:!1}]};var ke=Object(k.withStyles)(function(e){return{root:{flexGrow:1},paper:Object(d.a)({},e.mixins.gutters(),{paddingTop:e.spacing.unit,paddingBottom:e.spacing.unit,color:e.palette.text.secondary,boxShadow:"none",width:"100%","& div":{background:"none"}})}})(je),Ce=a(51),Ae=a.n(Ce),Ne=a(185),He=function(e){v.dispatch(function(e){return{type:"SHOW_SNACKBAR",data:e}}(e))},ze=Ne.pro,De=function(){var e=Object(x.a)(E.a.mark(function e(t){var a,n,r,i,o,c=arguments;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:1,n=c.length>2&&void 0!==c[2]?c[2]:10,r=c.length>3&&void 0!==c[3]?c[3]:"",i=c.length>4&&void 0!==c[4]?c[4]:"",e.prev=4,e.next=7,Ae.a.get("".concat(ze.API_HOST).concat(ze.BASE_URL,"/streams?page=").concat(a,"&page_size=").concat(n,"&order_by=").concat(r,"&serach=").concat(i),{headers:{"Content-Type":" application/json;charset=UTF-8",token:t}});case 7:return o=e.sent,e.abrupt("return",o);case 11:return e.prev=11,e.t0=e.catch(4),He({variant:"error",message:"Error while fetching streams data."}),e.abrupt("return",new Error(e.t0));case 15:case"end":return e.stop()}},e,this,[[4,11]])}));return function(t){return e.apply(this,arguments)}}(),_e=function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),He({variant:"success",message:"URL is copied to clipboard."})},Be=function(e){v.dispatch(function(e){return{type:"SHOW_ALERT",data:e}}(e))},We=function(e){var t=e.desc?r.a.createElement(_.b,null):r.a.createElement(_.a,null);return[{Header:function(){return r.a.createElement("div",null,"Id ","id"===e.id?t:"")},accessor:"id",minWidth:200,style:{textAlign:"center"},Cell:function(e){return r.a.createElement(xe.a,{to:"streams/".concat(e.value)},e.value)}},{Header:function(){return r.a.createElement("div",null,"Name ","stream_name"===e.id?t:"")},id:"stream_name",minWidth:200,accessor:function(e){return(t=e.stream_name)?t.charAt(0).toUpperCase()+[t.slice(1)||" "].toLowerCase:t;var t}},{Header:"Url",accessor:"url",sortable:!1,minWidth:300,Cell:function(e){return r.a.createElement(C.m,{container:!0,spacing:0},r.a.createElement(C.m,{item:!0,xs:11,className:"long-url"},e.value),r.a.createElement(C.m,{item:!0,xs:1},e.value?r.a.createElement(_.g,{style:{cursor:"pointer"},onClick:function(){_e(e.value)}}):""))}},{Header:"SSAI Url",accessor:"dai_url",sortable:!1,minWidth:300,Cell:function(e){return r.a.createElement(C.m,{container:!0,spacing:0},r.a.createElement(C.m,{item:!0,xs:11,className:"long-url"},e.value),r.a.createElement(C.m,{item:!0,xs:1},e.value?r.a.createElement(_.g,{style:{cursor:"pointer"},onClick:function(){_e(e.value)}}):""))}},{Header:"Type",accessor:"stream_type",sortable:!1},{Header:"Format",accessor:"stream_format",sortable:!1},{Header:"Tags",id:"tags",sortable:!1,accessor:function(e){return(e.tags||[]).join(",")}},{Header:function(){return r.a.createElement("div",null,"Floor Price ","floor_price"===e.id?t:"")},accessor:"floor_price",style:{textAlign:"center"},minWidth:150},{Header:function(){return r.a.createElement("div",null,"Status ","status"===e.id?t:"")},id:"status",style:{textAlign:"center"},accessor:function(e){return r.a.createElement(C.x,{key:"".concat(e.id,"-").concat(e.stream_name),style:{height:"18px"},checked:e.status,onChange:function(){var t;t=e,Be({title:"Confirm",text:"Do you really want to disable this stream?",handleSuccess:function(){console.log(t)}})},value:e.status,color:"primary"})}},{Header:function(){return r.a.createElement("div",null,"Created At ","created_date"===e.id?t:"")},id:"created_date",accessor:function(e){return ae()(e.created_date).format("YYYY-MM-DD")},style:{textAlign:"center"},minWidth:200},{Header:function(){return r.a.createElement("div",null,"Updated At ","last_modified_date"===e.id?t:"")},id:"last_modified_date",accessor:function(e){return ae()(e.last_modified_date).format("YYYY-MM-DD")},style:{textAlign:"center"},minWidth:200}]},Ie=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(S.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,pageSize:50,page:0,pages:0,serach:"",sortBy:[{id:"id",desc:!1}],streams:[]},a.fetchStreamsData=Object(x.a)(E.a.mark(function e(){var t,n,r,i,o,c,s,l;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),t=a.props.cookies.epasso,n=a.state,r=n.page,i=n.pageSize,o=n.sortBy,c=n.serach,s=o[0].desc?"-".concat(o[0].id):o[0].id,e.next=6,De(t,r+1,i,s,c);case 6:l=e.sent,a.setState({loading:!1,streams:Object(ve.get)(l,"data.streams")||[],pages:Math.ceil((Object(ve.get)(l,"data.total_count")||0)/i)});case 8:case"end":return e.stop()}},e,this)})),a.onFetchData=function(e){var t=a.state,n=t.pageSize,r=t.page,i=t.sortBy;if(n!==e.pageSize||r!==e.page||JSON.stringify(e.sorted)!==JSON.stringify(i)){var o=e.pageSize<0?0:e.pageSize;a.setState({pageSize:o,page:e.page,sortBy:e.sorted},function(){a.fetchStreamsData()})}},a.onSearch=function(e){var t=a.state.serach,n=e.target.value;t!==n&&a.setState({serach:n},Object(x.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.fetchStreamsData();case 2:case"end":return e.stop()}},e,this)})))},a}return Object(j.a)(t,e),Object(w.a)(t,[{key:"componentWillMount",value:function(){var e=Object(x.a)(E.a.mark(function e(){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchStreamsData();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.streams,a=e.loading,n=e.pages,i=e.pageSize,o=e.sortBy;return r.a.createElement("div",null,r.a.createElement(ue,{title:"Streams"}),r.a.createElement(ye,{onSearch:this.onSearch}),r.a.createElement(ke,{data:t,defaultPageSize:i,columns:We(o[0]),pages:n,loading:a,onFetchData:this.onFetchData}))}}]),t}(n.Component),Pe=Object(c.b)(function(e){return{cookies:e.cookies}},function(){return{}})(Ie);var Te=function(e){var t=e.match.params.id;return r.a.createElement("div",null,r.a.createElement(ue,{title:"Stream"}),t)};var Ye=Object(k.withStyles)(function(e){return{root:Object(d.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit,background:"#f4f4f4",fontSize:"18px"}),textField:{background:"#fff"},buttons:{textAlign:"right"},button:{margin:e.spacing.unit,"&:focus":{textDecoration:"none",outline:"none"}}}})(function(e){var t=e.classes;return r.a.createElement(C.m,{container:!0,spacing:0},r.a.createElement(C.m,{item:!0,xs:12},r.a.createElement(C.u,{className:t.root,elevation:1},r.a.createElement(C.m,{container:!0,spacing:0},r.a.createElement(C.l,{fullWidth:!0},r.a.createElement(C.p,{htmlFor:"component-simple"},"Url"),r.a.createElement(C.o,{id:"component-simple"}))))))});var Le=function(){return r.a.createElement("div",null,r.a.createElement(ue,{title:"Register DAI Stream"}),r.a.createElement(Ye,null))},Re=Object(c.b)(function(e){return{cookies:e.cookies}},function(){return{}})(function(e){var t=e.cookies;return r.a.createElement(R.a,null,r.a.createElement(ie,null,t&&t.epasso?r.a.createElement(M.a,null,r.a.createElement(U.a,{exact:!0,path:"/dashboard",component:ge}),r.a.createElement(U.a,{exact:!0,path:"/performance",component:fe}),r.a.createElement(U.a,{exact:!0,path:"/streams",component:Pe}),r.a.createElement(U.a,{exact:!0,path:"/streams/create",component:Le}),r.a.createElement(U.a,{exact:!0,path:"/streams/:id",component:Te}),r.a.createElement(F.a,{from:"*",to:"/dashboard"})):""))}),Me=function(){var e=document.cookie.split(";"),t={},a="";return e.forEach(function(e){for(a=e;" "===e.charAt(0);)a=e.string(1);var n=a.split("=")||[];if(2===n.length){var r=n[0],i=n[1];t[r]=i}}),t},Ue=function(e){function t(){return Object(y.a)(this,t),Object(S.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(w.a)(t,[{key:"componentWillMount",value:function(){var e=Object(x.a)(E.a.mark(function e(){var t,a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Me();case 2:return t=e.sent,a=this.props.setCookies,e.next=6,a(t);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(T,null),r.a.createElement(L,null),r.a.createElement(Re,null))}}]),t}(n.Component),Fe=Object(c.b)(function(){return{}},function(e){return{setCookies:function(t){return e(function(e){return{type:"ADD_COOKIES",cookies:e}}(t))}}})(Ue);o.a.render(r.a.createElement(c.a,{store:v},r.a.createElement(Fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5451,2,1]]]);
//# sourceMappingURL=main.ae9a0fdc.chunk.js.map