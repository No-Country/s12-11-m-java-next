'use client'
import { useState } from 'react';
import { FaPauseCircle, FaPlayCircle, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import useAudioPlayer from '../AudioPlayer/hooks';
import playlist from '../AudioPlayer/playlist';


const AudioPlayer = () => {
  const [mute, setMute] = useState(false)
  const {
    playNextTrack,
    playPreviousTrack,
    playerState,
    togglePlayPause,
    toggleRepeat,
    toggleShuffle,
    setPlaybackPosition,
  } = useAudioPlayer(playlist);

  const {
    repeat,
    playbackState,
    shuffle,
    currentTrackDuration,
    currentTrackPlaybackPosition,
    currentTrackMetadata,
  } = playerState;

  function setProgress (value: number) {
    if (currentTrackDuration !== null) {
      setPlaybackPosition((value / 100) * currentTrackDuration);
    }
  }

  function computeProgress (): number {
    const noProgress =
      currentTrackDuration === null ||
      currentTrackPlaybackPosition === null ||
      currentTrackDuration === 0;
    if (noProgress) {
      return 0;
    } else {
      return (currentTrackPlaybackPosition / currentTrackDuration) * 100;
    }
  }

  function computeVolume (): number {

  }

  function formatTime (timeInSeconds: number | null): string {
    if (timeInSeconds === null) return '';
    const numberOfMinutes = Math.floor(timeInSeconds / 60);
    const numberOfSeconds = Math.floor(timeInSeconds - numberOfMinutes * 60);
    const minutes = `${ numberOfMinutes }`.padStart(2, '0');
    const seconds = `${ numberOfSeconds }`.padStart(2, '0');
    return `${ minutes }:${ seconds }`;
  }

  return (
    <section className='flex items-center justify-evenly py-1'>
      <div className='flex gap-2 items-center'>
        <button><MdSkipPrevious size={30} /></button>
        {playbackState === 'PLAYING'
          ? <button><FaPauseCircle size={35} onClick={togglePlayPause} /></button>
          : <button><FaPlayCircle size={35} onClick={togglePlayPause} /></button>
        }
        <button><MdSkipNext size={30} /></button>
        <div className='flex flex-col'>
          <p className='text-base drop-shadow-lg'>Titulo</p>
          <p className='text-sm drop-shadow-lg'>Artista</p>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex w-full justify-between mt-1 items-center gap-2 text-black'>
          <span className='text-xs'>{formatTime(currentTrackPlaybackPosition)}</span>
          <input type='range' min='1' max='100' value={computeProgress()} step='0.25' className='slider' onChange={(event) => {
            setProgress(parseInt(event?.target.value));
          }} />
          <span className='text-xs'>{formatTime(currentTrackDuration)}</span>
        </div>
      </div>
      <div className='flex gap-2 items-center'>
        <button>
          <FaVolumeUp size={20} />
        </button>
        <button>
          <FaVolumeMute size={20} />
        </button>
        <input type='range' min='1' max='100' value={computeProgress()} step='0.25' className='slider-volume' onChange={(event) => {
          setProgress(parseInt(event?.target.value));
        }} />
      </div>
    </section>
  )
}

export default AudioPlayer