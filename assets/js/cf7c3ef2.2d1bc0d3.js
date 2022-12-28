"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[7828],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(r),h=o,k=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(k,c(c({ref:t},u),{},{components:r})):n.createElement(k,c({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},94207:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={title:"ClickHouse",hide_title:!0,sidebar_position:15,version:1},c=void 0,s={unversionedId:"databases/clickhouse",id:"databases/clickhouse",title:"ClickHouse",description:"ClickHouse",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/databases/clickhouse.mdx",sourceDirName:"databases",slug:"/databases/clickhouse",permalink:"/superset-doc-zh/docs/databases/clickhouse",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/clickhouse.mdx",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"ClickHouse",hide_title:!0,sidebar_position:15,version:1},sidebar:"tutorialSidebar",previous:{title:"Apache Spark SQL",permalink:"/superset-doc-zh/docs/databases/spark-sql"},next:{title:"CockroachDB",permalink:"/superset-doc-zh/docs/databases/cockroachdb"}},l={},i=[{value:"ClickHouse",id:"clickhouse",level:2}],u={toc:i};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"clickhouse"},"ClickHouse"),(0,o.kt)("p",null,"To use ClickHouse with Superset, you will need to add the following Python libraries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"clickhouse-driver==0.2.0\nclickhouse-sqlalchemy==0.1.6\n")),(0,o.kt)("p",null,"If running Superset using Docker Compose, add the following to your ",(0,o.kt)("inlineCode",{parentName:"p"},"./docker/requirements-local.txt")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"clickhouse-driver>=0.2.0\nclickhouse-sqlalchemy>=0.1.6\n")),(0,o.kt)("p",null,"The recommended connector library for ClickHouse is\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloudflare/sqlalchemy-clickhouse"},"sqlalchemy-clickhouse"),"."),(0,o.kt)("p",null,"The expected connection string is formatted as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"clickhouse+native://<user>:<password>@<host>:<port>/<database>[?options\u2026]clickhouse://{username}:{password}@{hostname}:{port}/{database}\n")),(0,o.kt)("p",null,"Here's a concrete example of a real connection string:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"clickhouse+native://demo:demo@github.demo.trial.altinity.cloud/default?secure=true\n")),(0,o.kt)("p",null,"If you're using Clickhouse locally on your computer, you can get away with using a native protocol URL that\nuses the default user without a password (and doesn't encrypt the connection):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"clickhouse+native://localhost/default\n")))}p.isMDXComponent=!0}}]);