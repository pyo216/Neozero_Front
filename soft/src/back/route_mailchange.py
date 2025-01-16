from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class MailChangeRequest(BaseModel):
    currentEmail : str
    newEmail: str
    currentPassword:str

class MailChangeResponse(BaseModel):
    result: int

@router.post("/mail_change", response_model=MailChangeResponse)
async def mail_change(request: MailChangeRequest):
    if request.currentEmail == "test@gmail" and request.currentPassword == "password":
        return MailChangeResponse(result=0)
    else:
        return MailChangeResponse(result=1)