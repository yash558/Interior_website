import React, { useState, useEffect } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { SliderData } from './Slider-data'
import './Slider.scss'
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = SliderData.length;
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 7000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    }
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    }

    const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
    }
    useEffect(() => {
        setCurrentSlide(0);
    }, [])
    useEffect(() => {
        if (autoScroll) {
            auto();
        }

        return () => clearInterval(slideInterval)
    }, [currentSlide]);

    return (
        <div className="slider">
            <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
            <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                        {index === currentSlide && (
                            <>
                                < img src={slide.image} alt="slide" />
                            </>
                        )}
                    </div>

                )
            })}
        </div>
    )
}

export default Slider