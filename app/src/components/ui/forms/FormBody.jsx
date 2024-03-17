import React from 'react'
import Popup from 'reactjs-popup'

export default function FormBody({close}) {
  return (
    <div className="font-[12px] bg-blue-800">
        <button className="cursor-pointer absolute block py-[2px] px-[5px] leading-5 -right-[10px] -top-[10px] font-[24px] bg-black border-radius-[18px] border-[1px] border-solid border-black" onClick={close}>
          &times;
        </button>
        <div className="w-full border-bottom-[1px] border-gray-700 border-solid"> Modal Title </div>
        <div className="w-full py-[10px] px-[5px]">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="w-full m-auto text-center px-[5px] py-[10px]">
          <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            nested
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
  )
}
