import { AiOutlineCalendar, AiFillGithub } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { useState } from "react";

const Card = (props) => {

    console.log('isOpen:', props.isOpen);
    console.log('setIsOpen:', props.setIsOpen);

    if(props.isOpen){
        return(
            props.ComponentModal
        )
    }

    return (
        <>
            <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img src={props.img} alt="logo" className='h-48 w-full object-cover md:h-full md:w-48 p-4' />
                    </div>

                    <div className='px-4 pt-3 pb-5'>
                        <h2 className='font-semibold text-md mb-1'>{props.name}</h2>
                        <div className='flex mb-2'>
                            <AiOutlineCalendar className='mr-1 text-slate-600 text-md' />
                            <p className='text-sm'>{props.startDate} - {props.endDate}</p>
                        </div>
                        <p className='text-sm mb-3'>{props.description}</p>
                        <div className='flex gap-3'>
                            <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" type="button" onClick={()=>props.setIsOpen(true)}
                                className='text-sm bg-green-500 py-1 px-3 rounded-full text-white font-light hover:bg-green-600 flex'>
                                <FaBookReader className="mr-1 mt-0.5" />
                                Leer mas
                            </button>
                            <a href={props.link} target="_blank" className='text-sm bg-green-500 py-1 px-3 rounded-full text-white font-light hover:bg-green-600 flex'>
                                <AiFillGithub className="mr-1 mt-0.5" />
                                Ver Proyecto
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
