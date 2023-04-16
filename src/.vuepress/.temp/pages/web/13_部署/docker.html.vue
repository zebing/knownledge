<template><div><h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1>
<p><a href="https://docker-doc.readthedocs.io/zh_CN/latest/index.html" target="_blank" rel="noopener noreferrer">docker中文文档<ExternalLinkIcon/></a></p>
<p><a href="https://docs.docker.com/get-started/overview/" target="_blank" rel="noopener noreferrer">docker 官方文档<ExternalLinkIcon/></a></p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<p><a href="https://docs.docker.com/engine/install/#desktop" target="_blank" rel="noopener noreferrer">桌面端<ExternalLinkIcon/></a></p>
<p><a href="https://docs.docker.com/engine/install/#server" target="_blank" rel="noopener noreferrer">服务端<ExternalLinkIcon/></a></p>
<h2 id="镜像" tabindex="-1"><a class="header-anchor" href="#镜像" aria-hidden="true">#</a> 镜像</h2>
<p>获取镜像列表</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>构建镜像</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker build -t group/name:1.0.2 .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除镜像</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker rmi Id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>批量删除镜像</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker rmi $(docker images | grep "none" | awk '{print $3}')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="容器" tabindex="-1"><a class="header-anchor" href="#容器" aria-hidden="true">#</a> 容器</h2>
<p>运行</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker run -p outport:inport group/name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker start group/name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>停止</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker stop group/name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker restart group/name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>容器信息</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker ps -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除容器</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker rm Id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入容器</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo docker exec -it 1b15a89f5fb5 /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置文件-dockerfile" tabindex="-1"><a class="header-anchor" href="#配置文件-dockerfile" aria-hidden="true">#</a> 配置文件 Dockerfile</h2>
<p>https://docs.docker.com/engine/reference/builder/#usage</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>FROM node:lts-alpine

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>test</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker build -t test/demo -f docker/test/Dockerfile .
docker run -p 80:3006 test/demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>production</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>docker build -t production/demo -f docker/production/Dockerfile .
docker run -p 80:3006 production/demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


