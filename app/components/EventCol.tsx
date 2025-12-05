import { BlockList } from "./BlockList";
import { Event } from "@/types";

export function EventCol({ items }: { items: Event[] }) {
  return (
    <BlockList
      items={items}
      render={(t) => (
        <div
          key={t.id}
          className="bg-zinc-800 p-3 rounded cursor-pointer hover:bg-zinc-700"
        >
          <div className="text-sm">{t.id}</div>
          <div className="text-sm">{t.name}</div>
          <div className="text-xs text-zinc-400">{t.region}</div>
          <div className="text-xs text-zinc-400">{t.status}</div>
        </div>
      )}
    />
  );
}
