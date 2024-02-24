export const get_recs = async (song_id) => {
    try {
        const response = await fetch(`http://localhost:8000/recommendations/${song_id}?num_recs=5`);
        if(response.ok) {
            data = await response.json();
            return data;
        }
    } catch (error) {
        console.log("Error fetching recs: ", error);
    }
};