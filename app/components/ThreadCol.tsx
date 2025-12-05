import { BlockList } from "./BlockList";
import { Thread } from "@/types";

export function ThreadCol({ items }: { items: Thread[] }) {
  return (
    <BlockList
      items={items}
      render={(t) => (
        <div
          key={t.id}
          className="bg-zinc-800 p-3 rounded cursor-pointer hover:bg-zinc-700"
        >
          <div className="text-sm">{t.title}</div>
          <div className="text-xs text-zinc-400">{t.count}</div>
        </div>
      )}
    />
  );
}
