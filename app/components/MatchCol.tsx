import { BlockList } from "./BlockList";
import { Match } from "@/types";

export function MatchCol({ items }: { items: Match[] }) {
  return (
    <BlockList
      items={items}
      render={(t) => (
        <div
          key={t.id}
          className="bg-item p-3 rounded cursor-pointer hover:bg-zinc-700 border border-border flex flex-row justify-between"
        >
          <div className="grid grid-cols-1">
            <div className="text-xs ">{t.teamA}</div>
            <div className="text-xs ">{t.teamB}</div>
          </div>
          <div>
            <div className="text-xs text-red-500 font-bold">{t.status}</div>
            <div className="text-xs text-green-500">{t.time}</div>
          </div>
        </div>
      )}
    />
  );
}
