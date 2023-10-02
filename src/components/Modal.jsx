

const Modal = (props) => {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center py-8 px-24">
                <div className="bg-white w-full p-5 rounded flex flex-col justify-center items-center gap-5">
                    <div className="">
                        {/* <!-- Modal header --> */}
                        <div className="w-full flex items-start justify-between p-4 border-b rounded-t ">
                            <h3 className="text-xl font-semibold text-black">{props.title.toUpperCase()}</h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                                onClick={() => props.setOpen(false)}
                            >
                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="p-6 space-y-6">
                           
                            <p className="text-base leading-relaxed text-gray-500">
                                {props.Paragraph1}
                            </p>
                            <p className="text-base leading-relaxed text-gray-500">
                                {props.Paragraph2}
                            </p>
                            <p className="text-base leading-relaxed text-gray-500">
                                {props.Paragraph3}
                            </p>

                            <h1 className="text-lg overline decoration-green-500 font-Oswald mb-4">TECNOLOGIAS USADAS</h1>
                            <div className="flex flex-wrap gap-5 mb-5">
                                {props.tecnologis.map((Element) => {
                                    return (
                                        <div>
                                            <Element.icon className="text-3xl ml-3 text-slate-600" />
                                            <p className="ml-3 text-xs font-mono">{Element.name}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <a href={props.link} target="_blank" className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Link del Proyecto</a>
                            <button onClick={() => props.setOpen(false)} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Modal
