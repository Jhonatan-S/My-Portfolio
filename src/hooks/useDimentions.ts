"use client"

import { useState, useEffect } from "react"

export const useDimentios = () => {

    const [dimensions, setDimensions] = useState({widthWindow: 0, heightWindow: 0})

    const updateDimension = () => {

        const {innerWidth, innerHeight} = window;

        setDimensions({widthWindow: innerHeight, heightWindow: innerHeight})
    }

    useEffect(()=> {

        updateDimension();

        window.addEventListener("resize", updateDimension)

        return () => window.removeEventListener("resize", updateDimension)

    }, [])
  
    return dimensions
}
