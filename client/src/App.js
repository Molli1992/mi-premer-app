import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (

    <ChakraProvider>

      <Routes>

        <Route path="/" exact={true} element={<LandingPage />} />
        <Route path="/home" exact={true} element={<Home />} />

      </Routes>

    </ChakraProvider>

  );
}

export default App;
