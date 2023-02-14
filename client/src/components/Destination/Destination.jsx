import "./Destination.css";
import DestinationCard from "./DestinationCard";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Button, Stack, Input, InputGroup, InputLeftAddon, Select } from '@chakra-ui/react'
import axios from "axios";

function Destination(props) {

    const dataApi = [];

    axios.get("http://localhost:3000/hoteles")
        .then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                dataApi.push(res.data[i])
            }
        })
        .catch((err) => console.log(err));

    console.log(dataApi);

    const [items, setItems] = useState([]);
    const [hoteles, setHoteles] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const arrayHotelesName = [];

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

    const handleSearchName = (e) => {

        setItems([...dataApi].filter((dato) => {
            return dato.city.toLowerCase().includes(e.target.value.toLowerCase())
        }))

        setCurrentPage(0);

    };

    const handleSearch = (e) => {

        setItems([...dataApi].filter((dato) => {
            return dato.name === e.target.value
        }))

        setCurrentPage(0);

    };

    if (items.length === 0) {
        setItems([...dataApi].splice(0, ITEMS_PER_PAGE));
        setHoteles(arrayHotelesName)
    };

    console.log(items);

    const refresh = () => {
        window.location.reload()
    };

    return (
        <div className='home-color'>

            <NavBar />

            <div className='home-banner'>
                <h1 className='h-1'>Enjoy you dream</h1>
                <h1 className='h-1'>vacation Ibera</h1>
            </div>

            <main>

                <div className='home-filters'>

                    <div className='home-page'>

                        <div>
                            <Stack spacing={4}>
                                <InputGroup>
                                    <InputLeftAddon children='Search' />
                                    <Input type='tel' onChange={handleSearchName} />
                                </InputGroup>
                            </Stack>
                        </div>

                    </div>

                    <Select placeholder='Search by name' color="black" onChange={handleSearch}>

                        {hoteles && hoteles.map((hotel) => {
                            return (
                                <option>
                                    {hotel}
                                </option>
                            );
                        })}

                    </Select>

                    <Button colorScheme='blue' onClick={refresh}>Refresh</Button>

                </div>


                <div className='home-cards'>

                    {

                        items && items.map((hotel) => {


                            return (

                                <Link to={"/destination/" + hotel.id}>
                                    <DestinationCard img={hotel.img} name={hotel.name}
                                        city={hotel.city} rating={hotel.rating} />
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