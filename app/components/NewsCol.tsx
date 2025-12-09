import { BlockList } from "./BlockList";
import { NewsItem } from "@/types";

export function NewsCol({ items }: { items: NewsItem[] }) {
  return (
    <BlockList
      items={items}
      render={(t) => (
        <div
          key={t.id}
          className="bg-item p-3 rounded cursor-pointer hover:bg-zinc-700 border border-border flex flex-row justify-between"
        >
          <div className="text-sm">{t.title}</div>
          <div className="text-xs text-zinc-400">{t.commentCount}</div>
        </div>
      )}
    />
  );
}
