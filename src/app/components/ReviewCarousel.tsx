'use client'
import ReviewCard from "./cards/ReviewCard";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";
import Autoplay from "embla-carousel-autoplay";
import React, { useCallback, useEffect, useState } from "react";
import styles from "../styles/carousel.module.css";

interface ContextValue {
    embla: EmblaCarouselType | undefined;
    selectedIndex: number;
}

interface CarouselProps {
    className?: string;
    children: React.ReactNode;
}

export const CarouselContext = React.createContext<ContextValue>({
    embla: undefined,
    selectedIndex: -1,
})


const ReviewCarousel: React.FC<CarouselProps> = ({ className, children }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [viewportRef, emblaApi] = useEmblaCarousel({
        loop:true,
        align: "center",
        skipSnaps: false
    }, [ClassNames(), Autoplay()])

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect])

    return (

        <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex}}>
            <div ref={viewportRef} className={`${styles.viewport} w-full overflow-hidden pt-3.5 md:pt-0.5`}>
                <div className={`${styles.container} flex gap-3`}>
                    {children}
                </div>
            </div>
        </CarouselContext.Provider>
    )
}

export default ReviewCarousel;