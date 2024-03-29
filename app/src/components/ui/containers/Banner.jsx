import React, { Fragment } from 'react'
import UploadResource from '@/sections/resources/admin/UploadResource';
import OpenResource from '../buttons/OpenResource';
import DeleteResource from '../buttons/DeleteResource';
import MyPopup from '../Popups/MyPopup';
import DeletePanel from '../panels/DeletePanel';
export default function page() {
   
    return (
        <div className="flex flex-wrap mt-10 justify-center">
            <MyPopup
                trigger={OpenResource}
            >
                {() => <UploadResource />}
            </MyPopup>
            <MyPopup
                trigger={DeleteResource}
                className={"border-solid border-4 border-gray-500 rounded-lg shadow relative max-w-sm bg-white"}
            >
                {({close}) => <DeletePanel onReject={close}/>}
            </MyPopup>            
        </div> 
    )
  }