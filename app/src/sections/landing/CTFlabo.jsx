import React, {Fragment} from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import LogoIcon from "@/components/icons/LogoIcon";
import Image from "next/image";


export default function CTF({flag}) {

  function stringToAscii(str) {
    const chars = str.split('');
    const asciiCodes = chars.map(char => char.charCodeAt(0));
    const asciiString = asciiCodes.join(' ');
    return asciiString;
  }

  const alfabeto = "0aAb1BcCd2DdeE3FfgGHhIiJ4jKkL5lmMNn6OopP7qQRrsS8TtuUVv9WwXx_YyZ{z}"; 
  // Ejemplo de uso
  const clave = "Gr4c14sP0rP4rT1ciPaR";

  function codificarVigenere(texto, clave, alfabeto) {
    // Convertir la clave a mayúsculas
  
    // Convertir el texto a un array de caracteres
    const caracteres = texto.split('');
  
    // Crear un array para almacenar el texto codificado
    const textoCodificado = [];
  
    // Recorrer cada caracter del texto
    for (let i = 0; i < caracteres.length; i++) {
      // Obtener el índice del caracter actual en el alfabeto
      const indiceCaracter = alfabeto.indexOf(caracteres[i]);
  
      // Obtener el índice de la letra actual de la clave en el alfabeto
      const indiceClave = alfabeto.indexOf(clave[i % clave.length]);
  
      // Sumar los índices y obtener el módulo 26 para obtener el índice del caracter codificado
      const indiceCodificado = (indiceCaracter + indiceClave) % alfabeto.length;
  
      // Agregar el caracter codificado al array
      textoCodificado.push(alfabeto[indiceCodificado]);
    }
  
    // Convertir el array de caracteres en un string
    return textoCodificado.join('');
  }


  const data = [
    {
      label: "Bienvenida",
      value: "bienvenida",
      desc: `Bienvenidos a nuestro reto CTF, hemos decidido que la ambientación de este evento estara en torno a 
      Web Scrapping, Encoding y Esteganografía, la FLAG de cada participante es personalizada, así que no se vale copiar
      y es lo suficientemente grande para evitar que se pueda ganar por fuerza bruta,
      Con todo ello, le damos la bienvenida a este evento, buena suerte, y gracias por participar
      `,
      content: <Fragment>
        <div className="hidden">
          Empezaste A Buscar Por Aquí ?? no estas listo :
          &quot;Revisar las Letras Faltantes, Asegurar Y Hacer Un Zumbido Sonoro Bajo Junto A La Puerta Kobold&quot;
          Es lo que te diria, pero al final se que te da igual .-. 
          Con cariño : - Kintsugi Y.
        </div>
        <Image src="/logos/logonewsteg.svg" alt="CTF-0" width={120} height={120} className=" w-[200px] pt-5 block m-auto"/>
      </Fragment>
    },
    {
      label: "Paso 1",
      value: "paso1",
      desc: `¿Qué es lo que esconde secretos en su estructura, revela Pasos en su contenido y guarda la llave para entender su funcionamiento? ¡Descifra el enigma y desvela sus misterios!`,
      content: <Fragment>
        <div className="hidden">
        TZN = PtOpkkluMpukTlWslhzl;
        RLF = svvrMvyMpss : 01 01 01
        </div>
        <Image src="/pista1.svg" alt="CTF-1"  width={120} height={120} className=" rounded-full w-[200px] pt-5 block m-auto"/>
      </Fragment>,
    },
    {
      label: "Paso 2",
      value: "paso2",
      desc: `“Es más fácil encontrar hombres dispuestos a morir, que encontrar a los que están dispuestos a soportar el dolor con paciencia.”`,
      content: <Fragment>
        <div className="hidden">
          No te pienso ayudarte a descIfrArlo, busca en google ._.
        </div>
        <Image src="/paso2.webp" alt="CTF-2" width={120} height={120}  className=" w-[200px] pt-5 block m-auto"/>
      </Fragment>,
    },
    {   
      label: "Paso 3",
      value: "paso3",
      desc: `En la senda de la sabiduría, la clave se esconde en las letras del pasado. Utiliza la palabra anterior como tu guía y desentraña los secretos visuales que se aguardan. ¡Deja que el poder de las palabras te conduzca hacia la revelación de lo oculto!`,
      content: <Fragment>
        <div className="hidden">
          A veces pienso que en un evento, lo mas impactante es la bienvenida, ¿no crees?, pues quiza tengas razon
        </div>
        <Image src="/meme.svg" alt="CTF-3" width={120} height={120} className=" w-[200px] pt-5 block m-auto p-2 bg-secondary-2 my-4 rounded-md"/>
      </Fragment>,
    },
    {
      label: "Fin",
      value: "fin",
      desc: `Una vez que hayas encontrado el flag no te olvides de subirlo al grupo de whatsapp para declararte como ganador definitivo, esperamos que te diviertas.
      He aqui la clave de generación de tu FLAG :
      `,
      content: <Fragment>
        <div className="hidden">
            ¿Queeeee? ¿ Como que lo CIFRASTE con VIGENERE ? 
        </div>
        <Image src="/feli.gif" alt="CTF-3"  width={120} height={120} className=" w-[200px] pt-5 block m-auto"/>
        <div className="rounded-lg bg-secondary-2 text-center text-lg p-2 m-4">
          {stringToAscii(codificarVigenere(flag,clave,alfabeto))}
        </div>
      </Fragment>,
    },
  ];

  return (
      
      <Tabs value="html" className="max-w-[40rem]">
        <TabsHeader
            className="bg-primary-1"
            indicatorProps={{
            className: "bg-gray-100/10 shadow-none",
            }}
        >
          {data.map(({ label, value }) => (
          <Tab key={value} value={value} className="text-white">
              {label}
          </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
            {data.map(({ value, desc, content }) => (
            <TabPanel key={value} value={value} className="text-white font-bold text-justify">
                <p className="p-2 bg-primary-2 rounded-lg text-xs">
                  {desc}
                </p>
                {content}
            </TabPanel>
            ))}
        </TabsBody>
      </Tabs>
  );
}