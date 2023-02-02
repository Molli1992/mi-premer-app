import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import { ChakraProvider } from '@chakra-ui/react'
import CardDetail from "./components/CardDetaill";
import NavBar from "./components/NavBar";

function App() {
  return (

    <ChakraProvider>

      <Routes>

        <Route path="/" exact={true} element={<LandingPage />} />
        <Route path="/home" exact={true} element={<Home />} />
        <Route path="/nav-bar" element={<NavBar />} />
        <Route path="/home/:id" element={<CardDetail />} />

      </Routes>

    </ChakraProvider>

  );
}

export default App;
