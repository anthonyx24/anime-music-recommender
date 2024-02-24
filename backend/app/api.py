from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

import app.services as services

# print(os.getcwd())

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/recommendations/{song_id}", tags=["recommendations"])
async def get_recommendations(song_id: int, num_recs: int) -> dict:
    return services.get_recommendations(song_id, num_recs)