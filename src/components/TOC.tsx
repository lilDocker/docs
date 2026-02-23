import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Heading {
  id: string;
  text: string;
  level: number;
  element: HTMLElement;
}

export default function TOC() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState("");
  const location = useLocation();

  useEffect(() => {
    /* Wait for MDX to render */
    const timer = setTimeout(() => {
      const elements = Array.from(
        document.querySelectorAll("main h2, main h3")
      ) as HTMLHeadingElement[];

      const mapped = elements
        .filter((el) => el.id)
        .map((el) => ({
          id: el.id,
          text: el.innerText,
          level: Number(el.tagName.replace("H", "")),
          element: el,
        }));

      setHeadings(mapped);

      if (mapped.length === 0) return;

      const handleScroll = () => {
        /* TOP FIX */
        if (window.scrollY < 80) {
          setActiveId(mapped[0].id);
          return;
        }

        /* BOTTOM FIX */
        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 40
        ) {
          setActiveId(mapped[mapped.length - 1].id);
          return;
        }

        /* NORMAL SCROLL DETECTION */
        let current = mapped[0].id;

        for (const heading of mapped) {
          const rect = heading.element.getBoundingClientRect();

          if (rect.top <= window.innerHeight * 0.55) {
            current = heading.id;
          }
        }

        setActiveId(current);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="sticky top-24 text-sm">
      <p className="text-slate-900 font-semibold mb-4">
        On this page
      </p>

      <div className="flex flex-col gap-2">
        {headings.map((h) => (
          <a
            key={h.id}
            href={`#${h.id}`}
            className={`transition duration-200 ${
              activeId === h.id
                ? "text-gray-600 font-medium"
                : "text-slate-500 hover:text-slate-900"
            } ${h.level === 3 ? "ml-4" : ""}`}
          >
            {h.text}
          </a>
        ))}
      </div>
    </div>
  );
}