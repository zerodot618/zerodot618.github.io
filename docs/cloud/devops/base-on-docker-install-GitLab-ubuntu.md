# 基于 Docker 安装 GitLab(Ubuntu)
安装 docker
```
sudo apt-get install docker
```
安装 docker.io:
```
sudo apt-get install docker.io -y
```
安装 docker-registry：
```
sudo apt-get install docker-registry -y
```
拉取官方hello-world测试镜像:
```
sudo docker pull hello-world
```
当出现类似提示时，说明拉取已经成功
```
Using default tag: latest
latest: Pulling from library/hello-world
2db29710123e: Pull complete 
Digest: sha256:62af9efd515a25f84961b70f973a798d2eca956b1b2b026d0a4a63a3b0b6a3f2
Status: Downloaded newer image for hello-world:latest
```
运行官方hello-world测试镜像
```
sudo docker run hello-world
```
当出现类似内容时，说明docker安装已经成功
```
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```
GitLab docker的拉取
```
sudo docker pull beginor/gitlab-ce:11.3.0-ce.0 
```
看到以下类似信息，就说明拉取已经成功了
```
Digest: sha256:dc9aad54048a4f64a4a64659be819ecbc2b26ae5e4fc8d6d462301a972be8de3
Status: Downloaded newer image for beginor/gitlab-ce:11.3.0-ce.0
```
创建三个目录存储Docker运行时产生的应用数据(data),日志(logs)和配置文件(config)
```
sudo mkdir -p /gitlab/data /gitlab/logs /gitlab/config
```
输入以下指令来临时测试Docker启动是否正常
```
sudo docker run --detach \--publish 8443:443 --publish 8000:80 --publish 2222:22 \--name gitlab \--restart always \--volume /gitlab/config:/etc/gitlab \--volume /gitlab/logs:/var/log/gitlab \--volume /gitlab/data:/var/opt/gitlab \-log-driver=none \beginor/gitlab-ce:11.3.0-ce.0
```
指令参数解释

- –detach 设置容器后台运行
- –publish 映射docker内部端口，格式 本机端口:docker内端口 指令中开放了3个端口:443,80,22,分别绑定了8443,8000,2222
- –name 容器名称
- –restart always 每次启动容器就重启GitLab
- –volume 设置GitLab数据挂载位置

查看gitlab容器状态：
```
sudo docker ps
```
> 注意:当STATUS一栏由 health: starting 变为 healthy 时，才表示启动成功,第一次启动耗时约 几分钟，请耐心等待。

测试访问GitLab
启动成功后，一切就准备就绪了，下面可以点击访问 http://主机ip地址:8000 这个IP地址进入您主机正在运行的GitLab网站中。

至此，全部的安装已经完成！


