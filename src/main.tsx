import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import '~/stylesheets/reset.css'
import PageA from '~/pages/page-a/index.tsx'
import PageB from '~/pages/page-b/index.tsx'
import Top from '~/pages/top/index.tsx';
import BaseLayout from '~/layouts/base/base-layout';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route index element={<Top />} />
          <Route path="/pageA" element={<PageA />} />
          <Route path="/pageB" element={<PageB />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
