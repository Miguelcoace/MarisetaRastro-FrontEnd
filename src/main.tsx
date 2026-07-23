import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";
import Header from "./components/Header.tsx";
import NavBar from "./components/navBar.tsx";
import Separator from "./components/Separator.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavBar />
    <Header />
    <Separator />
    <App />
    <Separator />
  </StrictMode>,
);
