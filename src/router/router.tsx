import { Routes } from "@constants/routes";
import { DetailsPage } from "@pages/details";
import { ErrorPage } from "@pages/error";
import { LandingPage } from "@pages/landing";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    index: true,
    path: Routes.landing,
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: Routes.details,
    element: <DetailsPage />,
    errorElement: <ErrorPage />,
  },
]);
