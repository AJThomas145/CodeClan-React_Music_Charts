import React from 'react';

const SongList = ({songs, onSongSelect}) => {

    const handleSongClick = (index) => {
        const selectedSong = songs[index]
        onSongSelect(selectedSong)
    }

    const songElements = songs.map((song, index) => {
        return <li onClick={() => handleSongClick(index)} key={index}>{song["im:name"].label}</li>
    })

    return(
        <>
        <ul>
            {songElements}
        </ul>
        </>
    )
}



export default SongList