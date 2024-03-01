export const get_results = async (search_query) => {
    try {
        const response = await fetch(`http://localhost:8000/search?query=${search_query}`);
        if(response.ok) {
            const data = await response.json();
            console.log(data.results)
            return data.results;
        }
    } catch (error) {
        console.log("Error fetching search results: ", error);
    }
};