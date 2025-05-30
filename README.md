# 项目部署指南

本项目采用 **Docker 容器化部署**，并支持通过 **Ngrok 服务进行公网分发**。

---

## 部署方法

请按照以下步骤进行项目部署：

### 1. 准备环境

确保您的系统已安装 Docker 及 Mysql。

### 2. 获取项目代码


### 3. 构建并启动 Docker 容器

在项目根目录下，运行以下命令来构建并启动所有服务（前端、后端、数据库）：

```bash
docker compose build # 首次部署或有代码改动时需要执行
docker compose up    # 启动所有服务
```

### 4. 数据库配置（重点）

本项目数据库的初始数据需要手动配置。

* 如果您需要填充数据库，请参考 `app/utils/database_backup` 文件。
* 根据您的实际数据库地址和凭据，配置相应的数据库连接信息。
* 配置地址位于 /AmbuSmart/.env 中。(/AmbuSmart/app/core/config.py已被环境配置覆盖)
* docker-compose 中也需调整数据库地址。

### 5. 启动 Ngrok (按需)

如果您需要将本地部署的服务暴露到公网，请使用 Ngrok：

1.  **下载 Ngrok:** 访问 [Ngrok 官方网站](https://ngrok.com/download) 下载适合您操作系统的 Ngrok 客户端。
2.  **配置 Auth Token (首次使用):**
    * 在 Ngrok 官网注册并登录，获取您的 Auth Token。
    * 在命令行运行：`ngrok authtoken <YOUR_AUTH_TOKEN>`
3.  **暴露服务端口：** 打开新的命令行窗口，分别运行以下命令：
    * **暴露前端 Nginx (默认 80 端口):**
        ```bash
        ngrok http 80
        ```
        这将提供您项目前端的公网 HTTPS 访问链接。
    * **暴露后端 FastAPI (默认 8000 端口):**
        ```bash
        ngrok http 8000
        ```
        这将提供您后端 API 的公网 HTTPS 访问链接（`/docs` 可访问 API 文档）。
4. （可选）免费服务仅支持一个管道，可以自行配置在tunes中实现前后端开启。
---

## 项目访问

Ngrok 启动后，您将获得两个公网 HTTPS 链接，分别用于访问：

* **项目前端**
* **后端 API (可添加 `/docs` 访问接口文档)**

---