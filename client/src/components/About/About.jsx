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
                    Una experiencia única
                    Bailar, disfrutar o, simplemente, relajarse.
                    Prepare su próxima escapada en Carnaval con hasta un -15%.
                </Text>

            </Flex>

            <br></br>

            <Flex gap='10' alignItems='center' borderWidth='3px'>

                <Text fontSize='xl'>
                    Una experiencia única
                    Bailar, disfrutar o, simplemente, relajarse.
                    Prepare su próxima escapada en Carnaval con hasta un -15%.
                </Text>

                <Image src='https://www.ecured.cu/images/thumb/7/7f/Monta%C3%B1a00.jpg/1200px-Monta%C3%B1a00.jpg'
                    alt='Montaña' boxSize='500px' />


            </Flex>

            <br></br>

            <br></br>

            <div>
                <p>......................................................................................</p>
            </div>

            <br></br>

        </div>

    )
};

export default About;