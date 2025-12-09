import { BlockList } from "./BlockList";
import { Event } from "@/types";

export function EventCol({ items }: { items: Event[] }) {
  return (
    <BlockList
      items={items}
      render={(t) => (
        <div
          key={t.id}
          className="bg-item p-3 rounded cursor-pointer hover:bg-zinc-700 border border-border"
        >
          <div className="text-sm">{t.name}</div>
          <div className="flex flex-col-2 justify-between">
            <div className="text-xs text-zinc-400">{t.region}</div>
            <div className="text-xs text-zinc-400">{t.status}</div>
          </div>
        </div>
      )}
    />
  );
}
