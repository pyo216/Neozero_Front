from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class goodRequest(BaseModel):
    postId:int

class goodResponse(BaseModel):
    result: int

@router.post("/good", response_model=goodResponse)
async def good(request: goodRequest):
        return goodResponse(result=1)