

/*function useResource(){
    const rdata = [rname, type, href, desc, img] = 
        [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]

    const StorageKey = "RESOURCES"
    function addResource(){
        const [cname, ctype, chref, cdesc, cimg] = rdata.map(function(e){
            return e.current
        })

        indexedDB.open(StorageKey, 1)
        

    }

    return {rname, type, href, desc, img}
}*/

import UploadResource from '@/sections/resources/admin/UploadResource';

export default function page() {
    //const {rname, type, href, desc, img} = useResource()
 /*
    window.onload = function() {
        let storedData = localStorage.getItem('datosS');
        if (storedData) {
            storedData = JSON.parse(storedData);
            const firstResource = storedData.Recursos[0]; //Si solo quieres mostrar el primer recurso guardado
            document.getElementById('name').value = firstResource.name || '';
            document.getElementById('tipo').value = firstResource.tipo || '';
            document.getElementById('enlace').value = firstResource.enlace || '';
            document.getElementById('desc').value = firstResource.desc || '';
            document.getElementById('img').value = firstResource.img || '';
        }
    };
    */
    return (
    <main class="w-full h-screen grid grid-cols-2">
        <div class="h-screen lg:block bg-anime-cover-2 bg-cover">
            {/*<img src="/img.webp" alt="Placeholder Image" class="object-cover w-full h-[895px]"/>*/}
        </div>
        {/* <!-- Login --> */}
        <UploadResource/>
    </main>
    )
}