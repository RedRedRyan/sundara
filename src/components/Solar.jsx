import React from 'react'
import {processList} from "../../constants/index.js";

const Solar = () => {
    return (
        <section id="solar">
            <p className='mx-auto text-yellow text-5xl font-oswald text-center mb-6'>How it works</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
                {processList.map((process, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4 h-96 hover:bg-yellow">
                        <ol>
                            <li className="text-center">
                                <h1 className="text-4xl font-bold mb-2 text-green">{process.index}</h1>
                                <img
                                    src={process.image}
                                    alt="process"
                                    className="object-cover rounded-md mx-auto mb-12"
                                />
                                <h2 className="text-yellow text-2xl font-semibold mb-6 bg-green w-full">{process.name}</h2>
                                <p className="text-green text-2xl mb-4 font-serif">{process.description}</p>
                            </li>
                        </ol>
                    </div>
                ))}
            </div>

        </section>
    )
}
export default Solar
