import "./App.css";
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "./components/Home/index";
import { Production } from "./components/Production/index";
import { Stadistic } from "./components/Stadistic";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "production", element: <Production /> },
    { path: "stadistic", element: <Stadistic /> },
    //{ path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
