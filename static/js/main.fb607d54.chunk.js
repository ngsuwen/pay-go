(this["webpackJsonppay-and-go"]=this["webpackJsonppay-and-go"]||[]).push([[0],{237:function(e,t,n){},238:function(e,t,n){},254:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(82),i=n.n(c),s=(n(237),n(238),n(93)),o=n(4),l=n(287),j=n(215),u=n.n(j),d=n(214),b=n(200),x=n(203),h=n(197),p=n(202),g=n(199),O=n(1),m=function(e){var t=e.data;return console.log(t.image),console.log(t.name),Object(O.jsx)(d.a,{item:!0,xs:4,children:Object(O.jsx)(b.a,{sx:{borderRadius:0,boxShadow:"0px 2px 4px #aaaaaa"},children:Object(O.jsxs)(l.a,{sx:{position:"relative"},children:[Object(O.jsx)(x.a,{draggable:"false",component:"img",height:"450",image:t.image}),Object(O.jsx)(l.a,{sx:{position:"absolute",bottom:0,left:0,width:"100%",bgcolor:"#e0e0e0",opacity:.8,color:"black",padding:"10px"},children:Object(O.jsx)(h.a,{variant:"subtitle1",children:t.name})})]})})})},f=function(e){var t=e.data;return Object(O.jsx)(d.a,{item:!0,xs:4,children:Object(O.jsxs)(p.a,{sx:{backgroundColor:"#e0e0e0",height:410,boxShadow:"0px 2px 4px #aaaaaa"},children:[Object(O.jsx)(h.a,{sx:{marginTop:"40%"},variant:"h5",component:"div",children:t.name}),Object(O.jsx)(h.a,{variant:"subtitle1",color:"text.secondary",children:t.description}),Object(O.jsx)(g.a,{sx:{bgcolor:"#e0e0e0",color:"black",border:"2px solid black",marginTop:5,"&:hover":{color:"black",bgcolor:"white",border:"2px solid white"}},variant:"outlined",children:"Shop Now"})]})})},v=function(e){var t=e.num,n=e.arr;console.log("pass forLoop()");for(var a=[],r=0;r<3;r++)t===r?a.push(Object(O.jsx)(f,{data:n[r]})):a.push(Object(O.jsx)(m,{data:n[r]}));return console.log(a),a},y=function(e){var t=e.num,n=e.arr;return console.log("pass Item()"),Object(O.jsx)(d.a,{container:!0,spacing:0,children:Object(O.jsx)(v,{num:t,arr:n})})};function w(){return Object(O.jsx)("div",{style:{maxWidth:1e3,margin:"auto"},children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)(y,{num:0,arr:k}),Object(O.jsx)(y,{num:1,arr:S}),Object(O.jsx)(y,{num:2,arr:C})]})})}var k=[{name:"ELECTRONICS",description:"Electronics is Forever"},{name:"Macbook",image:"https://source.unsplash.com/featured/?macbook"},{name:"Laptop",image:"https://source.unsplash.com/featured/?laptop"}],S=[{name:"Diamond",image:"https://source.unsplash.com/featured/?diamond"},{name:"JEWELRY",description:"Sexier than Diamond"},{name:"Bracelet",image:"https://source.unsplash.com/featured/?bracelet"}],C=[{name:"Dress",image:"https://source.unsplash.com/featured/?dress"},{name:"Blouse",image:"https://source.unsplash.com/featured/?blouse"},{name:"FASHION",description:"Trending with Us"}],E=n(39),A=n.n(E),W=n(73),T=n(11),R=n(201),N=n(62);function M(e){var t=e.data;return Object(O.jsx)(N.b,{style:{textDecoration:"none"},to:"/category/".concat(t.category,"/").concat(t.id),children:Object(O.jsx)(b.a,{style:{width:220,minHeight:330,margin:5},sx:{boxShadow:0},children:Object(O.jsxs)(R.a,{sx:{"&:hover":{opacity:.7},".MuiCardActionArea-focusHighlight":{bgcolor:"white"}},children:[Object(O.jsx)("div",{style:{display:"flex",alignItem:"center",justifyContent:"center",height:200},children:Object(O.jsx)(x.a,{style:{maxWidth:150,maxHeight:200,objectFit:"scale-down"},component:"img",image:t.image,alt:t.title})}),Object(O.jsxs)(p.a,{children:[Object(O.jsx)(h.a,{textAlign:"center",gutterBottom:!0,variant:"subtitle2",component:"div",children:t.title}),Object(O.jsxs)(h.a,{textAlign:"center",variant:"subtitle2",color:"text.secondary",children:["US$ ",t.price]})]})]})})})}function F(e){var t=e.category,n=Object(a.useState)([]),r=Object(T.a)(n,2),c=r[0],i=r[1],s=c.map((function(e){return Object(O.jsx)(d.a,{item:!0,children:Object(O.jsx)(M,{data:e})})})),o=function(){var e=Object(W.a)(A.a.mark((function e(){var n,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://fakestoreapi.com/products/category/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,console.log(a),e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=function(){var e=Object(W.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{style:{maxWidth:1e3,margin:"auto"},children:Object(O.jsx)(d.a,{sx:{justifyContent:"center"},container:!0,spacing:.5,children:s})})})}var I=Object(o.a)("div")((function(e){var t=e.theme;return Object(s.a)(Object(s.a)({},t.typography.button),{},{fontWeight:t.typography.fontWeightBold,fontSize:t.typography.pxToRem(16),backgroundColor:t.palette.background.paper,padding:t.spacing(1)})}));function B(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(w,{}),Object(O.jsx)(l.a,{sx:{margin:5,display:"flex",justifyContent:"center"},children:Object(O.jsx)(I,{children:"New Products"})}),Object(O.jsx)(F,{category:"men's%20clothing"}),Object(O.jsx)(l.a,{sx:{margin:5,display:"flex",justifyContent:"center"},children:Object(O.jsx)(I,{children:"Products Selling"})}),Object(O.jsx)(F,{category:"men's%20clothing"})]})}var D=n(20);function L(){var e=Object(D.h)(),t=Object(a.useState)([]),n=Object(T.a)(t,2),r=n[0],c=n[1],i=r.map((function(e){return Object(O.jsx)(d.a,{item:!0,children:Object(O.jsx)(M,{data:e})})})),s=function(){var t=Object(W.a)(A.a.mark((function t(){var n,a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://fakestoreapi.com/products/category/".concat(e.category));case 3:return n=t.sent,t.next=6,n.json();case 6:return a=t.sent,console.log(a),t.abrupt("return",a);case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=function(){var e=Object(W.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[e.category]),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{style:{minHeight:"62vh",maxWidth:1e3,margin:"auto"},children:Object(O.jsx)(d.a,{sx:{justifyContent:"center"},container:!0,spacing:.5,children:i})})})}var H=n(204);function q(){var e=Object(D.h)(),t=Object(a.useState)([]),n=Object(T.a)(t,2),r=n[0],c=n[1],i=function(){var t=Object(W.a)(A.a.mark((function t(){var n,a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://fakestoreapi.com/products/".concat(e.id));case 3:return n=t.sent,t.next=6,n.json();case 6:return a=t.sent,console.log(a),t.abrupt("return",a);case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=function(){var e=Object(W.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[e.category]),Object(O.jsx)(H.a,{maxWidth:"1000",children:Object(O.jsxs)(b.a,{sx:{display:"flex",justifyContent:"center",padding:10,boxShadow:"none"},children:[Object(O.jsx)(x.a,{component:"img",sx:{width:300,padding:5},image:r.image,alt:r.title}),Object(O.jsx)(l.a,{sx:{display:"flex",flexDirection:"column"},children:Object(O.jsxs)(p.a,{children:[Object(O.jsx)(h.a,{sx:{padding:1},variant:"h6",fontWeight:"bold",children:r.title}),Object(O.jsxs)(h.a,{sx:{padding:1},variant:"subtitle1",children:[r.rating?r.rating.rate:"","/5 (",r.rating?r.rating.count:"",")"]}),Object(O.jsx)(h.a,{sx:{padding:1},variant:"subtitle1",color:"text.secondary",children:r.description}),Object(O.jsxs)(h.a,{sx:{padding:1},variant:"subtitle1",color:"text.secondary",children:["US $",r.price,Object(O.jsx)("br",{}),"#Quantity #AddToCart"]})]})})]})})}var P=n(198),Q=n(210),U=n(205);function J(){return Object(O.jsxs)(P.a,{sx:{bgcolor:"white",boxShadow:"none",marginBottom:5},position:"static",children:[Object(O.jsx)(H.a,{sx:{display:"flex",justifyContent:"center"},children:Object(O.jsx)(Q.a,{children:Object(O.jsx)(h.a,{variant:"h5",color:"#757575",children:"WEBSTORE"})})}),Object(O.jsx)(U.a,{})]})}var G=n(213),Y=n(206),z=Object(o.a)((function(e){return Object(O.jsx)(G.a,Object(s.a)(Object(s.a)({},e),{},{TabIndicatorProps:{children:Object(O.jsx)("span",{className:"MuiTabs-indicatorSpan"})}}))}))({"& .MuiTabs-indicator":{display:"flex",justifyContent:"center",backgroundColor:"transparent"},"& .MuiTabs-indicatorSpan":{maxWidth:40,width:"100%",backgroundColor:"rgb(128,128,128)"}}),$=Object(o.a)((function(e){return Object(O.jsx)(N.b,{style:{textDecoration:"none"},to:"".concat(e.link),children:Object(O.jsx)(Y.a,Object(s.a)({disableRipple:!0},e))})}))((function(e){var t=e.theme;return{textTransform:"none",fontWeight:t.typography.fontWeightRegular,fontSize:t.typography.pxToRem(13),marginRight:t.spacing(1),color:"rgb(169,169,169)","&.Mui-selected":{color:"rgb(80,80,80)"},"&.Mui-focusVisible":{backgroundColor:"rgba(100, 95, 228, 0.32)"}}}));function V(){var e=r.a.useState(0),t=Object(T.a)(e,2),n=t[0],a=t[1];return Object(O.jsx)(l.a,{sx:{marginBottom:5},children:Object(O.jsxs)(z,{value:n,onChange:function(e,t){a(t)},centered:!0,children:[Object(O.jsx)($,{label:"HOME",link:"/"}),Object(O.jsx)($,{label:"ELECTRONICS",link:"/category/electronics"}),Object(O.jsx)($,{label:"JEWELLERY",link:"/category/jewelery"}),Object(O.jsx)($,{label:"MENS",link:"/category/men's%20clothing"}),Object(O.jsx)($,{label:"WOMENS",link:"/category/women's%20clothing"}),Object(O.jsx)($,{label:"SIGN IN"}),Object(O.jsx)($,{label:"CART"}),Object(O.jsx)($,{label:"SEARCH"})]})})}var K=n(209),X=n(207),Z=n(211),_=n(208);function ee(e,t,n,a){return{text:e,link:t,text2:n,link2:a}}var te=[ee("About Us","/","Partnerships","/"),ee("Contact Us","/","Quality","/"),ee("FAQ","/","Shipping","/")];function ne(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{style:{backgroundColor:"#eceff1",position:"static",padding:"0.5em"},children:Object(O.jsx)(K.a,{sx:{display:"flex",justifyContent:"center"},children:Object(O.jsxs)(X.a,{sx:{maxWidth:1e3},children:[Object(O.jsxs)(Z.a,{children:[Object(O.jsx)(_.a,{sx:{padding:"0.5em",border:"none",textAlign:"left",fontWeight:"bold"},width:"20%",children:"COMPANY"}),Object(O.jsx)(_.a,{sx:{padding:"0.5em",border:"none",textAlign:"left",fontWeight:"bold"},width:"25%",children:"PRODUCTS"}),Object(O.jsx)(_.a,{sx:{padding:"0.5em",border:"none",textAlign:"left",color:"#757575"},rowSpan:4,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid sequatur, quid repugnet, vident. Quae sequuntur igitur? Non semper, inquam; Qui ita affectus, beatum esse numquam probabis; Duo Reges: constructio interrete. Tibi hoc incredibile, quod beatissimum."})]}),te.map((function(e){return Object(O.jsxs)(Z.a,{children:[Object(O.jsx)(_.a,{sx:{padding:"0.5em",border:"none",textAlign:"left",color:"#757575"},children:e.text}),Object(O.jsx)(_.a,{sx:{padding:"0.5em",border:"none",textAlign:"left",color:"#757575"},children:e.text2})]})}))]})})}),Object(O.jsx)("div",{style:{backgroundColor:"#757575",position:"static",padding:"0.3em"},children:Object(O.jsx)(h.a,{variant:"subtitle2",sx:{flexGrow:1,textAlign:"center"},color:"#e0e0e0",children:"\xa9 2021 GA Suwen"})})]})}var ae=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("nav",{children:[Object(O.jsx)(J,{}),Object(O.jsx)(V,{})]}),Object(O.jsx)("main",{children:Object(O.jsxs)(D.d,{children:[Object(O.jsx)(D.b,{path:"/",element:Object(O.jsx)(B,{})}),Object(O.jsx)(D.b,{path:"/category/:category",element:Object(O.jsx)(L,{})}),Object(O.jsx)(D.b,{path:"/category/:category/:id",element:Object(O.jsx)(q,{})}),Object(O.jsx)(D.b,{path:"/*",element:Object(O.jsx)(D.a,{to:"/"})})]})}),Object(O.jsx)(ne,{})]})};i.a.render(Object(O.jsx)(N.a,{children:Object(O.jsx)(ae,{})}),document.getElementById("root"))}},[[254,1,2]]]);
//# sourceMappingURL=main.fb607d54.chunk.js.map