import Callout from "./Callout";
import { Tabs, Tab } from "./Tabs";


const slug = (text: any) =>
  String(text)
    .toLowerCase()
    .replace(/[^\w]+/g, "-");

export const components = {
  h1: (p: any) => (
    <h1
      id={slug(p.children)}
      className="text-4xl font-bold text-slate-900 mb-4 scroll-mt-24"
      {...p}
    />
  ),

  h2: (p: any) => (
    <h2
      id={slug(p.children)}
      className="text-2xl font-semibold text-slate-800 mt-8 mb-4 scroll-mt-24"
      {...p}
    />
  ),

  h3: (p: any) => (
    <h3
      id={slug(p.children)}
      className="text-xl font-semibold text-slate-700 mt-6 mb-3 scroll-mt-24"
      {...p}
    />
  ),

  p: (p: any) => (
    <p className="text-slate-600 leading-7 mb-4" {...p} />
  ),

  code: (p: any) => (
    <code className="bg-slate-100 text-pink-500 px-1 rounded font-mono" {...p} />
  ),

  pre: (p: any) => (
    <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto" {...p} />
  ),

  Callout,
  Tabs,
  Tab,
};