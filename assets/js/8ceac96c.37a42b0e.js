"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[3998],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,m=c["".concat(s,".").concat(g)]||c[g]||d[g]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},25248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"Creating Visualization Plugins",hide_title:!0,sidebar_position:10,version:1},l=void 0,o={unversionedId:"contributing/creating-viz-plugins",id:"contributing/creating-viz-plugins",title:"Creating Visualization Plugins",description:"Creating Visualization Plugins",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/contributing/creating-viz-plugins.mdx",sourceDirName:"contributing",slug:"/contributing/creating-viz-plugins",permalink:"/superset-doc-zh/docs/contributing/creating-viz-plugins",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/contributing/creating-viz-plugins.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Creating Visualization Plugins",hide_title:!0,sidebar_position:10,version:1},sidebar:"tutorialSidebar",previous:{title:"Translating",permalink:"/superset-doc-zh/docs/contributing/translations"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/superset-doc-zh/docs/frequently-asked-questions"}},s={},p=[{value:"Creating Visualization Plugins",id:"creating-visualization-plugins",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Creating a simple Hello World viz plugin",id:"creating-a-simple-hello-world-viz-plugin",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"creating-visualization-plugins"},"Creating Visualization Plugins"),(0,i.kt)("p",null,'Visualizations in Superset are implemented in JavaScript or TypeScript. Superset\ncomes preinstalled with several visualizations types (hereafter "viz plugins") that\ncan be found under the ',(0,i.kt)("inlineCode",{parentName:"p"},"superset-frontend/plugins")," directory. Viz plugins are added to\nthe application in the ",(0,i.kt)("inlineCode",{parentName:"p"},"superset-frontend/src/visualizations/presets/MainPreset.js"),".\nThe Superset project is always happy to review proposals for new high quality viz\nplugins. However, for highly custom viz types it is recommended to maintain a fork\nof Superset, and add the custom built viz plugins by hand."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"In order to create a new viz plugin, you need the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run MacOS or Linux (Windows is not officially supported, but may work)"),(0,i.kt)("li",{parentName:"ul"},"Node.js 16"),(0,i.kt)("li",{parentName:"ul"},"npm 7 or 8")),(0,i.kt)("p",null,"A general familiarity with ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," and the npm/Node system is\nalso recommended."),(0,i.kt)("h3",{id:"creating-a-simple-hello-world-viz-plugin"},"Creating a simple Hello World viz plugin"),(0,i.kt)("p",null,"To get started, you need the Superset Yeoman Generator. It is recommended to use the\nversion of the template that ships with the version of Superset you are using. This\ncan be installed by doing the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -g yo\ncd superset-frontend/packages/generator-superset\nnpm i\nnpm link\n")),(0,i.kt)("p",null,"After this you can proceed to create your viz plugin. Create a new directory for your\nviz plugin with the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"superset-plugin-chart")," and run the Yeoman generator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /tmp/superset-plugin-chart-hello-world\ncd /tmp/superset-plugin-chart-hello-world\n")),(0,i.kt)("p",null,"Initialize the viz plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yo @superset-ui/superset\n")),(0,i.kt)("p",null,"After that the generator will ask a few questions (the defaults should be fine):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yo @superset-ui/superset\n     _-----_     \u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n    |       |    \u2502      Welcome to the      \u2502\n    |--(o)--|    \u2502    generator-superset    \u2502\n   `---------\xb4   \u2502        generator!        \u2502\n    ( _\xb4U`_ )    \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\n    /___A___\\   /\n     |  ~  |\n   __'.___.'__\n \xb4   `  |\xb0 \xb4 Y `\n? Package name: superset-plugin-chart-hello-world\n? Description: Hello World\n? What type of chart would you like? Time-series chart\n   create package.json\n   create .gitignore\n   create babel.config.js\n   create jest.config.js\n   create README.md\n   create tsconfig.json\n   create src/index.ts\n   create src/plugin/buildQuery.ts\n   create src/plugin/controlPanel.ts\n   create src/plugin/index.ts\n   create src/plugin/transformProps.ts\n   create src/types.ts\n   create src/SupersetPluginChartHelloWorld.tsx\n   create test/index.test.ts\n   create test/__mocks__/mockExportString.js\n   create test/plugin/buildQuery.test.ts\n   create test/plugin/transformProps.test.ts\n   create types/external.d.ts\n   create src/images/thumbnail.png\n")),(0,i.kt)("p",null,"To build the viz plugin, run the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm i --force\nnpm run build\n")),(0,i.kt)("p",null,"Alternatively, to run the viz plugin in development mode (=rebuilding whenever changes\nare made), start the dev server with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,i.kt)("p",null,"To add the package to Superset, go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"superset-frontend")," subdirectory in your\nSuperset source folder run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -S /tmp/superset-plugin-chart-hello-world\n")),(0,i.kt)("p",null,"If you publish your package to npm, you can naturally install directly from there, too.\nAfter this edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"superset-frontend/src/visualizations/presets/MainPreset.js"),"\nand make the following changes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { SupersetPluginChartHelloWorld } from 'superset-plugin-chart-hello-world';\n")),(0,i.kt)("p",null,"to import the viz plugin and later add the following to the array that's passed to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," property:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"new SupersetPluginChartHelloWorld().configure({ key: 'ext-hello-world' }),\n")),(0,i.kt)("p",null,"After that the viz plugin should show up when you run Superset, e.g. the development\nserver:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev-server\n")))}c.isMDXComponent=!0}}]);