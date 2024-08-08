
interface getDimensionProps {
    width?: boolean
    height?: boolean
}

export const getDimension  = ({width, height}: getDimensionProps): number  => {

    const widthWindow = window.innerWidth;
    const heightWindow = window.innerWidth;

    if(width) {
        return widthWindow

    }else if(height) {

        return heightWindow
    }

    return 0
}