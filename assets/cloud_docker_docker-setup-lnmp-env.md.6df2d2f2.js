import{_ as s,o as n,c as a,d as p}from"./app.4a48495f.js";const y=JSON.parse('{"title":"Docker \u642D\u5EFA LNMP \u73AF\u5883","description":"","frontmatter":{},"headers":[],"relativePath":"cloud/docker/docker-setup-lnmp-env.md"}'),l={name:"cloud/docker/docker-setup-lnmp-env.md"},e=p(`<h1 id="docker-\u642D\u5EFA-lnmp-\u73AF\u5883" tabindex="-1">Docker \u642D\u5EFA LNMP \u73AF\u5883 <a class="header-anchor" href="#docker-\u642D\u5EFA-lnmp-\u73AF\u5883" aria-hidden="true">#</a></h1><p>Docker\uFF1A\u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u5E94\u7528\u7EA7\u522B\u7684\u865A\u62DF\u5316\u5DE5\u5177\uFF0C\u80FD\u591F\u8BA9\u60A8\u8F7B\u677E\u800C\u4F18\u96C5\u5730\u90E8\u7F72\u591A\u79CD\u670D\u52A1\uFF0C\u65E0\u9700\u56E0\u4E3A\u5F00\u53D1\u73AF\u5883\u4E0E\u90E8\u7F72\u73AF\u5883\u7684\u4F9D\u8D56\u95EE\u9898\u800C\u7126\u5934\u70C2\u8033\u3002</p><p>LNMP\uFF1ALNMP\u662F\u6307\u4E00\u7EC4\u901A\u5E38\u4E00\u8D77\u4F7F\u7528\u6765\u8FD0\u884C\u52A8\u6001\u7F51\u7AD9\u6216\u8005\u670D\u52A1\u5668\u7684\u81EA\u7531\u8F6F\u4EF6\u540D\u79F0\u9996\u5B57\u6BCD\u7F29\u5199\u3002L\u6307Linux\uFF0CN\u6307Nginx\uFF0CM\u4E00\u822C\u6307MySQL\uFF0C\u4E5F\u53EF\u4EE5\u6307MariaDB\uFF0CP\u4E00\u822C\u6307PHP\u3002</p><p>Docker \u7684\u5B89\u88C5</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">mkdir ~/docker &amp;&amp; cd ~/docker &amp;&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get -y install docker.io</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code>docker version</code> \u6765\u67E5\u770B Docker \u7684\u7248\u672C\u4FE1\u606F\uFF0C<code>docker help</code> \u6765\u67E5\u770B Docker \u7684\u5E2E\u52A9\u6587\u6863\u3002</p><p>\u66F4\u6362\u955C\u50CF\u6E90</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo su -</span></span>
<span class="line"><span style="color:#A6ACCD;">cat &gt;&gt; /etc/docker/daemon.json &lt;&lt;- EOF</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;registry-mirrors&quot;: [&quot;https://mirror.ccs.tencentyun.com&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">EOF</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart docker</span></span>
<span class="line"><span style="color:#A6ACCD;">exit</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0B\u8F7D Nginx \u955C\u50CF</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo docker pull nginx:alpine</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0B\u8F7D PHP \u955C\u50CF</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo docker pull php:7-fpm-alpine</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4E0B\u8F7D PostgreSQL \u955C\u50CF</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo docker pull postgres:alpine</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u67E5\u770B\u955C\u50CF:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo docker image ls</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u542F\u52A8\u5BB9\u5668\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo docker run --rm -d -p 80:80 --name nginx nginx:alpine</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u4E2A\u547D\u4EE4\u4E2D\u6D89\u53CA\u5230\u7684\u53C2\u6570\u6709\uFF1A</p><ul><li>--rm\uFF1A\u8868\u793A\u8FD9\u4E2A\u5BB9\u5668\u6267\u884C\u5B8C\u540E\u4F1A\u88AB\u76F4\u63A5\u9500\u6BC1\u3002</li><li>--name\uFF1A\u6307\u5B9A\u8FD9\u4E2A\u5BB9\u5668\u7684\u540D\u79F0\u3002</li><li>-d\uFF1A\u8868\u793A\u8FD9\u4E2A\u5BB9\u5668\u4F1A\u5728\u540E\u53F0\u8FD0\u884C\u3002</li><li>-p\uFF1A\u8868\u793A\u5F00\u653E\u5BB9\u5668\u768480\u7AEF\u53E3\u5230\u4E3B\u673A\u768480\u7AEF\u53E3\u3002</li><li>-v\uFF1A\u8868\u793A\u5C06nginx\u7684\u914D\u7F6E\u6587\u4EF6\u6302\u8F7D\u5230\u5BB9\u5668\u7684\u5BF9\u5E94\u76EE\u5F55</li></ul><p>\u5B8C\u6210\u540E\u60A8\u5E94\u8BE5\u53EF\u4EE5\u5728\u5BF9\u5E94\u7684\u7F51\u5740\uFF08<a href="http://xn--IP-wz2cw66akcq04j/%EF%BC%89%E4%B8%8A%E7%9C%8B%E5%88%B0" target="_blank" rel="noreferrer">http://\u4E3B\u673AIP\u5730\u5740/\uFF09\u4E0A\u770B\u5230</a> Nginx \u7684\u9ED8\u8BA4\u6B22\u8FCE\u754C\u9762\u4E86\u3002</p><p>\u505C\u6B62\u4E00\u4E2A\u5BB9\u5668\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo docker stop &lt;\u5BB9\u5668ID\u6216\u5BB9\u5668\u540D\u79F0&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u67E5\u770B\u6240\u6709\u5BB9\u5668\u53CA\u5176ID</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo docker container ls</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5C1D\u8BD5\u505C\u6B62Nginx</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo docker stop nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7531\u4E8E LNMP \u5171\u75313\u4E2A\u5BB9\u5668\u7EC4\u6210\uFF0C\u5355\u4E2A\u542F\u52A8\u8FC7\u4E8E\u9EBB\u70E6\uFF0C\u63A8\u8350\u60A8\u4F7F\u7528 docker-compose \u7BA1\u7406\u5E76\u542F\u52A8\u5B83\u4EEC\u3002</p><p>\u5B89\u88C5 docker-compose</p><p>docker-compose \u662F Docker \u7684\u591A\u4E2A\u670D\u52A1\u90E8\u7F72\u5DE5\u5177\uFF0C\u4EE5\u65B9\u4FBF\u5730\u540C\u65F6\u542F\u52A8\u591A\u4E2A\u5BB9\u5668\u3002 \u60A8\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u65B9\u4FBF\u5730\u5B89\u88C5\u5B83\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo apt-get install -y python-pip &amp;&amp; sudo pip install docker-compose</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u521B\u5EFA docker-compose \u7684\u914D\u7F6E\u6587\u4EF6</p><p>\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u60A8\u5E0C\u671B\u4F7F\u7528 docker-compose \u6765\u542F\u52A8\u7684\u9879\u76EE\uFF0C\u60A8\u90FD\u5E94\u8BE5\u5728 \u8BE5\u9879\u76EE\u7684\u76EE\u5F55\u4E0B \u914D\u7F6E docker-compose.yml \u521B\u5EFAdocker-compose.yml\u6587\u4EF6</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">touch ~/docker/docker-compose.yml</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7F16\u8F91 docker-compose \u7684\u914D\u7F6E\u6587\u4EF6,\u53C2\u8003\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">version: &quot;3&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">services:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  Nginx:</span></span>
<span class="line"><span style="color:#A6ACCD;">    image: nginx:alpine</span></span>
<span class="line"><span style="color:#A6ACCD;">    ports:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - 80:80</span></span>
<span class="line"><span style="color:#A6ACCD;">    volumes:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - ./web:/usr/share/nginx/html:ro</span></span>
<span class="line"><span style="color:#A6ACCD;">      - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  PHP:</span></span>
<span class="line"><span style="color:#A6ACCD;">    image: undefined01/php:7-fpm-alpine</span></span>
<span class="line"><span style="color:#A6ACCD;">    volumes:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - ./web:/var/www/html:rw</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  Database:</span></span>
<span class="line"><span style="color:#A6ACCD;">    image: postgres:alpine</span></span>
<span class="line"><span style="color:#A6ACCD;">    environment:</span></span>
<span class="line"><span style="color:#A6ACCD;">      POSTGRES_USER: &quot;postgres&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      POSTGRES_PASSWORD: &quot;rootroot&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    volumes:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - ./data:/var/lib/postgresql/data:rw</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\u4E2D\u6D89\u53CA\u5230\u7684\u53C2\u6570\u6709\uFF1A</p><ul><li>version\uFF1A\u8868\u793A\u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\u4F7F\u7528\u7B2C\u4E09\u5957\u6807\u51C6\u3002</li><li>services\uFF1A\u8868\u793A\u9700\u8981\u542F\u52A8\u7684\u670D\u52A1\uFF08\u5BB9\u5668\uFF09\u5217\u8868</li></ul><p>\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u670D\u52A1\uFF0C\u53C8\u6709\uFF1A</p><ul><li>image\uFF1A\u8868\u793A\u8BE5\u670D\u52A1\u4F7F\u7528\u7684\u955C\u50CF\u3002</li><li>ports\uFF1A\u8868\u793A\u8BE5\u670D\u52A1\u5F00\u653E\u7684\u7AEF\u53E3\u3002</li><li>volumes\uFF1A\u8868\u793A\u5C06\u67D0\u76EE\u5F55\u6216\u6587\u4EF6\u6302\u8F7D\u5230\u5BB9\u5668\u7684\u76F8\u5E94\u4F4D\u7F6E\u4E0A\uFF0C\u540E\u9762\u7684ro\u3001rw\u8868\u793A\u5BF9\u4E8E\u5BB9\u5668\u662F\u5426\u53EF\u8BFB\u5199\u3002\u6B64\u5904\u6302\u8F7D\u4E86\u914D\u7F6E\u6587\u4EF6\u3001\u6570\u636E\u5E93\u548C\u7F51\u7AD9\u4EE3\u7801\u3002</li><li>enviornment\uFF1A\u8BBE\u7F6E\u8BE5\u5BB9\u5668\u7684\u73AF\u5883\u53D8\u91CF\u3002\u6B64\u5904\u901A\u8FC7\u73AF\u5883\u53D8\u91CF\u7684\u5F62\u5F0F\u8BBE\u7F6E\u6570\u636E\u5E93\u7684\u8D26\u53F7\u548C\u5BC6\u7801\u3002</li></ul><p>\u521B\u5EFAnginx.conf\u6587\u4EF6</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">touch ~/docker/nginx.conf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7F16\u8F91 Nginx \u7684\u914D\u7F6E\u6587\u4EF6 \u4E3A\u4E86\u8BA9 Nginx \u80FD\u591F\u5C06\u8BF7\u6C42\u987A\u5229\u7684\u8F6C\u4EA4\u7ED9 PHP \u5904\u7406\uFF0C\u6211\u4EEC\u9700\u8981\u66F4\u6539 Nginx \u7684\u914D\u7F6E\u6587\u4EF6\u3002\u53C2\u8003\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen       80;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name  localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">        root   /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        index  index.php index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    location = /50x.html {</span></span>
<span class="line"><span style="color:#A6ACCD;">        root   /usr/share/nginx/html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    location ~ \\.php$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_pass   PHP:9000;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_index  index.php;</span></span>
<span class="line"><span style="color:#A6ACCD;">        fastcgi_param  SCRIPT_FILENAME  /var/www/html/$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#A6ACCD;">        include        fastcgi_params;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u4F55\u66F4\u6539\u5BB9\u5668\u91CC\u7684\u914D\u7F6E\u6587\u4EF6\uFF1F</p><p>\u5F88\u7B80\u5355\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5728\u672C\u5730\u7F16\u8F91\u597D\u540E\u6302\u8F7D\u5230\u5BB9\u5668\u4E2D\u53BB\uFF08\u4F1A\u8986\u76D6\u5BB9\u5668\u4E2D\u7684\u6587\u4EF6\uFF09\uFF0C\u524D\u9762\u5C0F\u8282\u4E2D\u9884\u7559\u7684nginx.conf\u5C31\u662F\u4E3A\u6B64\u3002</p><p>\u5982\u4F55\u8BA9 Nginx \u5BB9\u5668\u4E0E PHP \u5BB9\u5668\u901A\u8BAF\uFF1F</p><p>\u60A8\u53EF\u80FD\u6CE8\u610F\u5230\u4E86\u4E0B\u9762\u63D0\u4F9B\u53C2\u8003\u7684 nginx.conf \u91CC\u7528\u5230\u4E86PHP:9000\u8FD9\u6837\u7684\u5730\u5740\u3002\u6CA1\u9519\uFF0C\u5BF9\u4E8E\u7531 docker-compose \u542F\u52A8\u7684\u6240\u6709\u5BB9\u5668\uFF0C\u90FD\u4F1A\u81EA\u52A8\u52A0\u5165\u7531 docker \u7EF4\u62A4\u7684\u5C40\u57DF\u7F51\u4E2D\uFF0C\u5E76\u4E14\u4F1A\u81EA\u52A8\u4E3A\u5176\u4ED6\u5BB9\u5668\u5C06\u67D0\u5BB9\u5668\u7684\u540D\u79F0\uFF08\u5982 PHP \uFF09\u89E3\u6790\u6210\u76F8\u5E94\u7684\u5C40\u57DF\u7F51IP\u3002</p><p>\u4F7F\u7528 docker-compose \u542F\u52A8\u670D\u52A1</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo docker-compose up -d</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u67E5\u770B\u542F\u52A8\u670D\u52A1\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo docker container ls</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EE5\u4E0A\u547D\u4EE4\u90FD\u4F7F\u7528\u4E86root\u6743\u9650\uFF0C\u56E0\u6B64\u60A8\u5982\u679C\u60F3\u8981\u4FEE\u6539\u5176\u4E2D\u7684\u5185\u5BB9\u53EF\u80FD\u4E0D\u592A\u65B9\u4FBF\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u6765\u83B7\u53D6\u7F16\u8F91\u6743\u9650\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo chmod -R 777 ./data ./web</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6D4B\u8BD5PHP\u3002 \u521B\u5EFAindex.php\u6587\u4EF6</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">touch ~/docker/web/index.php</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7F16\u8F91index.php\u6587\u4EF6\uFF0C\u53C2\u8003\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;?php</span></span>
<span class="line"><span style="color:#A6ACCD;">phpinfo();</span></span>
<span class="line"><span style="color:#A6ACCD;">?&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679C\u4E00\u5207\u987A\u5229\u7684\u8BDD\uFF0C\u60A8\u5C31\u53EF\u4EE5\u5728<a href="http://xn--IP-wz2cw66akcq04j/index.php%E7%9C%8B%E5%88%B0" target="_blank" rel="noreferrer">http://\u4E3B\u673AIP\u5730\u5740/index.php\u770B\u5230</a> php \u7684\u76F8\u5173\u4FE1\u606F\u4E86\u3002</p><p>\u6D4B\u8BD5 PostgreSQL\u3002 \u60A8\u8FD8\u8BB0\u5F97\u5BC6\u7801\u5417\uFF1F\u5C31\u5728 docker-compose \u4E2D\u914D\u7F6E\u4E86\u3002\u56E0\u6B64\u5728\u5B9E\u9645\u73AF\u5883\u4E2D\u60A8\u4E00\u5B9A\u8981\u6CE8\u610F\u8BE5\u6587\u4EF6\u7684\u8BBF\u95EE\u6743\u9650\u3002</p><p>\u81F3\u4E8E PostgreSQL \u6570\u636E\u5E93\u7684\u5730\u5740\u561B\uFF0C\u5C31\u662F\u8FD9\u4E2A\u5BB9\u5668\u7684\u540D\u79F0\uFF08\u6B64\u5904\u662F Database \uFF09\u3002\u60A8\u53EF\u4EE5\u628A\u5B83\u60F3\u8C61\u4E3A\u4E00\u4E2A\u57DF\u540D\u5C31\u597D\u4E86\u3002</p><p>\u521B\u5EFAtest.php\u6587\u4EF6</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">touch ~/docker/web/test.php</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u7F16\u8F91test.php\u6587\u4EF6\uFF0C \u53C2\u8003\u5185\u5BB9\u5982\u4E0B:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;?php</span></span>
<span class="line"><span style="color:#A6ACCD;">$dbconn = pg_connect(&#39;host=Database user=postgres password=rootroot&#39;) or die(&#39;Could not connect: &#39; . pg_last_error());</span></span>
<span class="line"><span style="color:#A6ACCD;">pg_query(&#39;CREATE TABLE IF NOT EXISTS test ( tester INT )&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pg_query(&#39;INSERT INTO test VALUES (0)&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">$res = pg_query(&#39;SELECT * FROM test&#39;) or die(&#39;Query failed: &#39; . pg_last_error());</span></span>
<span class="line"><span style="color:#A6ACCD;">$num = pg_num_rows($res);</span></span>
<span class="line"><span style="color:#A6ACCD;">echo &quot;You have visited this site $num times&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">pg_free_result($res);</span></span>
<span class="line"><span style="color:#A6ACCD;">pg_close($dbconn);</span></span>
<span class="line"><span style="color:#A6ACCD;">?&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5982\u679C\u4E00\u5207\u987A\u5229\u7684\u8BDD\uFF0C\u60A8\u5C31\u53EF\u4EE5\u5728<a href="http://xn--ip-wz2cw66akcq04j/test.php" target="_blank" rel="noreferrer">http://\u4E3B\u673Aip\u5730\u5740/test.php</a> \u770B\u5230\u4E00\u4E2A\u7F51\u9875\u8BA1\u6570\u5668\u3002\u4E0D\u65AD\u5237\u65B0\u5B83\u8BD5\u8BD5\u770B\u3002</p><p>\u505C\u6B62\u670D\u52A1\uFF0C\u5B83\u4F1A\u81EA\u52A8\u9500\u6BC1\u76F8\u5E94\u7684\u5BB9\u5668\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo docker-compose down</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u547D\u4EE4\u67E5\u770B docker \u76EE\u5F55\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ls  -la ~/docker</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6570\u636E\u5E93\u5DF2\u7ECF\u4FDD\u5B58\u5728\u5F53\u524D docker \u76EE\u5F55\u4E0B\u7684 data \u6587\u4EF6\u5939\u4E2D\u4E86\uFF0C\u7528\u547D\u4EE4\u67E5\u770B\uFF1A</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ls -lf ./data</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4EC0\u4E48\uFF1F\u9500\u6BC1\uFF1F\u522B\u62C5\u5FC3\uFF0C\u8FC1\u79FB\u5230\u4EFB\u4F55\u4E00\u53F0\u65B0\u7684\u4E3B\u673A\uFF0C\u53EA\u9700\u8981\u5C06\u8BE5\u76EE\u5F55\u6253\u5305\u5E26\u8D70\u5C31\u884C\u4E86\uFF01 \u4E0D\u4FE1\uFF1F\u60A8\u53EF\u4EE5\u91CD\u65B0\u542F\u52A8\u4E0A\u9762\u7684\u793A\u4F8B\uFF0C\u5237\u65B0 test.php \u8FD9\u4E2A\u8BA1\u6570\u7F51\u9875, \u770B\u770B\u6570\u636E\u5E93\u662F\u5426\u88AB\u4FDD\u5B58\u4E86\u4E0B\u6765\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">sudo docker-compose up -d</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,74),o=[e];function c(t,r,i,A,C,d){return n(),a("div",null,o)}const g=s(l,[["render",c]]);export{y as __pageData,g as default};
