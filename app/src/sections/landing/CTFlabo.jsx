import React, {Fragment} from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import LogoIcon from "@/components/icons/LogoIcon";
const data = [
  {
    label: "Bienvenida",
    value: "bienvenida",
    desc: `Bienvenidos a su reto CTF, en el cual deberán resolver una serie de acertijos y desafíos para poder avanzar. ¡Buena suerte!`,
    content: <Fragment>
      <div className="hidden">
        Empezaste A Buscar Por Aquí ?? no estas listo :
        &quot;Revisar las Letras Faltantes, Asegurar Y Hacer Un Zumbido Sonoro Bajo Junto A La Puerta Kobold&quot;
        Es lo que te diria, pero al final se que te da igual .-. 
        Con cariño : - Kintsugi Y.
      </div>
      <img src="./logos/logonewsteg.svg" alt="CTF-0" className=" w-[200px] pt-5 block m-auto"/>
    </Fragment>
  },
  {
    label: "Paso 1",
    value: "paso1",
    desc: `¿Qué es lo que esconde secretos en su estructura, revela Pasos en su contenido y guarda la llave para entender su funcionamiento? ¡Descifra el enigma y desvela sus misterios!`,
    content: <Fragment>
      <div className="hidden">
        TZN = PtOpkkluMpukTlWslhzl;
        RLF = zjhmmvskpunHbavMpss;
      </div>
      <img src="./pista1.svg" alt="CTF-1" className=" rounded-full w-[200px] pt-5 block m-auto"/>
    </Fragment>,
  },
  {
    label: "Paso 2",
    value: "paso2",
    desc: `“Es más fácil encontrar hombres dispuestos a morir, que encontrar a los que están dispuestos a soportar el dolor con paciencia.”`,
    content: <Fragment>
      <div className="hidden">
        No te pienso dar mas que eso busca en Google ._.
      </div>
      <img src="./paso2.webp" alt="CTF-2" className=" w-[200px] pt-5 block m-auto"/>
    </Fragment>,
  },
  {   
    label: "Paso 3",
    value: "paso3",
    desc: `En la senda de la sabiduría, la clave se esconde en las letras del pasado. Utiliza la palabra anterior como tu guía y desentraña los secretos visuales que se aguardan. ¡Deja que el poder de las palabras te conduzca hacia la revelación de lo oculto!`,
    content: <img src="./paso3.webp" alt="CTF-3" className=" w-[200px] pt-5 block m-auto"/>,
  },
  {
    label: "Fin",
    value: "fin",
    desc: `Felicitaciones, has completado el reto CTF. ¡Gracias por participar!, envia tu respuesta al grupo de WhatsApp para recibir tu premio.`,
    content: <img src="./feli.gif" alt="CTF-3" className=" w-[200px] pt-5 block m-auto"/>,
  },
];

export default function CTF() {
  return (
      <Tabs value="html" className="max-w-[40rem]">
        <TabsHeader
            className="bg-gray-400"
            indicatorProps={{
            className: "bg-gray-100/10 shadow-none",
            }}
        >
          {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
              {label}
          </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
            {data.map(({ value, desc, content }) => (
            <TabPanel key={value} value={value} className="text-white font-bold text-justify">
                <p className="p-2 bg-primary-2 rounded-lg">
                  {desc}
                </p>
                {content}
            </TabPanel>
            ))}
        </TabsBody>
      </Tabs>
  );
}