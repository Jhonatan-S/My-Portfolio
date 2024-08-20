import { SVGProps } from "react";

export interface PropsSvg extends SVGProps<SVGSVGElement> {
    containerRef?: React.MutableRefObject<null>
}
