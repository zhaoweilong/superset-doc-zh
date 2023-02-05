"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[8610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"Installing From Scratch",hide_title:!0,sidebar_position:2,version:1},i=void 0,s={unversionedId:"installation/installing-superset-from-scratch",id:"installation/installing-superset-from-scratch",title:"Installing From Scratch",description:"Installing Superset from Scratch",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/installation/installing-superset-from-scratch.mdx",sourceDirName:"installation",slug:"/installation/installing-superset-from-scratch",permalink:"/superset-doc-zh/docs/installation/installing-superset-from-scratch",draft:!1,editUrl:"https://github.com/apache/superset/tree/master/docs/docs/installation/installing-superset-from-scratch.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Installing From Scratch",hide_title:!0,sidebar_position:2,version:1},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528Docker Compose\u5b89\u88c5\u672c\u5730\u5b89\u88c5",permalink:"/superset-doc-zh/docs/installation/installing-superset-using-docker-compose"},next:{title:"Configuring Superset",permalink:"/superset-doc-zh/docs/installation/configuring-superset"}},o={},p=[{value:"Installing Superset from Scratch",id:"installing-superset-from-scratch",level:2},{value:"OS Dependencies",id:"os-dependencies",level:3},{value:"Python Virtual Environment",id:"python-virtual-environment",level:3},{value:"Installing and Initializing Superset",id:"installing-and-initializing-superset",level:3},{value:"Installing Superset with Helm in Kubernetes",id:"installing-superset-with-helm-in-kubernetes",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installing-superset-from-scratch"},"Installing Superset from Scratch"),(0,a.kt)("h3",{id:"os-dependencies"},"OS Dependencies"),(0,a.kt)("p",null,"Superset stores database connection information in its metadata database. For that purpose, we use\nthe cryptography Python library to encrypt connection passwords. Unfortunately, this library has OS\nlevel dependencies."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Debian and Ubuntu")),(0,a.kt)("p",null,"The following command will ensure that the required dependencies are installed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt-get install build-essential libssl-dev libffi-dev python-dev python-pip libsasl2-dev libldap2-dev default-libmysqlclient-dev\n")),(0,a.kt)("p",null,"In Ubuntu 20.04 the following command will ensure that the required dependencies are installed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt-get install build-essential libssl-dev libffi-dev python3-dev python3-pip libsasl2-dev libldap2-dev default-libmysqlclient-dev\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fedora and RHEL-derivative Linux distributions")),(0,a.kt)("p",null,"Install the following packages using the ",(0,a.kt)("inlineCode",{parentName:"p"},"yum")," package manager:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo yum install gcc gcc-c++ libffi-devel python-devel python-pip python-wheel openssl-devel cyrus-sasl-devel openldap-devel\n")),(0,a.kt)("p",null,"In more recent versions of CentOS and Fedora, you may need to install a slightly different set of packages using ",(0,a.kt)("inlineCode",{parentName:"p"},"dnf"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo dnf install gcc gcc-c++ libffi-devel python3-devel python3-pip python3-wheel openssl-devel cyrus-sasl-devel openldap-devel\n")),(0,a.kt)("p",null,"Also, on CentOS, you may need to upgrade pip for the install to work:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip3 install --upgrade pip\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Mac OS X")),(0,a.kt)("p",null,"If you're not on the latest version of OS X, we recommend upgrading because we've found that many\nissues people have run into are linked to older versions of Mac OS X. After updating, install the\nlatest version of XCode command line tools:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"xcode-select --install\n")),(0,a.kt)("p",null,"We don't recommend using the system installed Python. Instead, first install the\n",(0,a.kt)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew")," manager and then run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew install readline pkg-config libffi openssl mysql postgres\n")),(0,a.kt)("p",null,"You should install a recent version of Python (the official docker image uses 3.8.12). We'd recommend using a Python version manager like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv"},"pyenv")," (and also ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv-virtualenv"},"pyenv-virtualenv"),")."),(0,a.kt)("p",null,"Let's also make sure we have the latest version of ",(0,a.kt)("inlineCode",{parentName:"p"},"pip")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"setuptools"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip install --upgrade setuptools pip\n")),(0,a.kt)("p",null,"Lastly, you may need to set LDFLAGS and CFLAGS for certain Python packages to properly build. You can export these variables with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export LDFLAGS="-L$(brew --prefix openssl)/lib"\nexport CFLAGS="-I$(brew --prefix openssl)/include"\n')),(0,a.kt)("p",null,"These will now be available when pip installing requirements."),(0,a.kt)("h3",{id:"python-virtual-environment"},"Python Virtual Environment"),(0,a.kt)("p",null,"We highly recommend installing Superset inside of a virtual environment. Python ships with\n",(0,a.kt)("inlineCode",{parentName:"p"},"virtualenv")," out of the box. If you're using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv"},"pyenv"),", you can install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv-virtualenv"},"pyenv-virtualenv"),". Or you can install it with ",(0,a.kt)("inlineCode",{parentName:"p"},"pip"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip install virtualenv\n")),(0,a.kt)("p",null,"You can create and activate a virtual environment using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# virtualenv is shipped in Python 3.6+ as venv instead of pyvenv.\n# See https://docs.python.org/3.6/library/venv.html\npython3 -m venv venv\n. venv/bin/activate\n")),(0,a.kt)("p",null,"Or with pyenv-virtualenv:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Here we name the virtual env 'superset'\npyenv virtualenv superset\npyenv activate superset\n")),(0,a.kt)("p",null,"Once you activated your virtual environment, all of the Python packages you install or uninstall\nwill be confined to this environment. You can exit the environment by running ",(0,a.kt)("inlineCode",{parentName:"p"},"deactivate")," on the\ncommand line."),(0,a.kt)("h3",{id:"installing-and-initializing-superset"},"Installing and Initializing Superset"),(0,a.kt)("p",null,"First, start by installing ",(0,a.kt)("inlineCode",{parentName:"p"},"apache-superset"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip install apache-superset\n")),(0,a.kt)("p",null,"Then, you need to initialize the database:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"superset db upgrade\n")),(0,a.kt)("p",null,"Finish installing by running through the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Create an admin user in your metadata database (use `admin` as username to be able to load the examples)\nexport FLASK_APP=superset\nsuperset fab create-admin\n\n# Load some data to play with\nsuperset load_examples\n\n# Create default roles and permissions\nsuperset init\n\n# To start a development web server on port 8088, use -p to bind to another port\nsuperset run -p 8088 --with-threads --reload --debugger\n")),(0,a.kt)("p",null,"If everything worked, you should be able to navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"hostname:port")," in your browser (e.g.\nlocally by default at ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:8088"),") and login using the username and password you created."),(0,a.kt)("h3",{id:"installing-superset-with-helm-in-kubernetes"},"Installing Superset with Helm in Kubernetes"),(0,a.kt)("p",null,"You can install Superset into Kubernetes with ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm"),". The chart is located in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"helm/")," directory."),(0,a.kt)("p",null,"To install Superset in your Kubernetes cluster with Helm 3, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm dep up ./helm/superset\nhelm upgrade --install superset ./helm/superset\n")),(0,a.kt)("p",null,"Note that the above command will install Superset into ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," namespace of your Kubernetes\ncluster."))}d.isMDXComponent=!0}}]);