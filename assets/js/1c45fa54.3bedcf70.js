"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[7782],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(t),b=i,f=l["".concat(c,".").concat(b)]||l[b]||u[b]||a;return t?n.createElement(f,o(o({ref:r},p),{},{components:t})):n.createElement(f,o({ref:r},p))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=b;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[l]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},52477:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=t(87462),i=(t(67294),t(3905));const a={title:"Firebird",hide_title:!0,sidebar_position:38,version:1},o=void 0,s={unversionedId:"databases/firebird",id:"databases/firebird",title:"Firebird",description:"Firebird",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/databases/firebird.mdx",sourceDirName:"databases",slug:"/databases/firebird",permalink:"/superset-doc-zh/docs/databases/firebird",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/firebird.mdx",tags:[],version:"current",sidebarPosition:38,frontMatter:{title:"Firebird",hide_title:!0,sidebar_position:38,version:1},sidebar:"tutorialSidebar",previous:{title:"Databricks",permalink:"/superset-doc-zh/docs/databases/databricks"},next:{title:"YugabyteDB",permalink:"/superset-doc-zh/docs/databases/yugabytedb"}},c={},d=[{value:"Firebird",id:"firebird",level:2}],p={toc:d};function l(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"firebird"},"Firebird"),(0,i.kt)("p",null,"The recommended connector library for Firebird is ",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/sqlalchemy-firebird/"},"sqlalchemy-firebird"),".\nSuperset has been tested on ",(0,i.kt)("inlineCode",{parentName:"p"},"sqlalchemy-firebird>=0.7.0, <0.8"),"."),(0,i.kt)("p",null,"The recommended connection string is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"firebird+fdb://{username}:{password}@{host}:{port}//{path_to_db_file}\n")),(0,i.kt)("p",null,"Here's a connection string example of Superset connecting to a local Firebird database:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"firebird+fdb://SYSDBA:masterkey@192.168.86.38:3050//Library/Frameworks/Firebird.framework/Versions/A/Resources/examples/empbuild/employee.fdb\n")))}l.isMDXComponent=!0}}]);