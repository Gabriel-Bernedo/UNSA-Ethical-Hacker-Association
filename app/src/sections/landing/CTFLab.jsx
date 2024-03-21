'use client'
import React from 'react'
import LabCTF from '@/components/ui/panels/LabCTF'
import { Button } from '@material-tailwind/react'
import { Fragment } from 'react'
import Image from 'next/image'
export default function CTFLab({onLabOpen, onLabClose}) {
  return (
    <div className="gap-4 p-4 justify-center grid lg:grid-cols-3">
      {/* INTRODUCTORY LAB */}
      <LabCTF
          label="Hola CTF"
          flag=""
          onClick={onLabOpen}
          onClose={onLabClose}
          onSuccess={ () => {
            alert("Muy bien, ya le estas agarrando el ritmo")
            onLabClose()
          }}
          onFailure={() => {
            alert("Revise el FORMATO de la FLAG")
          }}
      >
          {({flag}) => 
         <Fragment>
           <h1 className="text-semibold text-3xl">
             Hola CTF
           </h1>
           <p className="opacity-70 text-sm">
              Como pueden notar, una de nuestras intenciones de UEHA es participar en la mayor cantidad de CTF{"'"}s posible,
              para ello, es necesario tener algo de experiencia en este campo, de este modo hemos programado
              nuestra propia <b>CTF</b>, este evento esta adaptado para que cualquier persona pueda resolverlo desde la comodidad de su <b>LAPTOP</b>, 
              o almenos, que sea capaz de averiguarlo terminando la mayoria de estos <b>&quot;LABORATORIOS&quot;</b>. <br />
              Esperamos que este evento sea de su agrado <br />
              Con respecto al formato de las FLAGS que vamos a usar tenemos el siguiente: <br />
              ✅ SECRET_{"{FLAG}"}<br />
              ❌ (SECRET = {"{FLAG}"}) <br />
              ❌ KEY_(FLAG) <br />
              Con ello establecido, le encargamos la flag de este lab, este atento :3 <br />
           </p>
           <div className="bg-secondary-2 rounded-lg p-4 m-4">
            ({flag})
           </div>
           
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
            <h1 className='text-semibold text-3xl bg-primary-1 p-2 rounded-lg'>
              Bendito seas HTML !!!
            </h1>
            <script>
              var text = &quot;Como puedes ver, hay información oculta 
              de la que te puedes aprovechar,
              ya sea la forma en la que se estructura y se guarda
              la información o funcionalidades de la app, si puedes entenderlo :3
              es el fin de la introduccion , disfruta tu FLAG&quot;
              const flag = &quot;{flag}&quot;
            </script>
            <p className='opacity-70 my-4'>
              HTML, el lenguaje que manejan los navegadores para renderizar la información 
              de forma agradable junto con otras tecnologías, como <b>CSS</b> y <b>JS</b>,
              probablemente te preguntas, como ingresar a este codigo, y pues la respuesta
              estuvo todo el tiempo bajo tus narices, así es, desde el navegador
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
        flag="CESAR_IS_AMAZING"
        onClick={onLabOpen}
        onClose={onLabClose}
      >
        { ({flag}) => {
          const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          function cifrarCesar(texto, desplazamiento) {
            const caracteres = texto.split('');          
            const textoCifrado = [];
            for (let i = 0; i < caracteres.length; i++) {
              const indiceCaracter = alfabeto.indexOf(caracteres[i]);
              const indiceCifrado = (indiceCaracter + desplazamiento) % alfabeto.length;
              textoCifrado.push(alfabeto[indiceCifrado]);
            }
            return textoCifrado.join('');
          }
          const desplazamiento = 7;
          
          const textoCifrado = cifrarCesar(flag, desplazamiento);
          return <Fragment>
            <h1 className="text-semibold text-3xl">
              ¿Cesar quién?
            </h1>
            <p className="opacity-70 my-4">
              Pues si no sabes quién es, no te preocupes, muchos se llaman así,
              sin embargo lo que debería importar es la maravilla de cifrado que 
              invento: <b>CIFRADO CESAR</b>, mover la posicion de las palabras de 
              acuerdo a un <b>ALFABETO</b>, !qué ingenio¡, aunque tiene sus fallas <br />
              Base de otros cifrados como el <b>CIFRADO VIGENERE</b> y precursor en la seguridad
              de los mensajes, pues ¿qué mas sencillo que usar este cifrado en tus mensajes?, bueno,
              tampoco demasiado sencillo, ¿no me crees? intenta descifrar este mensaje <br />
            </p>
            <div className="bg-secondary-2 rounded-lg p-4 m-4 text-center text-lg">
              {textoCifrado}
            </div>
          </Fragment>
        }}
      </LabCTF>
      {/* STEGANOGRAPHY LAB */}
      <LabCTF
        label="Bajo tus narices"
        flag="N0T_ENCRUPT3D_JUST_H1DD3N"
        onClick={onLabOpen}
        onClose={onLabClose}
      >
        { ({flag}) => {
          
          return <Fragment>
            <h1 className="text-semibold text-3xl">
              Bajo tus narices
            </h1>
            <p className="opacity-70 my-4">
              Existe un concepto un tanto interesante relacionado a la proteccion de datos :
              la <b>ESTEGANOGRAFÍA</b> : el camuflaje de informacion en los mensajes, 
              pueden ser <b>IMAGENES</b>, <b>AUDIOS</b> y <b>TEXTO</b> que <b>TODO EL MUNDO PODRIA ACCEDER</b> y pues
              comparandolo con la <b>CRIPTOGRAFÍA</b> no puedes descifrar un mensaje si 
              <b> NO SABES QUE EXISTE </b>, <b> NO SABES DONDE ESTA ESCONDIDO </b> o <b> NO SABES COMO ESTA ESCONDIDO</b>, 
              ¿Crees poder encontrarlo?
            </p>
            <div className="flex justify-center items-center">
              <Image src="/svg/question-svg.svg" width={80} height={80} alt='' className='bg-secondary-2 rounded-full center'/>
            </div>
          </Fragment>
        }}
      </LabCTF>
      {/* EXTRA LAB */}
      <LabCTF
        label="¿SECRETO O DESCUIDO?"
        flag="AUXILIOD"
        onClick={onLabOpen}
        onClose={onLabClose}
        onSuccess={()=>{
          alert("Woow!!!, muchas gracias, encontraste mi FLAG\n te he dejado algo en la consola, diviertete!")
          console.log(`Para ingresar al grupo de whatsapp de los interesados en el grupo de ciberseguridad UEHA, 
          se puede usar el siguiente enlace:  https://chat.whatsapp.com/Hmktq3HILhx0xK0xG40LqO`)
          onLabClose()
        }}
        onFailure={({input})=>{
          switch(input){
            case "HBEPSPVK":
              alert("Ummmm.... me suena de algo... ¿ Un mensaje ?")
              break
            case "SECRET_{HBEPSPVK}":
              alert("Noooo... creo que nos estamos saliendo del tema")
              break
            case "AUXILIOD":
              alert("Ummmm.... me suena de algo... ¿ Como que algo le falta, no?")
              break
            default:
              alert("Realmente nada que ver")
          }
        }}
      >
        { ({flag}) => {
          
          return <Fragment>
            <h1 className="text-semibold text-3xl">
              ¿Secreto o Descuido?
            </h1>
            <p className="opacity-70 my-4">
              No deberias haber llegado aquí, pero ya que estas, puede aprovechar en buscar mi FLAG :3,
              la escondi hace mucho tiempo, tanto que creo que se mezclo con el entorno, no deberia estar muy lejos
              por donde entraste, quiza... <br />
              Estaría muy agradecido si me ayudas a recuperarla, Buena Suerte!!!
            </p>
          </Fragment>
        }
        }
      </LabCTF>
    </div>
  )
}
