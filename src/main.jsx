import ReactDOM from "react-dom/client";
import "./assets/styles/global.css";
import Routes from "./routes/Routes";
import { AuthProvider } from "./providers/AuthProvider";
import { EditProvider } from "./providers/EditProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <EditProvider>
      <Routes />
    </EditProvider>
  </AuthProvider>
);
