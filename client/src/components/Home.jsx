import "./Home.css";
import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Button, Stack, Input, InputGroup, InputLeftAddon, Select } from '@chakra-ui/react'

function Home(props) {

    const dataApi = [{ id: "0", rating: "4", name: "Hotel Ibera Pilar", city: "Buenos Aires, Pilar", img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/158648688.jpg?k=06fc0b28c9fcf97df6a6fd766b9e340f7e87dbc2236bafb5367ed6d8a202eab4&o=&hp=1" },
    { id: "1", rating: "4", name: "Hotel Ibera Cordoba", city: "Cordoba, Capital", img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/36/37/363786_v3.jpeg" },
    { id: "2", rating: "4.5", name: "Hotel Ibera Santa Fe", city: "Santa Fe, Rosario", img: "https://www.diarioinclusion.com/wp-content/uploads/hotel-hilton.jpg" },
    { id: "3", rating: "3.5", name: "Hotel Ibera Mendoza", city: "Mendoza, San rafael", img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/327385690.jpg?k=2fc987f508ecf81d2669320ee879d4deb322f551af9bc1d7e063ae125b51c442&o=&hp=1" },
    { id: "4", rating: "5", name: "Hotel Ibera Rio Negro", city: "Rio Negro, Bariloche", img: "http://inmobiliare.com/himalaya/wp-content/uploads/2019/05/Hilton-apertura-sector-hotelero-en-m%C3%A9xico-planes-de-desarrollo-inmobiliare_2.jpg" },
    { id: "5", rating: "4", name: "Hotel Ibera Mar del Plata", city: "Buenos Aires, Mar del Plata", img: "https://www.tangol.com/Fotos/Hospedaje/20121025.SheratonMardelPlata(1).upd.jpg" },
    { id: "6", rating: "4.5", name: "Hotel Ibera Carilo", city: "Buenos Aires, Carilo", img: "https://s3.amazonaws.com/mean.machine-dev/1663865748046_image%20-%202022-09-22T135544.405.jpg" },
    { id: "7", rating: "5", name: "Hotel Ibera Ushuaia", city: "Tierra del fuego, Ushuaia", img: "https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2017-03/hotel-leon-city-express-fachada-noche.jpg" },
    { id: "8", rating: "3.5", name: "Hotel Ibera Chubut", city: "Chubut, Rawson", img: "https://media-cdn.tripadvisor.com/media/photo-s/25/fb/8c/46/hotel-exterior.jpg" },
    { id: "9", rating: "4", name: "Hotel Ibera La Pama", city: "La Pama, Ciudad de Santa Rosa", img: "https://www.cronista.com/files/image/307/307126/5ffe2f4705222.jpg" },
    { id: "10", rating: "4.5", name: "Hotel Ibera Misiones", city: "Misiones, Posadas", img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" },
    { id: "11", rating: "5", name: "Hotel Ibera Entre Rios", city: "Entre Rios, Parana", img: "Entre Rios, Paraná", img: "https://img.nh-hotels.net/vJEy/PVOD8/original/SP_NH_gran-hotel-provincial_026_571x283-120_0.jpg?output-quality=80&resize=1600:*&background-color=white" },];

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

                                <Link to={"/home/" + hotel.id}>
                                    <HomeCard img={hotel.img} name={hotel.name}
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

export default Home;