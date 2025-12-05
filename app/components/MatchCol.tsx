import { BlockList } from "./BlockList";
import { Match } from "@/types";

export function MatchCol({ items }: { items: Match[] }) {
  return (
    <BlockList
      items={items}
      render={(t) => (
        <div
          key={t.id}
          className="bg-zinc-800 p-3 rounded cursor-pointer hover:bg-zinc-700"
        >
          <div className="text-sm">{t.id}</div>
          <div className="text-xs text-zinc-400">{t.teamA}</div>
          <div className="text-xs text-zinc-400">{t.teamB}</div>
        </div>
      )}
    />
  );
}
