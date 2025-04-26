import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import '~/stylesheets/reset.css'
import '~/stylesheets/default.css'
import PageA from '~/pages/pageA/index.tsx'
import PageB from '~/pages/pageB/index.tsx'
import Top from '~/pages/top/index';
import BaseLayout from '~/layouts/base/index';
import { Path } from '~/libs/const';

if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/worker.ts')
  await worker.start()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path={Path.TOP} element={<Top />} />
          <Route path={Path.PAGE_A} element={<PageA />} />
          <Route path={Path.PAGE_B} element={<PageB />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
