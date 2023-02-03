import { Link } from "react-router-dom";
import "./LandingPage.css";
import { Button, ButtonGroup } from '@chakra-ui/react';

function LandingPage(props) {
    return (

        <section className="hero">

            <nav>

                <div className="logo"></div>

                <div className="nav-link">

                    <ul>
                        <li><a href="/destination">Destination</a></li>
                        <li><a href="/about">About</a></li>
                        <Link to={"/login"}>
                            <ButtonGroup variant='outline' spacing='6'>
                                <Button color="yellow" _hover={{
                                    transform: 'scale(1.10)',
                                }}>Login</Button>
                            </ButtonGroup>
                        </Link>
                    </ul>

                </div>

            </nav>

            <div className="content">
                <h1>Enjoy your vacation with <br />resort network <span>Ibera</span></h1>
            </div>

        </section>

    )
};

export default LandingPage;