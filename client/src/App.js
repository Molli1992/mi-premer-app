import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import LandingPage from "./components/LandingPage/LandingPage";
import Celulares from "./components/Celulares/Celulares";
import CardDetail from "./components/CardDetail/CardDetail";
import About from "./components/About/About";
import Compras from "./components/Compras/Compras";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {

  return (

    <ChakraProvider>

      <NavBar />

      <Routes>

        <Route path="/" exact={true} element={<LandingPage />} />
        <Route path="/celulares" exact={true} element={<Celulares />} />
        <Route path="/about" exact={true} element={<About />} />
        <Route path="/compras" exact={true} element={<Compras />} />
        <Route path="/destination/:id" element={<CardDetail />} />

      </Routes>

      <Footer />

    </ChakraProvider>

  );

};

export default App;
