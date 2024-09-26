import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./routes/Routes.jsx";
import Layout from "./Layout.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  </StrictMode>
);
