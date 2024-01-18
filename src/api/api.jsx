import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiComponent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get('https://api.jikan.moe/v4/top/anime');

                // Konsolenausgabe der gesamten API-Antwort
                console.log('API Response:', response);

                if (response.data) {
                    setData(response.data);
                    console.log('Top Animes:', response.data.top);
                } else {
                    console.error('Invalid response structure:', response);
                }
            } catch (error) {
                console.error('Error fetching data:', error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Top 4 Animes</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {data?.top?.slice(0, 4).map((anime) => (
                        <div key={anime.mal_id} style={{ marginBottom: '20px', borderBottom: '1px solid #ddd' }}>
                            <h2>{anime.title}</h2>
                            <img src={anime.image_url} alt={anime.title} style={{ maxWidth: '100%' }} />
                            <p>Type: {anime.type}</p>
                            <p>Episodes: {anime.episodes}</p>
                            <p>Score: {anime.score}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ApiComponent;
