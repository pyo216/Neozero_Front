from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class LoginRequest(BaseModel):
    email: str
    password: str

class LoginResponse(BaseModel):
    result: int

@router.post("/login", response_model=LoginResponse)
async def login(request: LoginRequest):
    if request.email == "test@gmail" and request.password == "password":
        return LoginResponse(result=0)
    else:
        return LoginResponse(result=1)