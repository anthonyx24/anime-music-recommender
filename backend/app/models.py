from sqlalchemy import create_engine, Column, Integer, String, Boolean, Numeric, ForeignKey
from sqlalchemy.orm import sessionmaker, relationship, declarative_base
from sqlalchemy.orm import Session

Base = declarative_base()

class Anime(Base):
    __table_args__ = {'schema': 'db'}
    __tablename__ = 'anime'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    from_date = Column(String)
    to_date = Column(String)
    synopsis = Column(String)
    image_url = Column(String)
    url = Column(String)
    type = Column(String)
    rating = Column(String)
    studios = Column(String)
    genres = Column(String)
    themes = Column(String)
    raw_name = Column(String)

class Song(Base):
    __table_args__ = {'schema': 'db'}
    __tablename__ = 'songs'
    id = Column(Integer, primary_key=True)
    name = Column(String)
    artist = Column(String)
    type = Column(String)
    filename = Column(String)
    anime_id = Column(Integer, ForeignKey('db.anime.id'))
    anime = relationship('Anime', back_populates='songs')

Anime.songs = relationship('Song', order_by=Song.id, back_populates='anime')




