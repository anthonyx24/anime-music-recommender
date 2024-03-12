import numpy as np
import requests

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, joinedload
from sqlalchemy.orm import Session

from app.models import Anime, Song
from app.schemas import AnimeBase, SongBase

def load_data(url): 
    response = requests.get(url)
    response.raise_for_status()
    file_path = url.split('/')[-1]
    with open(file_path, 'wb') as f:
        f.write(response.content)
    return np.load(file_path, allow_pickle=True)

filenames = load_data('https://storage.googleapis.com/anime-recommendations/filenames.npy')
similarity = load_data('https://storage.googleapis.com/anime-recommendations/similarity.npy')

# DATABASE_URI = 'postgresql+psycopg2://postgres@localhost/anime-music'
DATABASE_URI = 'postgres://anime_music_db_user:DXO0PssRTBp25nlGcWWyHsWryfCa1oWU@dpg-cnnp4dn109ks73b8umpg-a/anime_music_db'
engine = create_engine(DATABASE_URI)
Session = sessionmaker(bind=engine)

def get_recommendations(song_id: int, num_recs: int) -> dict:
    recommended_song_ids = similarity[song_id][:num_recs].tolist()
    print(recommended_song_ids)
    session = Session()
    recommended_songs = session.query(Song).join(Anime).filter(Song.id.in_(recommended_song_ids)).all()
    recommended_songs_list = [SongBase.from_orm(song) for song in recommended_songs]
    session.close()
    return {"recommended_songs": recommended_songs_list}


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