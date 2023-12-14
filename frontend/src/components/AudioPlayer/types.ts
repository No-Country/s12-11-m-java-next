/* === Playlist & Track === */
export type Playlist = Track[];

export interface Track {
  audioSrc: string;
  metadata: TrackMetadata;
}

export interface TrackMetadata {
  artist: string;
  title: string;
  coverArtSrc: string;
}

/* === Controls === */
export interface Controls {
  setPlaybackPosition: (position: number) => void;
  setVolumePosition: (position: number) => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  togglePlayPause: () => void;
  playNextTrack: () => void;
  playPreviousTrack: () => void;
  cleanup: () => void;
}

/* === Playerstate === */
export interface PlayerState {
  currentTrackDuration: number | null;
  currentTrackPlaybackPosition: number | null;
  currentTrackMetadata: TrackMetadata | null;
  playbackState: PlaybackState;
  repeat: boolean;
  shuffle: boolean;
  volume: number;
}

export type PlaybackState = 'PLAYING' | 'PAUSED';

export const InitialPlayerState: PlayerState = {
  currentTrackDuration: null,
  currentTrackPlaybackPosition: null,
  currentTrackMetadata: null,
  playbackState: 'PAUSED',
  repeat: false,
  shuffle: false,
  volume: 1
};