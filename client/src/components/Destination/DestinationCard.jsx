import React from 'react';
import { Card, CardBody, Image, Stack, Heading, Text } from '@chakra-ui/react';

function DestinationCard(props) {

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
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{props.name}</Heading>
                        <Text>
                            City: {props.city}
                        </Text>
                        <Text>
                            Stars: {props.stars}
                        </Text>
                    </Stack>
                </CardBody>
            </Card>

        </div >

    )
};

export default DestinationCard;

