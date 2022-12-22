"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[7706],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),b=n,k=d["".concat(l,".").concat(b)]||d[b]||u[b]||o;return a?r.createElement(k,i(i({ref:t},p),{},{components:a})):r.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},95587:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"Databricks",hide_title:!0,sidebar_position:37,version:1},i=void 0,s={unversionedId:"databases/databricks",id:"databases/databricks",title:"Databricks",description:"Databricks",source:"@site/docs/databases/databricks.mdx",sourceDirName:"databases",slug:"/databases/databricks",permalink:"/superset-doc-zh/docs/databases/databricks",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/databases/databricks.mdx",tags:[],version:"current",sidebarPosition:37,frontMatter:{title:"Databricks",hide_title:!0,sidebar_position:37,version:1},sidebar:"tutorialSidebar",previous:{title:"CrateDB",permalink:"/superset-doc-zh/docs/databases/cratedb"},next:{title:"Firebird",permalink:"/superset-doc-zh/docs/databases/firebird"}},l={},c=[{value:"Databricks",id:"databricks",level:2},{value:"Older driver",id:"older-driver",level:2},{value:"Hive",id:"hive",level:3},{value:"ODBC",id:"odbc",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"databricks"},"Databricks"),(0,n.kt)("p",null,"Databricks now offer a native DB API 2.0 driver, ",(0,n.kt)("inlineCode",{parentName:"p"},"databricks-sql-connector"),", that can be used with the ",(0,n.kt)("inlineCode",{parentName:"p"},"sqlalchemy-databricks")," dialect. You can install both with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'pip install "superset[databricks]"\n')),(0,n.kt)("p",null,"To use the Hive connector you need the following information from your cluster:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Server hostname"),(0,n.kt)("li",{parentName:"ul"},"Port"),(0,n.kt)("li",{parentName:"ul"},"HTTP path")),(0,n.kt)("p",null,'These can be found under "Configuration" -> "Advanced Options" -> "JDBC/ODBC".'),(0,n.kt)("p",null,'You also need an access token from "Settings" -> "User Settings" -> "Access Tokens".'),(0,n.kt)("p",null,'Once you have all this information, add a database of type "Databricks Native Connector" and use the following SQLAlchemy URI:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"databricks+connector://token:{access_token}@{server_hostname}:{port}/{database_name}\n")),(0,n.kt)("p",null,'You also need to add the following configuration to "Other" -> "Engine Parameters", with your HTTP path:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "connect_args": {"http_path": "sql/protocolv1/o/****"},\n    "http_headers": [["User-Agent", "Apache Superset"]]\n}\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"User-Agent")," header is optional, but helps Databricks identify traffic from Superset. If you need to use a different header please reach out to Databricks and let them know."),(0,n.kt)("h2",{id:"older-driver"},"Older driver"),(0,n.kt)("p",null,"Originally Superset used ",(0,n.kt)("inlineCode",{parentName:"p"},"databricks-dbapi")," to connect to Databricks. You might want to try it if you're having problems with the official Databricks connector:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'pip install "databricks-dbapi[sqlalchemy]"\n')),(0,n.kt)("p",null,"There are two ways to connect to Databricks when using ",(0,n.kt)("inlineCode",{parentName:"p"},"databricks-dbapi"),": using a Hive connector or an ODBC connector. Both ways work similarly, but only ODBC can be used to connect to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.databricks.com/sql/admin/sql-endpoints.html"},"SQL endpoints"),"."),(0,n.kt)("h3",{id:"hive"},"Hive"),(0,n.kt)("p",null,'To connect to a Hive cluster add a database of type "Databricks Interactive Cluster" in Superset, and use the following SQLAlchemy URI:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"databricks+pyhive://token:{access_token}@{server_hostname}:{port}/{database_name}\n")),(0,n.kt)("p",null,'You also need to add the following configuration to "Other" -> "Engine Parameters", with your HTTP path:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{"connect_args": {"http_path": "sql/protocolv1/o/****"}}\n')),(0,n.kt)("h3",{id:"odbc"},"ODBC"),(0,n.kt)("p",null,"For ODBC you first need to install the ",(0,n.kt)("a",{parentName:"p",href:"https://databricks.com/spark/odbc-drivers-download"},"ODBC drivers for your platform"),"."),(0,n.kt)("p",null,'For a regular connection use this as the SQLAlchemy URI after selecting either "Databricks Interactive Cluster" or "Databricks SQL Endpoint" for the database, depending on your use case:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"databricks+pyodbc://token:{access_token}@{server_hostname}:{port}/{database_name}\n")),(0,n.kt)("p",null,"And for the connection arguments:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{"connect_args": {"http_path": "sql/protocolv1/o/****", "driver_path": "/path/to/odbc/driver"}}\n')),(0,n.kt)("p",null,"The driver path should be:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/Library/simba/spark/lib/libsparkodbc_sbu.dylib")," (Mac OS)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/opt/simba/spark/lib/64/libsparkodbc_sb64.so")," (Linux)")),(0,n.kt)("p",null,"For a connection to a SQL endpoint you need to use the HTTP path from the endpoint:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{"connect_args": {"http_path": "/sql/1.0/endpoints/****", "driver_path": "/path/to/odbc/driver"}}\n')))}d.isMDXComponent=!0}}]);