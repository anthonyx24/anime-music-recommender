from sqlalchemy import create_engine, Column, Integer, String, Boolean, Numeric, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship

Base = declarative_base()

class Anime(Base):
    __tablename__ = 'anime'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    year = Column(Integer)
    season = Column(String)
    synopsis = Column(String)
    image_url = Column(String)
    url = Column(String)
    type = Column(String)
    rating = Column(String)
    score = Column(Numeric)
    scored_by = Column(Integer)
    studios = Column(String)
    producers = Column(String)
    genres = Column(String)
    filename = Column(String)

class Song(Base):
    __tablename__ = 'songs'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    artist = Column(String)
    year = Column(Integer)
    type = Column(String)
    filename = Column(String)
    anime_id = Column(Integer, ForeignKey('anime.id'))
    anime = relationship('Anime')
