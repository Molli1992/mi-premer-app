import "./Celulares.css";
import CelularesCard from "./CelularesCard";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Button, Select } from '@chakra-ui/react'
import dataApi from "../../data/CelularData";

function Celulares(props) {

    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const arrayCelularesName = [];

    console.log(dataApi);

    for (let i = 0; i < dataApi.length; i++) {

        arrayCelularesName.push(dataApi[i].name)

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

            <main>

                <div className='home-filters'>

                    <Select placeholder='Search by name' onChange={handleSearchName}>

                        {arrayCelularesName && arrayCelularesName.map((hotel) => {
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

                        items && items.map((cel) => {


                            return (

                                <Link to={"/destination/" + cel.id}>
                                    <CelularesCard img={cel.img} name={cel.name}
                                        price={cel.price} />
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

export default Celulares;