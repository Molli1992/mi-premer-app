import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@chakra-ui/react";
import axios from "axios";



function NavBar(props) {

    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();




    if (isLoading) {

        return (

            <header class="p-3">

                <div class="container">

                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-black text-decoration-none">
                        </a>

                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

                            <li><a class="nav-link px-2 text-black">Home</a></li>
                            <li><a class="nav-link px-2 text-black">About</a></li>
                            <li><a class="nav-link px-2 text-black">Conact-Us</a></li>

                        </ul>

                        <div class="text-end">

                            <button type="button" class="btn btn-outline-dark"
                            >Loading...</button>

                        </div>

                    </div>

                </div>

            </header>

        )

    } else if (isAuthenticated) {

        console.log(user);

        axios.post("http://localhost:3010/usuarios", { email: user.email })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))

        return (

            <header class="p-3">

                <div class="container">

                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-black text-decoration-none">
                            <ion-icon name="logo-apple-ar" size="large"></ion-icon>
                        </a>

                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

                            <li><a href="/celulares" class="nav-link px-2 text-black">Home</a></li>
                            <li><a href="/about" class="nav-link px-2 text-black">About</a></li>
                            <li><a href="/contact" class="nav-link px-2 text-black">Conact-Us</a></li>
                            <li><a href="/compras" class="nav-link px-2 text-black">
                                <ion-icon name="cart-outline" size="large"></ion-icon>
                            </a></li>

                            <Box alignItems="center" padding="0px 0px 0px 800px">

                                <li><a href="/profile" class="nav-link px-2 text-black">
                                    <ion-icon name="person-circle-outline" size="large"></ion-icon>
                                    Profile
                                </a></li>

                            </Box>

                        </ul>

                        <div class="text-end">

                            <button type="button" class="btn btn-outline-dark"
                                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                            >Logout</button>

                        </div>

                    </div>

                </div>

            </header>

        )

    } else {



        return (

            <header class="p-3">

                <div class="container">

                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-black text-decoration-none">
                            <ion-icon name="logo-apple-ar" size="large"></ion-icon>
                        </a>

                        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

                            <li><a href="/celulares" class="nav-link px-2 text-black">Home</a></li>
                            <li><a href="/about" class="nav-link px-2 text-black">About</a></li>
                            <li><a href="/contact" class="nav-link px-2 text-black">Conact-Us</a></li>
                            <li><a href="/compras" class="nav-link px-2 text-black">
                                <ion-icon name="cart-outline" size="large"></ion-icon>
                            </a></li>

                        </ul>

                        <div class="text-end">

                            <button type="button" class="btn btn-outline-dark"
                                onClick={() => loginWithRedirect()}
                            >Login</button>

                        </div>

                    </div>

                </div>

            </header>

        );
    };

};

export default NavBar;

