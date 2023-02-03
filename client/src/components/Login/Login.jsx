import NavBar from "../NavBar/NavBar";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input } from '@chakra-ui/react';
import { useState } from "react";

function Login(props) {

    const [input, setInput] = useState({
        email: "",
        name: "",
        lastName: "",
        birthdate: ""
    });

    const date = [];

    if (!date.length) {
        for (let i = 1; i < 31; i++) {
            date.push([i])
        }
    };

    console.log(date);

    const handleInputChange = (e) => {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        });

        console.log(input)

    };

    const onChangeGeneros = (e) => {

        setInput({
            ...input,
            birthdate: `${input.birthdate}, ${e.target.value}`
        });
        console.log(input.birthdate)

    };

    const BorrarGenero = (e) => {

        setInput({
            ...input,
            birthdate: input.birthdate.slice(0, input.birthdate.length - 1)
        });
        console.log(input.birthdate)

    };



    var errosEmail = "";
    var errosEMsuccessful = "";

    if (input.email.length > 10) {
        errosEmail = "error"
    };

    if (input.email.length === 9) {
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

    return (

        <div>

            <NavBar />

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
                {errosEmail ? (
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
                {errosName ? (
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
                {errosLastName ? (
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

            </FormControl>

            <select onChange={onChangeGeneros}>

                <option>Date of Birthday:</option>

                {date && date.map((g) => {
                    return (
                        <option>
                            {g}
                        </option>
                    );
                })}

            </select>
            {input.birthdate}  <button onClick={BorrarGenero}>Borrar</button>

        </div>

    )
};


export default Login;