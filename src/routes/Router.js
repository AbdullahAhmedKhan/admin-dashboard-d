import { lazy } from "react";
import { Navigate } from "react-router-dom";
import RequireAuth from "../views/ui/RequireAuth.js";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Services = lazy(() => import("../views/ui/Services"));
const ServiceRequest = lazy(() => import("../views/ui/ServiceRequest"));
const ApprovedService = lazy(() => import("../views/ui/ApprovedService"));
const Users = lazy(() => import("../views/ui/Users"));
const Admins = lazy(() => import("../views/ui/Admin"));
const Login = lazy(() => import("../views/ui/Login"));
const SignUp = lazy(() => import("../views/ui/SignUp"));
const Forms = lazy(() => import("../views/ui/Forms"));

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
        element: <Starter />,
      },
      { path: "/about", exact: true, element: <About /> },
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
      {
        path: "/admins",
        exact: true,
        element: <Admins></Admins>,
      },
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
      {
        path: "/forms",
        exact: true,
        element: (
          <RequireAuth>
            <Forms></Forms>
          </RequireAuth>
        ),
      },
    ],
  },
];
export default ThemeRoutes;
