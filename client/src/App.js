import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import LandingPage from "./components/LandingPage/LandingPage";
import Celulares from "./components/Destination/Celulares";
import CardDetail from "./components/CardDetail/CardDetail";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import SingUp from "./components/Sing-up/Singup";
import Compras from "./components/Compras/Compras";

function App() {

  return (

    <ChakraProvider>

      <Routes>

        <Route path="/" exact={true} element={<LandingPage />} />
        <Route path="/celulares" exact={true} element={<Celulares />} />
        <Route path="/about" exact={true} element={<About />} />
        <Route path="/login" exact={true} element={<Login />} />
        <Route path="/sing-up" exact={true} element={<SingUp />} />
        <Route path="/compras" exact={true} element={<Compras />} />
        <Route path="/destination/:id" element={<CardDetail />} />

      </Routes>

    </ChakraProvider>

  );

};

export default App;
