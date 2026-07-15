import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./components/App";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </HashRouter>,
);
