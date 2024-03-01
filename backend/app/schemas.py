from pydantic import BaseModel
from typing import Optional

class AnimeBase(BaseModel):
    id: int
    name: str
    from_date: Optional[str] = None
    to_date: Optional[str] = None
    synopsis: Optional[str] = None
    image_url: str
    url: str
    type: Optional[str] = None
    rating: Optional[str] = None
    studios: Optional[str] = None
    genres: Optional[str] = None
    themes: Optional[str] = None
    raw_name: str

    class Config:
        orm_mode = True

class SongBase(BaseModel):
    id: int
    name: Optional[str] = None
    artist: Optional[str] = None
    type: str
    filename: str
    anime_id: int
    anime: AnimeBase

    class Config:
        orm_mode = True