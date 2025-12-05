import data from "@/data/mock.json";
import { Match, Event, NewsItem, Thread } from "@/types";
import { ThreadCol } from "@/app/components/ThreadCol";
import { MatchCol } from "@/app/components/MatchCol";
import { EventCol } from "@/app/components/EventCol";
import { NewsCol } from "@/app/components/NewsCol";

const threads = data.threads as Thread[];
const matches = data.matches as Match[];
const events = data.events as Event[];
const news = data.news as NewsItem[];

export default function Home() {
  return (
    <main>
      <ThreadCol items={threads} />
      <NewsCol items={news} />
      <EventCol items={events} />
      <MatchCol items={matches} />
    </main>
  );
}
