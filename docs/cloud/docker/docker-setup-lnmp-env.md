# Docker 搭建 LNMP 环境
Docker：是一个开源的应用级别的虚拟化工具，能够让您轻松而优雅地部署多种服务，无需因为开发环境与部署环境的依赖问题而焦头烂耳。

LNMP：LNMP是指一组通常一起使用来运行动态网站或者服务器的自由软件名称首字母缩写。L指Linux，N指Nginx，M一般指MySQL，也可以指MariaDB，P一般指PHP。

Docker 的安装
```
mkdir ~/docker && cd ~/docker &&
sudo apt-get -y install docker.io
```
完成后，可以通过 `docker version` 来查看 Docker 的版本信息，`docker help` 来查看 Docker 的帮助文档。

更换镜像源
```
sudo su -
cat >> /etc/docker/daemon.json <<- EOF
{
  "registry-mirrors": ["https://mirror.ccs.tencentyun.com"]
}
EOF
systemctl restart docker
exit
```

下载 Nginx 镜像
```
sudo docker pull nginx:alpine
```

下载 PHP 镜像
```
sudo docker pull php:7-fpm-alpine
```

下载 PostgreSQL 镜像
```
sudo docker pull postgres:alpine
```

查看镜像:
```
sudo docker image ls
```

启动容器：
```
sudo docker run --rm -d -p 80:80 --name nginx nginx:alpine
```
这个命令中涉及到的参数有：
- --rm：表示这个容器执行完后会被直接销毁。
- --name：指定这个容器的名称。
- -d：表示这个容器会在后台运行。
- -p：表示开放容器的80端口到主机的80端口。
- -v：表示将nginx的配置文件挂载到容器的对应目录

完成后您应该可以在对应的网址（http://主机IP地址/）上看到 Nginx 的默认欢迎界面了。

停止一个容器：
```
sudo docker stop <容器ID或容器名称>
```
查看所有容器及其ID
```
sudo docker container ls
```
尝试停止Nginx
```
sudo docker stop nginx
```

由于 LNMP 共由3个容器组成，单个启动过于麻烦，推荐您使用 docker-compose 管理并启动它们。

安装 docker-compose

docker-compose 是 Docker 的多个服务部署工具，以方便地同时启动多个容器。
您可以使用以下命令方便地安装它。
```
sudo apt-get install -y python-pip && sudo pip install docker-compose
```

创建 docker-compose 的配置文件

对于每一个您希望使用 docker-compose 来启动的项目，您都应该在 该项目的目录下 配置 docker-compose.yml 
创建docker-compose.yml文件
```
touch ~/docker/docker-compose.yml
```

编辑 docker-compose 的配置文件,参考内容如下：
```
version: "3"
services:

  Nginx:
    image: nginx:alpine
    ports:
      - 80:80
    volumes:
      - ./web:/usr/share/nginx/html:ro
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro

  PHP:
    image: undefined01/php:7-fpm-alpine
    volumes:
      - ./web:/var/www/html:rw

  Database:
    image: postgres:alpine
    environment:
      POSTGRES_USER: "postgres"
      POSTGRES_PASSWORD: "rootroot"
    volumes:
      - ./data:/var/lib/postgresql/data:rw
```
这个配置文件中涉及到的参数有：
- version：表示这个配置文件使用第三套标准。
- services：表示需要启动的服务（容器）列表

对于每一个服务，又有：
- image：表示该服务使用的镜像。
- ports：表示该服务开放的端口。
- volumes：表示将某目录或文件挂载到容器的相应位置上，后面的ro、rw表示对于容器是否可读写。此处挂载了配置文件、数据库和网站代码。
- enviornment：设置该容器的环境变量。此处通过环境变量的形式设置数据库的账号和密码。

创建nginx.conf文件
```
touch ~/docker/nginx.conf
```

编辑 Nginx 的配置文件
为了让 Nginx 能够将请求顺利的转交给 PHP 处理，我们需要更改 Nginx 的配置文件。参考内容如下：
```
server {
    listen       80;
    server_name  localhost;

    location / {
        root   /usr/share/nginx/html;
        index  index.php index.html index.htm;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    location ~ \.php$ {
        fastcgi_pass   PHP:9000;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  /var/www/html/$fastcgi_script_name;
        include        fastcgi_params;
    }
}
```
如何更改容器里的配置文件？

很简单，我们只需要在本地编辑好后挂载到容器中去（会覆盖容器中的文件），前面小节中预留的nginx.conf就是为此。

如何让 Nginx 容器与 PHP 容器通讯？

您可能注意到了下面提供参考的 nginx.conf 里用到了PHP:9000这样的地址。没错，对于由 docker-compose 启动的所有容器，都会自动加入由 docker 维护的局域网中，并且会自动为其他容器将某容器的名称（如 PHP ）解析成相应的局域网IP。

使用 docker-compose 启动服务
```
sudo docker-compose up -d
```
查看启动服务：
```
sudo docker container ls
```

以上命令都使用了root权限，因此您如果想要修改其中的内容可能不太方便。您可以使用以下命令来获取编辑权限。
```
sudo chmod -R 777 ./data ./web
```

测试PHP。
创建index.php文件
```
touch ~/docker/web/index.php
```

编辑index.php文件，参考内容如下：
```
<?php
phpinfo();
?>
```
如果一切顺利的话，您就可以在http://主机IP地址/index.php看到 php 的相关信息了。

测试 PostgreSQL。
您还记得密码吗？就在 docker-compose 中配置了。因此在实际环境中您一定要注意该文件的访问权限。

至于 PostgreSQL 数据库的地址嘛，就是这个容器的名称（此处是 Database ）。您可以把它想象为一个域名就好了。

创建test.php文件
```
touch ~/docker/web/test.php
```
编辑test.php文件， 参考内容如下:
```
<?php
$dbconn = pg_connect('host=Database user=postgres password=rootroot') or die('Could not connect: ' . pg_last_error());
pg_query('CREATE TABLE IF NOT EXISTS test ( tester INT )');

pg_query('INSERT INTO test VALUES (0)');
$res = pg_query('SELECT * FROM test') or die('Query failed: ' . pg_last_error());
$num = pg_num_rows($res);
echo "You have visited this site $num times";

pg_free_result($res);
pg_close($dbconn);
?>
```

如果一切顺利的话，您就可以在http://主机ip地址/test.php 看到一个网页计数器。不断刷新它试试看。

停止服务，它会自动销毁相应的容器：
```
sudo docker-compose down
```
命令查看 docker 目录：
```
ls  -la ~/docker
```
数据库已经保存在当前 docker 目录下的 data 文件夹中了，用命令查看：
```
ls -lf ./data
```
什么？销毁？别担心，迁移到任何一台新的主机，只需要将该目录打包带走就行了！
不信？您可以重新启动上面的示例，刷新 test.php 这个计数网页, 看看数据库是否被保存了下来。
```
sudo docker-compose up -d
```