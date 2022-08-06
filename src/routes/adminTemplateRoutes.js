import { lazy } from "react";
const TableUser = lazy(() => import("pages/admin/manageUser/TableUser"));
const AddUserAdmin = lazy(() => import("pages/admin/manageUser/addUserAdmin/AddUserAdmin"));
const TableMainJob = lazy(() => import("pages/admin/manageMainJob/TableMainJob"));
const EditMainJob = lazy(() => import("pages/admin/manageMainJob/EditMainJob"));
const TableSubJob = lazy(() => import("pages/admin/manageSubJob/TableSubJob"));
const AddSubJob = lazy(() => import("pages/admin/manageSubJob/AddSubJob"));

export const adminTemplateRoutes = [
  { path: "listuser", Element: TableUser },
  { path: "adduser", Element: AddUserAdmin },
  { path: "listmainjob", Element: TableMainJob },
  { path: "editMainJob/:mainJobId", Element: EditMainJob },
  { path: "listSubJob", Element: TableSubJob },
  { path: "add-edit-SubJob/:idSubJob", Element: AddSubJob },
];
