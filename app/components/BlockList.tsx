type BlockListProps<T> = {
  items: T[];
  render: (item: T) => React.ReactNode;
};

export function BlockList<T>({ items, render }: BlockListProps<T>) {
  return (
    <div className="space-y-2">
      <>{items.map(render)}</>
    </div>
  );
}
