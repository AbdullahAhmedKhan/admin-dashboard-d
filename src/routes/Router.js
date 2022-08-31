import { lazy } from "react";
import { Navigate } from "react-router-dom";
import RequireAuth from "../views/ui/RequireAuth.js";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Services = lazy(() => import("../views/ui/Services"));
const ServiceRequest = lazy(() => import("../views/ui/ServiceRequest"));
const ApprovedService = lazy(() => import("../views/ui/ApprovedService"));
const Users = lazy(() => import("../views/ui/Users"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Login = lazy(() => import("../views/ui/Login"));
const SignUp = lazy(() => import("../views/ui/SignUp"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      {
        path: "/starter",
        exact: true,
        element: (
          <RequireAuth>
            <Starter />
          </RequireAuth>
        ),
      },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/services", exact: true, element: <Services></Services> },
      {
        path: "/servicerequest",
        exact: true,
        element: (
          <RequireAuth>
            <ServiceRequest></ServiceRequest>
          </RequireAuth>
        ),
      },
      {
        path: "/users",
        exact: true,
        element: (
          <RequireAuth>
            <Users></Users>
          </RequireAuth>
        ),
      },
      { path: "/table", exact: true, element: <Tables /> },
      {
        path: "/approved",
        exact: true,
        element: (
          <RequireAuth>
            <ApprovedService></ApprovedService>
          </RequireAuth>
        ),
      },
      {
        path: "/login",
        exact: true,
        element: <Login></Login>,
      },
      { path: "/signup", exact: true, element: <SignUp></SignUp> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];
export default ThemeRoutes;
