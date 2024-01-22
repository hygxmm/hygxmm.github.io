## mac 查看某个端口的占用情况

```shell
lsof -i:8080
```

## mac 结束某个进程

```shell
kill -9 1234
```

## node 版本切换

```shell
# fnm list
# fnm list-remote
# fnm unalias alias
# fnm exec
# fnm env
# fnm default
# fnm current
# fnm completions
# fnm alias
# fnm install version
# fnm uninstall version
# fnm use [version or alias]

```

## 使用 vite 创建 react 项目

```shell
yarn create vite
yarn add antd
yarn add --dev --exact prettier
echo {}> .prettierrc.json




```

## CentOS 服务器环境搭建

1. 远程连接 ECS 实例
2. 安装 Docker

- 2.1 运行以下命令，下载 docker-ce 的 yum 源。

```shell
sudo wget -O /etc/yum.repos.d/docker-ce.repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

- 2.2 运行以下命令，安装 Docker。

```shell
sudo yum -y install docker-ce
```

3. 执行以下命令，检查 Docker 是否安装成功。

```shell
sudo docker -v
```

4. 执行以下命令，启动 Docker 服务，并设置开机自启动。

```shell
sudo systemctl start docker
sudo systemctl enable docker
```

5. 执行以下命令，查看 Docker 是否启动。

```shell
sudo systemctl status docker
```

6. 安装 docker-compose

- 6.1 运行以下命令，安装 setuptools。

```shell
pip3 install -U pip setuptools
```

- 6.2 运行以下命令，安装 docker-compose。

```shell
pip3 install docker-compose
```

7. 运行以下命令，验证 docker-compose 是否安装成功。

```shell
docker-compose --version
```

8. 安装 rancher

```
docker run -d --restart=unless-stopped \
  -p 8000:80 -p 8443:443 \
  -v /opt/rancher:/var/lib/rancher \
  --privileged \
  rancher/rancher:latest
```

9. 访问 rancher 管理页面(http://{服务器公网 IP or 绑定的域名}:8443)

10. 创建集群

11. 添加主机
