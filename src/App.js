import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import LoginAndRegister from "./Pages/LoginRegisterPage/LoginAndRegister";
import { routes } from "./Routes/routes";
import IndexTemplate from "./templates/IndexTemplate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="" element={<IndexTemplate />}>
            <Route index element={<HomePage />} />
            {routes.map(({ path, component }, index) => {
              return <Route key={index} path={path} element={component} />;
            })}
          </Route>
          <Route path="/login" element={<LoginAndRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
