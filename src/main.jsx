import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Base from "./layouts/Base";
import Home from "./pages/Home";
import ButtonPage from "./pages/Buttons";
import ROUTES from "./constants/routes";
import CardPage from "./pages/Cards";
import BasketPage from "./pages/Baskets";
import FormPage from "./pages/Forms";
import EditableContent from "./components/EditableContent";
import SliderPage from "./pages/Sliders";
import "./global.css";

const myCustomRouter = createBrowserRouter([
  {
    element: <Base />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.BUTTONS,
        element: <ButtonPage />,
      },
      {
        path: ROUTES.CARDS,
        element: <CardPage />,
      },
      {
        path: ROUTES.BASKETS,
        element: <BasketPage />,
        children: [
          {
            path: ROUTES.EDITABLECONTENT,
            element: <EditableContent />,
          },
        ],
      },
      {
        path: ROUTES.FORMS,
        element: <FormPage />,
      },
      {
        path: ROUTES.SLIDERS,
        element: <SliderPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myCustomRouter} />
  </React.StrictMode>
);
