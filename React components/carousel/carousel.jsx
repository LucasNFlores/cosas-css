import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function Carousel({
    children: slides,
    autoSlide = false,
    autoSlideInterval = 3000,
}) {

    const [current, setCurrent] = useState(0)

    const prev = () => {
        setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
    }

    const next = () => {
        setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))
    }

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])


    return (
        <div className="w-full h-full overflow-hidden relative">
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translatex(-${current * 100}%)` }} > {/* mover el slide */}
                {slides}
            </div>


            <div className="absolute inset-0 flex justify-end "> {/* Siguiente slide, config de 1 solo boton*/}
                <button onClick={next} className="h-full hover:bg-slate-200/35 transition-all ">
                    <FaChevronRight size={"1rem"} />
                </button>
            </div>

            <div className="absolute bottom-4 right-0 left-0"> {/* Puntos de referencia */}
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div className={`transition-all w-2 h-2 bg-red-500 rounded-full 
                        ${current === i ? "p-1" : "bg-opacity-50"}`} />
                    ))}
                </div>

            </div>
        </div >
    )
}