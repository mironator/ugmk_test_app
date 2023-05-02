import "dayjs/locale/ru";
import React from "react";
import "./App.css";

import { router } from "@router/router";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { RouterProvider } from "react-router-dom";

dayjs.extend(customParseFormat);

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
