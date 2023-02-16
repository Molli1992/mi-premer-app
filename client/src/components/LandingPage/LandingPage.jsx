import { Link } from "react-router-dom";
import "./LandingPage.css";
import { Button, ButtonGroup } from '@chakra-ui/react';

function LandingPage(props) {
    return (

        <section className="hero">

            <nav>

                <div className="nav-link">

                    <ul>
                        <Link to={"/celulares"}>
                            <ButtonGroup variant='outline' spacing='6'>
                                <Button color="black" _hover={{
                                    transform: 'scale(1.10)',
                                }}>Home</Button>
                            </ButtonGroup>
                        </Link>
                    </ul>

                </div>

            </nav>

            <div className="content">
                <h1>Enjoy your purchase <br />Iphone network</h1>
            </div>

        </section>

    )
};

export default LandingPage;