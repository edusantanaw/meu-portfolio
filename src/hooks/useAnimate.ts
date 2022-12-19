import React, { useEffect, useState } from "react"


export function useAnimate(ref: React.MutableRefObject<HTMLSpanElement | null>) {
    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "-30px",
            threshold: 1.0,
        }

        const observer = new IntersectionObserver((entry) => {
            const t = entry[0]
            if (t.isIntersecting) {
                setShow(true)
            }

        }, options)
        if (ref.current)
            observer.observe(ref.current)
    }, [])

    return { show }
}