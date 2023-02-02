import { Card, Divider, CardBody, CardFooter, Text, Button, Stack, ButtonGroup, Heading, Image } from '@chakra-ui/react';
import { useParams, Link } from 'react-router-dom';


function CardDetail(props) {

    const dataApi = [{ id: "0", price: "450 usd", name: "Hotel Ibera Pilar", city: "Buenos Aires, Pilar", img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/158648688.jpg?k=06fc0b28c9fcf97df6a6fd766b9e340f7e87dbc2236bafb5367ed6d8a202eab4&o=&hp=1" },
    { id: "1", price: "450 usd", name: "Hotel Ibera Cordoba", city: "Cordoba, Capital", img: "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/36/37/363786_v3.jpeg" },
    { id: "2", price: "350 usd", name: "Hotel Ibera Santa Fe", city: "Santa Fe, Rosario", img: "https://www.diarioinclusion.com/wp-content/uploads/hotel-hilton.jpg" },
    { id: "3", price: "250 usd", name: "Hotel Ibera Mendoza", city: "Mendoza, San rafael", img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/327385690.jpg?k=2fc987f508ecf81d2669320ee879d4deb322f551af9bc1d7e063ae125b51c442&o=&hp=1" },
    { id: "4", price: "175 usd", name: "Hotel Ibera Rio Negro", city: "Rio Negro, Bariloche", img: "http://inmobiliare.com/himalaya/wp-content/uploads/2019/05/Hilton-apertura-sector-hotelero-en-m%C3%A9xico-planes-de-desarrollo-inmobiliare_2.jpg" },
    { id: "5", price: "220 usd", name: "Hotel Ibera Mar del Plata", city: "Buenos Aires, Mar del Plata", img: "https://www.tangol.com/Fotos/Hospedaje/20121025.SheratonMardelPlata(1).upd.jpg" },
    { id: "6", price: "399 usd", name: "Hotel Ibera Carilo", city: "Buenos Aires, Carilo", img: "https://s3.amazonaws.com/mean.machine-dev/1663865748046_image%20-%202022-09-22T135544.405.jpg" },
    { id: "7", price: "299 usd", name: "Hotel Ibera Ushuaia", city: "Tierra del fuego, Ushuaia", img: "https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2017-03/hotel-leon-city-express-fachada-noche.jpg" },
    { id: "8", price: "199 usd", name: "Hotel Ibera Chubut", city: "Chubut, Rawson", img: "https://media-cdn.tripadvisor.com/media/photo-s/25/fb/8c/46/hotel-exterior.jpg" },
    { id: "9", price: "120 usd", name: "Hotel Ibera La Pama", city: "La Pama, Ciudad de Santa Rosa", img: "https://www.cronista.com/files/image/307/307126/5ffe2f4705222.jpg" },
    { id: "10", price: "280 usd", name: "Hotel Ibera Misiones", city: "Misiones, Posadas", img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" },
    { id: "11", price: "399 usd", name: "Hotel Ibera Entre Rios", city: "Entre Rios, Parana", img: "Entre Rios, Paraná", img: "https://img.nh-hotels.net/vJEy/PVOD8/original/SP_NH_gran-hotel-provincial_026_571x283-120_0.jpg?output-quality=80&resize=1600:*&background-color=white" },];

    const { id } = useParams();

    //console.log(id);

    return (

        <div>

            <Card maxW='sm'>
                <CardBody>

                    <Image
                        src={dataApi[id].img}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />

                    <div>
                        <Button variant='ghost' colorScheme='blue'>
                            prev
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            next
                        </Button>
                    </div>

                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{dataApi[id].name}</Heading>
                        <Text>
                            En Este Bello Destino Turístico, está El “San Agustín Internacional Hotel” ubicado dentro del pueblo y es totalmente campestre.
                            Es considerado como una alternativa Hotelera única y exclusiva, además de su belleza arquitectónica y paisajística, gracias al concepto con el que fue desarrollado.

                            Este precioso Hotel fue seleccionado por la revista Aló, como uno de los Hoteles paradisíacos de América.
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            {dataApi[id].price}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                        </Button>
                        <Link to={"/home"}>
                            <Button variant='ghost' colorScheme='blue'>
                                Home
                            </Button>
                        </Link>
                    </ButtonGroup>
                </CardFooter>
            </Card>

        </div>
    )

};

export default CardDetail;