import React from "react";
import { Card, CardBody, CardFooter, Heading, Image, Stack, Text, Button } from '@chakra-ui/react';





function Profile() {




    return (

        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
                objectFit='cover'
                maxW="400px"
                src='https://i.pinimg.com/736x/5f/61/b9/5f61b99b20694b22e368f48541045062.jpg'
                alt='Chakie Chan'
            />

            <Stack>

                <CardBody>

                    <Heading size='md'>Profile</Heading>

                    <Text py='2'>
                        <Text fontWeight="bold">Name:</Text>
                        Felipe
                    </Text>

                    <Text py='2'>
                        <Text fontWeight="bold">Last Name:</Text>
                        Blaksley Iraola
                    </Text>


                    <Text py='2'>
                        <Text fontWeight="bold">Date of Birth:</Text>
                        22/05/1992
                    </Text>

                    <Text py='2'>
                        <Text fontWeight="bold">Nationality:</Text>
                        Argentina
                    </Text>

                    <Text py='2'>
                        <Text fontWeight="bold">Email:</Text>
                        felipe.blaksley@hotmail.com
                    </Text>

                </CardBody>

                <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                        Edit Profile
                    </Button>
                </CardFooter>

            </Stack>

        </Card>

    );

};

export default Profile;