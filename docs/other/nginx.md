## 安装

### CentOS 安装 Nginx

##### 安装相关依赖

```shell
yum -y install gcc-c++ zlib zlib-devel openssl openssl-devel pcre pcre-devel
```

##### 下载压缩包

```shell
wget https://nginx.org/download/nginx-1.20.2.tar.gz
```

##### 解压压缩包

```shell
tar -zxvf nginx-1.20.2.tar.gz
```

##### 编译安装

```shell
cd ./nginx-1.20.2
./configure
make
make install
```

##### 查看安装路径

```shell
whereis nginx
```

##### 配置环境变量

```shell
vim /etc/profile
i # 进入编辑模式
# 文件最后加入这两句
export NGINX_HOME=/usr/local/nginx
export PATH=$NGINX_HOME/sbin:$PATH
esc # 退出编辑模式
:wq # 保存并退出
source /etc/profile # 重载配置文件
```

##### 查看版本号

```shell
nginx -v
```

##### 启动 Nginx

```shell
nginx
```

## 常用命令

```shell
nginx # 启动
nginx stop # 停止
nginx -s quit # 安全退出
nginx -s reload # 重新加载配置文件
ps aux|grep nginx # 查看nginx进程
```

## Mac 安装 Nginx

### 安装
```shell
brew install nginx
```
### 启动
```shell
brew services start nginx
```
### 编辑配置文件
```shell
vi /opt/homebrew/etc/nginx/nginx.conf
```
### 重启nginx
```shell
brew services restart nginx
```
