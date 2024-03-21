import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

const data = [
  {
    label: "Bienvenida",
    value: "bienvenida",
    desc: `Bienvenidos a su reto CTF, en el cual deberán resolver una serie de acertijos y desafíos para poder avanzar. ¡Buena suerte!`,
    img: <img src="./meme.svg" alt="CTF-0" className=" w-[200px] pt-5 block m-auto"/>
  },
  {
    label: "Pista 1",
    value: "paso1",
    desc: `¿Qué es lo que esconde secretos en su estructura, revela pistas en su contenido y guarda la llave para entender su funcionamiento? ¡Descifra el enigma y desvela sus misterios!`,
    img: <img src="./pista1.svg" alt="CTF-1" className=" w-[200px] pt-5 block m-auto"/>,
  },
  {
    label: "Pista 2",
    value: "paso2",
    desc: `“Es más fácil encontrar hombres dispuestos a morir, que encontrar a los que están dispuestos a soportar el dolor con paciencia.” - Un hombre de semana`,
    img: <img src="./paso2.webp" alt="CTF-2" className=" w-[200px] pt-5 block m-auto"/>,
  },
  {   
    label: "Pista 3",
    value: "paso3",
    desc: `En la senda de la sabiduría, la clave se esconde en las letras del pasado. Utiliza la palabra anterior como tu guía y desentraña los secretos visuales que se aguardan. ¡Deja que el poder de las palabras te conduzca hacia la revelación de lo oculto!`,
    img: <img src="./paso3.webp" alt="CTF-3" className=" w-[200px] pt-5 block m-auto"/>,
  },
  {
    label: "Fin",
    value: "fin",
    desc: `Felicitaciones, has completado el reto CTF. ¡Gracias por participar!, envia tu respuesta al grupo de WhatsApp para recibir tu premio.`,
    img: <img src="./feli.gif" alt="CTF-3" className=" w-[200px] pt-5 block m-auto"/>,
  },
];

export default function CTF() {
  return (
      <Tabs value="html" className="max-w-[40rem]">
        <TabsHeader
            className="bg-red-800"
            indicatorProps={{
            className: "bg-gray-900/10 shadow-none",
            }}
        >
          {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
              {label}
          </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
            {data.map(({ value, desc, img, flag }) => (
            <TabPanel key={value} value={value} className="text-black font-bold text-justify">
                {desc}
                {img}
            </TabPanel>
            ))}
        </TabsBody>
      </Tabs>
  );
}