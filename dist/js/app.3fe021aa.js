(function(t){function e(e){for(var a,s,r=e[0],c=e[1],d=e[2],l=0,h=[];l<r.length;l++)s=r[l],o[s]&&h.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},2991:function(t,e,n){"use strict";var a=n("5fbe"),o=n.n(a);o.a},"2fc6":function(t,e,n){},"471e":function(t,e,n){"use strict";var a=n("a2d1"),o=n.n(a);o.a},"5fbe":function(t,e,n){},"7faf":function(t,e,n){"use strict";var a=n("8fba"),o=n.n(a);o.a},"84b4":function(t,e,n){},"8fba":function(t,e,n){},a2d1:function(t,e,n){},c133:function(t,e,n){"use strict";var a=n("2fc6"),o=n.n(a);o.a},c2ac:function(t,e,n){},cca0:function(t,e,n){"use strict";var a=n("84b4"),o=n.n(a);o.a},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],s=(n("7faf"),n("2877")),r={},c=Object(s["a"])(r,o,i,!1,null,null,null),d=c.exports,u=n("8c4f"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flow-chart-container"},[n("div",{staticClass:"flow-chart-config"},[n("Graph",{attrs:{"import-json-data":t.importJsonData,"node-type":t.nodeType,"save-status":t.saveStatus,"delete-node":t.deleteNode},on:{"update:saveStatus":function(e){t.saveStatus=e},"update:save-status":function(e){t.saveStatus=e},"update:deleteNode":function(e){t.deleteNode=e},"update:delete-node":function(e){t.deleteNode=e},"export-json":t.handleExportJSON,"setting-node":t.handleNodeSetting,"recovery-side-bar":t.handleRecoverySideBar}}),n("SideBar",{attrs:{"import-json-data":t.importJsonData,"node-type":t.nodeType,"save-status":t.saveStatus,"setting-node-id":t.settingNodeId},on:{"update:nodeType":function(e){t.nodeType=e},"update:node-type":function(e){t.nodeType=e},"update:saveStatus":function(e){t.saveStatus=e},"update:save-status":function(e){t.saveStatus=e},"export-json":t.handleExportJSON,"delete-node":t.handleDeleteNode}})],1),n("GraphShow",{attrs:{"json-data":t.jsonData}}),n("div",{staticClass:"control"},[n("div",{staticClass:"export-btn btn",on:{click:t.exportJSON}},[t._v("导出JSON")])])],1)},h=[],v=n("d225"),f=n("b0b4"),p=n("308d"),g=n("6bb5"),m=n("4e2b"),y=n("9ab4"),k=n("60a3"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side-bar-container"},[n("div",{staticClass:"nav-bar"},[n("div",{staticClass:"nav",class:{active:"流程状态"===t.nav},on:{click:function(e){return t.chooseNav("流程状态")}}},[t._v("\n      流程状态\n    ")]),n("div",{staticClass:"split"}),n("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.settingNodeId,expression:"settingNodeId !== 0"}],staticClass:"nav",class:{active:"状态设置"===t.nav},on:{click:function(e){return t.chooseNav("状态设置")}}},[t._v("\n      状态设置\n    ")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"status-content"},[n("div",{staticClass:"list"},t._l(t.list,function(t,e){return n("Node",{key:e,attrs:{"node-item":t}})}),1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showSetting,expression:"showSetting"}],staticClass:"setting-status"},[n("div",{staticClass:"node-attr normal-block"},[n("div",{staticClass:"title"},[t._v("节点属性")]),n("div",{staticClass:"btn-g"},[n("button",{class:{active:"real"===t.nodeType},on:{click:function(e){return t.chooseNodeType("real")}}},[t._v("\n          实节点\n        ")]),n("button",{class:{active:"virtual"===t.nodeType},on:{click:function(e){return t.chooseNodeType("virtual")}}},[t._v("\n          虚节点\n        ")])]),n("div",{staticClass:"control-btn-group"},[n("div",{staticClass:"delete-node btn"},[n("button",{on:{click:t.deleteNode}},[t._v("删除节点")])])])])])])},N=[],L=(n("7514"),n("20d6"),n("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"node",attrs:{draggable:"true"},on:{dragstart:function(e){return t.dragstart(e,t.nodeItem)},dragend:t.dragend}},[n("div",{staticClass:"id text"},[t._v(t._s(t.nodeItem.id))]),n("div",{staticClass:"title text"},[t._v(t._s(t.nodeItem.title))])])}),x=[],O=n("4bb5"),S=function(t){function e(){return Object(v["a"])(this,e),Object(p["a"])(this,Object(g["a"])(e).apply(this,arguments))}return Object(m["a"])(e,t),Object(f["a"])(e,[{key:"dragstart",value:function(t,e){this.toggleIsDragging(!0),null!==t.dataTransfer&&t.dataTransfer.setData("item",JSON.stringify(e))}},{key:"dragend",value:function(t){this.toggleIsDragging(!1),null!==t.dataTransfer&&t.dataTransfer.clearData()}}]),e}(k["c"]);y["a"]([Object(k["b"])()],S.prototype,"nodeItem",void 0),y["a"]([Object(O["a"])("toggle_isDragging")],S.prototype,"toggleIsDragging",void 0),S=y["a"]([k["a"]],S);var D=S,w=D,C=(n("cca0"),Object(s["a"])(w,L,x,!1,null,"4dfd6bd6",null)),j=C.exports,I=function(t){function e(){var t;return Object(v["a"])(this,e),t=Object(p["a"])(this,Object(g["a"])(e).apply(this,arguments)),t.nav="流程状态",t.statusText="",t.list=[{id:1,title:"开始"},{id:2,title:"结束"},{id:3,title:"待审核"},{id:4,title:"已审核"},{id:5,title:"审核失败"},{id:6,title:"测试1"},{id:7,title:"测试2"},{id:8,title:"测试3"}],t.nodesInfo=[],t}return Object(m["a"])(e,t),Object(f["a"])(e,[{key:"onSettingNodeIdChanged",value:function(t){var e=this;0!==t?(this.nav="状态设置",this.addNodeInfo(t).then(function(t){e.previewNodeSetting(t)})):this.initialSetting()}},{key:"onSaveStatusChanged",value:function(t){t&&this.saveJsonData()}},{key:"onImportJsonDataChanged",value:function(t){var e=JSON.parse(JSON.stringify(t)),n=e.nodeInfoList;this.nodesInfo=n}},{key:"saveJsonData",value:function(){var t=this.nodesInfo,e={nodesInfo:t};this.$emit("export-json",e)}},{key:"initialSetting",value:function(){this.nav="流程状态"}},{key:"chooseNav",value:function(t){this.nav=t}},{key:"handleTypeChanged",value:function(t){var e=this;this.nodesInfo.forEach(function(n){return n.id===e.settingNodeId&&(n.type="real"===t?1:2),n})}},{key:"chooseNodeType",value:function(t){0!==this.settingNodeId?(this.$emit("update:nodeType",t),this.handleTypeChanged(t)):this.noNodeError()}},{key:"idExist",value:function(t){var e=this.nodesInfo.findIndex(function(e){return e.id===t});return-1!==e}},{key:"addNodeInfo",value:function(t){var e=this;return new Promise(function(n){if(e.idExist(t))n(t);else{var a={id:t,type:1,desc:"",postDoAction:"",doAction:"",preDoAction:"",nodeCondition:""};e.nodesInfo.push(a),n(t)}})}},{key:"previewNodeSetting",value:function(t){var e=this.nodesInfo.find(function(e){return e.id===t}),n=e.type,a=1===n?"real":"virtual";this.$emit("update:nodeType",a)}},{key:"deleteNode",value:function(){var t=this;if(0===this.settingNodeId)return this.noNodeError(),!1;if(window.confirm("确认移除当前选中节点？")){var e=this.nodesInfo.findIndex(function(e){return e.id===t.settingNodeId});this.nodesInfo=this.nodesInfo.splice(e,1),this.$emit("delete-node"),this.initialSetting()}}},{key:"noNodeError",value:function(){alert("当前尚未选择节点，不可进行操作！")}},{key:"showList",get:function(){return"流程状态"===this.nav}},{key:"showSetting",get:function(){return"状态设置"===this.nav}}]),e}(k["c"]);y["a"]([Object(k["b"])()],I.prototype,"settingNodeId",void 0),y["a"]([Object(k["b"])()],I.prototype,"nodeType",void 0),y["a"]([Object(k["b"])()],I.prototype,"saveStatus",void 0),y["a"]([Object(k["b"])()],I.prototype,"importJsonData",void 0),y["a"]([Object(k["d"])("settingNodeId")],I.prototype,"onSettingNodeIdChanged",null),y["a"]([Object(k["d"])("saveStatus")],I.prototype,"onSaveStatusChanged",null),y["a"]([Object(k["d"])("importJsonData",{deep:!0})],I.prototype,"onImportJsonDataChanged",null),I=y["a"]([Object(k["a"])({components:{Node:j}})],I);var T=I,E=T,Y=(n("c133"),Object(s["a"])(E,b,N,!1,null,"c129d9e0",null)),X=Y.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"graph-container"},[n("div",{staticClass:"svg-box",on:{drop:t.createNode,dragover:function(t){t.preventDefault()}}},[n("svg",{staticClass:"zone",class:{active:t.graphState.isDragging},attrs:{xmlns:"http://www.w3.org/2000/svg"},on:{mousemove:function(e){return t.svgMousemove(e)},mouseup:t.svgMouseUp}},[n("defs",[n("marker",{attrs:{id:"mark-arrow",viewBox:"0 0 11 11",refX:"8",refY:"6",markerWidth:"10",markerHeight:"10",orient:"auto"}},[n("path",{attrs:{d:"M1,2 L8,6 L1,10 Z"}})])]),n("g",{staticClass:"graph"},[n("path",{directives:[{name:"show",rawName:"v-show",value:t.isLinking,expression:"isLinking"}],staticClass:"link dragline",attrs:{d:t.lineDragData,"marker-end":"url(#mark-arrow)"}}),n("g",{staticClass:"edges-list"},t._l(t.edges,function(e){return n("path",{key:e.id,class:["link","link-line","link-active",{selected:e.selected}],attrs:{d:t.edgeData(e),"marker-end":"url(#mark-arrow)"},on:{mousedown:function(n){return t.clickPath(n,e)}}})}),0),n("g",{staticClass:"nodes-list"},t._l(t.nodes,function(e,a){return n("g",{key:a,staticClass:"node-container",attrs:{transform:"translate("+e.x+","+e.y+")"},on:{mousedown:function(n){return t.dragSvgNode(e)},contextmenu:function(n){return t.rightMenu(n,e)}}},[n("rect",{staticClass:"node",class:t.rectClass(e),attrs:{width:t.rectWidth,height:t.rectHeight,rx:"2",ry:"2"}}),n("circle",{staticClass:"link-dot",class:{"active-dot":"top"===t.dotLink&&e===t.mousedownNode},attrs:{cx:"70",cy:"0"},on:{mousedown:function(e){return t.startLinkNode("top")},mouseup:function(n){return t.endLinkedNode("top",e)}}}),n("circle",{staticClass:"link-dot",class:{"active-dot":"bottom"===t.dotLink&&e===t.mousedownNode},attrs:{cx:"70",cy:"70"},on:{mousedown:function(e){return t.startLinkNode("bottom")},mouseup:function(n){return t.endLinkedNode("bottom",e)}}}),n("circle",{staticClass:"link-dot",class:{"active-dot":"left"===t.dotLink&&e===t.mousedownNode},attrs:{cx:"0",cy:"35"},on:{mousedown:function(e){return t.startLinkNode("left")},mouseup:function(n){return t.endLinkedNode("left",e)}}}),n("circle",{staticClass:"link-dot",class:{"active-dot":"right"===t.dotLink&&e===t.mousedownNode},attrs:{cx:"140",cy:"35"},on:{mousedown:function(e){return t.startLinkNode("right")},mouseup:function(n){return t.endLinkedNode("right",e)}}}),n("svg",{attrs:{width:t.rectWidth,height:t.rectHeight}},[n("text",{attrs:{x:"50%",y:"45%","alignment-baseline":"middle","text-anchor":"middle"}},[n("tspan",[t._v(t._s(e.id))])]),n("text",{attrs:{x:"50%",y:"75%","alignment-baseline":"middle","text-anchor":"middle"}},[n("tspan",[t._v(t._s(e.title))])])])])}),0)])]),n("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.deleteTip,expression:"deleteTip !== 0"}],staticClass:"delete-tip",class:{"tip-close":t.closeTip},style:{transform:"translate("+t.tipX+"px,"+t.tipY+"px)"},on:{click:t.deletePath}},[t._v("\n      删除路径\n    ")])])])},M=[],J=(n("456d"),140),G=70;function $(t,e){var n=Math.abs(t-e),a=3;return n<a&&(e=t),e}function A(t,e){var n=Math.abs(t-e),a=3;return n<a&&(e=t),e}function H(t,e,n,a){var o=(t+n)/2,i=e,s=o,r=a;return{midX1:o,midY1:i,midX2:s,midY2:r}}function R(t,e,n,a){var o=t,i=(e+a)/2,s=n,r=i;return{midX1:o,midY1:i,midX2:s,midY2:r}}function B(t,e,n,a){var o=2*Math.abs(e-a);(0===o||o<2*G)&&(o=44),o>2*G&&(o=44);var i=e>a?a:e,s=i-o,r=t,c=n;return{midY:s,midX1:r,midX2:c}}function P(t,e,n,a){var o=2*Math.abs(e-a);(0===o||o<2*G)&&(o=44),o>2*G&&(o=44);var i=e>a?e:a,s=i+o,r=t,c=n;return{midY:s,midX1:r,midX2:c}}function W(t,e,n,a){var o=2*Math.abs(t-n);(0===o||o<2*J)&&(o=88),o>2*J&&(o=88);var i=t>n?n:t,s=i-o,r=e,c=a;return{midX:s,midY1:r,midY2:c}}function z(t,e,n,a){var o=2*Math.abs(t-n);(0===o||o<2*J)&&(o=88),o>2*J&&(o=88);var i=t>n?t:n,s=i+o,r=e,c=a;return{midX:s,midY1:r,midY2:c}}function K(t){var e=t.dotLink,n=t.dotEndLink,a=t.startX,o=t.startY,i=t.endX,s=t.endY,r={};if("top"===e&&"top"===n?r=B(a,o,i,s):"bottom"===e&&"bottom"===n&&(r=P(a,o,i,s)),Object.keys(r).length>0){var c=r,d=c.midY,u=c.midX1,l=c.midX2;return"M ".concat(a,",").concat(o," L ").concat(u,",").concat(d," L ").concat(l,",").concat(d," L ").concat(i,",").concat(s)}return""}function U(t){var e=t.dotLink,n=t.dotEndLink,a=t.startX,o=t.startY,i=t.endX,s=t.endY,r={};if("left"===e&&"left"===n?r=W(a,o,i,s):"right"===e&&"right"===n&&(r=z(a,o,i,s)),Object.keys(r).length>0){var c=r,d=c.midX,u=c.midY1,l=c.midY2;return"M ".concat(a,",").concat(o," L ").concat(d,",").concat(u," L ").concat(d,",").concat(l," L ").concat(i,",").concat(s)}return""}function Z(t){var e=t.dotLink,n=t.dotEndLink,a=t.startX,o=t.startY,i=t.endX,s=t.endY;if("bottom"===e&&"top"===n){if(s<o){if(a+J<i){var r=a+J/2,c=o-G/2,d=i-J/2,u=s+G/2;u=A(c,u);var l=H(r,c,d,u),h=l.midX1,v=l.midY1,f=l.midX2,p=l.midY2;return"M ".concat(r,",").concat(c," L ").concat(h,",").concat(v," L ").concat(f,",").concat(p," L ").concat(d,",").concat(u)}if(a-J>i){var g=a-J/2,m=o-G/2,y=i+J/2,k=s+G/2;k=A(m,k);var b=H(g,m,y,k),N=b.midX1,L=b.midY1,x=b.midX2,O=b.midY2;return"M ".concat(g,",").concat(m," L ").concat(N,",").concat(L," L ").concat(x,",").concat(O," L ").concat(y,",").concat(k)}var S=a,D=o-G,w=i,C=s+G;w=$(S,w);var j=R(S,D,w,C),I=j.midX1,T=j.midY1,E=j.midX2,Y=j.midY2;return"M ".concat(S,",").concat(D," L ").concat(I,",").concat(T," L ").concat(E,",").concat(Y," L ").concat(w,",").concat(C)}}else if("top"===e&&"bottom"===n&&o<s){if(a+J<i){var X=a+J/2,_=o+G/2,M=i-J/2,B=s-G/2;B=A(_,B);var P=H(X,_,M,B),W=P.midX1,z=P.midY1,K=P.midX2,U=P.midY2;return"M ".concat(X,",").concat(_," L ").concat(W,",").concat(z," L ").concat(K,",").concat(U," L ").concat(M,",").concat(B)}if(a-J>i){var Z=a-J/2,q=o+G/2,F=i+J/2,Q=s-G/2;Q=A(q,Q);var V=H(Z,q,F,Q),tt=V.midX1,et=V.midY1,nt=V.midX2,at=V.midY2;return"M ".concat(Z,",").concat(q," L ").concat(tt,",").concat(et," L ").concat(nt,",").concat(at," L ").concat(F,",").concat(Q)}var ot=a,it=o+G,st=i,rt=s-G;st=$(ot,st);var ct=R(ot,it,st,rt),dt=ct.midX1,ut=ct.midY1,lt=ct.midX2,ht=ct.midY2;return"M ".concat(ot,",").concat(it," L ").concat(dt,",").concat(ut," L ").concat(lt,",").concat(ht," L ").concat(st,",").concat(rt)}return""}function q(t){var e=t.dotLink,n=t.dotEndLink,a=t.startX,o=t.startY,i=t.endX,s=t.endY;if("left"===e&&"right"===n){if(a<i){if(a+2*J<i){var r=a+J,c=o,d=i-J,u=s;u=A(c,u);var l=H(r,c,d,u),h=l.midX1,v=l.midY1,f=l.midX2,p=l.midY2;return"M ".concat(r,",").concat(c," L ").concat(h,",").concat(v," L ").concat(f,",").concat(p," L ").concat(d,",").concat(u)}if(a+2*J>=i){var g=a+J/2,m=o+G/2,y=i-J/2,k=s-G/2;o>s&&(m=o-G/2,k=s+G/2),y=$(g,y);var b=R(g,m,y,k),N=b.midX1,L=b.midY1,x=b.midX2,O=b.midY2;return"M ".concat(g,",").concat(m," L ").concat(N,",").concat(L," L ").concat(x,",").concat(O," L ").concat(y,",").concat(k)}}}else if("right"===e&&"left"===n&&a>i){if(i+2*J<a){var S=a-J,D=o,w=i+J,C=s;C=A(D,C);var j=H(S,D,w,C),I=j.midX1,T=j.midY1,E=j.midX2,Y=j.midY2;return"M ".concat(S,",").concat(D," L ").concat(I,",").concat(T," L ").concat(E,",").concat(Y," L ").concat(w,",").concat(C)}if(i+2*J>=a){var X=a-J/2,_=o+G/2,M=i+J/2,B=s-G/2;o>s&&(_=o-G/2,B=s+G/2),M=$(X,M);var P=R(X,_,M,B),W=P.midX1,z=P.midY1,K=P.midX2,U=P.midY2;return"M ".concat(X,",").concat(_," L ").concat(W,",").concat(z," L ").concat(K,",").concat(U," L ").concat(M,",").concat(B)}}return""}function F(){var t=1e5*Math.random();return Math.floor(t)}var Q=140,V=70,tt=function(t){function e(){var t;return Object(v["a"])(this,e),t=Object(p["a"])(this,Object(g["a"])(e).apply(this,arguments)),t.nodes=[],t.edges=[],t.rectWidth="141px",t.rectHeight="70px",t.isLinking=!1,t.nodeCanDrag=!0,t.lineDragData="",t.mousedownNode=null,t.dotLink="",t.settingNodeId=0,t.createNodeLock=!1,t.deleteTip=0,t.tipX=0,t.tipY=0,t.closeTip=!1,t.timer=void 0,t}return Object(m["a"])(e,t),Object(f["a"])(e,[{key:"onExportStatusChanged",value:function(t){t&&this.saveJsonData()}},{key:"onDeleteNodeChanged",value:function(t){t&&this.handleDeleteNode()}},{key:"onNodeTypeChanged",value:function(t){var e=this;this.nodes.forEach(function(n){n.id===e.settingNodeId&&(n.type=t)})}},{key:"onImportJsonDataChanged",value:function(t){var e=JSON.parse(JSON.stringify(t)),n=e.nodes,a=e.edges;this.nodes=n,this.edges=a}},{key:"rectClass",value:function(t){return{selected:t.selected,"to-link":this.graphState.toLink,setting:this.settingNodeId===t.id,virtual:"virtual"===t.type}}},{key:"saveJsonData",value:function(){var t=this.nodes,e=this.edges;if(0===t.length||0===e.length)return alert("流程配置未给出，无法导出数据"),this.$emit("update:saveStatus",!1),!1;var n={nodes:t,edges:e};this.$emit("export-json",n)}},{key:"handleDeleteNode",value:function(){var t=this,e=this.nodes.findIndex(function(e){return e.id===t.settingNodeId});-1!==e&&(this.nodes.splice(e,1),this.edges=this.edges.filter(function(e){return e.source!==t.settingNodeId&&e.target!==t.settingNodeId})),this.$emit("update:deleteNode",!1),alert("成功移除节点！")}},{key:"codeExist",value:function(t){var e=this.nodes.findIndex(function(e){return e.id===t});return-1!==e&&(alert("请勿增加重复节点！"),!0)}},{key:"createNode",value:function(t){if(this.createNodeLock)alert("生成节点中..(please wait or ignore this...)");else if(this.createNodeLock=!0,null!==t.dataTransfer){var e=t.dataTransfer.getData("item"),n=JSON.parse(e),a=n.id,o=n.title;if(this.createNodeLock=!1,this.codeExist(a))return!1;var i=t.offsetX,s=t.offsetY,r=i-Q/2,c=s-V/2,d={id:a,title:o,type:"real",x:r,y:c,selected:!1,linkNode:{top:{x:i,y:c},bottom:{x:i,y:s+V/2},left:{x:r,y:s},right:{x:i+Q/2,y:s}}};this.nodes.push(d),this.toggleIsDragging(!1)}}},{key:"linkDotIsLeftOrRight",value:function(t,e,n){var a=t.startX,o=t.startY,i=t.endX,s=t.endY,r=U(t);if(""!==r)return r;var c=q(t);if(""!==c)return c;var d=Math.abs(o-s),u=3;d<u&&(s=o,this.nodes.forEach(function(t){if(t.id===e.target)return t.y=n,t}));var l=H(a,o,i,s),h=l.midX1,v=l.midY1,f=l.midX2,p=l.midY2;return"M ".concat(a,",").concat(o," L ").concat(h,",").concat(v," L ").concat(f,",").concat(p," L ").concat(i,",").concat(s)}},{key:"linkDotIsTopOrBottom",value:function(t){var e=t.startX,n=t.startY,a=t.endX,o=t.endY,i=K(t);if(""!==i)return i;var s=Z(t);if(""!==s)return s;a=$(e,a);var r=R(e,n,a,o),c=r.midX1,d=r.midY1,u=r.midX2,l=r.midY2;return"M ".concat(e,",").concat(n," L ").concat(c,",").concat(d," L ").concat(u,",").concat(l," L ").concat(a,",").concat(o)}},{key:"linkDotIsOthers",value:function(t){var e=t.startX,n=t.startY,a=t.endX,o=t.endY;return"M ".concat(e,",").concat(n," L ").concat(a,",").concat(o)}},{key:"edgeData",value:function(t){var e=t.dotLink,n=t.dotEndLink;if(t.source&&t.target){var a=this.nodes.find(function(e){return e.id===t.source}),o=a.linkNode,i=a.y,s=this.nodes.find(function(e){return e.id===t.target}),r=s.linkNode,c=o[e].x,d=o[e].y,u=r[n].x,l=r[n].y,h={dotLink:e,dotEndLink:n,startX:c,startY:d,endX:u,endY:l},v=U(h);return""!==v?v:"top"!==e&&"bottom"!==e&&"top"!==n&&"bottom"!==n?this.linkDotIsLeftOrRight(h,t,i):"left"!==e&&"right"!==e&&"left"!==n&&"right"!==n?this.linkDotIsTopOrBottom(h):this.linkDotIsOthers(h)}return!1}},{key:"edgeExist",value:function(t,e){var n=this.edges.findIndex(function(n){return t===n.source&&e===n.target});return n}},{key:"startLinkNode",value:function(t){this.toggleToLink(!0),this.dotLink=t}},{key:"endLinkedNode",value:function(t,e){if(null!==this.mousedownNode&&this.mousedownNode!==e){var n=this.mousedownNode.id,a=e.id,o=-1;if(this.edges.length>0&&(o=this.edgeExist(n,a)),-1===o){var i=this.dotLink,s={id:F(),source:n,target:a,selected:!1,dotLink:i,dotEndLink:t};this.edges.push(s)}}}},{key:"svgMousemove",value:function(t){var e=this.mousedownNode,n=t.movementX,a=t.movementY;if(null!==e&&(this.isLinking&&(this.lineDragData=this.caclPathDragData(e,t)),this.nodeCanDrag)){e.x+=n,e.y+=a;var o=e.x+Q/2,i=e.y+V/2;e.linkNode={top:{x:o,y:e.y},bottom:{x:o,y:e.y+V},left:{x:e.x,y:i},right:{x:e.x+Q,y:i}},this.mousedownNode=e}}},{key:"caclPathDragData",value:function(t,e){var n=e.offsetX,a=e.offsetY,o=t.linkNode,i=this.dotLink,s=o[i].x,r=o[i].y;return"M ".concat(s,",").concat(r," L ").concat(n,",").concat(a)}},{key:"svgMouseUp",value:function(){this.unSelectedNodes(),this.closeDeleteTip(),this.toggleToLink(!1),this.mousedownNode=null,this.lineDragData="",this.isLinking=!1,this.nodeCanDrag=!0,this.dotLink=""}},{key:"dragSvgNode",value:function(t){this.unSelectedAll(),this.recoverySideBar(),t.selected=!0,this.changSelectedNode(t),this.mousedownNode=t,this.graphState.toLink&&(this.isLinking=!0,this.nodeCanDrag=!1)}},{key:"recoverySideBar",value:function(){this.settingNodeId=0,this.$emit("recovery-side-bar")}},{key:"rightMenu",value:function(t,e){t.preventDefault(),this.unSelectedAll(),this.settingNodeId=e.id,this.$emit("setting-node",{id:e.id,type:e.type})}},{key:"clickPath",value:function(t,e){this.unSelectedAll(),this.recoverySideBar(),e.selected=!0,this.changSelectedEdge(e);var n=t.layerX,a=t.layerY;this.tipX=n,this.tipY=a,this.deleteTip=e.id}},{key:"deletePath",value:function(){var t=this.deleteTip,e=this.edges.findIndex(function(e){return e.id===t});-1!==e&&(this.edges.splice(e,1),alert("连接路径已删除")),this.closeDeleteTip()}},{key:"closeDeleteTip",value:function(){var t=this;0!==this.deleteTip&&(this.closeTip=!0,void 0===this.timer&&(this.timer=setTimeout(function(){t.deleteTip=0,t.closeTip=!1,t.timer=void 0},188)))}},{key:"unSelectedNodes",value:function(){this.nodes.forEach(function(t){return t.selected=!1,t})}},{key:"unSelectedEdges",value:function(){this.edges.forEach(function(t){return t.selected=!1,t})}},{key:"unSelectedAll",value:function(){this.unSelectedNodes(),this.unSelectedEdges()}}]),e}(k["c"]);y["a"]([Object(k["b"])()],tt.prototype,"saveStatus",void 0),y["a"]([Object(k["b"])()],tt.prototype,"deleteNode",void 0),y["a"]([Object(k["b"])()],tt.prototype,"nodeType",void 0),y["a"]([Object(k["b"])()],tt.prototype,"importJsonData",void 0),y["a"]([Object(O["b"])("graphState")],tt.prototype,"graphState",void 0),y["a"]([Object(O["a"])("changSelectedNode")],tt.prototype,"changSelectedNode",void 0),y["a"]([Object(O["a"])("changSelectedEdge")],tt.prototype,"changSelectedEdge",void 0),y["a"]([Object(O["a"])("toggle_toLink")],tt.prototype,"toggleToLink",void 0),y["a"]([Object(O["a"])("toggle_isDragging")],tt.prototype,"toggleIsDragging",void 0),y["a"]([Object(k["d"])("saveStatus")],tt.prototype,"onExportStatusChanged",null),y["a"]([Object(k["d"])("deleteNode")],tt.prototype,"onDeleteNodeChanged",null),y["a"]([Object(k["d"])("nodeType")],tt.prototype,"onNodeTypeChanged",null),y["a"]([Object(k["d"])("importJsonData",{deep:!0})],tt.prototype,"onImportJsonDataChanged",null),tt=y["a"]([k["a"]],tt);var et=tt,nt=et,at=(n("2991"),Object(s["a"])(nt,_,M,!1,null,"1e44ab74",null)),ot=at.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"graph-show-container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.showTip,expression:"showTip !== 0"}],staticClass:"tip-block",class:{"tip-close":t.closeTip},style:{transform:"translate("+t.tipX+"px,"+t.tipY+"px)"}},[n("div",{staticClass:"title"},[t._v("节点参数")]),t._m(0)]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.svgReady,expression:"svgReady"}],staticClass:"svg-box"},[n("svg",{staticClass:"zone",attrs:{preserveAspectRatio:"xMinYMin meet"},on:{mouseup:t.closeNodeInfoTip}},[n("defs",[n("marker",{attrs:{id:"mark-arrow",viewBox:"0 0 11 11",refX:"8",refY:"6",markerWidth:"10",markerHeight:"10",orient:"auto"}},[n("path",{attrs:{d:"M1,2 L8,6 L1,10 Z"}})])]),n("g",{staticClass:"graph",attrs:{x:"0",y:"0"}},[n("g",t._l(t.edges,function(e){return n("path",{key:e.id,staticClass:"link",attrs:{d:t.edgeData(e),"marker-end":"url(#mark-arrow)"}})}),0),n("g",t._l(t.nodes,function(e,a){return n("g",{key:a,staticClass:"node-container",attrs:{transform:"translate("+e.x+","+e.y+")"},on:{mousedown:function(n){return t.showNodeInfoTip(n,e.id)}}},[n("rect",{staticClass:"node",class:{active:t.showTip===e.id,virtual:"virtual"===e.type},attrs:{width:t.rectWidth,height:t.rectHeight,rx:"2",ry:"2"}}),n("circle",{staticClass:"link-dot",attrs:{cx:"0",cy:"35"}}),n("circle",{staticClass:"link-dot",attrs:{cx:"140",cy:"35"}}),n("svg",{attrs:{width:t.rectWidth,height:t.rectHeight}},[n("text",{attrs:{x:"50%",y:"45%","alignment-baseline":"middle","text-anchor":"middle"}},[n("tspan",[t._v(t._s(e.id))])]),n("text",{attrs:{x:"50%",y:"75%","alignment-baseline":"middle","text-anchor":"middle"}},[n("tspan",[t._v(t._s(e.title))])])])])}),0)])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.svgReady,expression:"!svgReady"}],staticClass:"nothing-showing"},[t._v("\n    当前暂未配置任何流程\n  ")])])},st=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"attr-block"},[n("div",{staticClass:"attr"},[n("div",{staticClass:"head"},[t._v("节点信息")]),n("div",{staticClass:"content"},[t._v("无")])])])}],rt=null,ct=function(t){function e(){var t;return Object(v["a"])(this,e),t=Object(p["a"])(this,Object(g["a"])(e).apply(this,arguments)),t.edges=[],t.nodes=[],t.rectWidth="141px",t.rectHeight="70px",t.showTip=0,t.closeTip=!1,t.tipX=0,t.tipY=0,t}return Object(m["a"])(e,t),Object(f["a"])(e,[{key:"onJsonDataChanged",value:function(t){var e=t.nodes,n=t.edges,a=t.nodesInfo;e.length>0&&n.length>0&&(this.edges=n,this.nodes=e,this.nodesInfo=a)}},{key:"linkDotIsLeftOrRight",value:function(t,e,n){var a=t.startX,o=t.startY,i=t.endX,s=t.endY,r=U(t);if(""!==r)return r;var c=q(t);if(""!==c)return c;var d=Math.abs(o-s),u=3;d<u&&(s=o,this.nodes.forEach(function(t){if(t.id===e.target)return t.y=n,t}));var l=H(a,o,i,s),h=l.midX1,v=l.midY1,f=l.midX2,p=l.midY2;return"M ".concat(a,",").concat(o," L ").concat(h,",").concat(v," L ").concat(f,",").concat(p," L ").concat(i,",").concat(s)}},{key:"linkDotIsTopOrBottom",value:function(t){var e=t.startX,n=t.startY,a=t.endX,o=t.endY,i=K(t);if(""!==i)return i;var s=Z(t);if(""!==s)return s;var r=Math.abs(e-a),c=3;r<c&&(a=e);var d=R(e,n,a,o),u=d.midX1,l=d.midY1,h=d.midX2,v=d.midY2;return"M ".concat(e,",").concat(n," L ").concat(u,",").concat(l," L ").concat(h,",").concat(v," L ").concat(a,",").concat(o)}},{key:"linkDotIsOthers",value:function(t){var e=t.startX,n=t.startY,a=t.endX,o=t.endY;return"M ".concat(e,",").concat(n," L ").concat(a,",").concat(o)}},{key:"edgeData",value:function(t){var e=t.dotLink,n=t.dotEndLink;if(t.source&&t.target){var a=this.nodes.find(function(e){return e.id===t.source}),o=a.linkNode,i=a.y,s=this.nodes.find(function(e){return e.id===t.target}),r=s.linkNode,c=o[e].x,d=o[e].y,u=r[n].x,l=r[n].y,h={dotLink:e,dotEndLink:n,startX:c,startY:d,endX:u,endY:l};return"top"!==e&&"bottom"!==e&&"top"!==n&&"bottom"!==n?this.linkDotIsLeftOrRight(h,t,i):"left"!==e&&"right"!==e&&"left"!==n&&"right"!==n?this.linkDotIsTopOrBottom(h):this.linkDotIsOthers(h)}return!1}},{key:"showNodeInfoTip",value:function(t,e){var n=t.layerX,a=t.layerY;this.tipX=n,this.tipY=a,this.showTip=e}},{key:"closeNodeInfoTip",value:function(){var t=this;0!==this.showTip&&(this.closeTip=!0,null===rt&&(rt=setTimeout(function(){t.showTip=0,t.closeTip=!1,rt=null},188)))}},{key:"svgReady",get:function(){return this.edges.length>0&&this.nodes.length>0}}]),e}(k["c"]);y["a"]([Object(k["b"])()],ct.prototype,"jsonData",void 0),y["a"]([Object(k["d"])("jsonData",{deep:!0})],ct.prototype,"onJsonDataChanged",null),ct=y["a"]([k["a"]],ct);var dt=ct,ut=dt,lt=(n("e2e8"),Object(s["a"])(ut,it,st,!1,null,"2bf44197",null)),ht=lt.exports,vt=function(t){function e(){var t;return Object(v["a"])(this,e),t=Object(p["a"])(this,Object(g["a"])(e).apply(this,arguments)),t.saveStatus=!1,t.jsonData={nodes:[],edges:[],nodesInfo:[]},t.importJsonData={nodes:[],edges:[],nodesInfo:[]},t.settingNodeId=0,t.nodeType="real",t.deleteNode=!1,t}return Object(m["a"])(e,t),Object(f["a"])(e,[{key:"onJsonDataChanged",value:function(t){var e=t.nodes,n=t.edges;t.nodesInfo;e.length>0&&n.length}},{key:"exportJSON",value:function(){this.saveStatus=!0}},{key:"handleExportJSON",value:function(t){this.jsonData=Object.assign(this.jsonData,t)}},{key:"handleDeleteNode",value:function(){!1===this.deleteNode?this.deleteNode=!0:alert("当前删除状态出错，请重试")}},{key:"handleNodeSetting",value:function(t){var e=t.id,n=t.type;this.settingNodeId=e,this.nodeType=n}},{key:"handleRecoverySideBar",value:function(){this.settingNodeId=0,this.nodeType="real"}},{key:"recoverySave",value:function(){this.saveStatus=!1,this.jsonData={nodes:[],edges:[],nodesInfo:[]}}}]),e}(k["c"]);y["a"]([Object(k["d"])("jsonData",{deep:!0})],vt.prototype,"onJsonDataChanged",null),vt=y["a"]([Object(k["a"])({components:{SideBar:X,Graph:ot,GraphShow:ht}})],vt);var ft=vt,pt=ft,gt=(n("471e"),Object(s["a"])(pt,l,h,!1,null,"5cc1400d",null)),mt=gt.exports;a["a"].use(u["a"]);var yt=new u["a"]({routes:[{path:"/",name:"flowchart",component:mt}]}),kt=n("2f62"),bt={state:{graphState:{selectedNode:null,selectedEdge:null,isDragging:!1,toLink:!1}},mutations:{CHANGE_SELECTEDNODE:function(t,e){t.graphState.selectedNode=e},CHANGE_SELECTEDEDGE:function(t,e){t.graphState.selectedEdge=e},TOGGLE_ISDRAGGING:function(t,e){t.graphState.isDragging=e},TOGGLE_TOLINK:function(t,e){t.graphState.toLink=e}},actions:{changSelectedNode:function(t,e){t.commit("CHANGE_SELECTEDNODE",e),t.commit("CHANGE_SELECTEDEDGE",null)},changSelectedEdge:function(t,e){t.commit("CHANGE_SELECTEDEDGE",e),t.commit("CHANGE_SELECTEDNODE",null)},toggle_isDragging:function(t,e){t.commit("TOGGLE_ISDRAGGING",e)},toggle_toLink:function(t,e){t.commit("TOGGLE_TOLINK",e)}}},Nt=bt,Lt={graphState:function(t){return t.graph.graphState}},xt=Lt;a["a"].use(kt["a"]);var Ot=new kt["a"].Store({modules:{graph:Nt},getters:xt});a["a"].config.productionTip=!1,new a["a"]({router:yt,store:Ot,render:function(t){return t(d)}}).$mount("#app")},e2e8:function(t,e,n){"use strict";var a=n("c2ac"),o=n.n(a);o.a}});
//# sourceMappingURL=app.3fe021aa.js.map