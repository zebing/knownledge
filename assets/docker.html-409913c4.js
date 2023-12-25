import{_ as i,M as r,p as s,q as t,R as e,t as n,N as a,a1 as l}from"./framework-5866ffd3.js";const c={},o=e("h1",{id:"docker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker","aria-hidden":"true"},"#"),n(" Docker")],-1),u={href:"https://docker-doc.readthedocs.io/zh_CN/latest/index.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://docs.docker.com/get-started/overview/",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),n(" 安装")],-1),m={href:"https://docs.docker.com/engine/install/#desktop",target:"_blank",rel:"noopener noreferrer"},b={href:"https://docs.docker.com/engine/install/#server",target:"_blank",rel:"noopener noreferrer"},g=l(`<h2 id="镜像" tabindex="-1"><a class="header-anchor" href="#镜像" aria-hidden="true">#</a> 镜像</h2><p>获取镜像列表</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>构建镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker build -t group/name:1.0.2 .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rmi Id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>批量删除镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rmi $(docker images | grep &quot;none&quot; | awk &#39;{print $3}&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="容器" tabindex="-1"><a class="header-anchor" href="#容器" aria-hidden="true">#</a> 容器</h2><p>运行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -p outport:inport group/name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker start group/name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>停止</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker stop group/name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker restart group/name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>容器信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker ps -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker rm Id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入容器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo docker exec -it 1b15a89f5fb5 /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置文件-dockerfile" tabindex="-1"><a class="header-anchor" href="#配置文件-dockerfile" aria-hidden="true">#</a> 配置文件 Dockerfile</h2><p>https://docs.docker.com/engine/reference/builder/#usage</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FROM node:lts-alpine

RUN mkdir /app

WORKDIR /app

# 只有部分文件如 package.json 发生变更的时候，才重新执行 npm install
COPY package*.json /app
RUN npm install

COPY . /app

RUN npm install pm2 -g

ENV NODE_ENV=production
ENV BUILD_ENV=production

RUN npm run build
CMD pm2-runtime server/serve.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>test</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker build -t test/demo -f docker/test/Dockerfile .
docker run -p 80:3006 test/demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>production</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker build -t production/demo -f docker/production/Dockerfile .
docker run -p 80:3006 production/demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function x(h,k){const d=r("ExternalLinkIcon");return s(),t("div",null,[o,e("p",null,[e("a",u,[n("docker中文文档"),a(d)])]),e("p",null,[e("a",v,[n("docker 官方文档"),a(d)])]),p,e("p",null,[e("a",m,[n("桌面端"),a(d)])]),e("p",null,[e("a",b,[n("服务端"),a(d)])]),g])}const f=i(c,[["render",x],["__file","docker.html.vue"]]);export{f as default};
