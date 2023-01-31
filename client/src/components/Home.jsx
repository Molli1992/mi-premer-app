import axios from "axios";
import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Home(props) {

    var nextHandler;
    var prevHandler;
    var handleDelete;
    var searchRaza;

    const [dataApi, setDataApi] = useState([]);
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    if (dataApi.length === 0) {

        axios.get("https://api.thedogapi.com/v1/breeds")
            .then(response => {
                setDataApi(response.data)
            })
            .catch(err => {
                console.error(err);
            });

    }


    if (Array.isArray(dataApi) && dataApi.length) {

        if (items.length === 0) {
            const dogPaginado = dataApi.splice(0, 12);
            console.log(dogPaginado);
            setItems(dogPaginado);
        }

        console.log(items);

        var ITEMS_PER_PAGE = 12;

        nextHandler = () => {

            const totalElementos = dataApi.length;

            const nextPage = currentPage + 1;

            const firstIndex = nextPage * ITEMS_PER_PAGE;

            if (nextPage >= totalElementos / ITEMS_PER_PAGE) return;

            setItems([...dataApi].splice(firstIndex, ITEMS_PER_PAGE))
            setCurrentPage(nextPage);

        };

        prevHandler = () => {

            const prevPage = currentPage - 1;

            if (prevPage < 0) return;

            const firstIndex = prevPage * ITEMS_PER_PAGE;

            setItems([...dataApi].splice(firstIndex, ITEMS_PER_PAGE))
            setCurrentPage(prevPage);

        };

        searchRaza = (e) => {

            setItems([...dataApi].filter((dato) => {
                return dato.name.includes(e.target.value);
            }))

            console.log(items)

            setCurrentPage(0)
        };

        handleDelete = () => {
            window.location.reload(true);
        };

        return (

            <div className='home-color'>

                <div className='home-banner'>
                    <h1 className='h-1'>Dogs</h1>
                </div>

                <main>

                    <div className='home-filters'>

                        <div >
                            <Link to="/form">
                                <button className="bgc-negro">Crea tu perro</button>
                            </Link>
                        </div>

                        <div className='home-page'>

                            <div>
                                <label>Busca tu perro</label>
                                <input placeholder='busca por nombre' name='search' />
                            </div>

                        </div>

                        <select onClick={searchRaza}>

                            <option>Busca por Raza</option>

                            {dataApi && dataApi.map((dog) => {
                                return (
                                    <option>
                                        {dog.name}
                                    </option>
                                )
                            })
                            }

                        </select>

                        <select>

                            <option>Busca por Nombre</option>

                        </select>

                        <button className="bgc-azul">
                            Ordena de A-Z
                        </button>

                        <button className="bgc-azul">
                            Ordena de Z-A
                        </button>

                        <button className="bgc-azul">
                            Ordena por rating Menor-Mayor
                        </button>

                        <button className="bgc-azul">
                            Ordena por rating Mayor-Menor
                        </button>

                        <button onClick={handleDelete} className="bgc-verde">Refresh</button>

                    </div>


                    <div className='home-cards'>

                        {

                            items && items.map((dog) => {


                                return (

                                    <Link to={"/home/" + dog.id}>
                                        <HomeCard img={dog.image.url} nombre={dog.name} />
                                    </Link>

                                )

                            })

                        }

                    </div>

                    <div className='home-paginado'>
                        <button onClick={prevHandler} className="bgc-gris">Prev</button>
                        {currentPage}
                        <button onClick={nextHandler} className="bgc-gris">Next</button>
                    </div>

                </main>

            </div>

        )

    } else {

        return (
            <div>Loading...</div>
        )

    }

};

export default Home;

//https://api.thedogapi.com/v1/breeds
//