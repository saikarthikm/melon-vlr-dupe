export type Thread = {
  id: string;
  title: string;
  comments: number;
};

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  region: string;
  commentCount: number;
};

export type Match = {
  id: string;
  teamA: string;
  teamB: string;
  eventName?: string;
  score?: string;
  live?: "" | "LIVE";
  earnings?: number;
  time?: string;
  status?: string;
};

export type Event = {
  id: string;
  name: string;
  region: string;
  status: "LIVE" | "UPCOMING";
};
