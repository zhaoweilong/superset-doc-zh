"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[1944],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),h=s,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},58025:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),s=(a(67294),a(3905));const r={title:"\u5b89\u5168",hide_title:!0,sidebar_position:10},i=void 0,o={unversionedId:"security",id:"security",title:"\u5b89\u5168",description:"Roles",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/security.mdx",sourceDirName:".",slug:"/security",permalink:"/superset-doc-zh/docs/security",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/security.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u5b89\u5168",hide_title:!0,sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/superset-doc-zh/docs/api"}},l={},c=[{value:"Roles",id:"roles",level:3},{value:"Provided Roles",id:"provided-roles",level:3},{value:"Admin",id:"admin",level:3},{value:"Alpha",id:"alpha",level:3},{value:"Gamma",id:"gamma",level:3},{value:"sql_lab",id:"sql_lab",level:3},{value:"Public",id:"public",level:3},{value:"Managing Data Source Access for Gamma Roles",id:"managing-data-source-access-for-gamma-roles",level:3},{value:"Customizing Permissions",id:"customizing-permissions",level:3},{value:"Permissions",id:"permissions",level:3},{value:"Restricting Access to a Subset of Data Sources",id:"restricting-access-to-a-subset-of-data-sources",level:3},{value:"Row Level Security",id:"row-level-security",level:3},{value:"Content Security Policiy (CSP)",id:"content-security-policiy-csp",level:3},{value:"Reporting Security Vulnerabilities",id:"reporting-security-vulnerabilities",level:3}],d={toc:c};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"roles"},"Roles"),(0,s.kt)("p",null,"Security in Superset is handled by Flask AppBuilder (FAB), an application development framework\nbuilt on top of Flask. FAB provides authentication, user management, permissions and roles.\nPlease read its ",(0,s.kt)("a",{parentName:"p",href:"https://flask-appbuilder.readthedocs.io/en/latest/security.html"},"Security documentation"),"."),(0,s.kt)("h3",{id:"provided-roles"},"Provided Roles"),(0,s.kt)("p",null,"Superset ships with a set of roles that are handled by Superset itself. You can assume\nthat these roles will stay up-to-date as Superset evolves (and as you update Superset versions)."),(0,s.kt)("p",null,"Even though ",(0,s.kt)("strong",{parentName:"p"},"Admin")," users have the ability, we don't recommend altering the\npermissions associated with each role (e.g. by removing or adding permissions to them). The permissions\nassociated with each role will be re-synchronized to their original values when you run\nthe ",(0,s.kt)("strong",{parentName:"p"},"superset init")," command (often done between Superset versions)."),(0,s.kt)("h3",{id:"admin"},"Admin"),(0,s.kt)("p",null,"Admins have all possible rights, including granting or revoking rights from other\nusers and altering other people\u2019s slices and dashboards."),(0,s.kt)("h3",{id:"alpha"},"Alpha"),(0,s.kt)("p",null,"Alpha users have access to all data sources, but they cannot grant or revoke access\nfrom other users. They are also limited to altering the objects that they own. Alpha users can add and alter data sources."),(0,s.kt)("h3",{id:"gamma"},"Gamma"),(0,s.kt)("p",null,"Gamma users have limited access. They can only consume data coming from data sources\nthey have been given access to through another complementary role. They only have access to\nview the slices and dashboards made from data sources that they have access to. Currently Gamma\nusers are not able to alter or add data sources. We assume that they are mostly content consumers, though they can create slices and dashboards."),(0,s.kt)("p",null,"Also note that when Gamma users look at the dashboards and slices list view, they will\nonly see the objects that they have access to."),(0,s.kt)("h3",{id:"sql_lab"},"sql_lab"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"sql_lab")," role grants access to SQL Lab. Note that while ",(0,s.kt)("strong",{parentName:"p"},"Admin")," users have access\nto all databases by default, both ",(0,s.kt)("strong",{parentName:"p"},"Alpha")," and ",(0,s.kt)("strong",{parentName:"p"},"Gamma")," users need to be given access on a per database basis."),(0,s.kt)("h3",{id:"public"},"Public"),(0,s.kt)("p",null,"To allow logged-out users to access some Superset features, you can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"PUBLIC_ROLE_LIKE")," config setting and assign it to another role whose permissions you want passed to this role."),(0,s.kt)("p",null,"For example, by setting ",(0,s.kt)("inlineCode",{parentName:"p"},'PUBLIC_ROLE_LIKE = "Gamma"')," in your ",(0,s.kt)("inlineCode",{parentName:"p"},"superset_config.py")," file, you grant\npublic role the same set of permissions as for the ",(0,s.kt)("strong",{parentName:"p"},"Gamma")," role. This is useful if one\nwants to enable anonymous users to view dashboards. Explicit grant on specific datasets is\nstill required, meaning that you need to edit the ",(0,s.kt)("strong",{parentName:"p"},"Public")," role and add the public data sources to the role manually."),(0,s.kt)("h3",{id:"managing-data-source-access-for-gamma-roles"},"Managing Data Source Access for Gamma Roles"),(0,s.kt)("p",null,"Here\u2019s how to provide users access to only specific datasets. First make sure the users with\nlimited access have ","[only]"," the Gamma role assigned to them. Second, create a new role (Menu -> Security -> List Roles) and click the + sign."),(0,s.kt)("p",null,"This new window allows you to give this new role a name, attribute it to users and select the\ntables in the ",(0,s.kt)("strong",{parentName:"p"},"Permissions")," dropdown. To select the data sources you want to associate with this role, simply click on the dropdown and use the typeahead to search for your table names."),(0,s.kt)("p",null,"You can then confirm with users assigned to the ",(0,s.kt)("strong",{parentName:"p"},"Gamma")," role that they see the\nobjects (dashboards and slices) associated with the tables you just extended them."),(0,s.kt)("h3",{id:"customizing-permissions"},"Customizing Permissions"),(0,s.kt)("p",null,"The permissions exposed by FAB are very granular and allow for a great level of\ncustomization. FAB creates many permissions automagically for each model that is\ncreated (can_add, can_delete, can_show, can_edit, \u2026) as well as for each view.\nOn top of that, Superset can expose more granular permissions like ",(0,s.kt)("strong",{parentName:"p"},"all_datasource_access"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"We do not recommend altering the 3 base roles as there are a set of assumptions that\nSuperset is built upon"),". It is possible though for you to create your own roles, and union them to existing ones."),(0,s.kt)("h3",{id:"permissions"},"Permissions"),(0,s.kt)("p",null,"Roles are composed of a set of permissions, and Superset has many categories of\npermissions. Here are the different categories of permissions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Model & Action: models are entities like Dashboard, Slice, or User. Each model has\na fixed set of permissions, like ",(0,s.kt)("strong",{parentName:"li"},"can_edit"),", ",(0,s.kt)("strong",{parentName:"li"},"can_show"),", ",(0,s.kt)("strong",{parentName:"li"},"can_delete"),", ",(0,s.kt)("strong",{parentName:"li"},"can_list"),", ",(0,s.kt)("strong",{parentName:"li"},"can_add"),",\nand so on. For example, you can allow a user to delete dashboards by adding ",(0,s.kt)("strong",{parentName:"li"},"can_delete")," on\nDashboard entity to a role and granting this user that role."),(0,s.kt)("li",{parentName:"ul"},"Views: views are individual web pages, like the Explore view or the SQL Lab view.\nWhen granted to a user, they will see that view in its menu items, and be able to load that page."),(0,s.kt)("li",{parentName:"ul"},"Data source: For each data source, a permission is created. If the user does not have the\n",(0,s.kt)("inlineCode",{parentName:"li"},"all_datasource_access permission")," granted, the user will only be able to see Slices or explore the data sources that are granted to them"),(0,s.kt)("li",{parentName:"ul"},"Database: Granting access to a database allows for the user to access all\ndata sources within that database, and will enable the user to query that\ndatabase in SQL Lab, provided that the SQL Lab specific permission have been granted to the user")),(0,s.kt)("h3",{id:"restricting-access-to-a-subset-of-data-sources"},"Restricting Access to a Subset of Data Sources"),(0,s.kt)("p",null,"We recommend giving a user the ",(0,s.kt)("strong",{parentName:"p"},"Gamma")," role plus any other roles that would add\naccess to specific data sources. We recommend that you create individual roles for\neach access profile. For example, the users on the Finance team might have access to a set of\ndatabases and data sources; these permissions can be consolidated in a single role.\nUsers with this profile then need to be assigned the ",(0,s.kt)("strong",{parentName:"p"},"Gamma")," role as a foundation to\nthe models and views they can access, and that Finance role that is a collection of permissions to data objects."),(0,s.kt)("p",null,"A user can have multiple roles associated with them. For example, an executive on the Finance\nteam could be granted ",(0,s.kt)("strong",{parentName:"p"},"Gamma"),", ",(0,s.kt)("strong",{parentName:"p"},"Finance"),", and the ",(0,s.kt)("strong",{parentName:"p"},"Executive")," roles. The ",(0,s.kt)("strong",{parentName:"p"},"Executive"),"\nrole could provide access to a set of data sources and dashboards made available only to executives.\nIn the ",(0,s.kt)("strong",{parentName:"p"},"Dashboards")," view, a user can only see the ones they have access too\nbased on the roles and permissions that were attributed."),(0,s.kt)("h3",{id:"row-level-security"},"Row Level Security"),(0,s.kt)("p",null,"Using Row Level Security filters (under the ",(0,s.kt)("strong",{parentName:"p"},"Security")," menu) you can create filters\nthat are assigned to a particular table, as well as a set of roles.\nIf you want members of the Finance team to only have access to\nrows where ",(0,s.kt)("inlineCode",{parentName:"p"},'department = "finance"'),", you could:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create a Row Level Security filter with that clause (",(0,s.kt)("inlineCode",{parentName:"li"},'department = "finance"'),")"),(0,s.kt)("li",{parentName:"ul"},"Then assign the clause to the ",(0,s.kt)("strong",{parentName:"li"},"Finance")," role and the table it applies to")),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"clause")," field, which can contain arbitrary text, is then added to the generated\nSQL statement\u2019s WHERE clause. So you could even do something like create a filter\nfor the last 30 days and apply it to a specific role, with a clause\nlike ",(0,s.kt)("inlineCode",{parentName:"p"},"date_field > DATE_SUB(NOW(), INTERVAL 30 DAY)"),". It can also support\nmultiple conditions: ",(0,s.kt)("inlineCode",{parentName:"p"},"client_id = 6")," AND ",(0,s.kt)("inlineCode",{parentName:"p"},'advertiser="foo"'),", etc."),(0,s.kt)("p",null,"All relevant Row level security filters will be combined together (under the hood,\nthe different SQL clauses are combined using AND statements). This means it's\npossible to create a situation where two roles conflict in such a way as to limit a table subset to empty."),(0,s.kt)("p",null,"For example, the filters ",(0,s.kt)("inlineCode",{parentName:"p"},"client_id=4")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"client_id=5"),", applied to a role,\nwill result in users of that role having ",(0,s.kt)("inlineCode",{parentName:"p"},"client_id=4")," AND ",(0,s.kt)("inlineCode",{parentName:"p"},"client_id=5"),"\nadded to their query, which can never be true."),(0,s.kt)("h3",{id:"content-security-policiy-csp"},"Content Security Policiy (CSP)"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"},"Content Security Policy (CSP)")," is an added\nlayer of security that helps to detect and mitigate certain types of attacks, including\nCross-Site Scripting (XSS) and data injection attacks."),(0,s.kt)("p",null,"CSP makes it possible for server administrators to reduce or eliminate the vectors by which XSS can\noccur by specifying the domains that the browser should consider to be valid sources of executable scripts.\nA CSP compatible browser will then only execute scripts loaded in source files received from those allowed domains,\nignoring all other scripts (including inline scripts and event-handling HTML attributes)."),(0,s.kt)("p",null,"A policy is described using a series of policy directives, each of which describes the policy for\na certain resource type or policy area. You can check possible directives\n",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy"},"here"),"."),(0,s.kt)("p",null,"It's extremely important to correclty configure a Content Security Policy when deploying Superset to\nprevent many types of attacks. For that matter, Superset provides the ",(0,s.kt)("inlineCode",{parentName:"p"}," TALISMAN_CONFIG")," key in ",(0,s.kt)("inlineCode",{parentName:"p"},"config.py"),"\nwhere admnistrators can define the policy. When running in production mode, Superset will check for the presence\nof a policy and if it's not able to find one, it will issue a warning with the security risks. For environments\nwhere CSP policies are defined outside of Superset using other software, administrators can disable\nthe warning using the ",(0,s.kt)("inlineCode",{parentName:"p"},"CONTENT_SECURITY_POLICY_WARNING")," key in ",(0,s.kt)("inlineCode",{parentName:"p"},"config.py"),"."),(0,s.kt)("h3",{id:"reporting-security-vulnerabilities"},"Reporting Security Vulnerabilities"),(0,s.kt)("p",null,"Apache Software Foundation takes a rigorous standpoint in annihilating the security issues in its\nsoftware projects. Apache Superset is highly sensitive and forthcoming to issues pertaining to its\nfeatures and functionality."),(0,s.kt)("p",null,"If you have apprehensions regarding Superset security or you discover vulnerability or potential\nthreat, don\u2019t hesitate to get in touch with the Apache Security Team by dropping a mail at\n",(0,s.kt)("a",{parentName:"p",href:"mailto:security@apache.org."},"security@apache.org.")," In the mail, specify the project name Superset with the description of the\nissue or potential threat. You are also urged to recommend the way to reproduce and replicate the\nissue. The security team and the Superset community will get back to you after assessing and\nanalysing the findings."),(0,s.kt)("p",null,"PLEASE PAY ATTENTION to report the security issue on the security email before disclosing it on\npublic domain. The ASF Security Team maintains a page with the description of how vulnerabilities\nand potential threats are handled, check their web page for more details."))}u.isMDXComponent=!0}}]);