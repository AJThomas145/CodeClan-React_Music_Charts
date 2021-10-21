import React, {useState, useEffect} from 'react';
import SongList from '../components/SongList';

const SongContainer = () => {

    const [songs, setSongs] = useState([])
    const [selectedSong, setSelectedSong] = useState(null)

    const fetchSongs = function(){
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then((response) => {
            return response.json()
        })
        .then(data => setSongs(data.feed.entry))
    }
    useEffect(fetchSongs, [])

    const handleSongSelect = (song) => {
        setSelectedSong(song)
    }

    return(
        <>
            <h1>Song List!</h1>
            <SongList songs={songs} onSongSelect={handleSongSelect}/>
        </>
    )
}
export default SongContainer;
