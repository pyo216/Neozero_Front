from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class PassChangeRequest(BaseModel):
    nowEmail: str
    nowPassword: str
    newPassword: str

class PassChangeResponse(BaseModel):
    result: int

@router.post("/pass_change", response_model=PassChangeResponse)
async def pass_change(request: PassChangeRequest):
    if request.nowEmail == "test@gmail" and request.nowPassword == "password":
        return PassChangeResponse(result=0)
    else:
        return PassChangeResponse(result=1)