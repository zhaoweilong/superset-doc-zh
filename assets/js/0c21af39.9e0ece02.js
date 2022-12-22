"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[4729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(g,s(s({ref:t},c),{},{components:n})):a.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={title:"Style Guide",hide_title:!0,sidebar_position:4,version:1},s=void 0,l={unversionedId:"contributing/style-guide",id:"contributing/style-guide",title:"Style Guide",description:"Design Guidelines",source:"@site/docs/contributing/style-guide.mdx",sourceDirName:"contributing",slug:"/contributing/style-guide",permalink:"/superset-doc-zh/docs/contributing/style-guide",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/contributing/style-guide.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Style Guide",hide_title:!0,sidebar_position:4,version:1},sidebar:"tutorialSidebar",previous:{title:"Pull Request Guidelines",permalink:"/superset-doc-zh/docs/contributing/pull-request-guidelines"},next:{title:"Running a Local Flask Backend",permalink:"/superset-doc-zh/docs/contributing/local-backend"}},o={},u=[{value:"Design Guidelines",id:"design-guidelines",level:2},{value:"Capitalization guidelines",id:"capitalization-guidelines",level:3},{value:"Sentence case",id:"sentence-case",level:4},{value:"How to refer to UI elements",id:"how-to-refer-to-ui-elements",level:4},{value:"**Exceptions to sentence case:",id:"exceptions-to-sentence-case",level:4}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"design-guidelines"},"Design Guidelines"),(0,r.kt)("h3",{id:"capitalization-guidelines"},"Capitalization guidelines"),(0,r.kt)("h4",{id:"sentence-case"},"Sentence case"),(0,r.kt)("p",null,"Use sentence-case capitalization for everything in the UI (except these ","*","*",")."),(0,r.kt)("p",null,"Sentence case is predominantly lowercase. Capitalize only the initial character of the first word, and other words that require capitalization, like:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proper nouns.")," Objects in the product ",(0,r.kt)("em",{parentName:"li"},"are not")," considered proper nouns e.g. dashboards, charts, saved queries etc. Proprietary feature names eg. SQL Lab, Preset Manager ",(0,r.kt)("em",{parentName:"li"},"are")," considered proper nouns"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Acronyms")," (e.g. CSS, HTML)"),(0,r.kt)("li",{parentName:"ul"},"When referring to ",(0,r.kt)("strong",{parentName:"li"},"UI labels that are themselves capitalized")," from sentence case (e.g. page titles - Dashboards page, Charts page, Saved queries page, etc.)"),(0,r.kt)("li",{parentName:"ul"},"User input that is reflected in the UI. E.g. a user-named a dashboard tab")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sentence case vs. Title case:"),'\nTitle case: "A Dog Takes a Walk in Paris"\nSentence case: "A dog takes a walk in Paris"'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Why sentence case?")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It\u2019s generally accepted as the quickest to read"),(0,r.kt)("li",{parentName:"ul"},"It\u2019s the easiest form to distinguish between common and proper nouns")),(0,r.kt)("h4",{id:"how-to-refer-to-ui-elements"},"How to refer to UI elements"),(0,r.kt)("p",null,"When writing about a UI element, use the same capitalization as used in the UI."),(0,r.kt)("p",null,"For example, if an input field is labeled \u201cName\u201d then you refer to this as the \u201cName input field\u201d. Similarly, if a button has the label \u201cSave\u201d in it, then it is correct to refer to the \u201cSave button\u201d."),(0,r.kt)("p",null,"Where a product page is titled \u201cSettings\u201d, you refer to this in writing as follows:\n\u201cEdit your personal information on the Settings page\u201d."),(0,r.kt)("p",null,"Often a product page will have the same title as the objects it contains. In this case, refer to the page as it appears in the UI, and the objects as common nouns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upload a dashboard on the Dashboards page"),(0,r.kt)("li",{parentName:"ul"},"Go to Dashboards"),(0,r.kt)("li",{parentName:"ul"},"View dashboard"),(0,r.kt)("li",{parentName:"ul"},"View all dashboards"),(0,r.kt)("li",{parentName:"ul"},"Upload CSS templates on the CSS templates page"),(0,r.kt)("li",{parentName:"ul"},"Queries that you save will appear on the Saved queries page"),(0,r.kt)("li",{parentName:"ul"},"Create custom queries in SQL Lab then create dashboards")),(0,r.kt)("h4",{id:"exceptions-to-sentence-case"},"*","*","Exceptions to sentence case:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Input labels, buttons and UI tabs are all caps"),(0,r.kt)("li",{parentName:"ul"},"User input values (e.g. column names, SQL Lab tab names) should be in their original case")))}p.isMDXComponent=!0}}]);