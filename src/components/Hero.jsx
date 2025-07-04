import React from 'react'
import hero from "../assets/hero.jpg"; 

const Hero = () => {
return (
    <section className="relative h-[70vh] md:h-[90vh] bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${hero})` }}>
        <div className="absolute inset-0 bg-gray-950 opacity-60 z-0" />
        <div className="relative z-10 px-4 sm:px-8 md:pl-10 max-w-full md:max-w-2xl text-white w-full">
            <p className="uppercase text-base sm:text-lg tracking-widest text-gray-300">Create your own collection</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight capitalize">
                Elevate Your Style with <span className="text-indigo-700">FabrikFit</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-indigo-100">
                Discover premium streetwear & fashion-forward collections built for confidence and comfort.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-indigo-700 text-white font-bold px-6 py-3 cursor-pointer rounded-full hover:bg-indigo-800 transition">
                    Shop Now
                </button>
                <button className="border border-white px-6 py-3 rounded-full cursor-pointer hover:bg-white hover:text-indigo-700 hover:font-bold transition">
                    Explore Collections
                </button>
            </div>
        </div>
    </section>
)
}

export default Hero