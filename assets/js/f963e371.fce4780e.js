"use strict";(self.webpackChunkdocs_v_2=self.webpackChunkdocs_v_2||[]).push([[6388],{44433:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"\u672c\u7ad9\u7b80\u4ecb","metadata":{"permalink":"/superset-doc-zh/blog/\u672c\u7ad9\u7b80\u4ecb","editUrl":"https://github.com/zhaoweilong/superset-doc-zh/blog/2022-11-22--about-us.md","source":"@site/blog/2022-11-22--about-us.md","title":"\u672c\u7ad9\u7b80\u4ecb","description":"\u7ffb\u8bd1\u539f\u56e0","date":"2022-11-22T00:00:00.000Z","formattedDate":"2022\u5e7411\u670822\u65e5","tags":[],"readingTime":0.295,"hasTruncateMarker":false,"authors":[{"name":"ZhaoWeilong","title":"\u5f00\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/zhaoweilong","email":"zhaoweilong0220@163.com","imageURL":"https://avatars.githubusercontent.com/u/20865325","key":"ZhaoWeilong"}],"frontMatter":{"slug":"\u672c\u7ad9\u7b80\u4ecb","title":"\u672c\u7ad9\u7b80\u4ecb","authors":"ZhaoWeilong"},"nextItem":{"title":"\u8fd0\u884c\u548c\u90e8\u7f72","permalink":"/superset-doc-zh/blog/\u8fd0\u884c\u548c\u90e8\u7f72"}},"content":"### \u7ffb\u8bd1\u539f\u56e0\\r\\n\u6211\u5728\u5b66\u4e60Superset\u7684\u5de5\u7a0b\u4e2d\u53d1\u73b0\u76f8\u5173\u7684\u8d44\u6599\u8f83\u5c11\uff0c\u6211\u51b3\u5b9a\u81ea\u5df1\u7ffb\u8bd1\u4e00\u4e0bSuperset\u7684\u5b98\u65b9\u6587\u6863\u3002\u672c\u6587\u6863\u57fa\u4e8eSuperset 2.0.0\u3002\\r\\n\\r\\nGihHub Pages\u7684\u5730\u5740\u4e3a http://zhaoweilong.github.io/superset-doc-zh\\r\\n\\r\\nGitee Pages\u7684\u5730\u5740\u4e3a http://zhaoweilong0220.gitee.io/superset-doc-zh"},{"id":"\u8fd0\u884c\u548c\u90e8\u7f72","metadata":{"permalink":"/superset-doc-zh/blog/\u8fd0\u884c\u548c\u90e8\u7f72","editUrl":"https://github.com/zhaoweilong/superset-doc-zh/blog/2022-12-23--run-and-deploy.md","source":"@site/blog/2022-12-23--run-and-deploy.md","title":"\u8fd0\u884c\u548c\u90e8\u7f72","description":"\u672c\u5730\u8fd0\u884c\u4e2d\u6587\u7ffb\u8bd1\u7684\u6587\u6863","date":"2022-12-23T00:00:00.000Z","formattedDate":"2022\u5e7412\u670823\u65e5","tags":[],"readingTime":0.81,"hasTruncateMarker":false,"authors":[{"name":"ZhaoWeilong","title":"\u5f00\u53d1\u5de5\u7a0b\u5e08","url":"https://github.com/zhaoweilong","email":"zhaoweilong0220@163.com","imageURL":"https://avatars.githubusercontent.com/u/20865325","key":"ZhaoWeilong"}],"frontMatter":{"slug":"\u8fd0\u884c\u548c\u90e8\u7f72","title":"\u8fd0\u884c\u548c\u90e8\u7f72","authors":"ZhaoWeilong"},"prevItem":{"title":"\u672c\u7ad9\u7b80\u4ecb","permalink":"/superset-doc-zh/blog/\u672c\u7ad9\u7b80\u4ecb"}},"content":"### \u672c\u5730\u8fd0\u884c\u4e2d\u6587\u7ffb\u8bd1\u7684\u6587\u6863\\r\\n~~~\\r\\nnpm run start -- --locale zh-Hans\\r\\n~~~\\r\\n### \u6784\u5efa\u4e2d\u6587\u7684\u9759\u6001\u6587\u4ef6\\r\\n~~~\\r\\nnpm run build -- --locale zh-Hans\\r\\n~~~\\r\\n\\r\\n### \u4f7f\u7528deploy\u90e8\u7f72\\r\\n\u5728\u4f7f\u7528deploy\u90e8\u7f72\u5230GitHub\u65f6\uff0cdeploymentBranch\u7684\u503c\u9700\u8981\u6307\u5b9a\u4e00\u4e0b\uff0c\u6211\u8bbe\u7f6e\u7684\u503c\u4e3a gh-deploy.GIT_USER\u7684\u503c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u914d\u7f6e\u73af\u5883\u6765\u8bbe\u7f6e\uff0c\u4e4b\u540e\u5c31\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884cyarn deploy -- --locale zh-Hans\\r\\n\\r\\n~~~\\r\\ncmd /C \\"set \\"GIT_USER=<GITHUB_USERNAME>\\" && yarn deploy -- --locale zh-Hans\\"\\r\\n~~~\\r\\n### docker\u90e8\u7f72\\r\\n#### Dockerfile\u5185\u5bb9\\r\\n~~~\\r\\nFROM nginx\\r\\nCOPY build /usr/share/nginx/html\\r\\n~~~\\r\\n\\r\\n####  \u6784\u5efaImage\\r\\n~~~\\r\\ndocker  build -t superset-doc-zh .\\r\\n~~~\\r\\n####\\r\\n~~~\\r\\ndocker run --name superset-doc-zh -d -p 8080:80 superset-doc-zh\\r\\n~~~\\r\\n\\r\\n### \u53c2\u8003\\r\\n[Docusaurus \u90e8\u7f72](https://docusaurus.io/zh-CN/docs/deployment)\\r\\n\\r\\n[Docusaurus \u56fd\u9645\u5316](https://docusaurus.io/zh-CN/docs/i18n/tutorial)\\r\\n\\r\\n[Nginx Docker\u955c\u50cf\u4f7f\u7528](https://hub.docker.com/_/nginx)"}]}')}}]);