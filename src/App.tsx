import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import VideoPlayer from "./pages/VideoPlayer"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Video Player Page */}
        <Route path="/video/:slug" element={<VideoPlayer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
