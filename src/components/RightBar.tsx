import { Eye, Video } from "lucide-react";

import { Link } from "react-router-dom";
import { gameStreams, streamers } from "../source";
import generateUniqueId from "generate-unique-id";

const RightBar = () => {
  return (
    <div className="hidden min-[1150px]:block fixed top-0 right-0 w-[300px] h-screen bg-bgSecondary p-4">
      <div>
        <Link
          to={`/dashboard/golive?roomID=${generateUniqueId({length:4})}&role=Host`}
          target="_blank"
          className="flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-primary to-blue-600 rounded-full"
        >
          <Video /> Go Live
        </Link>co
      </div>

      <div className="py-4">
        <h3 className="text-gray-500">game Streaming</h3>
        <div className="grid grid-cols-2 gap-3 mt-4">
          {gameStreams.map((game, index) => (
            <div
              key={index}
              className="relative h-[70px] overflow-hidden rounded-lg"
            >
              <div className="absolute top-0 left-0 z-30 w-full flex items-center justify-between p-2">
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-primary rounded-full" />
                  <p className="text-gray-200 text-sm">live</p>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="text-primary" size={14} />
                  <p className="text-sm">{game.watching}</p>
                </div>
              </div>

              <img src={game.image} alt="" />
              <div className="absolute bottom-0 left-0 z-30 w-full flex items-center justify-between p-2">
                <div className="text-sm">{game.name}</div>
              </div>
              <div className="absolute top-0 left-0 z-10 w-full h-full bg-dark-overlay"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-4">
        <h3 className="text-gray-500">Popular Streamers</h3>
        <div className="mt-4">
          {streamers.map((streamer, index) => (
            <div className="flex items-center gap-2 my-3" key={index}>
              <div className="size-10 overflow-hidden rounded-full">
                <img src={streamer.image} alt="" />
              </div>
              <div>
                <h3 className="text-base">{streamer.name}</h3>
                <p className="text-sm text-gray-500 ">
                  {streamer.followers} followers
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
