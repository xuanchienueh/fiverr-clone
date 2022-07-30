import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./global.scss";

const Home = lazy(() => import("./pages/home/Home"));
const HomeTemplate = lazy(() => import("./templates/homeTemplate/HomeTemplate"));
const ListJobs = lazy(() => import("pages/listJobs/ListJobs"));
const DetailMainJob = lazy(() => import("pages/detailMainJob/DetailMainJob"));
const Loading = lazy(() => import("components/loading/Loading"));
const Register = lazy(() => import("pages/register/Register"));
const Profile = lazy(() => import("pages/profile/Profile"));
const Login = lazy(() => import("pages/login/Login"));
const AdminTemplace = lazy(() => import("templates/adminTemplace/AdminTemplace"));
const TableUser = lazy(() => import("pages/admin/manageUser/TableUser"));
const AddUserAdmin = lazy(() => import("pages/admin/manageUser/addUserAdmin/AddUserAdmin"));

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
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="admin" element={<AdminTemplace />}>
            <Route path="listuser" element={<TableUser />} />
            <Route path="adduser" element={<AddUserAdmin />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
