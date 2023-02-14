import { Card, Divider, CardBody, CardFooter, Text, Button, Stack, ButtonGroup, Heading, Image } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";
import axios from "axios";


function CardDetail(props) {

    const { id } = useParams();
    var hotel;

    axios.get(`http://localhost:3000/hoteles/${id}`)
        .then((res) => hotel = res.data)
        .catch((err) => console.log(err));

    console.log(hotel);

    return (

        <div>

            <NavBar />

            <Card maxW='sm'>
                <CardBody>

                    <Image
                        src={hotel.img}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />

                    <div>
                        <Button variant='ghost' colorScheme='blue'>
                            prev
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            next
                        </Button>
                    </div>

                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{hotel.name}</Heading>
                        <Text>
                            En Este Bello Destino Turístico, está El “San Agustín Internacional Hotel” ubicado dentro del pueblo y es totalmente campestre.
                            Es considerado como una alternativa Hotelera única y exclusiva, además de su belleza arquitectónica y paisajística, gracias al concepto con el que fue desarrollado.

                            Este precioso Hotel fue seleccionado por la revista Aló, como uno de los Hoteles paradisíacos de América.
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            {hotel.price}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>

        </div>
    )

};

export default CardDetail;