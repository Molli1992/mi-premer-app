import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";

function App() {
  return (
    <Routes>

      <Route path="/" exact={true} element={<LandingPage />} />
      <Route path="/home" exact={true} element={<Home />} />

    </Routes>

  );
}

export default App;
