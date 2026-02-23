import { useState } from "react";

export function Tabs({ items, children }: any) {
  const [active, setActive] = useState(0);

  return (
    <div className="my-6">
      <div className="flex gap-2 border-b mb-4">
        {items.map((item: string, i: number) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-3 py-1 text-sm ${
              active === i
                ? "border-b-2 border-green-600 font-medium"
                : "text-slate-500"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div>{children[active]}</div>
    </div>
  );
}

export function Tab({ children }: any) {
  return <div>{children}</div>;
}