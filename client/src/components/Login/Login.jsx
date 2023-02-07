import NavBar from "../NavBar/NavBar";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Stack, Button, Select } from '@chakra-ui/react';
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
        birthday: "",
        password: ""
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
            !errorEmail && !errorName && !errorLastName && !errorBirthday && !errorPassword &&
            errorEMsuccessful && errorNsuccessful && errorLNsuccessful && errorBsuccessful && errorPsuccessful && input.nationality
        ) {

            UserArray.push(input);

            console.log(UserArray);

            setInput({
                email: "",
                name: "",
                lastName: "",
                birthday: "",
                password: "",
                nationality: ""
            });

            setErrorSubmit("");



        } else {
            setErrorSubmit("error");
        }

    };



    var errorEmail = "";
    var errorEMsuccessful = "";

    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if (expReg.test(input.email)) {
        errorEMsuccessful = "error";
    } else if (input.email) {
        errorEmail = "error"
    } else {
        errorEmail = "";
        errorEMsuccessful = "";
    };


    var errorName = "";
    var errorNsuccessful = "";

    if (input.name.length > 0 && input.name.length < 3) {
        errorName = "error"
    };

    if (input.name.length >= 3) {
        errorNsuccessful = "error"
    };



    var errorLastName = "";
    var errorLNsuccessful = "";

    if (input.lastName.length > 0 && input.lastName.length < 3) {
        errorLastName = "error"
    };

    if (input.lastName.length >= 3) {
        errorLNsuccessful = "error"
    };


    var errorPassword = "";
    var errorPsuccessful = "";

    if (input.password.length > 0 && input.password.length < 3) {
        errorPassword = "error"
    };

    if (input.password.length >= 3) {
        errorPsuccessful = "error"
    };



    var errorBirthday = "";
    var errorBsuccessful = "";

    if (input.birthday) {

        if (input.birthday) {

            if (input.birthday.length === 1) {
                if (isNaN(input.birthday[0])) {
                    errorBirthday = "error";
                }
            } else if (input.birthday.length === 2) {
                if (isNaN(input.birthday[1])) {
                    errorBirthday = "error";
                }
            } else if (input.birthday.length === 3) {
                if (input.birthday[2] !== "/") {
                    errorBirthday = "error";
                }
            } else if (input.birthday.length === 4) {
                if (isNaN(input.birthday[3])) {
                    errorBirthday = "error";
                }
            } else if (input.birthday.length === 5) {
                if (isNaN(input.birthday[4])) {
                    errorBirthday = "error";
                }
            } else if (input.birthday.length === 6) {
                if (input.birthday[5] !== "/") {
                    errorBirthday = "error";
                }
            } else if (input.birthday.length === 7) {
                if (isNaN(input.birthday[6])) {
                    errorBirthday = "error";
                }
            } else if (input.birthday.length === 8) {
                if (isNaN(input.birthday[7])) {
                    errorBirthday = "error";
                } else {
                    errorBsuccessful = "error";
                }
            } else if (input.birthday.length > 8) {
                errorBirthday = "error";
            } else {
                errorBirthday = "";
                errorBsuccessful = "";
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
                    {!errorEmail && !errorEMsuccessful ? (
                        <FormHelperText>
                            Complete email.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}
                    {errorEmail && !errorEMsuccessful ? (
                        <FormHelperText color="blue">
                            email@example.com
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}
                    {errorEMsuccessful ? (
                        <FormHelperText color="red" className="letter">
                            Successful
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}

                    <FormLabel>Name</FormLabel>
                    <Input type='text' value={input.name} name="name" onChange={handleInputChange} />
                    {!errorName && !errorNsuccessful ? (
                        <FormHelperText>
                            Complete Name.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}
                    {errorName && !errorNsuccessful ? (
                        <FormHelperText color="blue">
                            Error: Name should have 3 letters.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}
                    {errorNsuccessful ? (
                        <FormHelperText color="red" className="letter">
                            Successful
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}

                    <FormLabel>Last Name</FormLabel>
                    <Input type='text' value={input.lastName} name="lastName" onChange={handleInputChange} />
                    {!errorLastName && !errorLNsuccessful ? (
                        <FormHelperText>
                            Complete Last Name.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}
                    {errorLastName && !errorLNsuccessful ? (
                        <FormHelperText color="blue">
                            Error: Last Name should have 3 letters.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}
                    {errorLNsuccessful ? (
                        <FormHelperText color="red" className="letter">
                            Successful
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}

                    <FormLabel>Birthday</FormLabel>
                    <Input type='text' value={input.birthday} name="birthday" onChange={handleInputChange} />
                    {!errorBirthday && !errorBsuccessful ? (
                        <FormHelperText>
                            Complete Birthday.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}
                    {errorBirthday && !errorBsuccessful ? (
                        <FormHelperText color="blue">
                            Error: birthday ej: 22/05/92.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}
                    {errorBsuccessful ? (
                        <FormHelperText color="red" className="letter">
                            Successful
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}

                    <FormLabel>Password</FormLabel>
                    <Input type='text' value={input.password} name="password" onChange={handleInputChange} />
                    {!errorPassword && !errorPsuccessful ? (
                        <FormHelperText>
                            Complete Password.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}
                    {errorPassword && !errorPsuccessful ? (
                        <FormHelperText color="blue">
                            Error: Password should have capital letter and number.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}
                    {errorPsuccessful ? (
                        <FormHelperText color="red" className="letter">
                            Successful
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage></FormErrorMessage>
                    )}

                </FormControl>



            </div>

            <div className="form">

                <FormLabel>Nationality</FormLabel>

                <Select placeholder='Select option' value={input.nationality} name="nationality" onChange={handleInputChange}>
                    <option> Argentina </option>
                    <option> Brasil </option>
                    <option> Uruguay </option>
                </Select>

            </div>

            <div className="form">

                <Stack direction='row' spacing={4} align='center'>
                    <Button colorScheme='teal' variant='solid' onClick={handeleSubmit}>
                        Submmit
                    </Button>
                </Stack>

                <FormControl className="form">

                    {errorSubmit ? (
                        <FormHelperText color="green" className="letter">
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