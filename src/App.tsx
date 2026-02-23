import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";

import Layout from "./components/Layout";
import LilDocker from "./components/lilDocker";
import { components } from "./components/MDXComponents";

import ApiRef from "../docs/api-ref.mdx";
import Guide from "../docs/guide.mdx";
import Installation from "../docs/installation.mdx"

export default function App() {
  return (
    <BrowserRouter>
      <MDXProvider components={components}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LilDocker />} />
            <Route path="installation" element={<Installation/>} />
            <Route path="/guide" element={<Guide/>}/>
            <Route path="api" element={<ApiRef />} />
          </Route>
        </Routes>
      </MDXProvider>
    </BrowserRouter>
  );
}