import "./App.css";
import sonidoPiolin from './assets/sample.mp3'
import { useRef, useState, ChangeEvent } from 'react'

function App() {
   const [volumen, setVolumen] = useState(100)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handlePlay = () => {
    audioRef.current?.play()
  }

  const handlePause = () => {
    audioRef.current?.pause()
  }

  const handleChangeVolume = (event: ChangeEvent<HTMLInputElement>) => {
    const nuevoVolumen = Number(event.target.value)
    setVolumen(nuevoVolumen)

    if (audioRef.current) {
      audioRef.current.volume = nuevoVolumen / 100
    }
  }

  return (
    <div>
      <audio ref={audioRef} src={sonidoPiolin} />

      <button type="button" onClick={handlePlay}>
        Play
      </button>

      <button type="button" onClick={handlePause}>
        Pause
      </button>

      <input
        type="range"
        min="0"
        max="100"
        value={volumen}
        onChange={handleChangeVolume}
      />
    </div>
  )
}

export default App;
