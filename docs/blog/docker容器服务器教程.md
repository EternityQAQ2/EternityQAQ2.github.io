---
title: docker容器服务器教程
tags:
  - docker
createTime: 2026/11/18 21:33:27
permalink: /blog/jyj92bt5/
---
# 服务器部署 Docker 容器

本文介绍如何使用 Docker Compose 在服务器部署容器，并通过 Nginx 反向代理和 HTTPS 域名访问。
本文以 Memos 部署为例。

## 手动部署

### 1. 准备部署目录

通用写法如下，将 `your-project` 替换成项目名称：

```bash
mkdir -p ~/your-project/data
cd ~/your-project
```

以 Memos 为例：

```bash
mkdir -p ~/memos/data
cd ~/memos
```

`~/memos` 用于存放 Compose 配置，`~/memos/data` 用于保存应用数据。

### 2. 创建 Compose 配置

在项目目录中创建 `compose.yaml`。

```yaml
services:
  service-name:
    image: 镜像名称:版本
    container_name: 容器名称
    restart: unless-stopped
    ports:
      - "127.0.0.1:宿主机端口:容器端口"
    volumes:
      - ./data:/容器内数据目录
```

以 Memos 为例，创建 `~/memos/compose.yaml`：
# 服务器部署 Docker 容器

本文介绍如何使用 Docker Compose 在服务器部署容器，并通过 Nginx 反向代理和 HTTPS 域名访问。
本文以 Memos 部署为例。

## 手动部署

### 1. 准备部署目录

通用写法如下，将 `your-project` 替换成项目名称：

```bash
mkdir -p ~/your-project/data
cd ~/your-project
```

以 Memos 为例：

```bash
mkdir -p ~/memos/data
cd ~/memos
```

`~/memos` 用于存放 Compose 配置，`~/memos/data` 用于保存应用数据。

### 2. 创建 Compose 配置

在项目目录中创建 `compose.yaml`。

```yaml
services:
  service-name:
    image: 镜像名称:版本
    container_name: 容器名称
    restart: unless-stopped
    ports:
      - "127.0.0.1:宿主机端口:容器端口"
    volumes:
      - ./data:/容器内数据目录
```

以 Memos 为例，创建 `~/memos/compose.yaml`：

```yaml
services:
  memos:
    image: neosmemo/memos:stable
    container_name: memos
    restart: unless-stopped
    ports:
      - "127.0.0.1:5230:5230"
    volumes:
      - ./data:/var/opt/memos
```

配置说明：

- `image`：填写容器镜像名称和版本，可以在 [Docker Hub](https://hub.docker.com/) 查询。
- `restart`：`unless-stopped` 表示 Docker 或服务器重启后自动启动容器；如果手动停止容器，则保持停止状态。

### 3. 启动服务

在 `compose.yaml` 所在目录执行：

```bash
docker compose up -d
```

### 4. 配置域名解析

在域名服务商的 DNS 管理页面添加记录，将子域名指向服务器 IP。例如：

| 类型 | 主机记录 | 记录值 |
|---|---|---|
| A | `memos` | 服务器 IPv4 地址 |

下文以 `memos.example.com` 为例，**请替换成自己的域名**。

### 5. 配置 Nginx 反向代理

将 `your-domain.com` 替换为自己的域名，将 `HOST_PORT` 替换为 Compose 中绑定的宿主机端口：

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:HOST_PORT;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

以 Memos 为例，域名使用 `memos.example.com`，宿主机端口使用 `5230`：

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name memos.example.com;

    location / {
        proxy_pass http://127.0.0.1:5230;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

创建配置文件并启用：

```bash
sudo nano /etc/nginx/sites-available/your-domain.conf
sudo ln -s /etc/nginx/sites-available/your-domain.conf /etc/nginx/sites-enabled/your-domain.conf
sudo nginx -t
sudo systemctl reload nginx
```

Memos 示例中，将文件名替换为 `memos.conf`：

```bash
sudo nano /etc/nginx/sites-available/memos.conf
sudo ln -s /etc/nginx/sites-available/memos.conf /etc/nginx/sites-enabled/memos.conf
sudo nginx -t
sudo systemctl reload nginx
```

如果系统没有 `sites-available` 和 `sites-enabled` 目录，请将配置文件放在该系统实际加载的 Nginx 配置目录中。

### 6. 配置 HTTPS

确认域名已经解析到服务器，并且服务器的 80、443 端口可从公网访问。安装 Certbot 及 Nginx 插件后，使用以下通用命令申请证书：

```bash
sudo certbot --nginx -d your-domain.com
```

Memos 示例：

```bash
sudo certbot --nginx -d memos.example.com
```

按提示完成证书申请后，通过 HTTPS 域名访问服务，例如：

```text
https://memos.example.com
```

### 7. 数据与端口

Compose 中的 `volumes` 将容器数据保存到服务器目录。以 Memos 为例，数据位于 `~/memos/data`。执行 `docker compose down` 会移除容器，但不会删除这个目录。

如果 Compose 将端口绑定到 `127.0.0.1`，应用端口只供服务器本机的 Nginx 访问，不会直接暴露到公网。防火墙开放 Nginx 使用的 80、443 端口即可。

部署其他应用时，把 Nginx 配置中的 `your-domain.com` 和 `HOST_PORT` 分别替换为实际域名和 Compose 中的宿主机端口。


## Portainer 部署

本部分假设服务器上已经安装并运行 Portainer。

### 创建 Stack

登录 Portainer 后：

1. 进入 **Local**。
2. 点击 **Stacks**。
3. 点击 **Add stack**。
4. 在 **Name** 中填写 Stack 名称，例如：

```text
memos
```

### 写入 Stack 内容

在 **Web editor** 中填写 Compose 配置。

通用模板：

```yaml
services:
  service-name:
    image: 镜像名称:版本
    container_name: 容器名称
    restart: unless-stopped
    ports:
      - "宿主机端口:容器端口"
    volumes:
      - /服务器数据目录:/容器内数据目录
```

以 Memos 为例：

```yaml
services:
  memos:
    image: neosmemo/memos:stable
    container_name: memos
    restart: unless-stopped
    ports:
      - "5230:5230"
    volumes:
      - /opt/memos/data:/var/opt/memos
```

在服务器上提前创建数据目录：

```bash
sudo mkdir -p /opt/memos/data
```

配置说明：

- `image`：填写镜像名称和版本，可在 [Docker Hub](https://hub.docker.com/) 查询。
- `restart: unless-stopped`：服务器或 Docker 重启后自动启动；手动停止后保持停止状态。
- `ports`：将服务器端口映射到容器端口。
- `volumes`：将服务器目录挂载到容器内的数据目录，用于持久化保存数据。

### Deploy the stack

确认 Stack 名称和配置内容无误后，点击页面底部的：

```text
Deploy the stack
```

部署完成后，进入：

```text
Local → Stacks → memos
```

可以查看 Stack 状态和容器状态。

也可以进入：

```text
Local → Containers → memos
```

查看容器日志、重启或停止容器。

### 通过 Nginx 反向代理

如果使用 Nginx 反向代理，`proxy_pass` 指向服务器端口：

```nginx
location / {
    proxy_pass http://127.0.0.1:5230;
    proxy_http_version 1.1;

    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

然后使用域名访问 Memos：

```text
https://memos.example.com
```

Stack 部署其他应用时，替换 `image`、端口映射、服务器数据目录和容器数据目录即可。
```yaml
services:
  memos:
    image: neosmemo/memos:stable
    container_name: memos
    restart: unless-stopped
    ports:
      - "127.0.0.1:5230:5230"
    volumes:
      - ./data:/var/opt/memos
```

配置说明：

- `image`：填写容器镜像名称和版本，可以在 [Docker Hub](https://hub.docker.com/) 查询。
- `restart`：`unless-stopped` 表示 Docker 或服务器重启后自动启动容器；如果手动停止容器，则保持停止状态。

### 3. 启动服务

在 `compose.yaml` 所在目录执行：

```bash
docker compose up -d
```

### 4. 配置域名解析

在域名服务商的 DNS 管理页面添加记录，将子域名指向服务器 IP。例如：

| 类型 | 主机记录 | 记录值 |
|---|---|---|
| A | `memos` | 服务器 IPv4 地址 |

下文以 `memos.example.com` 为例，**请替换成自己的域名**。

是的，第五部分以后也应该先给通用配置，再用 Memos 填入实际域名和端口。可以把教程中的第五部分及后续内容改成这样：

### 5. 配置 Nginx 反向代理

将 `your-domain.com` 替换为自己的域名，将 `HOST_PORT` 替换为 Compose 中绑定的宿主机端口：

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:HOST_PORT;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

以 Memos 为例，域名使用 `memos.example.com`，宿主机端口使用 `5230`：

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name memos.example.com;

    location / {
        proxy_pass http://127.0.0.1:5230;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

创建配置文件并启用：

```bash
sudo nano /etc/nginx/sites-available/your-domain.conf
sudo ln -s /etc/nginx/sites-available/your-domain.conf /etc/nginx/sites-enabled/your-domain.conf
sudo nginx -t
sudo systemctl reload nginx
```

Memos 示例中，将文件名替换为 `memos.conf`：

```bash
sudo nano /etc/nginx/sites-available/memos.conf
sudo ln -s /etc/nginx/sites-available/memos.conf /etc/nginx/sites-enabled/memos.conf
sudo nginx -t
sudo systemctl reload nginx
```

如果系统没有 `sites-available` 和 `sites-enabled` 目录，请将配置文件放在该系统实际加载的 Nginx 配置目录中。

### 6. 配置 HTTPS

确认域名已经解析到服务器，并且服务器的 80、443 端口可从公网访问。安装 Certbot 及 Nginx 插件后，使用以下通用命令申请证书：

```bash
sudo certbot --nginx -d your-domain.com
```

Memos 示例：

```bash
sudo certbot --nginx -d memos.example.com
```

按提示完成证书申请后，通过 HTTPS 域名访问服务，例如：

```text
https://memos.example.com
```

### 7. 数据与端口

Compose 中的 `volumes` 将容器数据保存到服务器目录。以 Memos 为例，数据位于 `~/memos/data`。执行 `docker compose down` 会移除容器，但不会删除这个目录。

如果 Compose 将端口绑定到 `127.0.0.1`，应用端口只供服务器本机的 Nginx 访问，不会直接暴露到公网。防火墙开放 Nginx 使用的 80、443 端口即可。

部署其他应用时，把 Nginx 配置中的 `your-domain.com` 和 `HOST_PORT` 分别替换为实际域名和 Compose 中的宿主机端口。


## Portainer 部署

本部分假设服务器上已经安装并运行 Portainer。

### 创建 Stack

登录 Portainer 后：

1. 进入 **Local**。
2. 点击 **Stacks**。
3. 点击 **Add stack**。
4. 在 **Name** 中填写 Stack 名称，例如：

```text
memos
```

### 写入 Stack 内容

在 **Web editor** 中填写 Compose 配置。

通用模板：

```yaml
services:
  service-name:
    image: 镜像名称:版本
    container_name: 容器名称
    restart: unless-stopped
    ports:
      - "宿主机端口:容器端口"
    volumes:
      - /服务器数据目录:/容器内数据目录
```

以 Memos 为例：

```yaml
services:
  memos:
    image: neosmemo/memos:stable
    container_name: memos
    restart: unless-stopped
    ports:
      - "5230:5230"
    volumes:
      - /opt/memos/data:/var/opt/memos
```

在服务器上提前创建数据目录：

```bash
sudo mkdir -p /opt/memos/data
```

配置说明：

- `image`：填写镜像名称和版本，可在 [Docker Hub](https://hub.docker.com/) 查询。
- `restart: unless-stopped`：服务器或 Docker 重启后自动启动；手动停止后保持停止状态。
- `ports`：将服务器端口映射到容器端口。
- `volumes`：将服务器目录挂载到容器内的数据目录，用于持久化保存数据。

### Deploy the stack

确认 Stack 名称和配置内容无误后，点击页面底部的：

```text
Deploy the stack
```

部署完成后，进入：

```text
Local → Stacks → memos
```

可以查看 Stack 状态和容器状态。

也可以进入：

```text
Local → Containers → memos
```

查看容器日志、重启或停止容器。

### 通过 Nginx 反向代理

如果使用 Nginx 反向代理，`proxy_pass` 指向服务器端口：

```nginx
location / {
    proxy_pass http://127.0.0.1:5230;
    proxy_http_version 1.1;

    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

然后使用域名访问 Memos：

```text
https://memos.example.com
```

Stack 部署其他应用时，替换 `image`、端口映射、服务器数据目录和容器数据目录即可。