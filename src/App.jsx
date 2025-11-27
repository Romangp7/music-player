import { MusicPlayer } from "./components/MuiscPlayer"
import { BrowserRouter, Routes, Route } from "react-router"

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        {/* <Navbar /> */}
        <main className="app-main">
          <div className="player-section">
            <MusicPlayer />
          </div>
          <div className="content-section">

          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
