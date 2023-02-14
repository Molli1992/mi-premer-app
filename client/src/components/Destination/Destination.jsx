import "./Destination.css";
import DestinationCard from "./DestinationCard";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Button, Stack, Input, InputGroup, InputLeftAddon, Select } from '@chakra-ui/react'
import axios from "axios";

function Destination(props) {

    const dataApi = [
        { id: "1", name: "Hotel Ibera Buenos Airas", city: "Buenos Aires", rating: "5", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "250 usd" },
        { id: "2", name: "Hotel Ibera Catamarca", city: "Catamarca", rating: "4", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "180 usd" },
        { id: "3", name: "Hotel Ibera Chaco", city: "Chaco", rating: "3", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "75 usd" },
        { id: "4", name: "Hotel Ibera Chubut", city: "Chubut", rating: "5", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "250 usd" },
        { id: "5", name: "Hotel Ibera Córdoba", city: "Córdoba", rating: "4", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "180 usd" },
        { id: "6", name: "Hotel Ibera Corrientes", city: "Corrientes", rating: "3", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "75 usd" },
        { id: "7", name: "Hotel Ibera Entre Ríos", city: "Entre Ríos", rating: "5", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "250 usd" },
        { id: "8", name: "Hotel Ibera Formosa", city: "Formosa", rating: "4", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "180 usd" },
        { id: "9", name: "Hotel Ibera Jujuy", city: "Jujuy", rating: "3", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "75 usd" },
        { id: "10", name: "Hotel Ibera La Pampa", city: "La Pampa", rating: "5", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "250 usd" },
        { id: "11", name: "Hotel Ibera La Rioja", city: "La Rioja", rating: "4", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "180 usd" },
        { id: "12", name: "Hotel Ibera Mendoza", city: "Mendoza", rating: "3", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "75 usd" },
        { id: "13", name: "Hotel Ibera Misiones", city: "Misiones", rating: "5", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "250 usd" },
        { id: "14", name: "Hotel Ibera Neuquén", city: "Neuquén", rating: "4", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "180 usd" },
        { id: "15", name: "Hotel Ibera Río Negro", city: "Río Negro", rating: "3", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "150 usd" },
        { id: "16", name: "Hotel Ibera Salta", city: "Salta", rating: "5", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "75 usd" },
        { id: "17", name: "Hotel Ibera San Juan", city: "San Juan", rating: "4", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "250 usd" },
        { id: "18", name: "Hotel Ibera San Luis", city: "San Luis", rating: "3", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "180 usd" },
        { id: "19", name: "Hotel Ibera Santa Cruz", city: "Santa Cruz", rating: "5", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "75 usd" },
        { id: "20", name: "Hotel Ibera Santa Fe", city: "Santa Fe", rating: "4", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "250 usd" },
        { id: "21", name: "Hotel Ibera Santiago del Estero", city: "Santiago del Estero", rating: "3", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "180 usd" },
        { id: "22", name: "Hotel Ibera Tierra del Fuego", city: "Tierra del Fuego", rating: "5", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "75 usd" },
        { id: "23", name: "Hotel Ibera Tucumán", city: "Tucumán", rating: "4", img: "https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", price: "250 usd" }
    ];

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