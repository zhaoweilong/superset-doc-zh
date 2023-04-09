<!--
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
-->

# 翻译原因
我在学习Superset的工程中发现相关的资料较少，我决定自己翻译一下Superset的官方文档。本文档基于Superset 2.0.0。

GihHub Pages的地址为 http://zhaoweilong.github.io/superset-doc-zh

Gitee Pages的地址为 http://zhaoweilong0220.gitee.io/superset-doc-zh

# 本地运行中文翻译的文档
~~~
npm run start -- --locale zh-Hans
~~~
# 构建中文的静态文件
~~~
npm run build -- --locale zh-Hans
~~~

#使用deploy部署
在使用deploy部署到GitHub时，deploymentBranch的值需要指定一下，我设置的值为 gh-deploy. GIT_USER的值可以通过配置配置环境来设置，之后就可以直接运行yarn deploy -- --locale zh-Hans

~~~
cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy -- --locale zh-Hans"
~~~
## docker部署
### Dockerfile内容
~~~
FROM nginx
COPY build /usr/share/nginx/html
~~~

###  构建Image
~~~
docker  build -t superset-doc-zh .
~~~


### 运行
~~~
docker run --name superset-doc-zh -d -p 8080:80 superset-doc-zh
~~~
