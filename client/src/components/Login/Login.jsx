import NavBar from "../NavBar/NavBar";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Stack, Button } from '@chakra-ui/react';
import { useState } from "react";
import "./Login.css";

function Login(props) {

    const UserArray = [];

    console.log(UserArray);

    const [errorSubmit, setErrorSubmit] = useState("");

    const [input, setInput] = useState({
        email: "",
        name: "",
        lastName: "",
        birthday: ""
    });

    const handleInputChange = (e) => {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        });

        console.log(input)

    };

    const handeleSubmit = (e) => {

        if (
            !errosEmail && !errosName && !errosLastName && !errosBirthday &&
            errosEMsuccessful && errosNsuccessful && errosLNsuccessful && errosBsuccessful
        ) {

            setInput({
                email: "",
                name: "",
                lastName: "",
                birthday: ""
            })

            setErrorSubmit("")

            UserArray.push(input);

            console.log(UserArray)

        } else {
            setErrorSubmit("error")
        }

    };



    var errosEmail = "";
    var errosEMsuccessful = "";

    if (input.email.length >= 41) {
        errosEmail = "error"
    };

    if (input.email.length > 15 && input.email.length <= 40) {
        errosEMsuccessful = "error"
    };



    var errosName = "";
    var errosNsuccessful = "";

    if (input.name.length > 0 && input.name.length < 3) {
        errosName = "error"
    };

    if (input.name.length >= 3) {
        errosNsuccessful = "error"
    };



    var errosLastName = "";
    var errosLNsuccessful = "";

    if (input.lastName.length > 0 && input.lastName.length < 3) {
        errosLastName = "error"
    };

    if (input.lastName.length >= 3) {
        errosLNsuccessful = "error"
    };



    var errosBirthday = "";
    var errosBsuccessful = "";

    if (input.birthday) {

        if (input.birthday) {

            if (input.birthday.length === 1) {
                if (isNaN(input.birthday[0])) {
                    errosBirthday = "error";
                }
            } else if (input.birthday.length === 2) {
                if (isNaN(input.birthday[1])) {
                    errosBirthday = "error";
                }
            } else if (input.birthday.length === 3) {
                if (input.birthday[2] !== "/") {
                    errosBirthday = "error";
                }
            } else if (input.birthday.length === 4) {
                if (isNaN(input.birthday[3])) {
                    errosBirthday = "error";
                }
            } else if (input.birthday.length === 5) {
                if (isNaN(input.birthday[4])) {
                    errosBirthday = "error";
                }
            } else if (input.birthday.length === 6) {
                if (input.birthday[5] !== "/") {
                    errosBirthday = "error";
                }
            } else if (input.birthday.length === 7) {
                if (isNaN(input.birthday[6])) {
                    errosBirthday = "error";
                }
            } else if (input.birthday.length === 8) {
                if (isNaN(input.birthday[7])) {
                    errosBirthday = "error";
                } else {
                    errosBsuccessful = "error";
                }
            } else if (input.birthday.length > 8) {
                errosBirthday = "error";
            } else {
                errosBirthday = "";
                errosBirthday = "";
            }

        };

    };

    return (

        <div>

            <NavBar />

            <div className="form">

                <FormControl>

                    <FormLabel>Email</FormLabel>
                    <Input type='text' value={input.email} name="email" onChange={handleInputChange} />
                    {!errosEmail && !errosEMsuccessful ? (
                        <FormHelperText>
                            Complete email.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}
                    {errosEmail && !errosEMsuccessful ? (
                        <FormHelperText>
                            Error: Mistake email.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}
                    {errosEMsuccessful ? (
                        <FormHelperText>
                            Successful
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}

                    <FormLabel>Name</FormLabel>
                    <Input type='text' value={input.name} name="name" onChange={handleInputChange} />
                    {!errosName && !errosNsuccessful ? (
                        <FormHelperText>
                            Complete Name.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}
                    {errosName && !errosNsuccessful ? (
                        <FormHelperText>
                            Error: Name should have 3 letters.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}
                    {errosNsuccessful ? (
                        <FormHelperText>
                            Successful
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}

                    <FormLabel>Last Name</FormLabel>
                    <Input type='text' value={input.lastName} name="lastName" onChange={handleInputChange} />
                    {!errosLastName && !errosLNsuccessful ? (
                        <FormHelperText>
                            Complete Last Name.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}
                    {errosLastName && !errosLNsuccessful ? (
                        <FormHelperText>
                            Error: Last Name should have 3 letters.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}
                    {errosLNsuccessful ? (
                        <FormHelperText>
                            Successful
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}

                    <FormLabel>Birthday</FormLabel>
                    <Input type='text' value={input.birthday} name="birthday" onChange={handleInputChange} />
                    {!errosBirthday && !errosBsuccessful ? (
                        <FormHelperText>
                            Complete Birthday.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}
                    {errosBirthday && !errosBsuccessful ? (
                        <FormHelperText>
                            Error: birthday ej: 22/05/92.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}
                    {errosBsuccessful ? (
                        <FormHelperText>
                            Successful
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}

                </FormControl>



            </div>

            <div className="form">

                <Stack direction='row' spacing={4} align='center'>
                    <Button colorScheme='teal' variant='solid' onClick={handeleSubmit}>
                        Submmit
                    </Button>
                </Stack>

            </div>

            <div>

                <FormControl className="form">

                    {errorSubmit ? (
                        <FormHelperText>
                            Error in any of the data provided.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}

                </FormControl>

            </div>

        </div>

    )
};


export default Login;