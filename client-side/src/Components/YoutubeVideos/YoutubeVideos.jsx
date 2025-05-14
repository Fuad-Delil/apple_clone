// my api_key = AIzaSyBYLt8xWJLTrHfoWd2knkfmoKVCX74AwXM
// apple chanel id = UCE_M8A5yxnLfW0KghEeajjw
// evangadi chanel id = UCxA7AzkI2Sndf8S1G5rSkwQ

//the data to be fetched =  https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyBYLt8xWJLTrHfoWd2knkfmoKVCX74AwXM


import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function YoutubeVideos() {
  const [youTubeVideos, setYouTubeVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&channelId=UCE_M8A5yxnLfW0KghEeajjw&order=date&type=video&key=AIzaSyBYLt8xWJLTrHfoWd2knkfmoKVCX74AwXM"
    )
      .then((res) => res.json())
      .then((data) => setYouTubeVideos(data.items))
      .catch((err) => console.error("Fetch error >>>", err));
  }, []);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">🎥 Latest YouTube Videos</h1>
      <div className="row">
        {youTubeVideos?.map((video, index) => {
          const vidId = video.id.videoId;
          const vidLink = `https://www.youtube.com/watch?v=${vidId}`;

          return (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="card h-100 shadow-sm border-2"
              >
                <a href={vidLink} target="_blank">
                  <img
                    className="card-img-top"
                    src={video.snippet.thumbnails.high.url}
                    alt="thumbnails"
                  />
                </a>

                <div className="card-body">
                  <h6 className="card-title">{video.snippet.title}</h6>
                </div>
                <div className="p-4 border-2 m-2 rounded-circle ">
                  {video.snippet.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default YoutubeVideos;
