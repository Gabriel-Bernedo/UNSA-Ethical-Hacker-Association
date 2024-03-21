'use client'
import React from 'react'
import LabCTF from '@/components/ui/panels/LabCTF'
import { Button } from '@material-tailwind/react'
import { Fragment } from 'react'
export default function CTFLab({onLabOpen, onLabClose}) {
  return (
    <div className="gap-4 p-4 justify-center grid lg:grid-cols-3">
      {/* INTRODUCTORY LAB */}
      <LabCTF
          label="Hola CTF"
          flag=""
          onClick={onLabOpen}
          onClose={onLabClose}
      >
          {({flag}) => 
         <Fragment>
           <h1 className="text-semibold text-3xl">
             Bienvenido
           </h1>
           <p className="opacity-70 my-4">
             Formato de las FLAGS que vamos a usar ({flag})
            
           </p>
           
         </Fragment>
          }
      </LabCTF>
      {/* # LAB - HTML */}
      <LabCTF
        label="Bendito seas HTML !!!"
        flag="DEBUGGING_IS_NOT_FUN"
        onClick={onLabOpen}
        onClose={onLabClose}
      >
        { ({flag}) => 
          <Fragment>
            <h1 className='text-semibold text-3xl'>
              Bendito seas HTML !!!
            </h1>
            <script>
              // Como puedes ver, hay información oculta\n 
              de la que te puedes aprovechar,
              ya sea la forma en la que se estructura y se guarda
              la información o funcionalidades de la app, si puedes entenderlo :3
              es el fin de la introduccion , disfruta tu FLAG
              : {flag}
            </script>
            <p className='opacity-70'>
              HTML, el lenguaje que manejan los navegadores para renderizar la información 
              de forma agradable junto con otras tecnologías, como <b>CSS</b> y <b>JS</b>,
              probablemente te preguntas, como ingresar a este codigo, y pues la respuesta
              estubo todo el tiempo bajo tus narices, así es, desde el navegador
              si usas el navegador de una Laptop o una PC, puedes acceder al codigo a traves
              de la combinacion de teclas <b> CTRL + SHIFT + I </b> , o con click izquierdo
              en el componente que quieres revisar e <b> INSPECCIONAR </b> con ello puedes revisar
              lo que una pagina web tiene para ofrecerte <b> A MAS DETALLE </b>, si estas desde movil, 
              tu unica opcion es la resignación ,-,  
            </p>
          </Fragment>
        }
      </LabCTF>
      {/* ENCODING LAB */}
      <LabCTF
        label="¿ ASCII ? Si señor"
        flag="4SC11_1S_3V3RYWH3R3"
        onClick={onLabOpen}
        onClose={onLabClose}
      >
        { ({flag}) => {
          function stringToAscii(str) {
            const chars = str.split('');
            const asciiCodes = chars.map(char => char.charCodeAt(0));
            const asciiString = asciiCodes.join(' ');
            return asciiString;
          }
          return <Fragment>
            <h1 className="text-semibold text-3xl">
              ¿ ASCII ? sí señor
            </h1>
            <p className="opacity-70">
              
              Hola de nuevo, problamente te preguntas que es ASCII, pues como probablemente hayas deducido
              ASCII es un <b>CÓDIGO DE CARACTERES</b> basado en el <b>ALFABETO LATINO</b>, ¿tiene algo de especial? No,
              pero fue lo suficientemente popular en su epoca para que decidieran convertirlo en un estandar
              en telecomunicaciones, y en este caso, para la codificacion de los mensajes de esta pagina web, 
              que, ¿no lo entiendes, pues primero intenta descifrar este mensaje, quieres?
            </p>
            <div className="mx-auto m-4 bg-secondary-2 p-2 text-center text-semibold text-lg rounded-lg text-white">
              {stringToAscii(flag)}
            </div>
          </Fragment>
        }}
      </LabCTF>
      <LabCTF
        label="¿Cesar quién?"
        flag="Oh My Secret"
        onClick={onLabOpen}
        onClose={onLabClose}
      >
        { ({flag}) => 
          <Fragment>
            <h1 className="text-semibold text-3xl">
              SECRET
            </h1>
            <p className="opacity-70 my-4">
              No deberias haber llegado aquí, pero ya que estas, puede aprovechar en buscar mi FLAG :3
            </p>
          </Fragment>
        }
      </LabCTF>
      {/* STEGANOGRAPHY LAB */}
      <LabCTF
        label="Bajo tus narices"
        flag="N0T_ENCRUPT3D_JUST_H1DD3N"
        onClick={onLabOpen}
        onClose={onLabClose}
      >
        { ({flag}) => 
          <Fragment>
            <h1 className="text-semibold text-3xl">
              Bajo tus narices
            </h1>
            <p className="opacity-70 my-4">
              Existe un concepto un tanto interesante relacionado a la proteccion de datos :
              la <b>ESTEGANOGRAFÍA</b> : el camuflaje de informacion en los mensajes, 
              puede ser tanto en <b>IMAGENES</b>, <b>AUDIOS</b>, <b>TEXTO</b>, etc y pues
              comparandolo con la <b>CRIPTOGRAFÍA</b> no puedes descifrar un mensaje si 
              <b> NO SABES QUE EXISTE </b>, ¿Crees poder encontrarlo?
            </p>
          </Fragment>
        }
      </LabCTF>
      {/* EXTRA LAB */}
      <LabCTF
        label="SECRET"
        flag="Oh My Secret"
        onClick={onLabOpen}
        onClose={onLabClose}
      >
        { ({flag}) => 
          <Fragment>
            <h1 className="text-semibold text-3xl">
              SECRET
            </h1>
            <p className="opacity-70 my-4">
              No deberias haber llegado aquí, pero ya que estas, puede aprovechar en buscar mi FLAG :3
            </p>
          </Fragment>
        }
      </LabCTF>
    </div>
  )
}
