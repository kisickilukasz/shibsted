import  * as React from 'react';
import axios from 'axios';

import {SearchSection} from "./SearchSection";
import {ContentWrapper} from "./styled/ContentWrapper";
import {ImageWrapper} from "./styled/ImageWrapper";

export function App() {
    const [query, setQuery] = React.useState('');
    const [gifsUrl, setGifsUrl] = React.useState(`http://localhost:8000/gifs`);
    const [imagesUrl, setImagesUrl] = React.useState(`http://localhost:8000/images`);
    const [data, setData] = React.useState([]);
    const [isFetching, setIsFetching] = React.useState(false);

    React.useEffect(() => {
        const fetchData = async () => {
            const gifsResult = await axios(gifsUrl);
            const imagesResult = await axios(imagesUrl);

            setIsFetching(false);
            setData([...gifsResult.data, ...imagesResult.data]);
        };

        fetchData();
        setIsFetching(true);
    }, [gifsUrl, imagesUrl]);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setGifsUrl(`http://localhost:8000/gifs?searchQuery=${query}`);
        setImagesUrl(`http://localhost:8000/images?searchQuery=${query}`);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

    return (
        <>
            <SearchSection
                query={query}
                onChange={onChange}
                onSubmit={onSubmit}
            />
            <ContentWrapper>
            {isFetching
                ? <div>Loading...</div>
                : data.map(item => (
                <ImageWrapper
                    className=""
                    key={item.id}
                    src={item.url}
                    alt={item.alt}
                />
            ))}
            </ContentWrapper>
        </>
    );
}
