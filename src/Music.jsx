import React, { useState, useEffect, useRef } from 'react';
//import './music.scss';
import ozuna from './assets/Ozuna - Me Dijeron.mp3';
import AudioPlayer from 'react-audio-player';
const Music = () => {
 
  const playlist = [
    { title: 'Canción 1', audioSrc: ozuna},
    { title: 'Canción 2', audioSrc: ozuna },
    { title: 'Canción 3', audioSrc: 'URL_DEL_AUDIO_3' },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const handleSongClick = (index) => {
    setCurrentSongIndex(index);
  };

return(<>

<div className="audio-player-container">
      <AudioPlayer
        src={playlist[0].src} // Inicialmente cargamos la primera canción
        autoPlay
        controls
        className="audio-player"
      />
      {/* Playlist */}
      <div className="playlist">
        <h3>Playlist</h3>
        <ul>
          {playlist.map((song, index) => (
            <li key={index}>
              {song.title}
            </li>
          ))}
        </ul>
      </div>
    </div>

</>)
}

 export default Music;