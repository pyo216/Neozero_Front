from fastapi import FastAPI, APIRouter, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from pathlib import Path

app = FastAPI()
router = APIRouter()

# CORSの設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Reactアプリのオリジン
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 画像ディレクトリの設定
PHOTO_DIR = Path(__file__).parent / 'photo'
PHOTO_DIR.mkdir(parents=True, exist_ok=True)

# 静的ファイルのマウント
app.mount("/photo", StaticFiles(directory="photo"), name="photo")

# 投稿情報のモデル
class Post(BaseModel):
    id: int
    image_url: str
    comment: str
    good: int

# APIレスポンス
class TopResponse(BaseModel):
    result: int
    posts: list[Post]

# シンプルな投稿データの作成
@router.get("/top", response_model=TopResponse)  # パスを修正
async def get_posts():
    # 仮の投稿データ
    posts = [
        {"id": 1, "image_url": "photo/1.jpg", "comment": "コメント1","good":0},
        {"id": 2, "image_url": "photo/2.jpg", "comment": "コメント2","good":1},
        {"id": 3, "image_url": "photo/3.jpg", "comment": "コメント3","good":0},
    ]
    return TopResponse(result=1, posts=posts)

# 画像アップロードのエンドポイント
@router.post("/upload/")
async def upload_image(file: UploadFile):
    try:
        file_location = PHOTO_DIR / file.filename
        with open(file_location, "wb") as f:
            f.write(await file.read())
        return {"image_url": f"/photo/{file.filename}"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ルーターをアプリケーションに追加
app.include_router(router)