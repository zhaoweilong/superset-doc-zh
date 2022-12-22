"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[8853],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const o={title:"Teradata",hide_title:!0,sidebar_position:31,version:1},i=void 0,s={unversionedId:"databases/teradata",id:"databases/teradata",title:"Teradata",description:"Teradata",source:"@site/docs/databases/teradata.mdx",sourceDirName:"databases",slug:"/databases/teradata",permalink:"/superset-doc-zh/docs/databases/teradata",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/teradata.mdx",tags:[],version:"current",sidebarPosition:31,frontMatter:{title:"Teradata",hide_title:!0,sidebar_position:31,version:1},sidebar:"tutorialSidebar",previous:{title:"Microsoft SQL Server",permalink:"/superset-doc-zh/docs/databases/sql-server"},next:{title:"Vertica",permalink:"/superset-doc-zh/docs/databases/vertica"}},c={},d=[{value:"Teradata",id:"teradata",level:2},{value:"ODBC Driver",id:"odbc-driver",level:2}],l={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"teradata"},"Teradata"),(0,n.kt)("p",null,"The recommended connector library is\n",(0,n.kt)("a",{parentName:"p",href:"https://pypi.org/project/teradatasqlalchemy/"},"teradatasqlalchemy"),"."),(0,n.kt)("p",null,"The connection string for Teradata looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"teradata://{user}:{password}@{host}\n")),(0,n.kt)("h2",{id:"odbc-driver"},"ODBC Driver"),(0,n.kt)("p",null,"There's also an older connector named\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Teradata/sqlalchemy-teradata"},"sqlalchemy-teradata")," that\nrequires the installation of ODBC drivers. The Teradata ODBC Drivers\nare available\nhere: ",(0,n.kt)("a",{parentName:"p",href:"https://downloads.teradata.com/download/connectivity/odbc-driver/linux"},"https://downloads.teradata.com/download/connectivity/odbc-driver/linux")),(0,n.kt)("p",null,"Here are the required environment variables:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"export ODBCINI=/.../teradata/client/ODBC_64/odbc.ini\nexport ODBCINST=/.../teradata/client/ODBC_64/odbcinst.ini\n")),(0,n.kt)("p",null,"We recommend using the first library because of the\nlack of requirement around ODBC drivers and\nbecause it's more regularly updated."))}p.isMDXComponent=!0}}]);