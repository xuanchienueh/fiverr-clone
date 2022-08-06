import { lazy } from "react";

const Home = lazy(() => import("pages/home/Home"));
const ListJobs = lazy(() => import("pages/listJobs/ListJobs"));
const DetailMainJob = lazy(() => import("pages/detailMainJob/DetailMainJob"));
const Login = lazy(() => import("pages/login/Login"));
const Register = lazy(() => import("pages/register/Register"));
const Profile = lazy(() => import("pages/profile/Profile"));
const DetailJob = lazy(() => import("pages/detailJob/DetailJob"));
const CreateNewGig = lazy(() => import("pages/Gig/createNewGig/CreateNewGig"));
const MyListGig = lazy(() => import("pages/Gig/myListGig/MyListGig"));
const EditMyGig = lazy(() => import("pages/Gig/editMyGig/EditMyGig"));

export const homeTemplateRoutes = [
  { path: "", Element: Home },
  { path: "listjobs/:valueSearch", Element: ListJobs },
  { path: "detailmainjob/:idMainJob", Element: DetailMainJob },
  { path: "login", Element: Login },
  { path: "register", Element: Register },
  { path: "profile", Element: Profile },
  { path: "detailJob/:jobId", Element: DetailJob },
  { path: "createNewGig", Element: CreateNewGig },
  { path: "myGigs", Element: MyListGig },
  { path: "editMyGig/:GigId", Element: EditMyGig },
];
