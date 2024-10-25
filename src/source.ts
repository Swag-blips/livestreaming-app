import {
  banner1,
  banner2,
  banner3,
  game1,
  game2,
  game3,
  game4,
  stream1,
  stream2,
  stream3,
  stream4,
  stream5,
  stream6,
  streamer1,
  streamer2,
  streamer3,
  streamer4,
  streamer5,
} from "./assets";

interface GameStream {
  name: string;
  image: string;
  watching: string;
}

interface Streamers {
  name: string;
  image: string;
  followers: string;
}
interface TopStreams {
  image: string;
}

interface Streams {
  title: string;
  image: string;
  watching: string;
}
export const gameStreams: GameStream[] = [
  {
    name: "Rokib",
    image: game1,
    watching: "1.5k",
  },
  {
    name: "Adinuba",
    image: game2,
    watching: "3.2k",
  },
  {
    name: "Joy",
    image: game3,
    watching: "5k",
  },
  {
    name: "lawerence",
    image: game4,
    watching: "2k",
  },
];

export const streamers: Streamers[] = [
  {
    name: "Loveth Eze",
    image: streamer1,
    followers: "12k",
  },
  {
    name: "Jude Prince",
    image: streamer2,
    followers: "20.2k",
  },
  {
    name: "Mary Joachim",
    image: streamer3,
    followers: "4.5k",
  },
  {
    name: "Emmanuel Eze",
    image: streamer4,
    followers: "15k",
  },
  {
    name: "Patience Oluoma",
    image: streamer5,
    followers: "1.4k",
  },
];

export const topStreams: TopStreams[] = [
  {
    image: banner1,
  },
  {
    image: banner2,
  },
  {
    image: banner3,
  },
];

export const streams: Streams[] = [
  {
    title: "Epic adventure: Live game marathon",
    image: stream1,
    watching: "11k",
  },
  {
    title: "Blockbuster Nights: Watch party Live",
    image: stream2,
    watching: "13.5k",
  },
  {
    title: "Game On: Live with adinuba",
    image: stream3,
    watching: "15k",
  },
  {
    title: "Cinema Classic: live commentary and Chat",
    image: stream4,
    watching: "11k",
  },
  {
    title: "The Ultimate gaming Showdown: Live Battles",
    image: stream5,
    watching: "2.2k",
  },
  {
    title: "Reel talk: Live movie Reviews and Reactions",
    image: stream6,
    watching: "25k",
  },
];
