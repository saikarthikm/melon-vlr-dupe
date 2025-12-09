import { BlockList } from "./BlockList";
import { Thread } from "@/types";

export function ThreadCol({ items }: { items: Thread[] }) {
  return (
    <>
      <BlockList
        items={items}
        render={(t) => (
          <div
            key={t.id}
            className="bg-item p-3 rounded cursor-pointer hover:bg-zinc-700 border border-border flex flex-row gap-5 w-auto"
          >
            <div className="text-sm">{t.title}</div>
            <div className="text-xs text-zinc-400">{t.comments}</div>
          </div>
        )}
      />
    </>
  );
}
