import NavBar from "../NavBar/NavBar";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input } from '@chakra-ui/react';
import { useState } from "react";

function Login(props) {

    const [input, setInput] = useState({
        email: "",
        name: "",
        lastName: "",
        birthday: ""
    });

    const date = [];
    const month = [];
    const year = [];

    if (!date.length) {
        for (let i = 1; i < 32; i++) {
            date.push([i])
        }
    };

    if (!month.length) {
        for (let i = 1; i < 13; i++) {
            month.push([i])
        }
    };

    if (!year.length) {
        for (let i = 1900; i < 2024; i++) {
            year.push([i])
        }
    };

    const handleInputChange = (e) => {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        });

        console.log(input)

    };

    const onChangeBirthday = (e) => {

        setInput({
            ...input,
            birthday: `${input.birthday}/${e.target.value}`
        });
        console.log(input.birthday)

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

    var errosBirthday = "";
    var errosBsuccessful = "";

    if (input.birthday.length > 0 && input.birthday.length < 7 && input.birthday.length < 13) {
        errosBirthday = "error"
    };

    if (input.birthday.length >= 8 && input.birthday.length <= 12) {
        errosBsuccessful = "error"
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

                <FormLabel>Birthday</FormLabel>
                <Input type='text' value={input.birthday} name="birthday " onChange={handleInputChange} />
                {!errosBirthday && !errosBsuccessful ? (
                    <FormHelperText>
                        Complete Birthday.
                    </FormHelperText>
                ) : (
                    <FormErrorMessage></FormErrorMessage>
                )}
                {errosBirthday ? (
                    <FormHelperText>
                        Error: Birthday Ej, 22/05/1992
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

            <div>

                <select onChange={onChangeBirthday}>

                    <option>Date</option>

                    {date && date.map((d) => {
                        return (
                            <option>
                                {d}
                            </option>
                        );
                    })}

                </select>

                <select onChange={onChangeBirthday}>

                    <option>Month</option>

                    {month && month.map((m) => {
                        return (
                            <option>
                                {m}
                            </option>
                        );
                    })}

                </select>



                <select onChange={onChangeBirthday}>

                    <option>Year</option>

                    {year && year.map((y) => {
                        return (
                            <option>
                                {y}
                            </option>
                        );
                    })}

                </select>

            </div>

        </div>

    )
};


export default Login;