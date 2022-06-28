# Docker

## 安装
[桌面端](https://docs.docker.com/engine/install/#desktop)

[服务端](https://docs.docker.com/engine/install/#server)

## 镜像
获取镜像列表
```
docker images
```

构建镜像
```
docker build -t group/name:1.0.2 .
```

删除镜像
```
docker rmi Id
```

批量删除镜像
```
docker rmi $(docker images | grep "none" | awk '{print $3}')
```
## 容器
运行
```
docker run -p outport:inport group/name
```

启动
```
docker start group/name
```

停止
```
docker stop group/name
```

重启
```
docker restart group/name
```

容器信息
```
docker ps -a
```

删除容器
```
docker rm Id
```

进入容器
```
sudo docker exec -it 1b15a89f5fb5 /bin/bash
```
## 配置文件 Dockerfile
https://docs.docker.com/engine/reference/builder/#usage

```
FROM node:lts-alpine

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
```

**test**
```
docker build -t test/demo -f docker/test/Dockerfile .
docker run -p 80:3006 test/demo
```

**production**
```
docker build -t production/demo -f docker/production/Dockerfile .
docker run -p 80:3006 production/demo
```
