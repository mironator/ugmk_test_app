import { Routes } from "@constants/routes";
import { DetailsPage } from "@pages/details";
import { LandingPage } from "@pages/landing";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    index: true,
    path: Routes.landing,
    element: <LandingPage />,
  },
  {
    path: Routes.details,
    element: <DetailsPage />,
  },
]);
