import { Card, Divider, CardBody, CardFooter, Text, Button, Stack, ButtonGroup, Heading, Image } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import NavBar from "../NavBar/NavBar";
import DataHoteles from '../../data/HotelsData';
import { useState } from 'react';


function CardDetail(props) {

    const { id } = useParams();

    const [number, setNumber] = useState(0);

    console.log(DataHoteles);

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

    if (DataHoteles) {

        return (

            <div>

                <NavBar />

                <Card maxW='sm'>
                    <CardBody>

                        <Image
                            src={DataHoteles[id].img[number]}
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />

                        <div>
                            <Button variant='ghost' colorScheme='blue' onClick={prevHandler}>
                                prev
                            </Button>
                            <Button variant='ghost' colorScheme='blue' onClick={nextHandler}>
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

    } else (

        <div>Loading...</div>

    )

};

export default CardDetail;