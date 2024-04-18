import React, { useEffect } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export const Genre = ({ selectedGenres, setSelectedGenres, genres, setGenres }) => {
    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        
    };

    const handleRemove = (genre) => {
        setSelectedGenres(selectedGenres.filter((selected) => selected.id !== genre.id));
        setGenres([...genres, genre]);
       
    };

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=b29d04ec0a55cae1d636f5a70f64bedf');
                const data = await response.json();
                setGenres(data.genres);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchGenres();

        // Cleanup function to reset genres state
        return () => {
            setGenres([]);
        };
    }, []);

    return (
        <>
            <div className='p-5'>
                {/* Render selected genres */}
                <h1 className='text-white pt-5 font-bold'>Search by Genre</h1>
                <div className='text-white flex flex-wrap' style={{ padding: "6px 0" }}>
                    {selectedGenres && selectedGenres.map((genre) => (
                        <div key={genre.id}>
                            <Stack direction="row" spacing={1} />
                            <Chip
                                label={genre.name}
                                style={{ color: "white", background: "blue", padding: 2, margin: 2, textWrap: "wrap" }}
                                size='small'
                                clickable
                                onDelete={() => handleRemove(genre)}
                            />
                        </div>
                    ))}
                </div>

                {/* Render all genres */}
                <div>
                   
                <div className='text-white flex flex-wrap' style={{ padding: "6px 0" }}>
                    {genres && genres.map((genre) => (
                        <div key={genre.id}>
                            <Stack direction="row" spacing={1} />
                            <Chip
                                label={genre.name}
                                style={{ color: "white", background: "grey", padding: 2, margin: 2, textWrap: "wrap" }}
                                size='small'
                                onClick={() => handleAdd(genre)}
                                clickable
                            />
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </>
    );
};




