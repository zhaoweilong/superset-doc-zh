---
slug: 运行和部署
title: 运行和部署
authors: ZhaoWeilong
---

### 本地运行中文翻译的文档
~~~
npm run start -- --locale zh-Hans
~~~
### 构建中文的静态文件
~~~
npm run build -- --locale zh-Hans
~~~

### 使用deploy部署
在使用deploy部署到GitHub时，deploymentBranch的值需要指定一下，我设置的值为 gh-deploy.GIT_USER的值可以通过配置配置环境来设置，之后就可以直接运行yarn deploy -- --locale zh-Hans

~~~
cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy -- --locale zh-Hans"
~~~
### docker部署
#### Dockerfile内容
~~~
FROM nginx
COPY build /usr/share/nginx/html
~~~

####  构建Image
~~~
docker  build -t superset-doc-zh .
~~~
####
~~~
docker run --name superset-doc-zh -d -p 8080:80 superset-doc-zh
~~~

### 参考
[Docusaurus 部署](https://docusaurus.io/zh-CN/docs/deployment)

[Docusaurus 国际化](https://docusaurus.io/zh-CN/docs/i18n/tutorial)

[Nginx Docker镜像使用](https://hub.docker.com/_/nginx)