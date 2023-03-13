import React from 'react';
import { Card, CardBody, Image, Stack, Heading, Text, Button } from '@chakra-ui/react';

function CelularesCard(props) {

    return (

        <Card maxW='sm' _hover={{
            bg: 'green.500',
            transform: 'scale(0.95)',
        }}>

            <CardBody>

                <Image
                    src={props.img[0]}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    height="300px"
                    width="200px"
                />

                <Stack mt='6' spacing='3'>

                    <Heading size='md'>{props.name}</Heading>

                    <Text>
                        {props.price} USD
                    </Text>

                    <Button variant='solid' colorScheme='blue'>
                        look detail
                    </Button>

                </Stack>

            </CardBody>

        </Card>

    )
};

export default CelularesCard;

