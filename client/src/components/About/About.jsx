import { Image, Box, Text, Stack } from "@chakra-ui/react";



function About() {




    return (

        <Box>

            <Box alignItems="center" padding="25px">

                <Stack alignItems="center">

                    <Image
                        height="500px"
                        width="1300px"
                        src='https://rtlimages.apple.com/cmc/dieter/store/16_9/R468.png?resize=672:378&output-format=jpg&output-quality=85&interpolation=progressive-bicubic'
                        alt='Tienda Celulares'
                    />

                </Stack>

                <Stack alignItems="center" textAlign="center">

                    <Text fontSize="40px">Iphone Store</Text>
                    <Text fontSize="25px">Think Different</Text>
                    <Text fontSize="20px">
                        iPhone es una línea de teléfonos inteligentes de alta gama diseñada y
                        comercializada por Apple Inc. Ejecuta el sistema operativo móvil iOS,
                        conocido hasta mediados de 2010 como "iPhone OS".
                    </Text>
                    <Text fontSize="20px">
                        El iPhone dispone de cámara de fotos y un reproductor de música
                        (equivalente al del iPod), además de software para enviar y
                        recibir mensajes de texto y de voz. También ofrece servicios de Internet,
                        como enviar, recibir y leer correo electrónico, cargar páginas web y
                        conectividad por Wi-Fi. La primera generación de teléfonos eran GSM cuatribanda
                        con la tecnología EDGE; la segunda generación incluía UMTS con HSDPA.;
                        la sexta generación ya incluía 4G LTE. La decimotercera generación comenzó a
                        incluir soporte para redes 5G.
                    </Text>

                </Stack>

            </Box>

        </Box>

    )

};

export default About;