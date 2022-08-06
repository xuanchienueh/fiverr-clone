import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { adminTemplateRoutes } from "routes/adminTemplateRoutes";
import { homeTemplateRoutes } from "routes/homeTemplateRoutes";
import "./App.css";
import "./global.scss";

const HomeTemplate = lazy(() => import("./templates/homeTemplate/HomeTemplate"));
const Loading = lazy(() => import("components/loading/Loading"));
const LoadingSuspend = lazy(() => import("components/loading/LoadingSuspend"));
const AdminTemplace = lazy(() => import("templates/adminTemplace/AdminTemplace"));

function App() {
  return (
    <BrowserRouter>
      <Loading />
      <Suspense fallback={<LoadingSuspend />}>
        <Routes>
          <Route element={<HomeTemplate />}>
            {homeTemplateRoutes.map((route, i) => {
              return <Route key={i} path={route.path} element={<route.Element />} />;
            })}
          </Route>

          <Route path="admin" element={<AdminTemplace />}>
            {adminTemplateRoutes.map((route, i) => {
              return <Route key={i} path={route.path} element={<route.Element />} />;
            })}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
