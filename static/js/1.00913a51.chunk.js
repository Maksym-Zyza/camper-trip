"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[1],{5320:function(e,n,i){i.d(n,{z:function(){return l}});var t=i(1413),s=i(4925),a=(i(2791),"Button_btn__rk-ay"),r=i(3329),c=["text","onClick"],l=function(e){var n=e.text,i=e.onClick,l=(0,s.Z)(e,c);return(0,r.jsx)("button",(0,t.Z)((0,t.Z)({className:a,onClick:i},l),{},{children:n}))}},1648:function(e,n,i){i.d(n,{Q:function(){return b}});i(2791);var t="VanFilters_filtersWrapper__w+uQu",s="VanFilters_filterSection__KXZRA",a="VanFilters_location__mOdIT",r="VanFilters_list__FBu+L",c=i(2835),l=i(5320),o=i(3329),d=[{name:"automatic",label:"Automatic",icon:(0,o.jsx)(c.iU,{})},{name:"AC",label:"AC",icon:(0,o.jsx)(c.am,{})},{name:"TV",label:"TV",icon:(0,o.jsx)(c.lL,{})},{name:"kitchen",label:"Kitchen",icon:(0,o.jsx)(c.oy,{})},{name:"shower",label:"Shower/WC",icon:(0,o.jsx)(c.Pp,{})}],u=[{label:"Van",icon:(0,o.jsx)(c.zU,{})},{label:"Fully Integrated",icon:(0,o.jsx)(c.i8,{})},{label:"Alcove",icon:(0,o.jsx)(c.Zy,{})}],x="Checkbox_checkboxContainer__2jyFy",m="Checkbox_label__scbRi",h="Checkbox_hidden__EwqCN",j=function(e){var n=e.name,i=e.label,t=e.icon;return(0,o.jsxs)("div",{className:x,children:[(0,o.jsx)("input",{type:"checkbox",id:n,name:n,className:h}),(0,o.jsxs)("label",{htmlFor:n,className:m,children:[t,i]})]})},_="RadioButton_container__9VV9E",v="RadioButton_label__t98+e",f="RadioButton_hidden__l0Ph0",p=function(e){var n=e.label,i=e.icon;return(0,o.jsxs)("div",{className:_,children:[(0,o.jsx)("input",{className:f,type:"radio",id:n,name:"venType",value:n}),(0,o.jsxs)("label",{htmlFor:n,className:v,children:[i,n]})]})},b=function(){return(0,o.jsx)("div",{className:t,children:(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.elements,i=n.location,t=n.automatic,s=n.AC,a=n.TV,r=n.kitchen,c=n.shower,l=n.venType,o={location:i.value,automatic:t.checked,AC:s.checked,TV:a.checked,kitchen:r.checked,shower:c.checked,venType:l.value};console.log(o)},children:[(0,o.jsxs)("div",{className:a,children:[(0,o.jsx)("label",{htmlFor:"location",children:"Location"}),(0,o.jsx)("input",{type:"text",name:"location"}),(0,o.jsx)(c.Ye,{})]}),(0,o.jsxs)("div",{className:s,children:[(0,o.jsx)("h2",{children:"Filters"}),(0,o.jsx)("h3",{children:"Vehicle Equipment"}),(0,o.jsx)("div",{className:r,children:d.map((function(e){var n=e.name,i=e.label,t=e.icon;return(0,o.jsx)(j,{name:n,label:i,icon:t},i)}))}),(0,o.jsx)("h3",{children:"Vehicle Type"}),(0,o.jsx)("div",{className:r,children:u.map((function(e){var n=e.name,i=e.label,t=e.icon;return(0,o.jsx)(p,{name:n,label:i,icon:t},i)}))})]}),(0,o.jsx)(l.z,{type:"submit",text:"Search"})]})})}},4437:function(e,n,i){i.d(n,{Z:function(){return g}});i(2791);var t="VanList_list__KDVYM",s="VanList_itemWrapper__rS9x6",a="VanList_img__-N3ve",r="VanList_itemContent__L3C+6",c="VanList_firstLine__Uutwx",l="VanList_active__bBdpz",o="VanList_secondLine__nElDv",d="VanList_location__Elu6a",u="VanList_detailList__0+lMc",x=i(4420),m=i(2829),h=i(2835),j=i(9439),_="DetailsItem_detailsItem__cA3ZK",v="DetailsItem_icon__C9MbN",f="DetailsItem_value__PGtKN",p=i(3329),b={automatic:(0,p.jsx)(h.iU,{}),airConditioner:(0,p.jsx)(h.AK,{}),AC:(0,p.jsx)(h.am,{}),toilet:(0,p.jsx)(h.Xk,{}),CD:(0,p.jsx)(h.CD,{}),TV:(0,p.jsx)(h.lL,{}),kitchen:(0,p.jsx)(h.oy,{}),beds:(0,p.jsx)(h.QF,{}),radio:(0,p.jsx)(h.Y8,{}),shower:(0,p.jsx)(h.Pp,{}),freezer:(0,p.jsx)(h.SY,{}),microwave:(0,p.jsx)(h.oC,{}),gas:(0,p.jsx)(h.RP,{}),water:(0,p.jsx)(h.Bt,{}),hob:(0,p.jsx)(h.WD,{}),bathroom:(0,p.jsx)(h.ZS,{})},N=function(e){var n=e.detail,i=(0,j.Z)(n,2),t=i[0],s=i[1];return(0,p.jsxs)("li",{className:_,children:[(0,p.jsx)("span",{className:v,children:b[t]}),(0,p.jsx)("span",{className:f,children:s}),t]})},C=i(5320),k=i(1506),V=function(e){var n,i=e.item,t=(0,x.v9)(m._l),j=(0,x.I0)(),_=t.find((function(e){return e._id===i._id}));return(0,p.jsxs)("div",{className:s,children:[(0,p.jsx)("div",{className:a,children:(0,p.jsx)("img",{src:i.gallery[0],alt:""})}),(0,p.jsxs)("div",{className:r,children:[(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)("p",{children:i.name}),(0,p.jsxs)("p",{children:["\u20ac",i.price,(0,p.jsx)(h.mN,{className:_?l:"",onClick:function(){return j((0,k.j)(i))}})]})]}),(0,p.jsxs)("div",{className:o,children:[(0,p.jsx)(h.Ux,{}),i.rating,(0,p.jsxs)("span",{children:[" (","".concat(null===(n=i.reviews)||void 0===n?void 0:n.length)," Reviews)"]}),(0,p.jsxs)("span",{className:d,children:[(0,p.jsx)(h.Ye,{})," item.location"]})]}),(0,p.jsx)("p",{children:i.description}),(0,p.jsx)("ul",{className:u,children:Object.entries(i.details).map((function(e,n){return(0,p.jsx)(N,{detail:e},n)}))}),(0,p.jsx)(C.z,{text:"Show more",onClick:function(){return console.log("handleShowMore")}})]})]},i._id)},g=function(e){var n=e.data,i=e.listRef;return(0,p.jsx)("div",{className:t,ref:i,children:n.length>0&&n.map((function(e){return(0,p.jsx)(V,{item:e},e._id)}))})}},2001:function(e,n,i){i.r(n),i.d(n,{default:function(){return _}});var t=i(2791),s=i(4420),a=i(3338),r=i(1648),c=i(4437),l=i(9519),o=i(2829),d=i(3329),u=function(e){var n=e.error;return(0,d.jsx)(d.Fragment,{children:n&&(0,d.jsx)("div",{style:{padding:"20px 0",fontSize:"20px",color:"red"},children:n})})},x=i(8246),m=i(9373),h=i(3433),j=i(5320),_=function(){var e=(0,s.v9)(o.Br),n=e.adverts,i=e.isLoading,_=e.error,v=(0,s.I0)(),f=(0,t.useContext)(m.Z),p=f.currentPage,b=f.increasePage,N=function(e,n){var i=4*e;return{cards:(0,h.Z)(n).splice(0,i),isVisible:n.length>i}}(p,n),C=N.cards,k=N.isVisible,V=(0,t.useRef)();(0,t.useEffect)((function(){v((0,l.rQ)())}),[v]);return(0,d.jsxs)(d.Fragment,{children:[!i&&!_&&(0,d.jsxs)("div",{className:a.Z.pageWrapper,children:[(0,d.jsxs)("div",{className:a.Z.cataloguePage,children:[(0,d.jsx)(r.Q,{}),(0,d.jsx)(c.Z,{data:C,listRef:V})]}),k&&(0,d.jsx)(j.z,{text:"Load more",onClick:function(){var e;b(),e=V,setTimeout((function(){e.current&&window.scrollBy({behavior:"smooth",top:window.innerHeight-e.current.getBoundingClientRect().top})}),0)}})]}),(0,d.jsx)(u,{error:_}),(0,d.jsx)(x.Z,{isLoading:i})]})}},2829:function(e,n,i){i.d(n,{Br:function(){return s},_l:function(){return a}});var t=i(3553),s=function(e){return e.data},a=function(e){return e.favorites};(0,t.P1)([s,function(e){return e.filter}],(function(e,n){var i=e.items,t=n.filter;return null===i||void 0===i?void 0:i.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}))}}]);
//# sourceMappingURL=1.00913a51.chunk.js.map