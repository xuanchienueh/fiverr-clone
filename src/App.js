import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./global.scss";

const Home = lazy(() => import("./pages/home/Home"));
const HomeTemplate = lazy(() => import("./templates/homeTemplate/HomeTemplate"));
const ListJobs = lazy(() => import("pages/listJobs/ListJobs"));
const DetailMainJob = lazy(() => import("pages/detailMainJob/DetailMainJob"));
const Loading = lazy(() => import("components/loading/Loading"));

function App() {
  return (
    <BrowserRouter>
      <Loading />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<HomeTemplate />}>
            <Route path="" element={<Home />} />
            <Route path="listjobs/:valueSearch" element={<ListJobs />} />
            <Route path="detailmainjob/:idMainJob" element={<DetailMainJob />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
