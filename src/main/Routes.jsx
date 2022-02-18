import React from "react";
import { useRoutes } from "react-router-dom";
import Itinerario from "../components/transportes/Itinerario";
import Lotacao from "../components/transportes/Lotacao";
import Onibus from "../components/transportes/Onibus";

const AppRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Onibus /> },
    {
      path: "onibus",
      children: [
        { path: "", element: <Onibus /> },
        { path: "itinerario/:id", element: <Itinerario /> },
      ],
    },
    {
      path: "lotacao",
      children: [
        { path: "", element: <Lotacao /> },
        { path: "itinerario/:id", element: <Itinerario /> },
      ],
    },
  ]);
  return element;
};

export default AppRoutes;
