import { lazy } from "react";

export const route = [
  {
    path: "/",
    component: lazy(() => import("./pages/Home")),
    exact: true,
    title: "Home",
  },
  {
    path: "/customer",
    component: lazy(() => import("./pages/Customer")),
    exact: true,
    title: "Customer",
  },
  {
    path: "/inventory",
    component: lazy(() => import("./pages/Inventory")),
    exact: true,
    title: "Inventory",
  },
  {
    path: "/staff",
    component: lazy(() => import("./pages/Staff")),
    exact: true,
    title: "Staff",
  },
];
