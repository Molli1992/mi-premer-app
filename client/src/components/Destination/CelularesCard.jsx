import React from 'react';
import { Card, CardBody, Image, Stack, Heading, Text, Button, Box } from '@chakra-ui/react';

function CelularesCard(props) {

    return (

        <div className='home-card'>

            <Card maxW='sm' _hover={{
                bg: 'green.500',
                transform: 'scale(0.95)',
            }}>
                <CardBody>
                    <Image
                        src={props.img[0]}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        maxWidth={150}
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{props.name}</Heading>
                        <Text>
                            Price: {props.price}
                        </Text>
                        <Button variant='solid' colorScheme='blue'>
                            look detail
                        </Button>
                    </Stack>
                </CardBody>
            </Card>

        </div >

    )
};

export default CelularesCard;

