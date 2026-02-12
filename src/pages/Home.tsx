import { Link } from "react-router-dom"
import { videos } from "../data/videos"

const Home = () => {
  // Group videos by category
  const groupedVideos = videos.reduce((acc: any, video) => {
    if (!acc[video.categoryName]) {
      acc[video.categoryName] = []
    }
    acc[video.categoryName].push(video)
    return acc
  }, {})

  return (
    <div style={{ background: "#111", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ color: "white", marginBottom: "30px" }}>
        Social Media AI
      </h1>

      {Object.keys(groupedVideos).map((category) => (
        <div key={category} style={{ marginBottom: "40px" }}>
          <h2 style={{ color: "white", marginBottom: "15px" }}>
            {category}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {groupedVideos[category].map((video: any) => (
              <div key={video.slug}>
                <Link
                  to={`/video/${video.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  />
                </Link>

                <p
                  style={{
                    color: "white",
                    marginTop: "8px",
                    fontSize: "14px",
                  }}
                >
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
