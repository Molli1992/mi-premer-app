import { useState } from "react";
import {
    Card, CardBody, CardFooter, Heading, Image, Stack, Text, Button,
    Box, Divider, Select, FormControl, FormLabel, Input,
    FormHelperText, FormErrorMessage, Alert, AlertIcon
} from '@chakra-ui/react';
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";




function Profile() {

    const [modifyButton, setModifyButton] = useState("");
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [usuario, setUsuario] = useState([]);
    const [input, setInput] = useState({
        first_name: "",
        last_name: "",
        date_birth: "",
        nationality: "",
        img: ""
    });

    const PaisesArray = ["Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Ciudad del Vaticano", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guyana", "Guinea", "Guinea ecuatorial", "Guinea-Bisáu", "Haití", "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Palestina", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana", "República Checa", "República de Macedonia", "República del Congo", "República Democrática del Congo", "República Dominicana", "República Sudafricana", "Ruanda", "Rumanía", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"];
    const DayArray = [];
    const MonthArray = [];
    const YearArray = [];

    for (let i = 1; i < 32; i++) {
        DayArray.push(i);
    };

    for (let i = 1; i < 13; i++) {
        MonthArray.push(i);
    };

    for (let i = 1922; i < 2024; i++) {
        YearArray.push(i);
    };


    const handleBirthdayChange = (e) => {

        const selectDay = document.getElementById('select-day');
        const selectMonth = document.getElementById('select-month');
        const selectYear = document.getElementById('select-year');

        setInput({
            ...input,
            [e.target.name]: `${selectDay.value}-${selectMonth.value}-${selectYear.value}`
        });

        console.log(input)

    };

    const handleInputChange = (e) => {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        });

        console.log(input)

    };

    const handleSubmit = () => {

        axios.put(`http://localhost:3010/usuarios/${user.email}`, input)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))

        alert("Usuario Modificado");

        window.location.reload()

    };

    const onClick = () => {

        if (modifyButton === "modify") {
            setModifyButton("")
        } else {
            setModifyButton("modify")
        }

    };

    if (isLoading) {

        return (

            <div>Loading....</div>
        )

    } else if (isAuthenticated) {

        if (usuario.length === 0) {
            axios.get(`http://localhost:3010/usuarios/${user.email}`)
                .then((res) => {
                    setUsuario(res.data)
                    console.log(usuario)
                })
                .catch((err) => console.log(err))
        }

        if (usuario.length > 0) {

            console.log(usuario);

            return (

                <div>

                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        <Image
                            objectFit='cover'
                            maxW="400px"
                            src={usuario[0].img ? usuario[0].img : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
                            alt='Chakie Chan'
                        />

                        <Stack>

                            <CardBody>

                                <Heading size='md'>Profile</Heading>

                                <Text py='2'>
                                    <Text fontWeight="bold">Name:</Text>
                                    {usuario[0].first_name}
                                </Text>

                                <Text py='2'>
                                    <Text fontWeight="bold">Last Name:</Text>
                                    {usuario[0].last_name}
                                </Text>


                                <Text py='2'>
                                    <Text fontWeight="bold">Date of Birth:</Text>
                                    {usuario[0].date_birth}
                                </Text>

                                <Text py='2'>
                                    <Text fontWeight="bold">Nationality:</Text>
                                    {usuario[0].nationality}
                                </Text>

                                <Text py='2'>
                                    <Text fontWeight="bold">Email:</Text>
                                    {usuario[0].email}
                                </Text>

                            </CardBody>

                            {modifyButton === "modify" ?
                                <CardFooter>
                                    <Button variant='solid' colorScheme='blue'
                                        onClick={onClick}
                                    >
                                        Close
                                    </Button>
                                </CardFooter>
                                :
                                <CardFooter>
                                    <Button variant='solid' colorScheme='blue'
                                        onClick={onClick}
                                    >
                                        Edit Profile
                                    </Button>
                                </CardFooter>
                            }

                        </Stack>

                    </Card>

                    <br></br>

                    {modifyButton === "modify" ?

                        <Box height="600px" width="500px">

                            <FormControl>

                                <FormLabel>Name</FormLabel>
                                <Input type='text' value={input.first_name} name="first_name" onChange={handleInputChange} borderWidth='3px' />

                                <FormLabel>Last Name</FormLabel>
                                <Input type='text' value={input.last_name} name="last_name" onChange={handleInputChange} borderWidth='3px' />

                                <FormLabel>Image</FormLabel>
                                <Input type='text' value={input.img} name="img" onChange={handleInputChange} borderWidth='3px' />

                                <FormLabel>Birthday</FormLabel>

                                <Select placeholder='day' id="select-day" name="date_birth" onChange={handleBirthdayChange} borderWidth='3px' maxW='sm'>
                                    {DayArray && DayArray.map((d) => {
                                        return (
                                            <option> {d} </option>
                                        )
                                    })}
                                </Select>

                                <Select placeholder='month' id="select-month" name="date_birth" onChange={handleBirthdayChange} borderWidth='3px' maxW='sm'>
                                    {MonthArray && MonthArray.map((m) => {
                                        return (
                                            <option> {m} </option>
                                        )
                                    })}
                                </Select>

                                <Select placeholder='year' id="select-year" name="date_birth" onChange={handleBirthdayChange} borderWidth='3px' maxW='sm'>
                                    {YearArray && YearArray.map((y) => {
                                        return (
                                            <option> {y} </option>
                                        )
                                    })}
                                </Select>

                                <br></br>

                                <FormLabel>Nationality</FormLabel>

                                <Select placeholder='Select option' id="select-nation" name="nationality" value={input.nationality} onChange={handleInputChange} borderWidth='3px'>
                                    {PaisesArray && PaisesArray.map((p) => {
                                        return (
                                            <option> {p} </option>
                                        )
                                    })}
                                </Select>

                            </FormControl>

                            <br></br>

                            <Button variant='solid' colorScheme='blue'
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>

                        </Box>

                        :

                        <div></div>

                    }

                </div >

            );

        } else {

            <div>Loading....</div>

        };

    } else {

        window.location.href = "http://localhost:3000";

        alert("Tenes que logearte")

    }

};

export default Profile;