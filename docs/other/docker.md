## 常用命令

1. 管理 Docker 守护进程

```
sudo systemctl start docker     #运行Docker守护进程
sudo systemctl stop docker      #停止Docker守护进程
sudo systemctl restart docker   #重启Docker守护进程
sudo systemctl enable docker    #设置Docker开机自启动
sudo systemctl status docker    #查看Docker的运行状态
```

2. 管理镜像

- 2.1 拉取镜像

```
sudo docker pull registry.cn-hangzhou.aliyuncs.com/lxepoo/apache-php5
```

- 2.2 修改标签。如果镜像名称较长，您可以修改镜像标签以便记忆区分。

```
sudo docker tag registry.cn-hangzhou.aliyuncs.com/lxepoo/apache-php5:latest aliweb:v1
```

- 2.3 查看已有镜像。

```
sudo docker images
```

- 2.4 强制删除镜像。

```
sudo docker rmi -f registry.cn-hangzhou.aliyuncs.com/lxepoo/apache-php5
```

3. 管理容器

- 3.1 启动一个新容器。

  ```
  sudo docker run -it <镜像ID> /bin/bash
  ```

- 3.2 启动一个新的容器，让容器在后台运行，并且指定容器的名称。
  ```
  sudo docker run -d --name <容器名> <镜像ID>
  ```
- 3.3 查看容器 ID。
  ```
  sudo docker ps
  ```
- 3.4 将容器做成镜像。
  ```
  sudo docker commit <容器ID或容器名> <仓库名>:<标签>
  ```

### 创建容器镜像

```shell
docker build -t project-name -f Dockerfile.local .
# -t 指定镜像名称，这里就是project-name
# -f 指定构建使用的配置文件，默认是项目下的Dockerfile文件
# . 指定命令执行目录
```

### 启动容器

```shell
docker run -m 100mi -p 3000:80 project-name
# -m 用多大的内存来运行服务
# -d 以分离模式在后台运行
# -p 3000:80 把主机的3000端口映射到容器的80端口,前面是本机访问的端口，后面是镜像服务启动的端口
# project-name 要启动的容器镜像名称
```

## Dockerfile 示例

一份常规的 Dockerfile 配置

```shell
# stage 1
FROM node:16-alpine as builder # 指定打包环境的node版本,使用`alpine`版本可有效减小镜像体积

WORKDIR /usr/src/app/ # 工作目录
USER root # 用户

# 配置中国镜像源,加快打包体积
RUN npm i -g mirror-config-china --registry=https://registry.npmmirror.com/ --unsafe-perm=true --allow-root
RUN yarn config set registry https://mirrors.cloud.tencent.com/npm/

COPY package.json ./

# 根据使用的包管理工具选择命令
COPY yarn.lock ./
# or
COPY package-lock.json ./

# 安装依赖
RUN yarn
or
RUN npm install

# 复制项目源码到工作目录
COPY ./ ./

# 执行打包命令(根据项目具体配置及要发布的环境来写执行命令)
RUN yarn run build:prod

# 对打包产物进行gzip压缩,进一步减小镜像包大小
RUN  find dist -name "*" -type f -print0 | xargs -0 gzip -9 -k

# 使用多级构建,有效减小镜像体积
# stage 2
FROM nginx:stable-alpine

# 指定nginx工作目录
WORKDIR /usr/share/nginx/html/

# 复制项目中的nginx配置文件到服务器中的nginx目录下
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# 复制上一阶段构建的打包产物放到nginx目录下
COPY --from=builder /usr/src/app/dist  /usr/share/nginx/html/

```
