import { useEffect } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import TOC from "./TOC";
import DocsPagination from "./DocsPagination";

export default function Layout() {
  const location = useLocation();
  const APP_NAME = "lilDocker";

  useEffect(() => {
    const routeTitles: Record<string, string> = {
      "/": "Home",
      "/installation": "Installation",
      "/guide": "Guide",
      "/api": "API Reference",
    };

    const pageTitle = routeTitles[location.pathname] || "Docs";
    document.title = `${pageTitle} - ${APP_NAME}`;
  }, [location]);

  return (
    <div className="flex min-h-screen bg-white">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-slate-50 fixed h-full p-6 overflow-y-auto">
        {/* Added mb-8 here to provide space below the entire header */}
        <div className="flex flex-row items-center gap-3 justify-start mb-8">
          <img className="w-10" src="/lilDocker.png" alt="logo" />
          <p className="text-lg font-medium">{APP_NAME}</p>
        </div>

        <nav className="flex flex-col gap-3">
          <Link to="/">Home</Link>
          <Link to="/installation">Installation</Link>
          <Link to="/guide">Guide</Link>
          <Link to="/api">API Reference</Link>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 ml-64 mr-72 px-12 pt-20 pb-40">
        <div className="mx-auto  px-8 pt-10 pb-20 max-w-2xl">
          <Outlet className="h-full" />
          <DocsPagination className="group flex items-center pt-20 gap-3 border rounded-xl p-4 hover:bg-slate-500 transition" />
        </div>
      </main>

      {/* RIGHT TOC */}
      <aside className="w-72 fixed right-0 h-full p-6 bg-white">
        <TOC />
      </aside>
    </div>
  );
}
