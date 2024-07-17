import { useRef, useEffect } from "react";
import MainSection from "./MainSection";

const HomePage = () => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Audio playback error:", error);
        });
      }
    };

    // Play the audio when the component mounts
    playAudio();
  }, []);

  const handleStartClick = async () => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video playback error:", error);
      });
    }
  };

  console.log("Component rendered");

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <MainSection />
      <div className="video-container h-screen w-screen">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className="absolute object-cover w-full h-full"
          style={{ objectFit: "cover" }}
        >
          <source
            src={process.env.PUBLIC_URL + "/videos/homePage.mp4"}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <button onClick={handleStartClick} className="start-button"></button>
      </div>
      <div className="audio-container">
        {/* Silent audio track */}
        <audio
          ref={audioRef}
          src={process.env.PUBLIC_URL + "/audio/silent.mp3"}
          autoPlay
        >
          Your browser does not support the audio tag.
        </audio>
      </div>
      <div className="z-40 left-9 absolute bottom-[150px]">
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-3 animate-pulse"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default HomePage;
