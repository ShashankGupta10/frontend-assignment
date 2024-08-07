import { createContext } from "react";

interface MusicContextType {
    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
    currentSong: string;
    setCurrentSong: (currentSong: string) => void;
    currentAudioRef: HTMLAudioElement | null;
    setCurrentAudioRef: (currentAudioRef: HTMLAudioElement | null) => void;
}

const MusicContext = createContext<MusicContextType>({
    isPlaying: false,
    setIsPlaying: () => { },
    currentSong: "",
    setCurrentSong: () => { },
    currentAudioRef: null,
    setCurrentAudioRef: (currentAudioRef) => { }
});

export default MusicContext;