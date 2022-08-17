import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "./components/routes";
import TasksLayout from "./pages/tasks/TasksLayout";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksLayout />}>
            {routes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                element={<route.component />}
              ></Route>
            ))}
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
