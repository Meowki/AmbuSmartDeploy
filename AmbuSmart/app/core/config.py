import os
from dotenv import load_dotenv

# 加载 .env 文件中的环境变量
load_dotenv()

class Config:

    # 数据库配置
    DATABASE_URL: str = os.getenv("DATABASE_URL", "mysql+pymysql://root:930309@localhost:3306/test")

    # 应用配置
    DEBUG: bool = os.getenv("DEBUG", "False").lower() in ("true", "1", "t")

