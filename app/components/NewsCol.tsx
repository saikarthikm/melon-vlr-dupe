import { BlockList } from "./BlockList";
import { NewsItem } from "@/types";

export function NewsCol({ items }: { items: NewsItem[] }) {
  return (
    <BlockList
      items={items}
      render={(t) => (
        <div
          key={t.id}
          className="bg-zinc-800 p-3 rounded cursor-pointer hover:bg-zinc-700 bg-panel border border-border"
        >
          <div className="text-sm">{t.id}</div>
          <div className="text-sm">{t.title}</div>
          <div className="text-xs text-zinc-400">{t.date}</div>
        </div>
      )}
    />
  );
}
