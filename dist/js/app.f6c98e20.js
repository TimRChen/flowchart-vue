(function(t){function e(e){for(var a,s,r=e[0],d=e[1],c=e[2],l=0,h=[];l<r.length;l++)s=r[l],o[s]&&h.push(o[s][0]),o[s]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var d=n[r];0!==o[d]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=d;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"059f":function(t,e,n){"use strict";var a=n("555b"),o=n.n(a);o.a},"4d11":function(t,e,n){},"4fa2":function(t,e,n){"use strict";var a=n("d656"),o=n.n(a);o.a},"555b":function(t,e,n){},"5fc3":function(t,e,n){"use strict";var a=n("b382"),o=n.n(a);o.a},"7faf":function(t,e,n){"use strict";var a=n("8fba"),o=n.n(a);o.a},"8fba":function(t,e,n){},"9c7f":function(t,e,n){"use strict";var a=n("d704"),o=n.n(a);o.a},abc2:function(t,e,n){"use strict";var a=n("4d11"),o=n.n(a);o.a},b382:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],s=(n("7faf"),n("2877")),r={},d=Object(s["a"])(r,o,i,!1,null,null,null),c=d.exports,u=n("8c4f"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flow-chart-container"},[n("div",{staticClass:"flow-chart-config"},[n("Graph",{attrs:{"import-json-data":t.importJsonData,"node-type":t.nodeType,"save-status":t.saveStatus,"delete-node":t.deleteNode},on:{"update:saveStatus":function(e){t.saveStatus=e},"update:save-status":function(e){t.saveStatus=e},"update:deleteNode":function(e){t.deleteNode=e},"update:delete-node":function(e){t.deleteNode=e},"export-json":t.handleExportJSON,"setting-node":t.handleNodeSetting,"recovery-side-bar":t.handleRecoverySideBar}}),n("SideBar",{attrs:{"import-json-data":t.importJsonData,"node-type":t.nodeType,"save-status":t.saveStatus,"setting-node-id":t.settingNodeId},on:{"update:nodeType":function(e){t.nodeType=e},"update:node-type":function(e){t.nodeType=e},"update:saveStatus":function(e){t.saveStatus=e},"update:save-status":function(e){t.saveStatus=e},"export-json":t.handleExportJSON,"delete-node":t.handleDeleteNode}})],1),n("GraphShow",{attrs:{"json-data":t.jsonData}}),n("div",{staticClass:"control"},[n("div",{staticClass:"export-btn btn",on:{click:t.exportJSON}},[t._v("导出JSON")])])],1)},h=[],f=n("d225"),v=n("b0b4"),g=n("308d"),p=n("6bb5"),y=n("4e2b"),m=n("9ab4"),k=n("60a3"),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side-bar-container"},[n("div",{staticClass:"nav-bar"},[n("div",{staticClass:"nav",class:{active:"流程状态"===t.nav},on:{click:function(e){return t.chooseNav("流程状态")}}},[t._v("\n      流程状态\n    ")]),n("div",{staticClass:"split"}),n("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.settingNodeId,expression:"settingNodeId !== 0"}],staticClass:"nav",class:{active:"状态设置"===t.nav},on:{click:function(e){return t.chooseNav("状态设置")}}},[t._v("\n      状态设置\n    ")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"status-content"},[n("div",{staticClass:"list"},t._l(t.list,function(t,e){return n("Node",{key:e,attrs:{"node-item":t}})}),1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showSetting,expression:"showSetting"}],staticClass:"setting-status"},[n("div",{staticClass:"node-attr normal-block"},[n("div",{staticClass:"title"},[t._v("节点属性")]),n("div",{staticClass:"btn-g"},[n("button",{class:{active:"real"===t.nodeType},on:{click:function(e){return t.chooseNodeType("real")}}},[t._v("\n          实节点\n        ")]),n("button",{class:{active:"virtual"===t.nodeType},on:{click:function(e){return t.chooseNodeType("virtual")}}},[t._v("\n          虚节点\n        ")])]),n("div",{staticClass:"control-btn-group"},[n("div",{staticClass:"delete-node btn"},[n("button",{on:{click:t.deleteNode}},[t._v("删除节点")])])])])])])},b=[],S=(n("7514"),n("20d6"),n("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"node",attrs:{draggable:"true"},on:{dragstart:function(e){return t.dragstart(e,t.nodeItem)},dragend:t.dragend}},[n("div",{staticClass:"id text"},[t._v(t._s(t.nodeItem.id))]),n("div",{staticClass:"title text"},[t._v(t._s(t.nodeItem.title))])])}),L=[],x=n("4bb5"),w=function(t){function e(){return Object(f["a"])(this,e),Object(g["a"])(this,Object(p["a"])(e).apply(this,arguments))}return Object(y["a"])(e,t),Object(v["a"])(e,[{key:"dragstart",value:function(t,e){this.toggleIsDragging(!0),null!==t.dataTransfer&&t.dataTransfer.setData("item",JSON.stringify(e))}},{key:"dragend",value:function(t){this.toggleIsDragging(!1),null!==t.dataTransfer&&t.dataTransfer.clearData()}}]),e}(k["c"]);m["a"]([Object(k["b"])()],w.prototype,"nodeItem",void 0),m["a"]([Object(x["a"])("toggle_isDragging")],w.prototype,"toggleIsDragging",void 0),w=m["a"]([k["a"]],w);var O=w,D=O,C=(n("059f"),Object(s["a"])(D,S,L,!1,null,"3fbb17d2",null)),j=C.exports,E=function(t){function e(){var t;return Object(f["a"])(this,e),t=Object(g["a"])(this,Object(p["a"])(e).apply(this,arguments)),t.nav="流程状态",t.statusText="",t.list=[{id:1,title:"新建"},{id:2,title:"完成"},{id:3,title:"待审核"},{id:4,title:"已审核"},{id:5,title:"审核失败"}],t.nodesInfo=[],t}return Object(y["a"])(e,t),Object(v["a"])(e,[{key:"onSettingNodeIdChanged",value:function(t){var e=this;0!==t?(this.nav="状态设置",this.addNodeInfo(t).then(function(t){e.previewNodeSetting(t)})):this.initialSetting()}},{key:"onSaveStatusChanged",value:function(t){t&&this.saveJsonData()}},{key:"onImportJsonDataChanged",value:function(t){var e=JSON.parse(JSON.stringify(t)),n=e.nodeInfoList;this.nodesInfo=n}},{key:"saveJsonData",value:function(){var t=this.nodesInfo,e={nodesInfo:t};this.$emit("export-json",e)}},{key:"initialSetting",value:function(){this.nav="流程状态"}},{key:"chooseNav",value:function(t){this.nav=t}},{key:"handleTypeChanged",value:function(t){var e=this;this.nodesInfo.forEach(function(n){return n.id===e.settingNodeId&&(n.type="real"===t?1:2),n})}},{key:"chooseNodeType",value:function(t){0!==this.settingNodeId?(this.$emit("update:nodeType",t),this.handleTypeChanged(t)):this.noNodeError()}},{key:"idExist",value:function(t){var e=this.nodesInfo.findIndex(function(e){return e.id===t});return-1!==e}},{key:"addNodeInfo",value:function(t){var e=this;return new Promise(function(n){if(e.idExist(t))n(t);else{var a={id:t,type:1,desc:"",postDoAction:"",doAction:"",preDoAction:"",nodeCondition:""};e.nodesInfo.push(a),n(t)}})}},{key:"previewNodeSetting",value:function(t){var e=this.nodesInfo.find(function(e){return e.id===t}),n=e.type,a=1===n?"real":"virtual";this.$emit("update:nodeType",a)}},{key:"deleteNode",value:function(){var t=this;if(0===this.settingNodeId)return this.noNodeError(),!1;if(window.confirm("确认移除当前选中节点？")){var e=this.nodesInfo.findIndex(function(e){return e.id===t.settingNodeId});this.nodesInfo=this.nodesInfo.splice(e,1),this.$emit("delete-node"),this.initialSetting()}}},{key:"noNodeError",value:function(){alert("当前尚未选择节点，不可进行操作！")}},{key:"showList",get:function(){return"流程状态"===this.nav}},{key:"showSetting",get:function(){return"状态设置"===this.nav}}]),e}(k["c"]);m["a"]([Object(k["b"])()],E.prototype,"settingNodeId",void 0),m["a"]([Object(k["b"])()],E.prototype,"nodeType",void 0),m["a"]([Object(k["b"])()],E.prototype,"saveStatus",void 0),m["a"]([Object(k["b"])()],E.prototype,"importJsonData",void 0),m["a"]([Object(k["d"])("settingNodeId")],E.prototype,"onSettingNodeIdChanged",null),m["a"]([Object(k["d"])("saveStatus")],E.prototype,"onSaveStatusChanged",null),m["a"]([Object(k["d"])("importJsonData",{deep:!0})],E.prototype,"onImportJsonDataChanged",null),E=m["a"]([Object(k["a"])({components:{Node:j}})],E);var I=E,_=I,T=(n("9c7f"),Object(s["a"])(_,N,b,!1,null,"ef95a384",null)),Y=T.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"graph-container"},[n("div",{staticClass:"svg-box",on:{drop:t.createNode,dragover:function(t){t.preventDefault()}}},[n("svg",{staticClass:"zone",class:{active:t.graphState.isDragging},on:{mousemove:function(e){return t.svgMousemove(e)},mouseup:t.svgMouseUp}},[n("defs",[n("marker",{attrs:{id:"mark-arrow",viewBox:"0 0 11 11",refX:"8",refY:"6",markerWidth:"10",markerHeight:"10",orient:"auto"}},[n("path",{attrs:{d:"M1,2 L8,6 L1,10 Z"}})])]),n("g",{staticClass:"graph"},[n("path",{directives:[{name:"show",rawName:"v-show",value:t.isLinking,expression:"isLinking"}],staticClass:"link dragline",attrs:{d:t.lineDragData,"marker-end":"url(#mark-arrow)"}}),n("g",t._l(t.edges,function(e){return n("path",{key:e.id,class:["link","link-active",{selected:e.selected}],attrs:{d:t.edgeData(e),"marker-end":"url(#mark-arrow)"},on:{click:function(n){return t.clickEdge(e)}}})}),0),n("g",t._l(t.nodes,function(e,a){return n("g",{key:a,staticClass:"node-container",attrs:{transform:"translate("+e.x+","+e.y+")"},on:{mousedown:function(n){return t.dragNode(e)},contextmenu:function(n){return t.rightMenu(n,e)}}},[n("rect",{staticClass:"node",class:t.rectClass(e),attrs:{width:t.rectWidth,height:t.rectHeight,rx:"2",ry:"2"}}),n("circle",{staticClass:"link-dot",class:{"active-dot":"left"===t.dotLink&&e===t.mousedownNode},attrs:{cx:"0",cy:"35"},on:{mousedown:function(e){return t.startLinkNode("left")},mouseup:function(n){return t.endLinkedNode("left",e)}}}),n("circle",{staticClass:"link-dot",class:{"active-dot":"right"===t.dotLink&&e===t.mousedownNode},attrs:{cx:"141",cy:"35"},on:{mousedown:function(e){return t.startLinkNode("right")},mouseup:function(n){return t.endLinkedNode("right",e)}}}),n("svg",{attrs:{width:t.rectWidth,height:t.rectHeight}},[n("text",{attrs:{x:"50%",y:"45%","alignment-baseline":"middle","text-anchor":"middle"}},[n("tspan",[t._v(t._s(e.id))])]),n("text",{attrs:{x:"50%",y:"75%","alignment-baseline":"middle","text-anchor":"middle"}},[n("tspan",[t._v(t._s(e.title))])])])])}),0)])])])])},J=[],M=141,G=70;function A(t,e,n,a){var o=(t+n)/2,i=e,s=o,r=a;return{midX1:o,midY1:i,midX2:s,midY2:r}}function $(t,e,n,a){var o=t,i=(e+a)/2,s=n,r=i;return{midX1:o,midY1:i,midX2:s,midY2:r}}function H(t,e,n,a){var o=2*Math.abs(t-n);(0===o||o<2*M)&&(o=88),o>2*M&&(o=88);var i=t>n?n:t,s=i-o,r=e,d=a;return{midX:s,midY1:r,midY2:d}}function R(t,e,n,a){var o=2*Math.abs(t-n);(0===o||o<2*M)&&(o=88),o>2*M&&(o=88);var i=t>n?t:n,s=i+o,r=e,d=a;return{midX:s,midY1:r,midY2:d}}function B(t,e,n,a){var o=t+M/4,i=(e+a)/2,s=n-M/4;return{dotX1:o,dotY1:e,dotX2:o,dotY2:i,dotX3:s,dotY3:i,dotX4:s,dotY4:a}}function P(t,e,n,a){var o=t-M/4,i=(e+a)/2,s=n+M/4;return{dotX1:o,dotY1:e,dotX2:o,dotY2:i,dotX3:s,dotY3:i,dotX4:s,dotY4:a}}function W(t){var e=t.dotLink,n=t.dotEndLink,a=t.startX,o=t.startY,i=t.endX,s=t.endY;if("left"===e&&"left"===n){var r=H(a,o,i,s),d=r.midX,c=r.midY1,u=r.midY2;return"M ".concat(a,",").concat(o," L ").concat(d,",").concat(c," L ").concat(d,",").concat(u," L ").concat(i,",").concat(s)}if("right"===e&&"right"===n){var l=R(a,o,i,s),h=l.midX,f=l.midY1,v=l.midY2;return"M ".concat(a,",").concat(o," L ").concat(h,",").concat(f," L ").concat(h,",").concat(v," L ").concat(i,",").concat(s)}return""}function z(t){var e=t.dotLink,n=t.dotEndLink,a=t.startX,o=t.startY,i=t.endX,s=t.endY;if("left"===e&&"right"===n){if(a<i){if(a+2*M<i){var r=P(a,o,i,s),d=r.dotX1,c=r.dotY1,u=r.dotX2,l=r.dotY2,h=r.dotX3,f=r.dotY3,v=r.dotX4,g=r.dotY4;return"M ".concat(a,",").concat(o," L ").concat(d,",").concat(c," L ").concat(u,",").concat(l," L ").concat(h,",").concat(f," L ").concat(v,",").concat(g," L ").concat(i,",").concat(s)}if(a+2*M>=i){var p=a+M/2,y=o+G/2,m=i-M/2,k=s-G/2;o>s&&(y=o-G/2,k=s+G/2);var N=Math.abs(p-m),b=3;N<b&&(m=p);var S=$(p,y,m,k),L=S.midX1,x=S.midY1,w=S.midX2,O=S.midY2;return"M ".concat(p,",").concat(y," L ").concat(L,",").concat(x," L ").concat(w,",").concat(O," L ").concat(m,",").concat(k)}}}else if("right"===e&&"left"===n&&a>i){if(i+2*M<a){var D=B(a,o,i,s),C=D.dotX1,j=D.dotY1,E=D.dotX2,I=D.dotY2,_=D.dotX3,T=D.dotY3,Y=D.dotX4,X=D.dotY4;return"M ".concat(a,",").concat(o," L ").concat(C,",").concat(j," L ").concat(E,",").concat(I," L ").concat(_,",").concat(T," L ").concat(Y,",").concat(X," L ").concat(i,",").concat(s)}if(i+2*M>=a){var J=a-M/2,A=o+G/2,H=i+M/2,R=s-G/2;o>s&&(A=o-G/2,R=s+G/2);var W=Math.abs(J-H),z=3;W<z&&(H=J);var K=$(J,A,H,R),U=K.midX1,Z=K.midY1,q=K.midX2,F=K.midY2;return"M ".concat(J,",").concat(A," L ").concat(U,",").concat(Z," L ").concat(q,",").concat(F," L ").concat(H,",").concat(R)}}return""}var K=1,U=141,Z=70,q=function(t){function e(){var t;return Object(f["a"])(this,e),t=Object(g["a"])(this,Object(p["a"])(e).apply(this,arguments)),t.nodes=[],t.edges=[],t.rectWidth="141px",t.rectHeight="70px",t.isLinking=!1,t.nodeCanDrag=!0,t.lineDragData="",t.mousedownNode=null,t.dotLink="",t.settingNodeId=0,t.createNodeLock=!1,t}return Object(y["a"])(e,t),Object(v["a"])(e,[{key:"onExportStatusChanged",value:function(t){t&&this.saveJsonData()}},{key:"onDeleteNodeChanged",value:function(t){t&&this.handleDeleteNode()}},{key:"onNodeTypeChanged",value:function(t){var e=this;this.nodes.forEach(function(n){n.id===e.settingNodeId&&(n.type=t)})}},{key:"onImportJsonDataChanged",value:function(t){var e=JSON.parse(JSON.stringify(t)),n=e.nodes,a=e.edges;this.nodes=n,this.edges=a}},{key:"rectClass",value:function(t){return{selected:t.selected,"to-link":this.graphState.toLink,setting:this.settingNodeId===t.id,virtual:"virtual"===t.type}}},{key:"saveJsonData",value:function(){var t=this.nodes,e=this.edges;if(0===t.length||0===e.length)return alert("流程配置未给出，无法导出数据"),this.$emit("update:saveStatus",!1),!1;var n={nodes:t,edges:e};this.$emit("export-json",n)}},{key:"handleDeleteNode",value:function(){var t=this,e=this.nodes.findIndex(function(e){return e.id===t.settingNodeId});-1!==e&&(this.nodes.splice(e,1),this.edges=this.edges.filter(function(e){return e.source!==t.settingNodeId&&e.target!==t.settingNodeId})),this.$emit("update:deleteNode",!1),alert("成功移除节点！")}},{key:"codeExist",value:function(t){var e=this.nodes.findIndex(function(e){return e.id===t});return-1!==e&&(alert("请勿增加重复节点！"),!0)}},{key:"createNode",value:function(t){if(this.createNodeLock)alert("正在生成节点，请稍等..");else if(this.createNodeLock=!0,null!==t.dataTransfer){var e=t.dataTransfer.getData("item"),n=JSON.parse(e),a=n.id,o=n.title;if(this.createNodeLock=!1,this.codeExist(a))return!1;var i=t.offsetX,s=t.offsetY,r={id:a,title:o,type:"real",x:i-U/2,y:s-Z/2,selected:!1,linkNode:{left:{x:i-U/2,y:s},right:{x:i+U/2,y:s}}};this.nodes.push(r),this.toggleIsDragging(!1)}}},{key:"edgeData",value:function(t){var e=t.dotLink,n=t.dotEndLink;if(t.source&&t.target){var a=this.nodes.find(function(e){return e.id===t.source}),o=a.linkNode,i=a.y,s=this.nodes.find(function(e){return e.id===t.target}),r=s.linkNode,d=0,c=0,u=0,l=0;"left"===e?(d=o.left.x,c=o.left.y):"right"===e&&(d=o.right.x,c=o.right.y),"left"===n?(u=r.left.x,l=r.left.y):"right"===n&&(u=r.right.x,l=r.right.y);var h={dotLink:e,dotEndLink:n,startX:d,startY:c,endX:u,endY:l},f=W(h);if(""!==f)return f;var v=z(h);if(""!==v)return v;var g=Math.abs(c-l),p=3;g<p&&(l=c,this.nodes.forEach(function(e){if(e.id===t.target)return e.y=i,e}));var y=A(d,c,u,l),m=y.midX1,k=y.midY1,N=y.midX2,b=y.midY2;return"M ".concat(d,",").concat(c," L ").concat(m,",").concat(k," L ").concat(N,",").concat(b," L ").concat(u,",").concat(l)}return!1}},{key:"nodeMousedown",value:function(t){this.unSelectedAll(),t.selected=!0,this.changSelectedNode(t),this.mousedownNode=t,this.graphState.toLink&&(this.isLinking=!0,this.nodeCanDrag=!1)}},{key:"startLinkNode",value:function(t,e){this.toggleToLink(!0),this.dotLink=t}},{key:"endLinkedNode",value:function(t,e){if(null!==this.mousedownNode&&this.mousedownNode!==e){var n=this.mousedownNode.id,a=e.id,o=-1;if(this.edges.length>0&&(o=this.edges.findIndex(function(t){return n===t.source&&a===t.target})),-1===o){var i=this.dotLink,s={id:K++,source:n,target:a,selected:!1,dotLink:i,dotEndLink:t};this.edges.push(s)}}}},{key:"svgMousemove",value:function(t){var e=this.mousedownNode,n=t.movementX,a=t.movementY;null!==e&&(this.isLinking&&(this.lineDragData=this.caclPathDragData(e,t)),this.nodeCanDrag&&(e.x+=n,e.y+=a,e.linkNode={left:{x:e.x,y:e.y+Z/2},right:{x:e.x+U,y:e.y+Z/2}},this.mousedownNode=e))}},{key:"caclPathDragData",value:function(t,e){var n=e.offsetX,a=e.offsetY,o=t.linkNode,i=0,s=0;return"left"===this.dotLink?(i=o.left.x,s=o.left.y):"right"===this.dotLink&&(i=o.right.x,s=o.right.y),"M ".concat(i,",").concat(s," L ").concat(n,",").concat(a)}},{key:"svgMouseUp",value:function(){this.unSelectedNodes(),this.toggleToLink(!1),this.mousedownNode=null,this.lineDragData="",this.isLinking=!1,this.nodeCanDrag=!0,this.dotLink=""}},{key:"svgMouseRightDown",value:function(){}},{key:"clickEdge",value:function(t){this.unSelectedAll(),this.recoverySideBar(),t.selected=!0,this.changSelectedEdge(t)}},{key:"dragNode",value:function(t){this.unSelectedAll(),this.recoverySideBar(),t.selected=!0,this.changSelectedNode(t),this.mousedownNode=t,this.graphState.toLink&&(this.isLinking=!0,this.nodeCanDrag=!1)}},{key:"recoverySideBar",value:function(){this.settingNodeId=0,this.$emit("recovery-side-bar")}},{key:"rightMenu",value:function(t,e){t.preventDefault(),this.unSelectedAll(),this.settingNodeId=e.id,this.$emit("setting-node",{id:e.id,type:e.type})}},{key:"unSelectedNodes",value:function(){this.nodes.forEach(function(t){return t.selected=!1,t})}},{key:"unSelectedEdges",value:function(){this.edges.forEach(function(t){return t.selected=!1,t})}},{key:"unSelectedAll",value:function(){this.unSelectedNodes(),this.unSelectedEdges()}}]),e}(k["c"]);m["a"]([Object(k["b"])()],q.prototype,"saveStatus",void 0),m["a"]([Object(k["b"])()],q.prototype,"deleteNode",void 0),m["a"]([Object(k["b"])()],q.prototype,"nodeType",void 0),m["a"]([Object(k["b"])()],q.prototype,"importJsonData",void 0),m["a"]([Object(x["b"])("graphState")],q.prototype,"graphState",void 0),m["a"]([Object(x["a"])("changSelectedNode")],q.prototype,"changSelectedNode",void 0),m["a"]([Object(x["a"])("changSelectedEdge")],q.prototype,"changSelectedEdge",void 0),m["a"]([Object(x["a"])("toggle_toLink")],q.prototype,"toggleToLink",void 0),m["a"]([Object(x["a"])("toggle_isDragging")],q.prototype,"toggleIsDragging",void 0),m["a"]([Object(k["d"])("saveStatus")],q.prototype,"onExportStatusChanged",null),m["a"]([Object(k["d"])("deleteNode")],q.prototype,"onDeleteNodeChanged",null),m["a"]([Object(k["d"])("nodeType")],q.prototype,"onNodeTypeChanged",null),m["a"]([Object(k["d"])("importJsonData",{deep:!0})],q.prototype,"onImportJsonDataChanged",null),q=m["a"]([k["a"]],q);var F=q,Q=F,V=(n("4fa2"),Object(s["a"])(Q,X,J,!1,null,"38cb2603",null)),tt=V.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"graph-show-container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0!==t.showTip,expression:"showTip !== 0"}],staticClass:"tip-block",class:{"tip-close":t.closeTip},style:{transform:"translate("+t.tipX+"px,"+t.tipY+"px)"}},[n("div",{staticClass:"title"},[t._v("节点参数")]),t._m(0)]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.svgReady,expression:"svgReady"}],staticClass:"svg-box"},[n("svg",{staticClass:"zone",attrs:{preserveAspectRatio:"xMinYMin meet"},on:{mouseup:t.closeNodeInfoTip}},[n("defs",[n("marker",{attrs:{id:"mark-arrow",viewBox:"0 0 11 11",refX:"8",refY:"6",markerWidth:"10",markerHeight:"10",orient:"auto"}},[n("path",{attrs:{d:"M1,2 L8,6 L1,10 Z"}})])]),n("g",{staticClass:"graph",attrs:{x:"0",y:"0"}},[n("g",t._l(t.edges,function(e){return n("path",{key:e.id,staticClass:"link",attrs:{d:t.edgeData(e),"marker-end":"url(#mark-arrow)"}})}),0),n("g",t._l(t.nodes,function(e,a){return n("g",{key:a,staticClass:"node-container",attrs:{transform:"translate("+e.x+","+e.y+")"},on:{mousedown:function(n){return t.showNodeInfoTip(n,e.id)}}},[n("rect",{staticClass:"node",class:{active:t.showTip===e.id,virtual:"virtual"===e.type},attrs:{width:t.rectWidth,height:t.rectHeight,rx:"2",ry:"2"}}),n("circle",{staticClass:"link-dot",attrs:{cx:"0",cy:"35"}}),n("circle",{staticClass:"link-dot",attrs:{cx:"141",cy:"35"}}),n("svg",{attrs:{width:t.rectWidth,height:t.rectHeight}},[n("text",{attrs:{x:"50%",y:"45%","alignment-baseline":"middle","text-anchor":"middle"}},[n("tspan",[t._v(t._s(e.id))])]),n("text",{attrs:{x:"50%",y:"75%","alignment-baseline":"middle","text-anchor":"middle"}},[n("tspan",[t._v(t._s(e.title))])])])])}),0)])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.svgReady,expression:"!svgReady"}],staticClass:"nothing-showing"},[t._v("\n    当前暂未配置任何流程\n  ")])])},nt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"attr-block"},[n("div",{staticClass:"attr"},[n("div",{staticClass:"head"},[t._v("节点信息")]),n("div",{staticClass:"content"},[t._v("无")])])])}],at=null,ot=function(t){function e(){var t;return Object(f["a"])(this,e),t=Object(g["a"])(this,Object(p["a"])(e).apply(this,arguments)),t.edges=[],t.nodes=[],t.rectWidth="141px",t.rectHeight="70px",t.showTip=0,t.closeTip=!1,t.tipX=0,t.tipY=0,t}return Object(y["a"])(e,t),Object(v["a"])(e,[{key:"onJsonDataChanged",value:function(t){var e=t.nodes,n=t.edges,a=t.nodesInfo;e.length>0&&n.length>0&&(this.edges=n,this.nodes=e,this.nodesInfo=a)}},{key:"edgeData",value:function(t){var e=t.dotLink,n=t.dotEndLink;if(t.source&&t.target){var a=this.nodes.find(function(e){return e.id===t.source}),o=a.linkNode,i=a.y,s=this.nodes.find(function(e){return e.id===t.target}),r=s.linkNode,d=0,c=0,u=0,l=0;"left"===e?(d=o.left.x,c=o.left.y):"right"===e&&(d=o.right.x,c=o.right.y),"left"===n?(u=r.left.x,l=r.left.y):"right"===n&&(u=r.right.x,l=r.right.y);var h={dotLink:e,dotEndLink:n,startX:d,startY:c,endX:u,endY:l},f=W(h);if(""!==f)return f;var v=z(h);if(""!==v)return v;var g=Math.abs(c-l),p=3;g<p&&(l=c,this.nodes.forEach(function(e){if(e.id===t.target)return e.y=i,e}));var y=A(d,c,u,l),m=y.midX1,k=y.midY1,N=y.midX2,b=y.midY2;return"M ".concat(d,",").concat(c," L ").concat(m,",").concat(k," L ").concat(N,",").concat(b," L ").concat(u,",").concat(l)}return!1}},{key:"showNodeInfoTip",value:function(t,e){var n=t.layerX,a=t.layerY;this.tipX=n,this.tipY=a,this.showTip=e}},{key:"closeNodeInfoTip",value:function(){var t=this;0!==this.showTip&&(this.closeTip=!0,null===at&&(at=setTimeout(function(){t.showTip=0,t.closeTip=!1,at=null},188)))}},{key:"svgReady",get:function(){return this.edges.length>0&&this.nodes.length>0}}]),e}(k["c"]);m["a"]([Object(k["b"])()],ot.prototype,"jsonData",void 0),m["a"]([Object(k["d"])("jsonData",{deep:!0})],ot.prototype,"onJsonDataChanged",null),ot=m["a"]([k["a"]],ot);var it=ot,st=it,rt=(n("abc2"),Object(s["a"])(st,et,nt,!1,null,"d2016678",null)),dt=rt.exports,ct=function(t){function e(){var t;return Object(f["a"])(this,e),t=Object(g["a"])(this,Object(p["a"])(e).apply(this,arguments)),t.saveStatus=!1,t.jsonData={nodes:[],edges:[],nodesInfo:[]},t.importJsonData={nodes:[],edges:[],nodesInfo:[]},t.settingNodeId=0,t.nodeType="real",t.deleteNode=!1,t}return Object(y["a"])(e,t),Object(v["a"])(e,[{key:"onJsonDataChanged",value:function(t){var e=t.nodes,n=t.edges;t.nodesInfo;e.length>0&&n.length}},{key:"exportJSON",value:function(){this.saveStatus=!0}},{key:"handleExportJSON",value:function(t){this.jsonData=Object.assign(this.jsonData,t)}},{key:"handleDeleteNode",value:function(){!1===this.deleteNode?this.deleteNode=!0:alert("当前删除状态出错，请重试")}},{key:"handleNodeSetting",value:function(t){var e=t.id,n=t.type;this.settingNodeId=e,this.nodeType=n}},{key:"handleRecoverySideBar",value:function(){this.settingNodeId=0,this.nodeType="real"}},{key:"recoverySave",value:function(){this.saveStatus=!1,this.jsonData={nodes:[],edges:[],nodesInfo:[]}}}]),e}(k["c"]);m["a"]([Object(k["d"])("jsonData",{deep:!0})],ct.prototype,"onJsonDataChanged",null),ct=m["a"]([Object(k["a"])({components:{SideBar:Y,Graph:tt,GraphShow:dt}})],ct);var ut=ct,lt=ut,ht=(n("5fc3"),Object(s["a"])(lt,l,h,!1,null,"89ec4704",null)),ft=ht.exports;a["a"].use(u["a"]);var vt=new u["a"]({routes:[{path:"/",name:"flowchart",component:ft}]}),gt=n("2f62"),pt={state:{graphState:{selectedNode:null,selectedEdge:null,isDragging:!1,toLink:!1}},mutations:{CHANGE_SELECTEDNODE:function(t,e){t.graphState.selectedNode=e},CHANGE_SELECTEDEDGE:function(t,e){t.graphState.selectedEdge=e},TOGGLE_ISDRAGGING:function(t,e){t.graphState.isDragging=e},TOGGLE_TOLINK:function(t,e){t.graphState.toLink=e}},actions:{changSelectedNode:function(t,e){t.commit("CHANGE_SELECTEDNODE",e),t.commit("CHANGE_SELECTEDEDGE",null)},changSelectedEdge:function(t,e){t.commit("CHANGE_SELECTEDEDGE",e),t.commit("CHANGE_SELECTEDNODE",null)},toggle_isDragging:function(t,e){t.commit("TOGGLE_ISDRAGGING",e)},toggle_toLink:function(t,e){t.commit("TOGGLE_TOLINK",e)}}},yt=pt,mt={graphState:function(t){return t.graph.graphState}},kt=mt;a["a"].use(gt["a"]);var Nt=new gt["a"].Store({modules:{graph:yt},getters:kt});a["a"].config.productionTip=!1,new a["a"]({router:vt,store:Nt,render:function(t){return t(c)}}).$mount("#app")},d656:function(t,e,n){},d704:function(t,e,n){}});
//# sourceMappingURL=app.f6c98e20.js.map