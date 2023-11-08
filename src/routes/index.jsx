import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Blogs from "../pages/Blogs";
import Jobs from "../pages/Jobs";
import AddJob from "../pages/AddJob";
import PostedJobs from "../pages/PostedJobs";
import AppliedJobs from "../pages/AppliedJobs";
import JobDetails from "../pages/JobDetails";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import BlockRoute from "./BlockRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <BlockRoute>
            <Login />
          </BlockRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <BlockRoute>
            <Register />
          </BlockRoute>
        ),
      },
      {
        path: "/job/:slug/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/addjob",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/updatejob/:id",
        element: (
          <PrivateRoute>
            <UpdateJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/postedjobs",
        element: (
          <PrivateRoute>
            <PostedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/appliedjobs",
        element: (
          <PrivateRoute>
            <AppliedJobs />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
