import numpy as np

filenames = np.load('./app/data/filenames_small.npy')
similarity = np.load('./app/data/similarity_small.npy')

def get_recommendations(song_id: int, num_recs: int) -> dict:
    recommended_song_ids = similarity[song_id][:num_recs]
    recommended_songs = filenames[recommended_song_ids]
    return {"song_id": song_id, "recommended_songs": recommended_songs.tolist()}