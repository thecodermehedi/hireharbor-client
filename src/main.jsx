import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import router from "./routes";
import "./index.css";
import AuthProvider from "./providers/AuthProvider";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {HelmetProvider} from "react-helmet-async";
import {SkeletonTheme} from "react-loading-skeleton";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme baseColor="#313131" highlightColor="#aaa">
        <HelmetProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </HelmetProvider>
      </SkeletonTheme>
    </QueryClientProvider>
  </React.StrictMode>
);
