import NavBar from "../NavBar/NavBar";
import { Image, Box, Text, Flex } from '@chakra-ui/react';
import "./About.css";

function About() {
    return (

        <div className="color">

            <div>
                <NavBar />
            </div>

            <br></br>

            <Flex gap='10' alignItems='center' borderWidth='3px'>

                <Image src='https://st.depositphotos.com/1766887/2306/i/450/depositphotos_23063254-stock-photo-beautiful-white-sandy-beaches-of.jpg'
                    alt='Playa' boxSize='500px' />

                <Text fontSize='xl'>
                    Un paraíso tropical salpicado de hermosas playas de fina arena blanca y aguas turquesas.
                    No te lo pienses y reserva ya tu hotel en Punta Cana con Ibera.
                    No te arrepentirás.
                </Text>

            </Flex>

            <br></br>

            <Flex gap='10' alignItems='center' borderWidth='3px'>

                <Text fontSize='xl'>
                    Este Verano te esperamos en la base del cerro catedral para que disfrutes del verano como te lo mereces.
                    Ubicados a 2oo metros de los medios de elevación y a 20 minutos del centro de la ciudad.
                    Ofrecemos departamentos totalmente equipados con servicio de hoteleria, para 2 hasta 8 pasajeros,
                    con una imponente vista al Cerro Catedral, Desayuno incluido, limpieza diaria, piscina cubierta climatizada
                    y acceso al único spa del Cerro
                </Text>

                <Image src='https://www.ecured.cu/images/thumb/7/7f/Monta%C3%B1a00.jpg/1200px-Monta%C3%B1a00.jpg'
                    alt='Montaña' boxSize='500px' />


            </Flex>

            <br></br>

            <Flex gap='10' alignItems='center' borderWidth='3px'>

                <Image src='https://media.traveler.es/photos/61ddb90ef88dd8b81f9a542f/3:2/w_2118,h_1412,c_limit/GettyImages-1336944149.jpg'
                    alt='Nieve' boxSize='500px' />

                <Text fontSize='xl'>
                    Viví la Experiencia de Ski All Inclusive en las mejores Pistas de Esqui del Mundo.
                    Elegí entre los alpes Franceses, Italianos o Suizos con Ski in-out y Hasta 30%Off.
                </Text>

            </Flex>

            <br></br>

            <Flex gap='10' alignItems='center' borderWidth='3px'>

                <Text fontSize='xl'>
                    Nuestros aparts son tu mejor opción para tu próxima escapada a Buenos Aires.
                    Queremos que vivas una experiencia única durante tu estadía en nuestra hermosa ciudad.
                </Text>

                <Image src='https://humanidades.com/wp-content/uploads/2017/03/ciudad-3-e1565900111723.jpg'
                    alt='Ciudad' boxSize='500px' />


            </Flex>

            <br></br>

        </div>

    )
};

export default About;