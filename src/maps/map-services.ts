export const searchMapData = async (q: string, loc: string) => {
    try {
        const res = await fetch(`http://localhost:5001/api/search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ q: q, location: loc })
        });
        
        const data = await res.json();
        return data.local_results;

    } catch (error) {
        console.debug('Error fetching map data:', error);
    }
};