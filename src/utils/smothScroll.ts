import Lenis from 'lenis'

export const smothScroll = () => {
    const lenis = new Lenis()

    function raf(time: number) {
        lenis.raf(time);

        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

}