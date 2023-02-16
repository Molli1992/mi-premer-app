import "./Destination.css";
import DestinationCard from "./DestinationCard";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Button, Select } from '@chakra-ui/react'
import dataApi from "../../data/HotelsData";

function Destination(props) {

    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const arrayHotelesName = [];

    console.log(dataApi);

    for (let i = 0; i < dataApi.length; i++) {

        arrayHotelesName.push(dataApi[i].name)

    }

    var ITEMS_PER_PAGE = 6;

    const nextHandler = () => {

        const totalElementos = dataApi.length;

        const nextPage = currentPage + 1;

        const firstIndex = nextPage * ITEMS_PER_PAGE;

        if (nextPage >= totalElementos / ITEMS_PER_PAGE || items.length <= 5 || items.length >= 7) return;

        setItems([...dataApi].splice(firstIndex, ITEMS_PER_PAGE))
        setCurrentPage(nextPage);

    };

    const prevHandler = () => {

        const prevPage = currentPage - 1;

        if (prevPage < 0) return;

        const firstIndex = prevPage * ITEMS_PER_PAGE;

        setItems([...dataApi].splice(firstIndex, ITEMS_PER_PAGE))
        setCurrentPage(prevPage);

    };

    const handleSearchStars = (e) => {

        setItems([...dataApi].filter((dato) => {
            return dato.stars === e.target.value
        }))

        setCurrentPage(0);

    };

    const handleSearchName = (e) => {

        setItems([...dataApi].filter((dato) => {
            return dato.name === e.target.value
        }))

        setCurrentPage(0);

    };

    const refresh = () => {
        window.location.reload()
    };

    if (items.length === 0) {
        setItems([...dataApi].splice(0, ITEMS_PER_PAGE));
    };

    console.log(items);

    return (

        <div className='home-color'>

            <NavBar />

            <div className='home-banner'>
                <h1 className='h-1'>Enjoy you dream</h1>
                <h1 className='h-1'>vacation Ibera</h1>
            </div>

            <main>

                <div className='home-filters'>

                    <Select placeholder='Search by name' color="black" onChange={handleSearchName}>

                        {arrayHotelesName && arrayHotelesName.map((hotel) => {
                            return (
                                <option>
                                    {hotel}
                                </option>
                            );
                        })}

                    </Select>

                    <Select placeholder='Search by stars' color="black" onChange={handleSearchStars}>

                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>

                    </Select>

                    <Button colorScheme='blue' onClick={refresh}>Refresh</Button>

                </div>

                <div className='home-cards'>

                    {

                        items && items.map((hotel) => {


                            return (

                                <Link to={"/destination/" + hotel.id}>
                                    <DestinationCard img={hotel.img} name={hotel.name}
                                        city={hotel.city} stars={hotel.stars} />
                                </Link>

                            )

                        })

                    }

                </div>

            </main>

            <div className='home-paginado'>
                <Button colorScheme='blue' onClick={prevHandler}>Prev</Button>
                {currentPage}
                <Button colorScheme='blue' onClick={nextHandler}>Next</Button>
            </div>

        </div>
    )

};

export default Destination;