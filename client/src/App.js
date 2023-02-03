import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import LandingPage from "./components/LandingPage/LandingPage";
import Destination from "./components/Destination/Destination";
import CardDetail from "./components/CardDetail/CardDetail";

function App() {
  return (

    <ChakraProvider>

      <Routes>

        <Route path="/" exact={true} element={<LandingPage />} />
        <Route path="/destination" exact={true} element={<Destination />} />
        <Route path="/destination/:id" element={<CardDetail />} />

      </Routes>

    </ChakraProvider>

  );
}

export default App;
