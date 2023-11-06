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
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/job/:slug/:id",
        element: <JobDetails />,
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
        element: <AddJob />,
      },
      {
        path: "/postedjobs",
        element: <PostedJobs />,
      },
      {
        path: "/appliedjobs",
        element: <AppliedJobs />,
      },
    ],
  },
]);

export default router;
