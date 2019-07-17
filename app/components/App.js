import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function App() {
    const [query, setQuery] = useState('');
    const [gifsUrl, setGifsUrl] = useState(`http://localhost:8000/gifs?searchQuery=${query}`);
    const [imagesUrl, setImagesUrl] = useState(`http://localhost:8000/images?searchQuery=${query}`);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const gifsResult = await axios(gifsUrl);
            const imagesResult = await axios(imagesUrl);

            setData([...gifsResult.data, ...imagesResult.data]);
        };

        fetchData();
    }, [gifsUrl, imagesUrl]);

    return (
        <ul>
            {data.map(item => (
                <img
                    key={item.id}
                    src={item.url}
                    alt={item.alt}
                />
            ))}
        </ul>
    );
}
