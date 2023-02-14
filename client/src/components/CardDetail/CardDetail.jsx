import { Card, Divider, CardBody, CardFooter, Text, Button, Stack, ButtonGroup, Heading, Image } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";
import axios from "axios";


function CardDetail(props) {

    const { id } = useParams();

    const DataHoteles = [
        { id: "1", name: "Hotel Ibera Buenos Airas", city: "Buenos Aires", rating: "5", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "250 usd" },
        { id: "2", name: "Hotel Ibera Catamarca", city: "Catamarca", rating: "4", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "180 usd" },
        { id: "3", name: "Hotel Ibera Chaco", city: "Chaco", rating: "3", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "75 usd" },
        { id: "4", name: "Hotel Ibera Chubut", city: "Chubut", rating: "5", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "250 usd" },
        { id: "5", name: "Hotel Ibera Córdoba", city: "Córdoba", rating: "4", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "180 usd" },
        { id: "6", name: "Hotel Ibera Corrientes", city: "Corrientes", rating: "3", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "75 usd" },
        { id: "7", name: "Hotel Ibera Entre Ríos", city: "Entre Ríos", rating: "5", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "250 usd" },
        { id: "8", name: "Hotel Ibera Formosa", city: "Formosa", rating: "4", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "180 usd" },
        { id: "9", name: "Hotel Ibera Jujuy", city: "Jujuy", rating: "3", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "75 usd" },
        { id: "10", name: "Hotel Ibera La Pampa", city: "La Pampa", rating: "5", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "250 usd" },
        { id: "11", name: "Hotel Ibera La Rioja", city: "La Rioja", rating: "4", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "180 usd" },
        { id: "12", name: "Hotel Ibera Mendoza", city: "Mendoza", rating: "3", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "75 usd" },
        { id: "13", name: "Hotel Ibera Misiones", city: "Misiones", rating: "5", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "250 usd" },
        { id: "14", name: "Hotel Ibera Neuquén", city: "Neuquén", rating: "4", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "180 usd" },
        { id: "15", name: "Hotel Ibera Río Negro", city: "Río Negro", rating: "3", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "150 usd" },
        { id: "16", name: "Hotel Ibera Salta", city: "Salta", rating: "5", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "75 usd" },
        { id: "17", name: "Hotel Ibera San Juan", city: "San Juan", rating: "4", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "250 usd" },
        { id: "18", name: "Hotel Ibera San Luis", city: "San Luis", rating: "3", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "180 usd" },
        { id: "19", name: "Hotel Ibera Santa Cruz", city: "Santa Cruz", rating: "5", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "75 usd" },
        { id: "20", name: "Hotel Ibera Santa Fe", city: "Santa Fe", rating: "4", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "250 usd" },
        { id: "21", name: "Hotel Ibera Santiago del Estero", city: "Santiago del Estero", rating: "3", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "180 usd" },
        { id: "22", name: "Hotel Ibera Tierra del Fuego", city: "Tierra del Fuego", rating: "5", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "75 usd" },
        { id: "23", name: "Hotel Ibera Tucumán", city: "Tucumán", rating: "4", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "250 usd" }
    ];



    return (

        <div>

            <NavBar />

            <Card maxW='sm'>
                <CardBody>

                    <Image
                        src={DataHoteles[id].img}
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
                        <Heading size='md'>{DataHoteles[id].name}</Heading>
                        <Text>
                            En Este Bello Destino Turístico, está El “San Agustín Internacional Hotel” ubicado dentro del pueblo y es totalmente campestre.
                            Es considerado como una alternativa Hotelera única y exclusiva, además de su belleza arquitectónica y paisajística, gracias al concepto con el que fue desarrollado.

                            Este precioso Hotel fue seleccionado por la revista Aló, como uno de los Hoteles paradisíacos de América.
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            {DataHoteles[id].price}
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