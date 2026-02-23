import { Link, useLocation } from "react-router-dom";
import { docsPages } from "../docs/docsOrder";

export default function DocsPagination() {
  const location = useLocation();

  const currentIndex = docsPages.findIndex(
    (p) => p.path === location.pathname
  );

  const prev = docsPages[currentIndex - 1];
  const next = docsPages[currentIndex + 1];

  return (
    <div className="mt-24 grid grid-cols-2 gap-6">
      
      {/* PREVIOUS */}
      {prev ? (
        <Link
          to={prev.path}
          className="group border-2 border-double rounded-xl p-5 text-right border-slate-300 bg-slate-50 transition"
        >
          <div className="flex items-center gap-3">
            <span className="text-xl transition group-hover:-translate-x-1">
              ←
            </span>

            <div>
              <p className="text-xs text-slate-400 mb-1">
                Previous
              </p>
              <p className="font-semibold text-slate-500">
                {prev.title}
              </p>
            </div>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {/* NEXT */}
      {next && (
        <Link
          to={next.path}
          className="group border-2 border-double rounded-xl p-5 text-right border-slate-300 bg-slate-50 transition"
        >
          <div className="flex items-center justify-end gap-3">
            <div>
              <p className="text-xs text-slate-400 mb-1">
                Next
              </p>
              <p className="font-semibold text-slate-500">
                {next.title}
              </p>
            </div>

            <span className="text-xl transition group-hover:translate-x-1">
              →
            </span>
          </div>
        </Link>
      )}
    </div>
  );
}