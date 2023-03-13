import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Cookies from "universal-cookie";



function NavBar(props) {

    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { isAuthenticated, isLoading } = useAuth0();

    const onClickProfile = (e) => {
        window.location.href = "http://localhost:3002/about"
    };



    if (isLoading) {

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
                            >Loading...</button>

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

                            {isAuthenticated ?

                                <div>

                                    <li><a href="/profile" class="nav-link px-2 text-black">
                                        <ion-icon name="person-circle-outline" size="large"></ion-icon>
                                    </a></li>

                                </div>

                                :

                                <div></div>

                            }

                            <li><a href="/compras" class="nav-link px-2 text-black">
                                <ion-icon name="cart-outline" size="large"></ion-icon>
                            </a></li>

                        </ul>

                        {isAuthenticated ?

                            <div class="text-end">

                                <button type="button" class="btn btn-outline-dark"
                                    onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                                >Logout</button>

                            </div>

                            :

                            <div class="text-end">

                                <button type="button" class="btn btn-outline-dark"
                                    onClick={() => loginWithRedirect()}
                                >Login</button>

                            </div>

                        }

                    </div>

                </div>

            </header>

        )

    }

};

export default NavBar;

