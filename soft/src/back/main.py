from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from route_login import router as login_router
from route_mailchange import router as mailchange_router
from route_passchange import router as passchange_router
from route_top import router as top_router
from route_good import router as good_router

app = FastAPI()

# CORSの設定
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",  # localhost の IP アドレス版も追加
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # 必要なメソッドのみ指定
    allow_headers=["*"],
    expose_headers=["*"],  # レスポンスヘッダーの公開設定
    max_age=600,  # プリフライトリクエストのキャッシュ時間（秒）
)

# ルーターをプレフィックスを付けて登録
app.include_router(login_router, prefix="/login", tags=["authentication"])
app.include_router(mailchange_router, prefix="/mail_change", tags=["authentication"])
app.include_router(passchange_router, prefix="/pass_change", tags=["authentication"])
app.include_router(top_router, prefix="/top", tags=["authentication"])
app.include_router(good_router, prefix="/good", tags=["authentication"])

# 静的ファイルのマウント
app.mount("/photo", StaticFiles(directory="photo"), name="photo")


# アプリケーションの起動設定
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.1", port=8000)