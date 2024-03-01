import numpy as np

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, joinedload
from sqlalchemy.orm import Session

from app.models import Anime, Song
from app.schemas import AnimeBase, SongBase

filenames = np.load('./app/data/filenames_small.npy')
similarity = np.load('./app/data/similarity_small.npy')

DATABASE_URI = 'postgresql+psycopg2://postgres@localhost/anime-music'
engine = create_engine(DATABASE_URI)
Session = sessionmaker(bind=engine)

def get_recommendations(song_id: int, num_recs: int) -> dict:
    recommended_song_ids = similarity[song_id][:num_recs]
    recommended_songs = filenames[recommended_song_ids]
    return {"song_id": song_id, "recommended_songs": recommended_songs.tolist()}

def search(query: str) -> dict:
    session = Session()
    query = query.lower()
    results = session.query(Song).join(Anime).filter(
        (Song.name.ilike(f'%{query}%')) |
        (Song.artist.ilike(f'%{query}%')) |
        (Anime.name.ilike(f'%{query}%'))
    ).limit(30).all()
    results_list = [SongBase.from_orm(result) for result in results]
    session.close()
    return {"results": results_list}