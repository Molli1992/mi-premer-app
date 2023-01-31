import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage(props) {
    return (

        <section className="hero">

            <nav>

                <a href="/home"><span>Hotel Ibera</span></a>

                <div className="nav-link">

                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/destination">Destination</a></li>
                        <li><a href="/story">Story</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <Link to="/logging"><li className="btn" href="/Loging">logging</li></Link>
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