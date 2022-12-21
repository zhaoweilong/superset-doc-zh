"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[5608],{48240:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),s=["components"],i={title:"Installing Locally Using Docker Compose",hide_title:!0,sidebar_position:1,version:1},l=void 0,c={unversionedId:"installation/installing-superset-using-docker-compose",id:"installation/installing-superset-using-docker-compose",title:"Installing Locally Using Docker Compose",description:"Installing Superset Locally Using Docker Compose",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/installation/installing-superset-using-docker-compose.mdx",sourceDirName:"installation",slug:"/installation/installing-superset-using-docker-compose",permalink:"/superset-doc-zh/docs/installation/installing-superset-using-docker-compose",editUrl:"https://github.com/apache/superset/tree/master/docs/docs/installation/installing-superset-using-docker-compose.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Installing Locally Using Docker Compose",hide_title:!0,sidebar_position:1,version:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/superset-doc-zh/docs/intro"},next:{title:"Installing From Scratch",permalink:"/superset-doc-zh/docs/installation/installing-superset-from-scratch"}},p={},u=[{value:"Installing Superset Locally Using Docker Compose",id:"installing-superset-locally-using-docker-compose",level:2},{value:"1. Install a Docker Engine and Docker Compose",id:"1-install-a-docker-engine-and-docker-compose",level:3},{value:"2. Clone Superset&#39;s GitHub repository",id:"2-clone-supersets-github-repository",level:3},{value:"3. Launch Superset Through Docker Compose",id:"3-launch-superset-through-docker-compose",level:3},{value:"Configuring Docker Compose",id:"configuring-docker-compose",level:4},{value:"4. Log in to Superset",id:"4-log-in-to-superset",level:3},{value:"5. Connecting Superset to your local database instance",id:"5-connecting-superset-to-your-local-database-instance",level:3}],d={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installing-superset-locally-using-docker-compose"},"Installing Superset Locally Using Docker Compose"),(0,r.kt)("p",null,"The fastest way to try Superset locally is using Docker and Docker Compose on a Linux or Mac OSX\ncomputer. Superset does not have official support for Windows, so we have provided a VM workaround\nbelow."),(0,r.kt)("h3",{id:"1-install-a-docker-engine-and-docker-compose"},"1. Install a Docker Engine and Docker Compose"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mac OSX")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-mac/install/"},"Install Docker for Mac"),", which includes the Docker\nengine and a recent version of ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," out of the box."),(0,r.kt)("p",null,'Once you have Docker for Mac installed, open up the preferences pane for Docker, go to the\n"Resources" section and increase the allocated memory to 6GB. With only the 2GB of RAM allocated by\ndefault, Superset will fail to start.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Linux")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Install Docker on Linux")," by following Docker\u2019s\ninstructions for whichever flavor of Linux suits you. Because ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," is not installed as\npart of the base Docker installation on Linux, once you have a working engine, follow the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"docker-compose installation instructions")," for Linux."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Windows")),(0,r.kt)("p",null,"Superset is not officially supported on Windows unfortunately. One option for Windows users to\ntry out Superset locally is to install an Ubuntu Desktop VM via\n",(0,r.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/"},"VirtualBox")," and proceed with the Docker on Linux instructions inside\nof that VM. We recommend assigning at least 8GB of RAM to the virtual machine as well as\nprovisioning a hard drive of at least 40GB, so that there will be enough space for both the OS and\nall of the required dependencies. Docker Desktop ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-windows/wsl/"},"recently added support for Windows Subsystem for Linux (WSL) 2"),", which may be another option."),(0,r.kt)("h3",{id:"2-clone-supersets-github-repository"},"2. Clone Superset's GitHub repository"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/superset"},"Clone Superset's repo")," in your terminal with the\nfollowing command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/apache/superset.git\n")),(0,r.kt)("p",null,"Once that command completes successfully, you should see a new ",(0,r.kt)("inlineCode",{parentName:"p"},"superset")," folder in your\ncurrent directory."),(0,r.kt)("h3",{id:"3-launch-superset-through-docker-compose"},"3. Launch Superset Through Docker Compose"),(0,r.kt)("p",null,"Navigate to the folder you created in step 1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd superset\n")),(0,r.kt)("p",null,"When working on master branch, run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-compose-non-dev.yml pull\ndocker-compose -f docker-compose-non-dev.yml up\n")),(0,r.kt)("p",null,"Alternatively, you can also run a specific version of Superset by first checking out\nthe branch/tag, and then starting ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"TAG")," variable.\nFor example, to run the 1.4.0 version, run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout 1.4.0\nTAG=1.4.0 docker-compose -f docker-compose-non-dev.yml pull\nTAG=1.4.0 docker-compose -f docker-compose-non-dev.yml up\n")),(0,r.kt)("p",null,"You should see a wall of logging output from the containers being launched on your machine. Once\nthis output slows, you should have a running instance of Superset on your local machine!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," This will bring up superset in a non-dev mode, changes to the codebase will not be reflected.\nIf you would like to run superset in dev mode to test local changes, simply replace the previous command with: ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up"),",\nand wait for the ",(0,r.kt)("inlineCode",{parentName:"p"},"superset_node")," container to finish building the assets."),(0,r.kt)("h4",{id:"configuring-docker-compose"},"Configuring Docker Compose"),(0,r.kt)("p",null,"The following is for users who want to configure how Superset starts up in Docker Compose; otherwise, you can skip to the next section."),(0,r.kt)("p",null,"You can configure the Docker Compose settings for dev and non-dev mode with ",(0,r.kt)("inlineCode",{parentName:"p"},"docker/.env")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"docker/.env-non-dev")," respectively. These environment files set the environment for most containers in the Docker Compose setup, and some variables affect multiple containers and others only single ones."),(0,r.kt)("p",null,"One important variable is ",(0,r.kt)("inlineCode",{parentName:"p"},"SUPERSET_LOAD_EXAMPLES")," which determines whether the ",(0,r.kt)("inlineCode",{parentName:"p"},"superset_init")," container will load example data and visualizations into the database and Superset. These examples are quite helpful for most people, but probably unnecessary for experienced users. The loading process can sometimes take a few minutes and a good amount of CPU, so you may want to disable it on a resource-constrained device."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Users often want to connect to other databases from Superset. Currently, the easiest way to do this is to modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose-non-dev.yml")," file and add your database as a service that the other services depend on (via ",(0,r.kt)("inlineCode",{parentName:"p"},"x-superset-depends-on"),"). Others have attempted to set ",(0,r.kt)("inlineCode",{parentName:"p"},"network_mode: host")," on the Superset services, but these generally break the installation, because the configuration requires use of the Docker Compose DNS resolver for the service names. If you have a good solution for this, let us know!"),(0,r.kt)("h3",{id:"4-log-in-to-superset"},"4. Log in to Superset"),(0,r.kt)("p",null,"Your local Superset instance also includes a Postgres server to store your data and is already\npre-loaded with some example datasets that ship with Superset. You can access Superset now via your\nweb browser by visiting ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8088"),". Note that many browsers now default to ",(0,r.kt)("inlineCode",{parentName:"p"},"https")," - if\nyours is one of them, please make sure it uses ",(0,r.kt)("inlineCode",{parentName:"p"},"http"),"."),(0,r.kt)("p",null,"Log in with the default username and password:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"username: admin\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"password: admin\n")),(0,r.kt)("h3",{id:"5-connecting-superset-to-your-local-database-instance"},"5. Connecting Superset to your local database instance"),(0,r.kt)("p",null,"When running Superset using ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," it runs in its own docker container, as if the Superset was running in a separate machine entirely. Therefore attempts to connect to your local database with hostname ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," won't work as ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," refers to the docker container Superset is running in, and not your actual host machine. Fortunately, docker provides an easy way to access network resources in the host machine from inside a container, and we will leverage this capability to connect to our local database instance."),(0,r.kt)("p",null,"Here the instructions are for connecting to postgresql (which is running on your host machine) from Superset (which is running in its docker container). Other databases may have slightly different configurations but gist would be same and boils down to 2 steps -"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"(Mac users may skip this step)")," Configuring the local postgresql/database instance to accept public incoming connections. By default postgresql only allows incoming connections from ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost")," only, but re-iterating once again, ",(0,r.kt)("inlineCode",{parentName:"li"},"localhosts")," are different for host machine and docker container. For postgresql this involves make one-line changes to the files ",(0,r.kt)("inlineCode",{parentName:"li"},"postgresql.conf")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"pg_hba.conf"),", you can find helpful links tailored to your OS / PG version on the web easily for this task. For docker it suffices to only whitelist IPs ",(0,r.kt)("inlineCode",{parentName:"li"},"172.0.0.0/8")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"*"),", but in any case you are ",(0,r.kt)("em",{parentName:"li"},"warned")," that doing this in a production database ",(0,r.kt)("em",{parentName:"li"},"may")," have disastrous consequences as you are opening your database to the public internet."),(0,r.kt)("li",{parentName:"ol"},"Instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost"),", try using ",(0,r.kt)("inlineCode",{parentName:"li"},"host.docker.internal")," (Mac users) or ",(0,r.kt)("inlineCode",{parentName:"li"},"172.18.0.1")," (Linux users) as the host name when attempting to connect to the database. This is docker internal detail, what is happening is that in Mac systems docker creates a dns entry for the host name ",(0,r.kt)("inlineCode",{parentName:"li"},"host.docker.internal")," which resolves to the correct address for the host machine, whereas in linux this is not the case (at least by default). If neither of these 2 hostnames work then you may want to find the exact host name you want to use, for that you can do ",(0,r.kt)("inlineCode",{parentName:"li"},"ifconfig")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"ip addr show")," and look at the IP address of ",(0,r.kt)("inlineCode",{parentName:"li"},"docker0")," interface that must have been created by docker for you. Alternately if you don't even see the ",(0,r.kt)("inlineCode",{parentName:"li"},"docker0")," interface try (if needed with sudo) ",(0,r.kt)("inlineCode",{parentName:"li"},"docker network inspect bridge")," and see if there is an entry for ",(0,r.kt)("inlineCode",{parentName:"li"},'"Gateway"')," and note the IP address.")))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(m,s(s({ref:t},p),{},{components:n})):o.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);