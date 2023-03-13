import {
    Card, Divider, CardBody, CardFooter, Text, Button, Stack,
    ButtonGroup, Heading, Image, Box, Select
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";


function CardDetail(props) {

    const { id } = useParams();
    const [number, setNumber] = useState(0)
    const [item, setItem] = useState([])


    if (item.length === 0) {

        axios.get(`http://localhost:3010/celulares/${id}`)
            .then((res) => {
                setItem([...res.data])
            })
            .catch((err) => console.log(err))

    };

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

        e.preventDefault();

        const button = document.getElementById("button-buy");
        button.innerText = "Loading...";

        axios.post("http://localhost:3010/payment", {
            title: title,
            unit_price: unit_price
        }).then((res) => window.location.href = `${res.data.init_point}`)
            .catch((err) => console.log(err))

    };

    const onClickReturn = (e) => {
        window.location.href = "http://localhost:3000/celulares"
    }

    if (item.length > 0) {

        var title = item[0].name;
        var unit_price = item[0].price;

        console.log(item);
        console.log(number);
        console.log(title);
        console.log(unit_price);

        return (

            <div>

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
                                src={item[0].img[number]}
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
                                <Heading size='md'>{item[0].name}</Heading>
                                <Text>
                                    {item[0].descripcion1}
                                </Text>
                                <Text>
                                    {item[0].descripcion2}
                                </Text>
                                <Text>
                                    {item[0].descripcion3}
                                </Text>
                                <Text>
                                    {item[0].descripcion4}
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    {item[0].price} USD
                                </Text>
                            </Stack>

                        </CardBody>

                        <Divider />

                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button id='button-buy' variant='solid' colorScheme='blue' onClick={handleSubmit}>
                                    Buy now
                                </Button>
                                <Button variant='ghost' colorScheme='blue'>
                                    Add to cart
                                </Button>
                                <Button variant='ghost' colorScheme='blue' onClick={onClickReturn}>
                                    Return
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