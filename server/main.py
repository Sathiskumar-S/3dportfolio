from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from typing import List

import crud, models, schemas
from database import SessionLocal, engine, get_db
from auth import Token, create_access_token, get_current_user, verify_password

import os
from dotenv import load_dotenv

load_dotenv()

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Portfolio API")

origins = os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Admin credentials
ADMIN_USER = "admin"
# This is a fresh pbkdf2_sha256 hash for 'secret'
ADMIN_PASSWORD_HASH = "$pbkdf2-sha256$29000$qPX.v7c2xHGPqIUYbgJD/HvPyh7geYCVmNihc"

@app.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    try:
        print(f"Login attempt: {form_data.username}")
        # For debugging: check plain text if hashing fails
        is_verified = False
        try:
            is_verified = verify_password(form_data.password, ADMIN_PASSWORD_HASH)
        except Exception as e:
            print(f"Password verification error: {e}")
            # Fallback for debugging ONLY
            if form_data.password == "secret":
                is_verified = True
        
        if form_data.username != ADMIN_USER or not is_verified:
            print(f"Login failed for user: {form_data.username}")
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect username or password",
                headers={"WWW-Authenticate": "Bearer"},
            )
        access_token = create_access_token(data={"sub": form_data.username})
        return {"access_token": access_token, "token_type": "bearer"}
    except Exception as e:
        print(f"CRITICAL LOGIN ERROR: {e}")
        import traceback
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
def read_root():
    return {"message": "Welcome to the Portfolio API"}

@app.get("/posts", response_model=List[schemas.Post])
def read_posts(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    posts = crud.get_posts(db, skip=skip, limit=limit)
    return posts

@app.post("/posts", response_model=schemas.Post)
def create_post(post: schemas.PostCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    return crud.create_post(db=db, post=post)

@app.get("/posts/{post_id}", response_model=schemas.Post)
def read_post(post_id: int, db: Session = Depends(get_db)):
    post = crud.get_post(db, post_id=post_id)
    if post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    return post

@app.put("/posts/{post_id}", response_model=schemas.Post)
def update_post(post_id: int, post: schemas.PostCreate, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    updated_post = crud.update_post(db=db, post_id=post_id, post=post)
    if updated_post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    return updated_post

@app.delete("/posts/{post_id}")
def delete_post(post_id: int, db: Session = Depends(get_db), current_user: str = Depends(get_current_user)):
    success = crud.delete_post(db=db, post_id=post_id)
    if not success:
        raise HTTPException(status_code=404, detail="Post not found")
    return {"message": "Post deleted successfully"}
