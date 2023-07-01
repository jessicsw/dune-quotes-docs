import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Documentation from "./components/Documentation";
import ErrorPage from "./error-page";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <Routes>
          <Route
            path="/documentation"
            element={<Documentation />}
            errorElement={<ErrorPage />}
          />
          <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
