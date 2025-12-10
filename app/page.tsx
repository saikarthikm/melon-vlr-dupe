import data from "@/data/mock.json";
import Navbar from "@/app/components/Navbar";
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
      <Navbar />
      <div className="mx-45 my-10">
        <div className="grid grid-cols-[200px_1fr_250px_200px] space-x-3 bg-column p-5 gap-5">
          <ThreadCol items={threads} />
          <NewsCol items={news} />
          <MatchCol items={matches} />
          <EventCol items={events} />
        </div>
      </div>
    </main>
  );
}
