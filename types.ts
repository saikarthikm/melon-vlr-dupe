export type Thread = {
  id: string;
  title: string;
  count: number;
};

export type NewsItem = {
  id: string;
  title: string;
  date: string;
};

export type Match = {
  id: string;
  teamA: string;
  teamB: string;
  eventName?: string;
  score?: string;
  live?: "" | "LIVE";
  earnings?: number;
};

export type Event = {
  id: string;
  name: string;
  region: string;
  status: "LIVE" | "UPCOMING";
};
