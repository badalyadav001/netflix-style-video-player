import { useParams, useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import { videos } from "../data/videos"

const VideoPlayer = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const videoRef = useRef<HTMLVideoElement>(null)

  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showControls, setShowControls] = useState(true)

  let hideTimeout: any

  const video = videos.find((v) => v.slug === slug)

  if (!video) {
    return <div style={{ color: "white" }}>Video not found</div>
  }

  const togglePlay = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    if (!videoRef.current) return

    const percent =
      (videoRef.current.currentTime / videoRef.current.duration) * 100
    setProgress(percent)
  }

  const handleProgressClick = (e: any) => {
    if (!videoRef.current) return

    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const width = rect.width
    const percent = clickX / width

    videoRef.current.currentTime =
      percent * videoRef.current.duration
  }

  const handleFullScreen = () => {
    if (!videoRef.current) return
    videoRef.current.requestFullscreen()
  }

  const handleMouseMove = () => {
    setShowControls(true)

    clearTimeout(hideTimeout)
    hideTimeout = setTimeout(() => {
      setShowControls(false)
    }, 2500)
  }

  return (
    <div style={{ background: "#000", minHeight: "100vh", color: "white" }}>
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 10,
          padding: "8px 12px",
          background: "rgba(0,0,0,0.6)",
          color: "white",
          border: "1px solid white",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <div
        style={{ position: "relative" }}
        onMouseMove={handleMouseMove}
      >
        <video
          ref={videoRef}
          src={video.mediaUrl}
          autoPlay
          onTimeUpdate={handleTimeUpdate}
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover"
          }}
        />

        {showControls && (
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80%",
            }}
          >
            {/* Progress Bar */}
            <div
              onClick={handleProgressClick}
              style={{
                height: "6px",
                background: "#444",
                cursor: "pointer",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  background: "red",
                }}
              />
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "15px" }}>
              <button onClick={togglePlay}>
                {isPlaying ? "Pause" : "Play"}
              </button>

              <button onClick={handleFullScreen}>
                Fullscreen
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoPlayer
