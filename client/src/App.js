import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import LandingPage from "./components/LandingPage/LandingPage";
import Celulares from "./components/Celulares/Celulares";
import CardDetail from "./components/CardDetail/CardDetail";
import About from "./components/About/About";
import Compras from "./components/Compras/Compras";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Contact from "./components/Contact/Contact";

function App() {

  return (

    <ChakraProvider>

      <NavBar />

      <Routes>

        <Route path="/" exact={true} element={<LandingPage />} />
        <Route path="/celulares" exact={true} element={<Celulares />} />
        <Route path="/about" exact={true} element={<About />} />
        <Route path="/compras" exact={true} element={<Compras />} />
        <Route path="/profile" exact={true} element={<Profile />} />
        <Route path="/contact" exact={true} element={<Contact />} />
        <Route path="/destination/:id" element={<CardDetail />} />

      </Routes>

      <Footer />

    </ChakraProvider>

  );

};

export default App;
