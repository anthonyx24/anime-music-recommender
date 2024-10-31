# animelodi

[Check it out here!](https://animelodi.onrender.com/)
[Demo](https://youtu.be/pDGi5Ey-FPY)

** Please note that the backend might take 30-40s to start after inactivity due to Render's free tier policies**

**Tech Stack:** React frontend, FastAPI backend, Postgres database, all hosted on Render

**Data:** [Animethemes API](https://api-docs.animethemes.moe/) for songs/audio data, [Jikan API](https://jikan.moe/) for anime information

## What is animelodi?
Animelodi is a passion project stemming from how I usually discover new anime, which is through their soundtracks! This app was created to help people like me discover new anime through anime songs they already like.

## How are the songs recommended?
Currently i'm using a simple machine-learning algorithm: k nearest neighbors. I first extract a set of audio features for each song, then calculate the 
similarity between songs using those features.

## What's next?
i'm going to continuously work on this application, both to improve how the songs are recommended and to fix and enhance the user experience. i'm still a relatively new
developer, and i used this project to learn on the fly, but there's still a lot of cool 
things left to learn.

**some upcoming fixes/features include:** removing duplicates, fixing misidentified songs/anime, improving the UI,
better search, implementing a new recommendation algorithm

![Start](/images/image.png)
![Search](/images/image-1.png)
![Recs](/images/image-2.png)
