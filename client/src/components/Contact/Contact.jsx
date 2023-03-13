import React from "react";
import { Card, CardBody, CardFooter, Heading, Image, Stack, Text, Button, Box } from '@chakra-ui/react';





function Contact() {




    return (

        <Box padding="0px 0px 0px 475px">

            <Card
                maxW="600px"
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                alignItems="center"
            >

                <Stack alignItems="center" textAlign="center">

                    <Image
                        objectFit='cover'
                        height="500px"
                        width="350px"
                        src='https://tiempo.hn/wp-content/uploads/2020/10/Expresion-Alo-1068x712.jpg'
                        alt='Chakie Chan'
                    />

                </Stack>

                <Stack alignItems="center" textAlign="center">

                    <CardBody alignItems="center" textAlign="center">

                        <Heading size='md'>Contact-Us</Heading>

                        <Text py='2'>
                            <Text fontWeight="bold">Phone:</Text>
                            112-458-6710
                        </Text>

                        <Text py='2'>
                            <Text fontWeight="bold">Country:</Text>
                            Argentina, Buenos Aires, Beccar
                        </Text>


                        <Text py='2'>
                            <Text fontWeight="bold">Adress:</Text>
                            Camino Real 1550, Oficina 127, Beccar
                        </Text>

                        <Text py='2'>
                            <Text fontWeight="bold">Codigo Postal:</Text>
                            1643
                        </Text>

                        <Text py='2'>
                            <Text fontWeight="bold">Email:</Text>
                            felipe.blaksley@hotmail.com
                        </Text>

                    </CardBody>

                    <CardFooter>

                        <li class="ms-3">
                            <a class="text-muted" href="#">
                                <ion-icon name="logo-linkedin" size="large"></ion-icon>
                            </a>
                        </li>

                        <li class="ms-3">
                            <a class="text-muted" href="#">
                                <ion-icon name="logo-facebook" size="large"></ion-icon>
                            </a>
                        </li>

                        <li class="ms-3">
                            <a class="text-muted" href="#">
                                <ion-icon name="logo-google" size="large"></ion-icon>
                            </a>
                        </li>

                    </CardFooter>

                </Stack>

            </Card>

        </Box>

    );

};

export default Contact;