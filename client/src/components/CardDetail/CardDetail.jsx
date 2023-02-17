import {
    Card, Divider, CardBody, CardFooter, Text, Button, Stack,
    ButtonGroup, Heading, Image, Box, Select
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";
import DataCelulares from '../../data/CelularData';
import { useState } from 'react';
import axios from "axios";


function CardDetail(props) {

    const { id } = useParams();
    const [number, setNumber] = useState(0)

    console.log(DataCelulares);
    console.log(number);

    const nextHandler = () => {

        let num = number + 1

        if (num > 2) return;

        console.log("nextHandler");

        setNumber(num)
    };

    const prevHandler = () => {

        let num = number - 1

        if (num < 0) return;

        console.log("prevHandler");

        setNumber(num)

    };

    const handleSubmit = (e) => {

        window.location.href = "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=1136995879-80b3cede-c7e3-4262-a84a-84c1f3c9f14c";

    };

    if (DataCelulares) {

        return (

            <div>

                <NavBar />

                <Box
                    borderWidth="1px"
                    rounded="lg"
                    shadow="1px 1px 3px rgba(0,0,0,0.3)"
                    maxWidth={800}
                    p={6}
                    m="10px auto"
                    as="form"
                >

                    <Card maxWidth={800}>

                        <CardBody>

                            <Image
                                src={DataCelulares[id].img[number]}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                                maxWidth={300}
                            />

                            <div>
                                <Button variant='ghost' colorScheme='blue' onClick={prevHandler}>
                                    prev
                                </Button>
                                <Button variant='ghost' colorScheme='blue' onClick={nextHandler}>
                                    next
                                </Button>
                            </div>

                            <div>
                                <Select placeholder='color' color="black" maxWidth={500}>
                                    <option>blanco</option>
                                    <option>negro</option>
                                    <option>gris</option>
                                    <option>azul</option>
                                    <option>amarillo</option>
                                </Select>
                            </div>

                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{DataCelulares[id].name}</Heading>
                                <Text>
                                    {DataCelulares[id].descripcion1}
                                </Text>
                                <Text>
                                    {DataCelulares[id].descripcion2}
                                </Text>
                                <Text>
                                    {DataCelulares[id].descripcion3}
                                </Text>
                                <Text>
                                    {DataCelulares[id].descripcion4}
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    {DataCelulares[id].price}
                                </Text>
                            </Stack>

                        </CardBody>

                        <Divider />

                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' colorScheme='blue' onClick={handleSubmit}>
                                    Buy now
                                </Button>
                                <Button variant='ghost' colorScheme='blue'>
                                    Add to cart
                                </Button>
                            </ButtonGroup>
                        </CardFooter>

                    </Card>

                </Box>

            </div>
        )

    } else (

        <div>Loading...</div>

    )

};

export default CardDetail;