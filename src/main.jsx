import React from "react";
import ReactDOM from "react-dom/client";
import NavbarComBusca from "./Header.jsx";
import NavbarFiltros from "./HeaderFiltros.jsx";
import DestaqueProdutos from "./DestaqueProdutos.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavbarComBusca />
    <NavbarFiltros />
    <DestaqueProdutos />
  </React.StrictMode>
);
